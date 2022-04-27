import DebitsController from "../controllers/DebitsController";
import { Router } from 'express';
const router = Router();

router.route('/debits').get(DebitsController.getAll);
router.route('/debits/:id').get(DebitsController.getById);
router.route('/debits/client/:id').get(DebitsController.getByClientId);

export default router;