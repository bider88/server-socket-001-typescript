import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All Ok!'
    })
});

router.post('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'POST: All Ok!'
    })
});

export default router;