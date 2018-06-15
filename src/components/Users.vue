<template>
<v-app>
  <v-card>
    <v-form v-model="valid">
      <v-text-field
      v-model="body.email"
      :rules="emailRules"
      label="E-mail"
      required
      ></v-text-field>
        <v-btn 
        block 
        color="secondary" 
        dark
        >
          <v-icon 
            dark
          >add</v-icon
        >ADD</v-btn>
    </v-form>
  </v-card>
</v-app>
</template>
<script>
export default {
  name: "Users",
  body: {
    email: null
  }
};
axios.post(
  "https://cajxts600j.execute-api.us-east-1.amazonaws.com/morales",
  body
);
</script>
<style scoped>
</style>
