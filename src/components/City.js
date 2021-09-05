import styled from 'styled-components'

const CitySec = styled.div`
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
  width: 380px;
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  animation: monFrame 0.7s linear 0s ;

  @keyframes monFrame {
	  0%   {left:50%; top:0;}
	  100% {left:50%; top:50%;}
     }
`

const AppLabel = styled.span`
  color:#577590;
  font-size: 18px;
  font-weight: bold;
`
const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`
const ChooseCityLabel = styled.span`
    color: #577590;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`
const SearchBox = styled.form`
    display: flex;
    border-radius: 2px;
    color: black;
    font-weight: bold;
    margin: 20px auto;
    box-shadow: 0 3px 6px 0 #555;
    border-radius: 6px;
    & input{
        padding: 10px;
        font-size:14px;
        border: none;
        outline: none;
        font-weight: bold;
        color: #588157;
        border-radius: 6px;
    }
    & button{
        padding: 10px;
        font-size:14px;
        border: none;
        outline: none;
        font-weight: bold;
        color: white;
        // background: #a9def9;
        background: #588157;
        border-radius: 6px;
        cursor: pointer;
    }
`

const City = ({updateCity, fetchWeather}) => {
    return (
        <CitySec>
            <AppLabel>React Weather App</AppLabel>
            <WeatherLogo src="/icons/perfect-day.svg" />
            <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input type="text" placeholder="City"
                onChange={(e) => updateCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </SearchBox>
        </CitySec>
    );
}
 
export default City;