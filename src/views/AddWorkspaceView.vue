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
                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        >
                        <v-text-field
                            v-model="newWorkspace.name"
                            :rules="nameRules"
                            :counter="30"
                            label="Name"
                            required
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        md="6"
                        >
                        <v-text-field
                            v-model="newWorkspace.owner"
                            :rules="nameRules"
                            :counter="30"
                            label="Owner"
                            required
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn type="submit" @click="addWorkspace">Submit</v-btn>
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
      workspaces: [],
      newWorkspace: { name: '', owner: ''},
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 30 || 'Name must be less than 20 characters',
      ],
    }),
    mounted() {
        if (localStorage.getItem('workspaces')){
            try {
                this.workspaces = JSON.parse(localStorage.getItem('workspaces'))
            } catch (e){
                localStorage.removeItem('workspaces')
            }
        }
    },
    methods:{
        addWorkspace(){
            this.workspaces.push(this.newWorkspace)
            this.newWorkspace = { name: '', owner: ''}
            this.storeWorkspace()
        },
        storeWorkspace(){
            const parsed = JSON.stringify(this.workspaces)
            localStorage.setItem('workspaces', parsed)
            alert('Workspace successfully created!')

        }
    }
  }
</script>