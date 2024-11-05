import {ReactNode} from "react";

export interface Post {
    // post type, could be generic ex: Post<Text> / Post<Image>
}

export enum PostType {
    Text,
    Image,
    Video,
}

export interface PostStrategy{
    type: PostType;
    getPostButton: (onClickHandler: (type: PostType) => void) => ReactNode;
    getPostUI: (onChangeHandler: (post: Post) => void) => ReactNode;
    publish: (post: Post) => void;
}