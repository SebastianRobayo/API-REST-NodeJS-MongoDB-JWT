import { Router } from "express";
import * as productsController from '../controllers/products.controller';
import {verifyToken} from '../middlewares'

const router = Router();


router.post('/', verifyToken, productsController.createProduct);
router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', productsController.updateProductById);
router.delete('/:productId', productsController.deleteProductById);

export default router;