<template>
    <v-container fluid>
        <addOrdinateurModal @addingDesktop="addDesktop"/>
        <v-row>
            <v-col md="4" v-for="ordi in ordinateurs" :key="ordi.id">
                <ordinateur :ordinateurName="ordi.name" :ordinateurId="ordi.id" :attribution="ordi.Attributions" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./home.js"></script>