import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import Client from "../models/Client";
import Debit from '../models/Debit';
const ClientsController = {
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        const responseBody = { success: false, message: "", data: null };
        await Client.find()
            .then((result: any) => {
                responseBody.success = true;
                responseBody.message = "List of clients found";
                responseBody.data = result;
            })
            .catch((err: string) => {
                responseBody.success = false;
                responseBody.message = err;
                res.status(400);
            });
        res.json(responseBody);
    },
    getById: async (req: Request, res: Response, next: NextFunction) => {
        const responseBody = { success: false, message: "", data: null };
        await Client.findById(req.params.id).then((result) => {
            responseBody.success = true;
            responseBody.message = "Client found by Id";
            responseBody.data = result
            res.status(201);
        });

        res.json(responseBody);
    },
    create: async (req: Request, res: Response, next: NextFunction) => {
        const responseBody = { success: false, message: "", data: null };
        const body = req.body;
        const client = new Client({ first_name: body.first_name, last_name: body.last_name, cpf: body.cpf });

        await client.save()
            .then((result: any) => {
                responseBody.success = true;
                responseBody.message = "new client added successfully";
                responseBody.data = result
                res.status(201);
            })
            .catch((err: any) => {
                responseBody.success = false;
                responseBody.message = err.message;
                res.status(400);
            })
        res.json(responseBody);
    },
    addDebit: async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
        const responseBody = { success: false, message: "", data: null };

        await Client.findById(req.params.id).then(async client => {
            const debit = new Debit({ client: client, date_expiration: body.date_expiration, description: body.description, value: body.value });
            await debit.save().then((result: any) => {
                responseBody.success = true;
                responseBody.message = "new debit added to client successfully";
                responseBody.data = result
                res.status(201);
            }).catch((err: any) => {
                responseBody.success = false;
                responseBody.message = err.message;
                res.status(400);
            })
        }).catch(err => {
            responseBody.success = false;
            responseBody.message = 'Client id not found';
            res.status(400);
        })

        res.json(responseBody);
    },
// {$unionWith: {coll: "client", pipeline: [{$project: {'first_name': 1}}


    listClientsWithPending: async (req: Request, res: Response, next: NextFunction) => {
        const responseBody = { success: false, message: "", data: [] };
        await Debit.aggregate([{$match: {date_expiration: {$lte: moment().format('YYYY-MM_DD')}}},{
            $lookup: {from: 'clients', localField: 'client', foreignField: '_id', as: 'client'},
        }, {$unwind: "$client"}, {$addFields: {first_name: "$client.first_name", last_name: "$client.last_name", cpf: "$client.cpf"}}, {$project: {client: 0}}])
            .then((clients: any) => {
                responseBody.success = true;
                responseBody.data = clients;
            }).catch((err) => {
                console.log(err);
                responseBody.message = err.messege
            })
        res.send(responseBody)
    }
}
export default ClientsController;