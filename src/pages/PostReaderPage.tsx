import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
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
} from '../constants/PostReaderRegex';

const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    p: 1,
    m: 1,
    bgcolor: 'background.paper',
    borderRadius: 1,
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
    }
}

const exec = (regex: RegExp, post: string) => {
    const match = regex.exec(post)
    return match || ["", "", "", ""];
}

const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [result, setResult] = useState<RoomInfo>({} as any);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const post = event.target.value
            .replace(/\s\s+/g, ' ')
            .replaceAll(' : ', ': ')
            .replace('พระรามเก้า', 'Rama9')
            .replace('Parkland Condo รัชดา ท่าพระ', 'THE PARKLAND รัชดา-ท่าพระ')

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

        // Furniture
        const fridge = FRIDGE_REGEX.test(post);

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
                fridge: fridge
            }
        });
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
            {/* <TextField
                label="Result"
                multiline
                rows={9}
                sx={{ display: 'flex', mt: 1 }}
                value={result}
            /> */}
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Condo name</TableCell>
                            <TableCell colSpan={3}>{result.name}</TableCell>
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
                            <TableCell>Funiture</TableCell>
                            <TableCell colSpan={3}>{result.furniture.fridge ? 'fridge' : ''}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default PostReaderPage;
