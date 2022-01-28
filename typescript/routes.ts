import { Request, Response } from 'express'

export function helloFriend(req: Request, res: Response) {
    return res.send('Hello Friend');
}