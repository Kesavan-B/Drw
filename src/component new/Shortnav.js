import { Box } from "@mui/material";
import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export const Shortnav = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <section>
      <Box className="frst-nav">
        <div style={{ display: "flex", alignItems: "center",justifyContent:'space-between'}}>
          <div style={{ display: "flex", alignItems: "center"}}>
            <KeyboardArrowLeftRoundedIcon />
            <p>Shortlisted Units</p>
          </div>
          <div>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
        sx={{borderRadius:'10px',border:'none'}}
      >
        
        <MenuItem value={10}>Casagrand</MenuItem>
        <MenuItem value={20}>OMR</MenuItem>
        <MenuItem value={30}>ECR</MenuItem>
      </Select>
    </FormControl>
          </div>
        </div>
      </Box>
    </section>
  );
};
