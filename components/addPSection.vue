<template>
    <div>
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="auto"  >
                    <v-card class="mx-auto" max-width="344" :title="userProfile.profileDetails.fullName" subtitle="Web developer Expert"
                        :prepend-avatar="userProfile.image">
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
                    </v-card>
                    <div align="end" class="my-2">
                        <v-btn  color="info">7aja New</v-btn>
                    </div>
                   
                </v-col>
               
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const userProfile = useProfileStore()
console.log(userProfile.profileDetails)
</script>