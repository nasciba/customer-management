import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./filter.scss";

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
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        defaultValue=""
        placeholder="All"
        value={selectedOption}
        onChange={(event) => handleChange(event.target.value)}
        label={label}
        className="filter-capitalize"
      >
        {displayAllOptions && (
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
        )}
        {selectOptions.map((option) => {
          return (
            <MenuItem className="filter-capitalize" key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Filter;
