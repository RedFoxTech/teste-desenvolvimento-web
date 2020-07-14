<template>
<div>
    <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
            <router-link to="/">
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link :to="{name: 'pokemons'}">
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-pokeball</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Pokemon</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link :to="{name: 'habitat'}">
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-map-marker-radius</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Habitat</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link :to="{name: 'type'}">
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-format-list-bulleted-type</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Type</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Pokemon App</v-toolbar-title>
    </v-app-bar>
</div>
</template>

<script>
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
    }),
}
</script>

<style>

</style>