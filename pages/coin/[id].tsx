import type { Coin } from '../../interfaces'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function UserPage() {
  const router = useRouter()
  const { data, error } = useSwr<Coin>(
    router.query.id ? `/api/coin/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  console.log(data);
  return (<>
   <h3>{data.name}</h3>
   <h3>image</h3>
   <h3>price: USD, GBP, EUR , BTC </h3>
   <h3>price increase % in 24H</h3>
   <h3>price decrease % in 24H</h3>
   <h3>All time high/: date </h3>
   <h3>All time low: date</h3>
   <h3>Market Cap:</h3>
   <h3>Fully Diluted Valuation:</h3>
   <h3>Volume 24h:</h3>
   <h3>Volume / Market:</h3>
   <h3>Total Volume:</h3>
   <h3>Circulating Supply:</h3>
   <h3>Max Supply:</h3>
   <h3>website for more info</h3>
   </>
  )
}
