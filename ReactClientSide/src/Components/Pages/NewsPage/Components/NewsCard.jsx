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
    <div>
      <Box className="newsCard">
        <Card variant="outlined">
          <React.Fragment>
            <Container className="newsCardDetailsContainer">
              <div className="newsCardDetailsContainerDiv">
                <CardContent>
                  <Typography
                    className="publishedUtc"
                    color="text.secondary"
                    gutterBottom
                  >
                    {newsData.published_utc}
                  </Typography>
                  <div md={6} className="imageContainer">
                    <img className="image" src={newsData.image_url} alt="" />
                  </div>
                  <div className="titleContainer">
                    <Typography variant="h5" component="div">
                      {newsData.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {newsData.publisher.name}
                    </Typography>
                  </div>
                  <Typography className="descriptionContainer" variant="body2">
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
        </Card>
      </Box>
    </div>
  );
}
