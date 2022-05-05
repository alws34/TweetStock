import * as React from "react";
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
  return (
    <div>
      <Box
        sx={{
          minWidth: 275,
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Card variant="outlined">
          <React.Fragment>
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 700,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {props.published_utc}
                  </Typography>
                  <div
                    md={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 5,
                    }}
                  >
                    <img
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 300,
                        borderRadius: 5,
                      }}
                      height="160"
                      width="300"
                      src={props.image_url}
                      alt=""
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h5" component="div">
                      {props.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {props.author}
                    </Typography>
                  </div>
                  <Typography variant="body2">{props.description}</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    href={props.article_url}
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
