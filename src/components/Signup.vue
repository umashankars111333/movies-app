<template>
  <div class="Signup">
    <template>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Organization Data
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Personal Data
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Address
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-text-field label="User Name" v-model="name"></v-text-field>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-select :items="['Developer', 'Tester']" v-model="defaultRoleSelected"></v-select>
            <v-text-field label="Password"></v-text-field>
            <v-text-field label="Confirm Password"></v-text-field>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-text-field label="Personal Number"></v-text-field>
            <v-text-field label="Work Number"></v-text-field>
            <v-text-field label="Personal Mail"></v-text-field>
            <label for="Profile Pic">Profile Pic</label><br />
            <input class="mb-5" type="file" @change="onFileSelected" /> <br />

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-text-field label="Address"></v-text-field>
            <v-text-field label="Distict"></v-text-field>
            <v-text-field label="Pincode"></v-text-field>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </template>
  </div></template
>

<script>
export default {
  data() {
    return {
      e1: 1,
      defaultRoleSelected: "Developer",
    };
  },
  methods: {
    onFileSelected() {
      console.log("File Selected");
    },
  },
};
</script>

<style>
.v-text-field {
  width: 300px;
}

.select {
  widows: 300px;
}
</style>
