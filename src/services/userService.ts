// Function for fetching a list of users
import {IUser, User} from "../models/User";
import {HydratedDocument} from "mongoose";

export const getUsers = () => {
    // Perform data retrieval logic (e.g., fetch from a database)
    // Return the list of users

    return ['User 1', 'User 2', 'User 3'];
};

// Function for creating a new user
export const createUser = async (name: string, age: number) => {
    // Perform data insertion logic (e.g., insert into a database)
    // Return a success message or relevant data
    console.log("here")
    const user: HydratedDocument<IUser> = new User({
        name,
        age
    })


    try {
       return user.save();

    } catch (e) {
        console.log(e)
    }
    console.log("here 2")

    return null;
};