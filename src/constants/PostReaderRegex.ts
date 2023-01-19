export const SELL_PRICE_REGEX = /(\d+,\d{3},\d{3}) (MB|บาท)/i;
//ราคา 2.25 ล้านบาท
//ขายราคาต่ำกว่าตลาด 1.65 ต่อรองได้อีก

export const PRICE_REGEX =
  /(\d+(,)?\d{3})( )?(ต่อเดือน|เดือน|บาท|baht|THB|฿|per month|month)/i;
export const PRICE2_REGEX = /(เช่าราคา|เช่า|เดือนละ)( )?(\d+(,)?\d{3})/i;

export const FLOOR_REGEX = /(Floor|ชั้น|ชั้นที่)( |: )?(\d+)/i;
export const FLOOR_ENG_REGEX = /(\d*)(st|nd|rd|th)? (floor|Fl\.)/i;

export const ROOM_TYPE_REGEX = /(Studio|Duplex|โฮมออฟฟิศ|ห้องสตู|บ้านเดี่ยว)/i;
export const BED_ROOM_REGEX = /(\d|One)( )?(bedrooms|bed|ห้องนอน|นอน)/i;
export const BATH_ROOM_REGEX = /(\d) bathrooms/i;

export const OWNER_REGEX = /ติดต่อ(: )?(\D+)\s/i;
export const OWNER2_REGEX = /คุณ([^\s]+)/i;

export const ROOM_SIZE_REGEX =
  /(\d+(\.\d{1,2})?)( )?(ตร\.ม|ตรม|ตารางเมตร|sqm|sq\.m|square meters)/i;
export const ROOM_SIZE2_REGEX = /ขนาด.* (\d+(\.\d{1,2})?)/i;

export const TEL_REGEX =
  /([+]{0,1})(([0-9][ ]{0,1}){9,12}|([0-9][\\/]{0,1}){9,12}|([0-9][-]{0,1}){9,12}|([0-9][.]{0,1}){9,12})[0-9]{1}/;

export const LINE_ID_REGEX = /(ไลน์|Line ID|Line)(.*:\s*|\.| )(.*)(\s)?/i;

// Funitures
// - เตียงและที่นอนสปริง(ในภายแค่ยังไม่ได้นำมาวางค่ะมีฟูกให้)
// - ตู้เสื้อผ้า
// แอร์ 2 ตัว
// เตียง
// โซฟา
// แอร์
// ชั้นวางทีวี
// ตู้เสื้อผ้า
// ล็อคเกอร์
// โต๊ะเครื่องแป้ง
// ผ้าม่านกันรังสี
// อ่างอาบน้ำ

// Electric equipments
export const FRIDGE_REGEX = /(ตู้เย็น|Refrigerator)/i;
export const TV_REGEX = /(TV \+ remote|Smart TV|TV|ทีวี|ทีวีดิจิตอล)/i;
export const MICROWAVE_REGEX = /((เตา)?ไมโครเวฟ)/i;
export const WATER_HEATER_REGEX = /(เครื่องทำน้ำอุ่น)/i;
export const WASHING_MACHINE_REGEX = /(เครื่องซักผ้า)/i;
//   /(เตาไฟฟ้า/induction)/i
//   /digital door lock/i
