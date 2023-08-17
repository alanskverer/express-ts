import {Request, Response} from 'express';

import * as userService from '../services/userService';

// Controller function for listing users
export const getUsers = (req: Request, res: Response) => {
    res.json({
        users: userService.getUsers()
    });
};

// Controller function for displaying the new user form
export const createUser = (req: Request, res: Response) => {
    return res.json({
        message: userService.createUser("name", 13)
    })
};