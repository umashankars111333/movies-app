<template>
  <v-app>
    <NavBar :userBio="loginUserBio" @logoutUser="ParentLogoutUser" />
    <v-main>
      <router-view @updateNavBarProfile="parentupdateNavBarProfile" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../src/components/NavBar";
export default {
  name: "App",
  loginUserBio: "",

  components: { NavBar },

  data: () => ({
    loginUserBio: "",
  }),
  methods: {
    parentupdateNavBarProfile(updateProfile) {
      console.log("upadateProfileNavBar:", JSON.parse(JSON.stringify(updateProfile)));
      this.loginUserBio = updateProfile;
    },
    ParentLogoutUser(logout) {
      console.log("Loging Out...");
      this.loginUserBio = logout;
    },
  },
};
</script>

<style></style>
