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
} from '../constants/PostReaderRegex';
import { exec } from '../helpers/RegExHelper';

const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    p: 1,
    m: 1,
    bgcolor: 'background.paper',
    borderRadius: 1,
    backGround: '#E7EBF0'
};

interface RoomInfo {
    name: string;
    price: string;
    floor: string;
    roomType: string;
    roomSize: string;
    owner?: string;
    tel: string;
    lineID: string;
    furniture: {
        fridge: boolean;
        tv: boolean;
        microwave: boolean;
        waterHeater: boolean;
        washingMachine: boolean;
    }
}

const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [result, setResult] = useState<RoomInfo>({} as any);
    const [copyText, setCopyText] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const post = event.target.value
            .replace(/\s\s+/g, ' ')
            .replaceAll(' : ', ': ')
            .replace('พระรามเก้า', 'Rama9')
            .replace('ชั่น', 'ชั้น')//typo
            .replace('สขุมวิท', 'สุขุมวิท')
            .replace('Parkland Condo รัชดา ท่าพระ', 'THE PARKLAND รัชดา-ท่าพระ');

        setPost(post);
    };

    const handleCompute = () => {
        const name = CondoList.find((condoName) =>
            post.toLowerCase().replaceAll(' ', '').includes(condoName.toLowerCase().replaceAll(' ', ''))) || "";

        // Info
        const price = exec(PRICE2_REGEX, post)[3] || exec(PRICE_REGEX, post.replaceAll('/', ''))[1];
        const floor = exec(FLOOR_REGEX, post)[3] || exec(FLOOR_ENG_REGEX, post)[1];
        const roomType = exec(ROOM_TYPE_REGEX, post)[1] || exec(BED_ROOM_REGEX, post)[1] + " BR";
        const roomSize = exec(ROOM_SIZE_REGEX, post)[1] || exec(ROOM_SIZE2_REGEX, post)[1];
        // const owner = exec(OWNER2_REGEX, post)[1] || exec(OWNER_REGEX, post)[2].trim();
        const tel = exec(TEL_REGEX, post)[0];
        const lineID = exec(LINE_ID_REGEX, post)[3].trim();

        // Electric
        const fridge = FRIDGE_REGEX.test(post);
        const tv = TV_REGEX.test(post);
        const microwave = MICROWAVE_REGEX.test(post);
        const waterHeater = WATER_HEATER_REGEX.test(post);
        const washingMachine = WASHING_MACHINE_REGEX.test(post);

        setResult({
            name: name,
            price: price,
            floor: floor,
            roomType: roomType,
            roomSize: roomSize,
            // owner: owner,
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
                                <CopyToClipboard text={copyText}>
                                    <Button variant="contained" color="success">Copy</Button>
                                </CopyToClipboard>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Rent price</TableCell>
                            <TableCell>{result.price}</TableCell>
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
