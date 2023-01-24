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
  { en: "39 by Sansiri", th: "39 บาย แสนสิริ" }, //Sansiri
  { en: "98 Wireless", th: "ไนน์ตี้เอท ไวร์เลส" }, //Sansiri
  { en: "Anasiri Krungthep-Pathumthani", th: "อณาสิริ กรุงเทพ-ปทุมธานี" }, //Sansiri
  { en: "Anasiri Paklok", th: "อณาสิริ ป่าคลอก" }, //Sansiri
  { en: "Autumn Condominium", th: "ออทัมน์ คอนโดมิเนียม" }, //Sansiri
  { en: "B Square Rama 9", th: "บี สแควร์ พระราม 9" }, //Sansiri
  { en: "Blocs 77", th: "บลอคส์ 77" }, //Sansiri
  { en: "BuGaan Yothinpattana", th: "บูก้าน โยธินพัฒนา" }, //Sansiri
  { en: "Burasiri Bangna", th: "บุราสิริ บางนา" }, //Sansiri
  { en: "Burasiri Kohkaew", th: "บุราสิริ เกาะแก้ว" }, //Sansiri
  { en: "Burasiri Krungthep Kreetha", th: "บุราสิริ กรุงเทพ กรีฑา" }, //Sansiri
  { en: "Burasiri Onnut-Bangna", th: "บุราสิริ อ่อนนุช-บางนา" }, //Sansiri
  { en: "Burasiri Pattanakarn", th: "บุราสิริ พัฒนาการ" }, //Sansiri
  { en: "Burasiri Ratchaphruek-345", th: "บุราสิริ ราชพฤกษ์-345" }, //Sansiri
  { en: "Burasiri San Phi Suea", th: "บุราสิริ สันผีเสื้อ" }, //Sansiri
  { en: "Burasiri Wongwaen-Onnut", th: "บุราสิริ วงแหวน-อ่อนนุช" }, //Sansiri
  { en: "Ceil By Sansiri", th: "ซีล บาย แสนสิริ" }, //Sansiri
  { en: "Chelona Khao Tao", th: "เชโลน่า เขาเต่า" }, //Sansiri
  { en: "Condo Me Bangna-Bang Bo", th: "คอนโด มี บางนา-บางบ่อ" }, //Sansiri
  { en: "Condo Me Onnut-Rama 9", th: " คอนโด มี อ่อนนุช-พระราม 9" }, //Sansiri
  { en: "Condo One Thonglor", th: "คอนโด วัน ทองหล่อ" }, //Sansiri
  { en: "D BURA Pran Nok", th: "ดีบุรา พรานนก" }, //Sansiri
  { en: "D Condo Campus Resort KuKu", th: "ดีคอนโด แคมปัส รีสอร์ท กู้กู" }, //Sansiri
  { en: "D Condo Creek", th: "ดี คอนโด ครีก" }, //Sansiri
  { en: "D Condo Kathu", th: "ดีคอนโด กะทู้" }, //Sansiri
  { en: "D Condo Kathu-Patong", th: "ดีคอนโด กะทู้-ป่าตอง" }, //Sansiri
  { en: "D Condo Mine", th: "ดี คอนโด ไมน์" }, //Sansiri
  { en: "D Condo Nakorn Rayong", th: "ดีคอนโด นครระยอง" }, //Sansiri
  { en: "D Condo Nim", th: "ดีคอนโด นิม" }, //Sansiri
  { en: "D Condo Onnut-Suvarnabhumi", th: "ดี คอนโด อ่อนนุช-สุวรรณภูมิ" }, //Sansiri
  { en: "D Condo Ping", th: "ดีคอนโดพิงค์" }, //Sansiri
  { en: "D Condo Ramindra", th: "ดีคอนโด รามอินทรา" }, //Sansiri
  { en: "D Condo Ramkhamhaeng 64", th: "ดีคอนโด รามคำแหง 64" }, //Sansiri
  { en: "D Condo Rattanathibet" }, //Sansiri
  { en: "D Condo Sathu Pradit 49", th: "ดีคอนโด สาธุประดิษฐ์ 49" }, //Sansiri
  { en: "D Condo Sign", th: "ดี คอนโด ซายน์" }, //Sansiri
  { en: "D Condo Sukhumvit 109", th: "ดีคอนโด สุขุมวิท 109" }, //Sansiri
  { en: "D Condo Tann-Charan", th: "ดี คอนโด ธาร-จรัญฯ" }, //Sansiri
  { en: "D Vieng Santitham", th: "ดีเวียง สันติธรรม" }, //Sansiri
  { en: "DEMI Sathu 49", th: "เดมี สาธุ 49" }, //Sansiri
  { en: "Dcondo Campus Resort Bangna", th: "ดีคอนโด แคมปัส รีสอร์ท บางนา" }, //Sansiri
  { en: "Dcondo Campus Resort Bangsaen", th: "ดีคอนโด แคมปัส รีสอร์ท บางแสน" }, //Sansiri
  { en: "Dcondo Campus Resort Chiang-Mai", th: "ดีคอนโด แคมปัส รีสอร์ท เชียงใหม่" }, //Sansiri
  { en: "Dcondo Campus Resort Rangsit (Phase 2)", th: "ดีคอนโด แคมปัส รีสอร์ท รังสิตเฟส 2" }, //Sansiri
  { en: "Dcondo Campus Resort Rangsit", th: "ดี คอนโด แคมปัส รีสอร์ท รังสิต" }, //Sansiri
  { en: "Dcondo Noenpra Rayong", th: "ดีคอนโด เนินพระ ระยอง" }, //Sansiri
  { en: "Dcondo Ramkhamhaeng 40", th: "ดีคอนโด รามคำแหง 40" }, //Sansiri
  { en: "Dcondo Ramkhamhaeng", th: "ดีคอนโด รามคำแหง" }, //Sansiri
  { en: "Dcondo Rin", th: "ดีคอนโด ริน" }, //Sansiri
  { en: "Dcondo Tann-Charan", th: "ดีคอนโด ธาร จรัญฯ" }, //Sansiri
  { en: "EDGE Central Pattaya", th: "เอดจ์ เซนทรัล พัทยา" }, //Sansiri
  { en: "Edge Sukhumvit 23", th: "เอดจ์ สุขุมวิท 23" }, //Sansiri
  { en: "Garden Square Sukhumvit 77", th: "การ์เด้น สแควร์ สุขุมวิท 77" }, //Sansiri
  { en: "Greenside by Sansiri", th: "กรีนไซด์ บาย แสนสิริ" }, //Sansiri
  { en: "HQ By Sansiri", th: "เฮชคิว บาย แสนสิริ" }, //Sansiri
  { en: "Habitia Kohkaew Phuket", th: "ฮาบิเทีย เกาะ แก้ว" }, //Sansiri
  { en: "Habitia Motif Panyaindra", th: "ฮาบิเทีย โมทีฟ ปัญญา-อินทรา" }, //Sansiri
  { en: "Habitia Park Thainthale 28", th: "ฮาบิเทีย พาร์ค เทียนทะเล 28" }, //Sansiri
  { en: "Hasu Haus", th: "ฮาสุ เฮ้าส์" }, //Sansiri
  { en: "Hay Hua Hin", th: "เฮย์ หัว หิน" }, //Sansiri
  { en: "Hive Sathorn", th: "ไฮฟ์ สาทร" }, //Sansiri
  { en: "Hive Sukhumvit 65", th: "ไฮฟ์ สุขุมวิท 65" }, //Sansiri
  { en: "Hive Taksin", th: "ไฮฟ์ ตากสิน" }, //Sansiri
  { en: "Kanasiri Chaiyapruek-Wongwaen", th: "คณาสิริ ชัยพฤกษ์-วงแหวน" }, //Sansiri
  { en: "Kanasiri Salaya", th: "คณาสิริ ศาลายา" }, //Sansiri
  { en: "Kawa Haus", th: "คาวะ เฮาส์" }, //Sansiri
  { en: "Keyne by Sansiri", th: "คีนน์ บาย แสนสิริ" }, //Sansiri
  { en: "Khun By Yoo", th: "คุณ บาย ยู" }, //Sansiri
  { en: "La Casita", th: "ลา คาสิตา" }, //Sansiri
  { en: "La Habana", th: "ลา ฮาบานา" }, //Sansiri
  { en: "Las Tortugas Condo", th: "ลาส ตอร์ตูกัส" }, //Sansiri
  { en: "Mori Haus", th: "โมริ เฮาส์" }, //Sansiri
  { en: "My Condo Pinklao", th: "มายคอนโด ปิ่นเกล้า" }, //Sansiri
  { en: "Narasiri Bangna", th: "นาราสิริ บางนา" }, //Sansiri
  { en: "Narasiri Hideaway", th: "นาราสิริ ไฮด์อเวย์" }, //Sansiri
  { en: "Narasiri Pattanakarn-Srinakarin", th: "นาราสิริ พัฒนาการ-ศรีนครินทร์" }, //Sansiri
  { en: "Narasiri Pinklao-Sai 1", th: "นาราสิริ ปิ่นเกล้า-สาย 1" }, //Sansiri
  { en: "Nye by Sansiri", th: "นายน์ บาย แสนสิริ" }, //Sansiri
  { en: "Oka Haus", th: "โอกะ เฮาส์" }, //Sansiri
  { en: "Onyx Phaholyothin", th: "ออนิกซ์ พหลโยธิน" }, //Sansiri
  { en: "Plus 67", th: "พลัส 67" }, //Sansiri
  { en: "Pong Yang Vingt", th: "โป่งแยง ฟแวงก์" }, //Sansiri
  { en: "Preen By Sansiri", th: "พรีน บาย แสนสิริ" }, //Sansiri
  { en: "Prive by Sansiri", th: "พรีเว่ บาย แสนสิริ" }, //Sansiri
  { en: "Prompat Prime", th: "พร้อมพัฒน์ ไพร์ม" }, //Sansiri
  { en: "Quattro By Sansiri", th: "ควอทโทร บาย แสนสิริ" }, //Sansiri
  { en: "Rain Cha Am-Hua Hin", th: "เรน ชะอำ" }, //Sansiri
  { en: "Residence Sukhumvit 65", th: "เรสซิเดนท์ สุขุมวิท 65" }, //Sansiri
  { en: "Saransiri Kohkaew", th: "สราญสิริ เกาะแก้ว" }, //Sansiri
  { en: "Saransiri Srivaree", th: "สราญสิริ ศรีวารี" }, //Sansiri
  { en: "Saransiri Thakam-Rama 2", th: "สราญสิริ ท่าข้าม-พระราม 2" }, //Sansiri
  { en: "Sari by Sansiri", th: "ซาริ บาย แสนสิริ" }, //Sansiri
  { en: "Siri At Sukhumvit", th: "สิริ แอท สุขุมวิท" }, //Sansiri
  { en: "Siri On 8", th: "สิริ ออน 8" }, //Sansiri
  { en: "Siri Place Bangna-Theparak", th: "สิริ เพลส บางนา-เทพารักษ์" }, //Sansiri
  { en: "Siri Residence", th: "สิริ เรสซิเด้นซ์" }, //Sansiri
  { en: "Sukhumvit Plus", th: "สุขุมวิท พลัส" }, //Sansiri
  { en: "Summer Hua Hin", th: "ซัมเมอร์ หัวหิน" }, //Sansiri
  { en: "THE BASE Central Phuket", th: "เดอะ เบส เซ็นทรัล ภูเก็ต" }, //Sansiri
  { en: "THE BASE Phetkasem", th: "เดอะ เบส เพชรเกษม" }, //Sansiri
  { en: "Taka Haus", th: "ทากะ เฮาส์" }, //Sansiri
  { en: "The BASE Garden Rama 9", th: "เดอะ เบส การ์เด้น พระราม 9" }, //Sansiri
  { en: "The Base Central Pattaya", th: "เดอะ เบส เซ็นทรัล พัทยา" }, //Sansiri
  { en: "The Base Chaengwattana", th: " เดอะ เบส แจ้งวัฒนะ " }, //Sansiri
  { en: "The Base Downtown", th: "เดอะ เบส ดาวน์ทาวน์" }, //Sansiri
  { en: "The Base Height", th: "เดอะ เบส ไฮท์" }, //Sansiri
  { en: "The Base Park East Sukhumvit 77", th: "เดอะ เบส พาร์ค อีส สุขุมวิท 77" }, //Sansiri
  { en: "The Base Park West Sukhumvit 77", th: "เดอะ เบส พาร์ค เวสต์ สุขุมวิท 77" }, //Sansiri
  { en: "The Base Phetchaburi-Thonglor", th: "เดอะ เบส เพชรบุรี-ทองหล่อ" }, //Sansiri
  { en: "The Base Rama 9-Ramkhamhaeng", th: "เดอะเบส พระราม 9-รามคำแหง" }, //Sansiri
  { en: "The Base Saphanmai", th: "เดอะ เบส สะพานใหม่" }, //Sansiri
  { en: "The Base Sukhumvit 50", th: "เดอะ เบส สุขุมวิท 50" }, //Sansiri
  { en: "The Base Sukhumvit 77", th: "เดอะ เบส สุขุมวิท 77" }, //Sansiri
  { en: "The Base Uptown", th: "เดอะ เบส อัพทาวน์" }, //Sansiri
  { en: "The Deck Patong", th: "เดอะ เดค ป่าตอง" }, //Sansiri
  { en: "The Gallery by Sansiri" }, //Sansiri
  { en: "The Line Asoke-Ratchada", th: "เดอะ ไลน์ อโศก-รัชดา" }, //Sansiri
  { en: "The Line Jatujak-Mochit", th: "เดอะ ไลน์ จตุจักร-หมอชิต" }, //Sansiri
  { en: "The Line Phahol-Pradipat", th: "เดอะ ไลน์ พหลฯ-ประดิพัทธ์" }, //Sansiri
  { en: "The Line Phahonyothin Park", th: "เดอะ ไลน์ พหลโยธิน พาร์ค" }, //Sansiri
  { en: "The Line Ratchathewi", th: "เดอะ ไลน์ ราชเทวี" }, //Sansiri
  { en: "The Line Sathorn", th: "เดอะ ไลน์ สาทร" }, //Sansiri
  { en: "The Line Sukhumvit 101", th: "เดอะ ไลน์ สุขุมวิท 101" }, //Sansiri
  { en: "The Line Sukhumvit 71", th: "เดอะ ไลน์ สุขุมวิท 71" }, //Sansiri
  { en: "The Line Wongsawang", th: "เดอะ ไลน์ วงศ์สว่าง" }, //Sansiri
  { en: "The Monument Sanampao", th: "เดอะ โมนูเมนต์ สนามเป้า" }, //Sansiri
  { en: "The Monument Thonglo", th: "เดอะ โมนูเมนต์ ทองหล่อ" }, //Sansiri
  { en: "The Muve Kaset", th: "เดอะ มูฟ เกษตร" }, //Sansiri
  { en: "The Muve Ram 22", th: "เดอะ มูฟ รามคำแหง 22" }, //Sansiri
  { en: "The Vertical Aree", th: "เดอะ เวอร์ติเคิล อารีย์" }, //Sansiri
  { en: "The XXXIX By Sansiri", th: "เดอะ เทอร์ทีไนน์ บาย แสนสิริ" }, //Sansiri
  { en: "Town Avenue Srinagarindra", th: "ทาวน์อเวนิว ศรีนครินทร์" }, //Sansiri
  { en: "Town Avenue Time Thakham 16", th: "ทาวน์ อเวนิว ไทม์ ท่าข้าม" }, //Sansiri
  { en: "Town Plus Huamark", th: "ทาวน์ พลัส หัวหมาก" }, //Sansiri
  { en: "Townplus Prachauthit", th: "ทาว์นพลัส ประชาอุทิศ" }, //Sansiri
  { en: "Urban Sathorn", th: "เออร์เบิ้น สาทร" }, //Sansiri
  { en: "Via 31", th: "เวีย 31" }, //Sansiri
  { en: "Via 49", th: "เวีย 49" }, //Sansiri
  { en: "Via Botani", th: "เวีย โบทานี" }, //Sansiri
  { en: "Wyne Sukhumvit", th: "วายน์ สุขุมวิท" }, //Sansiri
  { en: "XT Ekkamai", th: "เอ็กซ์ที เอกมัย" }, //Sansiri
  { en: "XT Huaikhwang", th: "เอกซ์ที ห้วยขวาง" }, //Sansiri
  { en: "XT Phayathai", th: "เอ็กซ์ที พญาไท" }, //Sansiri

  { en: "A Space Asoke-Ratchada", th: "เอ สเปซ อโศก-รัชดา" }, //Areeya
  { en: "A Space Hideaway Asoke-Ratchada", th: "เอ สเปซ ไฮด์อเวย์ อโศก-รัชดา" }, //Areeya
  { en: "A Space I.D. Asoke-Ratchada", th: "เอ สเปซ ไอดี อโศก-รัชดา" }, //Areeya
  { en: "A Space ME Bangna", th: "เอ สเปซ มี บางนา" }, //Areeya
  { en: "A Space Me Sukhumvit 77", th: "เอ สเปซ มี สุขุมวิท 77" }, //Areeya
  { en: "A Space Mega Bangna", th: " เอ สเปซ เมกา บางนา" }, //Areeya
  { en: "A Space Play", th: "เอ สเปซ เพลย์" }, //Areeya
  { en: "A Space Sukhumvit 77", th: "เอ สเปซ สุขุมวิท 77" }, //Areeya
  { en: "Areeya Casa Ratchada", th: "อารียา คาซ่า รัชดา" }, //Areeya
  { en: "Areeya Mandarina Sukhumvit 77", th: "อารียา แมนดารีนา สุขุมวิท 77" }, //Areeya
  { en: "Areeya Mova", th: "อารียา โมว่า" }, //Areeya
  { en: "Areeya The Color 2", th: "อารียา เดอะ คัลเลอร์ 2" }, //Areeya
  { en: "Areeya The Colors Chaengwattana-Tiwanon" },
  { en: "Chalermnit Art De Maison", th: "เฉลิมนิจ อาร์ต เดอ เมซอง" }, //Areeya
  { en: "THE ENVI Saphankwai", th: "ดิ เอนวี่ สะพานควาย" }, //Areeya
  { en: "The Ava Residence", th: "ดิ เอวา เรสซิเดนซ์" }, //Areeya
  { en: "The Colors Leisure Bangna KM.8", th: "เดอะคัลเลอร์ส เลชเชอร์ บางนา กม.8" }, //Areeya
  { en: "The Colors Rangsit-Klong 4", th: "เดอะ คัลเลอร์ส รังสิต-คลอง 4" }, //Areeya
  { en: "The Colours Wongwean-Ratchaperk", th: "เดอะ คัลเลอร์ส วงแหวน-ราชพฤกษ์" }, //Areeya
  { en: "The Village Kanjanapisek-Rachaphruk", th: "เดอะวิลเลจ กาญจนาภิเษก-ราชพฤกษ์" }, //Areeya

  { en: "The Extro Phayathai-Rangnam", th: "ดิ เอ็กซ์โทร พญาไท-รางน้ำ" }, //Singha Estate
  { en: "EYSE Sukhumvit 43" }, //Singha Estate
  { en: "The Esse Sukhumvit 36", th: "ดิ เอส สุขุมวิท 36" }, //Singha Estate
  { en: "The Esse at Singha Complex", th: "ดิ เอส แอท สิงห์ คอมเพล็กซ์" }, //Singha Estate
  { en: "The Esse Asoke", th: "ดิ เอส อโศก" }, //Singha Estate
  { en: "SINGHA COMPLEX", th: "สิงห์ คอมเพล็กซ์ " }, //Singha Estate

  { en: "Landmark @Grand Station", th: "แลนด์มาร์ค แอท แกรนด์ สเตชั่น" }, //Siamese Asset
  { en: "Siamese Exclusive Ratchada", th: "ไซมิส เอ๊กซ์คลูซีพ รัชดา" }, //Siamese Asset
  { en: "The Collection 16", th: "เดอะ คอลเลคชั่น 16" }, //Siamese Asset
  { en: "Siamese Sukhumvit 87", th: "ไซมิส สุขุมวิท 87" }, //Siamese Asset
  { en: "Ramada Plaza By Wyndham Bangkok Sukhumvit 48", th: "รามาดา พลาซ่า บาย วินด์แฮม แบงคอก สุขุมวิท 48" }, //Siamese Asset
  { en: "Siamese Exclusive 42", th: "ไซมิส เอ็กซ์คลูซีฟ 42" }, //Siamese Asset
  { en: "Wyndham Garden Residence Sukhumvit 42", th: "วินแดม การ์เด้น เรสซิเดนซ์ สุขุมวิท 42" }, //Siamese Asset
  { en: "Wyndham Residence Bangkok", th: "วินด์แฮม เรสซิเดนซ์ แบงค็อค" }, //Siamese Asset
  { en: "Siamese Exclusive Queens", th: "ไซมิส เอ๊กซ์คลูซีพ ควีนส์" }, //Siamese Asset
  { en: "Wyndham Bangkok Queen Convention Centre", th: "วินด์แดม บางกอก ควีน คอนเวนชั่น เซ็นเตอร์" }, //Siamese Asset
  { en: "Ramada Plaza Residence Sukhumvit 48", th: "รามาดา พลาซ่า เรสซิเดนซ์ สุขุมวิท 48" }, //Siamese Asset
  { en: "Siamese Kin Ramintra", th: "ไซมิส คิน รามอินทรา" }, //Siamese Asset
  { en: "Blossom Condo @ Fashion Beyond", th: "บลอสซั่ม คอนโด แอท แฟชั่น บียอนน์" }, //Siamese Asset
  { en: "Siamese Exclusive Sukhumvit 31", th: "ไซมิส เอ็กซ์คลูซีฟ สุขุมวิท 31" }, //Siamese Asset
  { en: "Blossom Condo @ Sathorn-Charoenrat", th: "บลอสซั่ม คอนโด แอท สาทร-เจริญราษฎ์" }, //Siamese Asset
  { en: "Siamese Nang Linchee", th: "ไซมิส นางลิ้นจี่" }, //Siamese Asset
  { en: "Blossom Condo@Fashion Altitude", th: "บลอสซั่ม คอนโด แอท แฟชั่น อัลติจูด" }, //Siamese Asset
  { en: "Siamese Surawong", th: "ไซมิส สุรวงศ์" }, //Siamese Asset
  { en: "Siamese Ratchakru", th: "ไซมิส ราชครู" }, //Siamese Asset
  { en: "Siamese Thirty Nine", th: "ไซมิส เธอร์ตี้ ไนน์" }, //Siamese Asset
  { en: "Siamese Gioia", th: "ไซมิส จอยญ่า" }, //Siamese Asset

  { en: "624 Condolette Ladprao", th: "624 คอนโดเลต ลาดพร้าว" }, //pruksa
  { en: "624 Condolette Ratchada 36", th: "624 คอนโดเลต รัชดา 36" }, //pruksa
  { en: "Chapter Charoennakorn-Riverside", th: "แชปเตอร์ เจริญนคร-ริเวอร์ไซด์" }, //pruksa
  { en: "Chapter Chula-Samyan" }, //pruksa
  { en: "Chapter One ECO Ratchada-Huaikwang", th: "แชปเตอร์ วัน อีโค รัชดา-ห้วยขวาง" }, //pruksa
  { en: "Chapter One Flow", th: "แชปเตอร์ วัน โฟลว์" }, //pruksa
  { en: "Chapter One Midtown Ladprao 24", th: "แชปเตอร์ วัน มิดทาวน์ ลาดพร้าว 24" }, //pruksa
  { en: "Chapter One Ratburana 33", th: "แชปเตอร์ วัน ราษฎร์บูรณะ 33" }, //pruksa
  { en: "Chapter One The Campus Kaset", th: "แชปเตอร์ วัน เดอะ แคมปัส เกษตร" }, //pruksa
  { en: "Chapter One Shine Bangpo", th: "แชปเตอร์ วัน ชายน์ บางโพ " }, //pruksa
  { en: "Chapter Thonglor 25", th: "แชปเตอร์ ทองหล่อ 25" }, //pruksa
  { en: "Condolette Dwell Sukhumvit 26", th: "คอนโดเลต ดเวล สุขุมวิท 26" }, //pruksa
  { en: "Condolette Light Convent", th: "คอนโดเลต ไลท์ คอนแวนต์" }, //pruksa
  { en: "Condolette Midst Rama 9", th: "คอนโดเลต มิสท์ พระราม 9" }, //pruksa
  { en: "Condolette Pixel Sathorn", th: "คอนโดเลต พิกเซล สาทร" }, //pruksa
  { en: "Delight Rama 5-Kanchanaphisek", th: "ดีไลท์ พระราม 5-กาญจนาภิเษก" }, //pruksa
  { en: "Fuse Chan-Sathorn", th: "ฟิวส์ จันทน์-สาทร" }, //pruksa
  { en: "Fuse Miti Ratchada-Sutthisan", th: "ฟิวส์ มิติ สุทธิสาร-รัชดา" }, //pruksa
  { en: "Fuse Mobius Ramkhamhaeng Station", th: "ฟิวส์ โมเบียส รามคำแหง สเตชั่น" }, //pruksa
  { en: "Fuse Sathorn-Taksin", th: "ฟิวส์ สาทร-ตากสิน" }, //pruksa
  { en: "Fuse Sense BangKae", th: "ฟิวส์ เซนเซ่ บางแค" }, //pruksa
  { en: "Ivy Ampio", th: "ไอวี่ แอมพิโอ" }, //pruksa
  { en: "Ivy Ratchada", th: "ไอวี่ รัชดา" }, //pruksa
  { en: "Ivy River", th: "คอนโด ไอวี่ ริเวอร์" }, //pruksa
  { en: "Ivy Sathorn 10", th: "ไอวี่ สาทร 10" }, //pruksa
  { en: "Ivy Thonglor", th: "ไอวี่ ทองหล่อ" }, //pruksa
  { en: "Natura Rama 2-Wongwaen Prachauthit", th: "เนเชอร่า พระราม 2-วงแหวน ประชาอุทิศ" }, //pruksa
  { en: "Natura Trend Pinklao-Sai 5", th: "เนเชอร่า เทรนด์ ปิ่นเกล้า-สาย 5" }, //pruksa
  { en: "Plum Condo Bangyai Station", th: "พลัม คอนโด บางใหญ่ สเตชั่น" }, //pruksa
  { en: "Plum Condo Central Station", th: "พลัม คอนโด เซ็นทรัล สเตชั่น" }, //pruksa
  { en: "Plum Condo Chokchai 4", th: "พลัมคอนโด โชคชัย 4" }, //pruksa
  { en: "Plum Condo Donmuang-Airport", th: "พลัม คอนโด ดอนเมือง-แอร์พอร์ต" }, //pruksa
  { en: "Plum Condo Ladprao 101", th: "พลัม คอนโด ลาดพร้าว 101" }, //pruksa
  { en: "Plum Condo Mix Chaengwattana", th: "พลัมคอนโด มิกซ์ แจ้งวัฒนะ" }, //pruksa
  { en: "Plum Condo Park Rangsit", th: "พลัม คอนโด พาร์ค รังสิต" }, //pruksa
  { en: "Plum Condo Phaholyothin 89", th: "พลัม คอนโด พหลโยธิน 89" }, //pruksa
  { en: "Plum Condo Pinklao Station", th: "พลัมคอนโด ปิ่นเกล้า สเตชั่น" }, //pruksa
  { en: "Plum Condo Ramkhamhaeng", th: "พลัมคอนโด รามคำแหง" }, //pruksa
  { en: "Plum Condo Rangsit Alive", th: "พลัมคอนโด รังสิต อะไลฟ์" }, //pruksa
  { en: "Plum Condo Samakkhi", th: "พลัม คอนโด สามัคคี" }, //pruksa
  { en: "Plum Condo Saphanmai Station", th: "พลัมคอนโด สะพานใหม่ สเตชั่น" }, //pruksa
  { en: "Plum Condo Sukhumvit 62", th: "พลัมคอนโด สุขุมวิท 62" }, //pruksa
  { en: "Plum Condo Sukhumvit 97.1", th: "พลัม คอนโด สุขุมวิท 97.1" }, //pruksa
  { en: "Pruksatown Nexts Bangna KM.5", th: "พฤกษาทาวน์เน็กซ์ บางนา กม.5" }, //pruksa
  { en: "THE TREE Victory Monument", th: "คอนโด เดอะทรี อนุสาวรีย์" }, //pruksa
  { en: "The Connect Bearing Station", th: "เดอะ คอนเนค แบริ่ง สเตชั่น" }, //pruksa
  { en: "The Connect Kaset-Navamin	กรุงเทพมหานคร" }, //pruksa
  { en: "The Connect Laksi-Donmueang", th: "เดอะ คอนเนค หลักสี่-ดอนเมือง" }, //pruksa
  { en: "The Connect Onnut 2", th: "เดอะคอนเนค อ่อนนุช 2" }, //pruksa
  { en: "The Connect Pattanakarn 38", th: "เดอะ คอนเนค พัฒนาการ 38" }, //pruksa
  { en: "The Connect Suksawat 26", th: "เดอะคอนเนค สุขสวัสดิ์ 26" }, //pruksa
  { en: "The Connect Suvarnabhumi 3" }, //pruksa
  { en: "The Connect Suvarnabhumi 4", th: "เดอะคอนเนค สุวรรณภูมิ 4" }, //pruksa
  { en: "The Connect Tiwanon-Chaengwattana", th: "เดอะ คอนเนค ติวานนท์-แจ้งวัฒนะ" }, //pruksa
  { en: "The Connect UP3 Ladprao 126", th: "เดอะ คอนเนค อัพ3 ลาดพร้าว 126" }, //pruksa
  { en: "The Connect Watcharapol-Permsin", th: "เดอะคอนเนค วัชรพล-เพิ่มสิน" }, //pruksa
  { en: "The Privacy Charan-Ratchawithi Station", th: "เดอะ ไพรเวซี่ จรัญ-ราชวิถี สเตชั่น" }, //pruksa
  { en: "The Privacy Jatujak", th: "เดอะ ไพรเวซี่ จตุจักร" }, //pruksa
  { en: "The Privacy Ladprao-Sena", th: "เดอะไพรเวซี่ ลาดพร้าว-เสนา" }, //pruksa
  { en: "The Privacy Rama 9", th: "เดอะ ไพรเวซี่ พระราม 9" }, //pruksa
  { en: "The Privacy Ratchada-Sutthisan", th: "เดอะ ไพรเวซี่ รัชดา-สุทธิสาร" }, //pruksa
  { en: "The Reserve-Kasemsan 3", th: "เดอะรีเซิร์ฟ เกษมสันต์ 3" }, //pruksa
  { en: "The Reserve 61 Hideaway", th: "เดอะ รีเซิร์ฟ 61 ไฮด์อะเวย์" }, //pruksa
  { en: "The Reserve Phahol-Pradipat", th: "เดอะ รีเซิร์ฟ พหล-ประดิพัทธ์" }, //pruksa
  { en: "The Reserve Sathorn", th: "เดอะ รีเซิร์ฟ สาทร" }, //pruksa
  { en: "The Reserve Sukhumvit 61", th: "เดอะ รีเซิร์ฟ สุขุมวิท 61" }, //pruksa
  { en: "The Reserve Thonglor 2" }, //pruksa
  { en: "The Seed Chaeng Watthana", th: "เดอะ ซี้ด แจ้งวัฒนะ" }, //pruksa
  { en: "The Seed Memories Siam", th: "เดอะ ซี้ด เมมโมรี่ สยาม" }, //pruksa
  { en: "The Seed Mingle", th: "เดอะ ซี้ด มิงเกิล" }, //pruksa
  { en: "The Seed Musee", th: "เดอะซี๊ด มูซี่" }, //pruksa
  { en: "The Seed Terre Ratchayothin", th: "เดอะ ซี้ด เตร์เร่ รัชโยธิน" }, //pruksa
  { en: "The Signature by URBANO", th: "เดอะ ซิกเนเจอร์ บาย เออร์บาโน่" }, //pruksa
  { en: "The Tree Charan-Bang Phlat", th: "เดอะ ทรี จรัญ-บางพลัด" }, //pruksa
  { en: "The Tree Charan 30", th: "The Tree จรัญฯ 30" }, //pruksa
  { en: "The Tree Condo Ladprao", th: "เดอะ ทรี คอนโด ลาดพร้าว" }, //pruksa
  { en: "The Tree Dindaeng-Ratchaprarop", th: " เดอะ ทรี ดินแดง-ราชปรารภ" }, //pruksa
  { en: "The Tree Hua-Mak" }, //pruksa
  { en: "The Tree Interchange", th: "เดอะ ทรี อินเตอร์เชนจ์" }, //pruksa
  { en: "The Tree Ladprao 15", th: "เดอะ ทรี ลาดพร้าว 15" }, //pruksa
  { en: "The Tree Onnut Station", th: "เดอะทรี อ่อนนุช สเตชั่น" }, //pruksa
  { en: "The Tree Rio Bang-Aor", th: "เดอะ ทรี ริโอ บาง-อ้อ" }, //pruksa
  { en: "The Tree Sukhumvit-Rama 4" }, //pruksa
  { en: "The Tree Sukhumvit 64", th: "เดอะทรี สุขุมวิท 64" }, //pruksa
  { en: "The Tree Sukhumvit 71-Ekamai", th: "เดอะทรี สุขุมวิท 71-เอกมัย" }, //pruksa
  { en: "Urbano Rajavithi", th: "เออร์บาโน ราชวิถี" }, //pruksa

  { en: "Fullerton", th: "ฟูลเลอตัน สุขุมวิท" },
  { en: "Metris Pattanakarn-Ekkamai", th: "เมทริส พัฒนาการ-เอกมัย" }, //Major
  { en: "Metris Rama 9-Ramkhamhaeng", th: "เมทริส พระราม 9-รามคำแหง" }, //Major
  { en: "Metris Ladprao", th: "เมทริส ลาดพร้าว" }, //Major
  { en: "Marvest", th: "มาร์เวสท์" }, //Major
  { en: "Maestro 19 Ratchada 19-Vipha", th: "มาเอสโตร 19 รัชดา 19-วิภา" }, //Major
  { en: "Maestro 03 Ratchada-Rama 9", th: "มาเอสโตร 03 รัชดา-พระราม 9" }, //Major
  { en: "Maestro 01 Sathorn-Yenakat", th: "มาเอสโตร 01 สาทร-เย็นอากาศ" }, //Major
  { en: "Maestro 07 Victory Monument" }, //Major
  { en: "Maestro 14 Siam-Ratchathewi", th: "มาเอสโตร 14 สยาม-ราชเทวี" }, //Major
  { en: "M Jatujak", th: "เอ็ม จตุจักร" }, //Major
  { en: "M Thonglor 10", th: "เอ็ม ทองหล่อ 10" }, //Major
  { en: "Maestro 12", th: "มาเอสโตร 12" }, //Major
  { en: "Maestro 02 Ruamrudee", th: "มาเอสโตร 02 ร่วมฤดี" }, //Major
  { en: "Maestro 39", th: "มาเอสโตร 39" }, //Major
  { en: "M Phayathai", th: "เอ็ม พญาไท" }, //Major
  { en: "Reflection Jomtien Beach", th: "รีเฟล็คชั่น จอมเทียน บีช" }, //Major
  { en: "M Ladprao", th: "เอ็ม ลาดพร้าว" }, //Major
  { en: "M Silom", th: "เอ็ม สีลม" }, //Major
  { en: "Mykonos Condo", th: "มิคโคนอส คอนโด" }, //Major
  { en: "Aguston Sukhumvit 22", th: "อกัสตัน สุขุมวิท 22" }, //Major

  { en: "333 Riverside", th: "333 ริเวอร์ไซด์" }, //lh
  { en: "Ease 2", th: "อีส 2" }, //lh
  { en: "River Heaven", th: "ริเวอร์ เฮเว่น" }, //lh
  { en: "Serene Lake North 1", th: "ซีรีน เลค นอร์ธ 1" }, //lh
  { en: "Serene Lake North 2", th: "ซีรีน เลค นอร์ธ 2" }, //lh
  { en: "The Bangkok Sathorn", th: "เดอะ แบงค็อก สาทร" }, //lh
  { en: "The Bangkok Sukhumvit 61", th: "เดอะ บางกอก สุขุมวิท 61" }, //lh
  { en: "The Bangkok Thonglor", th: "เดอะ แบงค็อค ทองหล่อ" }, //lh
  { en: "The Key Chaengwattana", th: "เดอะ คีย์ แจ้งวัฒนะ" }, //lh
  { en: "The Key Prachachuen", th: "เดอะ คีย์ ประชาชื่น" }, //lh
  { en: "The Key Rama 3", th: "เดอะ คีย์ พระราม 3" }, //lh
  { en: "The Key Sathorn-Charoenraj", th: "เดอะ คีย์ สาทร-เจริญราษฎร์" }, //lh
  { en: "The Key Udomsuk", th: "เดอะ คีย์ อุดมสุข" }, //lh
  { en: "The Key Wutthakat" }, //lh
  { en: "The Room BTS Wongwian Yai", th: "เดอะ รูม บีทีเอส วงเวียนใหญ่" }, //lh
  { en: "The Room Charoenkrung 30", th: "เดอะ รูม เจริญกรุง 30" }, //lh
  { en: "The Room Phayathai", th: "เดอะรูม พญาไท" }, //lh
  { en: "The Room Rama 4", th: "เดอะ รูม พระราม 4" }, //lh
  { en: "The Room Ratchada-Ladprao", th: "เดอะ รูม รัชดา-ลาดพร้าว" }, //lh
  { en: "The Room Sathorn-St.Louis", th: "เดอะรูม สาทร-เซนต์หลุยส์" }, //lh
  { en: "The Room Sathorn-Taksin", th: "เดอะ รูม สาทร-ตากสิน" }, //lh
  { en: "The Room Sathorn-TanonPun", th: "เดอะ รูม สาทร-ถนนปั้น" }, //lh
  { en: "The Room Sukhumvit 21", th: "เดอะ รูม สุขุมวิท 21" }, //lh
  { en: "The Room Sukhumvit 38", th: "เดอะรูม สุขุมวิท 38" }, //lh
  { en: "The Room Sukhumvit 40", th: "เดอะ รูม สุขุมวิท 40" }, //lh
  { en: "The Room Sukhumvit 62", th: "เดอะ รูม สุขุมวิท 62" }, //lh
  { en: "The Room Sukhumvit 64", th: "เดอะ รูม สุขุมวิท 64" }, //lh
  { en: "The Room Sukhumvit 69", th: "เดอะ รูม สุขุมวิท 69" }, //lh
  { en: "The Room Sukhumvit 79", th: "เดอะ รูม สุขุมวิท 79" }, //lh

  { en: "B-Loft Lite Sukhumvit 107", th: "บี ลอฟท์ ไลท์ สุขุมวิท 107" }, //origin
  { en: "B-Loft Lite Sukhumvit 107", th: "บี ลอฟท์ ไลท์ สุขุมวิท 107" }, //origin
  { en: "B-Loft Lite Sukhumvit 115", th: "บี ลอฟท์ ไลท์ สุขุมวิท 115" }, //origin
  { en: "BRIXTON Pet and Play Sukhumvit 107", th: "บริกซ์ตัน เพ็ทแอนด์เพลย์ สุขุมวิท107" }, //origin
  { en: "Britania Bangna KM. 12", th: "บริทาเนีย บางนา กม.12" }, //origin
  { en: "Hampton Residence Phayathai", th: "แฮมป์ตัน เรสซิเดนซ์ พญาไท" }, //origin
  { en: "Hampton Residence Thonglor", th: "แฮมป์ตัน เรสซิเด้นซ์ ทองหล่อ" }, //origin
  { en: "Hampton Residence next to Emporium", th: "แฮมป์ตัน เรสซิเดนซ์ เน็กซ์ ทู เอ็มโพเรียม" }, //origin
  { en: "Kensington Bearing", th: "เคนซิงตัน แบริ่ง" }, //origin
  { en: "Kensington Laemchabang-Sriracha", th: "เคนซิงตัน แหลมฉบัง-ศรีราชา" }, //origin
  { en: "Kensington Phahol-Kaset", th: "เคนซิงตัน พหล-เกษตร" }, //origin
  { en: "Kensington Phaholyothin 63", th: "เคนซิงตัน พหลโยธิน 63" }, //origin
  { en: "Kensington Sukhumvit-Thepharak", th: "เคนซิงตัน สุขุมวิท-เทพารักษ์" }, //origin
  { en: "KnightsBridge Kaset-Society", th: "ไนท์​บริดจ์​ เกษตร​ โซไซตี้​" }, //origin
  { en: "KnightsBridge Prime Ratchayothin", th: "ไนท์บริดจ์ ไพร์ม รัชโยธิน" }, //origin
  { en: "KnightsBridge Sky River Ocean", th: "ไนท์บริดจ์ สกาย ริเวอร์ โอเชี่ยน" }, //origin
  { en: "KnightsBridge The Ocean Sriracha", th: "ไนท์บริดจ์ ดิ โอเชี่ยน ศรีราชา" }, //origin
  { en: "Knightsbridge Bearing", th: "ไนท์บริดจ์ แบริ่ง" }, //origin
  { en: "Knightsbridge Collage Ramkhamhaeng", th: "ไนท์บริด คอลลาจ รามคำแหง" }, //origin
  { en: "Knightsbridge Collage Sukhumvit 107", th: "ไนท์บริดจ์ คอลลาจ สุขุมวิท 107" }, //origin
  { en: "Knightsbridge Prime Onnut", th: "ไนท์บริดจ์ ไพร์ม อ่อนนุช" }, //origin
  { en: "Knightsbridge Prime Sathorn", th: "ไนท์บริดจ์ ไพรม์ สาทร" }, //origin
  { en: "Knightsbridge Space Rama 9", th: "ไนท์บริดจ์ สเปซ พระราม 9" }, //origin
  { en: "Knightsbridge Space Ratchayothin", th: "ไนท์บริดจ์ สเปซ รัชโยธิน" }, //origin
  { en: "Knightsbridge Sukhumvit-Thepharak", th: "ไนท์บริดจ์ สุขุมวิท-เทพารักษ์" }, //origin
  { en: "Knightsbridge Tiwanon", th: "ไนท์บริดจ์ ติวานนท์" }, //origin
  { en: "Knightsbridge Phaholyothin-Interchange", th: "ไนท์บริดจ์ พหลโยธิน-อินเตอร์เชนจ์" }, //origin
  { en: "Notting Hill Laemchabang-Sriracha", th: "นอตติ้ง ฮิลล์ แหลมฉบัง-ศรีราชา" }, //origin
  { en: "Notting Hill Sukhumvit 105", th: "นอตติ้ง ฮิลล์ สุขุมวิท 105" }, //origin
  { en: "Notting Hill Sukhumvit-Praksa", th: "น็อตติ้ง ฮิลล์ สุขุมวิท-แพรกษา" }, //origin
  { en: "Origin Plug & Play Ladprao Interchange", th: "ออริจิ้น ปลั๊ก แอนด์ เพลย์ ลาดพร้าว อินเตอร์เชนจ์" }, //origin
  { en: "Origin Wellness Residence Sukhumvit 107", th: "ออริจิ้น เวลเนส เรสซิเดนซ์ สุขุมวิท 107" }, //origin
  { en: "Park Origin Chula Samyan", th: "พาร์ค ออริจิ้น จุฬา-สามย่าน" }, //origin
  { en: "Park Origin Phayathai", th: "พาร์ค ออริจิ้น พญาไท" }, //origin
  { en: "Park Origin Phrom Phong", th: "พาร์ค ออริจิ้น พร้อมพงษ์" }, //origin
  { en: "Park Origin Ratchathewi", th: "พาร์ค ออริจิ้น ราชเทวี" }, //origin
  { en: "Park Origin Thonglor", th: "พาร์ค ออริจิ้น ทองหล่อ" }, //origin
  { en: "Pause Sukhumvit 103", th: "พอส สุขุมวิท 103" }, //origin
  { en: "Pause Sukhumvit 107", th: "พอส สุขุมวิท 107" }, //origin
  { en: "Pause Sukhumvit 115", th: "พอส สุขุมวิท 115", synonym: "Pause 115" }, //origin
  { en: "Sense of London", th: "เซ้นส์ ออฟ ลอนดอน" }, //origin
  { en: "The Cabana Modern Resort Condominium", th: "เดอะ คาบาน่า โมเดิร์น รีสอร์ท คอนโดมิเนียม" }, //origin
  { en: "The Knight II", th: "เดอะ ไนท์ 2" }, //origin
  { en: "The Origin Onnut", th: "ดิ ออริจิ้น อ่อนนุช" }, //origin
  { en: "The Origin Phahol-Saphanmai", th: "ดิ ออริจิ้น พหล-สะพานใหม่" }, //origin
  { en: "The Origin Ramintra 83 Station", th: "ดิ ออริจิ้น รามอินทรา 83 สเตชั่น" }, //origin
  { en: "The Origin Ratchada-Ladprao", th: "ดิ ออริจิ้น รัชดา-ลาดพร้าว" }, //origin
  { en: "The Origin Sukhumvit 105", th: "ดิ ออริจิ้น สุขุมวิท 105" }, //origin
  { en: "Tropicana BTS Erawan", th: "ทรอปิคาน่า บีทีเอส เอราวัณ" }, //origin
  { en: "Villa Lasalle", th: "วิลล่า ลาซาล" }, //origin

  { en: "Tempo Quad Phaholyothin-Saphanmai", th: "เทมโป ควอด สะพานใหม่" }, //built
  { en: "Tempo One Ramkamhaeng-Rama 9", th: "เทมโป้ วัน รามคำแหง-พระราม 9" }, //built
  { en: "The Tempo Ratchada", th: "เดอะ เทมโป รัชดา" }, //built
  { en: "The Tempo Ruamrudee", th: "เดอะ เทมโป ร่วมฤดี" }, //built
  { en: "The Tempo Grand Sathorn-Wutthakat", th: "เดอะ เทมโป แกรน สาทร-วุฒากาศ" }, //built

  { en: "Denim Jatujak", th: "เดนิม จตุจักร" }, //grand
  { en: "Anil Sathorn 12", th: "อนิล สาทร 12" }, //grand
  { en: "CIELA Charoen Nakhon", th: "เซียล่า เจริญนคร" }, //grand
  { en: "KARA Ari-Rama 6", th: "คาร่า อารีย์-พระราม 6" }, //grand
  { en: "CIELA Charan 13 Station", th: "เซียล่า จรัญฯ 13 สเตชั่น" }, //grand
  { en: "CIELA Sripatum", th: "เซียล่า ศรีปทุม" }, //grand
  { en: "De LAPIS Charan 81", th: "เดอ ลาพีส จรัญ 81" }, //grand
  { en: "MAZARINE Ratchayothin", th: " แมสซารีน รัชโยธิน" }, //grand
  { en: "U Delight Residence Riverfront Rama 3", th: "ยู ดีไลท์ เรสซิเดนซ์ ริเวอร์ฟรอนท์ พระราม 3" }, //grand
  { en: "The Private Residence Rajdamri", th: "เดอะ ไพรเวท เรสซิเด้นซ์ ราชดำริ" }, //grand
  { en: "Condo U Kaset-Nawamin", th: "คอนโด ยู เกษตร-นวมินทร์" }, //grand
  { en: "U Delight Ratchavibha", th: "ยู ดีไลท์ รัชวิภา" }, //grand
  { en: "U Delight Rattanathibet", th: "ยูดีไลท์ รัตนาธิเบศร์" }, //grand
  { en: "U Delight at Huamak Station", th: "ยู ดีไลท์ แอท หัวหมาก สเตชั่น" }, //grand
  { en: "Condo U Ratchayothin", th: "คอนโด ยู รัชโยธิน" }, //grand
  { en: "U Delight 3 Prachachuen Bangsue", th: "ยู ดีไลท์ 3 ประชาชื่น บางซื่อ" }, //grand
  { en: "U Delight Residence Phatthanakan", th: "ยู ดีไลท์ เรสซิเดนซ์" }, //grand
  { en: "U Delight at Onnut Station", th: "ยู ดีไลท์ แอท อ่อนนุช สเตชั่น" }, //grand
  { en: "U Delight at Jatujak Station", th: "ยู ดีไลท์ แอท จตุจักร สเตชั่น" }, //grand
  { en: "U Sabai Rama 4-Kluaynamthai", th: "ยู สบาย พระราม 4-กล้วยน้ำไท" }, //grand
  { en: "Park View Viphavadi" }, //grand
  { en: "Grand Park View Asoke", th: "แกรนด์ พาร์ค วิว อโศก" }, //grand

  { en: "28 Chidlom", th: "28 ชิดลม" }, //sc
  { en: "BEATNIQ Sukhumvit 32", th: "บีทนิค สุขุมวิท 32" }, //sc
  { en: "Centric Ari Station", th: "เซ็นทริค อารีย์ สเตชั่น" }, //sc
  { en: "Centric Ratchada-Huai Khwang", th: "เซ็นทริค รัชดา-ห้วยขวาง" }, //sc
  { en: "Centric Ratchada-Suthisan", th: "เซ็นทริค รัชดา-สุทธิสาร" }, //sc
  { en: "Centric Ratchayothin", th: "เซ็นทริค รัชโยธิน" }, //sc
  { en: "Centric Sathorn-Saint Louis", th: "เซ็นทริค สาทร-เซนต์หลุยส์" }, //sc
  { en: "Centric Scene Aree 2", th: "เซ็นทริค ซีน อารีย์ 2" }, //sc
  { en: "Centric Scene Phaholyothin 9", th: "เซ็นทริค ซีน พหลโยธิน 9" }, //sc
  { en: "Centric Scene Ratchavipha", th: "เซ็นทริค ซีน รัชวิภา" }, //sc
  { en: "Centric Scene Sukhumvit 64", th: "เซ็นทริค ซีน สุขุมวิท 64" }, //sc
  { en: "Centric Sea", th: "เซ็นทริค ซี" }, //sc
  { en: "Centric Tiwanon Station", th: "เซ็นทริค ติวานนท์ สเตชั่น" }, //sc
  { en: "Chambers Chaan Ladprao-Wanghin", th: "แชมเบอร์ส ชาน ลาดพร้าว-วังหิน" }, //sc
  { en: "Chambers Cher Ratchada-Ramintra", th: "แชมเบอร์ส เฌอ รัชดา-รามอินทรา" }, //sc
  { en: "Chambers On-Nut Station", th: "แชมเบอร์ส อ่อนนุช สเตชั่น" }, //sc
  { en: "SCOPE Promsri", th: "สโคป พร้อมศรี" }, //sc
  { en: "Saladaeng One", th: "ศาลาแดง วัน" }, //sc
  { en: "The Crest Park Residences", th: "เดอะ เครสท์ พาร์ค เรสซิเดนซ์" }, //sc
  { en: "The Crest Ruamrudee", th: "เดอะ เครส ร่วมฤดี " }, //sc
  { en: "The Crest Santora", th: "เดอะ เครสท์ ซานโตรา" }, //sc
  { en: "The Crest Sukhumvit 24", th: "เดอะ เครสท์ สุขุมวิท 34" }, //sc
  { en: "The Crest Sukhumvit 34", th: "เดอะ เครสท์ สุขุมวิท 34" }, //sc
  { en: "The Crest Sukhumvit 49", th: "เดอะ เครสท์ สุขุมวิท 49" }, //sc

  { en: "Bangkok Feliz @Bangkhae Station", th: "แบงค์คอก เฟลิซ แอท สถานีบางแค" }, //cmc
  { en: "Bangkok Feliz Sukhumvit 69", th: "แบงค์คอก เฟ’ลิซ สุขุมวิท 69" }, //cmc
  { en: "Bangkok Feliz Sukhumvit 69-2", th: "แบงค์คอก เฟลิซ สุขุมวิท 69-2" }, //cmc
  { en: "Bangkok Horizon Lite @ Phekasem 48 Station", th: "แบงค์คอก ฮอไรซอน ไลท์ @ สถานีเพชรเกษม 48" }, //cmc
  { en: "Bangkok Horizon P48", th: "แบงค์คอก ฮอไรซอน พี 48" }, //cmc
  { en: "Bangkok Horizon Petchkasem", th: "แบงค์คอก ฮอไรซอน เพชรเกษม" }, //cmc
  { en: "Bangkok Horizon Ramkhamhaeng", th: "แบงค์คอก ฮอไรซอน รามคำแหง" }, //cmc
  { en: "Bangkok Horizon Sathorn", th: "แบงค์คอก ฮอไรซอน สาทร" }, //cmc
  { en: "Bangkok Horizon Tiwanon", th: "แบงค์คอก ฮอไรซอน ติวานนท์" }, //cmc
  { en: "CYBIQ Ramkhamhaeng", th: "ไซน์บิค รามคำแหง" }, //cmc
  { en: "Chateau In Town Charansanitwong 96/2", th: "ชาโตว์ อินทาวน์ จรัญสนิทวงศ์ 96/2" }, //cmc
  { en: "Chateau In Town Phahonyothin 32", th: "ชาโตว์ อิน ทาวน์ พหลโยธิน 32" }, //cmc
  { en: "Chateau In Town Ratchada 20" }, //cmc
  { en: "Chateau In Town Ratchada 20-2" }, //cmc
  { en: "Chateau In Town Ratchada 36", th: "ชาโตว์ อิน ทาวน์ รัชดา 36" }, //cmc
  { en: "Chateau In Town Ratchayothin", th: "ชาโตว์ อิน ทาวน์ รัชโยธิน" }, //cmc
  { en: "Chateau In Town Sukhumvit 62/1", th: "ชาโตว์ อินทาวน์ สุขุมวิท 62/1" }, //cmc
  { en: "Chateau In Town Sukhumvit 64/1" }, //cmc
  { en: "Chateau In Town Vibhavadi 10", th: "ชาโตว์ อินทาวน์ วิภาวดี 10" }, //cmc
  { en: "Cybiq Ratchada 32", th: "ไซบิค รัชดา 32 " }, //cmc
  { en: "Kasa Eureka Rama 2 - Buddhabucha", th: "คาซ่า ยูเรก้า พระราม 2 - พุทธบูชา" }, //cmc
  { en: "The Clev Riverline Chaophraya - Wong Sawang", th: "เดอะ เคลฟ ริเวอร์ไลน์ เจ้าพระยา - วงศ์สว่าง" }, //cmc
  { en: "The Cuvee Tiwanon", th: "เดอะ คิวเว่ ติวานนท์" }, //cmc

  { en: "Atmoz Chaengwattana", th: "แอทโมซ แจ้งวัฒนะ" }, //wise
  { en: "Atmoz Ladphrao 15", th: "แอทโมซ ลาดพร้าว 15" }, //wise
  { en: "Atmoz Ladprao 71", th: "แอทโมซ ลาดพร้าว 71" }, //wise
  { en: "Atmoz Ratchada - Huaikwang", th: "แอทโมช รัชดา - ห้วยขวาง" }, //wise
  { en: "Brown Condo Huaikwang", th: "บราวน์ คอนโด ห้วยขวาง" }, //wise
  { en: "Brown Condo Phahol-Sapan Mai", th: "บราวน์ คอนโด พหลฯ-สะพานใหม่" }, //wise
  { en: "Esta Bliss Condo", th: "เอสต้า บริซ" }, //wise
  { en: "H2 Ramintra 21", th: "เอชทู รามอินทรา 21" }, //wise
  { en: "Ivory Ratchada-Ladprao", th: "ไอเวอรี่ รัชดา-ลาดพร้าว" }, //wise
  { en: "Kave AVA", th: "เคฟ เอวา" }, //wise
  { en: "Kave Salaya", th: "เคฟ ศาลายา" }, //wise
  { en: "Kave Seed Kaset" }, //wise
  { en: "Kave Town Shift", th: "เคฟ ทาวน์ ชิฟท์" }, //wise
  { en: "Modiz Collection Bangpho", th: "โมดิซ คอลเลคชั่น บางโพ" }, //wise
  { en: "Modiz Interchange", th: "โมดิซ อินเตอร์เชนจ์" }, //wise
  { en: "Modiz Rhyme Ramkhamhaeng", th: "โมดิซ ไรห์ม รามคำแหง" }, //wise
  { en: "Modiz Sukhumvit 50", th: "โมดิซ สุขุมวิท 50" }, //wise
  { en: "The Honor", th: "ดิ ออเนอร์" }, //wise
  { en: "Wynn Chokchai 4", th: "วินน์ โชคชัย 4" }, //wise

  { en: "IDEN Kaset - Phaholyothin", th: "ไอเด็น เกษตร-พหลโยธิน" }, //iris
  { en: "iCopenh Sukhumvit 76", th: "ไอ โคเปน สุขุมวิท 76" }, //iris
  { en: "IDEN Sukhumvit 101", th: "ไอเด็น สุขุมวิท 101" }, //iris
  { en: "IRIS Westgate", th: "ไอริส เวสท์เกต" }, //iris
  { en: "IRIS Park", th: "ไอริส พาร์ค" }, //iris
  { en: "IRIS Avenue", th: "ไอริส แอเวนิว" }, //iris
  { en: "The Iris", th: "ดิ ไอริส" }, //iris
  { en: "The Iris Rama 9 - Srinakarin", th: "ดิ ไอริส พระราม9 - ศรีนครินทร์" }, //iris

  { en: "Lyss Ratchayothin", th: "ลิสส์ รัชโยธิน" }, //able
  { en: "The Remarkable Soonvijai 2", th: "เดอะ รีมาร์คเอเบิ้ล ศูนย์วิจัย 2" }, //able

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
  { en: "Baanpuripuri Satriwittaya 2" },
  { en: "Brompton Pet Friendly Sukhumvit 107" },
  { en: "C Ekkamai " },
  { en: "COMPLETE ราชปารถ" },
  { en: "Casa Asoke Dindeang Condo" },
  { en: "Casa City Ekkamai-Ramintra" },
  { en: "Casa City Sukontasawat 2" },
  { en: "Casa City The Spirit Ekamai-Ramindra 2" },
  { en: "Casa Condo @ MRT สามแยกบางใหญ่" },
  { en: "Chalermnit Art De Maison" },
  { en: "Chalong Harbour Estate", th: "ฉลอง ฮาร์เบอร์ เอสเตท" }, //ananda
  { en: "Chewathai Kaset-Nawamin" },
  { en: "Chewathai Phetkasem 27" },
  { en: "Ciela Charan 13 Station" },
  { en: "Citi Smart Condominium", th: "ซิตี้ สมาร์ท คอนโดมิเนียม" }, //ap
  { en: "City Home Ratchada-Pinklao", th: "ซิตี้ โฮม รัชดา-ปิ่นเกล้า" },
  { en: "City Home Tha-Phra Intersection", th: "ซิตี้ โฮม สี่แยกท่าพระ" },
  { en: "Condolette Pixel Sathorn" },
  { en: "Cozy Satreewittaya 2 Soi 10" },
  { en: "D Space Chokchai 4" },
  { en: "Dcondo Campus Abac Bangna" },
  { en: "De Lapis (Charan 81)" },
  { en: "ECO SPACE KASET-NAWAMIN" },
  { en: "Edge 23 by Sansiri" },
  { en: "Elio Del Moss", th: "เอลลิโอ เดล มอสส์" }, //ananda
  { en: "Elio Del Nest", th: "เอลิโอ เดล เนสท์" }, //ananda
  { en: "Elio Del Ray", th: "เอลิโอ เดล เรย์" }, //ananda
  { en: "Elio Sathorn-Wutthakat", th: "เอลลิโอ สาทร-วุฒากาศ" }, //ananda
  { en: "Elio Sukhumvit 64", th: "เอลลิโอ สุขุมวิท 64" }, //ananda
  { en: "Esta Bliss มีนบุรี" },
  { en: "Garden Place Ratchada 20" },
  { en: "Golden Pearl Bangkok, Sukhumvit 101/1" },
  { en: "Golden Town Ladprao-Kaset Nawamin" },
  { en: "Grand Bangkok Boulevard Sathorn-Kallapaphruk" },
  { en: "Grand Palace" },
  { en: "Grand Park Town" },
  { en: "Grand Park View Asoke" },
  { en: "Green Ville สุขุมวิท 101" },
  { en: "H2 Condo รามอินทรา 21" },
  { en: "Hasu Haus (Soi Onnut 1/1)" },
  { en: "Hasu Haus" },
  { en: "Hyde Sukhumvit 13" },
  { en: "I-house Laguna Garden" },
  { en: "IBIZA Condo RCA " },
  { en: "Ideo New Rama 9", th: "ไอดีโอ พระราม 9" }, //ananda
  { en: "Ikon 77" },
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
  { en: "Juldis River Mansion" },
  { en: "KLASS Siam", th: "คลาส คอนโด สยาม" },
  { en: "Kiartithanee City Mansion" },
  { en: "LAS COLINAS ASOKE" },
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
  { en: "Nue Noble Centre Bang Na", th: "นิว โนเบิล เซ็นเตอร์ บางนา" }, //noble
  { en: "Nue Noble Ngamwongwan", th: "นิว โนเบิล งามวงศ์วาน" }, //noble
  { en: "Nue Noble Srinakarin-Lasalle", th: "นิว โนเบิล ศรีนครินทร์-ลาซาล" }, //noble
  { en: "Oka Haus (Sansiri)" },
  { en: "PELA Condo" },
  { en: "Panasiri Residences Kaset-Nawamin" },
  { en: "Parc Exo Kaset-Navamintra", th: "พาร์ค เอ็กโซ เกษตร-นวมินทร์" },
  { en: "Park 24 (Sukhumvit 24)" },
  { en: "Park Ramindra", th: "พาร์ค รามอินทรา" }, //ucity
  { en: "Parkview วิภาวดี 4", th: "พาร์ควิว วิภาวดี" },
  { en: "Patra villa 8 Chokchai 4-Ladprao 71" },
  { en: "Phahon Yothin 24" },
  { en: "Plus City Park Ladphrao 71" },
  { en: "Politan Rive" },
  { en: "Pradya Hometown" },
  { en: "Premium Place Ekamai-Rarm Intra 2" },
  { en: "Premium Place Kaset-Nawamin 2" },
  { en: "Present condo" },
  { en: "Private Nirvana Ladprao Life Ladprao 71" },
  { en: "Q Chidlom-Phetchaburi", th: "คิว ชิดลม-เพชรบุรี" }, //ananda
  { en: "Q Prasarnmit", th: "คิว ประสานมิตร" }, //ananda
  { en: "Quinn Condo Ratchada" },
  { en: "Quintara Phume สุขุมวิท 39" },
  { en: "Quintara สุขุมวิท 39" },
  { en: "REACH Phahonyothin 52", th: "รีช พหลโยธิน 52" },
  { en: "RYE Huamak", th: "ไรย์ หัวหมาก" },
  { en: "Ratchada City 18" },
  { en: "Regent Home 12 Latphrao 41", th: "รีเจ้นท์ โฮม 12 ลาดพร้าว 41" }, //regent
  { en: "Regent Home 18", th: "รีเจ้นท์ โฮม 18" }, //regent
  { en: "Regent Home 27", th: "รีเจ้นท์โฮม บางซ่อน เฟส 27" }, //regent
  { en: "Regent Home 5 Ratchada 19", th: "รีเจ้นท์ โฮม รัชดา 19" }, //regent
  { en: "Regent Home 9 Sukhumvit 64", th: "รีเจ้นท์ โฮม 9 สุขุมวิท 64" }, //regent
  { en: "Regent Home Bangson 27", th: "รีเจ้นท์โฮม บางซ่อน" }, //regent
  { en: "Regent Home Bangson 28", th: "รีเจ้นท์ โฮม บางซ่อน 28 " }, //regent
  { en: "Regent Home Sukhumvit 81", th: "รีเจ้นท์ โฮม สุขุมวิท 81" }, //regent
  { en: "Regent Home Sukhumvit 97/1", th: "รีเจ้นท์ โฮม สุขุมวิท 97/1" }, //regent
  { en: "Regent Orchid Sukhumvit 101", th: "รีเจ้นท์ ออคิด สุขุมวิท 101" }, //regent
  { en: "Residence 52" },
  { en: "Rhythm Asoke 2", th: "ริทึ่ม อโศก 2" }, //ap
  { en: "Rhythm Asoke", th: "ริทึ่ม อโศก" }, //ap
  { en: "Rhythm Ekkamai Estate", th: "ริธึ่ม เอกมัย เอสเตท" }, //ap
  { en: "Rhythm Ekkamai", th: "ริทึ่ม เอกมัย " }, //ap
  { en: "Rhythm Phahol-Ari", th: "ริทึ่ม พหล-อารีย์" }, //ap
  { en: "Rhythm Rangnam", th: "ริทึ่ม รางน้ำ" }, //ap
  { en: "Rhythm Ratchada", th: "ริธึม รัชดา" }, //ap
  { en: "Rhythm Ratchada-Huai Khwang", th: "ริธึม รัชดา-ห้วยขวาง" }, //ap
  { en: "Rhythm Sathorn-Narathiwas", th: "ริทึ่ม สาทร นราธิวาส" }, //ap
  { en: "Rhythm Sathorn", th: "ริทึ่ม สาทร" }, //ap
  { en: "Rhythm Sukhumvit 36-38", th: "ริทึ่ม สุขุมวิท 36-38", synonym: "Rhythm 36-38" }, //ap
  { en: "Rhythm Sukhumvit 42", th: "ริทึ่ม สุขุมวิท 42" }, //ap
  { en: "Rhythm Sukhumvit 44/1", th: "ริธึ่ม สุขุมวิท 44/1" }, //ap
  { en: "Rhythm Sukhumvit 50", th: "ริทึ่ม สุขุมวิท 50" }, //ap
  { en: "Rise Rama 9 " },
  { en: "Runesu ทองหล่อ 5" },
  { en: "Rye Sukhumvit 101/1", th: "ไรย์ สุขุมวิท 101/1" },
  { en: "Rye Talat Phlu", th: "ไรย์ ตลาดพลู" },
  { en: "Rye Taldadphu" },
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
  { en: "THE ISSARA LADPRAO" },
  { en: "The Nest Chula-Samyan" },
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
  { en: "The Clover ทองหล่อ ซอย18" },
  { en: "The Coast Bangkok" },
  { en: "The Cube Plus Chaengwattana" },
  { en: "The Diplomat Sathorn " },
  { en: "The Emerald Residence รัชดา" },
  { en: "The Excel Groove LaSalle", th: "ดิ เอ็กซ์เซล กรูฟ ลาซาล 52" },
  { en: "The Excel Hideaway Sukhumvit 71", th: "The Excel Hideaway สุขุมวิท 71" },
  { en: "The Gallery Bearing" },
  { en: "The IRIS Rama 9-Srinakarin" },
  { en: "The Landmark Ekamai-Ramindra" },
  { en: "The Link สุขุมวิท 64" },
  { en: "The Loft by I-ZEN Nakniwat 48" },
  { en: "The Lumpini 24", th: "เดอะ ลุมพินี 24" }, //lpn
  { en: "The Nest Chula Samyan" },
  { en: "The Niche ID Phetkasem-Bangkae" },
  { en: "The Niche ID ลาดพร้าววังหิน" },
  { en: "The Niche Pride Thonglor-Phetchaburi" },
  { en: "The Parkland รัชดา-ท่าพระ" },
  { en: "The Parkland Grand" },
  { en: "The Parkland Phetkasem ", th: "พาร์คแลนด์ เพชรเกษม" },
  { en: "The Parkland Phetkasem 56", th: "พาร์คแลนด์ เพชรเกษม 56" },
  { en: "The Plant Citi Ladphrao 71" },
  { en: "The President Petchkasem-Bangkhae", th: "" },
  { en: "The President Sathorn-Ratchaphruek 2", th: "เดอะ เพรสซิเดนท์ สาทร-ราชพฤกษ์ 2" },
  { en: "The President Sathorn-Ratchaphruek 3", th: "เดอะ เพรสซิเดนท์ สาทร-ราชพฤกษ์ 3" },
  { en: "The President Sathorn-Ratchaphruek", th: "เดอะ เพรสซิเดนท์ สาทร-ราชพฤกษ์" },
  { en: "The President Sukhumvit 81", th: "เดอะ เพรสซิเดนท์ สุขุมวิท 81" },
  { en: "The Revo Ladprao 48" },
  { en: "The Seed Mingle Sathorn" },
  { en: "The Seed Mingle-Suanplu (Sathorn)" },
  { en: "The Selected Kaset-Ngam Wongwan", th: "เดอะ ซีเล็คเต็ด เกษตร-งามวงศ์วาน" }, //lpn
  { en: "The Sense Sukhumvit", th: "เดอะ เซนส์ สุขุมวิท" },
  { en: "The Sky Sukhumvit" },
  { en: "The Stage Taopoon Interchange" },
  { en: "The Tierra Ladprao 71" },
  { en: "The Trust Erawan" },
  { en: "The Waterford Park Sukhumvit 53" },
  { en: "The Waterford Rama 4" },
  { en: "Thonglor Tower" },
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
  { en: "Whizdom Station Ratchada-Thapra " },
  { en: "Wittayu Complex", th: "วิทยุคอมเพล็กซ์" },
  { en: "แมคนิค รามอินทรา 21" },
  { en: "Wish @ Siam" },
  { en: "Altitude Unicorn สาทร ท่าพระ" },
  { en: "Metro Luxe Ratchada", th: "เมโทรลักษณ์ รัชดา" },

  { en: "Condo One Sukhumvit 52", th: "คอนโด วัน สุขุมวิท 52" },
  { en: "Condo One Ladprao 18" },
  { en: "Condo One X Sukhumvit 26" },

  { en: "38 Mansion Sukhumvit 38" },
  { en: "ATMOZ LADPRAO 15" },
  { en: "Artisan Ratchada" },

  // { en: "บดินทร์ สวีท โฮม" },
  // { en: "บียู โชคชัย4" },
  // { en: "พญาไทเพลส" },
  // { en: "รัชดาภิเษก 19" },
  // { en: "ริชพาร์ค@เจ้าพระยา" },
  // { en: "วอเตอร์มาร์ค เจ้าพระยา ริเวอร์" },
  // { en: "ศรีสวัสดิ์คอนโดมิเนียม" },
  // { en: "สมาร์ท คอนโด พระราม 2" },
  // { en: "อารีย์ เพลส พหลโยธิน" },
  // { en: "อิลีเม้นท์ ศรีนครินทร์" },
  // { en: "ฮาสุ เฮาส์ สุขุมวิท 77" },
  // { en: "เฉลิมนิจ อาจ เดอ เมซอง" },
  // { en: "เดอะ คิทท์ พลัส สุขุมวิท 113" },
  // { en: "เดอะคอนเนคพัฒนาการ 44" },
  // { en: "เมโทร ปาร์ค สาทร" },
  // { en: "เมโทร ปาร์ค สาทร-กัลปพฤกษ์" },
  // { en: "เมโทร สกาย บางซื่อ-ประชาชื่น" },
  // { en: "ไอคอนโด เพชรเกษม39" },
]

export default CondoList
