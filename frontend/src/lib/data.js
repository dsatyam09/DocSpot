import { User } from "./models";
import { connectToDb } from "./utils";

export const getUser = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get User");
  }
};
