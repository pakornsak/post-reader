import React, { ChangeEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ExamplePost from '../constants/ExamplePost';
import CondoList from '../constants/CondoList';
import { PRICE_REGEX, BED_ROOM_REGEX, TEL_REGEX, ROOM_SIZE_REGEX, FLOOR_REGEX, LINE_ID_REGEX, FLOOR_ENG_REGEX, STUDIO_ROOM_REGEX } from '../constants/PostReaderRegex';

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
    return match || ["", ""];
}

const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [result, setResult] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPost(event.target.value);
    };

    const handleCompute = () => {
        const name = CondoList.find((condoName) => post.toLowerCase().includes(condoName.toLowerCase())) || "";

        const price = exec(PRICE_REGEX, post)[1];
        const floor = exec(FLOOR_REGEX, post)[2] || exec(FLOOR_ENG_REGEX, post)[1];
        const roomType = exec(STUDIO_ROOM_REGEX, post)[1] || exec(BED_ROOM_REGEX, post)[1] + " BR";
        const roomSize = exec(ROOM_SIZE_REGEX, post)[1];
        const tel = exec(TEL_REGEX, post)[0];
        const lineID = exec(LINE_ID_REGEX, post)[1].trim();

        const info = [
            'name: ' + name,
            'price: ' + price,
            'floor: ' + floor,
            `roomType: ${roomType}`,
            'roomSize: ' + roomSize,
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
