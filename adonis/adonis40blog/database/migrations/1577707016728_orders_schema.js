"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrdersSchema extends Schema {
  up() {
    this.create("orders", table => {
      table.increments("orderID");
      table.timestamps();
      table.string("itemID");
      table.string("itemName");
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrdersSchema;
