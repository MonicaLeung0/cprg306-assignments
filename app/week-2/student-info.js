import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <h1>My Name: Monica Leung</h1>
            <p>My GitHub:<Link className="text-cyan-600 underline hover:text-cyan-300" href="https://github.com/MonicaLeung0/cprg306-assignments.git">Click here to go to my GitHub</Link></p>
        </main>
    );
}