import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4 item-center m-20">
      <Link href="/1">One</Link>
      <Link href="/2">Two</Link>
      <Link href="/3">Three</Link>
    </div>
  );
}
