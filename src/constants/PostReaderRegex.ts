export const PRICE_REGEX = /(\d*,\d{3}) (บาท)?/;
export const BED_ROOM_REGEX = /(\d) (bedrooms|bed)/;
export const BATH_ROOM_REGEX = /(\d) bathrooms/;

export const ROOM_SIZE_REGEX = /(\d*) (ตร\.ม\.|sqm)/;
export const TEL_REGEX =
  /([+]{0,1})(([0-9][ ]{0,1}){9,12}|([0-9][\\/]{0,1}){9,12}|([0-9][-]{0,1}){9,12}|([0-9][.]{0,1}){9,12})[0-9]{1}/;
