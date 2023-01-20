export interface RoomInfo {
  name: string;
  price: string;
  sellPrice: string;
  floor: string;
  roomType: string;
  roomSize: string;
  owner?: string;
  telName: string;
  tel: string;
  lineID: string;
  furniture: {
    sofa?: boolean;
    fridge: boolean;
    tv: boolean;
    microwave: boolean;
    waterHeater: boolean;
    washingMachine: boolean;
  };
}
