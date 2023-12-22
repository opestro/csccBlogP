<template>
    <div>
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="auto"  >
                    <v-card class="mx-auto" max-width="344" :title="userProfile.Fullname" subtitle="Web developer Expert"
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
const userProfile = {
    Fullname: "Mehdi harzallah",
 image : "https://scontent-mrs2-1.xx.fbcdn.net/v/t39.30808-1/408824160_1748959858920639_7901660074122892617_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEH9TtqE5q-c5DfXwaPFaZfPzjeD_6di3U_ON4P_p2LdTgH3a6HN1ArX6Bund_hx0Rk4AvdJrA8vH-YN3BqH-ev&_nc_ohc=VYanwtQT12MAX_xTUQ3&_nc_ht=scontent-mrs2-1.xx&cb_e2o_trans=q&oh=00_AfCqigJjM95uDNMIShH4oRx0XsRFEUF2snmmz81oJNOvWQ&oe=65894348"
}
</script>