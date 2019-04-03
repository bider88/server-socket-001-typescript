import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All Ok!'
    })
});

router.post('/messages', (req: Request, res: Response) => {

    const { body, from } = req.body;

    res.json({
        ok: true,
        message: 'POST: All Ok!',
        body,
        from
    })
});

router.post('/messages/:id', (req: Request, res: Response) => {

    const { body, from } = req.body;
    const { id } = req.params;

    res.json({
        ok: true,
        message: 'POST: All Ok!',
        body,
        from,
        id
    })
});

export default router;