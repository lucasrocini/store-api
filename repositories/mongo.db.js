import mongoose from "mongoose";

async function connect() {
    const uri = "mongodb+srv://root:igti@cluster0.q3dgfjq.mongodb.net/store?retryWrites=true&w=majority";
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } );
}

export { connect } 