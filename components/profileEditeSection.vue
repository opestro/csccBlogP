<template>
    <div>
        <v-container align="center" justify="center">
            <v-card align="start " class="pa-2" max-width="700px">
                <v-text-field v-model="email" variant="outlined" type="email" label="E-mail" readonly></v-text-field>
                <v-text-field v-model="fullName" variant="outlined" label="Full name"></v-text-field>
                <v-combobox v-model="skills" variant="outlined" :items="listOfSkills" chips label="Skills"
                    multiple></v-combobox>
                <v-select v-model="levelOfStudy" variant="outlined" :items="listOfSLevels"
                    label="Your university level"></v-select>
                <v-textarea v-model="bio" clearable label="Bio" variant="outlined"></v-textarea>
                <v-file-input v-model="profilePicture" label="Profile Picture" variant="outlined"></v-file-input>

                <v-btn class="me-4" @click="updateData()">
                    Update
                </v-btn>
            </v-card>
        </v-container>
    </div>
</template>
<script setup>
// Store using Pinia
const { getFiles } = useDirectusFiles();
const { updateItem } = useDirectusItems();
const userProfile = useProfileStore()
console.log(userProfile.profileDetails)
//################################
// List of variables
const email = userProfile.profileDetails.email
const fullName = ref(userProfile.profileDetails.fullName)
const skills = ref(null)
const levelOfStudy = ref('')
const bio = ref(userProfile.profileDetails.bio)
const listOfSkills = ['Design', 'Development', 'VideoEditing', 'FreeLancer', 'Newbie', 'iA', 'Robotic', 'PhotoGraphy', 'Gaming']
const listOfSLevels = ['L1', 'L2', 'L3', 'M1', 'M2']
const profilePicture = ref('')
//################################
// List of functions
//################################
// Update function
const test = {
            storage: 'pictures', filename_download: 'pic'
        }
async function updateData() {
    try {
        profilePicture.value[0]['storage'] = 'pictures';
        profilePicture.value[0]['filename_download'] = 'pic';
        console.log( profilePicture.value)
        await updateItem({
            collection: "User",
            id: userProfile.profileDetails.id,
            item: {
                fullName: fullName.value,
                skills: skills._rawValue,
                levelOfStudy: levelOfStudy._rawValue,
                bio: bio.value,
                profilePicture: profilePicture.value[0]
            },
        }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        });
    } catch (e) { }
}


</script>