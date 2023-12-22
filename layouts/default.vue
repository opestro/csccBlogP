<template>
    <div>
        <div>

            <v-card color="grey-lighten-4" class="pa-2" flat  rounded="0">
                <v-toolbar color="grey-lighten-4" density="compact">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title> Rolli
                    </v-toolbar-title>
                    

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn @click="moveLink('homePage')" >
                        HomePage
                    </v-btn>

                    <v-btn @click="moveLink('profile')">
                        Profile
                    </v-btn>
                </v-toolbar>
            </v-card>

        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
function moveLink(data) {
    if (data=='homePage'){
        return navigateTo("/");
    }
    if (data=='profile'){
        return navigateTo("/profile");
    }
    
    
}
</script>