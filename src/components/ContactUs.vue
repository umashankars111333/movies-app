<template>
  <div class="ContactUs">
    <template>
      <v-card class="mx-auto" max-width="100%" tile>
        <div class="ContactUsBackGround">
          <v-row align="end" class="">
            <v-col align-self="start" class="pa-0" cols="10">
              <v-avatar class="profile" color="grey" size="464" tile>
                <v-img src="../assets/umashankar.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title mb-2">
                    Umashankar S
                    <v-icon class="ml-3">fas fa-user-check</v-icon>
                  </v-list-item-title>
                  <v-list-item-title class="mb-3"
                    >Developer
                    <v-icon class="ml-3">fas fa-laptop-code</v-icon>
                  </v-list-item-title>
                  <v-list-item-title class="mb-3"
                    >umashankar.s@finastra.com
                    <v-icon class="ml-3">fas fa-envelope-open-text</v-icon>
                  </v-list-item-title>
                  <v-list-item-title class="mb-3"
                    >8296867170
                    <v-icon class="ml-3">fas fa-mobile</v-icon>
                  </v-list-item-title>
                  <v-list-item-title class="mb-3"
                    >https://github.com/umashankars111333
                    <v-icon class="ml-3">fab fa-github</v-icon>
                  </v-list-item-title>
                  <v-list-item-title class=""
                    >https://www.linkedin.com/in/umashankar-s-003b41188
                    <v-icon class="ml-3">fab fa-linkedin</v-icon>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ContactUsBackGround {
  height: 100%;
  background-image: url("../assets/ContactUs.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.v-list-item__content {
  padding-top: 0;
}
</style>
