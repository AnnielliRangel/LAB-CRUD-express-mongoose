import {Schema, model} from "mongoose"

const purchaseSchema = new Schema(
    {
        shippingAdress: {type: String},
        album: [{type: Schema.ObjectId, ref: "Album"}]
    }
)

const PurchaseModel = model("Purchase", purchaseSchema)

export default PurchaseModel