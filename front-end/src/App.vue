<template>
  <v-app>
    <nav class="navbar navbar-inverse" style="font-size:20px;height:35px;">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Shopper's Stop</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a href="#">Home</a></li>
          <li>
            <a>Products</a>
          </li>
          <li><a href="#">My Orders</a></li>
          <li><a>Login</a></li>
        </ul>
      </div>
    </nav>
    <Navbar />
    <Card />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default {
  name: "App",

  components: {
    Navbar,
    Card
  },

  data: () => ({
    //
  })
};
</script>
