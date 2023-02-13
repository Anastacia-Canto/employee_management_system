<template>
    <v-main class="pt-0 pl-5">
        <div v-if="workspaceName">
            <v-list three-line>
            <template v-for="employee in team">
                <v-list-item :key="employee.fullName" v-if="employee.area === workspaceName">
                <v-list-item-avatar>
                    <v-img :src="employee.avatar || 'cat.png'"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-col cols="10">
                        <v-list-item-title >{{ employee.fullName }}</v-list-item-title>
                        <v-list-item-subtitle> {{ employee.age }} anos</v-list-item-subtitle>
                        <v-list-item-subtitle> {{ employee.role }} </v-list-item-subtitle>
                        <v-list-item-subtitle> {{ employee.area }} </v-list-item-subtitle>
                    </v-col>
                    <v-col cols="2">
                        <v-icon @click="deleteEmployee(employee.fullName)">mdi-delete-forever</v-icon>
                    </v-col>
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
    methods: {
        deleteEmployee(name){
            const newTeam = []
            for (let i = 0; i < this.team.length; i++){
                if (this.team[i].fullName !== name){
                newTeam.push(this.team[i])
                }
            }
            this.team = newTeam
            const parsed = JSON.stringify(this.team)
            localStorage.setItem('employees', parsed)
        }
    }
}
</script>

<style>

</style>