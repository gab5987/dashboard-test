
import type { NextApiRequest, NextApiResponse } from 'next'
import conn from '../database';

const Crypto = require('crypto')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const pass = req.query.ps;
    const email = req.query.em;

    const queryLogin = `SELECT user_id FROM users WHERE pass = '${pass}' AND email = '${email}'`
    const result = await conn.query(queryLogin)

    if(result.rows[0]) {
      const generatedJdw: string = randomString();
      await conn.query(`INSERT INTO jdw_holder(jdw) VALUES('${generatedJdw}')`)

      res.status(200).json({
        result: result.rows,
        jdw: generatedJdw,
      });
    } 
    
    else res.status(401).json("haha ur not allowed bitch");
}

function randomString(size = 32) {  
  return Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)
}
