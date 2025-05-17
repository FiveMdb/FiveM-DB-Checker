
export interface BlacklistEntry {
  name: string;
  links?: string[];
  reason: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  blacklistedSince?: string;
  category: 'discord' | 'tebex' | 'discord-other' | 'other'; 
  keyword: string; // Added keyword field
  flaggedBy: string; // Added what flags it field
  discordServerId?: string; // Added Discord server ID field
}

// Global whitelist words - these will be exempted from flagging
export const GLOBAL_WHITELIST = [
  "FiveM",
  "fivem",
  "5m"
];

// This can be easily extended with more entries
//'low' | 'medium' | 'high' | 'critical';
export const BLACKLISTED_CREATORS: BlacklistEntry[] = [
  // Brothers Fivem
  {
    name: "Brothers Fivem",
    links: ["https://discord.gg/cg2s7ucAjV"],
    reason: "Leaking, Stolen Assets, Reselling",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1322275793954406400",
    flaggedBy: "Rwix" 
  },
  // Auto Leaks
  {
    name: "Auto Leaks",
    links: ["https://discord.gg/cq53SPFeHw"],
    reason: "Leaking, Stolen Assets",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "790888749864189963",
    flaggedBy: "Rwix" //
  },
  // FiveMX
  {
    name: "Fivemx",
    links: ["https://fivemx.com/"],
    reason: "None Auth Marketplace, IP Infringement, Reselling, Leaking, Stolen Assets",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivemx", //search keyword
    flaggedBy: "Baldwin" //
  },
  // AIO CARS
  {
    name: "Aiocars",
    links: ["https://aiocars.net/", "https://discord.gg/5kgesahFgJ"],
    reason: "None Auth Marketplace, IP Infringement",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "aiocars", //search keyword
    discordServerId: "1086196327601414185",
    flaggedBy: "Baldwin" //
  },
  //FivemCar
  {
    name: "Fivemcar",
    links: ["https://fivemcar.com/", "https://discord.gg/qualitycar", "https://www.youtube.com/@fivemcar"],
    reason: "None Auth Marketplace, Leaking, Stolen Assets, IP Infringement",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "fivemcar", //search keyword
    discordServerId: "1179358932305723453",
    flaggedBy: "Baldwin" //
  },
  // FIVE GUARD ANTI CHEAT
  {
    name: "FiveGuard",
    links: ["https://fiveguard.net/", "https://discord.gg/fiveguard", "https://discord.com/invite/fiveguard"],
    reason: "Breaking Tebex Selling License, Suspected 'Cipher'",
    severity: "critical",
    blacklistedSince: "16-05-2025",
    category: "discord",
    keyword: "fiveguard",
    discordServerId: "901177948248367135",
    flaggedBy: "Sophia"
  },
  // DigitialLatvia
  {
    name: "DigitialLatvia",
    links: ["https://digitiallatvia.com/", "https://discord.com/invite/4qp2bDEJbv", "https://discord.gg/4qp2bDEJbv"],
    reason: "Selling NOT on Tebex, IP Infringement",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "DigitialLatvia", //search keyword
    discordServerId: "1034752490199056454",
    flaggedBy: "Baldwin" //
  }, 
  // Five.gg
  {
    name: "Fivem.gg",
    links: ["https://fivem.gg/", "https://discord.com/invite/RYVS7Z3CPd", "https://discord.gg/RYVS7Z3CPd"],
    reason: "Selling NOT on Tebex, IP Infringement, Reselling, Leaking, Stolen Assets",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivem.gg", //search keyword
    discordServerId: "835577326997078037",
    flaggedBy: "Baldwin" //
  },
  // MenanAk47
  {
    name: "MenanAk47",
    links: ["https://menanak47.tebex.io/", "https://discord.com/invite/menanak47", "https://discord.gg/menanak47"],
    reason: "Stealing Assets, Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "tebex", // discord//tebex/other
    keyword: "MenanAk47", //search keyword
    discordServerId: "732300641451638896",
    flaggedBy: "Baldwin" //
  },
  // Fiverr
  {
    name: "Fiverr",
    links: ["https://www.fiverr.com/"],
    reason: "None Auth Marketplace",
    severity: "medium", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fiverr", //search keyword
    flaggedBy: "Baldwin" //
  },
  // Esty
  {
    name: "Etsy",
    links: ["https://www.etsy.com/"],
    reason: "None Auth Marketplace",
    severity: "medium", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "Etsy", //search keyword
    flaggedBy: "Baldwin" //
  },
  // FiveM Store
  {
    name: "Fivem-Store",
    links: ["https://fivem-store.com/", "https://discord.com/invite/78JAQvFXYu", "https://discord.gg/78JAQvFXYu"],
    reason: "Selling NOT on Tebex, IP Infringement, Leaking, Stolen Assets, Reselling, ", 
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivem store", //search keyword
    discordServerId: "692518894442643479",
    flaggedBy: "Baldwin" //
  }, 
  //5mservers
  {
    name: "5mservers",
    links: ["https://www.5mservers.com/", "https://discord.com/invite/cZEZbjzxN5", "https://discord.gg/cZEZbjzxN5", "https://www.youtube.com/@Team.5M"],
    reason: "IP Infringement, Leaking, re-selling, Theft, Un-Auth Marketplace, illegal",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "5mservers", //search keyword
    discordServerId: "897143527727841322",
    flaggedBy: "Baldwin" //
  },
  // Dracula Scripts
  {
    name: "Dracula Scripts",
    links: ["https://www.youtube.com/@DraculaScripts", "https://discord.com/invite/F9YsMUwnWK", "https://discord.gg/F9YsMUwnWK", "https://buymeacoffee.com/draculaservice"],
    reason: "IP Infringement, Leaking, Stolen Assets, None Auth Marketplace",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "16-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "Dracula-Scripts", //search keyword
    discordServerId: "1067264593044451380",
    flaggedBy: "Baldwin" //
  },
  // phoenix ANTI CHEAT
  {
    name: "Phoenix AntiCheat",
    links: ["https://www.phoenix-ac.com/", "https://discord.com/invite/pac", "https://discord.com/invite/pac"],
    reason: "Breaking Tebex Selling License",
    severity: "critical",
    blacklistedSince: "16-05-2025",
    category: "discord",
    keyword: "Phoenix AntiCheat",
    discordServerId: "799493201387061259",
    flaggedBy: "Sophia"
  },
  // waveshield  ANTI CHEAT
  {
    name: "waveshield AntiCheat",
    links: ["https://waveshield.xyz/", "https://discord.com/invite/waveshield", "https://discord.com/invite/waveshield"],
    reason: "Breaking Tebex Selling License",
    severity: "critical",
    blacklistedSince: "16-05-2025",
    category: "discord",
    keyword: "waveshield AntiCheat",
    discordServerId: "733819615318245446",
    flaggedBy: "Sophia"
  },
  // chocohax  ANTI CHEAT
   {
     name: "chocohax AntiCheat",
     links: ["https://lynxcollective.ltd/", "https://discord.com/invite/HKNUPHB", "https://discord.com/invite/HKNUPHB"],
     reason: "Breaking Tebex Selling License",
     severity: "critical",
     blacklistedSince: "16-05-2025",
     category: "discord",
     keyword: "chocohax AntiCheat",
     discordServerId: "659839905773649940",
     flaggedBy: "Sophia"
   },
  // Liberty City (GTA5 Mods Wanna Be)
  { 
    name: "libertycity",
    links: ["https://libertycity.net/"],
    reason: "Leaking Assets",
    severity: "critical", 
    blacklistedSince: "16-05-2025",
    category: "other",
    keyword: "libertycity.net",
    flaggedBy: "Sophia"
  }
];

