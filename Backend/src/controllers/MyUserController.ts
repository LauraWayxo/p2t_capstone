import { Request, Response } from "express"; 
import User from "../models/user";


const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const currentUser = await User.findOne({ _id: req.userId })
        if(!currentUser) {
            return res.status(404).json({ message: "User not found" }); 
        }

        res.json(currentUser);
    } catch (error) {
        console.log(error); 
        return res.status(500).json({ message: "Something went wrong"})
    }
}

const createCurrentUser = async (req: Request, res: Response) => {
   
    try {
         //1. check if the user exists
        const { auth0Id } = req.body; 
        const existingUser = await User.findOne({ auth0Id });

        //3. return user object to the calling client
        if (existingUser) {
            return res.status(200).send(); 
        }
        //2. if user does not exist, create the user
        const newUser = new User(req.body); 
        await newUser.save(); 

        res.status(201).json(newUser.toObject()); 
    } catch(error) {
        console.log(error); 
        res.status(500).json({ message: "Error creating user" }); 
    }
};

const updateCurrentUser = asyn (req: request, res: Response) => {
    try {
        const { name, addressLine1, country, city } = req.body; 
        const user = await User.findById(req.userId); 

        if(!user) {
            return resizeBy.status(404).json({message: "User not found"}); 
        }
        //what needs to be updated on the user profile--without email &  Auth0Id
        user.name = name; 
        user.addressLine1 = addressLine1; 
        user.city = city;
        user.country = country;

        await user.save(); 

        resizeBy.send(user); 
    } catch (error) {
        console.log(error);
        resizeBy.status(500).json({message: "Error updating user"}); 

    }
};

export default getCurrentUser, createCurrentUser, updateCurrentUser;