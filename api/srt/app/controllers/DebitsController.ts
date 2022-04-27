import { NextFunction, Request, Response } from 'express';
import Debit from '../models/Debit';
const DebitsController = {
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        const responseBody = { success: false, message: "", data: null };
        await Debit.find().then((debits: any) => {
            responseBody.success = true;
            responseBody.data = debits;
            responseBody.message = "";
            res.status(200)
        }).catch((err) => {
            responseBody.success = false;
            responseBody.message = err.message;
        })
        res.json(responseBody)
    },
    getById: async (req: Request, res: Response, next: NextFunction) => {
        const responseBody = { success: false, message: "", data: null };
        await Debit.findById(req.params.id).then((debits: any) => {
            responseBody.success = true;
            responseBody.data = debits;
            responseBody.message = "";
            res.status(200)
        }).catch((err) => {
            responseBody.success = false;
            responseBody.message = err.message;
        })
        res.json(responseBody)
    },
    getByClientId: async (req: Request, res: Response, next: NextFunction) => {
        const responseBody = { success: false, message: "", data: null };
        await Debit.find({client: req.params.id}).then((debits: any) => {
            responseBody.success = true;
            responseBody.data = debits;
            responseBody.message = "";
            res.status(200)
        }).catch((err) => {
            responseBody.success = false;
            responseBody.message = err.message;
        })
        res.json(responseBody)
    }
};

export default DebitsController;