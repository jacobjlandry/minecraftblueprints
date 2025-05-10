import { useState, useEffect } from 'react';
import type { Blueprint } from '../types/minecraft';
import { MapStorage, type SavedMap } from '../utils/MapStorage';
import './MapControls.css';

interface MapControlsProps {
  blueprint: Blueprint;
  onBlueprintChange: (blueprint: Blueprint) => void;
  hasBlocks: boolean;
}

export const MapControls = ({ blueprint, onBlueprintChange, hasBlocks }: MapControlsProps) => {
  const [mapName, setMapName] = useState('');
  const [savedMaps, setSavedMaps] = useState<SavedMap[]>([]);
  const [mapStorage] = useState(() => new MapStorage());
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentMapId, setCurrentMapId] = useState<string | null>(null);
  const [isAutosaveEnabled, setIsAutosaveEnabled] = useState(false);

  useEffect(() => {
    loadSavedMaps();
  }, []);

  useEffect(() => {
    if (isAutosaveEnabled && currentMapId && mapName.trim()) {
      handleAutosave();
    }
  }, [blueprint]);

  const loadSavedMaps = async () => {
    try {
      const maps = await mapStorage.getAllMaps();
      setSavedMaps(maps.sort((a, b) => b.updatedAt - a.updatedAt));
    } catch (err) {
      setError('Failed to load saved maps');
    }
  };

  const handleAutosave = async () => {
    if (!currentMapId || !mapName.trim()) return;

    try {
      await mapStorage.updateMap(currentMapId, mapName.trim(), blueprint);
      await loadSavedMaps();
    } catch (err) {
      setError('Failed to autosave map');
      setIsAutosaveEnabled(false);
    }
  };

  const handleSave = async () => {
    if (!mapName.trim()) {
      setError('Please enter a name for your map');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      const savedMap = await mapStorage.saveMap(mapName.trim(), blueprint);
      setCurrentMapId(savedMap.id);
      setMapName(savedMap.name);
      setIsAutosaveEnabled(true);
      await loadSavedMaps();
    } catch (err) {
      setError('Failed to save map');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLoad = async (map: SavedMap) => {
    try {
      onBlueprintChange(map.blueprint);
      setMapName(map.name);
      setCurrentMapId(map.id);
      setIsAutosaveEnabled(true);
    } catch (err) {
      setError('Failed to load map');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mapStorage.deleteMap(id);
      if (id === currentMapId) {
        setCurrentMapId(null);
        setIsAutosaveEnabled(false);
      }
      await loadSavedMaps();
    } catch (err) {
      setError('Failed to delete map');
    }
  };

  const handleAutosaveToggle = (checked: boolean) => {
    if (!currentMapId) {
      setError('Please save or load a map first');
      return;
    }
    setIsAutosaveEnabled(checked);
  };

  return (
    <div className="map-controls">
      <div className="save-controls">
        <input
          type="text"
          value={mapName}
          onChange={(e) => setMapName(e.target.value)}
          placeholder="Enter map name"
          className="map-name-input"
        />
        <button
          onClick={handleSave}
          disabled={isSaving || !mapName.trim()}
          className="save-button"
        >
          {isSaving ? 'Saving...' : 'Save Map'}
        </button>
      </div>

      <div className="autosave-control">
        <label className="autosave-label">
          <input
            type="checkbox"
            checked={isAutosaveEnabled}
            onChange={(e) => handleAutosaveToggle(e.target.checked)}
            disabled={!currentMapId}
          />
          <span>Autosave current map</span>
        </label>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="saved-maps">
        <h3>Saved Maps</h3>
        {savedMaps.length === 0 ? (
          <p className="no-maps">No saved maps yet</p>
        ) : (
          <ul className="map-list">
            {savedMaps.map((map) => (
              <li key={map.id} className="map-item">
                <div className="map-info">
                  <span className="map-name">{map.name}</span>
                  <span className="map-date">
                    {new Date(map.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="map-actions">
                  <button
                    onClick={() => handleLoad(map)}
                    className="load-button"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => handleDelete(map.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}; 