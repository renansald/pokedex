import PokemonCard from '@/components/PokemonCard/';
import RootLayout from './layout';
import useFetch from '@/hooks/useFetch';
import { Response } from '@/types';

export default function Home() {
  const {data: pokemons, error} = useFetch<Response>('pokemon');
  return (
    <RootLayout>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4'>
        {(pokemons?.results || []).map((pokemon:any, index:number) => 
          <PokemonCard 
            key={index}
            name={pokemon.name} 
            index={index}
          />)}
      </div>
    </RootLayout>
  );
}
