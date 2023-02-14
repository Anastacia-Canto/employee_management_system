<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="teal accent-2" size="32"><v-img :src="'rocket.png'"></v-img></v-avatar>

        <v-btn rounded text v-for="path in paths" :key="path.title" :to="path.to"> {{ path.title }} </v-btn>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
        <v-row class="teal accent-2">
          <v-col cols="3"></v-col>
          <v-col cols="5"><h1 class="text-center">Welcome!</h1></v-col>
          <v-col cols="4"></v-col>
        </v-row>
      <v-main class="teal accent-2">
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      paths: [
        { title: "Workspaces", to: "/workspaces" },
        { title: "Employees", to: "/employees" },
        { title: "Create new workspace", to: "/addWorkspace" },
      ]
  }),
};
</script>
