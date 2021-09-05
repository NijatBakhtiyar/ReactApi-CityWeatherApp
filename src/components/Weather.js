import styled from 'styled-components'

const WeatherSec = styled.div`
    position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
    display:flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  margin: auto;
  width: 380px;
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
`;

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg"
}
export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
}



const AppLabel = styled.span`
  color:#577590;
  font-size: 18px;
  font-weight: bold;
`;
const WeatherCondition = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 30px auto;
    `;
const Condition = styled.span`
        color:#577590;
        margin: 20px auto;
        font-size: 14px;
        & span{
            font-size: 28px;
        }
    `;
const WeatherLogo = styled.img`
        width: 100px;
        height: 100px;
        margin: 5px auto
    `;
const Location = styled.span`
        color:#577590;
        font-size: 28px;
        font-weight: bold;
    `;
const WeatherInfoLabel = styled.span`
        color:#577590;
        font-size: 14px;
        font-weight: bold;
        margin: 20px 25px 10px;
        text-align: left;
        width: 100%;
    `;
const WeatherInfoContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 80px;
        width: 90;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        color: #588157;
    `;
const InfoContainer = styled.div`
        display: flex;
        margin: 5px 10px;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    `;
const InfoIcon = styled.img`
        width: 36px;
        height: 36px;
    `;
const InfoLabel = styled.span`
        display: flex;
        flex-direction: column;
        font-size: 14px;
        margin: 15px;
        & span{
            font-size: 12px;
            text-transform: capitalize;
        }
    `;
const WeatherInfoComponent = ({ name, value }) => {
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}
const Weather = ({ weather }) => {
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 10000).getMinutes()}`;
    }

    return (
        <WeatherSec>
            <AppLabel>React Weather App</AppLabel>
            <WeatherCondition>
                <Condition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> {`| ${weather?.weather[0].description}`}</Condition>
                <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} />
                <WeatherInfoComponent name="humidity" value={`${weather?.main?.humidity}%`} />
                <WeatherInfoComponent name="wind" value={`${weather?.wind?.speed} m/s`} />
                <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
            </WeatherInfoContainer>
        </WeatherSec>
    );
}

export default Weather;