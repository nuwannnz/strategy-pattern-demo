import {Post, PostStrategy, PostType} from "./types";
import {IconButton, TextField} from "@mui/material";
import {EditNote as EditNoteIcon} from "@mui/icons-material";
import React from "react";

const getPostButton = (onClickHandler: (type: PostType) => void) => <IconButton
    onClick={() => onClickHandler(PostType.Text)} size="large">
    <EditNoteIcon/>
</IconButton>;

const getPostUI = () => <TextField
    id="text"
    label="Your thoughts"
    placeholder="Type here"
    multiline
    rows={4}
    variant="outlined"
/>

const publish = (post: Post) => {
    alert("Published text post");
};

export const textStrategy: PostStrategy = {
    type: PostType.Text,
    getPostButton,
    getPostUI,
    publish,
}