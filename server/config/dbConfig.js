const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://ecommerce-mern:up19j7021@ac-vqeapdx-shard-00-00.allosvl.mongodb.net:27017,ac-vqeapdx-shard-00-01.allosvl.mongodb.net:27017,ac-vqeapdx-shard-00-02.allosvl.mongodb.net:27017/?ssl=true&replicaSet=atlas-piin8k-shard-0&authSource=admin&appName=Cluster0/erp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Not Connected !!!", err));
