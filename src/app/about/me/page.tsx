import Image from "next/image";
import Link from 'next/link' 

export default function Me() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <h1>about page </h1>
          <Link href='/'>Go back home</Link>

      </div>
      <h1 className="text-3xl font-bold underline bg-red-300">
      About Me Page!
      </h1>
    </main>
  );
}
