import Video from "../Models/Video";
import User from "../Models/User";
import Comment from "../Models/Comment";
import { Puneet } from "./DummyUsers";

export default [new Video(
    1,
    require("../Data/Videos/video-1.mp4"),
    "First Video",
    "First Video Test Description",
    [
        new Comment(Puneet, "Test Comment"),
        new Comment(Puneet, "Test Comment 2"),
    ],
    Puneet
),new Video(
    2,
    require("../Data/Videos/video-2.mp4"),
    "Second Video",
    "Second Video Test Description",
    [
        new Comment(Puneet, "Second Test Comment"),
        new Comment(Puneet, "Second Test Comment 2"),
    ],
    Puneet
),new Video(
    3,
    require("../Data/Videos/video-3.mp4"),
    "Third Video",
    "Third Video Test Description",
    [
        new Comment(Puneet, "Third Test Comment"),
        new Comment(Puneet, "Third Test Comment 2"),
    ],
    Puneet
),new Video(
    4,
    require("../Data/Videos/video-4.mp4"),
    "Fourth Video",
    "Fourth Video Test Description",
    [
        new Comment(Puneet, "Fourth Comment"),
        new Comment(Puneet, "Fourth Comment 2"),
    ],
    Puneet
)]
