<template>
  <div class="dashboard">
    <!-- <NavBar :userBio="loginUserBio" /> -->

    <!-- Search -->
    <Filters :books="books" @updateFilter="parentUpdateFilteredProducts" />

    <!-- Books List -->
    <Books :filterProduct="filterProduct" />
  </div>
</template>

<script>
// import NavBar from "../components/NavBar";
import Books from "../components/Books";
import Filters from "../components/Filters";
export default {
  data() {
    return {
      loginUser: "",
      loginUserBio: "",
      users: [
        {
          email: "uma@gmail.com",
          name: "Umashankar S",
          role: "Developer",
          image: "uma.jpg",
          personalNumber: "8296867170",
          workNumber: "9845681593",
          personalMail: "umashankars111333@gmail.com",
          address: "#288, Behind SBI, Madanayakanahalli",
          distict: "Banglore",
          pinCode: "562123",
        },
        {
          email: "kiran@gmail.com",
          name: "Kiran N",
          role: "Developer",
          image: "kiran.png",
          personalNumber: "8296867170",
          workNumber: "9845681593",
          personalMail: "kirans111333@gmail.com",
          address: "#288, Bidar",
          distict: "Bidar",
          pinCode: "562115",
        },
        {
          email: "shiva@gmail.com",
          name: "Shivashankar S",
          role: "Tester",
          image: "shiva.jpg",
          personalNumber: "9480100411",
          workNumber: "08131243354",
          personalMail: "shiav123@gmail.com",
          address: "#288, Behind SBI, Madanayakanahalli",
          distict: "Banglore",
          pinCode: "562123",
        },
        {
          email: "dummy@gmail.com",
          name: "Guest User",
          role: "View",
          image: "visitor.jpg",
          personalNumber: "9281029321",
          workNumber: "901293848484",
          personalMail: "dummys@gmail.com",
          address: "#28 Dummy Road, Bummy Post, Banglore",
          distict: "Banglore",
          pinCode: "562123",
        },
      ],
      books: {
        Horror: [
          { title: "Conjuring", image: "Conjuring.jpg", ratings: "4" },
          { title: "Evil Dead", image: "EvilDead.jpg", ratings: "3" },
          { title: "Exists", image: "Exists.jpg", ratings: "3" },
          { title: "Women In Black", image: "WomenInBlack.jpg", ratings: "4" },
        ],
        Thriller: [
          { title: "Sahasam", image: "Sahasam.jpg", ratings: "5" },
          { title: "Agent Athreya", image: "AgentAthreya.jpg", ratings: "5" },
          { title: "Tik Tik", image: "TikTik.jpg", ratings: "4.5" },
          { title: "Forensic", image: "Forensic.jpg", ratings: "4.5" },
        ],
      },
      filterProduct: {},
    };
  },
  beforeMount() {
    this.loginUser = this.$route.params.username;
    this.loginInformation(this.loginUser);

    this.filterProduct = { ...this.books };
    console.log("dashbefore mount..", JSON.parse(JSON.stringify(this.filterProduct)));
  },
  methods: {
    loginInformation: function(loginUser) {
      this.loginUserBio = this.users.filter((user) => {
        return user.email == loginUser;
      });
      console.log("sending data to nav...", JSON.parse(JSON.stringify(this.loginUserBio)));
      this.$emit("updateNavBarProfile", this.loginUserBio);
      // this.$router.replace({ name: "App", params: { loginUser: this.loginUserBio } });
    },

    parentUpdateFilteredProducts(updatedFilter) {
      console.log("Updating here");
      this.filterProduct = { ...updatedFilter };
      console.log("After filter in dashboard", JSON.parse(JSON.stringify(this.filterProduct)));
      // this.books = { ...updatedFilter };
    },
  },
  components: {
    // NavBar,
    Books,
    Filters,
  },
};
</script>

<style>
div.filters {
  display: inline;
  float: right;
}
</style>
