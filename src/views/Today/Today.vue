<template>
    <v-container>
        <v-card-title>{{ currentDate }}</v-card-title>
        <v-img :src="getTodaysIcon(today.icon)"></v-img>
        <v-card-text>
            <h2>{{ today.condition }}</h2>
            <h1>{{ today.nowTemp + "°C" }}</h1>
            {{ "Min: " + today.minTemp + "°C" }}  ||  {{ "Max: " + today.maxTemp + "°C" }}
        </v-card-text>
    </v-container>
</template>

<script lang="ts" src="./Today.ts"></script>