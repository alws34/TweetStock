import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";
import "./Camera.css";
import heic2any from "heic2any";

import Resizer from "react-image-file-resizer";

const blobToBase64 = async (blobFile) => {
  // convert a file (blob) to base64
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blobFile);
  });
};

const compressFile = async (blobFile) => {
  // compress a file (blob) to a desired quality [0...100] - will also convert to base64
  const quality = 80; // [0...100]
  const format = "JPEG"; // Can be either JPEG, PNG or WEBP.
  const outputType = "base64"; // Can be either base64, blob or file. (Default type is base64)
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      blobFile,
      300,
      400,
      format,
      quality,
      0,
      (uri) => {
        resolve(uri);
      },
      outputType
    );
  });
};

export default function Camera(props) {
  const img = props.img;
  const webRef = useRef(null);
  const Input = styled("input")({
    display: "none",
  });

  const setImage = (blobFile) => {
    //either use compressFile() or blobToBase64()
    compressFile(blobFile).then((compressedBase64File) => {
      props.setParentImg(compressedBase64File);
    });
  };

  return (
    <div className="camera">
      {img ? <img src={img} alt="" /> : <Webcam ref={webRef} />}
      {img ? (
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => props.setParentImg(null)}
        >
          Retake
        </Button>
      ) : (
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            return props.setParentImg(webRef.current.getScreenshot());
          }}
        >
          <CameraAltIcon>Shoot</CameraAltIcon>
        </Button>
      )}
      <label htmlFor="contained-button-file" style={{ width: "100%" }}>
        <Input
          accept=".jpeg, .jpg, .jpe, .heic, .png" //"image/*"
          id="contained-button-file"
          type="file"
          onChange={(event) => {
            let blobFile = event.target.files[0];
            if (
              blobFile.type.toLowerCase() === "image/heic" ||
              blobFile.name.toLowerCase().includes(".heic")
            ) {
              heic2any({
                blob: blobFile,
                toType: "image/jpg",
                quality: 1,
              }).then((newImage) => {
                //const url = URL.createObjectURL(newImage);
                //https://codesandbox.io/s/kmdh7?file=/src/index.js:1014-1017
                setImage(newImage);
              });
            } else {
              setImage(blobFile);
            }
          }}
        />
        <Button fullWidth variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
