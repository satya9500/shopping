<template>
  <v-container>
    <v-card v-for="item of items" class="mx-auto my-4 col-md-4" max-width="374" :key="item">
      <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="image"></v-img>

      <v-card-title>{{ item.itemName }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>
        <div>{{ item.itemDetail }}</div>
      </v-card-text>
      <b style="font-size:20px;margin-left:15px;">${{ item.rate }}</b>

      <v-card-actions>
        <v-btn
          color="deep-purple accent-4"
          text
          v-on:click="add($event)"
          :id="item.itemID"
        >Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Card",
  data() {
    return {
      items: [],
      quantity: []
    };
  },
  created() {
    axios.get("http://127.0.0.1:3333/getItems").then(response => {
      this.items = response.data;
    });
  },
  methods: {
    add: function(event) {
      alert(`${event.currentTarget.id}rd item added to your cart`);
    }
  }
};
</script>
