<template>
    <div>
        <v-form ref="form" v-model="valid" lazy-validation >
            <v-text-field
             v-model="email"
             :rules="emailRules"
             label="Adresse e-mail"
             required
             type="email"
            ></v-text-field>

            <v-text-field
             v-model="password"
             :rules="passwordRule"
             label="Mot de passe"
             required
             type="password"
            ></v-text-field>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
                Connexion
            </v-btn>

        </v-form>
    </div>
</template>

<script src="./login.js"></script>