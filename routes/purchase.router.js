import express from "express";
import AlbumModel from "../models/album.model.js";
import PurchaseModel from "../models/purchase.model.js";

const purchaseRoute = express.Router();

//3.1 Crie a rota POST /purchases

purchaseRoute.post("/new-purchase/", async (req, res) => {
  try {
    const newPurchase = await PurchaseModel.create(req.body);

    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//3.2 Crie a rota GET /purchases/:purchaseId
purchaseRoute.get("/onePurchase/:purchaseId", async (rq, res) => {
  try {
    const { purchaseId } = req.params;
    const purchase = await PurchaseModel.findById(purchaseId).populate("album");
    return res.status(200).json(purchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default purchaseRoute;
