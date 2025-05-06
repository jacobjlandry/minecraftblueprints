import type { Grid } from '../types/minecraft';

export interface SavedMap {
  id: string;
  name: string;
  grid: Grid;
  createdAt: number;
  updatedAt: number;
}

export class MapStorage {
  private dbName = 'minecraft-blueprint-db';
  private storeName = 'maps';
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDatabase();
  }

  private initDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => {
        reject(new Error('Failed to open database'));
      };

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: 'id' });
          store.createIndex('name', 'name', { unique: false });
          store.createIndex('createdAt', 'createdAt', { unique: false });
          store.createIndex('updatedAt', 'updatedAt', { unique: false });
        }
      };
    });
  }

  private async ensureConnection(): Promise<void> {
    if (!this.db) {
      await this.initDatabase();
    }
  }

  async saveMap(name: string, grid: Grid): Promise<SavedMap> {
    await this.ensureConnection();

    const map: SavedMap = {
      id: crypto.randomUUID(),
      name,
      grid,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(map);

      request.onsuccess = () => resolve(map);
      request.onerror = () => reject(new Error('Failed to save map'));
    });
  }

  async updateMap(id: string, name: string, grid: Grid): Promise<SavedMap> {
    await this.ensureConnection();

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const getRequest = store.get(id);

      getRequest.onsuccess = () => {
        const existingMap = getRequest.result;
        if (!existingMap) {
          reject(new Error('Map not found'));
          return;
        }

        const updatedMap: SavedMap = {
          ...existingMap,
          name,
          grid,
          updatedAt: Date.now()
        };

        const updateRequest = store.put(updatedMap);
        updateRequest.onsuccess = () => resolve(updatedMap);
        updateRequest.onerror = () => reject(new Error('Failed to update map'));
      };

      getRequest.onerror = () => reject(new Error('Failed to get map'));
    });
  }

  async getMap(id: string): Promise<SavedMap | null> {
    await this.ensureConnection();

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(id);

      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(new Error('Failed to get map'));
    });
  }

  async getAllMaps(): Promise<SavedMap[]> {
    await this.ensureConnection();

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error('Failed to get maps'));
    });
  }

  async deleteMap(id: string): Promise<void> {
    await this.ensureConnection();

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(new Error('Failed to delete map'));
    });
  }
} 