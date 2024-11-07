const mongoose = require("mongoose");

mongoose.set('debug', true);

const uri = "mongodb+srv://anjaliajithkumar22:xIYYlRTMO5tf6lzz@cluster0.trx2n.mongodb.net/e-commerce?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 60000, // Set a higher timeout
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    process.exit();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
