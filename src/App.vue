<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn rounded text v-for="path in paths" :key="path.title" :to="path.to"> {{ path.title }} </v-btn>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
      <v-main class="teal accent-2">
        <router-view></router-view>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4"><h1 class="text-center">Welcome!</h1></v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      paths: [
        { title: "Workspaces", to: "/workspaces" },
        { title: "Create new workspace", to: "/addWorkspace" },
      ]
  }),
};
</script>
