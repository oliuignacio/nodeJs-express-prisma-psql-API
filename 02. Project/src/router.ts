import { Request, Response, Router } from 'express';

const router = Router();


/**
 * Product routes
 */

router.get('/product', (req: any, res: Response) => {
  res.json({message: 'message'});
});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
router.post('/product', () => {});
router.delete('/product/:id', () => {});

/**
 * Update routes
 */

router.get('/', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.post('/update', () => {});
router.delete('/update/:id', () => {});

/**
 * Update Point
 */

router.get('/', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', () => {});
router.post('/updatepoint', () => {});
router.delete('/updatepoint/:id', () => {});

export default router;