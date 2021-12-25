<template>
  <div class="home" align="center" style="border:2px solid black;height:100%">
    <v-card max-width="374px" style="margin-top: 180px">
      <v-card-title class="display-1 justify-center blue--text font-weight-bold">
        <span>Zen App</span>
      </v-card-title>

      <v-card-text class="pb-0 pt-0">
        <v-input class="red--text" v-show="invalidUser">
          Invalid username or password
        </v-input>
        <v-text-field label="User Name" class="mt-0" v-model="userName" :rules="userValidation"></v-text-field>
        <v-text-field label="Password" class="mt-5" v-model="password" :rules="passwordValidation"></v-text-field>
      </v-card-text>

      <v-card-actions class="justify-center pt-3">
        <v-btn color="blue" class="mb-2" @click="login">
          <v-icon>mdi-login</v-icon>
          <span>Login</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      invalidUser: "",
      userName: "",
      password: "",
      regX: /^[a-zA-Z]+@gmail.com$/,
      value: "",
      result: "",
      users: [
        { email: "uma@gmail.com", password: "123456" },
        { email: "kiran@gmail.com", password: "123456" },
        { email: "shiva@gmail.com", password: "123456" },
        { email: "dummy@gmail.com", password: "123456" },
      ],

      userValidation: [
        (value) => !!value || "Required.",
        (value) => value && console.log(this.userName, this.regX),
        (value) => (value && this.regX.test(this.userName)) || "Please enter your correct gmail address",
      ],
      passwordValidation: [(value) => !!value || "Required", (value) => (value && value.length >= 6) || "Min 6 characters"],
    };
  },
  components: {},
  methods: {
    login() {
      this.users.forEach((userData) => {
        if (userData.email == this.userName && userData.password == this.password) {
          this.invalidUser = "user found";
          // this.$emit("updateNavBarProfile", userData.email);
          // this.$emit("updateUser", this.userName);
          this.$router.push({ name: "Dashboard", params: { username: this.userName } });
        }
        if (!this.invalidUser) {
          this.invalidUser = "Login Failed";
        }

        // this.result = this.userName == "uma@finastra.com" ? this.$router.push({ name: "Dashboard", params: { username: this.userName } }) : (this.invalidUser = "Login Failed");
      });
    },
  },
};
</script>

<style scoped>
.v-input.red--text {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.home {
  background-image: url("../assets/home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
