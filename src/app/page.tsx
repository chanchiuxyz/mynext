import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // throw new Error("Page Error")
  const data = await fetch('https://api.github.com/repos/vercel/next.js')
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <Link href='/about'>about</Link>
      </div>

    <h1 className="text-3xl font-bold underline">
      Home Page!
    </h1>
    </main>
  );
}
