import Vue from 'vue'
import Component from 'vue-class-component'
import axios from "axios"
import WeatherResponseINTF from "@/interfaces/WeatherResponseINTF";

@Component
export default class Today extends Vue {

    // *** Component Data
    step = 1;
    apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=52.231589&lon=5.189039&exclude=minutely,hourly&units=metric&lang=nl&appid=d1e902b667baccdb37cfbc96ad629f00"
    apiCallError: Record<string, unknown> = {};
    currentDate = new Date().toLocaleDateString('nl-NL',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    today: WeatherResponseINTF = {
        date: null,
        condition: "",
        nowTemp: null,
        dayTemp: null,
        minTemp: null,
        maxTemp: null,
        icon: null,
    };
    apiResponse: Record<any, any> = {};
    week: Record<any, any> = [];

    // *** Component MOUNTED lifecycle hook
    mounted () {
        this.getWeather();
    }

    // *** Component methods
    getWeather() {
        axios.get(this.apiUrl)
            .then((response) => {
                console.log(this.apiResponse);
                Object.assign(this.today,{
                    condition: response.data.current.weather[0].description,
                    nowTemp: Math.round(response.data.current.temp),
                    minTemp: Math.round(response.data.daily[0].temp.min),
                    maxTemp: Math.round(response.data.daily[0].temp.max),
                    icon: "./img/" + response.data.current.weather[0].icon + ".png",
                });

                this.week = response.data.daily.splice(1, 7).map((item: any) => {
                    return {
                        ...item,
                        icon: `./img/${item.weather[0].icon}.png`
                    }
                });

                console.log(this.week);
            }).catch(error => {
            this.apiCallError = error.response.data;
            console.log(this.apiCallError);
        });

    }

    formatDate(dt: number): string {
        const unformattedDate = new Date(dt * 1000)
        return unformattedDate.toLocaleDateString('nl-NL',{ weekday: 'long', month: 'long', day: 'numeric' })
    }

}