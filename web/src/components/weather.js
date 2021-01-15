import Sun from '../Icons/weathers/Sun';
import Cloud from '../Icons/weathers/Cloud';
import Rain from '../assets/weathers/rain.svg';
import Snowflake from '../Icons/weathers/Snowflake';
import Wind from '../Icons/weathers/Wind';
import Fog from '../Icons/weathers/Fog';
import './weather.css';

export default function Weather(props){
    if(props.weather === "Rainy") {
        return (
            <div class='glassmorfism-rain mt-3'>
                <div class='row center'>
                    <div class='col center ml-5'>
                        <h7>Rainy</h7>
                    </div>
                    <div class='col'>
                        <div class='rain'>
                            <img src={Rain} width="50" height="50" className='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Cloudy") {
        return (
            <div class='glassmorfism-rain mt-3'>
                <div class='row center'>
                    <div class='col center ml-5'>
                        <h7>Cloudly</h7>
                    </div>
                    <div class='col'>
                        <div class='rain'>
                            <Cloud width="50" height="50" class='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Fog") {
        return (
            <div class='glassmorfism-fog mt-3'>
                <div class='row center'>
                    <div class='col center ml-5'>
                        <h7>Fog</h7>
                    </div>
                    <div class='col'>
                        <div class='rain'>
                            <Fog width="50" height="50" class='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Sunny/clear") {
        return (
            <div class='glassmorfism-clear mt-3'>
                <div class='row center'>
                    <div class='col center ml-5'>
                        <h7>Clear</h7>
                    </div>
                    <div class='col'>
                        <div class='rain'>
                            <Sun width="50" height="50" class='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Snow") {
        return (
            <div class='glassmorfism-snowy mt-3'>
                <div class='row center'>
                    <div class='col center ml-5'>
                        <h7>Snowy</h7>
                    </div>
                    <div class='col'>
                        <div class='rain'>
                            <Snowflake width="50" height="50" class='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Windy") {
        return (
            <div class='glassmorfism-clear mt-3'>
                <div class='row center'>
                    <div class='col center ml-5'>
                        <h7>Wind</h7>
                    </div>
                    <div class='col'>
                        <div class='rain'>
                            <Wind width="50" height="50" class='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='glassmorfism-cloudly mt-3'>
                <div className='row'>
                    <div className='col center ml-5'>
                        <h7>Partly Cloudy</h7>
                    </div>
                    <div className='col'>
                        <div className='cloud'>
                            <Cloud fill="#FFF" width="50" height="50"/>
                        </div>
                        <div className='sun'>
                            <Sun width="50" heigh="50"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
