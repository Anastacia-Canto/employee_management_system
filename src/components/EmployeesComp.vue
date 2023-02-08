<template>
    <v-main class="pt-0 pl-5">
        <div v-if="workspaceName">
            <!-- <v-list v-for="employee in team" :key="employee" link>
                <v-list-item v-if="workspaceName === employee.workspace"> {{ employee.name }} {{ employee.role }}</v-list-item>
            </v-list> -->
            <v-list three-line>
            <template v-for="employee in team">
                <v-list-item :key="employee.fullName" v-if="employee.area === workspaceName">
                <v-list-item-avatar>
                    <v-img :src="employee.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title >{{ employee.fullName }}</v-list-item-title>
                    <v-list-item-subtitle> {{ employee.age }} anos</v-list-item-subtitle>
                    <v-list-item-subtitle> {{ employee.role }} </v-list-item-subtitle>
                    <v-list-item-subtitle> {{ employee.area }} </v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-divider :key="employee" v-if="employee.area === workspaceName"></v-divider>
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
            // {
            //   avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            //   fullName: 'Rodrigo Moreira',
            //   age: 34,
            //   role: 'Manager',
            //   area: 'Management',
            //   salary: 4000
            // },
            // {
            //   avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            //   fullName: 'Francisco Duarte',
            //   age: 28,
            //   role: 'Product Designer',
            //   area: 'Design',
            //   salary: 3000
            // },
            // {
            //   avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            //   fullName: 'Maria Cândida',
            //   age: 40,
            //   role: 'FullStack Developer',
            //   area: 'Tech',
            //   salary: 2500
            // },
            // {
            //   avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            //   fullName: 'Joana Ruas',
            //   age: 22,
            //   role: 'Intern',
            //   area: 'Marketing',
            //   salary: 1200
            // },
            // {
            //   avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            //   fullName: 'Madalena Silva',
            //   age: 30,
            //   role: 'Tech Lead',
            //   area: 'Tech',
            //   salary: 3500
            // },
        ],
    }),
    mounted() {
        if (localStorage.getItem('employees')){
            try {
                this.team = JSON.parse(localStorage.getItem('employees'))
                
            } catch (e){
                console.log(e.message)
            }
        }
    },
}
</script>

<style>

</style>