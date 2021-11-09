import {
  ImageList,
  ImageListItem,
  IconButton,
  Dialog,
  Button,
  ImageListItemBar,
  Box,
  makeStyles,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  icon: {
    color: "white",
  },
});

const ImageResults = (props) => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const { images } = props;
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if(window.screen.width <= 425) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, [])

  let imageListContent = (
    <ImageList cols={isMobileView ? 1 : 3}>
      {images.map((img) => (
        <ImageListItem key={img.id}>
          <img src={img.largeImageURL} alt={img.tags} />
          <ImageListItemBar
            title={img.tags}
            subtitle={
              <span>
                by <strong>{img.user}</strong>{" "}
              </span>
            }
            actionIcon={
              <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                <ZoomInIcon className={classes.icon} />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

  const handleOpen = (img) => {
    setIsDialogOpen(true);
    setCurrentImg(img);
  };
  const handleClose = () => {
    setIsDialogOpen(false);
    setCurrentImg("");
  };

  return (
    <Box>
      {imageListContent}
      <Dialog keepMounted open={isDialogOpen} onClose={handleClose}>
        <DialogContent>
          <img src={currentImg} style={{ width: "100%" }} alt="requested" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ImageResults;
