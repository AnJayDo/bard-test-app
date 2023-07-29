import Link from "next/link";

export default function NavigationBar() {
  const logoStyles = 'flex justify-center items-center w-fit';
  return (
    <nav className='flex justify-between w-full py-2 px-4 fixed top-0 left-0'>
      <Link href="/" className={logoStyles}>
        <span className="font-bold text-3xl">Bard</span>
        <span className='ml-2 text-sm px-1 py-0.5 border rounded-lg border-blue-500 text-blue-500'>Experiment</span>
      </Link>
      <Link href="/ask" className="min-w-[120px] px-3 py-1.5 font-bold text-zinc-900 bg-blue-400 text-center rounded">Try now!</Link>
    </nav>
  );
}
