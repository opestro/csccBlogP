<template>
    <div>
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="auto">
                    <v-card class="mx-auto" max-width="344" width="344">
                        <v-textarea v-model="content" class="ma-2"></v-textarea>
                        <v-file-input v-model="image" class="ma-2"></v-file-input>
                        <div class="" align="end">
                            <v-btn class="ma-2" @click="createPost" color="info">Post</v-btn>
                        </div>
                    </v-card>


                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const userProfile = useProfileStore()
const { createItems } = useDirectusItems();

const content = ref('')
const image = ref('')
async function createPost() {
    console.log(userProfile.profileDetails.id)
    try {

        await createItems({
            collection: "BlogPost",
            items: {
                uid: userProfile.profileDetails.id,
                content: content._value
            }
        }).then((data)=>{console.log(data)});
    } catch (e) { }
}
</script>