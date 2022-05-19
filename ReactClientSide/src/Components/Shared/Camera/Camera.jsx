import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";
import "./Camera.css";

const blobToBase64 = async (blobFile) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blobFile);
  });
};

export default function Camera(props) {
  const img = props.img;
  const webRef = useRef(null);
  const Input = styled("input")({
    display: "none",
  });

  const setImage = (blobFile) => {
    console.log(blobFile);
    blobToBase64(blobFile).then((base64File) => {
      console.log(base64File);
      props.setParentImg(base64File);
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
            console.log(webRef.current.getScreenshot());
            return props.setParentImg(webRef.current.getScreenshot());
          }}
        >
          <CameraAltIcon>Shoot</CameraAltIcon>
        </Button>
      )}
      <label htmlFor="contained-button-file" style={{ width: "100%" }}>
        <Input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(event) => {
            let blobFile = event.target.files[0];
            setImage(blobFile);
          }}
        />
        <Button fullWidth variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
