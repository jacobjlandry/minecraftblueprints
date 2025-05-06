export type MaterialType = 
  // Wood types
  | 'oak_planks'
  | 'spruce_planks'
  | 'birch_planks'
  | 'jungle_planks'
  | 'acacia_planks'
  | 'dark_oak_planks'
  | 'mangrove_planks'
  | 'cherry_planks'
  // Stone types
  | 'stone'
  | 'cobblestone'
  | 'smooth_stone'
  | 'andesite'
  | 'polished_andesite'
  | 'diorite'
  | 'polished_diorite'
  | 'granite'
  | 'polished_granite'
  // Metal blocks
  | 'iron_block'
  | 'gold_block'
  | 'diamond_block'
  | 'emerald_block'
  | 'lapis_block'
  | 'redstone_block'
  | 'copper_block'
  | 'exposed_copper'
  | 'weathered_copper'
  | 'oxidized_copper'
  // Glass and transparent
  | 'glass'
  | 'white_stained_glass'
  | 'black_stained_glass'
  | 'ice'
  | 'blue_ice'
  | 'packed_ice'
  // Terracotta and concrete
  | 'terracotta'
  | 'white_concrete'
  | 'black_concrete'
  | 'red_concrete'
  | 'blue_concrete'
  | 'green_concrete'
  | 'yellow_concrete'
  // Special
  | 'air'
  | 'bedrock'
  | 'obsidian'
  | 'end_stone'
  | 'netherrack'
  | 'soul_sand'
  | 'soul_soil'
  | 'crimson_nylium'
  | 'warped_nylium';

export interface GridCell {
  material: MaterialType;
}

export interface Grid {
  cells: GridCell[][];
  width: number;
  height: number;
}

export interface Blueprint {
  levels: Grid[];
  currentLevel: number;
}

export const DEFAULT_GRID_SIZE = 32;

export const MATERIAL_LABELS: Record<MaterialType, string> = {
  // Wood types
  oak_planks: 'O',
  spruce_planks: 'S',
  birch_planks: 'B',
  jungle_planks: 'J',
  acacia_planks: 'A',
  dark_oak_planks: 'D',
  mangrove_planks: 'M',
  cherry_planks: 'C',
  // Stone types
  stone: 's',
  cobblestone: 'c',
  smooth_stone: 'S',
  andesite: 'a',
  polished_andesite: 'A',
  diorite: 'd',
  polished_diorite: 'D',
  granite: 'g',
  polished_granite: 'G',
  // Metal blocks
  iron_block: 'i',
  gold_block: 'g',
  diamond_block: 'd',
  emerald_block: 'e',
  lapis_block: 'l',
  redstone_block: 'r',
  copper_block: 'c',
  exposed_copper: 'E',
  weathered_copper: 'W',
  oxidized_copper: 'O',
  // Glass and transparent
  glass: 'G',
  white_stained_glass: 'W',
  black_stained_glass: 'B',
  ice: 'i',
  blue_ice: 'b',
  packed_ice: 'p',
  // Terracotta and concrete
  terracotta: 't',
  white_concrete: 'w',
  black_concrete: 'b',
  red_concrete: 'r',
  blue_concrete: 'b',
  green_concrete: 'g',
  yellow_concrete: 'y',
  // Special
  air: ' ',
  bedrock: 'B',
  obsidian: 'O',
  end_stone: 'E',
  netherrack: 'n',
  soul_sand: 's',
  soul_soil: 'S',
  crimson_nylium: 'c',
  warped_nylium: 'w'
}; 