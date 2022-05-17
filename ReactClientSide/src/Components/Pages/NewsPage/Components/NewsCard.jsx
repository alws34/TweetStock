import * as React from "react";
import "../NewsPageStyles.css";
import { Container } from "react-bootstrap";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export default function NewsCard(props) {
  const newsData = props.newsData;

  return (
    <Box className="newsCard" sx={{ border: 1 }}>
      {/* <Card sx={{ bgcolor: "" }} variant="outlined"> */}
      <React.Fragment>
        <Container className="newsCardDetailsContainer">
          <div className="newsCardDetailsContainerDiv">
            <CardContent>
              <Typography
                className="publishedUtc"
                //color="text.primary"
                //bgcolor="primary"
                gutterBottom
              >
                {new Date(newsData.published_utc).toLocaleDateString()}{" "}
                {new Date(newsData.published_utc).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
              <div md={6} className="imageContainer">
                <img className="image" src={newsData.image_url} alt="" />
              </div>
              <div className="titleContainer">
                <Typography variant="h5" component="div">
                  {newsData.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                  {/*<color="text.secondary">*/}
                  {newsData.publisher.name}
                </Typography>
              </div>
              <Typography
                className="descriptionContainer"
                variant="body2"
                maxHeight={"100vh"}
                lineHeight={1.2}
              >
                {newsData.description}
              </Typography>
            </CardContent>

            <CardActions className="buttonsContainer">
              <Button
                variant="contained"
                href={newsData.article_url}
                size="small"
              >
                Read More
              </Button>
            </CardActions>
          </div>
        </Container>
      </React.Fragment>
      {/* </Card> */}
    </Box>
  );
}
