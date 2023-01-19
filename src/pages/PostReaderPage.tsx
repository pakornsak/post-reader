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
    OWNER_REGEX,
    OWNER2_REGEX,
    FRIDGE_REGEX
} from '../constants/PostReaderRegex';

const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    p: 1,
    m: 1,
    bgcolor: 'background.paper',
    borderRadius: 1,
};

const exec = (regex: RegExp, post: string) => {
    const match = regex.exec(post)
    return match || ["", "", "", ""];
}

const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [result, setResult] = useState("");

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
        // const fridge = FRIDGE_REGEX.test(post);

        const info = [
            'name: ' + name,
            'price: ' + price,
            'floor: ' + floor,
            `roomType: ${roomType}`,
            'roomSize: ' + roomSize,
            // 'owner: ' + owner,
            'tel: ' + tel,
            'Line: ' + lineID,
            // 'fridge: ' + fridge,
        ].join('\n');

        setResult(info);
    }

    return (
        <Box sx={boxStyle}>
            <TextField
                label="Facebook post"
                multiline
                rows={12}
                sx={{ display: 'flex', mb: 1 }}
                value={post}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={handleCompute}>Compute</Button>
            <TextField
                label="Result"
                multiline
                rows={9}
                sx={{ display: 'flex', mt: 1 }}
                value={result}
            />
        </Box>
    );
}

export default PostReaderPage;
