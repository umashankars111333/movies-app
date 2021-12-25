<template>
  <nav>
    <v-app-bar app class="" color="#ddccff" height="65px">
      <v-app-bar-nav-icon v-if="userBio" class="ml-0" @click.stop="drawer = !drawer">
        <v-icon left>fas fa-bars</v-icon>
      </v-app-bar-nav-icon>

      <div flat color="#E6E6FA" class="mt-1 ml-3">
        <v-toolbar-title
          class="toolbar"
          @click="
            $router.push({ name: 'Dashboard', params: { username: userBio[0].email } });
            changeCurrentUrl();
          "
        >
          <v-img alt="Logo" src="../assets/library.png" class="logo" width="61px" height="61px"> </v-img>
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-tabs v-if="!userBio" right icons-and-text>
        <v-tab to="/login" @click="changeCurrentUrl">
          <span class="mb-0 mt-1">Login</span>
          <v-icon>fas fa-sign-in-alt</v-icon>
        </v-tab>
        <v-tab to="/signup" @click="changeCurrentUrl">
          <span class="mb-0 mt-1">Signup</span>
          <v-icon>fas fa-user-plus</v-icon>
        </v-tab>
        <v-tabs-slider v-show="currentUrlPath != 'http://localhost:8080/#/'" color="blue"></v-tabs-slider>
      </v-tabs>

      <v-tabs v-if="userBio" right icons-and-text>
        <v-tab v-for="navigation in navigations" :key="navigation.title" router :to="navigation.route" @click="changeCurrentUrl">
          <span>{{ navigation.title }}</span>
          <v-icon>{{ navigation.icon }}</v-icon>
        </v-tab>

        <!-- side Profile Logo -->
        <v-tab>
          <template>
            <div class="text-center">
              <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar size="60" dark v-bind="attrs" v-on="on">
                    <img :src="require(`../assets/users/${userBio[0].image}`)" :alt="`../assets/users/${userBio[0].image}`" />
                  </v-avatar>
                </template>

                <v-card class="mt-0">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img :src="require(`../assets/users/${userBio[0].image}`)" :alt="`../assets/users/${userBio[0].image}`" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{ userBio[0].name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ userBio[0].role }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list dense>
                    <v-list-item-group v-for="profile in profiles" :key="profile.title">
                      <span
                        @click="
                          userNavigation(profile.title);
                          menu = false;
                        "
                      >
                        <v-list-item>
                          <!-- <v-list-item router :to="profile.route"> -->
                          <v-list-item-icon>
                            <v-icon>{{ profile.icon }}</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>{{ profile.title }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </span>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-menu>
            </div>
          </template>
        </v-tab>

        <v-tabs-slider v-show="checkUrl()" color="blue"></v-tabs-slider>
      </v-tabs>
    </v-app-bar>

    <!-- Side Navigation Drawer -->
    <v-navigation-drawer v-if="userBio" v-model="drawer" class="blue" app temporary>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img :src="require(`../assets/users/${userBio[0].image}`)" :alt="`../assets/users/${userBio[0].image}`" />
          </v-avatar>
          <p class="white--text subheading mt-2 font-weight-bold">
            {{ this.userBio[0].name }}
          </p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="navigation in navigations" :key="navigation.title" router :to="navigation.route">
          <v-list-item-action>
            <v-icon class="white--text" left>{{ navigation.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ navigation.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  props: ["userBio"],
  data() {
    return {
      drawer: null,
      userData: "",
      sucessLogin: false,
      hideSlider: null,
      menu: false,
      currentUrlPath: window.location.href,
      profilePic: "",
      logout: "",
      navigations: [
        { title: "About Us", icon: "far fa-address-card", route: "/dashboard/aboutus" },
        { title: "Category", icon: "fas fa-atlas", route: "/dashboard/category" },
        { title: "Newsroom", icon: "far fa-newspaper", route: "/dashboard/newsroom" },
        { title: "Contact Us", icon: "fas fa-phone-volume", route: "/dashboard/contactus" },
      ],
      profiles: [
        { title: "Profile", icon: "fas fa-users", route: "/dashboard/profile" },
        { title: "Cart", icon: "fas fa-cart-plus", route: "/cart" },
        { title: "Logout", icon: "fas fa-sign-out-alt", route: "/" },
      ],
    };
  },
  methods: {
    sucessLoginUser() {
      console.log("enter sucess login");
      console.log("userbio..", JSON.parse(JSON.stringify(this.userBio)));
      return this.userBio;
    },
    userNavigation(profile) {
      if (profile == "Profile") {
        console.log("navProfileInformation", profile);

        this.$router.push({ name: "Profile", params: { profile: this.userBio } });
        this.currentUrlPath = window.location.href;
        console.log("profilepath:", this.currentUrlPath);
      } else if (profile == "Logout") {
        // this.$forceUpdate();
        this.$emit("logoutUser", this.logout);
        this.$router.push({ name: "Home" });
        this.changeCurrentUrl();
        console.log("current url:..", this.currentUrlPath);
      }
    },
    changeCurrentUrl() {
      console.log(window.location.href);
      this.currentUrlPath = window.location.href;
      console.log("log....", this.currentUrlPath);
      // return this.currentUrlPath;
    },
    checkUrl() {
      if (this.currentUrlPath == "http://localhost:8080/#/dashboard") {
        console.log("ifff..");
        return false;
      } else if (this.currentUrlPath == "http://localhost:8080/#/dashboard/profile") {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeMount() {
    this.currentUrlPath = window.location.href;
    console.log("userBio..", this.userBio);
  },
  mounted() {},
};
</script>

<style>
.logo {
  width: 110px;
  height: 50px;
}

div.v-toolbar__content {
  padding-left: 0;
  /* padding-right: 5px; */
}
</style>
