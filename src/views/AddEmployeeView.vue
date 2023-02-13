<template>
<v-app id="inspire">
  <v-main class="teal accent-2">
    <v-container>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-sheet min-height="70vh" rounded="lg">
            <template>
                <v-form v-model="valid">
                    <v-container>
                    
                        <v-text-field
                            v-model="newEmployee.avatar"
                            label="Avatar path"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="newEmployee.fullName"
                            label="Full name"
                            required
                        ></v-text-field>
                    
                        <v-text-field
                            v-model="newEmployee.age"
                            label="Age"
                            required
                        ></v-text-field>
                        
                        <v-text-field
                            v-model="newEmployee.role"
                            label="Role"
                            required
                        ></v-text-field>

                        <v-select
                            :items="workspaces"
                            @change="selectArea($event)"
                            label="Select an area"
                            required>
                        </v-select>

                        <v-text-field
                            v-model="newEmployee.salary"
                            label="Salary"
                            required
                        ></v-text-field>
                    
                    <v-btn type="submit" @click.prevent="addEmployee">Submit</v-btn>
                    <v-snackbar v-model="errorSnackbar" top>
                        {{ errorSnackbarText }}
                        <template >
                          <v-btn
                            color="red"
                            text
                            @click="errorSnackbar = false"
                          >
                            Close
                          </v-btn>
                        </template>
                    </v-snackbar>
                    <v-snackbar v-model="snackbar" top>
                        {{ snackbarText }}
                        <template >
                          <v-btn
                            color="teal accent-2"
                            text
                            @click="snackbar = false"
                          >
                            Close
                          </v-btn>
                        </template>
                    </v-snackbar>
                    </v-container>
                </v-form>
            </template>
            
          </v-sheet>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      employees: [],
      workspaces: [],
      newEmployee: { 
        avatar: '',
        fullName: '',
        age: undefined,
        role: '',
        area: '',
        salary: undefined,
        },
      snackbar: false,
      snackbarText: 'Employee successfully added!',
      errorSnackbar: false,
      errorSnackbarText: 'All fields are required!'
    }),
    mounted() {
        if (localStorage.getItem('employees')){
            try {
                this.employees = JSON.parse(localStorage.getItem('employees'))
            } catch (e){
                localStorage.removeItem('employees')
            }
        }
        if (localStorage.getItem('workspaces')){
            try {
                let workspacesOptions = JSON.parse(localStorage.getItem('workspaces'))
                for (var i in workspacesOptions){
                    this.workspaces.push(workspacesOptions[i].name)
                }
            } catch (e){
                console.log(e.message)
            }
        }
    },
    methods:{
        addEmployee(){
            if (this.newEmployee.fullName.length == 0 || !this.newEmployee.area){
                this.errorSnackbar = true
                return
            }
            this.employees.push(this.newEmployee)
            this.newEmployee = {
                avatar: '',
                fullName: '',
                age: Number,
                role: '',
                area: '',
                salary: Number,
            }
            this.storeEmployee()
        },
        storeEmployee(){
            const parsed = JSON.stringify(this.employees)
            localStorage.setItem('employees', parsed)
            this.snackbar = true

        },
        selectArea(event){
            this.newEmployee.area = event
        }
    }
  }
</script>