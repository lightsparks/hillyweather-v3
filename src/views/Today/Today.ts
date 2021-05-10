import Vue from 'vue'
import Component from 'vue-class-component'
import axios from "axios";
import WeatherResponseINTF from "@/interfaces/WeatherResponseINTF";

@Component
export default class Today extends Vue {

    // *** Component Data
    apiDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=52.231589&lon=5.189039&exclude=minutely,hourly&units=metric&lang=nl&appid=d1e902b667baccdb37cfbc96ad629f00"
    currentDate = new Date().toLocaleDateString('nl-NL',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    today = <WeatherResponseINTF>{
        date: null,
        condition: "",
        nowTemp: null,
        dayTemp: null,
        minTemp: null,
        maxTemp: null,
        icon: null,
    };
    apiCallErrorToday: Record<string, unknown> = {};

    // *** Component MOUNTED lifecycle hook
    mounted() {
        this.getWeatherToday();
    }

    // *** Component methods
    getWeatherToday() {
        axios.get(this.apiDayUrl)
            .then((response) => {
                console.log(response.data);
                    this.today.condition = response.data.current.weather[0].description;
                    this.today.nowTemp = Math.round(response.data.current.current.temp);
                    this.today.minTemp = Math.round(response.data.current.current.min);
                    this.today.maxTemp = Math.round(response.data.current.current.max);
                    this.today.icon = response.data.current.weather[0].icon;
                console.log(this.today);
            });
    }

    getTodaysIcon(iconId: string): string {
        return `./assets/${iconId}.png`;
    }



}