import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./filter.css";

interface FilterProps {
  label: string;
  selectOptions: string[];
  selectedOption: string;
  handleChange: (option: string) => void;
  displayAllOptions: boolean;
}

const Filter = ({
  displayAllOptions,
  label,
  selectOptions,
  selectedOption,
  handleChange,
}: FilterProps) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        defaultValue=""
        value={selectedOption}
        onChange={(event) => handleChange(event.target.value)}
        label={label}
        className="capitalize-word"
      >
        {displayAllOptions && (
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
        )}
        {selectOptions.map((option) => {
          return (
            <MenuItem className="capitalize-word" key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Filter;
