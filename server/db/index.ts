import mongoose from "mongoose";

export default async (_nitroApp) => {
  //run your connect code here
  const config = useRuntimeConfig();

  //connect to mongoDB
  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log("Connectd to DB"))
    .catch((e) => console.log(e));
};
