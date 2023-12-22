<template>
    <div>
        Login page
        <v-container align="center" justify="center">
            <v-card align="start " class="pa-2" max-width="700px">
                <v-text-field v-model="userLogin.email" type="email" label="E-mail"></v-text-field>
                <v-text-field v-model="userLogin.password" type="password" label="Password"></v-text-field>
                <v-btn class="me-4" @click="loginv()">
                    submit
                </v-btn>
            </v-card>
        </v-container>
    </div>
</template>
<script setup>
definePageMeta({
  middleware: ["is-auth"]
})
const { login } = useDirectusAuth();
const userLogin = {
    email: 'mahdiharzallah21@gmail.com',
    password: '123456',
}
function loginv() {

    login({ email: userLogin.email, password: userLogin.password }).then((data) => { console.log(data) });

}
</script>