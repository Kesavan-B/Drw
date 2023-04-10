import { Box, Container } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { appli1 } from '../assests/Imggrp';



function Appli() {
  return (
    <Container maxWidth="xl">
    <div className='applic'>
      <div className='crd-ttl'>
        <p className="para-style">Applications</p>
      </div>
      <Box className="crd-Appl">
      <Card sx={{ maxWidth: 220,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image={appli1}
          alt="green iguana"
          sx={{maxWidth:'175px',margin:'0px auto'}}
        />
        
        <CardContent sx={{textAlign:'center'}}>
          <Typography variant="paragraph" color="text.secondary" >
          Howdy! You haven't added any applications yet.
          </Typography>
        </CardContent>
        </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant='contained' sx={{margin :'0px auto',textTransform:'none'}}>
          + Add Application
        </Button>
      </CardActions>
    </Card>
      </Box>
    </div>
    </Container>
  )
}

export default Appli
