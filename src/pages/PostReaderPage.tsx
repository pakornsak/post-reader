import React, { ChangeEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
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
    OWNER_REGEX
} from '../constants/PostReaderRegex';

const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    p: 1,
    m: 1,
    bgcolor: 'background.paper',
    borderRadius: 1,
};

const exec = (regex: RegExp, input: string) => {
    const match = regex.exec(input)
    return match || ["", "", "", ""];
}

const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [result, setResult] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPost(event.target.value);
    };

    const handleCompute = () => {
        const input = post
            .replace(/\s\s+/g, ' ')
            .replaceAll(' : ', ': ')
            .replace('พระรามเก้า', 'Rama9')
            .replace('Parkland Condo รัชดา ท่าพระ', 'THE PARKLAND รัชดา-ท่าพระ')
            ;
        const name = CondoList.find((condoName) => input.toLowerCase().includes(condoName.toLowerCase())) || "";

        const price = exec(PRICE_REGEX, input.replaceAll('/', ''))[1] || exec(PRICE2_REGEX, input)[3];
        const floor = exec(FLOOR_REGEX, input)[3] || exec(FLOOR_ENG_REGEX, input)[1];
        const roomType = exec(ROOM_TYPE_REGEX, input)[1] || exec(BED_ROOM_REGEX, input)[1] + " BR";
        const roomSize = exec(ROOM_SIZE_REGEX, input)[1] || exec(ROOM_SIZE2_REGEX, input)[1];
        const owner = exec(OWNER_REGEX, input)[3].trim();
        const tel = exec(TEL_REGEX, input)[0];
        const lineID = exec(LINE_ID_REGEX, input)[3].trim();

        const info = [
            'name: ' + name,
            'price: ' + price,
            'floor: ' + floor,
            `roomType: ${roomType}`,
            'roomSize: ' + roomSize,
            'owner: ' + owner,
            'tel: ' + tel,
            'Line: ' + lineID,
        ].join('\n');

        setResult(info);
    }

    return (
        <Box sx={boxStyle}>
            <TextField
                label="Facebook post"
                multiline
                rows={15}
                sx={{ display: 'flex', mb: 1 }}
                value={post}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={handleCompute}>Compute</Button>
            <TextField
                label="Result"
                multiline
                rows={8}
                sx={{ display: 'flex', mt: 1 }}
                value={result}
            />
        </Box>
    );
}

export default PostReaderPage;
