import type { Coin } from "../interfaces";
import useSwr from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSwr<Coin[]>("/api/coins", fetcher);

  if (error) return <div>Failed to load coins</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <ul>
        {data.map((coin) => (
          <li key={coin.id}>
            <Link href="/coin/[id]" as={`/coin/${coin.id}`}>
              {`Coin ${coin.id}`}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/images">{`Images`}</Link>
    </>
  );
}
