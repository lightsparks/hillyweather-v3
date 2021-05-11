<template>
    <v-app>
        <v-container fluid>
            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-title>{{ currentDate }}</v-card-title>
                    <v-img :src="today.icon" alt="icon" width="50%"></v-img>
                    <v-card-text>
                        <h2>{{ today.condition }}</h2>
                        <h1>{{ today.nowTemp + "°C" }}</h1>
                        {{ "Min: " + today.minTemp + "°C" }}  ||  {{ "Max: " + today.maxTemp + "°C" }}
                    </v-card-text>
                    <v-btn rounded @click="step++">7 dagen vooruit &#x276D;&#x276D;</v-btn>
                </v-window-item>
                <v-window-item :value="2">
                    <v-list>
                        <v-list-item v-for="weekday in week" :key="weekday.dt">
                            <v-card>
                                <v-card-title>{{ formatDate(weekday.dt) }}</v-card-title>
                                <v-img alt="Weekday Icon" :src="weekday.icon" width="50%"></v-img>
                                <v-card-text>{{ weekday.weather[0].description }}</v-card-text>
                                <v-card-text>{{ Math.round(weekday.temp.day) + "°C" }}</v-card-text>
                            </v-card>
                        </v-list-item>
                    </v-list>
                    <v-btn rounded @click="step--">&#x276C;&#x276C; Het weer vandaag</v-btn>
                </v-window-item>
            </v-window>
        </v-container>
    </v-app>
</template>

<script lang="ts" src="./Home.ts"></script>