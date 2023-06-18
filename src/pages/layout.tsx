import Head from 'next/head';
import ThemeSelector from '@/components/ThemeSelector';
import { type } from 'os';

type Props = {
  children: React.ReactNode,
  title?: string,
}

export default function RootLayout({children, title='Pokedex'}: Props) {
  return (
    <>
      <Head>
        <title>PokeDex</title>
        <meta name='description' content='PokeDex using poke api'/>
      </Head>
      <header 
        className='dark:bg-slate-900 bg-gray-300 py-10 mb-10 flex flex-row items-center justify-between'>
        <h1 
          className='text-6xl capitalize text-center dark:text-amber-400 text-red-600 flex-1'
        >
          {title}
        </h1>
        <ThemeSelector />
      </header>
      {children}
    </>
  );
}
