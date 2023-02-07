<template>
<v-app id="inspire">
  <v-main class="teal accent-2">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item v-for="option in options" :key="option.title" link>
                <v-list-item-content>
                  <v-list-item-title @click="chooseOption"> {{ option.title }} </v-list-item-title>
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
            <h1>Management</h1>
              <v-list-item v-if="options.clicked">
                <v-list-item-content> {{ options.content }} </v-list-item-content>
              </v-list-item>
            <p>Nothing to see</p>
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
      { title: 'Description', content: 'This is the Management page', clicked: true},
      { title: 'Manager', content: 'Michael Jackson', clicked: false },
      { title: 'Team', content: ['Bob', 'William', 'Russel'], clicked: false },
    ],
  }),
  methods: {
    chooseOption(title) {
      console.log(title)
      for (var option in this.options.title) {
        if (option === title) this.options.clicked = true
        else this.options.clicked = false
      }
    },
    displayOption() {
      return this.options.content.filter(x => x.options.clicked === true)
    }
  }
};
</script>