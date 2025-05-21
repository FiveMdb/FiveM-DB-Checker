
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
  },
  // V5 Leaks | Fivem
  {
      name: "V5 Leaks | Fivem",
      links: ["https://discord.gg/v5leaks"],
      reason: "Leaking",
      severity: "critical", //'low' | 'medium' | 'high' | 'critical';
      blacklistedSince: "18-05-2025", // day-month-year
      category: "discord", // discord//tebex/other
      keyword: "fivem-leak", //search keyword
      discordServerId: "1107445116551037092", // Use this if there is a discord server If applicable
      flaggedBy: "Roda" //
  },
  // 420 Services
  {
      name: "420-Services",
      links: ["https://discord.gg/420-servicesnet", "https://420-services.net/"],
      reason: "Sell Cheats",
      severity: "critical", //'low' | 'medium' | 'high' | 'critical';
      blacklistedSince: "18-05-2025", // day-month-year
      category: "discord/other", // discord//tebex/other
      keyword: "fivem-cheat", //search keyword
      discordServerId: "1320136497638281297", // Use this if there is a discord server If applicable
      flaggedBy: "Roda" //
    },
  // Hopeleaks
    {
    name: "HopeLeaks",
    links: ["https://discord.gg/BR7yKg7cze"],
    reason: "Distributes leaked and stolen scripts without permission from original authors and Support DDoS Tools",
    severity: "high",
    blacklistedSince: "18-05-2025",
    category: "discord",
    keyword: "leak",
    discordServerId: "1339625499122466890",
    flaggedBy: "Avocato"
    },
  // Civez Leaks
  {
    name: "Civez Leaks",
    links: ["https://discord.gg/ZSNhZJexJ2"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1358118695892685172", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
// XX Leaks
  {
    name: "XX Leaks | v1 |TA & Eu",
    links: ["https://discord.gg/N4Z9xaeH2p"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1350465517928054855", // Use this if there is a discord server If applicable
    flaggedBy: "Maddy" //
  },
  // Toxic FiveM
  {
    name: "Toxic FiveM Community",
    links: ["https://discord.gg/MSnw2yKMtx"],
    reason: "Leaking, reselling",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1050399314242973706", // Use this if there is a discord server If applicable
    flaggedBy: "LueFlue" //
  },
  // Unreal Leaks
  {
    name: "< Unreal Leaks >",
    links: ["https://discord.gg/JjRwcGMZUB"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1319155442236129290", // Use this if there is a discord server If applicable
    flaggedBy: "LueFlue" //
  },
  // Bobbis x JL Store
  {
    name: "Bobbis x JL Store",
    links: ["https://discord.gg/G9fUchkJ2k"],
    reason: "Reselling",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "1162010226069880912", // Use this if there is a discord server If applicable
    flaggedBy: "LueFlue" //
  },
  //Black Leaks
  {
    name: "Black Leaks",
    links: ["https://discord.gg/x26NwFN4xC"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "899720622815444993", // Use this if there is a discord server If applicable
    flaggedBy: "LueFlue" //
  },
  //Bloss Premium 
  {
    name: "Bloss Premium",
    links: ["https://discord.gg/EqkaFm7wSe"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "905846194838839296", // Use this if there is a discord server If applicable
    flaggedBy: "LueFlue" //
  },
  // Polo Leaks
  {
    name: "Polo Leaks",
    links: ["https://discord.gg/rEKz9tZXUr"],
    reason: "Leaking",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "20-05-2025", // day-month-year
    category: "discord", // discord//tebex/other
    keyword: "fivem-leak", //search keyword
    discordServerId: "749048313990479953", // Use this if there is a discord server If applicable
    flaggedBy: "LueFlue" //
  },
  // MT Development
    {
    name: "MT - DEVELOPMENT ❄",
    links: ["https://mt-development.tebex.io"],
    reason: "Reselling scripts without permission", // Reason of blacklist
    severity: "high", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "21-5-2025", // day-month-year
    category: "tebex", // discord//tebex/other
    keyword: "Reselling", //search keyword
    discordServerId: "1235303563010375783", // Use this if there is a discord server If applicable
    flaggedBy: "Marat" //
  },
  // Kill store (Asked to remain anonomus)
  {
    name: "Killstore",
    links: ["https://killstore.net/", "https://discord.gg/dxD44nkcAs"],
    reason: "Code of Conduct(Child Ped Modles), Not using Tebex, IP Related Violations",
    severity: "critical", //'low' | 'medium' | 'high' | 'critical';
    blacklistedSince: "21-5-2025", // day-month-year
    category: "tebex",
    keyword: "Child-Peds", //search keyword
    discordServerId: "894339222905958471", // Use this if there is a discord server If applicable
    flaggedBy: "Asked to Remain Un-named" //
];
