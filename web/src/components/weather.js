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
            <div className='glassmorfism-rain mt-3'>
                <div className='row center'>
                    <div className='col center ml-5'>
                        <h7>Rainy</h7>
                    </div>
                    <div className='col'>
                        <div className='rain'>
                            <img src={Rain} width="50" height="50" className='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Cloudy") {
        return (
            <div className='glassmorfism-rain mt-3'>
                <div className='row center'>
                    <div className='col center ml-5'>
                        <h7>Cloudly</h7>
                    </div>
                    <div className='col'>
                        <div className='rain'>
                            <Cloud width="50" height="50" className='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Fog") {
        return (
            <div className='glassmorfism-fog mt-3'>
                <div className='row center'>
                    <div className='col center ml-5'>
                        <h7>Fog</h7>
                    </div>
                    <div className='col'>
                        <div className='rain'>
                            <Fog width="50" height="50" className='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Sunny/clear") {
        return (
            <div className='glassmorfism-clear mt-3'>
                <div className='row center'>
                    <div className='col center ml-5'>
                        <h7>Clear</h7>
                    </div>
                    <div className='col'>
                        <div className='rain'>
                            <Sun width="50" height="50" className='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Snow") {
        return (
            <div className='glassmorfism-snowy mt-3'>
                <div className='row center'>
                    <div className='col center ml-5'>
                        <h7>Snowy</h7>
                    </div>
                    <div className='col'>
                        <div className='rain'>
                            <Snowflake width="50" height="50" className='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Windy") {
        return (
            <div className='glassmorfism-clear mt-3'>
                <div className='row center'>
                    <div className='col center ml-5'>
                        <h7>Wind</h7>
                    </div>
                    <div className='col'>
                        <div className='rain'>
                            <Wind width="50" height="50" className='rain'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(props.weather === "Partly cloudy") {
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
    } else {
        return (<p> Sinto muito, não encontrei o clima que você pediu! </p>)
    }
}
