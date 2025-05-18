
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
  // FiveM 0
  {
    name: "FIVEM 0",
    links: ["https://discord.gg/fivem0"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "18-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1302150541454868551", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
  // Kali Leaks
  {
    name: "kalileaks",
    links: ["https://www.kalileaks.com/"],
    reason: "Cheats,Leaking,Stolen Assets,Reselling,None Auth Marketplace",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "18-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "", // Use this if there is a discord server If applicable
    flaggedBy: "Rwixy" //
  },
  //Launcher Leaks
  {
    name: "launcherleaks",
    links: ["https://launcherleaks.net/"],
    reason: "Leaking,Stolen Assets,Reselling,None Auth Marketplace",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "18-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "", // Use this if there is a discord server If applicable
    flaggedBy: "Rwixy" //
  },
  // Eulen 
  {
    name: "Eulen Cheats",
    links: ["https://discord.com/invite/CsfPRDp", "https://eulencheats.com/", "https://t.me/EulenCC"],
    reason: "Cheats",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivem-cheat", //search keyword
    discordServerId: "1136029776080023563", // Use this if there is a discord server If applicable
    flaggedBy: "Lueflue" //
  },
  //NS LEAKS
  {
    name: "NS Leaks",
    links: ["https://discord.gg/DYR49Qp8p2"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "18-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1169213387817877514", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
  //Tebex store
  {
    name: "Tebex Store",
    links: ["https://tebex.store/"],
    reason: "Leaking, Stolen Assets,Reselling,None Auth Marketplace",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivem-store", //search keyword
    flaggedBy: "Rwix" //
  },
  // Fivem Store
  {
    name: "Fivem Store",
    links: ["https://fivem.shop/"],
    reason: "Leaking, Stolen Assets,Reselling,None Auth Marketplace",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "fivem-shop", //search keyword
    flaggedBy: "Rwix" //
  },
  //V FiveM
  {
    name: "vFivem",
     links: ["https://vfivem.com/"],
     reason: "IP Infringement, Leaking, Code Of Conduct",
     severity: "critical", //'low' | 'medium' | 'high' | 'critical';
     blacklistedSince: "17-05-2025", // day-month-year
     category: "other", // discord//tebex/other
     keyword: "vFivem", //search keyword
     flaggedBy: "Baldwin" //
   },
    //High Leaks
  {
    name: "HighLeaks",
     links: ["https://highleaks.com/", "https://discord.com/invite/BBHYGHDWZG", "https://discord.gg/BBHYGHDWZG"],
     reason: "Re-selling, Code Of Conduct, Leaking, Theft, Branded Assets, IP Infringement, Unauthorized Marketplace",
     severity: "critical", //'low' | 'medium' | 'high' | 'critical';
     blacklistedSince: "17-05-2025", // day-month-year
     category: "other", // discord//tebex/other
     keyword: "HighLeaks", //search keyword
     flaggedBy: "Baldwin" //
   },
    //Real Dudes Inc
  {
    name: "RealDudesInc",
     links: ["https://realdudesinc.com/", "https://discord.com/invite/3wRHFEvMCc", "https://discord.gg/3wRHFEvMCc", "https://www.youtube.com/@realdudesinc"],
     reason: "Code Of Conduct, Cheats",
     severity: "critical", //'low' | 'medium' | 'high' | 'critical';
     blacklistedSince: "17-05-2025", // day-month-year
     category: "discord-other", // discord//tebex/other
     keyword: "RealDudesInc", //search keyword
     discordServerId: "929061040266829894",
     flaggedBy: "Baldwin" //
   },
    //Ducks Services
  {
    name: "Ducks‑Services",
     links: ["https://www.ducks-services.com/, https://www.youtube.com/@DucksServicesYT"],
     reason: "Code Of Conduct, Cheats",
     severity: "critical", //'low' | 'medium' | 'high' | 'critical';
     blacklistedSince: "17-05-2025", // day-month-year
     category: "other", // discord//tebex/other
     keyword: "Ducks‑Services", //search keyword
     flaggedBy: "Baldwin" //
   },
    //Battle log
  {
     name: "Battlelog",
     links: ["https://battlelog.co/"],
     reason: "Code Of Conduct, Cheats",
     severity: "critical", //'low' | 'medium' | 'high' | 'critical';
     blacklistedSince: "17-05-2025", // day-month-year
     category: "other", // discord//tebex/other
     keyword: "Battlelog", //search keyword
     flaggedBy: "Baldwin" //
   },
    //QLM Shop
  {
    name: "Qlmshop",
     links: ["https://qlmshop.com/", "https://discord.com/invite/3wRHFEvMCc", "https://discord.gg/3wRHFEvMCc", "https://www.youtube.com/@realdudesinc"],
     reason: "Code Of Conduct, Cheats",
     severity: "critical", //'low' | 'medium' | 'high' | 'critical';
     blacklistedSince: "17-05-2025", // day-month-year
     category: "other", // discord//tebex/other
     keyword: "Qlmshop", //search keyword
     discordServerId: "929061040266829894",
     flaggedBy: "Baldwin" //
   },
  // CosmoCheats
  {
    name: "CosmoCheats",
    links: ["https://cosmocheats.com/", "https://discord.com/invite/3YRYNNX5cw", "https://discord.gg/3YRYNNX5cw"],
    reason: "Code Of Conduct, Cheats",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "CosmoCheats", //search keyword
    discordServerId: "1094532317613133856",
    flaggedBy: "Baldwin" //
  },
    //Veteran Cheats
  {
    name: "VeteranCheats",
    links: ["https://veterancheats.com/", "https://discord.com/invite/FWpucD92N8", "https://discord.gg/FWpucD92N8"],
    reason: "Code Of Conduct, Cheats",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "VeteranCheats", //search keyword
    discordServerId: "1045754727494852679",
    flaggedBy: "Baldwin" //
  },
    //FiveM Booster
  {
    name: "FiveBooster",
    links: ["https://fivebooster.com/"],
    reason: "Service Selling, Code Of Conduct",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "FiveBooster", //search keyword
    flaggedBy: "Baldwin" //
  },
    // recovery Kings
  {
    name: "RecoveryKings",
    links: ["https://recoverykings.net/", "https://discord.com/invite/6wfhetNQJM", "https://discord.gg/6wfhetNQJM", "https://www.youtube.com/channel/UCFT1ZOc0dPkPgje68a4VPuw"],
    reason: "Code Of Conduct, Cheats",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "RecoveryKings", //search keyword
    discordServerId: "1138291208515502151",
    flaggedBy: "Baldwin" //
  },
    //Palm Keys
  {
    name: "PalmKeys",
    links: ["https://palmkeys.com/", "https://discord.com/invite/WGdprhtWfJ", "https://discord.gg/WGdprhtWfJ", "https://www.youtube.com/channel/UCZcenBtRIaIazEPsywWgC-A"],
    reason: "Service Selling, Cheats,",
    severity: "low", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "PalmKeys", //search keyword
    discordServerId: "911453864883011684",
    flaggedBy: "Baldwin" //
  },
  //FiveM Upvotes
  {
    name: "FivemupVotes",
    links: ["https://fivemupvotes.com/", "https://discord.com/invite/BBHYGHDWZG", "https://discord.gg/BBHYGHDWZG"],
    reason: "Service Selling, Code Of Conduct",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord-other", // discord//tebex/other
    keyword: "FivemupVotes", //search keyword
    discordServerId: "1046810800070852759",
    flaggedBy: "Baldwin" //
  },
  // TC HUB
  {
    name: "TC HUB | 8K ?",
    links: ["https://discord.gg/28fdwwHB4h"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1141682590718369822", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
  //leak house
  {
    name: "Leak House",
    links: ["https://discord.gg/leakhouse"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1119186840008806410", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
  // BRATY STORE
  {
    name: "B3AZTY STOR3",
    links: ["https://discord.com/invite/REA4rBPSbF"],
    reason: "Leaking,re-selling",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17/05/2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1295247664899821630", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
  // POSIDENT LEAKS
  {
    name: "Poseidonleaks",
    links: ["https://discord.gg/vVSVvgAP", "https://www.poseidonleaks.com/"],
    reason: "Leaking,re-selling,ILEGAL,Cheats",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17/05/2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1104169239243411587", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
  // CR LEAKS
  {
    name: "CR LEAKS",
    links: ["https://discord.gg/gyrmuHYVmf","https://cr5m.com/"],
    reason: "Leaking,re-selling",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "discord",//ord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1351603273848848466", // Use this if there is a discord server If applicable
    flaggedBy: "Rwixy" //
  },
  //ESX SCRIPT
  {
    name: "ESX Scripts",
    links: ["https://www.esxscript.com/store/"],
    reason: "Scamming, leaking, TOS, Theft, Reselling, Stolen Assets, None Auth Marketplace",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "other", // discord//tebex/other
    keyword: "leak", //search keyword
    flaggedBy: "Fezz" //
  },
  //X Studio
  {
    name: "X Studio",
    links: ["https://discord.gg/xstudios | https://www.xstudiosfivem.com/"],
    reason: "TOS, IP, theft and Resellling",
    severity: "medium", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "17-05-2025", // day-month-year
    category: "tebex", // discord//tebex/other
    keyword: "resell", //search keyword
    discordServerId: "1102830970119397388",
    flaggedBy: "Fezz" //
  },
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

// Keywords for automatic detection
export const IP_VIOLATION_KEYWORDS = [
  "Acura",
  "Alfa Romeo",
  "Alpina",
  "Apollo",
  "Ariel",
  "Aston Martin",
  "Audi",
  "Abarth",
  "Aixam",
  "Arcfox",
  "Bentley",
  "BMW",
  "Baojun",
  "Bugatti",
  "Buick",
  "Brabus",
  "Borgward",
  "BYD",
  "Bollinger",
  "BAC",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroën",
  "Cupra",
  "Caterham",
  "Chery",
  "Cizeta",
  "Czinger",
  "Canoo",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Datsun",
  "Dodge",
  "De Tomaso",
  "Detroit Electric",
  "Donkervoort",
  "DS Automobiles",
  "DeLorean",
  "Eagle",
  "Elemental",
  "Exeed",
  "Elio Motors",
  "Edison Motors",
  "Elaris",
  "Eunos",
  "Evolve",
  "Engler",
  "Evergrande Auto",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Foton",
  "Faraday Future",
  "Faw",
  "Force Motors",
  "Freightliner",
  "Facel Vega",
  "Genesis",
  "GMC",
  "Geely",
  "Ginetta",
  "GAC",
  "Great Wall Motors",
  "Gumpert",
  "Gillet",
  "Gordon Murray",
  "GM Daewoo",
  "Honda",
  "Hummer",
  "Hyundai",
  "Hennessey",
  "Holden",
  "Hispano Suiza",
  "Haval",
  "Haima",
  "Hongqi",
  "Horch",
  "Infiniti",
  "Isuzu",
  "Iveco",
  "Italdesign",
  "Intermeccanica",
  "Irmscher",
  "Invicta",
  "Ioniq",
  "Ikco",
  "Imperia",
  "Jaguar",
  "Jeep",
  "JAC Motors",
  "Jensen",
  "Jinbei",
  "Joint Venture",
  "Jiangling",
  "Jiotto",
  "Jonway",
  "Jordan",
  "Kia",
  "Koenigsegg",
  "KTM",
  "Karma",
  "Kenworth",
  "Kamaz",
  "Keating",
  "Kandi",
  "King Long",
  "Kremer",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Lucid Motors",
  "Lada",
  "Lynk & Co",
  "Lightyear",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "Mini",
  "Mitsubishi",
  "Morgan",
  "Mahindra",
  "Maybach",
  "Marussia",
  "MAN",
  "Nissan",
  "Nio",
  "Noble",
  "Navistar",
  "Neoplan",
  "Nash",
  "Opel",
  "Oldsmobile",
  "Osca",
  "Ora",
  "Oullim",
  "Oka",
  "Porsche",
  "Peugeot",
  "Pagani",
  "Pontiac",
  "Polestar",
  "Perodua",
  "Plymouth",
  "Proton",
  "Pininfarina",
  "Qoros",
  "Quant",
  "Qvale",
  "Qiantu",
  "Rivian",
  "Renault",
  "Ram",
  "Rimac",
  "Roewe",
  "Rezvani",
  "Radical",
  "Rossion",
  "Rolls-Royce",
  "Saab",
  "Subaru",
  "Suzuki",
  "Seat",
  "Skoda",
  "Smart",
  "Scion",
  "Shelby",
  "SsangYong",
  "Spyker",
  "SRT",
  "Saleen",
  "Saturn",
  "Singer",
  "Tesla",
  "Toyota",
  "Tata",
  "Triumph",
  "Troller",
  "Tramontana",
  "TVR",
  "Think",
  "UAZ",
  "Ultima",
  "UM Motors",
  "Uniti",
  "Urban Automotive",
  "Vauxhall",
  "Volkswagen",
  "Volvo",
  "VinFast",
  "Venturi",
  "Vector",
  "Vanderhall",
  "Wiesmann",
  "Wuling",
  "Westfield",
  "W Motors",
  "Wartburg",
  "Waymo",
  "Xpeng",
  "Xinkai",
  "Xiamen Golden Dragon",
  "Yugo",
  "Yulon",
  "Yamaha",
  "Yema",
  "Yes!",
  "Zotye",
  "Zenvo",
  "Zagato",
  "ZAZ",
  "Zhongtong",
  "ZiL",
  "Zenos",
  // Clothing// Acses
  "A Bathing Ape",
  "BAPE",
  "A.P.C.",
  "Abercrombie & Fitch",
  "Acne Studios",
  "Adidas",
  "Akris",
  "Aldo",
  "AllSaints",
  "Alpha Industries",
  "American Apparel",
  "American Eagle Outfitters",
  "Andrew Marc",
  "Ann Taylor",
  "Anthropologie",
  "Arc'teryx",
  "Balenciaga",
  "Balmain",
  "Banana Republic",
  "Barbour",
  "Benetton",
  "Bershka",
  "Billabong",
  "Birkenstock",
  "BODE",
  "Bogner",
  "BOSS (Hugo Boss)",
  "Boohoo",
  "Bottega Veneta",
  "Brooks Brothers",
  "Brunello Cucinelli",
  "Calvin Klein",
  "Canada Goose",
  "Carhartt",
  "Celine",
  "Chanel",
  "Chloé",
  "Christian Dior",
  "Christopher Kane",
  "Chrome Hearts",
  "Club Monaco",
  "Coach",
  "Columbia Sportswear",
  "Comme des Garçons",
  "Converse",
  "COS",
  "D&G",
  "Daily Paper",
  "Daks",
  "Dapper Dan",
  "Diesel",
  "Dior Homme",
  "DKNY",
  "Dr. Martens",
  "Dries Van Noten",
  "Dunhill",
  "Ecko Unlimited",
  "Eddie Bauer",
  "Ed Hardy",
  "Elie Saab",
  "Ellesse",
  "Emporio Armani",
  "End Clothing",
  "Erdem",
  "Ermenegildo Zegna",
  "Etro",
  "Fabletics",
  "Fendi",
  "FILA",
  "Finisterre",
  "Fiorucci",
  "Forever 21",
  "Free People",
  "French Connection",
  "Fred Perry",
  "Fruit of the Loom",
  "G-Star RAW",
  "Ganni",
  "GAP",
  "Giorgio Armani",
  "Givenchy",
  "Gildan",
  "Goyard",
  "Gramicci",
  "Guess",
  "Gymshark",
  "H&M",
  "Hanes",
  "Hardy Amies",
  "Helmut Lang",
  "Helly Hansen",
  "Hermès",
  "Heron Preston",
  "Hollister",
  "House of CB",
  "Hugo Boss",
  "HUF",
  "Iceberg",
  "Icon Denim",
  "Incotex",
  "India Circus",
  "Indian Terrain",
  "Inditex",
  "Industrie",
  "Intersport",
  "Isabel Marant",
  "Issey Miyake",
  "J.Crew",
  "Jack & Jones",
  "Jacquemus",
  "Jil Sander",
  "Jimmy Choo",
  "Joe Fresh",
  "John Elliott",
  "John Lewis",
  "Jordan Brand",
  "Juicy Couture",
  "Karl Lagerfeld",
  "Kate Spade",
  "Kenzo",
  "Kering",
  "Khaite",
  "Kickers",
  "Kiko Kostadinov",
  "Kith",
  "Kiton",
  "Ksubi",
  "Lacoste",
  "Lands' End",
  "Lanvin",
  "Lardini",
  "Levi's",
  "L.L. Bean",
  "Loewe",
  "London Fog",
  "Longchamp",
  "Louis Vuitton",
  "Loro Piana",
  "Lululemon",
  "Lucky Brand",
  "Lush Clothing",
  "Madewell",
  "Mango",
  "Marc Jacobs",
  "Marine Serre",
  "Marni",
  "Massimo Dutti",
  "Maison Kitsuné",
  "Maison Margiela",
  "Mavi",
  "Missguided",
  "Napapijri",
  "Nautica",
  "New Balance",
  "New Era",
  "New Look",
  "Next",
  "Nike",
  "Nili Lotan",
  "Norse Projects",
  "North Face",
  "Oakley",
  "Off-White",
  "Old Navy",
  "Opening Ceremony",
  "Outdoor Voices",
  "PacSun",
  "Patagonia",
  "Paul Smith",
  "Pepe Jeans",
  "Prada",
  "Quiksilver",
  "Rag & Bone",
  "Ralph Lauren",
  "Reebok",
  "Rick Owens",
  "Roxy",
  "Saint Laurent",
  "Shein",
  "Supreme",
  "Tommy Hilfiger",
  "Topshop",
  "Tory Burch",
  "Ted Baker",
  "Telfar",
  "True Religion",
  "Under Armour",
  "Uniqlo",
  "Ulla Johnson",
  "Urban Outfitters",
  "Umbro",
  "Ugg",
  "Valentino",
  "Van Heusen",
  "Vans",
  "Versace",
  "Vetements",
  "Victoria's Secret",
  "Vivienne Westwood",
  "Volcom",
  "Vince",
  "Wrangler",
  "Woolrich",
  "Weekday",
  "WTAPS",
  "Warehouse",
  "We11done",
  "X-girl",
  "Xuly Bët",
  "Xersion",
  "Xander Zhou",
  "Y-3",
  "Yeezy",
  "Yohji Yamamoto",
  "YMC (You Must Create)",
  "Yoox",
  "Zadig & Voltaire",
  "Zegna",
  "Zara",
  "Zanerobe",
  "Zappos",
  "Zac Posen",
  //Tech
  "Apple",
  "Microsoft",
  "Google (Alphabet)",
  "Amazon",
  "Meta (Facebook)",
  "Samsung",
  "Intel",
  "NVIDIA",
  "Tesla",
  "IBM",
  "Sony",
  "Dell Technologies",
  "HP (Hewlett-Packard)",
  "Adobe",
  "Oracle",
  "Cisco Systems",
  "ASUS",
  "Acer",
  "Lenovo",
  "Snap Inc.",
  "Spotify",
  "Netflix",
  "Uber",
  "Airbnb",
  "Zoom",
  "Salesforce",
  "Qualcomm",
  "AMD (Advanced Micro Devices)",
  "Broadcom",
  "Dropbox",
  "PayPal",
  "Square (Block, Inc.)",
  "Shopify",
  "TikTok (ByteDance)",
  "Alibaba",
  "Tencent",
  "TSMC (Taiwan Semiconductor)",
  "LG Electronics",
  "Panasonic",
  "Xiaomi",
  "Huawei",
  "Baidu",
  "Slack (now part of Salesforce)",
  "Red Hat (IBM)",
  "GitHub (Microsoft)",
  "dr-"
];
