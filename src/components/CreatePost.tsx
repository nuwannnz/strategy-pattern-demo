import React, {useState} from "react";
import { Button, Card, Divider, IconButton, Stack, TextField, Typography} from "@mui/material";
import {EditNote as EditNoteIcon, Image as ImageIcon, Videocam as VideoIcon} from "@mui/icons-material";
import styles from './CreatePost.module.css';

enum PostType {
    Text,
    Image,
    Video,
}


export const CreatePost: React.FC = () => {
    const [postType, setPostType] = useState<PostType>(PostType.Text);

    const handleIconButtonClick = (type: PostType) => {
        setPostType(type);
    }

    const handlePublishButtonClick = () => {
        if(postType === PostType.Text){
            // logic for posting text
        } else if(postType === PostType.Image) {
            // logic for posting image
        } else if(postType === PostType.Video) {
            // logic for posting video
        }
    }

    const getPostUI = () => {
        if (postType === PostType.Text) {
            return <TextField
                id="text"
                label="Your thoughts"
                placeholder="Type here"
                multiline
                rows={4}
                variant="outlined"
            />
        } else if (postType === PostType.Image) {
            return <Card sx={{backgroundColor: '#eee', padding: 8}}>
                <Stack>
                    <Button variant="contained">Upload images</Button>
                </Stack>
            </Card>
        } else if (postType === PostType.Video) {
            return <Card sx={{backgroundColor: '#ffcdd2', padding: 8}}>
                <Stack>
                    <Button variant="contained" color="error">Record video</Button>
                </Stack>
            </Card>
        }
        return <></>
    }

    return (
        <Stack className={styles.wrapper}>
            <Typography variant="h4" align="center">Create a post</Typography>
            <Divider/>
            <Stack direction="row" justifyContent="center" spacing={2} sx={{paddingTop: '15px'}}>
                <IconButton onClick={() => handleIconButtonClick(PostType.Text)} size="large">
                    <EditNoteIcon/>
                </IconButton>
                <IconButton onClick={() => handleIconButtonClick(PostType.Image)} size="large">
                    <ImageIcon/>
                </IconButton>
                <IconButton onClick={() => handleIconButtonClick(PostType.Video)} size="large">
                    <VideoIcon/>
                </IconButton>
            </Stack>

            <Stack className={styles.uiWrapper}>
                {getPostUI()}
            </Stack>

            <Divider />

            <Stack spacing={2}>
                <Button onClick={handlePublishButtonClick} >Publish</Button>
            </Stack>
        </Stack>
    );
}