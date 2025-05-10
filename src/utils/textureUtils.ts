import type { MaterialType } from '../types/minecraft';

// Fallback colors for different block types
const FALLBACK_COLORS: Record<string, string> = {
  // Air block
  air: '#ffffff',

  // Stone types
  stone: '#7f7f7f',
  granite: '#9f6f6f',
  polished_granite: '#af7f7f',
  diorite: '#e0e0e0',
  polished_diorite: '#f0f0f0',
  andesite: '#8f8f8f',
  polished_andesite: '#9f9f9f',
  deepslate: '#4f4f4f',
  tuff: '#5f5f5f',
  calcite: '#e0e0e0',
  dripstone_block: '#8f8f8f',

  // Dirt types
  grass_block: '#8b5a2b',
  dirt: '#8b5a2b',
  coarse_dirt: '#8b5a2b',
  podzol: '#8b5a2b',
  rooted_dirt: '#8b5a2b',
  mud: '#8b5a2b',

  // Sand types
  sand: '#e0c9a6',
  red_sand: '#c19a6b',
  gravel: '#8f8f8f',
  clay: '#a0a0a0',
  sandstone: '#e0c9a6',
  red_sandstone: '#c19a6b',

  // Wood types
  oak_planks: '#b87f4d',
  spruce_planks: '#6b4c35',
  birch_planks: '#d6c7a9',
  jungle_planks: '#b87f4d',
  acacia_planks: '#b87f4d',
  dark_oak_planks: '#4c3526',
  mangrove_planks: '#b87f4d',

  // Ore types
  coal_ore: '#4f4f4f',
  iron_ore: '#8f8f8f',
  copper_ore: '#b87333',
  gold_ore: '#ffd700',
  redstone_ore: '#ff0000',
  emerald_ore: '#50c878',
  lapis_lazuli_ore: '#1e90ff',
  diamond_ore: '#5de7ff',

  // Special blocks
  bedrock: '#404040',
  obsidian: '#1a1a1a',
  netherrack: '#8b0000',
  nether_quartz_ore: '#e0e0e0',
  basalt: '#4f4f4f',
  blackstone: '#1a1a1a',
  ancient_debris: '#4f4f4f',
  end_stone: '#e0e0c0',
  purpur_block: '#a040a0',
  chorus_plant: '#a040a0',
  chorus_flower: '#a040a0',

  // Functional blocks
  crafting_table: '#8b5a2b',
  furnace: '#8f8f8f',
  blast_furnace: '#8f8f8f',
  smoker: '#8f8f8f',
  anvil: '#8f8f8f',
  grindstone: '#8f8f8f',
  stonecutter: '#8f8f8f',
  smithing_table: '#8b5a2b',
  loom: '#8b5a2b',
  cartography_table: '#8b5a2b',
  bookshelf: '#8b5a2b',
  lectern: '#8b5a2b',
  enchanting_table: '#a040a0',
  chest: '#8b5a2b',
  barrel: '#8b5a2b',
  shulker_box: '#a040a0',
  ender_chest: '#a040a0',

  // Light sources
  torch: '#ffd700',
  lantern: '#ffd700',
  soul_lantern: '#ffd700',
  redstone_lamp: '#ff0000',
  glowstone: '#ffd700',
  sea_lantern: '#5de7ff',
  jack_olantern: '#ffd700',

  // Transparent blocks
  glass: 'rgba(255, 255, 255, 0.5)',
  tinted_glass: 'rgba(0, 0, 0, 0.5)',
  glass_pane: 'rgba(255, 255, 255, 0.5)',
  ice: 'rgba(200, 255, 255, 0.5)',
  packed_ice: 'rgba(180, 220, 255, 0.5)',
  blue_ice: 'rgba(150, 200, 255, 0.5)',

  // Default fallback
  default: '#ff00ff'
};

// Keep track of which textures have failed to load
const failedTextures = new Set<string>();

export const getTextureStyle = (material: MaterialType, texture: string) => {
  const style: React.CSSProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    imageRendering: 'pixelated' as const
  };

  if (failedTextures.has(texture)) {
    style.backgroundColor = FALLBACK_COLORS[material] || FALLBACK_COLORS.default;
  } else {
    style.backgroundImage = `url(${texture})`;
  }

  return style;
};

export const handleTextureError = (material: MaterialType, texture: string | null) => {
  if (texture && !failedTextures.has(texture)) {
    failedTextures.add(texture);
    console.error(`Failed to load texture for ${material}: ${texture}`);
  }
};

export const getFallbackColor = (material: MaterialType) => {
  return FALLBACK_COLORS[material] || FALLBACK_COLORS.default;
}; 