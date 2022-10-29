import type { NextApiRequest, NextApiResponse } from 'next'
import type { Coin } from '../../interfaces'

// Fake users data
const coins: Coin[] = [{ id: 1 ,name:"bitcoin", src: "/bitcoin.jpg"}]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(coins)
}
