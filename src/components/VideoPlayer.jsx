import React, { useRef, useState } from "react";
import {
    Card,
    CardMedia,
    IconButton,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { PlayArrow, Pause, Fullscreen } from "@mui/icons-material";

const VideoPlayer = ({ src, title = "My Video" }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleFullscreen = () => {
        const video = videoRef.current;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    };

    return (
        <Card sx={{
            maxWidth: 800,
            margin: "auto",
            mt: 4,
            position: "relative",
            background: "linear-gradient(135deg, rgb(155 173 207) 0%, rgb(76 88 108) 100%)",
            padding: 2,
            borderRadius: 2,
        }}>
            <CardMedia
                component="video"
                src={src}
                ref={videoRef}
                sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    backgroundColor: "#000",
                    display: "block", // remove extra inline spacing
                    border: "none",   // forcefully remove default borders
                    outline: "none",  // remove focus outlines if any
                    margin: 0,
                    padding: 0,
                }}
                title={title}
                onClick={togglePlay}
                controls
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    color: "white",
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: 2,
                    padding: "4px 8px",
                }}
            >
                <Typography variant="subtitle2">{title}</Typography>
            </Box>

            <Stack
                direction="row"
                spacing={1}
                sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    background: "linear-gradient(135deg, rgb(155 173 207) 0%, rgb(76 88 108) 100%)",
                    borderRadius: 2,
                }}
            >
                <IconButton onClick={togglePlay} sx={{ color: "white" }}>
                    {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>

                <IconButton onClick={handleFullscreen} sx={{ color: "white" }}>
                    <Fullscreen />
                </IconButton>
            </Stack>
        </Card>
    );
};

export default VideoPlayer;
