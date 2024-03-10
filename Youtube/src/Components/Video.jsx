
import { Stack, Box } from "@mui/material";
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Video = ({videos, direction }) => {
  // if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {/* Check for array and display a message if not */}
    {Array.isArray(videos) ? (
      videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
        
      ))
    ) : (
      <p>No videos available.</p> // Or any appropriate message
    )}
  </Stack>
  );
}

export default Video;