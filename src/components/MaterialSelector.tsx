import React from 'react';
import type { MaterialType } from '../types/minecraft';
import { BLOCKS } from '../data/blocks';
import { getTextureStyle, handleTextureError, getFallbackColor } from '../utils/textureUtils';
import './MaterialSelector.css';

interface MaterialSelectorProps {
  selectedMaterial: MaterialType;
  onMaterialSelect: (material: MaterialType) => void;
}

// Group blocks by category
const BLOCK_CATEGORIES = {
  'Stone Types': [
    'stone', 'granite', 'polished_granite', 'diorite', 'polished_diorite', 
    'andesite', 'polished_andesite', 'deepslate', 'tuff', 'calcite', 
    'dripstone_block', 'cobblestone'
  ],
  'Dirt Types': [
    'grass_block', 'dirt', 'coarse_dirt', 'podzol', 'rooted_dirt', 'mud'
  ],
  'Sand Types': [
    'sand', 'red_sand', 'gravel', 'clay', 'sandstone', 'red_sandstone'
  ],
  'Wood Types': [
    'oak_planks', 'spruce_planks', 'birch_planks', 'jungle_planks', 
    'acacia_planks', 'dark_oak_planks', 'mangrove_planks',
    'oak_log', 'spruce_log', 'birch_log', 'jungle_log',
    'acacia_log', 'dark_oak_log', 'mangrove_log'
  ],
  'Ore Types': [
    'coal_ore', 'iron_ore', 'copper_ore', 'gold_ore', 'redstone_ore', 
    'emerald_ore', 'lapis_lazuli_ore', 'diamond_ore', 'nether_quartz_ore'
  ],
  'Special Blocks': [
    'bedrock', 'obsidian', 'netherrack', 'basalt', 'blackstone',
    'end_stone', 'purpur_block', 'chorus_plant', 'chorus_flower'
  ],
  'Functional Blocks': [
    'crafting_table', 'furnace', 'blast_furnace', 'smoker', 'anvil',
    'grindstone', 'stonecutter', 'smithing_table', 'loom',
    'cartography_table', 'bookshelf', 'lectern', 'enchanting_table',
    'chest', 'barrel', 'shulker_box', 'ender_chest'
  ],
  'Light Sources': [
    'torch', 'lantern', 'soul_lantern', 'redstone_lamp', 'glowstone',
    'sea_lantern', 'jack_olantern'
  ],
  'Transparent Blocks': [
    'glass', 'tinted_glass', 'glass_pane', 'ice', 'packed_ice', 'blue_ice'
  ],
  'Other': ['air']
} as const;

const MaterialSelector: React.FC<MaterialSelectorProps> = ({
  selectedMaterial,
  onMaterialSelect,
}) => {
  return (
    <div className="material-selector">
      {Object.entries(BLOCK_CATEGORIES).map(([category, materials]) => (
        <div key={category} className="material-category">
          <h3>{category}</h3>
          <div className="material-buttons">
            {materials.map(material => {
              const block = BLOCKS[material as MaterialType];
              if (!block) return null;
              
              return (
                <button
                  key={material}
                  className={`material-button ${selectedMaterial === material ? 'selected' : ''}`}
                  onClick={() => onMaterialSelect(material as MaterialType)}
                  title={block.name}
                >
                  <div className="material-texture" style={{ backgroundColor: '#ffffff' }}>
                    {block.texture && (
                      <img
                        src={block.texture}
                        alt={block.name}
                        onError={() => handleTextureError(material as MaterialType, block.texture)}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          imageRendering: 'pixelated'
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialSelector; 