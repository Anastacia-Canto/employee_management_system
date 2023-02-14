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
                    <v-btn type="submit" @click.prevent="addWorkspace">Submit</v-btn>
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
      workspaces: [],
      newWorkspace: { name: '', owner: ''},
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 30 || 'Name must be less than 20 characters',
      ],
      snackbar: false,
      snackbarText: 'Workspace successfully created!',
      errorSnackbar: false,
      errorSnackbarText: 'All fields are required!'
    }),
    created() {
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
            if (this.newWorkspace.name.length == 0 || this.newWorkspace.owner.length == 0){
              this.errorSnackbar = true
              return
            }
            this.workspaces.push(this.newWorkspace)
            this.newWorkspace = { name: '', owner: ''}
            this.storeWorkspace()
            location.reload()
        },
        storeWorkspace(){
            const parsed = JSON.stringify(this.workspaces)
            localStorage.setItem('workspaces', parsed)
            this.snackbar = true
        }
    }
  }
</script>