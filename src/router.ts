import { handleValidations } from '@/modules/middleware';
import { Router } from 'express';
import { body } from "express-validator";
import { createProduct, updateProduct, getOneProduct, getProducts, deleteProduct } from '@/handlers/product';


const router = Router();

/**
 * Product
 */

router.get('/product', getProducts);

router.get('/product/:id', getOneProduct);

router.put('/product/:id',
  body('name').isString(),
  handleValidations,
  updateProduct,
);


router.post('/product', handleValidations, createProduct);

router.delete('/product/:id', handleValidations, deleteProduct);


/**
 * Update
 */

router.get('/update', (req, res) => {

});

router.get('/update/:id', (req, res) => {

});

router.put('/update/:id', handleValidations, (req, res) => {

});


router.post('/update', handleValidations, (req, res) => {

});


router.post('/update/:id', handleValidations, (req, res) => {

});

/**
 * Update Point
 */

router.get('/update-point', (req, res) => {

});

router.get('/update-point/:id', (req, res) => {

});

router.put('/update-point/:id', handleValidations, (req, res) => {

});


router.post('/update-point', handleValidations, (req, res) => {

});


router.delete('/update-point/:id', (req, res) => {

});

export default router;
