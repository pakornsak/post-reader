export interface Property {
  en: string
  th?: string
  station?: string
  synonym?: string
}

/*
regex:     \n(.+) \((.+)\).+
replace:   \n{ en: "$1", th: "$2" },
*/
const CondoList: Property[] = [
  { en: "185 Rajadamri" },
  { en: "38 Mansion Sukhumvit 38" },
  { en: "A Space Asoke-Ratchada" },
  { en: "A Space Hideaway Asoke Ratchada " },
  { en: "A Space ID Asoke-Ratchada" },
  { en: "A Space Play รัชดา-สุทธิสาร" },
  { en: "A Space Sukhumvit 77", th: "A space สุขุมวิท 77" },
  { en: "ATMOZ LADPRAO 15" },
  { en: "Airi Changwattana", th: "แอริ แจ้งวัฒนะ" }, //ananda
  { en: "Airi Rama 2", th: "แอริ พระราม 2" }, //ananda
  { en: "Arden Ladprao 71", th: "อาร์เด้น ลาดพร้าว 71" }, //ananda
  { en: "Arden Phatthanakan", th: "อาร์เด้น พัฒนาการ" }, //ananda
  { en: "Arden Rama 3", th: "อาร์เด้น พระราม 3" }, //ananda
  { en: "Areeya DAILY KASET-NAWAMINTR" },
  { en: "Areeya MOVA KASET-NAWAMINTR" },
  { en: "Areeya The Color 2 Lat Pla Khao" },
  { en: "Artale Ekkamai-Ramintra", th: "อาร์เทล เอกมัย-รามอินทรา" }, //ananda
  { en: "Artale Phatthanakan-Thonglor", th: "อาร์เทล พัฒนาการ-ทองหล่อ" }, //ananda
  { en: "Artisan Ratchada" },
  { en: "Ashton Asoke", th: "แอชตัน อโศก" }, //ananda
  { en: "Ashton Asoke-Rama 9", th: "แอชตัน อโศก-พระราม 9" }, //ananda
  { en: "Ashton Chula-Silom", th: "แอชตัน จุฬา-สีลม" }, //ananda
  { en: "Ashton Morph 38", th: "แอชตัน มอร์ฟ 38" }, //ananda
  { en: "Ashton Residence 41", th: "แอชตัน เรสซิเดนซ์ 41" }, //ananda
  { en: "Ashton Silom", th: "แอชตัน สีลม" }, //ananda
  { en: "Aspire Asoke-Ratchada", th: "แอสปาย อโศก-รัชดา " }, //ap
  { en: "Aspire Erawan Prime", th: "แอสปาย เอราวัณ ไพร์ม" }, //ap
  { en: "Aspire Erawan", th: "แอสปาย เอราวัณ" }, //ap
  { en: "Aspire Ngamwongwan", th: "แอสปาย งามวงศ์วาน" }, //ap
  { en: "Aspire Rama 4", th: "แอสปาย พระราม 4" }, //ap
  { en: "Aspire Rama 9", th: "แอสปาย พระราม 9" }, //ap
  { en: "Aspire Ratchada-Wongsawang", th: "แอสปาย รัชดา-วงศ์สว่าง" }, //ap
  { en: "Aspire Rattanathibet", th: "แอสปาย รัตนาธิเบศร์" }, //ap
  { en: "Aspire Rattanatibet 2", th: "แอสปาย รัตนาธิเบศร์ 2" }, //ap
  { en: "Aspire Sathorn-Ratchaphruek", th: "แอสปาย สาทร-ราชพฤกษ์" }, //ap
  { en: "Aspire Sathorn-Taksin", th: "แอสปาย สาทร-ตากสิน" }, //ap
  { en: "Aspire Sathorn-Thapra", th: "แอสปาย สาทร-ท่าพระ" }, //ap
  { en: "Aspire Sukhumvit 48", th: "แอสปาย สุขุมวิท 48" }, //ap
  { en: "Aspire Sukhumvit-Onnut", th: "แอสปาย สุขุมวิท-อ่อนนุช" }, //ap
  { en: "Aspire Wutthakat", th: "แอสปาย วุฒากาศ" }, //ap
  { en: "Atoll Bali Beach", th: "Motorway-Lat Krabang" }, //ananda
  { en: "Atoll Java Bay", th: "เอโทล จาวาเบย์" }, //ananda
  { en: "Atoll Maldives Beach", th: "เอโทล มัลดีฟ บีช" }, //ananda
  { en: "Atoll Maldives Palms", th: "เอโทล มัลดีฟส์ ปาล์ม บางนา-วงแหวน" }, //ananda
  { en: "Atoll Similan Reef On Nut-Romklao", th: "เอโทล สิมิลัน รีฟ อ่อนนุช-ร่มเกล้า" }, //ananda
  { en: "Avenue 61 Condo" },
  { en: "BEAT BANGWA INTERCHANGE" },
  { en: "Baan 365 By LPN" }, //lpn
  { en: "Baan Lumpini Suanluang Grand Rama 9", th: "บ้านลุมพินี สวนหลวง ร.9" }, //lpn
  { en: "Baan Lumpini Town Park Thakham-Rama 2", th: "บ้านลุมพินี ทาวน์พาร์ค ท่าข้าม-พระราม 2" }, //lpn
  { en: "Baan Piya Sathorn" },
  { en: "Baanpuripuri Satriwittaya 2" },
  { en: "Bangkok Horizon Ratchada-Thapra" },
  { en: "Bangkok Horizon เพชรเกษม55" },
  { en: "Blossom Condo @ Fashion Beyond" },
  { en: "Blossom Condo Sathorn-Charoenrat" },
  { en: "Brompton Pet Friendly Sukhumvit 107" },
  { en: "C Ekkamai " },
  { en: "COMPLETE ราชปารถ" },
  { en: "Casa Asoke Dindeang Condo" },
  { en: "Casa City Ekkamai-Ramintra" },
  { en: "Casa City Sukontasawat 2" },
  { en: "Casa City The Spirit Ekamai-Ramindra 2" },
  { en: "Casa Condo @ MRT สามแยกบางใหญ่" },
  { en: "Centric Tiwanon Station" },
  { en: "Centric รัชโยธิน" },
  { en: "Chaiyapruek Place" },
  { en: "Chalermnit Art De Maison" },
  { en: "Chalong Harbour Estate", th: "ฉลอง ฮาร์เบอร์ เอสเตท" }, //ananda
  { en: "Chapter Charoennakhon-riverside" },
  { en: "Chapter One Eco Ratchada-Huai Khwang" },
  { en: "Chapter One Flow บางโพ" },
  { en: "Chapter One Modern Dutch " },
  { en: "Chapter เจริญนคร Riverside" },
  { en: "Chewathai Kaset-Nawamin" },
  { en: "Chewathai Phetkasem 27" },
  { en: "Ciela Charan 13 Station" },
  { en: "Citi Smart Condominium", th: "ซิตี้ สมาร์ท คอนโดมิเนียม" }, //ap
  { en: "City Home Ratchada-Pinklao", th: "ซิตี้ โฮม รัชดา-ปิ่นเกล้า" },
  { en: "City Home Tha-Phra Intersection", th: "ซิตี้ โฮม สี่แยกท่าพระ" },
  { en: "Condo One Ladprao 18" },
  { en: "Condo One X Sukhumvit 26" },
  { en: "Condolette Pixel Sathorn" },
  { en: "Cozy Satreewittaya 2 Soi 10" },
  { en: "D Space Chokchai 4" },
  { en: "Dcondo Campus Abac Bangna" },
  { en: "De Lapis (Charan 81)" },
  { en: "ECO SPACE KASET-NAWAMIN" },
  { en: "ESSE Sukhumvit 36" },
  { en: "Edge 23 by Sansiri" },
  { en: "Elio Del Moss @พหล34" },
  { en: "Elio Del Moss", th: "เอลลิโอ เดล มอสส์" }, //ananda
  { en: "Elio Del Nest", th: "เอลิโอ เดล เนสท์" }, //ananda
  { en: "Elio Del Ray", th: "เอลิโอ เดล เรย์" }, //ananda
  { en: "Elio Sathorn-Wutthakat", th: "เอลลิโอ สาทร-วุฒากาศ" }, //ananda
  { en: "Elio Sukhumvit 64", th: "เอลลิโอ สุขุมวิท 64" }, //ananda
  { en: "Esta Bliss มีนบุรี" },
  { en: "Fuse Chan-Sathorn", th: "ฟิวส์ จันทน์-สาทร" },
  { en: "Garden Place Ratchada 20" },
  { en: "Golden Pearl Bangkok, Sukhumvit 101/1" },
  { en: "Golden Town Ladprao-Kaset Nawamin" },
  { en: "Grand Bangkok Boulevard Sathorn-Kallapaphruk" },
  { en: "Grand Palace" },
  { en: "Grand Park Town" },
  { en: "Grand Park View Asoke" },
  { en: "Green Ville สุขุมวิท 101" },
  { en: "H2 Condo รามอินทรา 21" },
  { en: "HIVE สุขุมวิท 65" },
  { en: "Hasu Haus (Soi Onnut 1/1)" },
  { en: "Hasu Haus" },
  { en: "Hive Sathorn" },
  { en: "Hyde Sukhumvit 13" },
  { en: "I-house Laguna Garden" },
  { en: "IBIZA Condo RCA " },
  { en: "IDEO Mobi Sathorn" },
  { en: "IDEO New Rama 9", th: "ไอดีโอ พระราม 9" }, //ananda
  { en: "IDEO RAMA 9 Asoke" },
  { en: "IDEO SATHORN-THAPRA" },
  { en: "IKON 77" },
  { en: "IVY River" },
  { en: "Icondo Green Space" },
  { en: "Ideo Blucove Sukhumvit", th: "ไอดีโอ บลูโคฟ สุขุมวิท" }, //ananda
  { en: "Ideo Charan 70-Riverview", th: "ไอดีโอ จรัญฯ 70-ริเวอร์วิว" }, //ananda
  { en: "Ideo Ladprao 17", th: "ไอดีโอ ลาดพร้าว 17" }, //ananda
  { en: "Ideo Ladprao 5", th: "ไอดีโอ ลาดพร้าว 5" }, //ananda
  { en: "Ideo Mix Sukhumvit 103", th: "ไอดีโอ มิกซ์ สุขุมวิท 103" }, //ananda
  { en: "Ideo Mobi Asoke", th: "ไอดีโอ โมบิ อโศก" }, //ananda
  { en: "Ideo Mobi Bangsue Grand Interchange", th: "ไอดีโอ โมบิ บางซื่อ แกรนด์ อินเตอร์เชนจ์" }, //ananda
  { en: "Ideo Mobi Phayathai", th: "ไอดีโอ โมบิ พญาไท" }, //ananda
  { en: "Ideo Mobi Rama 4", th: "ไอดีโอ โมบิ พระราม 4" }, //ananda
  { en: "Ideo Mobi Rama 9", th: "ไอดีโอ โมบิ พระราม 9" }, //ananda
  { en: "Ideo Mobi Rangnam", th: "ไอดีโอ โมบิ รางน้ำ" }, //ananda
  { en: "Ideo Mobi Sathorn", th: "ไอดีโอ โมบิ สาทร" }, //ananda
  { en: "Ideo Mobi Sukhumvit 40", th: "ไอดีโอ โมบิ สุขุมวิท 40" }, //ananda
  { en: "Ideo Mobi Sukhumvit 66", th: "ไอดีโอ โมบิ สุขุมวิท 66" }, //ananda
  { en: "Ideo Mobi Sukhumvit 81", th: "ไอดีโอ โมบิ สุขุมวิท 81" }, //ananda
  { en: "Ideo Mobi Sukhumvit East Point", th: "ไอดีโอ โมบิ สุขุมวิท อีสต์พอยท์" }, //ananda
  { en: "Ideo Mobi Sukhumvit Eastgate", th: "ไอดีโอ โมบิ สุขุมวิท อีสท์เกต" }, //ananda
  { en: "Ideo Mobi Wongsawang-Interchange", th: "ไอดีโอ โมบิ วงศ์สว่าง-อินเตอร์เชนจ์" }, //ananda
  { en: "Ideo Morph 38", th: "ไอดีโอ มอร์ฟ 38" }, //ananda
  { en: "Ideo O2", th: "ไอดีโอ โอทู" }, //ananda
  { en: "Ideo Phahol-Saphan Khwai", th: "ไอดีโอ พหล-สะพานควาย" }, //ananda
  { en: "Ideo Phaholyothin Chatuchak", th: "ไอดีโอ พหลโยธิน-จตุจักร" }, //ananda
  { en: "Ideo Q Chula Samyan", th: "ไอดีโอ คิว จุฬา-สามย่าน" }, //ananda
  { en: "Ideo Q Phayathai", th: "ไอดีโอ คิว พญาไท" }, //ananda
  { en: "Ideo Q Ratchathewi", th: "ไอดีโอ คิว ราชเทวี" }, //ananda
  { en: "Ideo Q Siam-Ratchathewi", th: "ไอดีโอ คิว สยาม-ราชเทวี" }, //ananda
  { en: "Ideo Q Victory", th: "ไอดีโอ คิว วิคตอรี่" }, //ananda
  { en: "Ideo Rama 9-Asoke", th: "ไอดีโอ พระราม 9-อโศก" }, //ananda
  { en: "Ideo Ratchada-Sutthisan", th: "ไอดีโอ รัชดา-สุทธิสาร" }, //ananda
  { en: "Ideo Sathorn Wongwianyai", th: "ไอดีโอ สาทร วงเวียนใหญ่" }, //ananda
  { en: "Ideo Sathorn-Thaphra", th: "ไอดีโอ สาทร-ท่าพระ" }, //ananda
  { en: "Ideo Sukhumvit 115", th: "ไอดีโอ สุขุมวิท 115" }, //ananda
  { en: "Ideo Sukhumvit 93", th: "ไอดีโอ สุขุมวิท 93", synonym: "Ideo S93" }, //ananda
  { en: "Ideo Thaphra Interchange", th: "ไอดีโอ ท่าพระ อินเตอร์เชนจ์" }, //ananda
  { en: "Ideo Verve Ratchaprarop", th: "ไอดีโอ เวิร์ฟ ราชปรารภ" }, //ananda
  { en: "Ideo Verve Sukhumvit", th: "ไอดีโอ เวิร์ฟ สุขุมวิท" }, //ananda
  { en: "Ideo Wutthakat", th: "ไอดีโอ วุฒากาศ" }, //ananda
  { en: "Ideo จุฬา-สามย่าน" },
  { en: "Ivy Residence Pinklao" },
  { en: "Ivy Thonglor" },
  { en: "Ivy รัชดา" },
  { en: "Juldis River Mansion" },
  { en: "KLASS Siam" },
  { en: "Kave Town Space" },
  { en: "Kensington Sukhumvit-Theparak" },
  { en: "Kensington Sukhumvit-Thepharak" },
  { en: "Keyne by Sansiri" },
  { en: "Kiartithanee City Mansion" },
  { en: "Knightbridge Prime Sathorn" },
  { en: "KnightsBridge Space Rama 9" },
  { en: "Knightsbridge Phaholyothin Interchange" },
  { en: "Knightsbridge สุขุมวิท-เทพารักษ์" },
  { en: "LAS COLINAS ASOKE" },
  { en: "LPN บดินทร์เดชา" }, //ลุมพินีคอนโดทาวน์ บดินทรเดชา-รามคำแหง
  { en: "Leluk Condominium" },
  { en: "Life @ Sukhumvit 65", th: "ไลฟ์ แอท สุขุมวิท 65" }, //ap
  { en: "Life @ Thaphra", th: "ไลฟ์ แอท ท่าพระ" }, //ap
  { en: "Life Asoke Hype", th: "ไลฟ์ อโศก ไฮป์" }, //ap
  { en: "Life Asoke Rama 9", th: "ไลฟ์ อโศก พระราม 9" }, //ap
  { en: "Life Asoke", th: "ไลฟ์ อโศก" }, //ap
  { en: "Life At Phahon-Ari", th: "ไลฟ์ แอท พหลฯ-อารีย์" }, //ap
  { en: "Life At Ratchada-Huay Kwang", th: "ไลฟ์ แอท รัชดา-ห้วยขวาง" }, //ap
  { en: "Life At Sathorn 10", th: "ไลฟ์ แอท สาทร 10" }, //ap
  { en: "Life Ladprao 18", th: "ไลฟ์ ลาดพร้าว 18" }, //ap
  { en: "Life Ladprao Valley", th: "ไลฟ์ ลาดพร้าว แวลลี่ย์" }, //ap
  { en: "Life Ladprao", th: "ไลฟ์ ลาดพร้าว" }, //ap
  { en: "Life One Wireless", th: "ไลฟ์ วัน ไวร์เลส" }, //ap
  { en: "Life Pinklao", th: "ไลฟ์ ปิ่นเกล้า" }, //ap
  { en: "Life Ratchadapisek", th: "ไลฟ์ รัชดาภิเษก" }, //ap
  { en: "Life Sathorn Sierra", th: "ไลฟ์ สาทร เซียร์รา" }, //ap
  { en: "Life Sukhumvit 48", th: "ไลฟ์ สุขุมวิท 48" }, //ap
  { en: "Life Sukhumvit 62", th: "ไลฟ์ สุขุมวิท 62" }, //ap
  { en: "Life at Ratchada-Suthisan", th: "ไลฟ์ แอท รัชดา-สุทธิสาร" }, //ap
  { en: "Life at Sukhumvit 67", th: "ไลฟ์ แอท สุขุมวิท 67" }, //ap
  { en: "Lumpini Condo Town Bodindecha-Ramkhamhaeng", th: "คอนโด ลุมพินี ทาวน์ บดินทรเดชา-รามคำแหง" }, //lpn
  { en: "Lumpini Condo Town Chonburi-Sukhumvit", th: "ลุมพินี คอนโดทาวน์ ชลบุรี-สุขุมวิท" }, //lpn
  { en: "Lumpini Condo Town North Pattaya-Sukhumvit", th: "ลุมพินี คอนโด ทาวน์ พัทยาเหนือ-สุขุมวิท" }, //lpn
  { en: "Lumpini Condo Town Ramindra-Latplakhao", th: "ลุมพินี คอนโด ทาวน์ รามอินทรา-ลาดปลาเค้า" }, //lpn
  { en: "Lumpini Condo Town Raminthra-Latplakhao 2" }, //lpn
  { en: "Lumpini Condo Town Ramintra-Laksi", th: "ลุมพินี คอนโด ทาวน์ รามอินทรา-หลักสี่" }, //lpn
  { en: "Lumpini Condo Town Ramintra-Nawamin", th: "ลุมพินี ทาวน์ รามอินทรา-นวมินทร์" }, //lpn
  { en: "Lumpini Condo Town Rattanathibet", th: "ลุมพินี คอนโด ทาวน์ รัตนาธิเบศร์" }, //lpn
  { en: "Lumpini CondoTown North Pattaya", th: "ลุมพินี คอนโดทาวน์ พัทยาเหนือ-สุขุมวิท" }, //lpn
  { en: "Lumpini Condotown Nida-Sereethai 2", th: "ลุมพินี คอนโดทาวน์ นิด้า-เสรีไทย 2" }, //lpn
  { en: "Lumpini Condotown Romklao-Suvarnabhumi", th: "ลุมพินี คอนโดทาวน์ ร่มเกล้า-สุวรรณภูมิ" }, //lpn
  { en: "Lumpini Mega City Bangna", th: "ลุมพินี เมกะ ซิตี้ บางนา" }, //lpn
  { en: "Lumpini Mixx Narathiwas-Ratchada", th: "ลุมพินี มิกซ์ นราธิวาส-รัชดา" }, //lpn
  { en: "Lumpini Mixx Thepharak-Srinakarin", th: "ลุมพินี มิกซ์ เทพารักษ์-ศรีนครินทร์" }, //lpn
  { en: "Lumpini Park Beach Cha-Am 2", th: "ลุมพินี พาร์ค บีช ชะอำ 2" }, //lpn
  { en: "Lumpini Park Beach Jomtien", th: "ลุมพินี พาร์ค บีช จอมเทียน" }, //lpn
  { en: "Lumpini Park Boromratchonnanee-Sirindhorn", th: "ลุมพินี พาร์ค บรมราชชนนี-สิรินธร" }, //lpn
  { en: "Lumpini Park Nawamin-Sriburapha", th: "ลุมพินี พาร์ค นวมินทร์-ศรีบูรพา" }, //lpn
  { en: "Lumpini Park Phahon 32", th: "ลุมพินี พาร์ค พหล 32" }, //lpn
  { en: "Lumpini Park Phet Kasem 98", th: "ลุมพินี พาร์ค เพชรเกษม 98" }, //lpn
  { en: "Lumpini Park Pinklao", th: "ลุมพินี พาร์ค ปิ่นเกล้า" }, //lpn
  { en: "Lumpini Park Rama 9-Ratchada", th: "ลุมพินี พาร์ค พระราม 9-รัชดา" }, //lpn
  { en: "Lumpini Park Rattanathibet-Ngamwongwan", th: "ลุมพินี พาร์ค รัตนาธิเบศร์-งามวงศ์วาน" }, //lpn
  { en: "Lumpini Park Riverside Rama 3", th: "ลุมพินี พาร์ค ริเวอร์ไซด์ พระราม 3" }, //lpn
  { en: "Lumpini Park Vibhavadi-Chatuchak", th: "ลุมพินี พาร์ค วิภาวดี-จตุจักร" }, //lpn
  { en: "Lumpini Place Bangna Km.3", th: "ลุมพินี เพลส บางนา กม.3" }, //lpn
  { en: "Lumpini Place Borom Ratchachonni-Pinklao", th: "ลุมพินี เพลส บรม ราชชนนี-ปิ่นเกล้า" }, //lpn
  { en: "Lumpini Place Narathiwas" }, //lpn
  { en: "Lumpini Place Narathiwas-Chaopraya", th: "ลุมพินี เพลส นราธิวาส-เจ้าพระยา" }, //lpn
  { en: "Lumpini Place Phahol-Saphankhwai", th: "ลุมพินี เพลส พหล-สะพานควาย" }, //lpn
  { en: "Lumpini Place Pinklao 2" }, //lpn
  { en: "Lumpini Place Rama 3-Riverine", th: "ลุมพินี เพลส พระราม 3-ริเวอร์ไรน์" }, //lpn
  { en: "Lumpini Place Rama 4-Kluaynamthai", th: "ลุมพินี เพลส พระราม 4-กล้วยน้ำไท" }, //lpn
  { en: "Lumpini Place Rama III-Riverview", th: "ลุมพินี เพลส พระราม 3-ริเวอร์วิว" }, //lpn
  { en: "Lumpini Place Rama IX-Ratchada", th: "ลุมพินี เพลส พระราม 9-รัชดา" }, //lpn
  { en: "Lumpini Place Rama4-Ratchadaphisek", th: "ลุมพินี เพลส พระราม4-รัชดาภิเษก" }, //lpn
  { en: "Lumpini Place Ramintra-Laksi", th: "ลุมพินี เพลส รามอินทรา-หลักสี่" }, //lpn
  { en: "Lumpini Place Ratchada-Sathu", th: "ลุมพินี เพลส รัชดา-สาธุ" }, //lpn
  { en: "Lumpini Place Ratchada-Thapra", th: "ลุมพินี เพลส รัชดา-ท่าพระ" }, //lpn
  { en: "Lumpini Place Ratchayothin", th: "ลุมพินี เพลส รัชโยธิน" }, //lpn
  { en: "Lumpini Place Sathorn", th: "ลุมพินี เพลส สาทร" }, //lpn
  { en: "Lumpini Place Srinakarin", th: "ลุมพินี เพลส ศรีนครินทร์" }, //lpn
  { en: "Lumpini Place Suksawat-Rama 2", th: "ลุมพินี เพลส สุขสวัสดิ์-พระราม2" }, //lpn
  { en: "Lumpini Place Taopoon Interchange", th: "ลุมพินี เพลส เตาปูน อินเตอร์เชนจ์" }, //lpn
  { en: "Lumpini Place UD-Posri", th: "ลุมพินี เพลส ยูดีโพศรี" }, //lpn
  { en: "Lumpini Place Water Cliff", th: "ลุมพินี เพลส วอเตอร์ คลิฟ" }, //lpn
  { en: "Lumpini Seaview Cha-Am", th: "ลุมพินี ซีวิว ชะอำ" }, //lpn
  { en: "Lumpini Seaview Jomtien", th: "ลุมพินี ซีวิว จอมเทียน" }, //lpn
  { en: "Lumpini Selected Charan 65-Sirindhorn Station", th: "ลุมพินี ซีเล็คเต็ด จรัญ 65-สิรินธร สเตชั่น" }, //lpn
  { en: "Lumpini Selected Sutthisan-Saphankwai", th: "ลุมพินี ซีเลคเต็ด สุทธิสาร-สะพานควาย" }, //lpn
  { en: "Lumpini Suite Dindaeng-Ratchaprarop", th: "ลุมพินี สวีท ดินแดง-ราชปรารภ" }, //lpn
  { en: "Lumpini Suite Phetchaburi-Makkasan", th: "ลุมพินี สวีท เพชรบุรี-มักกะสัน" }, //lpn
  { en: "Lumpini Suite Pinklao", th: "ลุมพินี สวีท ปิ่นเกล้า" }, //lpn
  { en: "Lumpini Suite Sukhumvit 41", th: "ลุมพินี สวีท สุขุมวิท 41" }, //lpn
  { en: "Lumpini Town Place Sukhumvit 62", th: "ลุมพินี ทาวน์ เพลส สุขุมวิท 62" }, //lpn
  { en: "Lumpini Town Residence Bangna-Srinakarin" }, //lpn
  { en: "Lumpini Town Ville Srinakarin-Bearing" }, //lpn
  { en: "Lumpini Township Rangsit-Klong 1", th: "ลุมพินี ทาวน์ชิป รังสิต-คลอง 1" }, //lpn
  { en: "Lumpini Ville Chaengwattana 10", th: "ลุมพินี วิลล์ แจ้งวัฒนะ 10" }, //lpn
  { en: "Lumpini Ville Changwattana-Pakkret", th: "ลุมพินี วิลล์ แจ้งวัฒนะ-ปากเกร็ด" }, //lpn
  { en: "Lumpini Ville Cultural Center", th: "ลุมพินี วิลล์ ศูนย์วัฒนธรรม" }, //lpn
  { en: "Lumpini Ville Latphrao-Chokchai 4", th: "ลุมพินี วิลล์ ลาดพร้าว-โชคชัย 4" }, //lpn
  { en: "Lumpini Ville Nakhon In-Reverview", th: "ลุมพินี วิลล์ นครอินทร์-ริเวอร์วิว" }, //lpn
  { en: "Lumpini Ville Naklua-Wong Amat", th: "ลุมพินี วิลล์ นาเกลือ-วงศ์อมาตย์" }, //lpn
  { en: "Lumpini Ville On Nut-Lat Krabang 2", th: "ลุมพินี วิลล์ อ่อน นุช-ลาด กระบัง 2" }, //lpn
  { en: "Lumpini Ville On Nut-Latkrabang", th: "ลุมพินี วิลล์ อ่อนนุช-ลาดกระบัง" }, //lpn
  { en: "Lumpini Ville On Nut-Phatthanakan", th: "ลุมพินี วิลล์ อ่อนนุช-พัฒนาการ" }, //lpn
  { en: "Lumpini Ville Onnut 46", th: "ลุมพินี วิลล์ อ่อนนุช 46" }, //lpn
  { en: "Lumpini Ville Pattanakarn-Srinakarin", th: "ลุมพินี วิลล์ พัฒนาการ-ศรีนครินทร์ " }, //lpn
  { en: "Lumpini Ville Phatthanakan-New Phetchaburi", th: "ลุมพินี วิลล์ พัฒนาการ-เพชรบุรีตัดใหม่" }, //lpn
  { en: "Lumpini Ville Phibulsongkhram Riverview" }, //lpn
  { en: "Lumpini Ville Phra Nang Klao-Riverview", th: "ลุมพินี วิลล์ พระ นั่ง เกล้า-ริเวอร์วิว" }, //lpn
  { en: "Lumpini Ville Prachachuen-Phongphet 2", th: "ลุมพินี วิลล์ ประชาชื่น-พงษ์เพชร 2" }, //lpn
  { en: "Lumpini Ville Ramintra-Laksi", th: "ลุมพินี วิลล์ รามอินทรา หลักสี่" }, //lpn
  { en: "Lumpini Ville Ramkhamhaeng 26", th: "ลุมพินี วิลล์ รามคำแหง 26" }, //lpn
  { en: "Lumpini Ville Ramkhamhaeng 44", th: "ลุมพินี วิลล์ รามคำแหง 44" }, //lpn
  { en: "Lumpini Ville Ramkhamhaeng 60/2", th: "ลุมพินี วิลล์ รามคำแหง 60/2" }, //lpn
  { en: "Lumpini Ville Ratburana Riverview 2", th: "ลุมพินี วิลล์ ราษฎร์บูรณะ ริเวอร์วิลล์ 2" }, //lpn
  { en: "Lumpini Ville Ratchaphruek-Bang Waek", th: "ลุมพินี วิลล์ ราชพฤกษ์-บางแวก" }, //lpn
  { en: "Lumpini Ville Sukhumvit 113", th: "ลุมพินี วิลล์ สุขุมวิท 113" }, //lpn
  { en: "Lumpini Ville Sukhumvit 76-Bearing Station 2", th: "ลุมพินี วิลล์ สุขุมวิท 76-แบริ่ง สเตชั่น 2" }, //lpn
  { en: "Lumpini Ville Sukhumvit 76-Bearing Station", th: "ลุมพินี วิลล์ สุขุมวิท 76-แบริ่ง สเตชั่น" }, //lpn
  { en: "Lumpini Ville Sukhumvit 77", th: "ลุมพินี วิลล์ สุขุมวิท 77" }, //lpn
  { en: "Lumpini Ville Sukhumvit 77-2", th: "ลุมพินี วิลล์ สุขุมวิท 77-2" }, //lpn
  { en: "Lumpini Ville Suksawat-Rama 2", th: "ลุมพินี วิลล์ สุขสวัสดิ์-พระราม 2" }, //lpn
  { en: "M Towers สุขุมวิท 35" },
  { en: "Maesto 19 Condo" },
  { en: "Maestro 14 Siam Ratchathewi" },
  { en: "Metro Sky Wutthakat" },
  { en: "Mind Rama 2-Sathorn", th: "มายด์ พระราม 2-สาทร" }, //ap
  { en: "Mode 61 Condo" },
  { en: "Muniq Langsuan", th: "มิวนีค หลังสวน" },
  { en: "My Condo Sukhumvit 81" },
  { en: "NUE Noble Chaengwattana", th: "นิว โนเบิล แจ้งวัฒนะ" }, //noble
  { en: "Navara Residence​ Langsuan" },
  { en: "New House Condo", th: "นิว เฮ้าส์ คอนโด" }, //lpn
  { en: "Noble Above Wireless Ruamrudee", th: "โนเบิล อโบฟ ไวร์เลส ร่วมฤดี" }, //noble
  { en: "Noble Ambience Sarasin", th: "โนเบิล แอมเบียนส์ สารสิน" }, //noble
  { en: "Noble Ambience Sukhumvit 42", th: "โนเบิล แอมเบียนส์ สุขุมวิท 42" }, //noble
  { en: "Noble Around Ari", th: "โนเบิล อราวน์ อารีย์" }, //noble
  { en: "Noble Around Sukhumvit 33", th: "โนเบิล อราวน์ สุขุมวิท 33" }, //noble
  { en: "Noble BE19", th: "โนเบิล บี นายทีน" }, //noble
  { en: "Noble BE33", th: "โนเบิล บี33" }, //noble
  { en: "Noble Cube", th: "โนเบิล คิวบ์" }, //noble
  { en: "Noble GEO Watcharapol", th: "โนเบิล จีโอ วัชรพล" }, //noble
  { en: "Noble Gable Kanso Watcharapol", th: "โนเบิล เกเบิล คันโซ วัชรพล" }, //noble
  { en: "Noble Nue Cross Khu Knot", th: "โนเบิล นิว ครอส คูคต " }, //noble
  { en: "Noble Ora", th: "โนเบิล ออร่า" }, //noble
  { en: "Noble Ploenchit", th: "โนเบิล เพลินจิต" }, //noble
  { en: "Noble ReD", th: "โนเบิล รีดี" }, //noble
  { en: "Noble Recole", th: "โนเบิล รีโคล" }, //noble
  { en: "Noble Refine", th: "โนเบิล รีไฟน์" }, //noble
  { en: "Noble Reflex", th: "โนเบิล รีเฟลกซ์" }, //noble
  { en: "Noble Reform", th: "โนเบิล รีฟอร์ม" }, //noble
  { en: "Noble Remix", th: "โนเบิล รีมิกซ์" }, //noble
  { en: "Noble Residence", th: "โนเบิล เรสซิเดนซ์ " }, //noble
  { en: "Noble Reveal", th: "โนเบิล รีวีล" }, //noble
  { en: "Noble Revent", th: "โนเบิล รีเวนต์" }, //noble
  { en: "Noble Revo Silom", th: "โนเบิล รีโว สีลม" }, //noble
  { en: "Noble Revolve Ratchada 2", th: "โนเบิล รีวอลฟ์ รัชดา 2" }, //noble
  { en: "Noble Revolve Ratchada", th: "โนเบิล รีวอลฟ์ รัชดา" }, //noble
  { en: "Noble Solo", th: "โนเบิล โซโล่" }, //noble
  { en: "Noble State 39", th: "โนเบิล สเตท 39" }, //noble
  { en: "Noble Tara Pattanakarn", th: "โนเบิล ทารา พัฒนาการ" }, //noble
  { en: "Noble Wana Watcharapol", th: "โนเบิล วานา วัชรพล" }, //noble
  { en: "Notting Hill Jatujak Interchange พหลโยธิน 18 " },
  { en: "Notting Hill สุขุมวิท-แพรกษา" },
  { en: "Novo Ville Lumlukka Klong 3", th: "โนโววิลล์ ลำลูกกาคลอง 3" },
  { en: "Novo Ville Wongwaen-Lumlukka Klong 5", th: "โนโว วิลล์ วงแหวน-ลำลูกกา คลอง 5" },
  { en: "Nue Noble Centre Bang Na", th: "นิว โนเบิล เซ็นเตอร์ บางนา" }, //noble
  { en: "Nue Noble Ngamwongwan", th: "นิว โนเบิล งามวงศ์วาน" }, //noble
  { en: "Nue Noble Srinakarin-Lasalle", th: "นิว โนเบิล ศรีนครินทร์-ลาซาล" }, //noble
  { en: "Nye by Sansiri" },
  { en: "Oka Haus (Sansiri)" },
  { en: "PELA Condo" },
  { en: "Panasiri Residences Kaset-Nawamin" },
  { en: "Parc Exo Kaset-Navamintra", th: "พาร์ค เอ็กโซ เกษตร-นวมินทร์" },
  { en: "Park 24 (Sukhumvit 24)" },
  { en: "Park Origin Phayathai" },
  { en: "Park Origin Thonglor", th: "พาร์คออริจินทองหล่อ" },
  { en: "Park Ramindra", th: "พาร์ค รามอินทรา" },
  { en: "Parkland เพชรเกษม​ 56" },
  { en: "Parkview วิภาวดี 4", th: "พาร์ควิว วิภาวดี" },
  { en: "Patra villa 8 Chokchai 4-Ladprao 71" },
  { en: "Pause 115" },
  { en: "Pause Condo" },
  { en: "Phahon Yothin 24" },
  { en: "Plum Condo Central Station" },
  { en: "Plum Condo Ramkhamhaeng Station" },
  { en: "Plus City Park Ladphrao 71" },
  { en: "Politan Rive" },
  { en: "Pradya Hometown" },
  { en: "Premium Place Ekamai-Rarm Intra 2" },
  { en: "Premium Place Kaset-Nawamin 2" },
  { en: "Present condo" },
  { en: "Private Nirvana Ladprao Life Ladprao 71" },
  { en: "Q Chidlom-Phetchaburi", th: "คิว ชิดลม-เพชรบุรี" }, //ananda
  { en: "Q Prasarnmit", th: "คิว ประสานมิตร" }, //ananda
  { en: "Quattro by Sansiri" },
  { en: "Quinn Condo Ratchada" },
  { en: "Quintara Phume สุขุมวิท 39" },
  { en: "Quintara สุขุมวิท 39" },
  { en: "RHYTHM SATHORN" },
  { en: "Ratchada City 18" },
  { en: "Regent Home 20" },
  { en: "Regent Home 28 (บางซ่อน)" },
  { en: "Regent Home Sukhumvit 81" },
  { en: "Regent Orchid Condo Sukhumvit 101" },
  { en: "Regent Orchid ตลาดพลู" },
  { en: "Regent Orchid สุขุมวิท 101" },
  { en: "Regent home 22" },
  { en: "Regent home 97/1" },
  { en: "Regent orchid Condo Sukumvit 101" },
  { en: "Residence 52" },
  { en: "Rhythm 36-38" },
  { en: "Rhythm Asoke 2", th: "ริทึ่ม อโศก 2" }, //ap
  { en: "Rhythm Asoke", th: "ริทึ่ม อโศก" }, //ap
  { en: "Rhythm Ekkamai Estate", th: "ริธึ่ม เอกมัย เอสเตท" }, //ap
  { en: "Rhythm Ekkamai", th: "ริทึ่ม เอกมัย " }, //ap
  { en: "Rhythm Phahol-Ari", th: "ริทึ่ม พหล-อารีย์" }, //ap
  { en: "Rhythm Rangnam", th: "ริทึ่ม รางน้ำ" }, //ap
  { en: "Rhythm Ratchada", th: "ริธึม รัชดา" }, //ap
  { en: "Rhythm Ratchada-Huai Khwang", th: "ริธึม รัชดา-ห้วยขวาง" }, //ap
  { en: "Rhythm Sathorn", th: "ริทึ่ม สาทร" }, //ap
  { en: "Rhythm Sathorn-Narathiwas", th: "ริทึ่ม สาทร นราธิวาส" }, //ap
  { en: "Rhythm Sukhumvit 36-38", th: "ริทึ่ม สุขุมวิท 36-38" }, //ap
  { en: "Rhythm Sukhumvit 42", th: "ริทึ่ม สุขุมวิท 42" }, //ap
  { en: "Rhythm Sukhumvit 44/1", th: "ริธึ่ม สุขุมวิท 44/1" }, //ap
  { en: "Rhythm Sukhumvit 50", th: "ริทึ่ม สุขุมวิท 50" }, //ap
  { en: "Rise Rama 9 " },
  { en: "Runesu ทองหล่อ 5" },
  { en: "Rye Taldadphu" },
  { en: "S&S SUKHUMVIT CONDO" },
  { en: "S&S Sukhumvit Condo" },
  { en: "SENA Kith MRT-Bangkae" },
  { en: "Sathorn House" },
  { en: "Sense Of London" },
  { en: "Sky Walk Condominium" },
  { en: "Skyline รัตนาธิเบศร์" },
  { en: "Soul Ekamai Ladprao", th: "โซล เอกมัย-ลาดพร้าว" }, //ap
  { en: "Supalai Bella Chiangmai", th: "บ้านศุภาลัย เบลล่า เชียงใหม่" },
  { en: "Supalai Bella Ko Kaeo Phuket", th: "ศุภาลัย เบลล่า เกาะแก้ว ภูเก็ต" },
  { en: "Supalai Bella Rama 2-Phanthai Norasing", th: "ศุภาลัย เบลล่า พระราม 2-พันท้ายนรสิงห์" },
  { en: "Supalai Casa Riva", th: "ศุภาลัย คาซ่า ริวา" },
  { en: "Supalai City Homes Ratchada 10", th: "ศุภาลัย ซิตี้ โฮม รัชดาซอย 10" },
  { en: "Supalai City Resort Bearing Station Sukumvit 105", th: "ศุภาลัย ซิตี้ รีสอร์ท สถานีแบริ่ง สุขุมวิท 105" },
  { en: "Supalai City Resort Chaengwatthana", th: "ศุภาลัย ซิตี้ รีสอร์ท แจ้งวัฒนะ" },
  { en: "Supalai City Resort Charan 91", th: "ศุภาลัย ซิตี้ รีสอร์ท จรัญฯ 91" },
  { en: "Supalai City Resort Rama 8", th: "ศุภาลัย ซิตี้ รีสอร์ท พระราม 8" },
  { en: "Supalai City Resort Ratchada-Huaykwang", th: "ศุภาลัย ซิตี้ รีสอร์ท รัชดา-ห้วยขวาง" },
  { en: "Supalai City Resort Sukhumvit 107", th: "ศุภาลัย ซิตี้ รีสอร์ท สุขุมวิท 107" },
  { en: "Supalai Cute Ratchayothin-Phaholyothin 34", th: "ศุภาลัย คิวท์ รัชโยธิน-พหลโยธิน 34" },
  { en: "Supalai Elite Phayathai", th: "ศุภาลัย เอลีท พญาไท" },
  { en: "Supalai Elite Sathorn-Suanplu", th: "ศุภาลัย เอลีท สาทร-สวนพลู" },
  { en: "Supalai Elite Surawong", th: "ศุภาลัย เอลีท สุรวงศ์" },
  { en: "Supalai Essence Phuket", th: "ศุภาลัย เอสเซ้นส์ ภูเก็ต" },
  { en: "Supalai Garden Ville Ring Road Lumlukka Khong 5", th: "ศุภาลัย การ์เด้นวิลล์ วงแหวน-ลำลูกกา-คลอง 5" },
  { en: "Supalai Garden Ville Suvarnabhumi", th: "ศุภาลัย การ์เด้นวิลล์ สุวรรณภูมิ" },
  { en: "Supalai Garden Ville Wongwaen Pinklao-Rama 5", th: "ศุภาลัย การ์เด้นวิลล์ วงแหวน ปิ่นเกล้า-พระราม 5" },
  { en: "Supalai Garden Ville Wongwaen-Sankampang", th: "ศุภาลัย การ์เด้นวิลล์ วงแหวน-สันกำแพง" },
  { en: "Supalai Hills", th: "ศุภาลัย ฮิลส์" },
  { en: "Supalai Lagoon Phuket", th: "ศุภาลัย ลากูน ภูเก็ต" },
  { en: "Supalai Lite Sathorn-Charoenrat", th: "ศุภาลัย ไลท์ สาทร-เจริญราษฎร์" },
  { en: "Supalai Lite Thaphra-Wongwian Yai", th: "ศุภาลัย ไลท์ ท่าพระ-วงเวียนใหญ่" },
  { en: "Supalai Loft Chaengwattana" },
  { en: "Supalai Loft Prajadhipok-Wongwian Yai", th: "ศุภาลัย ลอฟท์ ประชาธิปก-วงเวียนใหญ่" },
  { en: "Supalai Loft Yaek Fai Chai station", th: "ศุภาลัย ลอฟท์ สถานีแยกไฟฉาย" },
  { en: "Supalai Loft@Talat Phlu Station", th: "ศุภาลัย ลอฟท์ แอท สถานีตลาดพลู" },
  { en: "Supalai Mare Pattaya", th: "ศุภาลัย มาเรย์ พัทยา" },
  { en: "Supalai Monte 2", th: "ศุภาลัย มอนเต้ 2" },
  { en: "Supalai Monte at Viang", th: "ศุภาลัย มอนเต้ แอท เวียง" },
  { en: "Supalai Oriental Place Sathorn-Suanplu", th: "ศุภาลัย โอเรียนทัล เพลส สาทร-สวนพลู" },
  { en: "Supalai Oriental Sukhumvit 39", th: "ศุภาลัย โอเรียนทัล สุขุมวิท 39" },
  { en: "Supalai Palm Spring Banpon Phuket", th: "ศุภาลัย ปาล์มสปริงส์ บ้านพอน ภูเก็ต" },
  { en: "Supalai Park Asoke-Ratchada", th: "ศุภาลัย ปาร์ค อโศก-รัชดา" },
  { en: "Supalai Park Ekkamai-Thonglor", th: "ศุภาลัยปาร์ค เอกมัย-ทองหล่อ" },
  { en: "Supalai Park Kaset", th: "ศุภาลัย ปาร์ค แยกเกษตร" },
  { en: "Supalai Park Khaerai-Ngamwongwan", th: "ศุภาลัย ปาร์ค แคราย-งามวงศ์วาน" },
  { en: "Supalai Park Phaholyothin", th: "ศุภาลัย ปาร์ค พหลโยธิน" },
  { en: "Supalai Park Ratchaphruek-Phetkasem", th: "ศุภาลัย ปาร์ค ราชพฤกษ์-เพชรเกษม" },
  { en: "Supalai Park Srinakarin", th: "ศุภาลัย ปาร์ค ศรีนครินทร์" },
  { en: "Supalai Park Tiwanon", th: "ศุภาลัย ปาร์ค แยกติวานนท์" },
  { en: "Supalai Park Ville Ramintra 23" },
  { en: "Supalai Park Ville Romklao-Suvarnabhumi", th: "ศุภาลัย พาร์ควิลล์ ร่มเกล้า-สุวรรณภูมิ" },
  { en: "Supalai Park Ville Wongwaen-Ratchaphruek", th: "ศุภาลัย พาร์ควิลล์ วงแหวน-ราชพฤกษ์" },
  { en: "Supalai Park Yaek fai chai Station", th: "ศุภาลัย ปาร์ค สถานีแยกไฟฉาย" },
  { en: "Supalai Park at Downtown Phuket", th: "ศุภาลัย ปาร์ค แอท ดาวน์ทาวน์ ภูเก็ต" },
  { en: "Supalai Place Sukhumvit 39", th: "ศุภาลัย เพลส สุขุมวิท 39" },
  { en: "Supalai Premier Asoke", th: "ศุภาลัย พรีเมียร์ อโศก" },
  { en: "Supalai Premier Charoen Nakorn", th: "ศุภาลัย พรีเมียร์ เจริญนคร" },
  { en: "Supalai Premier Place Asoke", th: "ศุภาลัย พรีเมียร์ เพลส อโศก" },
  { en: "Supalai Premier Ratchada-Narathiwas-Sathorn", th: "ศุภาลัย พรีเมียร์ รัชดาฯ-นราธิวาส-สาทร" },
  { en: "Supalai Premier Ratchathewi", th: "ศุภาลัย พรีเมียร์ ราชเทวี" },
  { en: "Supalai Premier Samsen-Ratchawat", th: "ศุภาลัย พรีเมียร์ สามเสน-ราชวัตร" },
  { en: "Supalai Premier Si Phraya-Samyan", th: "ศุภาลัย พรีเมียร์ สี่พระยา-สามย่าน" },
  { en: "Supalai Pride Bangna-Outer Ring", th: "ศุภาลัย ไพร์ด บางนา-วงแหวน" },
  { en: "Supalai Prima Riva", th: "ศุภาลัย พรีมา ริวา" },
  { en: "Supalai Prima Villa Phaholyothin 50", th: "ศุภาลัย พรีมา วิลล่า พหลโยธิน 50" },
  { en: "Supalai Prima Villa Phetkasem-Phutthamonthon Sai 1", th: "ศุภาลัย พรีม่า วิลล่า เพชรเกษม-พุทธมณฑล สาย 1" },
  { en: "Supalai Prime Rama 9", th: "ศุภาลัย ไพร์ม พระราม 9" },
  { en: "Supalai Riva Grande", th: "ศุภาลัย ริวา แกรนด์" },
  { en: "Supalai River Place", th: "ศุภาลัย ริเวอร์เพลส" },
  { en: "Supalai River Resort", th: "ศุภาลัย ริเวอร์ รีสอร์ท" },
  { en: "Supalai Suan Luang", th: "ศุภาลัย สวนหลวง" },
  { en: "Supalai Veranda Phasi Charoen Station", th: "ศุภาลัย เวอเรนด้า สถานีภาษีเจริญ" },
  { en: "Supalai Veranda Rama 9", th: "ศุภาลัย เวอเรนด้า พระราม 9" },
  { en: "Supalai Veranda Ramkhamhaeng", th: "ศุภาลัย เวอเรนด้า รามคําแหง" },
  { en: "Supalai Veranda Rattanathibet", th: "ศุภาลัย เวอเรนด้า รัตนาธิเบศร์" },
  { en: "Supalai Veranda Sukhumvit 117", th: "ศุภาลัย เวอเรนด้า สุขุมวิท 117" },
  { en: "Supalai Ville Bangkok-Pathumthani", th: "ศุภาลัย วิลล์ กรุงเทพฯ-ปทุมธานี " },
  { en: "Supalai Ville Chiang Mai", th: "ศุภาลัย วิลล์ เชียงใหม่" },
  { en: "Supalai Ville Chonburi", th: "ศุภาลัย วิลล์ ชลบุรี" },
  { en: "Supalai Ville Chotana-Ruamchok", th: "ศุภาลัย วิลล์ โชตนา-รวมโชค" },
  { en: "Supalai Ville Onnut-Suanluang" },
  { en: "Supalai Ville Ratchada 32", th: "ศุภาลัย วิลล์ รัชดา 32" },
  { en: "Supalai Ville Ratchapruek-Petkasem 48", th: "ศุภาลัย วิลล์ ราชพฤกษ์-เพชรเกษม 48" },
  { en: "Supalai Ville Srinakarin-Kingkaew" },
  { en: "Supalai Ville Wongwaen-Lumlukka Klong 3", th: "ศุภาลัย วิลล์ วงแหวน-ลำลูกกา คลอง 3" },
  { en: "Supalai Vista Pakkret Intersection", th: "ศุภาลัย วิสต้า ห้าแยกปากเกร็ด" },
  { en: "Supalai Vista Sri Racha-Laemchabang Port", th: "ศุภาลัย วิสต้า ศรีราชา-แยกท่าเรือแหลมฉบัง" },
  { en: "Supalai Vista Tiwanon", th: "ศุภาลัย วิสต้า แยกติวานนท์" },
  { en: "Supalai Wellington 2", th: "ศุภาลัย เวลลิงตัน 2" },
  { en: "Supalai Wellington", th: "ศุภาลัย เวลลิงตัน" },
  { en: "TC Green Rama 9" },
  { en: "THE BASE Phetkasem" },
  { en: "THE BASE สะพานใหม่" },
  { en: "THE ISSARA LADPRAO" },
  { en: "THE LINE Asoke-Ratchada" },
  { en: "THE LINE Jatujak-Mochit" },
  { en: "THE NEST Chula-Samyan" },
  { en: "THE PARKLAND รัชดา-ท่าพระ" },
  { en: "The Address Asoke", th: "ดิ แอดเดรส อโศก" }, //ap
  { en: "The Address Chidlom", th: "ดิ แอดเดรส ชิดลม" }, //ap
  { en: "The Address Pathumwan", th: "ดิ แอดเดรส ปทุมวัน" }, //ap
  { en: "The Address Phayathai", th: "ดิ แอดเดรส พญาไท" }, //ap
  { en: "The Address Sathorn", th: "ดิ แอดเดรส สาทร" }, //ap
  { en: "The Address Siam", th: "ดิ แอดเดรส สยาม" }, //ap
  { en: "The Address Siam-Ratchathewi", th: "ดิ แอดเดรส สยาม-ราชเทวี" }, //ap
  { en: "The Address Sukhumvit 28", th: "ดิ แอดเดรส สุขุมวิท 28" }, //ap
  { en: "The Address Sukhumvit 42", th: "ดิ แอดเดรส สุขุมวิท 42" }, //ap
  { en: "The Address Sukhumvit 61", th: "ดิ แอดเดรส สุขุมวิท 61" }, //ap
  { en: "The Base Park East Sukhumvit 77" },
  { en: "The Base Park West Sukhumvit 77" },
  { en: "The Base Park West" },
  { en: "The Base Sukhumvit 50" },
  { en: "The Base เพชรบุรี-ทองหล่อ" },
  { en: "The Clover ทองหล่อ ซอย18" },
  { en: "The Coast Bangkok" },
  { en: "The Cube Plus Chaengwattana" },
  { en: "The Diplomat Sathorn " },
  { en: "The Emerald Residence รัชดา" },
  { en: "The Excel Groove LaSalle" },
  { en: "The Excel Hideaway สุขุมวิท 71" },
  { en: "The Gallery Bearing" },
  { en: "The IRIS Rama 9-Srinakarin" },
  { en: "The Key Sathorn-Ratchapruek" },
  { en: "The Key สาธร-เจริญราษฎ์" },
  { en: "The Landmark Ekamai-Ramindra" },
  { en: "The Line Sukhumvit 101" },
  { en: "The Link สุขุมวิท 64" },
  { en: "The Loft by I-ZEN Nakniwat 48" },
  { en: "The Lumpini 24" },
  { en: "The Lumpini 24", th: "เดอะ ลุมพินี 24" }, //lpn
  { en: "The Muve Kaset by Sansiri" },
  { en: "The Muve รามคำแหง22" },
  { en: "The Nest Chula Samyan" },
  { en: "The Niche ID Phetkasem-Bangkae" },
  { en: "The Niche ID ลาดพร้าววังหิน" },
  { en: "The Niche Pride Thonglor-Phetchaburi" },
  { en: "The Origin Onnut" },
  { en: "The Origin ราม 209 Interchange" },
  { en: "The Origin สุขุมวิท 105" },
  { en: "The Pano" },
  { en: "The Parkland Grand" },
  { en: "The Parkland Phetkasem ", th: "พาร์คแลนด์ เพชรเกษม" },
  { en: "The Parkland Phetkasem 56", th: "พาร์คแลนด์ เพชรเกษม 56" },
  { en: "The Plant Citi Ladphrao 71" },
  { en: "The President Sukhumvit 81" },
  { en: "The President สาทร-ราชพฤกษ์ เฟส 3" },
  { en: "The President สาธร-ราชพฤกษ์ เฟส 2" },
  { en: "The Privacy Condo (รัชดา-สุทธิสาร)" },
  { en: "The Privacy Rama 9" },
  { en: "The Reserve Phahol-Pradipat" },
  { en: "The Revo Ladprao 48" },
  { en: "The Room Sukhumvit 40" },
  { en: "The Seed Mingle Sathorn" },
  { en: "The Seed Mingle-Suanplu (Sathorn)" },
  { en: "The Selected Kaset-Ngam Wongwan", th: "เดอะ ซีเล็คเต็ด เกษตร-งามวงศ์วาน" }, //lpn
  { en: "The Sense Sukhumvit", th: "เดอะ เซนส์ สุขุมวิท" },
  { en: "The Sky Sukhumvit" },
  { en: "The Stage Taopoon Interchange" },
  { en: "The Tempo Grand Sathorn-Wutthakat" },
  { en: "The Tierra Ladprao 71" },
  { en: "The Tree Interchange" },
  { en: "The Trust Erawan" },
  { en: "The Waterford Park Sukhumvit 53" },
  { en: "The Waterford Rama 4" },
  { en: "Thonglor Tower" },
  { en: "U Delight 3 ประชาชื่น 26" },
  { en: "U Delight @ Jatujak Station" },
  { en: "U Delight @ Onnut Station" },
  { en: "U Delight @ Talat Phlu Station" },
  { en: "U Delight @ Talat Phlu" },
  { en: "Unio Charan 3", th: "ยูนิโอ จรัญฯ 3" }, //ananda
  { en: "Unio H Tiwanon", th: "ยูนิโอ เอช ติวานนท์" }, //ananda
  { en: "Unio Ramkhamhaeng-Serithai", th: "ยูนิโอ รามคำแหง-เสรีไทย" }, //ananda
  { en: "Unio Sukhumvit 72", th: "ยูนิโอ สุขุมวิท 72" }, //ananda
  { en: "Unio Town Prachauthit 76", th: "ยูนิโอ ทาวน์ ประชาอุทิศ 76" }, //ananda
  { en: "Unio Town Srinakarin-Bangna", th: "ยูนิโอ ทาวน์ ศรีนครินทร์-บางนา" }, //ananda
  { en: "Unio Town Suanluang-Phatthanakan", th: "ยูนิโอ ทาวน์ สวนหลวง-พัฒนาการ" }, //ananda
  { en: "Unio Town Suksawat 30", th: "ยูนิโอ ทาวน์ สุขสวัสดิ์ 30" }, //ananda
  { en: "Urbana Sathon" },
  { en: "Urbanio Vibha-Chaengwattana", th: "เออร์บานิโอ วิภาวดี-แจ้งวัฒนะ" }, //ananda
  { en: "VILLA RACHATEWI BTS  Phayathai" },
  { en: "Venio Sukhumvit 10", th: "เวนิโอ สุขุมวิท 10" }, //ananda
  { en: "Via Botani (Sukhumvit 47)" },
  { en: "Villa Asoke" },
  { en: "Villa Bajaj" },
  { en: "Vino รัชดา 32" },
  { en: "Vittorio 39", th: "วิตโตริโอ 39" }, //ap
  { en: "Walden Asoke" },
  { en: "Whizdom @ Punnawithi Station" },
  { en: "Whizdom Punnawithi Station" },
  { en: "Whizdom Station Ratchada-Thapra " },
  { en: "Whizdom Station Ratchada-Thapra" },
  { en: "Wittayu Complex" },
  { en: "XT Huaikwang" },
  { en: "XT ห้วยขวาง" },
  { en: "แมคนิค รามอินทรา 21" },
  { en: "Wish @ Siam" },
  { en: "Altitude Unicorn สาทร ท่าพระ" },
  { en: "Chambers Onnut Station" },
  { en: "Metro Luxe Ratchada", th: "เมโทรลักษณ์ รัชดา" },
  // { en: "คอนโด วัน สุขุมวิท 52" },
  // { en: "คอนโดลุมพินี เมกะซิตี้ บางนา" },
  // { en: "ชาโตว์ อินทาวน์ สุขุมวิท 62/1" },
  // { en: "ชาโต้ อินทาวน์ จรัญ 96/2" },
  // { en: "ซิตี้ รีสอร์ต รัชดา-ห้วยขวาง" },
  // { en: "ซิตี้โฮม รัชดา-ปิ่นเกล้า 1" },
  // { en: "ดิ เอ็กซ์เซล กรูฟ ลาซาล 52" },
  // { en: "ดิไอริส บางใหญ่" },
  // { en: "นิว โนเบิล ศรีนครินทร์ ลาซาล" },
  // { en: "บดินทร์ สวีท โฮม" },
  // { en: "บียู โชคชัย4" },
  // { en: "พญาไทเพลส" },
  // { en: "พลัม คอนโด ปิ่นเกล้า สเตชั่น" },
  // { en: "พลัมพหล89" },
  // { en: "ฟิวส์ เซนเซ่ บางแค" },
  // { en: "ฟูลเลอตัน สุขุมวิท" },
  // { en: "ฟูลเลอตัน สุขุมวิท" },
  // { en: "ยู ดีไลท์ เรสซิเดนซ์ ริเวอร์ฟรอนท์ พระราม3" },
  // { en: "ยูดีไลท์ รัชวิภา" },
  // { en: "รัชดาภิเษก 19" },
  // { en: "ริชพาร์ค@เจ้าพระยา" },
  // { en: "รีช พหลโยธิน 52" },
  // { en: "รีเจ้นท์ บางซ่อน" },
  // { en: "รีเจ้นท์ ศรีนครินทร์" },
  // { en: "รีเจ้นท์ โฮม 25 ติวานนท์ " },
  // { en: "ลิสส์ รัชโยธินคอนโดมิเนียม" },
  // { en: "ลุมพินีเมกะซิตี้บางนา" },
  // { en: "วอเตอร์มาร์ค เจ้าพระยา ริเวอร์" },
  // { en: "วิทยุคอมเพล็กซ์" },
  // { en: "ศรีสวัสดิ์คอนโดมิเนียม" },
  // { en: "ศุภาลัย City Home" },
  // { en: "ศุภาลัย ซิตี้ รีสอร์ท จรัญ 91" },
  // { en: "ศุภาลัย ซิตี้ รีสอร์ท สุขุมวิท105" },
  // { en: "ศุภาลัยเวอเรนด้า สุขุมวิท 117" },
  // { en: "สมาร์ท คอนโด พระราม 2" },
  // { en: "อารีย์ เพลส พหลโยธิน" },
  // { en: "อิลีเม้นท์ ศรีนครินทร์" },
  // { en: "ฮาสุ เฮาส์ สุขุมวิท 77" },
  // { en: "เคนซิงตัน สุขุมวิท-เทพารักษ์" },
  // { en: "เฉลิมนิจ อาจ เดอ เมซอง" },
  // { en: "เซนทริคซีน รัชวิภา" },
  // { en: "เดอะ คิทท์ พลัส สุขุมวิท 113" },
  // { en: "เดอะ คีย์ พหลโยธิน 34" },
  // { en: "เดอะ ทรี ริโอ้ บางอ้อ สเตชั่น" },
  // { en: "เดอะ เพรสซิเดนท์ สาทร-ราชพฤกษ์ 3" },
  // { en: "เดอะ ​ทรี​ ริโอ้​ แ​อท​ บางอ้อ​ สเตชั่น" },
  // { en: "เดอะคอนเนคพัฒนาการ 44" },
  // { en: "เดอะคีย์ พหลโยธิน 34" },
  // { en: "เมโทร ปาร์ค สาทร" },
  // { en: "เมโทร พาร์ค สาทร-กัลปพฤกษ์" },
  // { en: "เมโทร สกาย บางซื่อ-ประชาชื่น" },
  // { en: "แชปเตอร์วันชายน์บางโพ" },
  // { en: "แมคนิค รามอินทรา 21" },
  // { en: "แอทโมซ แจ้งวัฒนะ" },
  // { en: "ไนท์บริดจ์ คอลลาจ สุขุมวิท 107" },

  // { en: "ไอคอนโด เพชรเกษม39" },
]

export default CondoList
