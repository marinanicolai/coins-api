import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name ,string},
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `Coin ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `Coin ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
