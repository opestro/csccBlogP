<template>
    <div>
        <div>

            <v-card color="grey-lighten-4" class="pa-2" flat  rounded="0">
                <v-toolbar color="grey-lighten-4" density="compact">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Title</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-card>

        </div>
        <slot></slot>
    </div>
</template>