import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";
import "./Camera.css";
export default function Camera(props) {
  const img = props.img;
  const webRef = useRef(null);
  const Input = styled("input")({
    display: "none",
  });

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
          onClick={() => props.setParentImg(webRef.current.getScreenshot())}
        >
          <CameraAltIcon>Shoot</CameraAltIcon>
        </Button>
      )}
      <label htmlFor="contained-button-file" style={{ width: "100%" }}>
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(event) => {
            //console.log(event.target.files[0]);
            props.setParentImg(URL.createObjectURL(event.target.files[0]));
          }}
        />
        <Button fullWidth variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
