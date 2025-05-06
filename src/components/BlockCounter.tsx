import type { Grid, MaterialType } from '../types/minecraft';
import { MATERIAL_LABELS } from '../types/minecraft';
import './BlockCounter.css';

interface BlockCounterProps {
  grid: Grid;
}

export const BlockCounter = ({ grid }: BlockCounterProps) => {
  const blockCounts = new Map<MaterialType, number>();

  // Count blocks
  grid.cells.forEach(row => {
    row.forEach(cell => {
      const currentCount = blockCounts.get(cell.material) || 0;
      blockCounts.set(cell.material, currentCount + 1);
    });
  });

  // Convert to array and sort by count (descending)
  const sortedBlocks = Array.from(blockCounts.entries())
    .filter(([material]) => material !== 'air') // Exclude air blocks
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="block-counter">
      <h3>Block Count</h3>
      {sortedBlocks.length === 0 ? (
        <p className="no-blocks">No blocks placed yet</p>
      ) : (
        <div className="block-list">
          {sortedBlocks.map(([material, count]) => (
            <div key={material} className="block-item">
              <div className="block-preview">
                <div className={`block-sample ${material}`}>
                  <span className="block-label">{MATERIAL_LABELS[material]}</span>
                </div>
                <span className="block-name">{material.replace('_', ' ')}</span>
              </div>
              <span className="block-count">{count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 