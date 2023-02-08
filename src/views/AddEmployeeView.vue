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
                    
                    <v-btn type="submit" @click="addEmployee">Submit</v-btn>
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
            alert('Employee successfully added!')

        },
        selectArea(event){
            this.newEmployee.area = event
        }
    }
  }
</script>