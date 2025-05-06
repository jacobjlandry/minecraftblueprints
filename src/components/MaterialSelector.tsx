import type { MaterialType } from '../types/minecraft';
import { MATERIAL_LABELS } from '../types/minecraft';
import './MaterialSelector.css';

interface MaterialSelectorProps {
  selectedMaterial: MaterialType;
  onMaterialSelect: (material: MaterialType) => void;
}

const materials: MaterialType[] = [
  // Wood types
  'oak_planks',
  'spruce_planks',
  'birch_planks',
  'jungle_planks',
  'acacia_planks',
  'dark_oak_planks',
  'mangrove_planks',
  'cherry_planks',
  // Stone types
  'stone',
  'cobblestone',
  'smooth_stone',
  'andesite',
  'polished_andesite',
  'diorite',
  'polished_diorite',
  'granite',
  'polished_granite',
  // Metal blocks
  'iron_block',
  'gold_block',
  'diamond_block',
  'emerald_block',
  'lapis_block',
  'redstone_block',
  'copper_block',
  'exposed_copper',
  'weathered_copper',
  'oxidized_copper',
  // Glass and transparent
  'glass',
  'white_stained_glass',
  'black_stained_glass',
  'ice',
  'blue_ice',
  'packed_ice',
  // Terracotta and concrete
  'terracotta',
  'white_concrete',
  'black_concrete',
  'red_concrete',
  'blue_concrete',
  'green_concrete',
  'yellow_concrete',
  // Special
  'air',
  'bedrock',
  'obsidian',
  'end_stone',
  'netherrack',
  'soul_sand',
  'soul_soil',
  'crimson_nylium',
  'warped_nylium'
];

export const MaterialSelector = ({ selectedMaterial, onMaterialSelect }: MaterialSelectorProps) => {
  return (
    <div className="material-selector">
      {materials.map((material) => (
        <button
          key={material}
          className={`material-button ${material} ${selectedMaterial === material ? 'selected' : ''}`}
          onClick={() => onMaterialSelect(material)}
          title={material.replace('_', ' ')}
        >
          <span className="material-label">{MATERIAL_LABELS[material]}</span>
        </button>
      ))}
    </div>
  );
}; 