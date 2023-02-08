<template>
<v-app id="inspire">
  <v-main class="teal accent-2">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item v-for="option in options" :key="option" @click="changeWorkspace(option)" link>
                <v-list-item-content>
                  <v-list-item-title > {{ option }} </v-list-item-title>
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
            <employeeComponent :workspaceName="this.workspaceType" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import employeeComponent from "@/components/EmployeesComp.vue"
export default {
  data: () => ({
    options: [
      'Management',
      'Tech',
      'Design',
      'Marketing',
    ],
    workspaceType: ''
  }),
  components: {
    employeeComponent
  },
  methods: {
    changeWorkspace(name) {
      this.workspaceType = name
    },
    goToHome() {
        this.$router.currentRoute = "/"
    }
  },
};
</script>