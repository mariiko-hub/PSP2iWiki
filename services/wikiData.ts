import { WikiCategory, WikiPage } from '@/types/wiki';

export const wikiCategories: WikiCategory[] = [
  // Character
  { id: 'races', name: 'Races', icon: 'people', description: 'Human, Newman, CAST, Deuman', section: 'character' },
  { id: 'types', name: 'Types', icon: 'category', description: 'Hunter, Ranger, Force, Braver', section: 'character' },
  { id: 'blasts', name: 'Blasts', icon: 'flash-on', description: 'Infinity Blast abilities', section: 'character' },
  { id: 'photon-arts', name: 'Photon Arts', icon: 'auto-awesome', description: 'Special attack techniques', section: 'character' },
  { id: 'abilities', name: 'Abilities', icon: 'star', description: 'Character abilities and skills', section: 'character' },
  { id: 'stats', name: 'Stats', icon: 'bar-chart', description: 'Character statistics', section: 'character' },
  { id: 'rebirth', name: 'Rebirth', icon: 'refresh', description: 'Character rebirth system', section: 'character' },
  
  // Items
  { id: 'weapons', name: 'Weapons', icon: 'gavel', description: 'All weapon types and grades', section: 'items' },
  { id: 'shield-weaves', name: 'Shield-weaves', icon: 'shield', description: 'Defensive equipment', section: 'items' },
  { id: 'modules', name: 'Modules', icon: 'extension', description: 'Enhancement modules', section: 'items' },
  { id: 'consumables', name: 'Consumables', icon: 'local-drink', description: 'Items and recovery tools', section: 'items' },
  { id: 'currencies', name: 'Currencies', icon: 'paid', description: 'Meseta and other currencies', section: 'items' },
  { id: 'clothes', name: 'Clothes', icon: 'checkroom', description: 'Costumes and outfits', section: 'items' },
  { id: 'parts', name: 'Parts', icon: 'build', description: 'CAST parts and accessories', section: 'items' },
  
  // Gameplay
  { id: 'missions', name: 'Missions', icon: 'assignment', description: 'Story and challenge missions', section: 'gameplay' },
  { id: 'creatures', name: 'Creatures', icon: 'bug-report', description: 'Enemy database', section: 'gameplay' },
  { id: 'npcs', name: 'NPCs', icon: 'person', description: 'Non-playable characters', section: 'gameplay' },
  
  // Miscellaneous
  { id: 'partner-card', name: 'Partner Card', icon: 'badge', description: 'Partner card system', section: 'misc' },
  { id: 'your-room', name: 'Your Room', icon: 'home', description: 'Room customization', section: 'misc' },
  { id: 'mysynths', name: 'MySynths', icon: 'science', description: 'Item synthesis system', section: 'misc' },
  
  // Extra Content
  { id: 'dlc', name: 'DLC', icon: 'download', description: 'Downloadable content', section: 'extra' },
  { id: 'modifications', name: 'Modifications', icon: 'edit', description: 'Game modifications', section: 'extra' },
  { id: 'multimedia', name: 'Multimedia', icon: 'library-music', description: 'Music and media', section: 'extra' },
];

// Equipment data structure
export interface EquipmentItem {
  id: string;
  name: string;
  type: string;
  rarity: number;
  level: number;
  stats: {
    atk?: number;
    def?: number;
    acc?: number;
    eva?: number;
    tec?: number;
    mnd?: number;
    sta?: number;
  };
  description: string;
  element?: string;
  manufacturer?: string;
}

export const equipmentDatabase: EquipmentItem[] = [
  // === STRIKING WEAPONS ===
  // Swords (Two-handed)
  { id: 'sword-saber', name: 'Saber', type: 'Sword', rarity: 1, level: 1, stats: { atk: 38, acc: 25 }, description: 'Basic two-handed sword. Good for beginners.', manufacturer: 'GRM' },
  { id: 'sword-brand', name: 'Brand', type: 'Sword', rarity: 2, level: 5, stats: { atk: 62, acc: 30 }, description: 'Reliable sword used by many hunters.', manufacturer: 'GRM' },
  { id: 'sword-buster', name: 'Buster', type: 'Sword', rarity: 3, level: 10, stats: { atk: 95, acc: 35 }, description: 'Heavy blade with increased attack power.', manufacturer: 'GRM' },
  { id: 'sword-calibur', name: 'Calibur', type: 'Sword', rarity: 4, level: 20, stats: { atk: 145, acc: 42 }, description: 'Well-balanced sword favored by experienced warriors.', manufacturer: 'GRM' },
  { id: 'sword-gigush', name: 'Gigush', type: 'Sword', rarity: 5, level: 25, stats: { atk: 195, acc: 48 }, description: 'Powerful blade for veteran hunters.', manufacturer: 'GRM' },
  { id: 'sword-solid', name: 'Solid Strike', type: 'Sword', rarity: 6, level: 30, stats: { atk: 245, acc: 54 }, description: 'Solid construction provides reliable damage.', manufacturer: 'GRM' },
  { id: 'sword-warshovel', name: 'Warshovel', type: 'Sword', rarity: 7, level: 35, stats: { atk: 295, acc: 60 }, description: 'Massive blade shaped like a shovel.', manufacturer: 'GRM' },
  { id: 'sword-durandal', name: 'Durandal', type: 'Sword', rarity: 8, level: 40, stats: { atk: 345, acc: 66 }, description: 'Legendary indestructible sword.', manufacturer: 'GRM' },
  { id: 'sword-flowen', name: "Flowen's Sword", type: 'Sword', rarity: 9, level: 50, stats: { atk: 385, acc: 68 }, description: 'Legendary sword of the hero Flowen. Exceptional power.', element: 'Light', manufacturer: 'GRM' },
  { id: 'sword-dblade', name: 'DB\'s Saber', type: 'Sword', rarity: 10, level: 65, stats: { atk: 455, acc: 76 }, description: 'Azure blade of extraordinary power.', element: 'Ice', manufacturer: 'GRM' },
  { id: 'sword-zanba', name: 'Zanba', type: 'Sword', rarity: 11, level: 80, stats: { atk: 525, acc: 84 }, description: 'Crimson demon blade thirsting for battle.', element: 'Fire', manufacturer: 'Kubara' },
  { id: 'sword-excalibur', name: 'Excalibur', type: 'Sword', rarity: 12, level: 100, stats: { atk: 620, acc: 88 }, description: 'Mythical holy sword with unmatched might.', element: 'Light', manufacturer: 'GRM' },
  { id: 'sword-ragnus', name: 'Ragnus', type: 'Sword', rarity: 13, level: 110, stats: { atk: 705, acc: 95 }, description: 'Ultimate blade forged in dragon fire.', element: 'Fire', manufacturer: 'Kubara' },
  { id: 'sword-yamigarasu', name: 'Yamigarasu', type: 'Sword', rarity: 14, level: 130, stats: { atk: 795, acc: 102 }, description: 'Dark raven blade of legends.', element: 'Dark', manufacturer: 'Kubara' },
  { id: 'sword-sange', name: 'Sange', type: 'Sword', rarity: 15, level: 150, stats: { atk: 885, acc: 108 }, description: 'One of the twin demon blades.', element: 'Dark', manufacturer: 'Kubara' },
  { id: 'sword-orotiagito', name: 'Oroti-Agito', type: 'Sword', rarity: 16, level: 175, stats: { atk: 975, acc: 115 }, description: 'Eight-headed demon blade of ultimate power.', element: 'Dark', manufacturer: 'Kubara' },
  
  // Spears
  { id: 'spear-lance', name: 'Lance', type: 'Spear', rarity: 1, level: 1, stats: { atk: 42, acc: 30 }, description: 'Standard spear with good reach.', manufacturer: 'Yohmei' },
  { id: 'spear-partisan', name: 'Partisan', type: 'Spear', rarity: 2, level: 6, stats: { atk: 68, acc: 36 }, description: 'Spear with enhanced piercing capability.', manufacturer: 'Yohmei' },
  { id: 'spear-halberd', name: 'Halberd', type: 'Spear', rarity: 3, level: 12, stats: { atk: 102, acc: 42 }, description: 'Versatile polearm for multiple attack styles.', manufacturer: 'Yohmei' },
  { id: 'spear-trident', name: 'Trident', type: 'Spear', rarity: 5, level: 25, stats: { atk: 168, acc: 52 }, description: 'Three-pronged spear with water affinity.', element: 'Ice', manufacturer: 'Yohmei' },
  { id: 'spear-gaebolg', name: 'Gae Bolg', type: 'Spear', rarity: 10, level: 65, stats: { atk: 445, acc: 78 }, description: 'Cursed spear that never misses its target.', element: 'Dark', manufacturer: 'Yohmei' },
  
  // Knuckles
  { id: 'knuckle-knuckle', name: 'Knuckle', type: 'Knuckles', rarity: 1, level: 1, stats: { atk: 35, acc: 28 }, description: 'Basic brass knuckles for hand-to-hand combat.', manufacturer: 'GRM' },
  { id: 'knuckle-vish', name: 'Vish', type: 'Knuckles', rarity: 2, level: 5, stats: { atk: 58, acc: 32 }, description: 'Spiked knuckles for brutal punches.', manufacturer: 'GRM' },
  { id: 'knuckle-twin-chakram', name: 'Twin Chakram', type: 'Knuckles', rarity: 4, level: 18, stats: { atk: 125, acc: 45 }, description: 'Circular blade weapons worn on fists.', manufacturer: 'Tenora' },
  { id: 'knuckle-crimson', name: 'Crimson Fist', type: 'Knuckles', rarity: 7, level: 35, stats: { atk: 268, acc: 62 }, description: 'Blood-red gauntlets with devastating power.', element: 'Fire', manufacturer: 'Kubara' },
  { id: 'knuckle-godhand', name: 'Godhand', type: 'Knuckles', rarity: 10, level: 70, stats: { atk: 425, acc: 88 }, description: 'Divine gauntlets blessed with holy power.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'knuckle-million', name: 'Million Knuckle', type: 'Knuckles', rarity: 14, level: 125, stats: { atk: 765, acc: 115 }, description: 'Legendary gauntlets capable of a million strikes.', manufacturer: 'GRM' },

  // Double Sabers
  { id: 'dsaber-double', name: 'Double Saber', type: 'Double Saber', rarity: 1, level: 1, stats: { atk: 40, acc: 30 }, description: 'Twin-bladed staff for sweeping attacks.', manufacturer: 'Yohmei' },
  { id: 'dsaber-duel', name: 'Duel Saber', type: 'Double Saber', rarity: 2, level: 6, stats: { atk: 65, acc: 35 }, description: 'Improved double blade with balanced weight.', manufacturer: 'Yohmei' },
  { id: 'dsaber-twin-brand', name: 'Twin Brand', type: 'Double Saber', rarity: 4, level: 20, stats: { atk: 138, acc: 48 }, description: 'Dual-bladed weapon of renowned quality.', manufacturer: 'Yohmei' },
  { id: 'dsaber-twin-zanbas', name: 'Twin Zanbas', type: 'Double Saber', rarity: 9, level: 55, stats: { atk: 385, acc: 75 }, description: 'Twin demon blades on a single shaft.', element: 'Fire', manufacturer: 'Kubara' },
  { id: 'dsaber-laconium', name: 'Laconium Sword', type: 'Double Saber', rarity: 12, level: 95, stats: { atk: 608, acc: 95 }, description: 'Mythical metal creates unstoppable edge.', manufacturer: 'GRM' },

  // Twin Sabers
  { id: 'tsaber-twin', name: 'Twin Saber', type: 'Twin Sabers', rarity: 1, level: 1, stats: { atk: 36, acc: 32 }, description: 'Dual one-handed sabers for fast combos.', manufacturer: 'Tenora' },
  { id: 'tsaber-twin-brand', name: 'Twin Brand', type: 'Twin Sabers', rarity: 3, level: 12, stats: { atk: 92, acc: 42 }, description: 'Matching pair of quality blades.', manufacturer: 'Tenora' },
  { id: 'tsaber-holy-ray', name: 'Holy Ray', type: 'Twin Sabers', rarity: 8, level: 42, stats: { atk: 315, acc: 72 }, description: 'Sacred twin blades radiating light.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'tsaber-twinstar', name: 'Twinstar', type: 'Twin Sabers', rarity: 13, level: 105, stats: { atk: 685, acc: 102 }, description: 'Legendary paired blades of cosmic power.', manufacturer: 'Tenora' },

  // Twin Daggers
  { id: 'dagger-twin', name: 'Twin Daggers', type: 'Twin Daggers', rarity: 1, level: 1, stats: { atk: 35, acc: 35 }, description: 'Fast dual blades for rapid strikes.', manufacturer: 'Tenora' },
  { id: 'dagger-twin-brand', name: 'Twin Brand Daggers', type: 'Twin Daggers', rarity: 2, level: 8, stats: { atk: 62, acc: 42 }, description: 'Quality twin blades for precision.', manufacturer: 'Tenora' },
  { id: 'dagger-assassin', name: 'Assassin Blades', type: 'Twin Daggers', rarity: 3, level: 15, stats: { atk: 88, acc: 56 }, description: 'Silent blades preferred by stealthy fighters.', manufacturer: 'Tenora' },
  { id: 'dagger-butterfly', name: 'Butterfly Dance', type: 'Twin Daggers', rarity: 6, level: 32, stats: { atk: 215, acc: 78 }, description: 'Elegant twin daggers for graceful strikes.', manufacturer: 'Tenora' },
  { id: 'dagger-chaos', name: 'Chaos Blades', type: 'Twin Daggers', rarity: 8, level: 40, stats: { atk: 295, acc: 92 }, description: 'Cursed twin blades that drain enemy life.', element: 'Dark', manufacturer: 'Tenora' },
  { id: 'dagger-dual-bird', name: 'Dual Bird', type: 'Twin Daggers', rarity: 11, level: 85, stats: { atk: 515, acc: 112 }, description: 'Twin blades that strike like diving falcons.', manufacturer: 'Tenora' },
  { id: 'dagger-eternal', name: 'Eternal Blades', type: 'Twin Daggers', rarity: 13, level: 110, stats: { atk: 685, acc: 125 }, description: 'Timeless daggers forged in ancient fires.', element: 'Fire', manufacturer: 'Tenora' },

  // Twin Claws
  { id: 'tclaw-twin', name: 'Twin Claws', type: 'Twin Claws', rarity: 1, level: 1, stats: { atk: 38, acc: 30 }, description: 'Dual claw weapons for savage strikes.', manufacturer: 'Kubara' },
  { id: 'tclaw-brave', name: 'Brave Claws', type: 'Twin Claws', rarity: 3, level: 14, stats: { atk: 95, acc: 45 }, description: 'Enhanced claws for fierce combat.', manufacturer: 'Kubara' },
  { id: 'tclaw-tornado', name: 'Tornado Dance', type: 'Twin Claws', rarity: 7, level: 38, stats: { atk: 285, acc: 68 }, description: 'Whirlwind-generating claw weapons.', manufacturer: 'Kubara' },
  { id: 'tclaw-heaven', name: 'Heaven Striker', type: 'Twin Claws', rarity: 12, level: 98, stats: { atk: 625, acc: 98 }, description: 'Divine claws blessed by celestial beings.', element: 'Light', manufacturer: 'Yohmei' },
  
  // Sabers (One-handed)
  { id: 'saber-brand', name: 'Brand', type: 'Saber', rarity: 1, level: 1, stats: { atk: 32, acc: 28 }, description: 'Standard one-handed saber.', manufacturer: 'GRM' },
  { id: 'saber-buster', name: 'Buster', type: 'Saber', rarity: 3, level: 12, stats: { atk: 88, acc: 38 }, description: 'Enhanced single blade.', manufacturer: 'GRM' },
  { id: 'saber-last-survivor', name: 'Last Survivor', type: 'Saber', rarity: 9, level: 58, stats: { atk: 395, acc: 72 }, description: 'Legendary blade of the final warrior.', manufacturer: 'GRM' },

  // Daggers (One-handed)
  { id: 'dagger-dagger', name: 'Dagger', type: 'Dagger', rarity: 1, level: 1, stats: { atk: 28, acc: 35 }, description: 'Basic one-handed dagger.', manufacturer: 'Tenora' },
  { id: 'dagger-bloody-art', name: 'Bloody Art', type: 'Dagger', rarity: 5, level: 25, stats: { atk: 165, acc: 62 }, description: 'Crimson blade that thirsts for blood.', element: 'Fire', manufacturer: 'Kubara' },
  { id: 'dagger-yasminkov', name: 'Yasminkov 2000H', type: 'Dagger', rarity: 10, level: 68, stats: { atk: 438, acc: 88 }, description: 'Advanced photon dagger.', manufacturer: 'GRM' },

  // Claws (One-handed)
  { id: 'claw-claw', name: 'Claw', type: 'Claw', rarity: 1, level: 1, stats: { atk: 30, acc: 32 }, description: 'Basic claw weapon.', manufacturer: 'Kubara' },
  { id: 'claw-brave', name: 'Brave Claw', type: 'Claw', rarity: 4, level: 18, stats: { atk: 128, acc: 48 }, description: 'Enhanced single claw.', manufacturer: 'Kubara' },
  { id: 'claw-heaven', name: 'Heaven Punisher', type: 'Claw', rarity: 11, level: 82, stats: { atk: 505, acc: 95 }, description: 'Divine claw of judgment.', element: 'Light', manufacturer: 'Yohmei' },

  // Whips
  { id: 'whip-whip', name: 'Whip', type: 'Whip', rarity: 1, level: 1, stats: { atk: 35, acc: 30 }, description: 'Flexible long-range melee weapon.', manufacturer: 'Tenora' },
  { id: 'whip-chain', name: 'Chain Whip', type: 'Whip', rarity: 3, level: 14, stats: { atk: 92, acc: 42 }, description: 'Metal chain with increased reach.', manufacturer: 'Tenora' },
  { id: 'whip-killer-sting', name: 'Killer Sting', type: 'Whip', rarity: 6, level: 32, stats: { atk: 218, acc: 62 }, description: 'Poisonous whip that inflicts venom.', manufacturer: 'Tenora' },
  { id: 'whip-bloody', name: 'Bloody Whip', type: 'Whip', rarity: 9, level: 55, stats: { atk: 382, acc: 82 }, description: 'Crimson whip that drains life.', element: 'Dark', manufacturer: 'Kubara' },

  // Slicers
  { id: 'slicer-slicer', name: 'Slicer', type: 'Slicer', rarity: 1, level: 1, stats: { atk: 32, acc: 32 }, description: 'Throwing disc weapon.', manufacturer: 'Tenora' },
  { id: 'slicer-diska', name: 'Diska', type: 'Slicer', rarity: 2, level: 7, stats: { atk: 58, acc: 38 }, description: 'Advanced disc blade.', manufacturer: 'Tenora' },
  { id: 'slicer-guilty-light', name: 'Guilty Light', type: 'Slicer', rarity: 8, level: 45, stats: { atk: 325, acc: 72 }, description: 'Radiant disc of judgment.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'slicer-twin-moon', name: 'Twin Moon', type: 'Slicer', rarity: 13, level: 108, stats: { atk: 675, acc: 105 }, description: 'Dual-phase disc of legendary power.', manufacturer: 'Tenora' },

  // Axes
  { id: 'axe-hand', name: 'Hand Axe', type: 'Axe', rarity: 1, level: 1, stats: { atk: 48, acc: 18 }, description: 'Heavy one-handed axe. Slow but powerful.', manufacturer: 'GRM' },
  { id: 'axe-battle', name: 'Battle Axe', type: 'Axe', rarity: 2, level: 8, stats: { atk: 78, acc: 22 }, description: 'Larger axe with devastating impact.', manufacturer: 'GRM' },
  { id: 'axe-gigush', name: 'Gigush', type: 'Axe', rarity: 5, level: 22, stats: { atk: 168, acc: 32 }, description: 'Massive war axe.', manufacturer: 'GRM' },
  { id: 'axe-lavis', name: 'Lavis Cannon', type: 'Axe', rarity: 6, level: 30, stats: { atk: 225, acc: 38 }, description: 'Massive axe-cannon hybrid weapon.', manufacturer: 'GRM' },
  { id: 'axe-bringer', name: 'Brionac', type: 'Axe', rarity: 8, level: 45, stats: { atk: 335, acc: 52 }, description: 'Lightning-infused great axe.', element: 'Lightning', manufacturer: 'Yohmei' },
  { id: 'axe-agito', name: 'Agito', type: 'Axe', rarity: 11, level: 80, stats: { atk: 520, acc: 65 }, description: 'Legendary demonic axe of tremendous power.', element: 'Dark', manufacturer: 'GRM' },
  { id: 'axe-demolition', name: 'Demolition Comet', type: 'Axe', rarity: 14, level: 128, stats: { atk: 785, acc: 82 }, description: 'Colossal axe that destroys everything.', manufacturer: 'GRM' },

  // Shields
  { id: 'shield-shield', name: 'Shield', type: 'Shield', rarity: 1, level: 1, stats: { def: 45, eva: 15 }, description: 'Basic defensive shield.', manufacturer: 'GRM' },
  { id: 'shield-guard', name: 'Guard Shield', type: 'Shield', rarity: 3, level: 12, stats: { def: 88, eva: 22 }, description: 'Reinforced defensive barrier.', manufacturer: 'GRM' },
  { id: 'shield-solid', name: 'Solid Shield', type: 'Shield', rarity: 6, level: 30, stats: { def: 195, eva: 35 }, description: 'Impenetrable defensive wall.', manufacturer: 'GRM' },
  { id: 'shield-ultimate', name: 'Ultimate Shield', type: 'Shield', rarity: 10, level: 72, stats: { def: 425, eva: 58 }, description: 'Supreme defensive equipment.', manufacturer: 'GRM' },
  
  // === RANGED WEAPONS ===
  // Rifles
  { id: 'rifle-vara', name: 'Vara', type: 'Rifle', rarity: 1, level: 1, stats: { atk: 32, acc: 42 }, description: 'Standard issue rifle for Rangers.', manufacturer: 'GRM' },
  { id: 'rifle-raygun', name: 'Raygun', type: 'Rifle', rarity: 2, level: 7, stats: { atk: 58, acc: 52 }, description: 'Energy rifle with improved accuracy.', manufacturer: 'GRM' },
  { id: 'rifle-visk', name: 'Visk-235W', type: 'Rifle', rarity: 3, level: 12, stats: { atk: 85, acc: 58 }, description: 'Military-grade photon rifle.', manufacturer: 'GRM' },
  { id: 'rifle-visk-upgrade', name: 'Visk-535W', type: 'Rifle', rarity: 4, level: 18, stats: { atk: 122, acc: 65 }, description: 'Upgraded military rifle.', manufacturer: 'GRM' },
  { id: 'rifle-spread', name: 'Spread Needle', type: 'Rifle', rarity: 5, level: 28, stats: { atk: 142, acc: 75 }, description: 'Rapid-fire needle launcher with high hit count.', manufacturer: 'GRM' },
  { id: 'rifle-frozen', name: 'Frozen Shooter', type: 'Rifle', rarity: 6, level: 32, stats: { atk: 195, acc: 82 }, description: 'Ice-infused precision rifle.', element: 'Ice', manufacturer: 'GRM' },
  { id: 'rifle-bazooka', name: 'Bazooka', type: 'Rifle', rarity: 7, level: 38, stats: { atk: 265, acc: 88 }, description: 'Heavy explosive launcher.', element: 'Fire', manufacturer: 'GRM' },
  { id: 'rifle-cannon', name: 'Photon Cannon', type: 'Rifle', rarity: 8, level: 45, stats: { atk: 325, acc: 95 }, description: 'Powerful energy cannon.', manufacturer: 'GRM' },
  { id: 'rifle-yasminkov', name: 'Yasminkov 9000M', type: 'Rifle', rarity: 9, level: 55, stats: { atk: 368, acc: 98 }, description: 'Advanced photon rifle with superior range.', manufacturer: 'GRM' },
  { id: 'rifle-meteor', name: 'Meteor Breaker', type: 'Rifle', rarity: 10, level: 68, stats: { atk: 445, acc: 105 }, description: 'Devastating long-range cannon.', manufacturer: 'GRM' },
  { id: 'rifle-s-rank', name: 'S-Rank Destroyer', type: 'Rifle', rarity: 11, level: 82, stats: { atk: 525, acc: 112 }, description: 'Elite marksman weapon.', manufacturer: 'GRM' },
  { id: 'rifle-heaven', name: "Heaven's Punisher", type: 'Rifle', rarity: 12, level: 95, stats: { atk: 595, acc: 122 }, description: 'Divine rifle that strikes with holy fury.', element: 'Light', manufacturer: 'GRM' },
  { id: 'rifle-infinite', name: 'Infinite Fire', type: 'Rifle', rarity: 13, level: 112, stats: { atk: 695, acc: 128 }, description: 'Unlimited ammunition photon rifle.', manufacturer: 'GRM' },
  { id: 'rifle-omega', name: 'Omega Launcher', type: 'Rifle', rarity: 15, level: 145, stats: { atk: 885, acc: 142 }, description: 'Ultimate destruction weapon.', manufacturer: 'GRM' },
  
  // Shotguns
  { id: 'shotgun-shotgun', name: 'Shotgun', type: 'Shotgun', rarity: 1, level: 1, stats: { atk: 45, acc: 28 }, description: 'Close-range spread shot weapon.', manufacturer: 'Tenora' },
  { id: 'shotgun-spread', name: 'Spreadshot', type: 'Shotgun', rarity: 2, level: 8, stats: { atk: 72, acc: 32 }, description: 'Enhanced scatter gun.', manufacturer: 'Tenora' },
  { id: 'shotgun-slug', name: 'Slug Scatter', type: 'Shotgun', rarity: 3, level: 12, stats: { atk: 92, acc: 38 }, description: 'Powerful shotgun with tight spread.', manufacturer: 'Tenora' },
  { id: 'shotgun-boma', name: "Boma's Claw", type: 'Shotgun', rarity: 5, level: 25, stats: { atk: 158, acc: 52 }, description: 'Beast-inspired devastating shotgun.', manufacturer: 'Kubara' },
  { id: 'shotgun-chaos', name: 'Chaos Breaker', type: 'Shotgun', rarity: 7, level: 35, stats: { atk: 245, acc: 58 }, description: 'Explosive shotgun rounds that cause confusion.', manufacturer: 'Tenora' },
  { id: 'shotgun-meteor', name: 'Meteor Smash', type: 'Shotgun', rarity: 9, level: 58, stats: { atk: 385, acc: 75 }, description: 'Explosive photon shells.', element: 'Fire', manufacturer: 'GRM' },
  { id: 'shotgun-dual', name: 'Dual Barrel', type: 'Shotgun', rarity: 10, level: 70, stats: { atk: 425, acc: 82 }, description: 'Twin-barreled devastation.', element: 'Fire', manufacturer: 'Tenora' },
  { id: 'shotgun-s-beat', name: 'S-Beat\'s Arms', type: 'Shotgun', rarity: 12, level: 98, stats: { atk: 605, acc: 98 }, description: 'Supreme close-range weapon.', manufacturer: 'Tenora' },

  // Longbows
  { id: 'bow-bow', name: 'Bow', type: 'Longbow', rarity: 1, level: 1, stats: { atk: 30, acc: 45 }, description: 'Traditional archery weapon.', manufacturer: 'Yohmei' },
  { id: 'bow-arrow', name: 'Cross Arrow', type: 'Longbow', rarity: 3, level: 14, stats: { atk: 88, acc: 62 }, description: 'Enhanced precision bow.', manufacturer: 'Yohmei' },
  { id: 'bow-heaven', name: 'Heaven Striker', type: 'Longbow', rarity: 7, level: 38, stats: { atk: 272, acc: 88 }, description: 'Divine bow blessed with light.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'bow-phonon', name: 'Phonon Maser', type: 'Longbow', rarity: 11, level: 85, stats: { atk: 515, acc: 115 }, description: 'Advanced energy bow.', manufacturer: 'GRM' },

  // Grenade Launchers
  { id: 'grenade-launcher', name: 'Grenade', type: 'Grenade Launcher', rarity: 1, level: 1, stats: { atk: 42, acc: 25 }, description: 'Explosive projectile launcher.', manufacturer: 'GRM' },
  { id: 'grenade-bomb', name: 'Bomb Launcher', type: 'Grenade Launcher', rarity: 4, level: 20, stats: { atk: 135, acc: 42 }, description: 'Heavy explosive weapon.', manufacturer: 'GRM' },
  { id: 'grenade-meteor', name: 'Meteor Cudgel', type: 'Grenade Launcher', rarity: 8, level: 48, stats: { atk: 342, acc: 68 }, description: 'Meteorite-based explosive launcher.', element: 'Fire', manufacturer: 'GRM' },
  { id: 'grenade-chaos', name: 'Chaos Launcher', type: 'Grenade Launcher', rarity: 12, level: 102, stats: { atk: 625, acc: 95 }, description: 'Ultimate explosive devastation.', element: 'Dark', manufacturer: 'Kubara' },

  // Laser Cannons
  { id: 'laser-cannon', name: 'Laser Cannon', type: 'Laser Cannon', rarity: 1, level: 1, stats: { atk: 38, acc: 38 }, description: 'Basic energy beam weapon.', manufacturer: 'GRM' },
  { id: 'laser-railgun', name: 'Railgun', type: 'Laser Cannon', rarity: 5, level: 28, stats: { atk: 168, acc: 68 }, description: 'Electromagnetic acceleration cannon.', manufacturer: 'GRM' },
  { id: 'laser-meteor', name: 'Meteor Cannon', type: 'Laser Cannon', rarity: 9, level: 62, stats: { atk: 415, acc: 95 }, description: 'Massive energy beam cannon.', manufacturer: 'GRM' },
  { id: 'laser-infinite', name: 'Infinity Cannon', type: 'Laser Cannon', rarity: 14, level: 132, stats: { atk: 795, acc: 125 }, description: 'Unlimited power photon cannon.', manufacturer: 'GRM' },
  
  // Twin Handguns
  { id: 'gun-twin', name: 'Twin Handgun', type: 'Twin Handguns', rarity: 1, level: 1, stats: { atk: 28, acc: 38 }, description: 'Dual pistols for rapid fire.', manufacturer: 'Tenora' },
  { id: 'gun-auto', name: 'Auto Twin', type: 'Twin Handguns', rarity: 2, level: 9, stats: { atk: 52, acc: 48 }, description: 'Automatic pistols with high rate of fire.', manufacturer: 'Tenora' },
  { id: 'gun-twin-varja', name: 'Twin Varja', type: 'Twin Handguns', rarity: 4, level: 22, stats: { atk: 132, acc: 62 }, description: 'Enhanced dual pistols.', manufacturer: 'Tenora' },
  { id: 'gun-justy', name: 'Justy-23ST', type: 'Twin Handguns', rarity: 6, level: 32, stats: { atk: 188, acc: 72 }, description: 'Precision pistols used by elite agents.', manufacturer: 'Tenora' },
  { id: 'gun-twin-phoenix', name: 'Twin Phoenix', type: 'Twin Handguns', rarity: 8, level: 48, stats: { atk: 325, acc: 88 }, description: 'Fire-infused dual pistols.', element: 'Fire', manufacturer: 'Kubara' },
  { id: 'gun-twin-crimson', name: 'Twin Crimson', type: 'Twin Handguns', rarity: 10, level: 72, stats: { atk: 445, acc: 98 }, description: 'Blood-red legendary pistols.', manufacturer: 'Tenora' },
  { id: 'gun-master', name: 'Master Raven', type: 'Twin Handguns', rarity: 11, level: 85, stats: { atk: 485, acc: 105 }, description: 'Legendary pistols of a master marksman.', manufacturer: 'Tenora' },
  { id: 'gun-dual-shadow', name: 'Dual Shadow', type: 'Twin Handguns', rarity: 13, level: 115, stats: { atk: 685, acc: 122 }, description: 'Twin pistols of darkness.', element: 'Dark', manufacturer: 'Kubara' },

  // Handguns (One-handed)
  { id: 'handgun-handgun', name: 'Handgun', type: 'Handgun', rarity: 1, level: 1, stats: { atk: 25, acc: 40 }, description: 'Basic sidearm pistol.', manufacturer: 'Tenora' },
  { id: 'handgun-varja', name: 'Varja', type: 'Handgun', rarity: 3, level: 14, stats: { atk: 82, acc: 58 }, description: 'Enhanced photon pistol.', manufacturer: 'Tenora' },
  { id: 'handgun-justy', name: 'Justy-23ST2', type: 'Handgun', rarity: 7, level: 40, stats: { atk: 285, acc: 82 }, description: 'Advanced single pistol.', manufacturer: 'Tenora' },
  { id: 'handgun-master', name: 'Master Crow', type: 'Handgun', rarity: 12, level: 100, stats: { atk: 615, acc: 108 }, description: 'Legendary single pistol.', manufacturer: 'Tenora' },

  // Crossbows (One-handed)
  { id: 'crossbow-cross', name: 'Crossbow', type: 'Crossbow', rarity: 1, level: 1, stats: { atk: 28, acc: 42 }, description: 'Compact mechanical bow.', manufacturer: 'Yohmei' },
  { id: 'crossbow-silence', name: 'Silence Bow', type: 'Crossbow', rarity: 4, level: 20, stats: { atk: 128, acc: 62 }, description: 'Silent bolt launcher.', manufacturer: 'Yohmei' },
  { id: 'crossbow-frozen', name: 'Frozen Bow', type: 'Crossbow', rarity: 8, level: 50, stats: { atk: 345, acc: 88 }, description: 'Ice-element crossbow.', element: 'Ice', manufacturer: 'Yohmei' },
  { id: 'crossbow-evil', name: 'Evil Curst', type: 'Crossbow', rarity: 13, level: 118, stats: { atk: 705, acc: 118 }, description: 'Cursed crossbow of dark power.', element: 'Dark', manufacturer: 'Kubara' },

  // Cards (One-handed)
  { id: 'card-card', name: 'Card', type: 'Cards', rarity: 1, level: 1, stats: { atk: 26, acc: 45 }, description: 'Throwing card weapons.', manufacturer: 'Tenora' },
  { id: 'card-ace', name: 'Ace Card', type: 'Cards', rarity: 5, level: 28, stats: { atk: 152, acc: 72 }, description: 'Enhanced card set.', manufacturer: 'Tenora' },
  { id: 'card-girasole', name: 'Girasole', type: 'Cards', rarity: 10, level: 75, stats: { atk: 455, acc: 102 }, description: 'Sunflower-pattern legendary cards.', element: 'Light', manufacturer: 'Yohmei' },

  // Machine Guns (One-handed)
  { id: 'mg-machine', name: 'Machine Gun', type: 'Machine Gun', rarity: 1, level: 1, stats: { atk: 30, acc: 35 }, description: 'Rapid-fire automatic weapon.', manufacturer: 'GRM' },
  { id: 'mg-assault', name: 'Assault Gun', type: 'Machine Gun', rarity: 4, level: 22, stats: { atk: 125, acc: 55 }, description: 'Military assault weapon.', manufacturer: 'GRM' },
  { id: 'mg-gatling', name: 'Gatling Gun', type: 'Machine Gun', rarity: 9, level: 62, stats: { atk: 405, acc: 82 }, description: 'Rotating barrel rapid fire.', manufacturer: 'GRM' },
  { id: 'mg-meteor', name: 'Meteor Gatling', type: 'Machine Gun', rarity: 14, level: 135, stats: { atk: 805, acc: 112 }, description: 'Ultimate rapid-fire weapon.', manufacturer: 'GRM' },

  // R-Mags (One-handed)
  { id: 'rmag-mag', name: 'R-Mag', type: 'R-Mag', rarity: 1, level: 1, stats: { atk: 28, acc: 40 }, description: 'Ranged support automaton.', manufacturer: 'GRM' },
  { id: 'rmag-soniti', name: 'Soniti', type: 'R-Mag', rarity: 5, level: 30, stats: { atk: 162, acc: 68 }, description: 'Advanced combat mag.', manufacturer: 'GRM' },
  { id: 'rmag-tellusis', name: 'Tellusis', type: 'R-Mag', rarity: 11, level: 88, stats: { atk: 525, acc: 102 }, description: 'Elite ranged support mag.', manufacturer: 'GRM' },
  
  // === TECHNIC WEAPONS ===
  // Rods (Two-handed)
  { id: 'rod-rod', name: 'Rod', type: 'Rod', rarity: 1, level: 1, stats: { tec: 42, mnd: 35 }, description: 'Basic technique amplifier for Forces.', manufacturer: 'Yohmei' },
  { id: 'rod-cane', name: 'Cane', type: 'Rod', rarity: 2, level: 6, stats: { tec: 68, mnd: 45 }, description: 'Elegant rod with improved technique power.', manufacturer: 'Yohmei' },
  { id: 'rod-baton', name: 'Baton', type: 'Rod', rarity: 3, level: 12, stats: { tec: 92, mnd: 52 }, description: 'Enhanced technique amplifier.', manufacturer: 'Yohmei' },
  { id: 'rod-fire', name: 'Fire Rod', type: 'Rod', rarity: 4, level: 18, stats: { tec: 125, mnd: 62 }, description: 'Rod imbued with fire element.', element: 'Fire', manufacturer: 'Yohmei' },
  { id: 'rod-ice', name: 'Ice Staff', type: 'Rod', rarity: 5, level: 28, stats: { tec: 165, mnd: 72 }, description: 'Frozen staff of ice power.', element: 'Ice', manufacturer: 'Yohmei' },
  { id: 'rod-thunder', name: 'Thunder Cane', type: 'Rod', rarity: 6, level: 35, stats: { atk: 215, mnd: 82 }, description: 'Lightning-infused rod.', element: 'Lightning', manufacturer: 'Yohmei' },
  { id: 'rod-soul', name: 'Soul Eater', type: 'Rod', rarity: 7, level: 42, stats: { tec: 268, mnd: 92 }, description: 'Dark staff that drains energy.', element: 'Dark', manufacturer: 'Kubara' },
  { id: 'rod-striker', name: 'Striker of Chao', type: 'Rod', rarity: 8, level: 45, stats: { tec: 312, mnd: 98 }, description: 'Ancient rod containing chaos energy.', element: 'Dark', manufacturer: 'Yohmei' },
  { id: 'rod-sorcerer', name: "Sorcerer's Cane", type: 'Rod', rarity: 9, level: 58, stats: { tec: 385, mnd: 108 }, description: 'Rod of the ancient sorcerers.', manufacturer: 'Yohmei' },
  { id: 'rod-psycho', name: 'Psycho Wand', type: 'Rod', rarity: 10, level: 72, stats: { tec: 455, mnd: 122 }, description: 'Mind-bending psychic rod.', manufacturer: 'Yohmei' },
  { id: 'rod-heaven', name: 'Heaven Striker', type: 'Rod', rarity: 11, level: 88, stats: { tec: 535, mnd: 135 }, description: 'Divine rod of heavenly power.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'rod-angel', name: 'Angel Rod', type: 'Rod', rarity: 12, level: 90, stats: { tec: 585, mnd: 142 }, description: 'Holy rod blessed by celestial beings.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'rod-sapiens', name: 'Sapiens Rudis', type: 'Rod', rarity: 13, level: 115, stats: { tec: 685, mnd: 158 }, description: 'Ultimate wisdom staff.', manufacturer: 'Yohmei' },
  { id: 'rod-ancient', name: 'Ancient Quartz', type: 'Rod', rarity: 15, level: 148, stats: { tec: 885, mnd: 188 }, description: 'Primordial crystal staff.', element: 'Light', manufacturer: 'Yohmei' },
  
  // Wands (One-handed)
  { id: 'wand-wand', name: 'Wand', type: 'Wand', rarity: 1, level: 1, stats: { tec: 38, mnd: 32, atk: 25 }, description: 'Versatile wand for combat and techniques.', manufacturer: 'Yohmei' },
  { id: 'wand-pole', name: 'Pole', type: 'Wand', rarity: 2, level: 8, stats: { tec: 62, mnd: 42, atk: 35 }, description: 'Enhanced hybrid wand.', manufacturer: 'Yohmei' },
  { id: 'wand-branch', name: 'Branch of Pakupaku', type: 'Wand', rarity: 3, level: 14, stats: { tec: 88, mnd: 58, atk: 45 }, description: 'Nature-infused wand with healing properties.', manufacturer: 'Yohmei' },
  { id: 'wand-fire', name: 'Fire Scepter', type: 'Wand', rarity: 5, level: 30, stats: { tec: 158, mnd: 78, atk: 62 }, description: 'Flaming wand of power.', element: 'Fire', manufacturer: 'Yohmei' },
  { id: 'wand-ice', name: 'Ice Staff', type: 'Wand', rarity: 6, level: 36, stats: { tec: 205, mnd: 88, atk: 72 }, description: 'Frozen wand of healing ice.', element: 'Ice', manufacturer: 'Yohmei' },
  { id: 'wand-holy', name: 'Holy Wand', type: 'Wand', rarity: 7, level: 38, stats: { tec: 252, mnd: 112, atk: 88 }, description: 'Sacred wand that enhances support techniques.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'wand-earth', name: 'Earth Wand', type: 'Wand', rarity: 9, level: 62, stats: { tec: 395, mnd: 135, atk: 112 }, description: 'Nature wand with healing power.', manufacturer: 'Yohmei' },
  { id: 'wand-mayalee', name: 'Mayalee', type: 'Wand', rarity: 11, level: 90, stats: { tec: 525, mnd: 162, atk: 142 }, description: 'Legendary support wand.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'wand-scepter', name: 'Scepter of Life', type: 'Wand', rarity: 13, level: 105, stats: { tec: 655, mnd: 188, atk: 165 }, description: 'Legendary wand granting power over life itself.', element: 'Light', manufacturer: 'Yohmei' },
  { id: 'wand-divine', name: 'Divine Visage', type: 'Wand', rarity: 16, level: 160, stats: { tec: 975, mnd: 242, atk: 225 }, description: 'Ultimate holy wand of gods.', element: 'Light', manufacturer: 'Yohmei' },

  // Tech-Mags (One-handed)
  { id: 'tmag-mag', name: 'Tech-Mag', type: 'Tech-Mag', rarity: 1, level: 1, stats: { tec: 35, mnd: 38 }, description: 'Technique support automaton.', manufacturer: 'GRM' },
  { id: 'tmag-kalki', name: 'Kalki', type: 'Tech-Mag', rarity: 4, level: 24, stats: { tec: 128, mnd: 68 }, description: 'Advanced tech support mag.', manufacturer: 'GRM' },
  { id: 'tmag-kama', name: 'Kama', type: 'Tech-Mag', rarity: 8, level: 52, stats: { tec: 335, mnd: 108 }, description: 'Elite technique mag.', manufacturer: 'GRM' },
  { id: 'tmag-kumara', name: 'Kumara', type: 'Tech-Mag', rarity: 12, level: 105, stats: { tec: 625, mnd: 152 }, description: 'Supreme support automaton.', manufacturer: 'GRM' },
];

export const shieldWeaves: EquipmentItem[] = [
  // Low level shield-weaves
  { id: 'armor-car', name: 'Car Weave', type: 'Shield-weave', rarity: 1, level: 1, stats: { def: 27, eva: 20, mnd: 47 }, description: 'Basic protective shield-weave.', manufacturer: 'Yohmei' },
  { id: 'armor-carasenba', name: 'Cara-senba', type: 'Shield-weave', rarity: 1, level: 1, stats: { def: 46, eva: 19, mnd: 28 }, description: 'Defense-focused shield-weave.', manufacturer: 'Tenora' },
  { id: 'armor-brand', name: 'Brand Weave', type: 'Shield-weave', rarity: 2, level: 3, stats: { def: 39, eva: 20, mnd: 55 }, description: 'Balanced protective gear.', manufacturer: 'Yohmei' },
  { id: 'armor-wings', name: 'Wings Weave', type: 'Shield-weave', rarity: 2, level: 5, stats: { def: 33, eva: 24, mnd: 58 }, description: 'Lightweight armor with 4 module slots.', manufacturer: 'Yohmei' },
  
  // Mid level
  { id: 'armor-buster', name: 'Buster Weave', type: 'Shield-weave', rarity: 3, level: 8, stats: { def: 51, eva: 26, mnd: 72 }, description: 'Sturdy shield-weave for mid-level combat.', manufacturer: 'Yohmei' },
  { id: 'armor-stella', name: 'Stella Weave', type: 'Shield-weave', rarity: 3, level: 10, stats: { def: 45, eva: 34, mnd: 79 }, description: 'Star-themed armor with high evasion.', manufacturer: 'Yohmei', element: 'Light' },
  { id: 'armor-zeet', name: 'Zeet Weave', type: 'Shield-weave', rarity: 4, level: 12, stats: { def: 66, eva: 34, mnd: 94 }, description: 'Advanced protection for Rangers.', manufacturer: 'Yohmei' },
  { id: 'armor-megaline', name: 'Megaline', type: 'Shield-weave', rarity: 4, level: 14, stats: { def: 59, eva: 44, mnd: 103 }, description: 'High mobility armor with excellent evasion.', manufacturer: 'Yohmei' },
  
  // High level
  { id: 'armor-gigaline', name: 'Gigaline', type: 'Shield-weave', rarity: 5, level: 20, stats: { def: 74, eva: 55, mnd: 129 }, description: 'Premium shield-weave for advanced players.', manufacturer: 'Yohmei', element: 'Light' },
  { id: 'armor-tero', name: 'Tero Weave', type: 'Shield-weave', rarity: 6, level: 25, stats: { def: 92, eva: 69, mnd: 161 }, description: 'Heavy-duty protection.', manufacturer: 'Yohmei', element: 'Light' },
  { id: 'armor-walker', name: 'Walker Weave', type: 'Shield-weave', rarity: 7, level: 30, stats: { def: 130, eva: 67, mnd: 183 }, description: 'Elite shield-weave for serious adventurers.', manufacturer: 'Yohmei' },
  { id: 'armor-phantom', name: 'Phantom Weave', type: 'Shield-weave', rarity: 7, level: 30, stats: { def: 178, eva: 65, mnd: 135 }, description: 'Ghostly armor with defense focus.', manufacturer: 'Yohmei' },
  
  // End game
  { id: 'armor-gigush', name: 'Gigush Weave', type: 'Shield-weave', rarity: 8, level: 40, stats: { def: 156, eva: 81, mnd: 219 }, description: 'Top-tier protection for veterans.', manufacturer: 'Yohmei' },
  { id: 'armor-solid', name: 'Solid Weave', type: 'Shield-weave', rarity: 8, level: 40, stats: { def: 138, eva: 104, mnd: 242 }, description: 'Maximum evasion shield-weave.', manufacturer: 'Yohmei' },
  { id: 'armor-cati', name: 'Cati Weave', type: 'Shield-weave', rarity: 9, level: 50, stats: { def: 163, eva: 122, mnd: 286 }, description: 'Legendary armor with exceptional balance.', manufacturer: 'Yohmei', element: 'Light' },
  { id: 'armor-crimson', name: 'Crimson Weave', type: 'Shield-weave', rarity: 9, level: 50, stats: { def: 252, eva: 92, mnd: 191 }, description: 'Blood-red armor of champions.', manufacturer: 'Yohmei' },
  { id: 'armor-orpa', name: 'Orpa Weave', type: 'Shield-weave', rarity: 10, level: 65, stats: { def: 189, eva: 142, mnd: 332 }, description: 'Divine protection for the chosen.', manufacturer: 'Yohmei' },
  { id: 'armor-lumirus', name: 'Lumirus Weave', type: 'Shield-weave', rarity: 11, level: 80, stats: { def: 216, eva: 162, mnd: 378 }, description: 'Radiant armor blessed with light.', manufacturer: 'Yohmei', element: 'Light' },
  { id: 'armor-vijerina', name: 'Vijerina Weave', type: 'Shield-weave', rarity: 12, level: 90, stats: { def: 242, eva: 181, mnd: 423 }, description: 'Masterwork shield-weave of legend.', manufacturer: 'Yohmei', element: 'Light' },
  { id: 'armor-gerard', name: 'Gerard Weave', type: 'Shield-weave', rarity: 13, level: 100, stats: { def: 266, eva: 200, mnd: 466 }, description: 'Ultimate defensive equipment.', manufacturer: 'Yohmei' },
];

export const modules: EquipmentItem[] = [
  // ATK Modules
  { id: 'mod-perpa-power', name: 'Perpa / Power', type: 'Module - ATK', rarity: 2, level: 1, stats: { atk: 5 }, description: 'Increases attack power.', manufacturer: 'GRM' },
  { id: 'mod-giga-power', name: 'Giga / Power', type: 'Module - ATK', rarity: 5, level: 1, stats: { atk: 10 }, description: 'Significantly boosts attack.', manufacturer: 'GRM' },
  { id: 'mod-solid-power', name: 'Solid / Power', type: 'Module - ATK', rarity: 8, level: 1, stats: { atk: 15 }, description: 'Major attack enhancement.', manufacturer: 'GRM' },
  { id: 'mod-lumirus-power', name: 'Lumirus / Power', type: 'Module - ATK', rarity: 11, level: 1, stats: { atk: 20 }, description: 'Elite attack boost.', manufacturer: 'GRM' },
  { id: 'mod-feril-power', name: 'Feril / Power', type: 'Module - ATK', rarity: 14, level: 1, stats: { atk: 25 }, description: 'Superior attack power.', manufacturer: 'GRM' },
  { id: 'mod-infinite-power', name: 'Infinite / Power', type: 'Module - ATK', rarity: 16, level: 1, stats: { atk: 30 }, description: 'Maximum attack enhancement.', manufacturer: 'GRM' },
  
  // DEF Modules
  { id: 'mod-perpa-guard', name: 'Perpa / Guard', type: 'Module - DEF', rarity: 2, level: 1, stats: { def: 5 }, description: 'Increases defense.', manufacturer: 'Tenora' },
  { id: 'mod-giga-guard', name: 'Giga / Guard', type: 'Module - DEF', rarity: 5, level: 1, stats: { def: 10 }, description: 'Significantly boosts defense.', manufacturer: 'Tenora' },
  { id: 'mod-solid-guard', name: 'Solid / Guard', type: 'Module - DEF', rarity: 8, level: 1, stats: { def: 15 }, description: 'Major defense enhancement.', manufacturer: 'Tenora' },
  { id: 'mod-lumirus-guard', name: 'Lumirus / Guard', type: 'Module - DEF', rarity: 11, level: 1, stats: { def: 20 }, description: 'Elite defense boost.', manufacturer: 'Tenora' },
  
  // TEC Modules
  { id: 'mod-hel-force', name: 'Hel / Force', type: 'Module - TEC', rarity: 2, level: 1, stats: { tec: 5 }, description: 'Increases technique power.', manufacturer: 'Yohmei' },
  { id: 'mod-gi-force', name: 'Gi / Force', type: 'Module - TEC', rarity: 5, level: 1, stats: { tec: 10 }, description: 'Significantly boosts techniques.', manufacturer: 'Yohmei' },
  { id: 'mod-sori-force', name: 'Sori / Force', type: 'Module - TEC', rarity: 8, level: 1, stats: { tec: 15 }, description: 'Major technique enhancement.', manufacturer: 'Yohmei' },
  { id: 'mod-lumira-force', name: 'Lumira / Force', type: 'Module - TEC', rarity: 11, level: 1, stats: { tec: 20 }, description: 'Elite technique power.', manufacturer: 'Yohmei' },
  
  // MND Modules
  { id: 'mod-hel-mind', name: 'Hel / Mind', type: 'Module - MND', rarity: 2, level: 1, stats: { mnd: 5 }, description: 'Increases mental defense.', manufacturer: 'Yohmei' },
  { id: 'mod-gi-mind', name: 'Gi / Mind', type: 'Module - MND', rarity: 5, level: 1, stats: { mnd: 10 }, description: 'Significantly boosts mind.', manufacturer: 'Yohmei' },
  { id: 'mod-sori-mind', name: 'Sori / Mind', type: 'Module - MND', rarity: 8, level: 1, stats: { mnd: 15 }, description: 'Major mind enhancement.', manufacturer: 'Yohmei' },
  
  // ACC Modules
  { id: 'mod-perpa-hit', name: 'Perpa / Hit', type: 'Module - ACC', rarity: 2, level: 1, stats: { acc: 3 }, description: 'Increases accuracy.', manufacturer: 'GRM' },
  { id: 'mod-giga-hit', name: 'Giga / Hit', type: 'Module - ACC', rarity: 5, level: 1, stats: { acc: 6 }, description: 'Significantly boosts accuracy.', manufacturer: 'GRM' },
  { id: 'mod-solid-hit', name: 'Solid / Hit', type: 'Module - ACC', rarity: 8, level: 1, stats: { acc: 9 }, description: 'Major accuracy enhancement.', manufacturer: 'GRM' },
  
  // EVA Modules
  { id: 'mod-perpa-legs', name: 'Perpa / Legs', type: 'Module - EVA', rarity: 2, level: 1, stats: { eva: 3 }, description: 'Increases evasion.', manufacturer: 'Tenora' },
  { id: 'mod-giga-legs', name: 'Giga / Legs', type: 'Module - EVA', rarity: 5, level: 1, stats: { eva: 6 }, description: 'Significantly boosts evasion.', manufacturer: 'Tenora' },
  { id: 'mod-solid-legs', name: 'Solid / Legs', type: 'Module - EVA', rarity: 8, level: 1, stats: { eva: 9 }, description: 'Major evasion enhancement.', manufacturer: 'Tenora' },
  
  // STA Modules
  { id: 'mod-perpa-stamina', name: 'Perpa / Stamina', type: 'Module - STA', rarity: 2, level: 1, stats: { sta: 3 }, description: 'Increases stamina.', manufacturer: 'GRM' },
  { id: 'mod-giga-stamina', name: 'Giga / Stamina', type: 'Module - STA', rarity: 5, level: 1, stats: { sta: 4 }, description: 'Significantly boosts stamina.', manufacturer: 'GRM' },
  { id: 'mod-solid-stamina', name: 'Solid / Stamina', type: 'Module - STA', rarity: 8, level: 1, stats: { sta: 5 }, description: 'Major stamina enhancement.', manufacturer: 'GRM' },
  
  // Resist Modules
  { id: 'mod-burn-resist', name: 'Burn Resist', type: 'Module - Resist', rarity: 8, level: 1, stats: {}, description: 'Complete immunity to Burn status.', manufacturer: 'GRM' },
  { id: 'mod-ice-resist', name: 'Ice Resist', type: 'Module - Resist', rarity: 8, level: 1, stats: {}, description: 'Complete immunity to Freeze status.', manufacturer: 'GRM' },
  { id: 'mod-shock-resist', name: 'Shock Resist', type: 'Module - Resist', rarity: 8, level: 1, stats: {}, description: 'Complete immunity to Shock status.', manufacturer: 'GRM' },
  { id: 'mod-poison-resist', name: 'Poison Resist', type: 'Module - Resist', rarity: 8, level: 1, stats: {}, description: 'Complete immunity to Poison status.', manufacturer: 'GRM' },
  { id: 'mod-confuse-resist', name: 'Confuse Resist', type: 'Module - Resist', rarity: 8, level: 1, stats: {}, description: 'Complete immunity to Confuse status.', manufacturer: 'GRM' },
  
  // Blast Modules
  { id: 'mod-flaming-roar', name: 'Flaming Roar', type: 'Module - Blast', rarity: 4, level: 1, stats: { sta: 1 }, description: 'Equips Nui mirage blast (Fire element).', manufacturer: 'GRM' },
  { id: 'mod-snow-gust', name: 'Snow Gust', type: 'Module - Blast', rarity: 4, level: 1, stats: { sta: 1 }, description: 'Equips Konl mirage blast (Ice element).', manufacturer: 'GRM' },
  { id: 'mod-thunder-flash', name: 'Thunder Flash', type: 'Module - Blast', rarity: 4, level: 1, stats: { sta: 1 }, description: 'Equips Canna mirage blast (Lightning element).', manufacturer: 'GRM' },
  { id: 'mod-light-haven', name: 'Light Haven', type: 'Module - Blast', rarity: 4, level: 1, stats: { sta: 1 }, description: 'Equips Pilika mirage blast (Light element).', manufacturer: 'GRM' },
  { id: 'mod-dark-embrace', name: 'Dark Embrace', type: 'Module - Blast', rarity: 4, level: 1, stats: { sta: 1 }, description: 'Equips Kun\'ne mirage blast (Dark element).', manufacturer: 'GRM' },
];

export const wikiPages: WikiPage[] = [
  // Popular Pages
  {
    id: 'english-patch',
    categoryId: 'modifications',
    title: 'English Patch',
    content: `# English Patch

Version 2 by JamRules and Weyu (Released August 27, 2022)

## Overview
The English Patch translates the Japanese-only PSP2i into English, making the game accessible to English-speaking players.

## Features
- Full menu translation
- Quest and mission text
- Item names and descriptions
- NPC dialogue
- Story content

## Installation
1. Download the patch from GBATemp thread
2. Apply to your PSP2i ISO using the provided tools
3. Load patched ISO in PPSSPP emulator

## Compatibility
- Works with PPSSPP on Android, PC, and Steam Deck
- Compatible with multiplayer via ZeroTier One`,
    tags: ['modification', 'translation', 'patch', 'essential'],
    lastUpdated: '2022-08-27',
  },
  {
    id: 'multiplayer',
    categoryId: 'modifications',
    title: 'Setting Up Multiplayer',
    content: `# Multiplayer Guide

## ZeroTier One Method
The PSP2i Wiki now hosts its own ad hoc server through ZeroTier One.

### Setup Steps
1. Install ZeroTier One on your device
2. Join the PSP2i network (ID available on wiki)
3. Configure PPSSPP ad hoc settings
4. Launch game and enter multiplayer lobby

### Platforms Supported
- PC (Windows/Mac/Linux)
- Android
- Steam Deck

### Connection Tips
- Ensure ZeroTier is running before launching PPSSPP
- Check firewall settings
- Use wired connection for best stability`,
    tags: ['multiplayer', 'online', 'zerotier', 'guide'],
    lastUpdated: '2023-05-22',
  },
  {
    id: 'weapons-overview',
    categoryId: 'weapons',
    title: 'Weapons Overview',
    content: `# Weapons

## Weapon Types

### Swords
Balanced melee weapons for close combat.
- High attack power
- Moderate speed
- Good for Hunter class

### Spears
Long-range melee with pierce attacks.
- Extended reach
- Combo-focused
- Excellent for crowd control

### Daggers
Fast dual-wielding weapons.
- Rapid attacks
- High mobility
- Critical hit focused

### Rifles
Ranged firearms for Ranger class.
- Long-range attacks
- High accuracy
- Various elemental types

### Rods
Magic weapons for Force class.
- Technique boosting
- Elemental damage
- Support capabilities

## Weapon Grades
★☆☆☆☆ - Common
★★☆☆☆ - Uncommon
★★★☆☆ - Rare
★★★★☆ - Super Rare
★★★★★ - Legendary

## Enhancement
Weapons can be enhanced up to +10 using Grinders and Meseta at the Synthesis Shop.`,
    tags: ['weapons', 'equipment', 'combat', 'guide'],
    lastUpdated: '2024-02-18',
  },
  {
    id: 'races',
    categoryId: 'races',
    title: 'Races',
    content: `# Character Races

## Human
The balanced race with no major weaknesses.
- **Strengths**: Well-rounded stats
- **Best for**: All play styles
- **Starting HP**: 100
- **Starting TP**: 100

## Newman
Slender humanoids with high mental capabilities.
- **Strengths**: High TP, technique power
- **Weaknesses**: Lower HP and defense
- **Best for**: Force class
- **Starting HP**: 80
- **Starting TP**: 140

## CAST
Mechanical beings with superior physical stats.
- **Strengths**: High HP and attack
- **Weaknesses**: Lower TP
- **Best for**: Hunter, Ranger
- **Starting HP**: 140
- **Starting TP**: 60

## Deuman
Mysterious race with dark powers.
- **Strengths**: Balanced offense, unique abilities
- **Weaknesses**: Slightly lower defense
- **Best for**: Braver, versatile builds
- **Starting HP**: 110
- **Starting TP**: 110`,
    tags: ['races', 'character', 'creation', 'stats'],
    lastUpdated: '2024-01-15',
  },
  {
    id: 'types',
    categoryId: 'types',
    title: 'Character Types',
    content: `# Character Types (Classes)

## Hunter
Melee combat specialist.
- **Primary Weapons**: Swords, Spears, Axes
- **Playstyle**: Close-range tank
- **Key Skills**: Heavy Strike, Guard abilities
- **Recommended Races**: CAST, Human

## Ranger
Ranged attack expert.
- **Primary Weapons**: Rifles, Shotguns, Crossbows
- **Playstyle**: Mid to long-range DPS
- **Key Skills**: Weak Bullet, Traps
- **Recommended Races**: Human, CAST

## Force
Technique (magic) user.
- **Primary Weapons**: Rods, Wands
- **Playstyle**: Elemental damage and support
- **Key Skills**: Elemental techniques, Resta
- **Recommended Races**: Newman, Deuman

## Braver
Hybrid melee/ranged fighter.
- **Primary Weapons**: Katanas, Dual Sabers
- **Playstyle**: Versatile combat
- **Key Skills**: Quick Draw, Stance switching
- **Recommended Races**: Deuman, Human`,
    tags: ['classes', 'types', 'character', 'guide'],
    lastUpdated: '2024-01-20',
  },
  {
    id: 'infinity-missions',
    categoryId: 'missions',
    title: 'Infinity Missions',
    content: `# Infinity Missions

Endless challenge missions with increasing difficulty.

## Overview
Infinity Missions are procedurally generated dungeons that get progressively harder. Perfect for grinding experience and rare items.

## Features
- **Floors**: Unlimited progression
- **Difficulty**: Increases every 5 floors
- **Rewards**: Rare weapons, modules, meseta
- **Party**: 1-4 players

## Floor Milestones
- **Floor 10**: First boss encounter
- **Floor 25**: Rare item pool unlocked
- **Floor 50**: Super rare drops available
- **Floor 100+**: Legendary tier equipment

## Tips
- Stock up on healing items
- Bring balanced party composition
- Save progress every 10 floors
- Use Blast abilities strategically`,
    tags: ['missions', 'endgame', 'grinding', 'infinity'],
    lastUpdated: '2024-02-10',
  },
  {
    id: 'creatures',
    categoryId: 'creatures',
    title: 'Creatures Database',
    content: `# Enemy Creatures

## Common Enemies

### Booma
Basic creature found in forest areas.
- **HP**: 250
- **Weaknesses**: Fire
- **Drops**: Monomate, Meseta
- **Behavior**: Aggressive, swarm attacks

### Rappies
Rare bird-like creatures.
- **HP**: 50 (flees quickly)
- **Weaknesses**: All elements
- **Drops**: Rare items, experience boost
- **Behavior**: Non-aggressive, runs away

### Dark Ragne
Dragon-type boss enemy.
- **HP**: 15,000
- **Weaknesses**: Ice, Light
- **Drops**: Dark weapons, rare modules
- **Behavior**: Flying attacks, breath weapon

## Boss Enemies

### Deljaban
Massive insectoid boss.
- **HP**: 25,000
- **Weaknesses**: Fire
- **Phases**: 3
- **Special Attack**: Poison spray
- **Strategy**: Target weak points on legs

### De Rol Le
Giant worm boss from underwater missions.
- **HP**: 30,000
- **Weaknesses**: Lightning
- **Phases**: 2
- **Special Attack**: Shell defense mode
- **Strategy**: Attack exposed core`,
    tags: ['enemies', 'creatures', 'boss', 'database'],
    lastUpdated: '2024-02-05',
  },
  {
    id: 'photon-arts',
    categoryId: 'photon-arts',
    title: 'Photon Arts Guide',
    content: `# Photon Arts

Special techniques that consume PP (Photon Points).

## Sword Photon Arts

### Rising Strike
Upward slash that launches enemies.
- **PP Cost**: 20
- **Power**: 180%
- **Hits**: 2
- **Effect**: Knockup

### Spinning Break
360° spinning slash.
- **PP Cost**: 25
- **Power**: 220%
- **Hits**: 3
- **Effect**: Area damage

## Rifle Photon Arts

### Piercing Shot
Penetrating bullet that hits multiple targets.
- **PP Cost**: 18
- **Power**: 150%
- **Range**: Long
- **Effect**: Pierce through enemies

### Satellite Aim
Locked-on homing shots.
- **PP Cost**: 30
- **Power**: 280%
- **Hits**: 8
- **Effect**: Auto-tracking

## Rod Techniques

### Foie (Fire)
Single-target fire spell.
- **TP Cost**: 15
- **Power**: 200%
- **Element**: Fire
- **Effect**: Burn chance

### Zonde (Lightning)
Chain lightning attack.
- **TP Cost**: 22
- **Power**: 180%
- **Element**: Lightning
- **Effect**: Chains to nearby enemies`,
    tags: ['photon-arts', 'techniques', 'combat', 'skills'],
    lastUpdated: '2024-01-28',
  },
  // Equipment Pages
  {
    id: 'equipment-weapons',
    categoryId: 'weapons',
    title: 'Complete Weapons Database',
    content: `# Weapons Database

Comprehensive listing of all weapons in PSP2i.

## Weapon Categories

### Striking Weapons
Melee weapons for close-range combat.
- **Swords**: Balanced two-handed weapons
- **Spears**: Long reach with piercing attacks
- **Axes**: Heavy damage, slower attacks
- **Twin Daggers**: Fast dual-wielding
- **Knuckles**: Rapid punches and combos

### Ranged Weapons
Projectile weapons for long-distance fighting.
- **Rifles**: High accuracy, long range
- **Shotguns**: Close-range spread damage
- **Twin Handguns**: Dual pistols, rapid fire
- **Longbows**: Charged shots, precision
- **Grenade Launchers**: Explosive area damage

### Technic Weapons
Magical implements for Force class.
- **Rods**: Technique power boosting
- **Wands**: Hybrid combat/technique
- **Tech-Mags**: Support focused

## Rarity System
★☆☆☆☆ 1-Star: Common equipment
★★☆☆☆ 2-Star: Uncommon
★★★☆☆ 3-Star: Rare
★★★★☆ 4-6 Star: Super Rare
★★★★★ 7-10 Star: Ultra Rare
★★★★★ 11-13 Star: Legendary
★★★★★ 14-16 Star: Mythic

## Manufacturers

### GRM
Specializes in physical weapons.
- Focus: ATK and ACC stats
- Best for: Hunters and Rangers
- Signature: Swords, Rifles, Axes

### Yohmei
Technic-focused manufacturer.
- Focus: TEC and MND stats
- Best for: Forces
- Signature: Rods, Wands, Spears

### Tenora Works
Balanced equipment maker.
- Focus: EVA and DEF stats
- Best for: All classes
- Signature: Twin weapons, Shotguns`,
    tags: ['weapons', 'equipment', 'database', 'guide'],
    lastUpdated: '2024-02-20',
  },
  {
    id: 'equipment-armor',
    categoryId: 'shield-weaves',
    title: 'Shield-weaves Guide',
    content: `# Shield-weaves (Armor)

Defensive equipment that protects against damage.

## What are Shield-weaves?
Photon-based defensive barriers that spread across the body surface, repelling incoming attacks and energy.

## Stats Provided
- **DEF**: Physical damage reduction
- **EVA**: Evasion chance increase
- **MND**: Mental/technique defense

## Module Slots
Shield-weaves can equip modules:
- C-Rank: 2 slots
- B-Rank: 3 slots
- A/S-Rank: 4 slots

## Manufacturer Specializations

### Yohmei Weaves
Focus on MND stat.
- Suffix: "Weave"
- Best for: Forces and technique users
- Example: Lumirus Weave, Cati Weave

### Tenora -senba Series
Focus on DEF stat.
- Suffix: "-senba"
- Best for: Hunters and tanks
- Example: Gi-senba, Feri-senba

### GRM Rabol Series
Focus on EVA stat.
- Prefix: "Rabol"
- Best for: Rangers and dodge builds
- Example: Rabol Giga, Rabol Orpad

## Elemental Attributes
Shield-weaves can have elemental resistance up to 60%:
- Fire, Ice, Lightning, Light, Dark
- Reduces damage from matching element
- Increases damage from opposing element

## Set Effects
Some shield-weaves grant bonuses when equipped with specific weapons. Check individual equipment for set compatibility.`,
    tags: ['armor', 'shield-weaves', 'defense', 'equipment'],
    lastUpdated: '2024-02-20',
  },
  {
    id: 'equipment-modules',
    categoryId: 'modules',
    title: 'Modules System',
    content: `# Modules (Units)

Enhancement equipment that links to shield-weaves.

## Module Types

### Stat Modules
Direct stat increases:
- **Power**: ATK +5/10/15/20/25/30
- **Guard**: DEF +5/10/15/20/25
- **Force**: TEC +5/10/15/20/25/30
- **Mind**: MND +5/10/15/20/25
- **Hit**: ACC +3/6/9/12/15/18
- **Legs**: EVA +3/6/9/12/15/18
- **Stamina**: STA +3/4/5/6/7

### Resist Modules
Status effect immunity:
- Burn Resist: Immune to fire status
- Ice Resist: Immune to freeze
- Shock Resist: Immune to paralysis
- Poison Resist: Immune to poison
- Confuse Resist: Immune to confusion
- Sleep Resist: Immune to sleep
- Virus Resist: Immune to infection

### Blast Modules
Enable use of special abilities:

**Mirage Blasts** (Humans/Newmans):
- Flaming Roar (Fire)
- Snow Gust (Ice)
- Thunder Flash (Lightning)
- Light Haven (Light)
- Dark Embrace (Dark)

**SUV-Weapons** (CASTs):
- Hegel Buster
- Rafal Buster
- Blitz Buster
- Various specialized weapons

## Module Ranks
Modules must match shield-weave rank:
- 2★ modules: C-rank armor or higher
- 5★ modules: B-rank armor or higher
- 8★ modules: A-rank armor or higher
- 11★ modules: S-rank armor or higher

## Stacking Rules
- Stat modules: Stack unlimited
- Resist modules: Stack different types only
- Blast modules: Only ONE per armor`,
    tags: ['modules', 'units', 'enhancement', 'equipment'],
    lastUpdated: '2024-02-20',
  },
];
