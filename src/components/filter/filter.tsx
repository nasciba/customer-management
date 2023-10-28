import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

interface FilterProps {
  menuOptions: string[];
}

const Filter = ({ menuOptions }: FilterProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-standard-label">Industry</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        label="Industry"
      >
        {menuOptions.map((option) => {
          return <MenuItem key={option} value={option}>{option}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Filter;
