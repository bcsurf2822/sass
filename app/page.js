import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

<h1>Collect customer feedback to build better products</h1>
<p>Create a feedback board in minuites, build products that your customers will love!</p>
{/* a causes a refresh */}
{/* link will be almost instant */}
<Link href="/dashboard">Dash</Link>

    </main>
  );
}
