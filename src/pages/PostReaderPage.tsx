import React, { ChangeEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ExamplePost from '../constants/ExamplePost';
import CondoList from '../constants/CondoList';
import { PRICE_REGEX, BED_ROOM_REGEX, TEL_REGEX, ROOM_SIZE_REGEX } from '../constants/PostReaderRegex';

const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    p: 1,
    m: 1,
    bgcolor: 'background.paper',
    borderRadius: 1,
};

const PostReaderPage = () => {
    const [post, setPost] = useState(ExamplePost);
    const [result, setResult] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPost(event.target.value);
    };

    const handleCompute = () => {
        const name = CondoList.find((condoName) => post.includes(condoName)) || "";
        const price = PRICE_REGEX.exec(post)![1];
        const bedRooms = BED_ROOM_REGEX.exec(post)![1];
        const roomSize = ROOM_SIZE_REGEX.exec(post)![1];
        const tel = TEL_REGEX.exec(post)![0];

        const info = [
            'name: ' + name,
            'price: ' + price,
            'roomType: ' + `${bedRooms} BR`,
            'roomSize: ' + roomSize,
            'tel: ' + tel,
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
