<template>
    <v-dialog v-model="dialog" persistent max-width="450">
        <v-card>
        <div class="d-flex justify-content-between pl-5 pt-2 border-bottom border-dark">
            <h5 class="mt-1">
               Attribuer
            </h5>
            <v-btn color="grey" text @click="close">
                X
            </v-btn>
        </div>

        <v-autocomplete
            class="w-100 px-3 py-2 mt-5"
            v-model="select"
            :search-input.sync="search"
            :loading="loading"
            :items="items"
            item-text="fullname"
            item-value="id"
            return-object
            label="Client"
            cache-items
            flat
            hide-no-data
            hide-details
            solo-inverted
            >
        </v-autocomplete>
        
        <div class="d-flex justify-content-end py-5 pr-3">
            <v-btn color="grey" class="mr-2 text-white" @click="close">
                Annuler
            </v-btn>
            <v-btn :disabled="valid" color="primary" class="text-white" @click="attribuer">
                Attribuer
            </v-btn>
        </div>

      </v-card>
    </v-dialog>
</template>

<script src='./addAttribution.js'></script>