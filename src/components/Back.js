import { Container, Grid } from '@mui/material'
import React from 'react'
import Appli from './Appli'
import Loaders from './Loaders'
import DoneIcon from '@mui/icons-material/Done';


function Back() {
  return (
    <div className='back1'>
      <section >
        <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{paddingTop:"120px" ,paddingBottom:'50px',margin:'0px auto',rowGap:'10px'}}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center'}}>
            <div className='white'>
              <div className='load-cont'>
                <h2>CPU</h2>
                <div style={{paddingTop:'10px',position:'relative'}}>
                  <Loaders/>
                  <div style={{position:'absolute',bottom:'13px',left:'86px'}}>
                  <DoneIcon/>
                  </div>
                </div>
                <h3 style={{paddingTop:'10px'}}>70%</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center'}}>
          <div className='white'>
          <div className='load-cont'>
                <h3>Disk</h3>
                <div style={{paddingTop:'10px',position:'relative'}}>
                  <Loaders/>
                  <div style={{position:'absolute',bottom:'13px',left:'86px'}}>
                  <DoneIcon/>
                  </div>
                </div>
                <div style={{paddingTop:'10px'}}>
                <h3>70%</h3>  
                </div>
              </div>
          </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center'}}>
          <div className='white'>
          <div className='load-cont'>
                <h3 >Memory</h3>
                <div style={{paddingTop:'10px',position:'relative'}}>
                  <Loaders/>
                  <div style={{position:'absolute',bottom:'13px',left:'86px'}}>
                  <DoneIcon/>
                  </div>
                </div>
                <h3 style={{paddingTop:'10px'}}>70%</h3>
              </div>
          </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} sx={{display:'flex',justifyContent:'center'}}>
          <div className='white'>
          <div className='load-cont'>
                <h3>Applications</h3>
                <div style={{paddingTop:'20px'}}>
                  <h1>0</h1>
                </div>
              </div>

          </div>
          </Grid>
        </Grid>
        </Container>
      </section>
      <Grid>
        <Appli/>
      </Grid>
    </div>
  )
}

export default Back
