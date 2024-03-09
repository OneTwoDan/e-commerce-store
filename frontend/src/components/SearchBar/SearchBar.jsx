import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      variant="outlined"
      size="small"
      sx={{ width: "350px" }}
      InputProps={{
        startAdornment: (
          <SearchIcon
            sx={{ color: "action.active", mr: 1, pointerEvents: "none" }}
            aria-hidden="true"
          />
        ),
      }}
    />
  );
};

export default SearchBar;
