import User from "../models/User.js";
import { clerkClient } from "@clerk/express";

//middleware to check user authentication
export const protect = async(req, res, next) => {
    const {userId} = req.auth();
    if(!userId){
        return res.json({success: false, message: "not authenticated"});
    }

    let user = await User.findById(userId);

    // user not in MongoDB yet (Inngest webhook delayed) — create them now
    if (!user) {
        try {
            const clerkUser = await clerkClient.users.getUser(userId);
            user = await User.create({
                _id: userId,
                email: clerkUser.emailAddresses[0].emailAddress,
                username: `${clerkUser.firstName} ${clerkUser.lastName}`,
                image: clerkUser.imageUrl,
            });
        } catch (error) {
            return res.json({success: false, message: "Failed to load user profile. Please try again."});
        }
    }

    req.user = user;
    next();
}