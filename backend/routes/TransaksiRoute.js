import express from "express";
import {
    getTransaksi, 
    getTransaksiById,
    createTransaksi,
    updateTransaksi,
    deleteTransaksi
} from "../controllers/TransaksiController.js"

const router = express.Router();

router.get('/transaksi', getTransaksi);
router.get('/transaksi/:id', getTransaksiById);
router.post('/transaksi', createTransaksi);
router.patch('/transaksi/:id', updateTransaksi);
router.delete('/transaksi/:id', deleteTransaksi);

export default router;