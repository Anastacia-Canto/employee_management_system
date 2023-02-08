<template>
<v-app id="inspire">
  <v-main class="teal accent-2">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item v-for="area in areas" :key="area" @click="changeWorkspace(area.name, area.owner)" link>
                <v-list-item-content>
                  <v-list-item-title > {{ area.name }} </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item link color="grey lighten-4">
                  <v-btn to="/" text> HOME </v-btn>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <workspace-component :workspaceName="this.workspaceType" :workspaceOwner="this.workspaceOwner" />
            <employee-component :workspaceName="this.workspaceType"/>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import workspaceComponent from "@/components/WorkspaceComp.vue"
import employeeComponent from "@/components/EmployeesComp.vue"
export default {
  data: () => ({
    areas: [
      // { name: 'Management', owner: 'Frederico Santos' },
      // { name: 'Tech', owner: 'Alberto Ferreira' },
      // { name: 'Design', owner: 'Maria Luíza' },
      // { name: 'Marketing', owner: 'Clara Sousa' },
    ],
    workspaceType: '',
    workspaceOwner: '',
  }),
  components: {
    workspaceComponent,
    employeeComponent
  },
  async created() {
        if (localStorage.getItem('workspaces')){
            try {
                this.areas = await JSON.parse(localStorage.getItem('workspaces'))
            } catch (e){
                console.log(e.message)
            }
        }
    },
  methods: {
    changeWorkspace(name, owner) {
      this.workspaceType = name
      this.workspaceOwner = owner
    }
  },
};
</script>