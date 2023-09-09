import { User } from "#entities/user.js";
import { greet } from "#usecases/greet.js";

const user = new User("Luke");
greet(user);
