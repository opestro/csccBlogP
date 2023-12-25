<template>
    <div>
        Login page
        <v-container align="center" justify="center">
            <v-card align="start " class="pa-2" max-width="700px">
                <v-form>
                    <v-text-field v-model="fullName" label="Full name"></v-text-field>
                    <v-text-field v-model="userName" label="@UserName"></v-text-field>
                    <v-text-field v-model="email" type="email" label="E-mail"></v-text-field>
                    <v-text-field v-model="password" type="password" label="Password"></v-text-field>
                    <v-btn class="me-4" @click="loginv()">
                        submit
                    </v-btn>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ["is-auth"]
})
const { createUser } = useDirectusAuth();
const { login } = useDirectusAuth();
const { createItems } = useDirectusItems();
const user = useDirectusUser();
const fullName = ref('')
const password = ref('')
const userName = ref('')
const email = ref('')

async function loginv() {

    try {
        await createUser({ email: email.value, password: password.value })
            .then(async () => {
                await login({ email: email.value, password: password.value })
                    .then(async (userData) => {
                        console.log('user Data ' + userData.user.id)
                        const newUserProfile = [{
                            id: userData.user.id,
                            email: email.value,
                            fullName: fullName.value,
                            userName: userName.value
                        }]
                        console.log(newUserProfile)
                        await createItems({ collection: "User", items: newUserProfile })
                            .then((data) => { console.log(data) }).catch((err) => { console.log(err) });s
                    })


            });
    } catch (e) { }
} 
</script>