const CondoList: string[] = [
  "185 Rajadamri",
  "A Space Asoke - Ratchada",
  "A Space Hideaway Asoke Ratchada ",
  "A Space ID Asoke - Ratchada",
  "AREEYA DAILY KASET-NAWAMINTR",
  "AREEYA MOVA KASET-NAWAMINTR",
  "Areeya The Color 2 Lat Pla Khao",
  "Ashton chula",
  "Ashton Chula - Silom",
  "Aspire Asoke-Ratchada",
  "Aspire RAMA 4",
  "Aspire Sathorn - Taksin (Timber zone)",
  "Aspire Sathorn - Thapra",
  "Aspire Sukhumvit 48",
  "Aspire สาทร-ราชพฤกษ์",
  "BEAT BANGWA INTERCHANGE",
  "Baan Klang Muang Ladprao 71",
  "Baan Klang Muang Ladprao-Yothin Phatthana",
  "Baan Klang Muang Swiss Town Kaset-Nawamin",
  "Baan Klang Muang Urbanion Ladprao - Chokchai 4",
  "Baan Klang Muang Urbanion Ladprao Sena 2",
  "Baan Piya Sathorn",
  "Baanpuripuri Satriwittaya 2",
  "Bangkok Horizon Ratchada - Thapra",
  "Blossom Condo Sathorn-Charoenrat Rd.",
  "Brompton Pet Friendly Sukhumvit107",
  "C Ekkamai ",
  "Casa City Ekkamai - Ramintra",
  "Casa City Sukontasawat 2",
  "Casa City The Spirit Ekamai – Ramindra 2",
  "Chapter One Eco Ratchada - Huai Khwang",
  "Chapter One Modern Dutch ",
  "Chewathai Kaset - Nawamin",
  "Chewathai Phetkasem 27",
  "Ciela Charan 13 Station",
  "Condo One X Sukhumvit 26",
  "Condolette Pixel Sathorn",
  "Cozy Satreewittaya 2 Soi 10",
  "D Space Chokchai 4",
  "ECO SPACE KASET-NAWAMIN",
  "ESSE Sukhumvit 36",
  "Edge 23 by sansiri",
  "Elio Del Ray",
  "Garden Place Ratchada 20",
  "Golden Pearl Bangkok, Sukhumvit 101/1",
  "Golden Town Ladprao – Kaset nawamin",
  "Grand Palace",
  "Grand Park View Asoke",
  "H2 Condo รามอินทรา 21",
  "Hasu Haus (Soi Onnut 1/1)",
  "Hasu Haus",
  "Hive Sathorn",
  "I Place",
  "IBIZA Condo rca ",
  "IDEO Mobi Sathorn",
  "IDEO RAMA 9 Asoke",
  "IDEO SATHORN-THAPRA",
  "Ideo Ladprao 5",
  "Ideo Mobi Bangsue Grand Interchange",
  "Ideo Mobi Rangnam",
  "Ideo Mobi Sukhumvit 66 ",
  "Ideo Mobi Wongsawang-Interchange",
  "Ideo Phaholyothin Chatujak",
  "Ideo Q Ratchathewi",
  "Ideo bluecove bts อุดมสุข",
  "Ivy Residence Pinklao",
  "Ivy Thonglor",
  "Juldis River Mansion",
  "KLASS Siam",
  "Kensington Sukhumvit-Theparak",
  "Keyne by Sansiri",
  "Kiartithanee City Mansion",
  "KnightsBridge Space Rama 9",
  "LPN park ลุมพินี พาร์ค พระรามเก้า-รัชดา",
  "Life @ Ratchada Ladprao",
  "Life @ Sathorn 10",
  "Life @ Sukhumvit 65",
  "Life @ Wireless",
  "Life Asoke Hype Rama 9",
  "Life Asoke Hype",
  "Life Asoke Rama9",
  "Life Asoke-rama9",
  "Life Ratchadapisek Condo",
  "Life Ratchadapisek",
  "Life Sathorn Sierra",
  "Lumpini Park Riverside Rama 3",
  "Maesto 19 condo",
  "Maestro 14 Siam Ratchathewi",
  "Metro Sky Wutthakat",
  "Mode 61 condo",
  "My Condo Sukhumvit 81",
  "NOBLE REVO SILOM",
  "Navara Residence​ Langsuan",
  "Noble Around 33",
  "Noble Remix",
  "Notting Hill Jatujak Interchange พหลโยธิน 18 ",
  "Nue Noble Centre Bangna",
  "Nye by sansiri",
  "Oka Haus (Sansiri)",
  "PELA Condo",
  "Panasiri Residences Kaset-Nawamin",
  "Park 24 (Sukhumvit 24)",
  "Patra villa 8 Chokchai 4 - Ladprao 71",
  "Pause 115",
  "Pause Condo",
  "Phahon Yothin 24",
  "Plum Condo Ramkhamhaeng Station",
  "Plus City Park Ladphrao 71",
  "Politan Rive",
  "Pradya Hometown",
  "Premium Place Ekamai - Rarm Intra 2",
  "Premium Place Kaset - Nawamin 2",
  "Private Nirvana Ladprao Life Ladprao 71",
  "Regent Home 28 (บางซ่อน)",
  "Regent Orchid Condo Sukhumvit 101",
  "Regent Orchid ตลาดพลู",
  "Regent home 97/1",
  "Rhythm 36-38",
  "Rhythm Ekkamai Estate",
  "Rhythm Phahol – Ari",
  "Rhythm Ratchada",
  "Rhythm Sukhumvit 50",
  "Rise rama 9 ",
  "Runesu ทองหล่อ 5",
  "SENA Kith MRT – Bangkae",
  "Sense of London",
  "Sky Walk Condominium",
  "Skyline รัตนาธิเบศร์",
  "Supalai City Resort",
  "Supalai Cute Ratchayothin - Phaholyothin 34",
  "Supalai Park Tiwanon",
  "Supalai Premier @ Asoke",
  "Supalai Premier ราชเทวี",
  "Supalai oriental sukhumvit 39",
  "TC Green Rama 9",
  "THE LINE Asoke - Ratchada",
  "THE LINE Jatujak - Mochit",
  "THE NEST Chula-Samyan",
  "The Address Chidlom",
  "The Base Park East Sukhumvit 77",
  "The Base Park West Sukhumvit 77",
  "The Base Sukhumvit 50",
  "The Base เพชรบุรี-ทองหล่อ",
  "The Clover ทองหล่อ ซอย18",
  "The Coast Bangkok",
  "The Diplomat Sathorn ",
  "The Gallery Bearing",
  "The Key Sathorn - Ratchapruek",
  "The Landmark Ekamai-Ramindra",
  "The Line Sukhumvit 101",
  "The Line sukhumvit 101",
  "The Loft by I-ZEN Nakniwat 48",
  "The Lumpini 24",
  "The Muve รามคำแหง22",
  "The Niche Pride Thonglor-Phetchaburi",
  "The Origin สุขุมวิท 105",
  "The Parkland Phetkasem 56",
  "The Plant Citi Ladphrao 71",
  "The Privacy Rama 9",
  "The Reserve Phahol-Pradipat",
  "The Room Sukhumvit 40",
  "The Tempo Grand Sathorn-Wutthakat",
  "The Tierra Ladprao 71",
  "The Tree Interchange",
  "The Waterford Park Sukhumvit 53",
  "The Waterford Rama 4",
  "U Delight @ Jatujak Station",
  "U Delight @ Onnut Station",
  "U Delight @Talat Phlu Station",
  "VILLA RACHATEWI BTS  Phayathai",
  "Via Botani (Sukhumvit 47)",
  "Villa Bajaj",
  "Whizdom @ Punnawithi Station",
  "Whizdom Station Ratchada - Thapra ",
  "Wittayu Complex",
  "XT ห้วยขวาง",
  "the parkland grand",
  "คอนโด วัน สุขุมวิท 52",
  "คอนโดลุมพินี เมกะซิตี้ บางนา",
  "ซิตี้ รีสอร์ต รัชดา-ห้วยขวาง",
  "พลัม คอนโด ปิ่นเกล้า สเตชั่น",
  "พาร์คแลนด์ เพชรเกษม",
  "ยู ดีไลท์ เรสซิเดนซ์ ริเวอร์ฟรอนท์ พระราม3",
  "รัชดาภิเษก 19",
  "ริชพาร์ค@เจ้าพระยา",
  "รีเจ้นท์ บางซ่อน",
  "รีเจ้นท์ โฮม 25 ติวานนท์ ",
  "ลิสส์ รัชโยธินคอนโดมิเนียม",
  "ลุมพินี วิลล์ สุขุมวิท 76",
  "ลุมพินี เพลส เตาปูน อินเตอร์เชนจ์ ",
  "ลุมพินีวิลล์ สุขุมวิท109",
  "ศุภาลัย ซิตี้ รีสอร์ท จรัญ 91",
  "ศุภาลัย ซิตี้ รีสอร์ท สุขุมวิท105",
  "ศุภาลัยเวอเรนด้า สุขุมวิท 117",
  "อิลีเม้นท์ ศรีนครินทร์",
  "ฮาสุ เฮาส์ สุขุมวิท 77",
  "เดอะ เพรสซิเดนท์ สาทร - ราชพฤกษ์ 3",
  "เดอะคีย์ พหลโยธิน 34",
  "แชปเตอร์วันชายน์บางโพ",
  "ไนท์บริดจ์ คอลลาจ สุขุมวิท 107",
  "𝐒&𝐒 Sukhumvit Condo",
  "ลุมพินี เพลส พระราม 8",
  "Vino รัชดา 32",
  "Dcondo campus abac bangna",
  "พลัมพหล89",
  "ATMOZ LADPRAO 15",
  "ลุมพินีวิลล์ ซ.พัฒนาการ26",
  "Regent orchid Condo Sukumvit101",
  "Hyde Sukhumvit 13",
  "Avenue 61 Condo",
  "Life @ Sukhumvit",
  "เดอะ คีย์ พหลโยธิน 34",
  "Thonglor Tower",
  "Life One Wireless",
  "รีช พหลโยธิน 52",
  "Aspire สาทร-ท่าพระ",
  "Lumpini Suite Pinklao",
  "Blossom Condo@Sathorn-Charoenrat",
  "ลุมพินีเมกะซิตี้บางนา",
  "ไลฟ์ สาทร เซียร์รา",
  "Aspace สุขุมวิท 77",
  "แมคนิค รามอินทรา 21",
  "Sathorn House",
  "ยูดีไลท์ รัชวิภา",
  "park origin phayathai",
  "ชาโตว์ อินทาวน์ สุขุมวิท 62/1",
  "Ivy รัชดา",
  "Villa Asoke",
  "Plum Condo Central Station",
  "Whizdom Station Ratchada-Thapra",
  "The Link สุขุมวิท 64",
  "LPN mega city Bangna",
  "นิว โนเบิล ศรีนครินทร์ ลาซาล",
  "ลุมพินีปาร์คปิ่นเกล้า",
  "Chapter One Flow บางโพ",
  "Ratchada City 18",
  "Present condo",
  "Nue Noble แจ้งวัฒนะ",
  "𝐒𝐮𝐩𝐚𝐥𝐚𝐢 𝐕𝐞𝐫𝐚𝐧𝐝𝐚 ภาษีเจริญ",
  "Notting Hill สุขุมวิท-แพรกษา",
  "The Excel Groove LaSalle",
  "ลุมพินีเพลสนราธิวาสราชณครินทร์ ",
  "M Towers สุขุมวิท 35",
  "Ideo s93",
  "Ideo Mobi Rama9",
  "The President Sukhumvit 81",
  "The seed Mingle - Suanplu (Sathorn)",
  "The Seed Mingle Sathorn",
  "THE PARKLAND รัชดา-ท่าพระ",
  "THE ISSARA LADPRAO",
  "XT Huaikwang",
  "The Base Park West",
  "The Sky Sukhumvit",
  "Ideo Blucove Sukhumvit",
  "Residence 52",
  "Noble Ploenchit",
  "วิทยุคอมเพล็กซ์",
  "S&S SUKHUMVIT CONDO",
  "แอทโมซแจ้งวัฒนะ",
  "Quattro by Sansiri",
  "พาร์ค เอ็กโซ เกษตร-นวมินทร์",
  "Quinn Condo Ratchada",
  "centric รัชโยธิน",
  "เฉลิมนิจ อาจ เดอ เมซอง",
  "ฟูลเลอตัน สุขุมวิท",
  "Aspace sukhumvit 77",
  "ฟิวส์ เซนเซ่ บางแค",
  "Noble RE:D",
  "Kave Town Space",
  "Grand Park Town",
  "Icondo Green Space",
  "Life @ Phahon 18",
  "Regent Orchid สุขุมวิท 101",
  "regent home 22",
  "The Privacy Condo (รัชดา-สุทธิสาร)",
  "The President สาทร-ราชพฤกษ์ เฟส 3",
  "Esta bliss มีนบุรี",
  "The Excel Hideaway สุขุมวิท 71",
  "Nue Center Bangna",
  "อารีย์ เพลส พหลโยธิน",
  "Life Ladprao Valley",
  "The Key สาธร-เจริญราษฎ์",
  "Centric Tiwanon Station",
  "Quintara Phume สุขุมวิท 39",
  "Condo One Ladprao 18",
  "IVY River",
  "The Pano",
  "เดอะ คิทท์ พลัส สุขุมวิท 113",
  "พาร์ควิว วิภาวดี",
  "พาร์คออริจินทองหล่อ",
  "The niche ID Phetkasem-Bangkae",
];

export default CondoList;
