import express from 'express';
import { products } from '../data/products';
import { Product } from '../types/Product';

const router = express.Router();

// GET /products - Return all products
router.get('/', (req, res) => {
  try {
    res.status(200).json(
      products,
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /products/:id - Return a specific product by ID
router.get('/:id', (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    
    if (isNaN(productId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID'
      });
    }

    const product = products.find((p: Product) => p.id === productId);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;
