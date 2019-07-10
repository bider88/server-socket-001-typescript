import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

const server = Server.instance;

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All Ok!'
    })
});

router.post('/messages', (req: Request, res: Response) => {

    const { body, from } = req.body;

    const payload = {
        message: 'POST: All Ok!',
        from,
        body
    }

    server.io.emit('newMessage', payload);

    res.json({
        ok: true,
        ...payload
    })
});

router.post('/messages/:id', (req: Request, res: Response) => {

    const { body, from } = req.body;
    const { id } = req.params;

    const payload = {
        from,
        body,
        id
    }

    server.io.in(id).emit('private-message', payload);

    res.json({
        ok: true,
        message: 'POST: All Ok!',
        ...payload
    })
});

export default router;