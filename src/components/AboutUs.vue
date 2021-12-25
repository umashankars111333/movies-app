<template>
  <div class="AboutUs">
    <div>
      <v-container class="">
        <v-layout row wrap class="mt-2 ">
          <v-flex lg6>
            <v-card width="500px">
              <v-img height="500" width="500" src="../assets/library.png"></v-img>
              <v-card-title>Zen App</v-card-title>
              <v-card-subtitle>Since 1999</v-card-subtitle>
              <v-card-text>We will provide different category of books such as Horror, thriler, Adventure and the graph indicates the usage of zen app</v-card-text>
            </v-card>
          </v-flex>

          <v-flex lg6 align-self-center style="border: 2px solid blue">
            <!-- Sparklines Vue js-->
            <template>
              <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
              ></v-sparkline>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
const gradients = [["#222"], ["#42b3f4"], ["red", "orange", "yellow"], ["purple", "violet"], ["#00c6ff", "#F0F", "#FF0"], ["#f72047", "#ffd200", "#1feaea"]];
export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 10],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
  }),
};
</script>

<style>
div.AboutUs {
  height: 100%;
  background-image: url("../assets/AboutUs.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
