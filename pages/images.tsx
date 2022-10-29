import Image from "next/image";
import useSwr from "swr";

import type { Image as ImageType } from "../interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSwr<ImageType[]>("/api/images", fetcher);

  if (error) return <div>Failed to load images</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((image) => (
        <li key={image.id}>
          <Image src={image.src} alt="me" width="64" height="64" />
        </li>
      ))}
    </ul>
  );
}
