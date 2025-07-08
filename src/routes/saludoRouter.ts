import { Router } from 'express';
import { getAllSaludos, getSaludoById, createSaludo, updateSaludo, deleteSaludo } from '../controller/saludoController';

const router = Router();

router.get('/s', getAllSaludos);
router.get('/:id', getSaludoById);
router.post('/s', createSaludo);
router.put('/:id', updateSaludo);
router.delete('/:id', deleteSaludo);

export default router;