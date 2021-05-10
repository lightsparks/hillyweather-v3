<template>
    <v-app>
        <v-container fluid>
            <v-window v-model="step">
                <v-window-item :value="1">
                    <Today></Today>
                    <v-btn rounded @click="step++">7 dagen vooruit &#x276D;&#x276D;</v-btn>
                </v-window-item>
                <v-window-item :value="2">
                    <Week></Week>
                    <v-btn rounded @click="step--">&#x276C;&#x276C; Het weer vandaag</v-btn>
                </v-window-item>
            </v-window>
        </v-container>
    </v-app>
</template>

<script lang="ts">
    import Vue from "vue";
    import Week from "./Week/Week";
    import Today from "./Today/Today";
    import Component from "vue-class-component";

    @Component({
        components: {Today, Week}
    })
    export default class Home extends Vue {
        step = 1;

    }
</script>