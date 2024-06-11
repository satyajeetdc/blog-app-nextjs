import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionURL =
    "mongodb+srv://satyajeetdc:gJbmMtk4y6wdiRnq@cluster0.7iliejy.mongodb.net/";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("db is connected"))
    .catch((error) => console.log(error));
};

export default connectToDB;
