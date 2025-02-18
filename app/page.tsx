import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>
      <Link href={"/cabins"}>The Wild Oasis. Welcome to paradise</Link>
    </div>
  );
}
