import type { MaterialType } from '../types/minecraft';

export interface BlockData {
  name: string;
  id: string;
  type: 'solid' | 'transparent';
  collision: 'full' | 'partial' | 'none';
  stackable: boolean;
  texture: string | null;
}

export const BLOCKS: Record<MaterialType, BlockData> = {
  stone: {
    name: "Stone",
    id: "minecraft:stone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/stone.png"
  },
  granite: {
    name: "Granite",
    id: "minecraft:granite",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/granite.png"
  },
  polished_granite: {
    name: "Polished Granite",
    id: "minecraft:polished_granite",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/polished_granite.png"
  },
  diorite: {
    name: "Diorite",
    id: "minecraft:diorite",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/diorite.png"
  },
  polished_diorite: {
    name: "Polished Diorite",
    id: "minecraft:polished_diorite",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/polished_diorite.png"
  },
  andesite: {
    name: "Andesite",
    id: "minecraft:andesite",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/andesite.png"
  },
  polished_andesite: {
    name: "Polished Andesite",
    id: "minecraft:polished_andesite",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/polished_andesite.png"
  },
  grass_block: {
    name: "Grass Block",
    id: "minecraft:grass_block",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/grass_block_top.png"
  },
  dirt: {
    name: "Dirt",
    id: "minecraft:dirt",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/dirt.png"
  },
  coarse_dirt: {
    name: "Coarse Dirt",
    id: "minecraft:coarse_dirt",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/coarse_dirt.png"
  },
  podzol: {
    name: "Podzol",
    id: "minecraft:podzol",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/podzol_top.png"
  },
  rooted_dirt: {
    name: "Rooted Dirt",
    id: "minecraft:rooted_dirt",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/rooted_dirt.png"
  },
  mud: {
    name: "Mud",
    id: "minecraft:mud",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/mud.png"
  },
  sand: {
    name: "Sand",
    id: "minecraft:sand",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/sand.png"
  },
  red_sand: {
    name: "Red Sand",
    id: "minecraft:red_sand",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/red_sand.png"
  },
  gravel: {
    name: "Gravel",
    id: "minecraft:gravel",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/gravel.png"
  },
  clay: {
    name: "Clay",
    id: "minecraft:clay",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/clay.png"
  },
  sandstone: {
    name: "Sandstone",
    id: "minecraft:sandstone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/sandstone_top.png"
  },
  red_sandstone: {
    name: "Red Sandstone",
    id: "minecraft:red_sandstone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/red_sandstone_top.png"
  },
  cobblestone: {
    name: "Cobblestone",
    id: "minecraft:cobblestone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/cobblestone.png"
  },
  bedrock: {
    name: "Bedrock",
    id: "minecraft:bedrock",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/bedrock.png"
  },
  deepslate: {
    name: "Deepslate",
    id: "minecraft:deepslate",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/deepslate.png"
  },
  tuff: {
    name: "Tuff",
    id: "minecraft:tuff",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/tuff.png"
  },
  calcite: {
    name: "Calcite",
    id: "minecraft:calcite",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/calcite.png"
  },
  dripstone_block: {
    name: "Dripstone Block",
    id: "minecraft:dripstone_block",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/dripstone_block.png"
  },
  oak_planks: {
    name: "Oak Planks",
    id: "minecraft:oak_planks",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/oak_planks.png"
  },
  spruce_planks: {
    name: "Spruce Planks",
    id: "minecraft:spruce_planks",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/spruce_planks.png"
  },
  birch_planks: {
    name: "Birch Planks",
    id: "minecraft:birch_planks",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/birch_planks.png"
  },
  jungle_planks: {
    name: "Jungle Planks",
    id: "minecraft:jungle_planks",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/jungle_planks.png"
  },
  acacia_planks: {
    name: "Acacia Planks",
    id: "minecraft:acacia_planks",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/acacia_planks.png"
  },
  dark_oak_planks: {
    name: "Dark Oak Planks",
    id: "minecraft:dark_oak_planks",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/dark_oak_planks.png"
  },
  mangrove_planks: {
    name: "Mangrove Planks",
    id: "minecraft:mangrove_planks",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/mangrove_planks.png"
  },
  coal_ore: {
    name: "Coal Ore",
    id: "minecraft:coal_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/coal_ore.png"
  },
  iron_ore: {
    name: "Iron Ore",
    id: "minecraft:iron_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/iron_ore.png"
  },
  copper_ore: {
    name: "Copper Ore",
    id: "minecraft:copper_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/copper_ore.png"
  },
  gold_ore: {
    name: "Gold Ore",
    id: "minecraft:gold_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/gold_ore.png"
  },
  redstone_ore: {
    name: "Redstone Ore",
    id: "minecraft:redstone_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/redstone_ore.png"
  },
  emerald_ore: {
    name: "Emerald Ore",
    id: "minecraft:emerald_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/emerald_ore.png"
  },
  lapis_lazuli_ore: {
    name: "Lapis Lazuli Ore",
    id: "minecraft:lapis_lazuli_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/lapis_ore.png"
  },
  diamond_ore: {
    name: "Diamond Ore",
    id: "minecraft:diamond_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/diamond_ore.png"
  },
  obsidian: {
    name: "Obsidian",
    id: "minecraft:obsidian",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/obsidian.png"
  },
  netherrack: {
    name: "Netherrack",
    id: "minecraft:netherrack",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/netherrack.png"
  },
  nether_quartz_ore: {
    name: "Nether Quartz Ore",
    id: "minecraft:nether_quartz_ore",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/nether_quartz_ore.png"
  },
  basalt: {
    name: "Basalt",
    id: "minecraft:basalt",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/basalt_side.png"
  },
  blackstone: {
    name: "Blackstone",
    id: "minecraft:blackstone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/blackstone.png"
  },
  ancient_debris: {
    name: "Ancient Debris",
    id: "minecraft:ancient_debris",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/ancient_debris.png"
  },
  end_stone: {
    name: "End Stone",
    id: "minecraft:end_stone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/end_stone.png"
  },
  purpur_block: {
    name: "Purpur Block",
    id: "minecraft:purpur_block",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/purpur_block.png"
  },
  chorus_plant: {
    name: "Chorus Plant",
    id: "minecraft:chorus_plant",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/chorus_plant.png"
  },
  chorus_flower: {
    name: "Chorus Flower",
    id: "minecraft:chorus_flower",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/chorus_flower.png"
  },
  crafting_table: {
    name: "Crafting Table",
    id: "minecraft:crafting_table",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/crafting_table_top.png"
  },
  furnace: {
    name: "Furnace",
    id: "minecraft:furnace",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/furnace_side.png"
  },
  blast_furnace: {
    name: "Blast Furnace",
    id: "minecraft:blast_furnace",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/blast_furnace_side.png"
  },
  smoker: {
    name: "Smoker",
    id: "minecraft:smoker",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/smoker_side.png"
  },
  anvil: {
    name: "Anvil",
    id: "minecraft:anvil",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/anvil_top.png"
  },
  grindstone: {
    name: "Grindstone",
    id: "minecraft:grindstone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/grindstone_side.png"
  },
  stonecutter: {
    name: "Stonecutter",
    id: "minecraft:stonecutter",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/stonecutter_bottom.png"
  },
  smithing_table: {
    name: "Smithing Table",
    id: "minecraft:smithing_table",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/smithing_table_top.png"
  },
  loom: {
    name: "Loom",
    id: "minecraft:loom",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/loom_top.png"
  },
  cartography_table: {
    name: "Cartography Table",
    id: "minecraft:cartography_table",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/cartography_table_top.png"
  },
  bookshelf: {
    name: "Bookshelf",
    id: "minecraft:bookshelf",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/bookshelf.png"
  },
  lectern: {
    name: "Lectern",
    id: "minecraft:lectern",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/lectern_top.png"
  },
  enchanting_table: {
    name: "Enchanting Table",
    id: "minecraft:enchanting_table",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/enchanting_table_top.png"
  },
  chest: {
    name: "Chest",
    id: "minecraft:chest",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/entity/chest/normal.png"
  },
  barrel: {
    name: "Barrel",
    id: "minecraft:barrel",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/barrel_side.png"
  },
  shulker_box: {
    name: "Shulker Box",
    id: "minecraft:shulker_box",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/entity/shulker/shulker.png"
  },
  ender_chest: {
    name: "Ender Chest",
    id: "minecraft:ender_chest",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d9/Ender_Chest_%28S%29_JE1_BE1.png"
  },
  torch: {
    name: "Torch",
    id: "minecraft:torch",
    type: "transparent",
    collision: "partial",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/torch.png"
  },
  lantern: {
    name: "Lantern",
    id: "minecraft:lantern",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/lantern.png"
  },
  soul_lantern: {
    name: "Soul Lantern",
    id: "minecraft:soul_lantern",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/soul_lantern.png"
  },
  redstone_lamp: {
    name: "Redstone Lamp",
    id: "minecraft:redstone_lamp",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/redstone_lamp.png"
  },
  glowstone: {
    name: "Glowstone",
    id: "minecraft:glowstone",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/glowstone.png"
  },
  sea_lantern: {
    name: "Sea Lantern",
    id: "minecraft:sea_lantern",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/sea_lantern.png"
  },
  jack_olantern: {
    name: "Jack o'Lantern",
    id: "minecraft:jack_olantern",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/jack_o_lantern.png"
  },
  glass: {
    name: "Glass",
    id: "minecraft:glass",
    type: "transparent",
    collision: "partial",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/glass.png"
  },
  tinted_glass: {
    name: "Tinted Glass",
    id: "minecraft:tinted_glass",
    type: "transparent",
    collision: "partial",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/tinted_glass.png"
  },
  glass_pane: {
    name: "Glass Pane",
    id: "minecraft:glass_pane",
    type: "transparent",
    collision: "partial",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/glass_pane_top.png"
  },
  ice: {
    name: "Ice",
    id: "minecraft:ice",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/ice.png"
  },
  packed_ice: {
    name: "Packed Ice",
    id: "minecraft:packed_ice",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/packed_ice.png"
  },
  blue_ice: {
    name: "Blue Ice",
    id: "minecraft:blue_ice",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/blue_ice.png"
  },
  air: {
    name: "Air",
    id: "minecraft:air",
    type: "transparent",
    collision: "none",
    stackable: false,
    texture: null
  },
  oak_log: {
    name: "Oak Log",
    id: "minecraft:oak_log",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/oak_log.png"
  },
  spruce_log: {
    name: "Spruce Log",
    id: "minecraft:spruce_log",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/spruce_log.png"
  },
  birch_log: {
    name: "Birch Log",
    id: "minecraft:birch_log",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/birch_log.png"
  },
  jungle_log: {
    name: "Jungle Log",
    id: "minecraft:jungle_log",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/jungle_log.png"
  },
  acacia_log: {
    name: "Acacia Log",
    id: "minecraft:acacia_log",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/acacia_log.png"
  },
  dark_oak_log: {
    name: "Dark Oak Log",
    id: "minecraft:dark_oak_log",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/dark_oak_log.png"
  },
  mangrove_log: {
    name: "Mangrove Log",
    id: "minecraft:mangrove_log",
    type: "solid",
    collision: "full",
    stackable: true,
    texture: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21/assets/minecraft/textures/block/mangrove_log.png"
  }
}; 