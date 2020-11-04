<template>
    <v-container fluid>
        <datepicker @changementDate="nouvellDate" />
        <addOrdinateurModal @addingDesktop="addDesktop"/>
        <v-row>
            <v-col md="4" v-for="(ordi, key ) in ordinateurs" :key="key">
                <ordinateur :ordinateurName="ordi.name" :ordinateurId="ordi.id" :attribution="ordi.Attributions" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./home.js"></script>