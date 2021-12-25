<template>
  <div class="category">
    <div>
      <v-container class="">
        <v-layout row wrap class="mt-5">
          <v-flex lg3>
            <v-card width="200" height="300">
              <v-img height="200" width="" src="../assets/category/horror.gif"></v-img>
              <v-card-title>Zen App</v-card-title>
              <v-card-subtitle>Horror</v-card-subtitle>
            </v-card>
          </v-flex>
          <v-flex lg3>
            <v-card width="200" height="300">
              <v-img height="200" width="" src="../assets/category/thriller.jpg"></v-img>
              <v-card-title>Zen App</v-card-title>
              <v-card-subtitle>Thriller</v-card-subtitle>
            </v-card>
          </v-flex>
          <v-flex lg3>
            <v-card width="200" height="300">
              <v-img height="200" width="" src="../assets/category/adventure.gif"></v-img>
              <v-card-title>Zen App</v-card-title>
              <v-card-subtitle>Adventure</v-card-subtitle>
            </v-card>
          </v-flex>
          <v-flex lg3>
            <v-card width="200" height="300">
              <v-img height="200" width="" src="../assets/category/skyfy.gif"></v-img>
              <v-card-title>Zen App</v-card-title>
              <v-card-subtitle>Skyfy</v-card-subtitle>
            </v-card>
          </v-flex>
        </v-layout></v-container
      >
    </div>
  </div></template
>

<script>
export default {};
</script>

<style>
div.category {
  height: 100%;
  background-image: url("../assets/Category.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
