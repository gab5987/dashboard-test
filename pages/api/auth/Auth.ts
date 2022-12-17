import type { NextApiRequest, NextApiResponse } from 'next'
import conn from '../database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const jdw = req.query.jdw;

    const queryLogin = `SELECT * FROM jdw_holder WHERE jdw = '${jdw}'`
    const result = await conn.query(queryLogin)

    result.rows[0] ? res.status(200).json("ok") : res.status(401).json("haha ur not allowed bitch");
}
