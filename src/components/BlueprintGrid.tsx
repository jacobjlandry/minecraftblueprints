import { useState } from 'react';
import type { Grid, GridCell, MaterialType } from '../types/minecraft';
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

export const BlueprintGrid = ({ selectedMaterial }: BlueprintGridProps) => {
  const [grid, setGrid] = useState<Grid>(createEmptyGrid());

  const handleCellClick = (row: number, col: number) => {
    const newGrid = { ...grid };
    newGrid.cells[row][col] = { material: selectedMaterial };
    setGrid(newGrid);
  };

  const handleLoadMap = (loadedGrid: Grid) => {
    setGrid(loadedGrid);
  };

  return (
    <div className="blueprint-container">
      <div className="blueprint-grid">
        {grid.cells.map((row: GridCell[], rowIndex: number) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell: GridCell, colIndex: number) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-cell ${cell.material}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                <span className="cell-label">{MATERIAL_LABELS[cell.material]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls-container">
        <MapControls currentGrid={grid} onLoadMap={handleLoadMap} />
        <BlockCounter grid={grid} />
      </div>
    </div>
  );
}; 