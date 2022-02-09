import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Row, Col, Container } from 'react-bootstrap';

export default function New(props) {
  return (
    <div>
      <Box sx={{
        minWidth: 275, flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <Card variant="outlined"><React.Fragment>
          <Container style={{display: 'flex', flexDirection: 'row'}}>
                <img style={{display: 'flex', flexDirection: 'column'}}
                  height="160"
                  width="300"
                  src={props.image_url}
                  alt=""
                />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.published_utc}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {props.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.author}
                  </Typography>
                  <Typography variant="body2">
                    {props.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href={props.article_url} size="small">Read More</Button>
                </CardActions>
                </div>
          </Container>
        </React.Fragment>
        </Card>
      </Box >
    </div >
  );
}
