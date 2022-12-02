import {Schema, model} from "mongoose"

const albumSchema = new Schema (
    {
        performer: {String},
        title: {String},
        cost: {Number}

    }
)

const AlbumModel = model("Album", albumSchema)

export default AlbumModel