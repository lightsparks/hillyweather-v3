import Vue from 'vue'
import Component from 'vue-class-component'
import axios from "axios";

@Component
export default class Week extends Vue {

    // *** Component Data
    apiWeekUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=52.231589&lon=5.189039&exclude=minutely,hourly&units=metric&lang=nl&appid=d1e902b667baccdb37cfbc96ad629f00";
    week: Array<any> = [];
    apiCallErrorWeek: Record<string, unknown> = {};

    // *** Component MOUNTED lifecycle hook
    mounted() {
        this.getWeatherWeek();
    }

    // *** Component methods
    getWeatherWeek() {
        axios.get(this.apiWeekUrl)
            .then((response) => {
                this.week = response.data.daily.splice(1, 7);
                console.log(this.week);
            }).catch(error => {
            this.apiCallErrorWeek = error.response.data ? error.response.data : "";
            console.log(this.apiCallErrorWeek);
        });
    }

    formatDate(dt: number): string {
        const unformattedDate = new Date(dt * 1000)
        return unformattedDate.toLocaleDateString('nl-NL',{ weekday: 'long', month: 'long', day: 'numeric' })
    }

}