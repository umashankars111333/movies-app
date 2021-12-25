<template>
  <div class="Profile">
    <div class="mt-10">
      <template>
        <v-card max-width="375" class="mx-auto">
          <!-- <v-img :src="require(`../assets/${this.profile[0].image}`)" height="250px" dark> </v-img> -->
          <div class="profileBack">
            <v-avatar size="124" class="profilePic">
              <img :src="require(`../assets/users/${this.profile[0].image}`)" alt="John" />
            </v-avatar>
          </div>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  far fa-user-circle
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ this.profile[0].name }}</v-list-item-title>
                <v-list-item-subtitle>Name</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ this.profile[0].personalNumber }}</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ this.profile[0].workNumber }}</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ this.profile[0].personalMail }}</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ this.profile[0].email }}</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ this.profile[0].address }}</v-list-item-title>
                <v-list-item-subtitle>{{ this.profile[0].distict }}-{{ this.profile[0].pinCode }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  fas fa-certificate
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Year Of Experience</v-list-item-title>
                <v-list-item-subtitle>2 years</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: "",
    };
  },
  methods: {},
  beforeMount() {
    this.profile = this.$route.params.profile;
    console.log("profile..", JSON.parse(JSON.stringify(this.profile)));
  },
};
</script>

<style>
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.Profile {
  background-image: url("../assets/profileBackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

.profilePic {
  left: 30%;
}

.profileBack {
  background-color: skyblue;
}

.logout {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
