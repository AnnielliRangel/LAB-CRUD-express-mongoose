import {Schema, model} from "mongoose"

const purchaseSchema = new Schema(
    {
        shippingAdress: {String},
        album: [{type: Schema.ObjectId, ref: "Album"}]
    }
)

const PurchaseModel = model("Purchase", purchaseSchema)

export default PurchaseModel