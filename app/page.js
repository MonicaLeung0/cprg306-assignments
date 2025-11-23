import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-2">Week 2 Assignments</Link></li>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-3">Week 3 Assignments</Link></li>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-4">Week 4 Assignments</Link></li>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-5">Week 5 Assignments</Link></li>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-6">Week 6 Assignments</Link></li>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-7">Week 7 Assignments</Link></li>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-8">Week 8 Assignments</Link></li>        
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-9">Week 9 Assignments</Link></li>


      
      </ul>
    </main>
  );
}