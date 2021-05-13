<template>
    <v-app>
        <v-container fluid>
            <v-row class="d-flex justify-center">
                <v-col cols="12" sm="12" md="8">
                    <v-window v-model="step">

                        <v-window-item :value="1">
                            <v-card elevation="4">
                                <v-card-title class="d-flex justify-center pb-0">{{ currentDate }}</v-card-title>
                                <div class="pa-16 pt-0 pb-0">
                                    <v-img class="mx-auto" :src="today.icon" alt="icon" height="20%"/>
                                </div>
                                <v-card-text class="pt-0">
                                    <v-card-subtitle class="text-center display-1 font-italic">{{ today.condition }}</v-card-subtitle>
                                    <v-card-text class="text-center display-3 font-weight-bold px-auto mt-4 mb-4">{{ today.nowTemp + "°C" }}</v-card-text>
                                    <v-card-text class="d-flex justify-center font-weight-black pt-0"><h3>{{ "Min: " + today.minTemp + "°C" }}  ||  {{ "Max: " + today.maxTemp + "°C" }}</h3></v-card-text>
                                </v-card-text>
                                <v-container class="d-flex align-self-end">
                                    <v-spacer></v-spacer>
                                    <v-btn class="d-flex justify-end" color="primary" rounded @click="step++">7 dagen vooruit &#x276D;&#x276D;</v-btn>
                                </v-container>
                            </v-card>
                        </v-window-item>

                        <v-window-item :value="2">
                            <v-container>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" rounded @click="step--">&#x276C;&#x276C; Het weer vandaag</v-btn>
                            </v-container>
                            <v-list>
                                <v-list-item v-for="weekday in week" :key="weekday.dt">
                                    <v-card class="mx-auto mb-6" width="500">
                                        <v-card-title class="d-flex justify-center display-0 pb-0 display-1"><h6>{{ formatDate(weekday.dt) }}</h6></v-card-title>
                                        <v-container class="d-flex flex-row mb-0 pt-0 pb-0 align-content-center">
                                            <v-img class="mx-auto align-self-center ml-3" width="60px" alt="Weekday Icon" :src="weekday.icon" contain></v-img>
                                            <v-card-text class="font-italic text-center ml-1 align-self-center text--secondary"><h4>{{ weekday.weather[0].description }}</h4></v-card-text>
                                            <v-card-text class="mx-auto d-flex justify-end display-1 pl-0 pr-0 ml-0 font-weight-bold text--secondary">{{ Math.round(weekday.temp.day) + "°C" }}</v-card-text>
                                        </v-container>
                                        <v-card-subtitle class="d-flex justify-end align-self-center pt-0" color="primary">{{ "Min: " + Math.round(weekday.temp.min) + "°C" }}  ||  {{ "Max: " + Math.round(weekday.temp.max) + "°C" }}</v-card-subtitle>
                                    </v-card>
                                </v-list-item>
                            </v-list>
                        </v-window-item>

                    </v-window>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts" src="./Home.ts"></script>