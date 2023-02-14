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
                            <v-col cols="10">
                                <v-list-item-title >{{ employee.fullName }}</v-list-item-title>
                                <v-list-item-subtitle> Age: {{ employee.age }} anos</v-list-item-subtitle>
                                <v-list-item-subtitle> Role: {{ employee.role }} </v-list-item-subtitle>
                                <v-list-item-subtitle> Area: {{ employee.area }} </v-list-item-subtitle>
                                <div class="ml-3">
                                  <v-btn icon @click="showSalary = !showSalary">Salary</v-btn>
                                  <v-list-item-subtitle v-if="showSalary"> € {{ employee.salary }} </v-list-item-subtitle>
                                  <v-list-item-subtitle v-else > ***</v-list-item-subtitle>
                                </div>
                            </v-col>
                            <v-col cols="2">
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon @click="deleteEmployee(employee.fullName)">mdi-delete-forever</v-icon>
                                  </v-btn>
                                </template>
                                <span>Delete employee</span>
                              </v-tooltip>
                            </v-col>
                              <!-- <v-textarea
                              v-model="comment"
                              append-icon="mdi-comment"
                              class="mx-2"
                              label="comments:"
                              type="text"
                              rows="1"
                              @click:append="saveComment"
                              ></v-textarea> -->
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
    showSalary: false,
    comment: '',
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
    deleteEmployee(name){
          const newTeam = []
          for (let i = 0; i < this.employees.length; i++){
              if (this.employees[i].fullName !== name){
              newTeam.push(this.employees[i])
              }
          }
          this.employees = newTeam
          const parsed = JSON.stringify(this.employees)
          localStorage.setItem('employees', parsed)
          location.reload()
      },
  }
};
</script>