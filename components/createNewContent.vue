<template>
    <div>
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="auto">
                    <v-card class="mx-auto" max-width="344" width="344">
                        <v-textarea class="ma-2"></v-textarea>
                        <v-file-input class="ma-2"></v-file-input>
                        <div class="" align="end">
                            <v-btn class="ma-2" color="info">Post</v-btn>
                        </div>
                    </v-card>


                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const userProfile = useProfileStore()
</script>