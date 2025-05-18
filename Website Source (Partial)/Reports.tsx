import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search, Filter, Server } from "lucide-react";
import ReportTile, { ReportData, ServerStatus } from "@/components/ReportTile";
import { cn } from "@/lib/utils";

// Live Server Report Data
export const exampleReports: ReportData[] = [
  {
    id: "1",
    serverName: "Next Level",
    connectionCode: "/kk8xyr",
    ownerProfile: "https://forum.cfx.re/u/JustBull/summary",
    violations: ["Non TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-05-01",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "2",
    serverName: "Lowkey Roleplay",
    connectionCode: "/ll7rjv",
    ownerProfile: "https://forum.cfx.re/u/bobmarleynug420/summary",
    violations: ["Non-TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization", "Blacklisted Resources"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-04-28",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 128
  },
  {
    id: "3",
    serverName: "San Andreas State Roleplay",
    connectionCode: "/bmjebd",
    ownerProfile: "https://forum.cfx.re/u/SRTJake/summary",
    violations: ["Non-TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-04-25",
    serverStatus: "online",
    playerCount: 100,
    maxPlayers: 200,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "4",
    serverName: "Speed Labs",
    connectionCode: "/ry6778",
    ownerProfile: "https://forum.cfx.re/u/5mspeedlab/summary",
    violations: ["Non-TOS Compliant Vehicles, Clothing, MLO's"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "resolved",
    reportDate: "2025-04-22",
    serverStatus: "online",
    playerCount: 150,
    maxPlayers: 200,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "5",
    serverName: "Rice City | Japan | Free roam",
    connectionCode: "N/a",
    ownerProfile: "https://forum.cfx.re/u/Miiisty/summary",
    violations: [ "Non-TOS Compliant Vehicles, Clothing, MLO's", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-04-15",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "6",
    serverName: "VeraCity ",
    connectionCode: "N/a",
    ownerProfile: "Nill",
    violations: [ "Map related IP", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-04-10",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "7",
    serverName: "PoliceMP",
    connectionCode: "/xxkprx",
    ownerProfile: "https://forum.cfx.re/u/PMPDev/summary",
    violations: [ "Map related IP", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-04-05",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "8",
    serverName: "PARADISE STATE ROLEPLAY",
    connectionCode: "/zy9l6p",
    ownerProfile: "https://forum.cfx.re/u/Georgie15/profile-hidden",
    violations: [ "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-03-30",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "9",
    serverName: "SWITCHED RP",
    connectionCode: "N/a",
    ownerProfile: "https://forum.cfx.re/u/radz_ryan/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-03-25",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "10",
    serverName: "TRIGZ WORLD RP",
    connectionCode: "/lz7vjj",
    ownerProfile: "https://forum.cfx.re/u/TriGz_World/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-03-20",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "11",
    serverName: "DC CARS",
    connectionCode: "N/a",
    ownerProfile: "https://dc-cars.tebex.io/category/cars",
    violations: ["Selling Non Compliant Vehicles"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-03-15",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "12",
    serverName: "British frontlise rp",
    connectionCode: "N/a",
    ownerProfile: "Nill",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-03-10",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "13",
    serverName: "pohodari WL",
    connectionCode: "/av3pmk",
    ownerProfile: "https://forum.cfx.re/u/squizer/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-03-05",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "14",
    serverName: "pohodari non WL",
    connectionCode: "/av3pmk",
    ownerProfile: "https://forum.cfx.re/u/squizer/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2025-03-00",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "15",
    serverName: "British Enforcement RP",
    connectionCode: "/b36akp",
    ownerProfile: "https://forum.cfx.re/u/British_Enforcement/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-12-25",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "16",
    serverName: "Trident Network 1.0",
    connectionCode: "/4jbrl9",
    ownerProfile: "https://forum.cfx.re/u/jsabzz_1/summary",
    violations: [ "Selling Non Compliant Vehicles", "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-12-20",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "17",
    serverName: "Static RP",
    connectionCode: "/bqzoop",
    ownerProfile: "https://forum.cfx.re/u/N93/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-12-15",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "18",
    serverName: "fury Roleplay",
    connectionCode: "/v5xkkx",
    ownerProfile: "https://forum.cfx.re/u/furyrp.ro/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-12-10",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "19",
    serverName: "BlueSkyRP",
    connectionCode: "/g5dogz",
    ownerProfile: "https://forum.cfx.re/u/Mr.Jacob/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-12-05",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "20",
    serverName: "DRAGON ROLEPLAY",
    connectionCode: "/8ve5e3",
    ownerProfile: "https://forum.cfx.re/u/dragon_rp4/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-11-30",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "21",
    serverName: "RICH CITY ROLEPLAY",
    connectionCode: "/4vabjo",
    ownerProfile: "https://forum.cfx.re/u/richcityrp_pk/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-11-25",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "22",
    serverName: "DRAGON ROLEPLAY",
    connectionCode: "/8ve5e3",
    ownerProfile: "https://forum.cfx.re/u/dragon_rp4/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-11-20",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "23",
    serverName: "Thin Line",
    connectionCode: "N/a",
    ownerProfile: "https://thinlinesanctuary.com",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-11-15",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "24",
    serverName: "SARP",
    connectionCode: "N/a",
    ownerProfile: "https://www.patreon.com/saroleplay1",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-11-10",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "25",
    serverName: "cidade alta rp",
    connectionCode: "N/a",
    ownerProfile: "https://cidadealtarp.com/",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-11-05",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "26",
    serverName: "av-scripts",
    connectionCode: "N/a",
    ownerProfile: "https://av-scripts.tebex.io/package/4449637",
    violations: ["CODE OF CONDUCT", "SELLING CHILD PEDS",  "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-11-00",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "27",
    serverName: "kentuckyrp",
    connectionCode: "/lok5k7",
    ownerProfile: "https://forum.cfx.re/u/kentuckyroleplay/summary",
    violations: ["Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-10-25",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "28",
    serverName: "Capital City",
    connectionCode: "/zkd335",
    ownerProfile: "https://forum.cfx.re/u/HigorBourges/summary ",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-10-20",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "29",
    serverName: "Gun Game V",
    connectionCode: "/m9kvd7 ",
    ownerProfile: "N/a",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-10-15",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "30",
    serverName: "Drill-UK",
    connectionCode: "/e3r47a ",
    ownerProfile: "https://forum.cfx.re/u/DRILL-UK/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-10-10",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "31",
    serverName: "PA Scripts",
    connectionCode: "N/a",
    ownerProfile: "https://www.patreon.com/pafivemscripts/shop",
    violations: ["Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-10-05",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "32",
    serverName: "MNRP",
    connectionCode: "/4eedg9",
    ownerProfile: "https://forum.cfx.re/u/kFxDaKing/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-09-30",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "33",
    serverName: "VineWood RP",
    connectionCode: "/pprvvy",
    ownerProfile: "https://forum.cfx.re/u/VisionGames/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-09-25",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "34",
    serverName: "MaldivasRP",
    connectionCode: "/mkyv9d",
    ownerProfile: "https://forum.cfx.re/u/MaldivasRPV1/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-09-20",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "35",
    serverName: "Empyrean City",
    connectionCode: "/qgarq9",
    ownerProfile: "https://forum.cfx.re/u/juswaaaax/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-09-15",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "36",
    serverName: "Life In Chiraq ",
    connectionCode: "/brelvd",
    ownerProfile: "https://forum.cfx.re/u/ITZ_SWISH/summary",
    violations: [ "Non tos compliant Vehicles, Clothing and mlos", "Unauthorized monetization"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "closed",
    reportDate: "2024-09-10",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  // 03/05/2025
  {
    id: "37",
    serverName: "District Network",
    connectionCode: "/x837jg",
    ownerProfile: "https://forum.cfx.re/u/District_Network/summary",
    violations: [ "Non tos compliant Vehicles Clothing and mlos", "threatening minors With Inflicting Harm", "Unauthorized monetization", "Breaking Creator Policies on Selling Vehicles that they made.", "Doxxing Prior Staff"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "open",
    reportDate: "2025-05-01",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  // 05/05/2025
  {
    id: "38",
    serverName: "ST TOWN",
    connectionCode: "/63o3l8", // THIS IS THE CONNECTION CODE Ex. /brelvd
    ownerProfile: "https://forum.cfx.re/u/czdev",
    violations: ["Code of Conduct Violation", "Breaking IP Laws"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "open",
    reportDate: "2025-05-01",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "39",
    serverName: "^6圣罗兰 Q群820171122招团队入驻给扶持KOOK搜索1066",
    connectionCode: "/bz7aal", // THIS IS THE CONNECTION CODE Ex. /brelvd
    ownerProfile: "https://forum.cfx.re/u/ShangYin111",
    violations: ["Code of Conduct Violation", "Breaking IP Laws"],
    reportLink: "https://docs.google.com/document/d/abc123",
    status: "open",
    reportDate: "2025-05-01",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 100,
    serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "40",
    serverName: "^6梦幻Dreamy",
  connectionCode: "/d4rxay", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Isazs777",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "41",
    serverName: "^6起点-半RP生活服丨Q群698954445丨美女接待⭐",
  connectionCode: "/egrvlp", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/1026096026",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "42",
    serverName: "^4 HYBRID TOWN",
  connectionCode: "/3q788z", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/kbkeyshop03",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "43",
    serverName: "Brasilia RP server 1",
  connectionCode: "/xl9dex", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Getaway_Driver",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "44",
    serverName: "CLOUD COMMUNITY & STORY",
  connectionCode: "/87k9d4", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/No.1_Key_VIP",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "45",
    serverName: "Brasilia RP server 2",
  connectionCode: "/3abzey", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Getaway_Driver",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "46",
    serverName: "^3VITAL RP NEW WHITELIST 18+ ECONOMY SERVER",
  connectionCode: "/ogpvmv", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/GrumpyMonroe",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "47",
    serverName: "^8STATIC ^8FIVEPD 🚔",
  connectionCode: "/egmomd", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Nergotoo",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "48",
    serverName: "CrimeInTheD Serious RP",
  connectionCode: "/rd9e38", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/CrimeInTheD",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "49",
    serverName: "^4GUAYAQUIL RP ☀️",
  connectionCode: "/eb3dga", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/LJA-STUDIOS",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "50",
    serverName: "STATIC FIVEPD: RED",
  connectionCode: "/3ddyrr", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Nergotoo",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "52",
    serverName: "^Belgium City 🌴",
  connectionCode: "/9k9m4a", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/BelgiumCity",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "53",
    serverName: "^4Central London V1.5 ",
  connectionCode: "/e7kbqb", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/Baileyy_YT24",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "54",
    serverName: "^4Cops ^0Vs ^1Robbers",
  connectionCode: "/g9k35o", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/monte_monte",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "55",
    serverName: "^5Tennessee State Roleplay ^0| ^8vMenu ^0| ^4LEO ^0| ^2CIV",
  connectionCode: "/xqa6og", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/JonathaF",
  violations: ["Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "56",
    serverName: "My Way RP V2",
  connectionCode: "/zeyj34", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/MyWayRP",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "57",
    serverName: "^3Streets Of Florida💥 ^2 ^4|| ^4Streetlife🎲 Based || ^4Starting Cash 3.5 Million💰 || ^4E-Girl Friendly♥️ || ^4Community Friendly😎 || ^4Real Economy💯 || ^4Real Jobs🦾 || ^4Custom Cars🏁 || ^4Rob NPC's��� || ^4Play as Ped👼🏾 || ^4Drugs💊 || ^4Gangs Welcome🩸 ||",
  connectionCode: "/77kr7v", // THIS IS THE CONNECTION CODE Ex. /brelvd
  ownerProfile: "https://forum.cfx.re/u/FlawdaBoi",
  violations: ["Code of Conduct Violation", "Breaking IP Laws"],
  reportLink: "https://docs.google.com/document/d/abc123",
  status: "open",
  reportDate: "2025-05-01",
  serverStatus: "offline",
  playerCount: 0,
  maxPlayers: 100,
  serverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  { 
    id: "58",
    serverName: "SPACE RolePlay 3.0  ",
    connectionCode: "/dlgap3",
    ownerProfile: "https://forum.cfx.re/u/Tianshao999",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "59",
    serverName: "三叶TreFoil RP4.0丨登陆器进服丨整顿重来丨不权限丨极致优化丨顶尖玩法",
    connectionCode: "/r8rrpg",
    ownerProfile: "https://forum.cfx.re/u/sansan7777",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "60",
    serverName: "魔都2.0>新人2000万>组队副本>QQ群386396772>极致玩法>奖励丰富>结婚系统>宠物系统>",
    connectionCode: "/47k9ko",
    ownerProfile: "https://forum.cfx.re/u/wansi111",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "61",
    serverName: "夜玫瑰｜招团队入驻有扶持",
    connectionCode: "/q6lgy6",
    ownerProfile: "https://forum.cfx.re/u/Foxlyy",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "62",
    serverName: "英雄 半RP 进群下载登录器 Q群632400909 KOOK 166666",
    connectionCode: "/7z7dqv",
    ownerProfile: "https://forum.cfx.re/u/lianming1",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "63",
    serverName: "Devaus älpee  SIGMA👑",
    connectionCode: "/kydvg7",
    ownerProfile: "https://forum.cfx.re/u/lussu62",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "64",
    serverName: "曼德拉Mandela 半RP角色扮演 1.0 进群过白名单 QQ群：231926901",
    connectionCode: "/kkgpg6",
    ownerProfile: "https://forum.cfx.re/u/TangYINN",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "65",
    serverName: "达芬奇-半R-无权限-无管理-纯玩家服务器-免白名单-无需下载器-Q群:216231015",
    connectionCode: "/d7rzkd",
    ownerProfile: "https://forum.cfx.re/u/BB9999",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "66",
    serverName: "[LTU] MEMORY RP | 🏙️ GYVENIMAS MIESTE | 🚔 POLICIJA & MAFIJOS | 🏡 NUOSAVI NAMAI | 🚗 REALISTINĖ EKONOMIKA | 💼 DARBAI SU RANGŲ SISTEMA | 📜 TEISINĖ SISTEMA | 🔫 GINKLŲ PREKYBA | 🎭 NELEGALIOS VEIKLOS |",
    connectionCode: "/lg6doj",
    ownerProfile: "https://forum.cfx.re/u/Augis_II",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "67",
    serverName: "DMVRP Dev By JayRuger",
    connectionCode: "/3q4oxy",
    ownerProfile: "https://forum.cfx.re/u/JayRuger",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "68",
    serverName: "Stories of Southside Chiraq 💥| #1 Serious Chicago | JOIN NOW ⚡ Serious Roleplay ",
    connectionCode: "/dqgemq",
    ownerProfile: "https://forum.cfx.re/u/ChicagoReborn",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "69",
    serverName: "⚡6HE RAQ RP V2⚡│🔥Real Roleplay🔥|📈Most Optimized Gang Server📈│💊Custom Drugs💊│🎥Stremer Prio🎥│👧Female Prio👧│🦺Active Staff🦺│📊High FPS📊│📚discord.gg/theraqrp📚|🚔ctive PD & EMS🚔",
    connectionCode: "/53yp9d",
    ownerProfile: "https://forum.cfx.re/u/lidrxpxff",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "70",
    serverName: "Black Side RP | 𝘐𝘮𝘮𝘦𝘳𝘴𝘪𝘰𝘯 𝘙𝘰𝘭𝘦𝘱𝘭𝘢𝘺 𝘍𝘰𝘳𝘮𝘪𝘥𝘢𝘣𝘭𝘦",
    connectionCode: "/9kdklm",
    ownerProfile: "https://forum.cfx.re/u/kimmypelletier",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "71",
    serverName: "醉幻之都1.0 半rp正式启航 | Q群1043779130 | 过白找管理",
    connectionCode: "/o78kgr",
    ownerProfile: "https://forum.cfx.re/u/1094757896",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "72",
    serverName: "◆云顶Yun Ding 1.0半RP欢迎你QQ群：991358421◆",
    connectionCode: "/jdqozl",
    ownerProfile: "https://forum.cfx.re/u/Lao.A",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "73",
    serverName: "奥斯卡 𝙊𝙎𝙘𝙖𝙧半RP扮演 & QQ：129267587 & KOOK:11100307",
    connectionCode: "/el3xrp",
    ownerProfile: "https://forum.cfx.re/u/laomaogeigei",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "74",
    serverName: "^天使之翼>新人500万>结婚系统>真人玩家>德州扑克> ",
    connectionCode: "/qo7jy4",
    ownerProfile: "https://forum.cfx.re/u/TianTianAiYaoGun",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "75",
    serverName: "黎明之都半RP免白名单 QQ群719131793多玩法千辆精车模",
    connectionCode: "/b5r3rp",
    ownerProfile: "https://forum.cfx.re/u/suqi666",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "76",
    serverName: "MIA猫咖屋 |进群下载登录器|美女接待|服主听劝",
    connectionCode: "/eljmv3",
    ownerProfile: "https://forum.cfx.re/u/God-Z1",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "77",
    serverName: "Grand Opening Came From Nothing NYC Serious RP | CUSTOM DRUGS | FREE GANGS | CUSTOM HOUSING | SREAMER FRIENDLY",
    connectionCode: "/pmavlm",
    ownerProfile: "https://forum.cfx.re/u/oRojo",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "78",
    serverName: "✨ HoodDreamsRp ✨ | 🔥 Serious RP 🔥 | 🌿 Full Drug System 🌿 | 💼 Player-Owned Jobs 💼 | 🚗 Player-Owned Dealerships 🚗 | 🔧 Player-Owned Mechanics 🔧 | 🎉 Weekly Events & Prizes 🎉 | 💖 eGirl Friendly 💖 | 🤝 Caring Community 🤝",
    connectionCode: "/5xllmr",
    ownerProfile: "https://forum.cfx.re/u/SimplyDK",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "79",
    serverName: "Dope Wars Roleplay 🔥 | 18+ SEMI GANG RP | iring LEO and EMS | Custom Vehicles | Custom Clothing | Custom Drugs | Realistic Economy | 1500+ Houses | Sell Drugs Anywhere | Streamer Friendly |",
    connectionCode: "/ybzm55",
    ownerProfile: "https://forum.cfx.re/u/DopeWarsRoleplay",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "80",
    serverName: "life in chi city",
    connectionCode: "/53a4rz",
    ownerProfile: "https://forum.cfx.re/u/PrettyBoyDj",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "81",
    serverName: "🌎💰GRAND OPENING🌎💰 FREE GANGS TRAPLOVERP🌎 | 💰  FRESH ECONOMY💰 | 🔫 #1 Serious RP🔫 |  E Girl/Stream Friendly🎥 | 👕 Custom Drip 👕 | 🔪 Gang Wars 🔪 | 👷 Active Staff 👷 | 💻 HIGH FPS 💻| 🌎",
    connectionCode: "/97o6qk",
    ownerProfile: "https://forum.cfx.re/u/kwl-uda",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "82",
    serverName: "Dirty South RP |🔥 GRAND OPENING 🔥| 🚔 NOW HIRING POLICE & EMS 🚑 | Streamer Friendly 🎥 | 🚗 Custom Cars & Jobs |🏢 Player-Owned Businesses | Active & Friendly Staff 👮",
    connectionCode: "/j7xp7p",
    ownerProfile: "https://forum.cfx.re/u/DirtySouth-RP",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "83",
    serverName: "BankRoll Fresh RP$ Custom Car$ Custom items$ Custom Drugs$ Gangs AND MORE QBCore Framework",
    connectionCode: "/yzagr5",
    ownerProfile: "https://forum.cfx.re/u/Timmy_U_fuNNy",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "84",
    serverName: "大内蒙半RP1.0 加QQ群579732284 ⭐",
    connectionCode: "/j7qej4",
    ownerProfile: "https://forum.cfx.re/u/ShiQ",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "85",
    serverName: "👿 Forgotten LA | V3 👿 | ⭐ CUSTOM COIN GUNS⭐ | 🪽 FPS OPTIMIZED SERVER 🪽 | 📊 LA MAP BASED SEMI SERIOUS 📊 | 📦 STARTER PACKS 📦 | ☠️ GANG ROLEPLAY ☠️ | ⚔️ BLOCK TO BLOCK KOS ⚔️ | 👕 CUSTOM CLOTHING 👕 | 💊 CUSTOM DRUGS 💊 | 🛡️ ACTIVE & FAIR STAFF 🛡️ | 🎥 STREAMER FRIENDLY 🎥 | 🏥 CUSTOM EMS 🏥 | 🌿 DIFFERENT DRUG LOCATIONS 🌿 | 👾 NEW-PLAYER FRIENDLY 👾 | 🔗 DISCORD.GG/FGLA 🚀 #1 SEMI SERIOUS SERVER",
    connectionCode: "/3vkyxz",
    ownerProfile: "https://forum.cfx.re/u/e1venk",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "86",
    serverName: "曼德拉Mandela 半RP角色扮演 1.0 进群过白名单 QQ群：231926901",
    connectionCode: "/kkgpg6",
    ownerProfile: "https://forum.cfx.re/u/TangYINN",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "87",
    serverName: "达芬奇-半R-无权限-无管理-纯玩家服务器-免白名单-无需下载器-Q群:216231015",
    connectionCode: "/d7rzkd",
    ownerProfile: "https://forum.cfx.re/u/BB9999",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "88",
    serverName: "GNB City",
    connectionCode: "/qdek79",
    ownerProfile: "https://forum.cfx.re/u/gnbcity",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "89",
    serverName: "Stories of Southside Chiraq 💥| #1 Serious Chicago | JOIN NOW ⚡ Serious Roleplay ",
    connectionCode: "/dqgemq",
    ownerProfile: "https://forum.cfx.re/u/ChicagoReborn",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "90",
    serverName: "MidNightRP | 1.1 | WL-OFF | PL",
    connectionCode: "/pzmgma",
    ownerProfile: "https://forum.cfx.re/u/BenZekko",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "91",
    serverName: "Fiinesse The Bag |18+ semi serious roleplay💯|💗E-girl/Streamer Friendly🎥|Realistic Economy 💰|Player owned Jobs & Businesses|Hiring EMS 🚑/PD👮/Staff🖥️ |Custom Vehicles 🏎️",
    connectionCode: "/m9qrza",
    ownerProfile: "https://forum.cfx.re/u/BIGTM",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "92",
    serverName: "🌴 Gangsters Paradice🌴 | 💜 E-Girl / Streamer Friendly 📷 |😈 Serious Gang RP | 🏡 Custom Houses 🏡 | 👮 Hiring Police 👮 | 🚑 Hiring EMS 🚑 |  🚗 Custom Vehicles🚗 | 👼 Active Staff 👼 |discord.gg/hVgGS6tvd4| 💊 Custom Drugs💊 | 🕶️ Custom Drip   ",
    connectionCode: "/odgzjr",
    ownerProfile: "https://forum.cfx.re/u/BagBoyTeazy",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "93",
    serverName: "欲都 半Rp 最新版本 QQ群：988888861 免登录器",
    connectionCode: "/qxqb46",
    ownerProfile: "https://forum.cfx.re/u/A-565758",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "94",
    serverName: "醉幻之都1.0 半rp正式启航 | Q群1043779130 | 过白找管理",
    connectionCode: "/o78kgr",
    ownerProfile: "https://forum.cfx.re/u/1094757896",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "95",
    serverName: "◆云顶Yun Ding 1.0半RP欢迎你QQ群：991358421◆",
    connectionCode: "/jdqozl",
    ownerProfile: "https://forum.cfx.re/u/Lao.A",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "96",
    serverName: "奥斯卡 𝙊𝙎𝙘𝙖𝙧半RP扮演 & QQ：129267587 & KOOK:11100307",
    connectionCode: "/el3xrp",
    ownerProfile: "https://forum.cfx.re/u/laomaogeigei",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "97",
    serverName: "MIA猫咖屋 |进群下载登录器|美女接待|服主听劝",
    connectionCode: "/eljmv3",
    ownerProfile: "https://forum.cfx.re/u/God-Z1",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "98",
    serverName: "Outside RP | True-to-Life Roleplay | Grand Opening | Active Community | Semi-Serious RP | Active Staff | Fresh Economy ",
    connectionCode: "/ak68ak",
    ownerProfile: "https://forum.cfx.re/u/PabloShoota",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "99",
    serverName: "黎明之都半RP免白名单 QQ群719131793多玩法千辆精车模",
    connectionCode: "/b5r3rp",
    ownerProfile: "https://forum.cfx.re/u/suqi666",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "100",
    serverName: "Grand Opening Came From Nothing NYC Serious RP | CUSTOM DRUGS | FREE GANGS | CUSTOM HOUSING | SREAMER FRIENDLY",
    connectionCode: "/pmavlm",
    ownerProfile: "https://forum.cfx.re/u/oRojo",
    violations: [
      "Code of Conduct",
      "IP Infringement"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
  {
    id: "101",
    serverName: "✨ HoodDreamsRp ✨ | 🔥 Serious RP 🔥 | 🌿 Full Drug System 🌿 | 💼 Player-Owned Jobs 💼 | 🚗 Player-Owned Dealerships 🚗 | 🔧 Player-Owned Mechanics 🔧 | 🎉 Weekly Events & Prizes 🎉 | 💖 eGirl Friendly 💖 | 🤝 Caring Community 🤝",
    connectionCode: "/5xllmr",
    ownerProfile: "https://forum.cfx.re/u/SimplyDK",
    violations: [
      "IP Infringement",
      "Code of Conduct"
    ],
    status: "open",
    reportDate: "2025-05-18",
    serverStatus: "offline",
    playerCount: 0,
    maxPlayers: 200
  },
];

// Add reportDate, serverStatus, playerCount, and maxPlayers to all reports
for (let i = 2; i < exampleReports.length; i++) {
  if (!exampleReports[i].reportDate) {
    // Generate dates in reverse chronological order
    const date = new Date(2025, 4, 10 - i);
    exampleReports[i].reportDate = date.toISOString().split('T')[0];
    
    // Add random server status
    const statuses: ServerStatus[] = ["online", "offline", "unknown"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    exampleReports[i].serverStatus = randomStatus;
    
    // Add player count if server is online
    if (randomStatus === "online") {
      const maxPlayers = Math.floor(Math.random() * 200) + 50;
      const playerCount = Math.floor(Math.random() * maxPlayers);
      exampleReports[i].maxPlayers = maxPlayers;
      exampleReports[i].playerCount = playerCount;
    } else if (randomStatus === "offline") {
      exampleReports[i].maxPlayers = Math.floor(Math.random() * 200) + 50;
      exampleReports[i].playerCount = 0;
    }
  }
}

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "open" | "closed" | "resolved">("all");
  
  const filteredReports = exampleReports.filter(report => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      report.serverName.toLowerCase().includes(searchLower) ||
      report.connectionCode.toLowerCase().includes(searchLower) ||
      report.violations.some(v => v.toLowerCase().includes(searchLower)) ||
      report.status.toLowerCase().includes(searchLower);
    
    switch (activeFilter) {
      case "all":
        return matchesSearch;
      case "open":
      case "closed":
      case "resolved":
        return matchesSearch && report.status === activeFilter;
      default:
        return matchesSearch;
    }
  });

  const statusCounts = {
    all: exampleReports.length,
    open: exampleReports.filter(r => r.status === "open").length,
    closed: exampleReports.filter(r => r.status === "closed").length,
    resolved: exampleReports.filter(r => r.status === "resolved").length,
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center">
        <div className="animate-fade-in container max-w-6xl px-8 py-24">
          <div className="mb-16 text-center sm:text-left">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              <span className="text-gradient font-semibold">Reports</span> Database
            </h1>
            <p className="text-lg md:text-xl font-light text-white/70 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              Browse our community-driven database of FiveM server violations and reports.
            </p>
          </div>
          
          <div className="relative mb-8">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white/50" size={18} />
            <Input
              type="text"
              placeholder="Search reports by name, connection code, violations or status..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zinc-900/50 border-white/10 text-white placeholder:text-white/50 h-12 backdrop-blur-sm"
            />
          </div>
          
          <div className="mb-10 flex flex-wrap gap-2 justify-center sm:justify-start">
            <FilterButton 
              active={activeFilter === "all"} 
              onClick={() => setActiveFilter("all")}
              count={statusCounts.all}
            >
              All Reports
            </FilterButton>
            <FilterButton 
              active={activeFilter === "open"} 
              onClick={() => setActiveFilter("open")}
              count={statusCounts.open}
              className="bg-orange-500/20 border-orange-500/30 hover:bg-orange-500/30"
            >
              Open
            </FilterButton>
            <FilterButton 
              active={activeFilter === "closed"} 
              onClick={() => setActiveFilter("closed")}
              count={statusCounts.closed}
              className="bg-red-500/20 border-red-500/30 hover:bg-red-500/30"
            >
              Closed
            </FilterButton>
            <FilterButton 
              active={activeFilter === "resolved"} 
              onClick={() => setActiveFilter("resolved")}
              count={statusCounts.resolved}
              className="bg-green-500/20 border-green-500/30 hover:bg-green-500/30"
            >
              Resolved
            </FilterButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <ReportTile key={report.id} report={report} />
              ))
            ) : (
              <div className="col-span-3 py-20 text-center">
                <div className="text-white/40 mb-4">
                  <Filter size={48} className="mx-auto opacity-50" />
                </div>
                <h3 className="text-xl font-light mb-2">No reports found</h3>
                <p className="text-white/60">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper component for filter buttons
const FilterButton = ({ 
  children, 
  active, 
  onClick,
  count,
  className,
  icon
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
  count: number;
  className?: string;
  icon?: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-2 rounded-full text-sm border text-white/80 transition-all flex items-center gap-2",
      active 
        ? "bg-white/10 border-white/30" 
        : "bg-black border-white/10 hover:bg-white/5",
      className
    )}
  >
    {icon && icon}
    {children}
    <span className={cn(
      "bg-white/10 px-2 rounded-full text-xs",
      active ? "text-white" : "text-white/70"
    )}>
      {count}
    </span>
  </button>
);

export default Reports;
