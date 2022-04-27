import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const router = Router();

router.route('/clients')
    .get(ClientsController.getAll)
    .post(ClientsController.create)

router.route('/clients/debits')
    .get(ClientsController.listClientsWithPending)

router.route('/clients/:id')
    .get(ClientsController.getById)

router.route('/clients/:id/debits')
    .post(ClientsController.addDebit)


export default router;