import {Post, PostStrategy, PostType} from "./types";
import {Button, Card, IconButton, Stack} from "@mui/material";
import {Videocam as VideoIcon} from "@mui/icons-material";
import React from "react";

const getPostButton = (onClickHandler: (type: PostType) => void) => <IconButton
    onClick={() => onClickHandler(PostType.Video)} size="large">
    <VideoIcon/>
</IconButton>;

const getPostUI = () => <Card sx={{backgroundColor: '#ffcdd2', padding: 8}}>
    <Stack>
        <Button variant="contained" color="error">Record video</Button>
    </Stack>
</Card>;

const publish = (post: Post) => {
    alert("Published video post");
};

export const videoStrategy: PostStrategy = {
    type: PostType.Video,
    getPostButton,
    getPostUI,
    publish
}