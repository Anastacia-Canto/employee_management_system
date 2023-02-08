<template>
    <v-main class="pt-0 pl-5">
        <div v-if="workspaceName">
            <!-- <v-list v-for="employee in team" :key="employee" link>
                <v-list-item v-if="workspaceName === employee.workspace"> {{ employee.name }} {{ employee.role }}</v-list-item>
            </v-list> -->
            <v-list three-line>
            <template v-for="employee in team">
                <v-list-item :key="employee.fullName">
                <v-list-item-avatar>
                    <v-img :src="employee.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title >{{ employee.fullName }}</v-list-item-title>
                    <v-list-item-subtitle v-html="employee.role"></v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-divider :key="employee"></v-divider>
            </template>
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
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              fullName: 'Rodrigo Moreira',
              role: 'Manager',
              area: 'Management',
              salary: 4000
            },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              fullName: 'Francisco Duarte',
              role: 'Product Designer',
              area: 'Design',
              salary: 3000
            },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
              fullName: 'Maria Cândida',
              role: 'FullStack Developer',
              area: 'Tech',
              salary: 2500
            },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              fullName: 'Joana Ruas',
              role: 'Intern',
              area: 'Marketing',
              salary: 1200
            },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
              fullName: 'Madalena Silva',
              role: 'Tech Lead',
              area: 'Tech',
              salary: 3500
            },
        ],
    }),
}
</script>

<style>

</style>