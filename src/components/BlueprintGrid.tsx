import { useState } from 'react';
import type { Grid, GridCell, MaterialType, Blueprint } from '../types/minecraft';
import { DEFAULT_GRID_SIZE, MATERIAL_LABELS } from '../types/minecraft';
import { MapControls } from './MapControls';
import { BlockCounter } from './BlockCounter';
import './BlueprintGrid.css';

interface BlueprintGridProps {
  selectedMaterial: MaterialType;
}

const createEmptyGrid = (): Grid => {
  const cells: GridCell[][] = Array(DEFAULT_GRID_SIZE).fill(null).map(() =>
    Array(DEFAULT_GRID_SIZE).fill(null).map(() => ({
      material: 'air'
    }))
  );
  return { cells, width: DEFAULT_GRID_SIZE, height: DEFAULT_GRID_SIZE };
};

const createEmptyBlueprint = (): Blueprint => ({
  levels: [createEmptyGrid()],
  currentLevel: 0
});

const hasBlocks = (grid: Grid): boolean => {
  return grid.cells.some(row => row.some(cell => cell.material !== 'air'));
};

export const BlueprintGrid = ({ selectedMaterial }: BlueprintGridProps) => {
  const [blueprint, setBlueprint] = useState<Blueprint>(createEmptyBlueprint());

  const handleCellClick = (row: number, col: number) => {
    const newBlueprint = { ...blueprint };
    newBlueprint.levels[blueprint.currentLevel].cells[row][col] = { material: selectedMaterial };
    setBlueprint(newBlueprint);
  };

  const handleLoadMap = (loadedBlueprint: Blueprint) => {
    // Ensure the loaded blueprint has the correct structure
    if (!loadedBlueprint || !loadedBlueprint.levels || !Array.isArray(loadedBlueprint.levels)) {
      console.error('Invalid blueprint data loaded');
      setBlueprint(createEmptyBlueprint());
      return;
    }

    // Ensure all levels have the correct structure
    const validLevels = loadedBlueprint.levels.map(level => {
      if (!level || !level.cells || !Array.isArray(level.cells)) {
        return createEmptyGrid();
      }
      return level;
    });

    setBlueprint({
      levels: validLevels,
      currentLevel: Math.min(loadedBlueprint.currentLevel || 0, validLevels.length - 1)
    });
  };

  const canGoUp = () => {
    const currentGrid = blueprint.levels[blueprint.currentLevel];
    return hasBlocks(currentGrid);
  };

  const canGoDown = () => {
    return blueprint.currentLevel > 0 && hasBlocks(blueprint.levels[blueprint.currentLevel - 1]);
  };

  const handleLevelUp = () => {
    if (!canGoUp()) return;

    const newBlueprint = { ...blueprint };
    if (blueprint.currentLevel === blueprint.levels.length - 1) {
      newBlueprint.levels.push(createEmptyGrid());
    }
    newBlueprint.currentLevel++;
    setBlueprint(newBlueprint);
  };

  const handleLevelDown = () => {
    if (!canGoDown()) return;

    const newBlueprint = { ...blueprint };
    newBlueprint.currentLevel--;
    setBlueprint(newBlueprint);
  };

  // Ensure we always have a valid current grid
  const currentGrid = blueprint.levels[blueprint.currentLevel] || createEmptyGrid();
  const lowerGrid = blueprint.currentLevel > 0 ? blueprint.levels[blueprint.currentLevel - 1] : null;

  return (
    <div className="blueprint-container">
      <div className="level-controls">
        <button
          onClick={handleLevelDown}
          disabled={!canGoDown()}
          className="level-button"
          title="Go down one level"
        >
          ↓
        </button>
        <span className="level-indicator">Level {blueprint.currentLevel + 1}</span>
        <button
          onClick={handleLevelUp}
          disabled={!canGoUp()}
          className="level-button"
          title="Go up one level"
        >
          ↑
        </button>
      </div>

      <div className="blueprint-grid">
        {currentGrid.cells.map((row: GridCell[], rowIndex: number) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell: GridCell, colIndex: number) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-cell ${cell.material}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                <span className="cell-label">{MATERIAL_LABELS[cell.material]}</span>
                {lowerGrid && (
                  <div className={`lower-level-cell ${lowerGrid.cells[rowIndex][colIndex].material}`}>
                    <span className="cell-label">
                      {MATERIAL_LABELS[lowerGrid.cells[rowIndex][colIndex].material]}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="controls-container">
        <MapControls currentBlueprint={blueprint} onLoadMap={handleLoadMap} />
        <BlockCounter grid={currentGrid} />
      </div>
    </div>
  );
}; 