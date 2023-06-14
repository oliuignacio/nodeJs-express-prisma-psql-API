import { Request, Response, Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { handleInputErrors } from './modules/middleware';

const router = Router();


/**
 * Product routes
 */

router.get('/product', (req: any, res: Response) => {
  res.json({message: 'message'});
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
  
});
router.post('/product',  body('name').isString(), handleInputErrors, (req, res) => {
 
});
router.delete('/product/:id', () => {});

/**
 * Update routes
 */

router.get('/', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', 
  body('title').optional(), 
  body('body').optional(), 
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']), 
  body('version').optional(),
  handleInputErrors, 
  () => {});
router.post('/update',  
  body('title').exists().isString(), // or isString() is ok too 
  body('body').exists().isString(),
  handleInputErrors,
  () => {});
router.delete('/update/:id', () => {});

/**
 * Update Point
 */

router.get('/', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id',
  body('name').optional().isString(), // or isString() is ok too 
  body('description').optional().isString(),
  handleInputErrors,
  () => {});
router.post('/updatepoint', 
  body('name').exists().isString(), // or isString() is ok too 
  body('description').exists().isString(),
  body('updateId').exists().isString(),
  handleInputErrors,
  () => {});
router.delete('/updatepoint/:id', () => {});

export default router;