import React from "react";
import { Card, Row,Col } from "react-bootstrap";
import  humidity  from "../images/icons/humidity.svg";
import  wind  from "../images/icons/wind.svg";
import  pressure  from "../images/icons/pressure.svg";
import sunrise from "../images/icons/day.svg";
import sunset from '../images/icons/night.svg'
import sunny from '../images/icons/sunny.svg';
import cloudynight from "../images/icons/cloudy-night.svg";
import cloudy from "../images/icons/cloudy.svg";
import perfect from "../images/icons/perfect-day.svg";
import rain from "../images/icons/rain.svg";
import rainnight from "../images/icons/rain-night.svg";
import storm from "../images/icons/storm.svg";
import snow from "../images/icons/snow.svg";
import mist from "../images/icons/mist.svg"


const WeatherIcons = {
  "01d": sunny,
  "01n": sunset,
  "02d": sunrise,
  "02n": cloudynight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfect,
  "04n": cloudynight,
  "09d": rain,
  "09n": rainnight,
  "10d": rain,
  "10n": rainnight,
  "11d": storm,
  "11n": storm,
  "13dn":snow,
  "13n":snow,
  "50d":mist,
  "50n":mist
};



const ShowWeather=(props)=>{
  const isDay = props.weather?.weather[0].icon?.includes('d')
const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}
return(
        <Card  style={{ width: '20rem',height:'30rem'}} className='showweather-card card-box text-center square rounded border border-dark' >
        <Card.Header className="header">Current-Weather</Card.Header>
        <Card.Body>
        <Card.Title className="cityname">{`City-${props.weather?.name}`}</Card.Title><Card.Title className="cityname">{`Country-${props.weather?.sys?.country}`}</Card.Title>
        <Row>
       <Col><Card.Img src={WeatherIcons[props.weather?.weather[0]?.icon]} alt={props.weather?.weather[0]?.icon} height={30} width={30}></Card.Img></Col>
       <Col><Card.Text> {`${Math.floor(props.weather?.main?.temp-273)}°C`} {`${props.weather?.weather[0]?.description}`}</Card.Text></Col>
        </Row>
        <Row>
       <Col><Card.Img src={isDay ? sunset:sunrise} height={30} width={30} alt="icon"/></Col>
       <Col><Card.Text> {`${getTime(props.weather?.sys[isDay? 'sunset': 'sunrise'])}\n${isDay?'sunset':'sunrise'}`}</Card.Text></Col>
        </Row>
        <Row>
        <Col><Card.Img src={humidity} height={30} width={30} alt="icon"/></Col>
        <Col><Card.Text>{`${props.weather?.main?.humidity}\n Humidity`}</Card.Text></Col>
        </Row>
        <Row>
        <Col><Card.Img src={wind} height={30} width={30} alt="icon"/></Col>
        <Col><Card.Text>{`${props.weather?.wind?.speed}\n Wind`}</Card.Text></Col>
        </Row>
        <Row>
        <Col><Card.Img src={pressure} height={30} width={30} alt="icon"/></Col>
        <Col><Card.Text>{`${props.weather?.main?.pressure}\n Pressure`}</Card.Text></Col>
        </Row>
        
        </Card.Body>
      </Card>
)

}

export default ShowWeather;