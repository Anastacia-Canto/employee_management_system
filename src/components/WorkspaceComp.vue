<template>
    <v-main>
        <h1> {{ workspaceName }}</h1>
        <div v-if="workspaceName">
            <p> Owner: {{ this.owner }} </p>
            <v-list v-for="employee in team" :key="employee">
                <v-list-item> {{ employee }}</v-list-item>
            </v-list>
        </div>
    </v-main>
</template>

<script>
export default {
    name: "workspace-component",
    props: {
       workspaceName: String,
    },
    data: () => ({
        owner: "Frederico",
    }),
}
</script>

<style>

</style>