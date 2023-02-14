<template>
    <v-main class="pt-3 pl-5">
        <div v-if="workspaceName">
            <v-row>
                <v-col cols="9">
                    <h1> {{ workspaceName }}</h1>
                    <p> Owner: {{ workspaceOwner }} </p>
                </v-col>
            </v-row>
        </div>
    </v-main>
</template>

<script>
export default {
    name: "workspace-component",
    props: {
       workspaceName: String,
       workspaceOwner: String,
    },
    data: () => ({
        
    }),
}
</script>

<style>

</style>