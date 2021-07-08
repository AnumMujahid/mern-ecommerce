import express from 'express';
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/', getProducts);
router.get('/top', getTopProducts);
router.post('/:id/reviews', protect, createProductReview);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.put('/:id', protect, admin, updateProduct);
router.post('/', protect, admin, createProduct);

export default router;
