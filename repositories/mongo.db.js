import mongodb from "mongodb";

function getClient() {
    const uri = "mongodb+srv://root:igti@cluster0.q3dgfjq.mongodb.net/?retryWrites=true&w=majority"
    return new mongodb.MongoClient(uri);
}

export { getClient } 