<template>
    <div>
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="auto"  >
                    <v-card class="mx-auto" max-width="344" width="344"  :title="userProfile.profileDetails.fullName" :subtitle="userProfile.profileDetails.bio"
                        :prepend-avatar="img(userProfile.profileDetails.profilePicture)">
                        <v-card-text>What are you thinking!</v-card-text>
                    </v-card>
                    <div align="end" class="my-2" v-show="buttonStatu">
                        <v-btn  color="info" @click="buttonIsOn()">Lets create!</v-btn>
                    </div> 
                    <div align="end" class="my-2" v-show="!buttonStatu" >
                        <v-btn  color="red" @click="buttonIsOn()">Not Now!</v-btn>
                    </div> 
                </v-col>
               
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const userProfile = useProfileStore()
console.log(userProfile.profileDetails)
const { getThumbnail: img } = useDirectusFiles();
var buttonStatu = true
function buttonIsOn (){
    buttonStatu = !buttonStatu
    console.log(buttonStatu)
}
</script>