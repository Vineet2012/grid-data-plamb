import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectCmp({
  label,
  value1,
  value2,
  value3,
  value4,
}: {
  label: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
}) {
  return (
    <FormControl style={{ width: "100%", margin: "20px" }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label={label}
        // onChange={handleChange}
      >
        <MenuItem value={10}>{value1}</MenuItem>
        <MenuItem value={20}>{value2}</MenuItem>
        <MenuItem value={30}>{value3}</MenuItem>
        <MenuItem value={30}>{value4}</MenuItem>
      </Select>
    </FormControl>
  );
}
