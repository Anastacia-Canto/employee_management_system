<template>
    <v-main>
        <div v-if="workspaceName">
            <v-list v-for="employee in team" :key="employee" link>
                <v-list-item v-if="workspaceName === employee.workspace"> {{ employee.name }} {{ employee.role }}</v-list-item>
            </v-list>
        </div>
    </v-main>
</template>

<script>
export default {
    name: "employeeComponent",
    props: {
       workspaceName: String,
    },
    data: () => ({
        team: [
            { name: 'Rodrigo', role: 'hisRole', workspace: 'Management'},
            { name: 'Maria', role: 'herRole', workspace: 'Tech' },
            { name: 'Francisco', role: 'hisRole', workspace: 'Design' },
            { name: 'Joana', role: 'herRole', workspace: 'Marketing' },
        ],
    }),
}
</script>

<style>

</style>