import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface FilterProps {
  label: string;
  selectOptions: string[];
  selectedOption: string;
  setOption: (option: string) => void;
  displayAllOptions: boolean;
}

const Filter = ({
  displayAllOptions,
  label,
  selectOptions,
  selectedOption,
  setOption,
}: FilterProps) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        defaultValue={selectedOption ?? ""}
        onChange={(event) => setOption(event.target.value)}
        label={label}
      >
        {displayAllOptions && (
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
        )}
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
