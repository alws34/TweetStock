import * as React from 'react';
import { Box } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StockAbout(props) {

  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box className="BoxItem"
        sx={{
          bgcolor: '#d3dbe8',
          color: 'black',
          p: 1,
          m: 0.4,
          marginLeft: 0,
          borderRadius: 0.8,
          textAlign: 'center',
          fontSize: '1.2rem',
          fontWeight: '700',
          display: 'flex',
          justifyContent: 'space-between',
          ...sx,
        }}
        {...other}
      />
    );
  }

  return (
    <div>
      <Row>
        <Col>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div xs={8} md={7}><Item><u>Name:</u> {props.name}</Item></div>
            <div xs={8} md={7}><Item><u>Full Name:</u> {props.fullName}</Item></div>
            <div xs={4} md={5}><Item><u>Symbol:</u> {props.symbol}</Item></div>
            <div xs={4}><Item><u>Open:</u> {props.openPrice}</Item></div>
            <div xs={4}><Item><u>Close:</u> {props.closePrice}</Item></div>
            <div xs={4}><Item><u>High:</u> {props.highPrice}</Item></div>
            <div xs={6}><Item><u>Volume:</u> {props.volume}</Item></div>
            <div xs={6}><Item><u>Average Volume:</u> {props.avgVolume}</Item></div>
          </div>
        </Col>
        <Col>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div xs={8} md={7}><Item><u>Region:</u> {props.region}</Item></div>
            <div xs={4} md={5}><Item><u>Currency:</u> {props.currency}</Item></div>
            <div xs={6}><Item><u>Change Range:</u> {props.changeRange}</Item></div>
            <div xs={6}><Item><u>52 Week Range:</u> {props.week52Range}</Item></div>
            <div xs={6}><Item><u>Bid:</u> {props.bid}</Item></div>
            <div xs={6}><Item><u>Ask:</u> {props.ask}</Item></div>
            <div xs={6}><Item><u>Market Cap:</u> {props.marketCap}</Item></div>
            <div xs={6}><Item><u>ESP:</u> {props.esp}</Item></div>
          </div>
        </Col>
      </Row>
    </div >
  )
}
