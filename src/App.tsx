import { Box, styled, IconButton } from "@mui/material";
import React, { useCallback, useState } from "react";

//@ts-ignore
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Gallery from "react-photo-gallery";

import { photos } from "./constants";

import CloseIcon from "@mui/icons-material/Close";

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(1),
}));

const Container = styled(Box)(({ theme }) => ({
  background: "#000",
}));

export default function App() {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const viewImage = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setOpenCarousel(true);
  }, []);
  const handleError = useCallback((event: any, { photo, index }: any) => {
    console.log(event);
  }, []);

  return (
    <Container>
      {openCarousel ? (
        <Box>
          <Header>
            <IconButton
              onClick={() => setOpenCarousel(false)}
              sx={{
                background: "#fff",
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <CloseIcon fontSize="small" sx={{ color: "#000" }} />
            </IconButton>
          </Header>
          <ImageGallery
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            infinite={true}
            items={photos}
            startIndex={currentImage}
            onImageError={handleError}
          />
        </Box>
      ) : (
        <Gallery photos={photos} onClick={viewImage} />
      )}
    </Container>
  );
}
