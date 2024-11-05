import {Button, Card, IconButton, Stack} from "@mui/material";
import {Image as ImageIcon} from "@mui/icons-material";
import React from "react";
import {Post, PostStrategy, PostType} from "./types";

const getPostButton = (onClickHandler: (type: PostType) => void) => <IconButton
    onClick={() => onClickHandler(PostType.Image)} size="large">
    <ImageIcon/>
</IconButton>;

const getPostUI = () => <Card sx={{backgroundColor: '#eee', padding: 8}}>
    <Stack>
        <Button variant="contained">Upload images</Button>
    </Stack>
</Card>;

const publish = (post: Post) => {
    alert("Published image post");
};

export const imageStrategy: PostStrategy = {
    type: PostType.Image,
    getPostButton,
    getPostUI,
    publish
}