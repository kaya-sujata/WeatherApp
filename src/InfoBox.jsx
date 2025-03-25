import WeatherApp from "./WeatherApp";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/611879528/photo/evening-over-noida-delhi-buildings.jpg?s=612x612&w=0&k=20&c=_lwWWz61LfwXzOZAvzUPbHeOmjHZzVDK4takIEB7Oms=";
    
    const HOT_URL="https://media.istockphoto.com/id/471298483/photo/sunny-bright-blue-sky-with-clouds.webp?b=1&s=170667a&w=0&k=20&c=1iZzOaxW2IyuuzqjB7_vqB8TkEq4GuHdjv1lpjeqbYk=";
    const COLD_URL="https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=612x612&w=0&k=20&c=LKgdYGIdh94AZ9Q5F9IE5TSHY1zz4oP4uauG79KIN8w=";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";

    return(
        <div className="InfoBox">
<div className="cardContainer">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?
          RAIN_URL:info.temp>15
          ?HOT_URL:COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>TemperatureMax={info.tempMax}&deg;C</p>
          <p>TemperatureMin={info.tempMin}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>The Weather can be described as <i>{info.weather}</i> and Feels Like={info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}