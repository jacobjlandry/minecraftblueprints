import React from 'react';
import type { MaterialType, Grid } from '../types/minecraft';
import { BLOCKS } from '../data/blocks';
import { handleTextureError } from '../utils/textureUtils';
import './BlockCounter.css';

interface BlockCounterProps {
  grid: Grid;
}

const BlockCounter: React.FC<BlockCounterProps> = ({ grid }) => {
  // Count blocks in the grid
  const blockCounts = grid.cells.reduce((counts, row) => {
    row.forEach(cell => {
      if (cell.material !== 'air') {
        counts[cell.material] = (counts[cell.material] || 0) + 1;
      }
    });
    return counts;
  }, {} as Record<MaterialType, number>);

  // Sort blocks by count (descending)
  const sortedBlocks = Object.entries(blockCounts)
    .sort(([, countA], [, countB]) => countB - countA);

  return (
    <div className="block-counter">
      <h3>Block Count</h3>
      <div className="block-list">
        {sortedBlocks.length > 0 ? (
          sortedBlocks.map(([material, count]) => (
            <div key={material} className="block-item">
              <div className="block-sample" style={{ backgroundColor: '#ffffff' }}>
                <img
                  src={BLOCKS[material as MaterialType].texture || undefined}
                  alt={BLOCKS[material as MaterialType].name}
                  onError={() => handleTextureError(material as MaterialType, BLOCKS[material as MaterialType].texture)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    imageRendering: 'pixelated'
                  }}
                />
              </div>
              <span className="block-name">{BLOCKS[material as MaterialType].name}</span>
              <span className="block-count">{count}</span>
            </div>
          ))
        ) : (
          <div className="no-blocks">No blocks placed</div>
        )}
      </div>
    </div>
  );
};

export default BlockCounter; 