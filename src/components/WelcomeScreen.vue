<template>
  <div class="welcomeScreen">
    <h1>Welcome To My WelcomeScreen</h1>
    <div class="tab">
  <button class="tablinks" ><router-link to="/login">Login</router-link></button>
  <button class="tablinks" ><router-link to="/register">Register</router-link></button>
</div>

  </div>
</template>

<script>
// import { useQuasar } from 'quasar'
export default {
  name: 'WelcomeScreen',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */

</style>
