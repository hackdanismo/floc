import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/news">News</Link>
      </nav>

      <h1>Home</h1>
    </>
  );
}
