// mongodb://localhost:27017


// Import the mongoose module
const mongoose = require("mongoose");


mongoose.set("strictQuery", false);

const mongoDB = "mongodb://127.0.0.1/calculator";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}
