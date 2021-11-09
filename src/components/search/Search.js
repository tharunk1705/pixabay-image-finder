import {
  Box,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  gridItems: {
    padding: "2rem",
  },
}));

const Search = (props) => {
  const classes = useStyles();

  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(15);
  const API_URL = `https://pixabay.com/api/`;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchTextChangeHandler = (event) => {
    let searchTextValue = event.target.value;
    setSearchText(searchTextValue);
    if(searchText.trim().length <= 0) {
      props.imageSetter([]);
      return;
    }
    axios
      .get(
        `${API_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
      )
      .then((res) => props.imageSetter(res.data.hits))
      .catch((error) => console.log(error));
  };
  const amountChangeHandler = async (event) => {
   setAmount(event.target.value);
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={8} className={classes.gridItems}>
          <TextField
            name="searchText"
            label="Search"
            variant="outlined"
            fullWidth
            value={searchText}
            onChange={searchTextChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={4} className={classes.gridItems}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="amount-label">Amount</InputLabel>
            <Select
              labelId="amount-label"
              label="Amount"
              name="amount"
              value={amount}
              onChange={amountChangeHandler}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
