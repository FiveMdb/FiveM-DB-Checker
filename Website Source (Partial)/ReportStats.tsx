import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";
import { ReportData } from "@/components/ReportTile";
import { getPercentage, getStatusColor, getStatusBgColor } from "@/lib/utils";
import { BarChart2, PieChart as PieChartIcon, Users, Clock, FileText, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Import the example reports data to maintain consistency
const exampleReports: ReportData[] = [
  {
    id: 11,
    serverName: "SPACE RolePlay 3.0  ",
    connectionCode: "/dlgap3",
    ownerProfile: "https://forum.cfx.re/u/Tianshao999",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 12,
    serverName: "三叶TreFoil RP4.0丨登陆器进服丨整顿重来丨不权限丨极致优化丨顶尖玩法",
    connectionCode: "/r8rrpg",
    ownerProfile: "https://forum.cfx.re/u/sansan7777",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 13,
    serverName: "魔都2.0>新人2000万>组队副本>QQ群386396772>极致玩法>奖励丰富>结婚系统>宠物系统>",
    connectionCode: "/47k9ko",
    ownerProfile: "https://forum.cfx.re/u/wansi111",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 14,
    serverName: "夜玫瑰｜招团队入驻有扶持",
    connectionCode: "/q6lgy6",
    ownerProfile: "https://forum.cfx.re/u/Foxlyy",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 15,
    serverName: "英雄 半RP 进群下载登录器 Q群632400909 KOOK 166666",
    connectionCode: "/7z7dqv",
    ownerProfile: "https://forum.cfx.re/u/lianming1",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 16,
    serverName: "Devaus älpee  SIGMA👑",
    connectionCode: "/kydvg7",
    ownerProfile: "https://forum.cfx.re/u/lussu62",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 17,
    serverName: "曼德拉Mandela 半RP角色扮演 1.0 进群过白名单 QQ群：231926901",
    connectionCode: "/kkgpg6",
    ownerProfile: "https://forum.cfx.re/u/TangYINN",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 18,
    serverName: "达芬奇-半R-无权限-无管理-纯玩家服务器-免白名单-无需下载器-Q群:216231015",
    connectionCode: "/d7rzkd",
    ownerProfile: "https://forum.cfx.re/u/BB9999",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 19,
    serverName: "[LTU] MEMORY RP | 🏙️ GYVENIMAS MIESTE | 🚔 POLICIJA & MAFIJOS | 🏡 NUOSAVI NAMAI | 🚗 REALISTINĖ EKONOMIKA | 💼 DARBAI SU RANGŲ SISTEMA | 📜 TEISINĖ SISTEMA | 🔫 GINKLŲ PREKYBA | 🎭 NELEGALIOS VEIKLOS |",
    connectionCode: "/lg6doj",
    ownerProfile: "https://forum.cfx.re/u/Augis_II",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 20,
    serverName: "DMVRP Dev By JayRuger",
    connectionCode: "/3q4oxy",
    ownerProfile: "https://forum.cfx.re/u/JayRuger",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 21,
    serverName: "Stories of Southside Chiraq 💥| #1 Serious Chicago | JOIN NOW ⚡ Serious Roleplay ",
    connectionCode: "/dqgemq",
    ownerProfile: "https://forum.cfx.re/u/ChicagoReborn",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 22,
    serverName: "⚡6HE RAQ RP V2⚡│🔥Real Roleplay🔥|📈Most Optimized Gang Server📈│💊Custom Drugs💊│🎥Stremer Prio🎥│👧Female Prio👧│🦺Active Staff🦺│📊High FPS📊│📚discord.gg/theraqrp📚|🚔ctive PD & EMS🚔",
    connectionCode: "/53yp9d",
    ownerProfile: "https://forum.cfx.re/u/lidrxpxff",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 23,
    serverName: "Black Side RP | 𝘐𝘮𝘮𝘦𝘳𝘴𝘪𝘰𝘯 𝘙𝘰𝘭𝘦𝘱𝘭𝘢𝘺 𝘍𝘰𝘳𝘮𝘪𝘥𝘢𝘣𝘭𝘦",
    connectionCode: "/9kdklm",
    ownerProfile: "https://forum.cfx.re/u/kimmypelletier",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 24,
    serverName: "醉幻之都1.0 半rp正式启航 | Q群1043779130 | 过白找管理",
    connectionCode: "/o78kgr",
    ownerProfile: "https://forum.cfx.re/u/1094757896",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 25,
    serverName: "◆云顶Yun Ding 1.0半RP欢迎你QQ群：991358421◆",
    connectionCode: "/jdqozl",
    ownerProfile: "https://forum.cfx.re/u/Lao.A",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 26,
    serverName: "奥斯卡 𝙊𝙎𝙘𝙖𝙧半RP扮演 & QQ：129267587 & KOOK:11100307",
    connectionCode: "/el3xrp",
    ownerProfile: "https://forum.cfx.re/u/laomaogeigei",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 27,
    serverName: "^天使之翼>新人500万>结婚系统>真人玩家>德州扑克> ",
    connectionCode: "/qo7jy4",
    ownerProfile: "https://forum.cfx.re/u/TianTianAiYaoGun",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 28,
    serverName: "黎明之都半RP免白名单 QQ群719131793多玩法千辆精车模",
    connectionCode: "/b5r3rp",
    ownerProfile: "https://forum.cfx.re/u/suqi666",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 29,
    serverName: "MIA猫咖屋 |进群下载登录器|美女接待|服主听劝",
    connectionCode: "/eljmv3",
    ownerProfile: "https://forum.cfx.re/u/God-Z1",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 30,
    serverName: "Grand Opening Came From Nothing NYC Serious RP | CUSTOM DRUGS | FREE GANGS | CUSTOM HOUSING | SREAMER FRIENDLY",
    connectionCode: "/pmavlm",
    ownerProfile: "https://forum.cfx.re/u/oRojo",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 31,
    serverName: "✨ HoodDreamsRp ✨ | 🔥 Serious RP 🔥 | 🌿 Full Drug System 🌿 | 💼 Player-Owned Jobs 💼 | 🚗 Player-Owned Dealerships 🚗 | 🔧 Player-Owned Mechanics 🔧 | 🎉 Weekly Events & Prizes 🎉 | 💖 eGirl Friendly 💖 | 🤝 Caring Community 🤝",
    connectionCode: "/5xllmr",
    ownerProfile: "https://forum.cfx.re/u/SimplyDK",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 32,
    serverName: "Dope Wars Roleplay 🔥 | 18+ SEMI GANG RP | iring LEO and EMS | Custom Vehicles | Custom Clothing | Custom Drugs | Realistic Economy | 1500+ Houses | Sell Drugs Anywhere | Streamer Friendly |",
    connectionCode: "/ybzm55",
    ownerProfile: "https://forum.cfx.re/u/DopeWarsRoleplay",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 35,
    serverName: "life in chi city",
    connectionCode: "/53a4rz",
    ownerProfile: "https://forum.cfx.re/u/PrettyBoyDj",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 36,
    serverName: "🌎💰GRAND OPENING🌎💰 FREE GANGS TRAPLOVERP🌎 | 💰  FRESH ECONOMY💰 | 🔫 #1 Serious RP🔫 |  E Girl/Stream Friendly🎥 | 👕 Custom Drip 👕 | 🔪 Gang Wars 🔪 | 👷 Active Staff 👷 | 💻 HIGH FPS 💻| 🌎",
    connectionCode: "/97o6qk",
    ownerProfile: "https://forum.cfx.re/u/kwl-uda",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 37,
    serverName: "Dirty South RP |🔥 GRAND OPENING 🔥| 🚔 NOW HIRING POLICE & EMS 🚑 | Streamer Friendly 🎥 | 🚗 Custom Cars & Jobs |🏢 Player-Owned Businesses | Active & Friendly Staff 👮",
    connectionCode: "/j7xp7p",
    ownerProfile: "https://forum.cfx.re/u/DirtySouth-RP",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 38,
    serverName: "BankRoll Fresh RP$ Custom Car$ Custom items$ Custom Drugs$ Gangs AND MORE QBCore Framework",
    connectionCode: "/yzagr5",
    ownerProfile: "https://forum.cfx.re/u/Timmy_U_fuNNy",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 39,
    serverName: "大内蒙半RP1.0 加QQ群579732284 ⭐",
    connectionCode: "/j7qej4",
    ownerProfile: "https://forum.cfx.re/u/ShiQ",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 40,
    serverName: "👿 Forgotten LA | V3 👿 | ⭐ CUSTOM COIN GUNS⭐ | 🪽 FPS OPTIMIZED SERVER 🪽 | 📊 LA MAP BASED SEMI SERIOUS 📊 | 📦 STARTER PACKS 📦 | ☠️ GANG ROLEPLAY ☠️ | ⚔️ BLOCK TO BLOCK KOS ⚔️ | 👕 CUSTOM CLOTHING 👕 | 💊 CUSTOM DRUGS 💊 | 🛡️ ACTIVE & FAIR STAFF 🛡️ | 🎥 STREAMER FRIENDLY 🎥 | 🏥 CUSTOM EMS 🏥 | 🌿 DIFFERENT DRUG LOCATIONS 🌿 | 👾 NEW-PLAYER FRIENDLY 👾 | 🔗 DISCORD.GG/FGLA 🚀 #1 SEMI SERIOUS SERVER",
    connectionCode: "/3vkyxz",
    ownerProfile: "https://forum.cfx.re/u/e1venk",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 41,
    serverName: "曼德拉Mandela 半RP角色扮演 1.0 进群过白名单 QQ群：231926901",
    connectionCode: "/kkgpg6",
    ownerProfile: "https://forum.cfx.re/u/TangYINN",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 42,
    serverName: "达芬奇-半R-无权限-无管理-纯玩家服务器-免白名单-无需下载器-Q群:216231015",
    connectionCode: "/d7rzkd",
    ownerProfile: "https://forum.cfx.re/u/BB9999",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 43,
    serverName: "GNB City",
    connectionCode: "/qdek79",
    ownerProfile: "https://forum.cfx.re/u/gnbcity",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 44,
    serverName: "Stories of Southside Chiraq 💥| #1 Serious Chicago | JOIN NOW ⚡ Serious Roleplay ",
    connectionCode: "/dqgemq",
    ownerProfile: "https://forum.cfx.re/u/ChicagoReborn",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 45,
    serverName: "MidNightRP | 1.1 | WL-OFF | PL",
    connectionCode: "/pzmgma",
    ownerProfile: "https://forum.cfx.re/u/BenZekko",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 46,
    serverName: "Fiinesse The Bag |18+ semi serious roleplay💯|💗E-girl/Streamer Friendly🎥|Realistic Economy 💰|Player owned Jobs & Businesses|Hiring EMS 🚑/PD👮/Staff🖥️ |Custom Vehicles 🏎️",
    connectionCode: "/m9qrza",
    ownerProfile: "https://forum.cfx.re/u/BIGTM",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 47,
    serverName: "🌴 Gangsters Paradice🌴 | 💜 E-Girl / Streamer Friendly 📷 |😈 Serious Gang RP | 🏡 Custom Houses 🏡 | 👮 Hiring Police 👮 | 🚑 Hiring EMS 🚑 |  🚗 Custom Vehicles🚗 | 👼 Active Staff 👼 |discord.gg/hVgGS6tvd4| 💊 Custom Drugs💊 | 🕶️ Custom Drip   ",
    connectionCode: "/odgzjr",
    ownerProfile: "https://forum.cfx.re/u/BagBoyTeazy",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 48,
    serverName: "欲都 半Rp 最新版本 QQ群：988888861 免登录器",
    connectionCode: "/qxqb46",
    ownerProfile: "https://forum.cfx.re/u/A-565758",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 49,
    serverName: "醉幻之都1.0 半rp正式启航 | Q群1043779130 | 过白找管理",
    connectionCode: "/o78kgr",
    ownerProfile: "https://forum.cfx.re/u/1094757896",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 50,
    serverName: "◆云顶Yun Ding 1.0半RP欢迎你QQ群：991358421◆",
    connectionCode: "/jdqozl",
    ownerProfile: "https://forum.cfx.re/u/Lao.A",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 51,
    serverName: "奥斯卡 𝙊𝙎𝙘𝙖𝙧半RP扮演 & QQ：129267587 & KOOK:11100307",
    connectionCode: "/el3xrp",
    ownerProfile: "https://forum.cfx.re/u/laomaogeigei",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 52,
    serverName: "MIA猫咖屋 |进群下载登录器|美女接待|服主听劝",
    connectionCode: "/eljmv3",
    ownerProfile: "https://forum.cfx.re/u/God-Z1",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 53,
    serverName: "Outside RP | True-to-Life Roleplay | Grand Opening | Active Community | Semi-Serious RP | Active Staff | Fresh Economy ",
    connectionCode: "/ak68ak",
    ownerProfile: "https://forum.cfx.re/u/PabloShoota",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 54,
    serverName: "黎明之都半RP免白名单 QQ群719131793多玩法千辆精车模",
    connectionCode: "/b5r3rp",
    ownerProfile: "https://forum.cfx.re/u/suqi666",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 55,
    serverName: "Grand Opening Came From Nothing NYC Serious RP | CUSTOM DRUGS | FREE GANGS | CUSTOM HOUSING | SREAMER FRIENDLY",
    connectionCode: "/pmavlm",
    ownerProfile: "https://forum.cfx.re/u/oRojo",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: 56,
    serverName: "✨ HoodDreamsRp ✨ | 🔥 Serious RP 🔥 | 🌿 Full Drug System 🌿 | 💼 Player-Owned Jobs 💼 | 🚗 Player-Owned Dealerships 🚗 | 🔧 Player-Owned Mechanics 🔧 | 🎉 Weekly Events & Prizes 🎉 | 💖 eGirl Friendly 💖 | 🤝 Caring Community 🤝",
    connectionCode: "/5xllmr",
    ownerProfile: "https://forum.cfx.re/u/SimplyDK",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportLink: "N/a",
    
  },
  {
    id: "57",
    serverName: "Next Level",
    connectionCode: "/kk8xyr",
    ownerProfile: "https://forum.cfx.re/u/JustBull/summary",
    violations: ["Non TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "68",
    serverName: "Lowkey Roleplay",
    connectionCode: "/ll7rjv",
    ownerProfile: "https://forum.cfx.re/u/bobmarleynug420/summary",
    violations: ["Non-TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization", "Blacklisted Resources"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "3",
    serverName: "San Andreas State Roleplay",
    connectionCode: "/bmjebd",
    ownerProfile: "https://forum.cfx.re/u/SRTJake/summary",
    violations: ["Non-TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "4",
    serverName: "Speed Labs",
    connectionCode: "/ry6778",
    ownerProfile: "https://forum.cfx.re/u/5mspeedlab/summary",
    violations: ["Non-TOS Compliant Vehicles, Clothing, MLO's"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "resolved"
  },
  {
    id: "5",
    serverName: "Rice City | Japan | Free roam",
    connectionCode: "N/a",
    ownerProfile: "https://forum.cfx.re/u/Miiisty/summary",
    violations: [ "Non-TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "6",
    serverName: "VeraCity ",
    connectionCode: "N/a",
    ownerProfile: "Nill",
    violations: [ "Map related IP", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "7",
    serverName: "PoliceMP",
    connectionCode: "/xxkprx",
    ownerProfile: "https://forum.cfx.re/u/PMPDev/summary",
    violations: [ "Map related IP", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "8",
    serverName: "PARADISE STATE ROLEPLAY",
    connectionCode: "/zy9l6p",
    ownerProfile: "https://forum.cfx.re/u/Georgie15/profile-hidden",
    violations: [ "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "9",
    serverName: "SWITCHED RP",
    connectionCode: "N/a",
    ownerProfile: "https://forum.cfx.re/u/radz_ryan/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "10",
    serverName: "TRIGZ WORLD RP",
    connectionCode: "/lz7vjj",
    ownerProfile: "https://forum.cfx.re/u/TriGz_World/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "11",
    serverName: "DC CARS",
    connectionCode: "N/a",
    ownerProfile: "https://dc-cars.tebex.io/category/cars",
    violations: ["Selling Non Compliant Vehicles"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "12",
    serverName: "British frontlise rp",
    connectionCode: "N/a",
    ownerProfile: "Nill",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "13",
    serverName: "pohodari WL",
    connectionCode: "/av3pmk",
    ownerProfile: "https://forum.cfx.re/u/squizer/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "14",
    serverName: "pohodari non WL",
    connectionCode: "/av3pmk",
    ownerProfile: "https://forum.cfx.re/u/squizer/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "15",
    serverName: "British Enforcement RP",
    connectionCode: "/b36akp",
    ownerProfile: "https://forum.cfx.re/u/British_Enforcement/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "16",
    serverName: "Trident Network 1.0",
    connectionCode: "/4jbrl9",
    ownerProfile: "https://forum.cfx.re/u/jsabzz_1/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "17",
    serverName: "Static RP",
    connectionCode: "/bqzoop",
    ownerProfile: "https://forum.cfx.re/u/N93/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "18",
    serverName: "fury Roleplay",
    connectionCode: "/v5xkkx",
    ownerProfile: "https://forum.cfx.re/u/furyrp.ro/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "19",
    serverName: "BlueSkyRP",
    connectionCode: "/g5dogz",
    ownerProfile: "https://forum.cfx.re/u/Mr.Jacob/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "20",
    serverName: "DRAGON ROLEPLAY",
    connectionCode: "/8ve5e3",
    ownerProfile: "https://forum.cfx.re/u/dragon_rp4/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "21",
    serverName: "RICH CITY ROLEPLAY",
    connectionCode: "/4vabjo",
    ownerProfile: "https://forum.cfx.re/u/richcityrp_pk/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "22",
    serverName: "DRAGON ROLEPLAY",
    connectionCode: "/8ve5e3",
    ownerProfile: "https://forum.cfx.re/u/dragon_rp4/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "23",
    serverName: "Thin Line",
    connectionCode: "N/a",
    ownerProfile: "https://thinlinesanctuary.com",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "24",
    serverName: "SARP",
    connectionCode: "N/a",
    ownerProfile: "https://www.patreon.com/saroleplay1",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "25",
    serverName: "cidade alta rp",
    connectionCode: "N/a",
    ownerProfile: "https://cidadealtarp.com/",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "26",
    serverName: "av-scripts",
    connectionCode: "N/a",
    ownerProfile: "https://av-scripts.tebex.io/package/4449637",
    violations: ["CODE OF CONDUCT", "SELLING CHILD PEDS",  "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "27",
    serverName: "kentuckyrp",
    connectionCode: "/lok5k7",
    ownerProfile: "https://forum.cfx.re/u/kentuckyroleplay/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "28",
    serverName: "Capital City",
    connectionCode: "/zkd335",
    ownerProfile: "https://forum.cfx.re/u/HigorBourges/summary ",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "29",
    serverName: "Gun Game V",
    connectionCode: "/m9kvd7 ",
    ownerProfile: "N/a",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "30",
    serverName: "Drill-UK",
    connectionCode: "/e3r47a ",
    ownerProfile: "https://forum.cfx.re/u/DRILL-UK/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "31",
    serverName: "PA Scripts",
    connectionCode: "N/a",
    ownerProfile: "https://www.patreon.com/pafivemscripts/shop",
    violations: ["Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "32",
    serverName: "MNRP",
    connectionCode: "/4eedg9",
    ownerProfile: "https://forum.cfx.re/u/kFxDaKing/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "33",
    serverName: "VineWood RP",
    connectionCode: "/pprvvy",
    ownerProfile: "https://forum.cfx.re/u/VisionGames/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "34",
    serverName: "MaldivasRP",
    connectionCode: "/mkyv9d",
    ownerProfile: "https://forum.cfx.re/u/MaldivasRPV1/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "35",
    serverName: "Empyrean City",
    connectionCode: "/qgarq9",
    ownerProfile: "https://forum.cfx.re/u/juswaaaax/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  {
    id: "36",
    serverName: "Life In Chiraq ",
    connectionCode: "/brelvd",
    ownerProfile: "https://forum.cfx.re/u/ITZ_SWISH/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed"
  },
  // 03/05/2025
  {
    id: "37",
    serverName: "District Network",
    connectionCode: "/x837jg",
    ownerProfile: "https://forum.cfx.re/u/District_Network/summary",
    violations: [ "Non tos compliant Vehicles Clothing and mlos", "threatening minors With Inflicting Harm", "Unauthorized monetization", "Breaking Creatos Polciys on Selling Vehicles that they made."],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "open"
  },
  {
    id: "38",
    serverName: "ST TOWN",
    connectionCode: "/63o3l8", // THIS IS THE CONNECTION CODE Ex. /brelvd
    ownerProfile: "https://forum.cfx.re/u/czdev",
    violations: ["Code of Conduct Violation", "Breaking IP Laws"],
    status: "open"
  },
  {
    id: "39",
    serverName: "^6圣罗兰 Q群820171122招团队入驻给扶持KOOK搜索1066",
    connectionCode: "/bz7aal", // THIS IS THE CONNECTION CODE Ex. /brelvd
    ownerProfile: "https://forum.cfx.re/u/ShangYin111",
    violations: ["Code of Conduct Violation", "Breaking IP Laws"],
    status: "open"
  },
  {
    id: "40",
    serverName: "^6梦幻Dreamy",
  connectionCode: "/d4rxay", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Isazs777",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "41",
    serverName: "^6起点-半RP生活服丨Q群698954445丨美女接待⭐",
  connectionCode: "/egrvlp", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/1026096026",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "42",
    serverName: "^4 HYBRID TOWN",
  connectionCode: "/3q788z", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/kbkeyshop03",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "43",
    serverName: "Brasilia RP server 1",
  connectionCode: "/xl9dex", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Getaway_Driver",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "44",
    serverName: "CLOUD COMMUNITY & STORY",
  connectionCode: "/87k9d4", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/No.1_Key_VIP",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "45",
    serverName: "Brasilia RP server 2",
  connectionCode: "/3abzey", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Getaway_Driver",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "46",
    serverName: "^3VITAL RP NEW WHITELIST 18+ ECONOMY SERVER",
  connectionCode: "/ogpvmv", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/GrumpyMonroe",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "47",
    serverName: "^8STATIC ^8FIVEPD 🚔",
  connectionCode: "/egmomd", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Nergotoo",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "48",
    serverName: "CrimeInTheD Serious RP",
  connectionCode: "/rd9e38", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/CrimeInTheD",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "49",
    serverName: "^4GUAYAQUIL RP ☀️",
  connectionCode: "/eb3dga", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/LJA-STUDIOS",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "50",
    serverName: "STATIC FIVEPD: RED",
  connectionCode: "/3ddyrr", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Nergotoo",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "52",
    serverName: "^Belgium City 🌴",
  connectionCode: "/9k9m4a", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/BelgiumCity",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "53",
    serverName: "^4Central London V1.5 ",
  connectionCode: "/e7kbqb", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Baileyy_YT24",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "54",
    serverName: "^4Cops ^0Vs ^1Robbers",
  connectionCode: "/g9k35o", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/monte_monte",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "55",
    serverName: "^5Tennessee State Roleplay ^0| ^8vMenu ^0| ^4LEO ^0| ^2CIV",
  connectionCode: "/xqa6og", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/JonathaF",
  violations: ["Breaking IP Laws"],
  status: "open"
  },
  {
    id: "56",
    serverName: "My Way RP V2",
  connectionCode: "/zeyj34", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/MyWayRP",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
  {
    id: "57",
    serverName: "^3Streets Of Florida💥 ^2 ^4|| ^4Streetlife🎲 Based || ^4Starting Cash 3.5 Million💰 || ^4E-Girl Friendly♥️ || ^4Community Friendly😎 || ^4Real Economy💯 || ^4Real Jobs🦾 || ^4Custom Cars🏁 || ^4Rob NPC's🔫 || ^4Play as Ped👼🏾 || ^4Drugs💊 || ^4Gangs Welcome🩸 ||",
  connectionCode: "/77kr7v", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/FlawdaBoi",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  status: "open"
  },
];

// Group the violations
type ViolationType = {
  name: string;
  count: number;
  percentage: number;
};

const ReportStats = () => {
  const [stats, setStats] = useState({
    open: 0,
    closed: 0,
    resolved: 0,
    total: 0,
    openPercent: 0,
    closedPercent: 0,
    resolvedPercent: 0,
    avgViolationsPerReport: 0,
    topViolations: [] as ViolationType[],
    totalViolations: 0,
    latestReportDate: new Date().toLocaleDateString(),
    oldestReportDate: new Date().toLocaleDateString(),
  });

  const [chartData, setChartData] = useState<any[]>([]);
  const [violationData, setViolationData] = useState<ViolationType[]>([]);

  useEffect(() => {
    try {
      // Calculate statistics based on the reports data
      const openReports = exampleReports.filter(r => r.status === 'open').length;
      const closedReports = exampleReports.filter(r => r.status === 'closed').length;
      const resolvedReports = exampleReports.filter(r => r.status === 'resolved').length;
      const totalReports = exampleReports.length;
      
      // Calculate percentages
      const openPercent = getPercentage(openReports, totalReports);
      const closedPercent = getPercentage(closedReports, totalReports);
      const resolvedPercent = getPercentage(resolvedReports, totalReports);
      
      // Process violations data
      const violations: {[key: string]: number} = {};
      let totalViolations = 0;

      exampleReports.forEach(report => {
        if (report.violations) {
          totalViolations += report.violations.length;
          
          report.violations.forEach(violation => {
            if (violations[violation]) {
              violations[violation]++;
            } else {
              violations[violation] = 1;
            }
          });
        }
      });

      //  sorted violation data 
      const violationsList = Object.entries(violations).map(([name, count]) => ({
        name,
        count,
        percentage: getPercentage(count, totalViolations)
      })).sort((a, b) => b.count - a.count);

      // Get top violations
      const topViolations = violationsList.slice(0, 5);

      // Calculate average violations per report
      const avgViolationsPerReport = totalReports ? parseFloat((totalViolations / totalReports).toFixed(1)) : 0;
      
      setStats({
        open: openReports,
        closed: closedReports,
        resolved: resolvedReports,
        total: totalReports,
        openPercent,
        closedPercent,
        resolvedPercent,
        avgViolationsPerReport,
        topViolations,
        totalViolations,
        latestReportDate: "May 14, 2025",
        oldestReportDate: "Dec 1, 2024",
      });

      // Prepare chart data 
      setChartData([
        { name: 'Open Reports', value: openReports, fill: '#f97316', percent: openPercent },
        { name: 'Closed Reports', value: closedReports, fill: '#ef4444', percent: closedPercent },
        { name: 'Resolved Reports', value: resolvedReports, fill: '#22c55e', percent: resolvedPercent },
      ]);

      setViolationData(topViolations);
    } catch (error) {
      console.error("Error in ReportStats initialization:", error);
      toast.error("There was a problem loading the report statistics.");
    }
  }, []);

  // Custom tooltip for the bar chart - fixing the issue here
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}`}</p>
          <p className="text-white/70">{`${payload[0].payload.percent}% of total`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20"></div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display mb-6 text-gradient animate-fade-in">
              Report <span className="font-bold">Statistics</span>
            </h1>
            <p className="text-white/70 mb-12 max-w-3xl text-balance">
              Comprehensive analytics and insights into the FiveM community reports database. 
              Track violations, monitor trends, and understand the impact of community reporting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <Card className="glass-card border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                  <CardTitle className="text-lg font-display flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Total Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-4xl font-display">{stats.total}</p>
                  <p className="text-white/50 text-sm mt-1">Reports in database</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10">
                  <CardTitle className="text-lg font-display flex items-center gap-2 text-orange-400">
                    <Clock className="w-4 h-4" />
                    Open Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-4xl font-display">{stats.open} <span className="text-sm text-white/50">({stats.openPercent}%)</span></p>
                  <p className="text-white/50 text-sm mt-1">Currently in review</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-red-500/10 to-pink-500/10">
                  <CardTitle className="text-lg font-display flex items-center gap-2 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    Closed Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-4xl font-display">{stats.closed} <span className="text-sm text-white/50">({stats.closedPercent}%)</span></p>
                  <p className="text-white/50 text-sm mt-1">No action taken</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-green-500/10 to-teal-500/10">
                  <CardTitle className="text-lg font-display flex items-center gap-2 text-green-400">
                    <Users className="w-4 h-4" />
                    Resolved Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-4xl font-display">{stats.resolved} <span className="text-sm text-white/50">({stats.resolvedPercent}%)</span></p>
                  <p className="text-white/50 text-sm mt-1">Action successfully taken</p>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="overview" className="w-full animate-fade-in">
              <TabsList className="w-full justify-start mb-8 bg-white/5">
                <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:text-gradient">
                  <BarChart2 className="w-4 h-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="violations" className="flex items-center gap-2 data-[state=active]:text-gradient">
                  <AlertTriangle className="w-4 h-4" />
                  Violations
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <Card className="glass-card border-0 shadow-lg h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-display">Report Status Distribution</CardTitle>
                        <CardDescription>Breakdown of reports by current status</CardDescription>
                      </CardHeader>
                      <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" stroke="#ffffff50" />
                            <YAxis stroke="#ffffff50" />
                            <RechartsTooltip content={<CustomTooltip />} />
                            <Bar dataKey="value">
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <div className="space-y-6">
                      <Card className="glass-card border-0 shadow-lg">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-display">Report Insights</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-3">
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-white/50">Total Violations</p>
                              <p className="text-2xl font-display">{stats.totalViolations}</p>
                            </div>
                            <div>
                              <p className="text-sm text-white/50">Average Violations per Report</p>
                              <p className="text-2xl font-display">{stats.avgViolationsPerReport}</p>
                            </div>
                            <div>
                              <p className="text-sm text-white/50">Latest Report</p>
                              <p className="text-base font-medium">{stats.latestReportDate}</p>
                            </div>
                            <div>
                              <p className="text-sm text-white/50">Oldest Report</p>
                              <p className="text-base font-medium">{stats.oldestReportDate}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="violations" className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card className="glass-card border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-xl font-display">Top Violations by Frequency</CardTitle>
                        <CardDescription>
                          Most common FiveM TOS violations reported
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            layout="vertical"
                            data={violationData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <XAxis type="number" stroke="#ffffff50" />
                            <YAxis dataKey="name" type="category" width={150} stroke="#ffffff50" tick={{ fill: '#ffffff' }} />
                            <RechartsTooltip
                              contentStyle={{ backgroundColor: '#0f0f2d', borderColor: 'rgba(255,255,255,0.1)' }}
                              itemStyle={{ color: '#ffffff' }}
                              formatter={(value: any) => [`${value} reports`, 'Count']}
                              labelFormatter={(label) => `Violation: ${label}`}
                            />
                            <Bar dataKey="count" fill="#8b5cf6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="glass-card border-0 shadow-lg h-full">
                      <CardHeader>
                        <CardTitle className="text-lg font-display">Violation Distribution</CardTitle>
                        <CardDescription>
                          Percentage breakdown of reported violations
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={violationData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="count"
                                label={({ name, percent }) => `${name.substring(0, 10)}... ${(percent * 100).toFixed(0)}%`}
                                labelLine={false}
                              >
                                {violationData.map((entry, index) => (
                                  <Cell 
                                    key={`cell-${index}`} 
                                    fill={[
                                      '#8b5cf6', '#14b8a6', '#f97316', '#ec4899', '#3b82f6'
                                    ][index % 5]} 
                                  />
                                ))}
                              </Pie>
                              <RechartsTooltip
                                contentStyle={{ backgroundColor: '#0f0f2d', borderColor: 'rgba(255,255,255,0.1)' }}
                                itemStyle={{ color: '#ffffff' }}
                                formatter={(value: any) => [`${value} reports`, 'Count']}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-white/70 mb-3">Top Violations</h4>
                          <div className="space-y-2">
                            {violationData.map((violation, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div 
                                    className="w-3 h-3 rounded-full mr-2"
                                    style={{ 
                                      backgroundColor: [
                                        '#8b5cf6', '#14b8a6', '#f97316', '#ec4899', '#3b82f6'
                                      ][idx % 5]
                                    }}
                                  ></div>
                                  <span className="text-xs text-white/80">{violation.name.length > 20 
                                    ? `${violation.name.substring(0, 20)}...` 
                                    : violation.name}
                                  </span>
                                </div>
                                <span className="text-xs text-white/60">{violation.percentage}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReportStats;
