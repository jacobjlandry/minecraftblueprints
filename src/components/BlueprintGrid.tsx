import React, { useState, useEffect } from 'react';
import type { Grid, GridCell, MaterialType, Blueprint } from '../types/minecraft';
import { DEFAULT_GRID_SIZE } from '../types/minecraft';
import { BLOCKS } from '../data/blocks';
import { getTextureStyle, handleTextureError, getFallbackColor } from '../utils/textureUtils';
import { MapControls } from './MapControls';
import BlockCounter from './BlockCounter';
import './BlueprintGrid.css';

interface BlueprintGridProps {
  selectedMaterial: MaterialType;
}

export const BlueprintGrid = ({ selectedMaterial }: BlueprintGridProps) => {
  const [blueprint, setBlueprint] = useState<Blueprint>(() => {
    const initialGrid: Grid = {
      cells: Array(DEFAULT_GRID_SIZE).fill(null).map(() =>
        Array(DEFAULT_GRID_SIZE).fill(null).map(() => ({
          material: 'air',
          collision: 'none'
        }))
      ),
      width: DEFAULT_GRID_SIZE,
      height: DEFAULT_GRID_SIZE
    };
    return {
      levels: [initialGrid],
      currentLevel: 0
    };
  });

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setBlueprint(prevBlueprint => {
      const newBlueprint = { ...prevBlueprint };
      const currentGrid = { ...newBlueprint.levels[newBlueprint.currentLevel] };
      const newCells = currentGrid.cells.map(row => [...row]);
      
      newCells[rowIndex][colIndex] = {
        material: selectedMaterial,
        collision: BLOCKS[selectedMaterial].collision
      };
      
      currentGrid.cells = newCells;
      newBlueprint.levels[newBlueprint.currentLevel] = currentGrid;
      return newBlueprint;
    });
  };

  const hasBlocks = (grid: Grid): boolean => {
    return grid.cells.some(row => row.some(cell => cell.material !== 'air'));
  };

  return (
    <div className="blueprint-container">
      <MapControls
        blueprint={blueprint}
        onBlueprintChange={setBlueprint}
        hasBlocks={hasBlocks(blueprint.levels[blueprint.currentLevel])}
      />
      <div className="blueprint-grid">
        {blueprint.levels[blueprint.currentLevel].cells.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-cell ${cell.material}`}
                style={{ backgroundColor: '#ffffff' }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell.material !== 'air' && (
                  <img
                    src={BLOCKS[cell.material].texture}
                    alt={BLOCKS[cell.material].name}
                    onError={() => handleTextureError(cell.material, BLOCKS[cell.material].texture)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      imageRendering: 'pixelated'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <BlockCounter grid={blueprint.levels[blueprint.currentLevel]} />
    </div>
  );
}; 