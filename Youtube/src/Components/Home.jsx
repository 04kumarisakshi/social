import { Box, Stack,Divider, Typography} from "@mui/material"
import { categories } from "./Constant"
import Video from "./Video"
import { featchFromAPI } from "../utils/Featch"
import { useEffect,useState } from "react"

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    featchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
  return (
   
 <Stack sx={{flexDirection: {sx: "column" ,md: "row"}}}>
    <Box  sx={{height:{sx:"auto",md:"92vh"},background:'#000',
  borderRight:"1px solid #3d3d3d",px: {sx: 0,md: 2}}}>
    <Stack
  direction="row"
  divider={<Divider orientation="horizontal" flexItem />}
  spacing={2}
  sx={{overflow:"auto",
  height:{sx: 'auto',md:'95%'},
  flexDirection:{md:'column'},
 
 }}
>
  {categories.map((category) => (
    <button className="category-btn"
    style={{background:"#000", color:"white",fontSize:"20px",marginBottom:"8px"}}
    key={category.name}
    onClick={() => setSelectedCategory(category.name)} >

      <span style={{ color: category.name === selectedCategory ? "white" : "#20639B", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ color: category.name === selectedCategory ?  "#20639B" :"white" }}>
          {category.name}
        </span>
    </button>
  ))}
</Stack>
   </Box>

   {/* sidebar end  */}
{/* <Box>
  <Typography>
  <span style={{color:'white',fontSize:'25px', margin:'25px'}}>Videos</span>
  </Typography>
  <Video/>
</Box> */}
<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#20639B" }}>videos</span>
        </Typography>

        <Video videos={videos} />
      </Box>
 </Stack>
  )
}

export default Home
