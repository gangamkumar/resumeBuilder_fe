import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const PNF = () => {
  return (
    <Box sx={{textAlign : "center" , height : 600}}>
      <img style={{width : '800px'}} src="https://elements-resized.envatousercontent.com/elements-video-cover-images/75ca6878-e2d4-4503-987c-0ad2b6007bfd/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=24291c2d4ec75b17d8467ad5f07bfab52558ab1cf087cd0174e8f8ad68803ca4" alt="" />
     <Box>
       <Button component = {Link} to={'/'} sx={{m:7}}>
        Go to Home Page
      </Button>
     </Box>
    </Box>
  )
}

export default PNF