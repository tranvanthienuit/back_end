const Order = require("../models/Order");
const mongoose = require("mongoose");
class OrderController {
  //CREATE
  createOrder = async (req, res) => {
    //console.log(req.body);
    const newOrder = new Order(req.body);

    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //UPDATE
  updatedOrder = async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //DELETE
  deleteOrder = async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //GET USER ORDERS
  getUserOrders = async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  // //GET ALL

  getAllOrders = async (req, res) => {
    try {
      const orders = await Order.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "products._id",
            foreignField: "_id",
            as: "product",
          },
        },
        // { $unwind: "$product" },
        // {
        //   $project: {
        //     _id: "$product._id",
        //     title: "$product.title",
        //     quantity: "$products.quantity",
        //   },
        // },
      ]);
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  getOrderByUserId = async (req, res) => {
    let { userId } = req;
    try {
      let ordersByUserId = await Order.aggregate([
        {
          $match: { userId: mongoose.Types.ObjectId(userId) },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "products._id",
            foreignField: "_id",
            as: "product",
          },
        },
      ]);
      if (ordersByUserId) {
        res.status(200).json(ordersByUserId);
      } else {
        res.status(200).json({
          message: "Không có hóa đơn nào",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(200).json({
        errCode: -1,
        message: "Lỗi server",
      });
    }
  };

  // GET MONTHLY INCOME

  getMonthlyIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );

    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

module.exports = new OrderController();
