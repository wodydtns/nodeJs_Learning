import "reflect-metadata";
import { createConnection } from "typeorm";
//import { PopupInfo } from "./entity/PopupInfo";
import { UserInfo } from "./entity/User";

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [__dirname + "/entity/*.ts"],
  synchronize: true,
  logging: ["query", "error"],
  logger: "advanced-console",
})
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");
    const user = new UserInfo();
    user.firstName = "Timber";
    user.lastName = "saw";
    user.age = 25;
    await user.save();

    // const allUsers = await UserInfo.find();
    // const firstUser = await UserInfo.findOne(1);
    const timber = await UserInfo.findOne({
      firstName: "Park",
      lastName: "Jae",
    });

    await timber.remove();
    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
