import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World from Nextjs.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
