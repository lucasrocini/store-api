import { getClient } from "./mongo.db.js"

async function createProductInfo(productInfo){
    const client = getClient();
    try {
        await client.connect();
        await client.db("store").collection("productInfo").insertOne(productInfo);
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
}

export default {
    createProductInfo
}