import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ExamplePost from '../constants/ExamplePost';
import CondoList from '../constants/CondoList';
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
    OWNER2_REGEX,
    OWNER_REGEX,
} from '../constants/PostReaderRegex';
import { exec } from '../helpers/RegExHelper';
import { RoomInfo } from '../models/RoomInfo';
import { boxStyle } from './PostReaderPage.styled';


const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [result, setResult] = useState<RoomInfo>({} as any);
    const [copyText, setCopyText] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const post = event.target.value
            .replace(/\s\s+/g, ' ')
            .replaceAll(' : ', ': ')
            .replace('พระรามเก้า', 'Rama9')
            .replaceAll('ชั่น', 'ชั้น')//typo
            .replace('สเตชั้น', 'สเตชั่น')
            .replace('สขุมวิท', 'สุขุมวิท')//typo
            .replace('Asoak', 'Asoke')//typo
            .replace('vาย', 'ขาย')//typo
            .replace('เอ สเปซ', 'A Space')
            .replace('Parkland Condo รัชดา ท่าพระ', 'THE PARKLAND รัชดา-ท่าพระ');

        setPost(post);
    };

    const handleCompute = () => {
        const name = CondoList.find((condoName) =>
            post.toLowerCase().replaceAll(' ', '').includes(condoName.toLowerCase().replaceAll(' ', ''))) || "";

        // Info
        const sellPrice = exec(SELL_PRICE_REGEX, post)[1] || exec(SELL_PRICE1_REGEX, post)[1] || exec(SELL_PRICE2_REGEX, post)[1];
        const price = exec(PRICE2_REGEX, post)[3] || exec(PRICE_REGEX, post.replaceAll('/', ''))[1];
        const floor = exec(FLOOR_REGEX, post)[3] || exec(FLOOR_ENG_REGEX, post)[1];
        const roomType = exec(ROOM_TYPE_REGEX, post)[1] || exec(BED_ROOM_REGEX, post)[1] + " BR";
        const roomSize = exec(ROOM_SIZE_REGEX, post)[1] || exec(ROOM_SIZE2_REGEX, post)[1];
        console.log(exec(OWNER_REGEX, post))
        const owner = exec(OWNER_REGEX, post)[2] || exec(OWNER2_REGEX, post)[1].trim();
        const tel = exec(TEL_REGEX, post)[0];
        const lineID = exec(LINE_ID_REGEX, post)[3].trim();

        // Electric
        const fridge = FRIDGE_REGEX.test(post);
        const tv = TV_REGEX.test(post.replace('CCTV', ''));
        const microwave = MICROWAVE_REGEX.test(post);
        const waterHeater = WATER_HEATER_REGEX.test(post);
        const washingMachine = WASHING_MACHINE_REGEX.test(post);

        setResult({
            name: name,
            price: price,
            sellPrice: sellPrice,
            floor: floor,
            roomType: roomType,
            roomSize: roomSize,
            owner: owner,
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
        const key = 'items';
        const items: RoomInfo[] = JSON.parse(localStorage.getItem(key) || "[]");
        items.push(result);
        localStorage.setItem(key, JSON.stringify(items));
    }

    const handleCopy = () => {
        // localStorage.getItem();
        const record = [
            "",//Zone
            "",//BTS บางหว้า
            "",//600m
            result.price,//9,000
            result.roomType,//1 BR
            result.name,//Aspire สาทร-ราชพฤกษ์
            "",//Fully furnished
            "",//ready-to-move-in
            result.roomSize,//size
            result.floor,//floor
            "",//direction
            "",//Bed
            result.furniture.microwave ? "X" : "",//Microwave
            result.furniture.tv ? "X" : "",//TV
            result.furniture.sofa ? "X" : "",//Sofa
            result.furniture.waterHeater ? "X" : "",//waterHeater
            result.furniture.washingMachine ? "X" : "",//WashingMachine
            result.owner,//Owner
            result.tel,//Tel
            result.lineID,//Line
        ].join("\t");
        // console.log(record)
    }

    return (
        <Box sx={boxStyle}>
            <TextField
                label="Facebook post"
                multiline
                rows={12}
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
                            <TableCell>{result.name}</TableCell>
                            <TableCell colSpan={2}>
                                <Button variant="contained" color="success" size="small" onClick={handleSave}>Save</Button>
                                <CopyToClipboard text={copyText} onCopy={handleCopy}>
                                    <Button variant="contained" color="secondary" size="small">Copy</Button>
                                </CopyToClipboard>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{result.price ? 'Rent price' : 'Sell Price'}</TableCell>
                            <TableCell>{result.price || result.sellPrice}</TableCell>
                            <TableCell>Floor</TableCell>
                            <TableCell>{result.floor}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>{result.roomType}</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>{result.roomSize} sq.m.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>owner</TableCell>
                            <TableCell colSpan={3}>{result.owner}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tel</TableCell>
                            <TableCell>{result.tel}</TableCell>
                            <TableCell>Line</TableCell>
                            <TableCell>{result.lineID}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Electical</TableCell>
                            <TableCell colSpan={3}>
                                {result.furniture?.fridge ? <Chip label="✅ Fridge" /> : <Chip label="❌ Fridge" />}
                                {result.furniture?.tv ? <Chip label="✅ TV" /> : <Chip label="❌ TV" />}
                                {result.furniture?.microwave && <Chip label="✅ Microwave" />}
                                {result.furniture?.waterHeater && <Chip label="✅ Water Heater" />}
                                {result.furniture?.washingMachine ? <Chip label="✅ Washing Machine" /> : <Chip label="❌ Washing Machine" />}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default PostReaderPage;
