import { handleValidations } from '@/modules/middleware';
import { Router } from 'express';
import { body } from "express-validator";


const router = Router();

/**
 * Product
 */

router.get('/product', (req, res) => {
  res.json({ messge: "fish" })
});

router.get('/product/:id', (req, res) => {

});

router.put('/product/:id',
  body('name').isString(),
  handleValidations,
  (req, res) => {

  }
);


router.post('/product', handleValidations, (req, res) => {

});


router.post('/product/:id', handleValidations, (req, res) => {

});


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
