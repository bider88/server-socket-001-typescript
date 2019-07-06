import { Router, Request, Response } from 'express';
import Server from '../classes/server';

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

    const payload = {
        from,
        body
    }

    const server = Server.instance;

    server.io.in(id).emit('private-message', payload)

    res.json({
        ok: true,
        message: 'POST: All Ok!',
        ...payload,
        id
    })
});

export default router;