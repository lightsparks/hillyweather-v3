<template>
    <v-container>
        <v-list>
            <v-list-item v-for="weekday in week" :key="weekday.dt">
                <v-card>
                    <v-card-title>{{ formatDate(weekday.dt) }}</v-card-title>
                    <img alt="Weekday Icon" :src="getWeekIcon(week.weather[0].icon)"/>
                    <v-card-text>{{ weekday.weather[0].description }}</v-card-text>
                    <v-card-text>{{ Math.round(weekday.temp.day) + "°C" }}</v-card-text>
                </v-card>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script lang="ts" src="./Week.ts"></script>