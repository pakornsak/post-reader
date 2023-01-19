export const PRICE_REGEX =
  /(\d+(,)?\d{3})( )?(ต่อเดือน|บาท|baht|THB|฿|per month)/i;
export const PRICE2_REGEX = /(เช่า|เดือนละ)( )?(\d+(,)?\d{3})/i;

export const FLOOR_REGEX = /(Floor|ชั้น|ชั้นที่)( |: )?(\d+)/i;
export const FLOOR_ENG_REGEX = /(\d*)(st|nd|rd|th)? (floor|Fl\.)/i;

export const ROOM_TYPE_REGEX = /(Studio|Duplex|โฮมออฟฟิศ)/i;
export const BED_ROOM_REGEX = /(\d|One)( )?(bedrooms|bed|ห้องนอน|นอน)/i;
export const BATH_ROOM_REGEX = /(\d) bathrooms/i;

export const OWNER_REGEX = /ติดต่อ(: )?(\D+)\s/i;
export const OWNER2_REGEX = /คุณ(\D+)/i;

export const ROOM_SIZE_REGEX =
  /(\d+(\.\d{1,2})?)( )?(ตร\.ม|ตรม|ตารางเมตร|sqm|sq\.m|square meters)/i;
export const ROOM_SIZE2_REGEX = /ขนาด.* (\d+(\.\d{1,2})?)/i;

export const TEL_REGEX =
  /([+]{0,1})(([0-9][ ]{0,1}){9,12}|([0-9][\\/]{0,1}){9,12}|([0-9][-]{0,1}){9,12}|([0-9][.]{0,1}){9,12})[0-9]{1}/;

export const LINE_ID_REGEX = /(Line ID|Line)(.*:\s*|\.| )(.*)\s/i;
