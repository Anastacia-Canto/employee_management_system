<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn
          v-for="area in areas"
          :key="area.title"
          :to="area.to"
          rounded
          text
        >
          {{ area.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
      <v-main class="teal accent-2">
        <!-- <v-container >
          <v-img src="homeImg.jpg" max-height="60vh" contain></v-img>
        </v-container> -->
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    areas: [
      { title: "Home", to: "home" },
      { title: "Management", to: "management" },
      { title: "Tech", to: "tech" },
      { title: "Design", to: "design" },
      { title: "Marketing", to: "marketing" },
    ],
  }),
};
</script>
