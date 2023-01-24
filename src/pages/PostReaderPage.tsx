import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Chip, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ExamplePost from '../constants/ExamplePost';
import CondoList, { Property } from '../constants/CondoList';
import {
    PRICE_REGEX,
    PRICE2_REGEX,
    BED_ROOM_REGEX,
    TEL_REGEX,
    ROOM_SIZE_REGEX,
    ROOM_SIZE2_REGEX,
    FLOOR_REGEX,
    LINE_ID_REGEX,
    FLOOR_ENG_REGEX,
    ROOM_TYPE_REGEX,
    FRIDGE_REGEX,
    TV_REGEX,
    MICROWAVE_REGEX,
    WASHING_MACHINE_REGEX,
    WATER_HEATER_REGEX,
    SELL_PRICE_REGEX,
    SELL_PRICE2_REGEX,
    SELL_PRICE1_REGEX,
    OWNER_REGEX,
    TEL_NAME_REGEX,
    TEL_NAME2_REGEX,
    BTS_MRT_REGEX,
} from '../constants/PostReaderRegex';
import { exec } from '../helpers/RegExHelper';
import { RoomInfo } from '../models/RoomInfo';
import { boxStyle } from './PostReaderPage.styled';

const ITEMS_KEY = 'items';

const toStringLine = (room: RoomInfo): string => {
    const record = [
        "",//Zone
        room.station,//BTS บางหว้า
        "",//600m
        room.price,//9,000
        room.roomType,//1 BR
        room.name,//Aspire สาทร-ราชพฤกษ์
        "",//Fully furnished
        "",//ready-to-move-in
        room.roomSize,//size
        room.floor,//floor
        "",//direction
        "",//Bed
        room.furniture.microwave ? "X" : "",//Microwave
        room.furniture.tv ? "X" : "",//TV
        room.furniture.sofa ? "X" : "",//Sofa
        room.furniture.waterHeater ? "X" : "",//waterHeater
        room.furniture.washingMachine ? "X" : "",//WashingMachine
        room.owner,//Owner
        room.tel + (room.telName ? ` (${room.telName})` : ''),//Tel
        room.lineID,//Line
    ].join("\t");
    return record;
}

const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [room, setRoom] = useState<RoomInfo>({} as any);
    const [copyText, setCopyText] = useState("");
    const [modal, setModal] = React.useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const post = event.target.value
            .replace(/\s\s+/g, ' ')
            .replaceAll(' : ', ': ')
            .replace('Top contributor · ', '')
            .replace(/ shared a (Marketplace post|link|post)\./, '')
            .replace('Owner Only ปล่อยเช่าและขายคอนโดจากเจ้าของโดยตรง', '')
            .replace(/ is at .+\n/, '\n')
            .replace(/\w+ \d{1,2} at \d{1,2}:\d{2} (AM|PM)/i, '1d')
            .replace(/\w+ \d{1,2}, \d{4}/i, '1m')
            .replaceAll('ค่ะ', '')
            .replace(/ติดต่อ line/i, 'ติดต่อ\nline')
            .replace('ห้อง Stu', 'ห้อง Studio')
            .replace('พระรามเก้า', 'Rama 9')
            .replaceAll('ชั่น', 'ชั้น')//typo
            .replace('สเตชั้น', 'สเตชั่น')//typo
            .replace('สขุมวิท', 'สุขุมวิท')//typo
            .replace('vาย', 'ขาย')//typo
            ;
        setPost(post);
    };

    const findCondoName = (condo: Property, post: string) => {
        const enPost = post
            .replace('หลังสวน', 'langsuan')
            .replace('สุขุมวิท', 'sukhumvit')
            .replace('เพชรเกษม', 'Phetkasem')
            .replace('เอสเปซ', 'aspace')
            .replaceAll(' ', '');
        const thPost = post
            .replace('ideo', 'ไอดีโอ')
            .replaceAll(' ', '');
        return (
            enPost.includes(condo.en.toLowerCase().replaceAll(' ', '').replace('-', '')) ||
            (condo.th &&
                thPost.includes(condo.th?.toLowerCase().replaceAll(' ', '').replace('-', '')))
        )
    }

    const handleCompute = () => {
        const modifiedPost = post
            .replace('LPN', 'Lumpini')
            .replace('Chatujak', 'Chatuchak')//typo
            .replace('Bluecove', 'Blucove')//typo
            .replace('พาร์ค', 'ปาร์ค')
            .replace('บดินทร์เดชา', 'บดินทรเดชา')//typo
            .replace('รีสอร์ต', 'รีสอร์ท')
            .replace('เซนทริค', 'เซ็นทริค')
            .replace('Huaikwang', 'Huaikhwang')//typo
            .replace('Knightbridge', 'KnightsBridge')
            .replace('Asoak', 'Asoke')//typo
            .replace('Parkland Condo รัชดา ท่าพระ', 'THE PARKLAND รัชดา-ท่าพระ')
            .toLowerCase()
            .replaceAll(' ', '')
            .replace('-', '')

        const condo = CondoList.find((condo) => findCondoName(condo, modifiedPost));
        const name = condo?.en || "";

        // Info
        const sellPrice = exec(SELL_PRICE_REGEX, post)[1] || exec(SELL_PRICE1_REGEX, post)[1] || exec(SELL_PRICE2_REGEX, post)[1];
        const station = exec(BTS_MRT_REGEX, post)[0];
        const price = exec(PRICE2_REGEX, post)[3] || exec(PRICE_REGEX, post.replaceAll('/', ''))[1];
        const floor = exec(FLOOR_REGEX, post)[3] || exec(FLOOR_ENG_REGEX, post)[1];
        const roomType = exec(ROOM_TYPE_REGEX, post)[1] || exec(BED_ROOM_REGEX, post)[1] + " BR";
        const roomSize = exec(ROOM_SIZE_REGEX, post)[1] || exec(ROOM_SIZE2_REGEX, post)[1];
        const owner = exec(OWNER_REGEX, post)[1]
        const telName = exec(TEL_NAME_REGEX, post)[2] || exec(TEL_NAME2_REGEX, post)[8];
        const tel = exec(TEL_REGEX, post)[0];
        const lineID = exec(LINE_ID_REGEX, post)[3]?.trim();

        // console.log(exec(BTS_MRT_REGEX, post));

        // Electrical appliances
        const fridge = FRIDGE_REGEX.test(post);
        const tv = TV_REGEX.test(post.replace('CCTV', ''));
        const microwave = MICROWAVE_REGEX.test(post);
        const waterHeater = WATER_HEATER_REGEX.test(post);
        const washingMachine = WASHING_MACHINE_REGEX.test(post);

        setRoom({
            name: name,
            price: price,
            sellPrice: sellPrice,
            floor: floor,
            roomType: roomType,
            roomSize: roomSize,
            station: station,
            owner: owner,
            telName: telName,
            tel: tel,
            lineID: lineID,
            furniture: {
                fridge: fridge,
                tv: tv,
                microwave: microwave,
                waterHeater: waterHeater,
                washingMachine: washingMachine,
            }
        });
        setCopyText(name);
    }

    const handleSave = () => {
        const items: string[] = JSON.parse(localStorage.getItem(ITEMS_KEY) || "[]");
        items.push(toStringLine(room));
        localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
        setCopyText(items.join("\n"));
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <Box sx={boxStyle}>
            <TextField
                label="Facebook post"
                multiline
                rows={11}
                sx={{ display: 'flex' }}
                value={post}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={handleCompute} sx={{ my: 1 }}>Compute</Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Condo name</TableCell>
                            <TableCell>{room.name}</TableCell>
                            <TableCell colSpan={2}>
                                <Button variant="contained" color="primary" size="small" onClick={handleSave}>Save</Button>
                                <CopyToClipboard text={copyText} onCopy={() => console.log(copyText)}>
                                    <Button variant="contained" color="success" size="small">Copy</Button>
                                </CopyToClipboard>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>BTS/MRT</TableCell>
                            <TableCell colSpan={3}>{room.station}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{room.price ? 'Rent price' : 'Sell Price'}</TableCell>
                            <TableCell>{room.price || room.sellPrice}</TableCell>
                            <TableCell>Floor</TableCell>
                            <TableCell>{room.floor}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>{room.roomType}</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>{room.roomSize} sq.m.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>owner</TableCell>
                            <TableCell colSpan={3}>{room.owner}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tel</TableCell>
                            <TableCell>{room.tel}{room.telName && ` (${room.telName})`}</TableCell>
                            <TableCell>Line</TableCell>
                            <TableCell>{room.lineID}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Electical</TableCell>
                            <TableCell colSpan={3}>
                                {room.furniture?.fridge ? <Chip label="✅ Fridge" /> : <Chip label="❌ Fridge" />}
                                {room.furniture?.tv ? <Chip label="✅ TV" /> : <Chip label="❌ TV" />}
                                {room.furniture?.microwave && <Chip label="✅ Microwave" />}
                                {room.furniture?.waterHeater && <Chip label="✅ Water Heater" />}
                                {room.furniture?.washingMachine ? <Chip label="✅ Washing Machine" /> : <Chip label="❌ Washing Machine" />}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={modal}
                onClose={handleClose}
                message="Saved successfully"
            />
        </Box>
    );
}

export default PostReaderPage;
