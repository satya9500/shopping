"use strict";

const Item = use("App/Models/ItemDatum");
const Order = use("App/Models/Order");

class PostController {
  async itemData({ response }) {
    let items;
    items = await Item.all();
    response.send(items);
  }

  async enterItem({ request, response }) {
    try {
      let item = new Item();
      item.itemID = request.body.itemID;
      item.itemName = request.body.itemName;
      item.itemDetail = request.body.itemDetail;
      await item.save();
      response.send({ success: "true" });
    } catch (err) {
      console.log(err);
      response.send({ failure: "True" });
    }
  }

  async inputOrder({ request, response }) {
    try {
      let itemName = request.body.itemName;
      let quantity = request.body.quantity;
      let items = await Item.query()
        .where("itemName", itemName)
        .fetch();
      items = items.toJSON();
      let item = new Order();
      item.itemName = request.body.itemName;
      item.itemID = items[0].itemID;
      item.total_cost = request.body.quantity * items[0].rate;
      item.quantity = request.body.quantity;
      await item.save();
      response.send(item);
    } catch (err) {
      console.log(err);
      response.send("Order Failed");
    }
  }

  async getOrders({ request, response }) {
    try {
      let orders = await Order.all();
      response.send(orders);
    } catch (err) {
      console.log(err);
      response.send("Fetching Orders Failed");
    }
  }
}

module.exports = PostController;
