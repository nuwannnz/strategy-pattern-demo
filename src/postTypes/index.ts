import {textStrategy} from "./textStrategy";
import {imageStrategy} from "./imageStrategy";
import {videoStrategy} from "./videoStrategy";
import {PostStrategy, PostType} from "./types";



export const PostStrategies = new Map<PostType, PostStrategy>([
    [PostType.Text, textStrategy],
    [PostType.Image, imageStrategy],
    [PostType.Video, videoStrategy],
]);
