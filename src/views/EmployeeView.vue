<template>
<v-app id="inspire">
  <v-main class="teal accent-2">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item link color="grey lighten-4">
                  <v-btn to="/" text> HOME </v-btn>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <div class="mr-15" align="right">
                <v-btn class="mt-3" href="/addEmployee" right>Add Employee</v-btn>
            </div>
            <div>
                <v-list three-line>
                    <template v-for="employee in employees">
                        <v-list-item :key="employee.fullName">
                        <v-list-item-avatar>
                            <v-img :src="employee.avatar || 'cat.png'"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-col cols="8">
                                <v-list-item-title >{{ employee.fullName }}</v-list-item-title>
                                <!-- <v-list-item-subtitle> {{ employee.age }} anos</v-list-item-subtitle>
                                <v-list-item-subtitle> {{ employee.role }} </v-list-item-subtitle>
                                <v-list-item-subtitle> {{ employee.area }} </v-list-item-subtitle> -->
                            </v-col>
                            <v-col cols="2">
                                    <v-btn @click="edit = true" icon><v-icon>mdi-pencil</v-icon></v-btn>
                            </v-col>

                            <v-col cols="2">
                                <v-icon @click="deleteEmployee(employee.fullName)">mdi-delete-forever</v-icon>
                            </v-col>
                        </v-list-item-content>
                        </v-list-item>
                        <v-divider :key="employee"></v-divider>
                    </template>
                </v-list>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
export default {
  data: () => ({
    employees: [
        // {
        //   avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        //   fullName: 'Rodrigo Moreira',
        //   age: 34,
        //   role: 'Manager',
        //   area: 'Management',
        //   salary: 4000
        // },
    ],
  }),
  async created() {
        if (localStorage.getItem('employees')){
            try {
                this.employees = await JSON.parse(localStorage.getItem('employees'))
            } catch (e){
                console.log(e.message)
            }
        }
    },
  methods: {
    
    }
};
</script>