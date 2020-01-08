"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ItemDataSchema extends Schema {
  up() {
    this.create("item_data", table => {
      table.increments();
      table.timestamps();
      table.string("itemID");
      table.string("itemName");
      table.string("itemDetail");
    });
  }

  down() {
    this.drop("item_data");
  }
}

module.exports = ItemDataSchema;
