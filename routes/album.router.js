import express from "express";
import AlbumModel from "../models/album.model.js";
import PurchaseModel from "../models/purchase.model.js";

const albumRoute = express.Router();

//2.1 Crie a rota POST /albums
albumRoute.post("/create-album", async (req, res) => {
  try {
    const newalbum = await AlbumModel.create(req.body);
    return res.status(201).json(newalbum);
  } catch (error) {
    console.log(error);
    return res._construct(500).json(error);
  }
});

//2.2 Crie a rota GET /albums
albumRoute.get("/all-albuns", async (req, res) => {
  try {
    const allAlbuns = await AlbumModel.find();
    return res.status(200).json(allAlbuns);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//2.3 Crie a rota GET /albums/:albumId
albumRoute.get("/one-album/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const album = await AlbumModel.findById(albumId);
    return res.status(200).json(album);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//2.4 Crie a rota PUT /albums/:albumId

albumRoute.put("/edit/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const updatedAlbum = await AlbumModel.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//2.5 Crie a rota DELETE /albums/:albumId
albumRoute.delete("/delete/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const deletedAlbum = await AlbumModel.findByIdAndDelete(albumId);
        if(!deletedAlbum){
            return res.status(400).json({msg:"Don't find"})
        }
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default albumRoute;
