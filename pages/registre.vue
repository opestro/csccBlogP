<template>
    <div>
        Login page
        <v-container align="center" justify="center">
            <v-card align="start " class="pa-2" max-width="700px">
                <v-text-field v-model="userLogin.fullName" label="Full name"></v-text-field>
                <v-text-field v-model="userLogin.userName" label="@User Name"></v-text-field>
                <v-text-field v-model="userLogin.email" type="email" label="E-mail"></v-text-field>
                <v-text-field v-model="userLogin.password" type="password" label="Password"></v-text-field>
                <v-btn class="me-4" @click="loginv()">
                    submit
                </v-btn>
            </v-card>
        </v-container>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ["is-auth"]
})
const { createUser } = useDirectusAuth();
const { createItems } = useDirectusItems();
const userLogin = {
    email: '',
    password: '',
    fullName: '',
    userName: '',
}


async function loginv() {

    try {
         await createUser({ email: userLogin.email, password: userLogin.password }).then(async (data) => {
            console.log(data)
        const newUserProfile= [{
            email: userLogin.email,
            fullName: userLogin.fullName,
            userName: userLogin.userName
        }]
        console.log(newUserProfile)
        await createItems({ collection: "User",  items: newUserProfile }).then((data) => { console.log(data) }).catch((err) => { console.log(err) });
           });
    } catch (e) { }
} 
</script>