import { Toolbar, Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import ImageResults from "./components/image-results/ImageResults";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  container: {
    marginTop: "3rem",
  },
});

const App = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  const imageSetter = (imgArr) => {
    setImages(imgArr);
  };

  return (
    <>
      <Navbar />
      <Toolbar />
      <Container className={classes.container}>
        <Search imageSetter={imageSetter} />
        <Container>
          {images.length > 0 ? (
            <ImageResults images={images} />
          ) : (
            <Alert severity="warning">No Images Found!</Alert>
          )}
        </Container>
      </Container>
    </>
  );
};
export default App;
