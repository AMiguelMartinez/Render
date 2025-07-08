import { Router } from 'express';
import { getAllSaludos, getSaludoById, createSaludo, updateSaludo, deleteSaludo } from '../controller/saludoController';

const router = Router();

router.get('/', getAllSaludos);
router.get('/:id', getSaludoById);
router.post('/', createSaludo);
router.put('/:id', updateSaludo);
router.delete('/:id', deleteSaludo);

export default router;