import React, {useMemo, useState} from "react";
import {Button, Divider, Stack, Typography} from "@mui/material";
import styles from './CreatePost.module.css';
import {PostStrategies} from "../postTypes";
import {Post, PostStrategy, PostType} from "../postTypes/types";


export const CreatePost: React.FC = () => {
    const [post, setPost] = useState<Post>()
    const [postType, setPostType] = useState<PostType>(PostType.Text);

    const postStrategy = useMemo<PostStrategy | undefined>(() => {
        return PostStrategies.get(postType) as PostStrategy;
    }, [postType])

    const handleIconButtonClick = (type: PostType) => {
        setPostType(type);
    }

    const handlePostChanged = (updatedPost: Post) => {
        setPost(updatedPost);
    }

    const handlePublishButtonClick = () => {
        postStrategy?.publish(post as Post);
    }

    return (
        <Stack className={styles.wrapper}>
            <Typography variant="h4" align="center">Create a post</Typography>
            <Divider/>
            <Stack direction="row" justifyContent="center" spacing={2} sx={{paddingTop: '15px'}}>
                {Array.from(PostStrategies.keys()).map(key => PostStrategies.get(key)?.getPostButton(handleIconButtonClick))}
            </Stack>

            <Stack className={styles.uiWrapper}>
                {postStrategy?.getPostUI(handlePostChanged)}
            </Stack>

            <Divider/>

            <Stack spacing={2}>
                <Button onClick={handlePublishButtonClick}>Publish</Button>
            </Stack>
        </Stack>
    );
}