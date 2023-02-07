<template>
<v-app id="inspire">
  <v-main class="teal accent-2">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item v-for="option in options" :key="option" link>
                <v-list-item-content>
                  <v-list-item-title> {{ option }} </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item link color="grey lighten-4">
                <v-list-item-content>
                  <v-list-item-title> Refresh </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <h1>DESIGN</h1>
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
    options: [
      'Description',
      'Manager',
      'Team'
    ],
  }),
};
</script>