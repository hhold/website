import Link from "next/link";

export default function FOF() {
  return (
    <div className="container p-20 pt-40">
      <div className="text-center mb-10">
        <p className="text-3xl font-semibold mb-4">Ima keep it real with u chief</p>
        <p className="text-xl font-normal">This link doesn't work, it's probably a 404.</p>
        
      </div>

      <div className="text-white text-center font-sans text-xl">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}
