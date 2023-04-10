import React from "react";
import { Mapcrd } from "./Mapcrd";
import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Container,
} from "@mui/material";
import { BsTruckFlatbed } from "react-icons/bs";

function Datacrd() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        rowGap="10px"
        columnGap='10px'
        sx={{ paddingLeft: "20px", paddingTop: "10px" }}
      >
        {Mapcrd &&
          Mapcrd.map((e, i) => {
            return (
              <div>
                <Grid item sm={12} md={10} lg={10} key={i}>
                  <Card
                    sx={{
                      maxWidth: 235,
                      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                  >
                    <CardActionArea>
                      <div style={{ padding: "4px" }}>
                        <CardMedia
                          component="img"
                          width="100%"
                          image={e.Img}
                          alt="green iguana"
                        />
                      </div>
                      <CardContent sx={{ padding: "9px" }}>
                        <div
                          style={{
                            fontSize: "11px",
                            fontWeight: "600",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <p>{e.title}</p>
                          <p>{e.rate}</p>
                        </div>
                        <div
                          style={{
                            fontSize: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "5px",
                            color: "#98A0AC",
                          }}
                        >
                          <p>{e.sub}</p>{" "}
                          <span style={{ fontSize: "15px" }}>•</span>
                          <p>{e.sq}</p>
                        </div>
                        <div
                          style={{
                            fontSize: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "5px",
                            color: "#98A0AC",
                          }}
                        >
                          <div style={{display:'flex',alignItems:'center'}}>
                            <BsTruckFlatbed />
                            <p style={{paddingLeft:'5px'}}>2</p>
                          </div>
                          <div style={{display:'flex',alignItems:'center'}}>
                            <BsTruckFlatbed />
                            <p style={{paddingLeft:'5px'}}>2</p>
                          </div>
                          <div style={{display:'flex',alignItems:'center'}}>
                            <BsTruckFlatbed />
                            <p style={{paddingLeft:'5px'}}>2BHK</p>
                          </div>
                        </div>
                      </CardContent>
                    </CardActionArea>
                    <CardActions sx={{padding:'0px'}}>
                      <Button
                        size="small"
                        color="primary"
                        sx={{
                          fontSize: "10px",
                          textTransform: "none",
                          margin: "0px auto",
                        }}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item sm={12} md={2} lg={2}></Grid>
              </div>
            );
          })}
      </Grid>
    </Container>
  );
}

export default Datacrd;
