import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface FilterProps {
  selectOptions: string[];
  selectedOption: string;
  setOption: (option: string) => void;
}

const Filter = ({ selectOptions, selectedOption, setOption }: FilterProps) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
      <InputLabel id="demo-simple-select-standard-label">Industry</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={selectedOption}
        onChange={(event) => setOption(event.target.value)}
        label="Industry"
      >
        {selectOptions.map((option) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Filter;
