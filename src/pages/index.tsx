import { useCallback, useState } from 'react';
import PokemonCard from '@/components/PokemonCard/';
import RootLayout from './layout';
import useFetch from '@/hooks/useFetch';
import { Response } from '@/types';
import ButtonIcon from '@/components/ButtonIcon';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import api from '@/service/api';

const MAX_OFFSET = 1000;
const LAST_PAGE_SIZE = 8;
const PAGE_SIZE = 20;

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const {data: pokemons, error, mutate} = useFetch<Response>('pokemon', {params: {offset, limit}});

  const changePageHandler = useCallback(async (isNext: boolean) => {
    window.scrollTo(0, 0);
    const newOffset = isNext ? (offset + 20) : (offset - 20);
    const newLimit = newOffset < 1000 ? PAGE_SIZE : LAST_PAGE_SIZE;
    setOffset(newOffset);
    setLimit(newLimit);
    const response = await api.get('pokemon', {
      params: {
        offset: newOffset,
        limit: newLimit
      }});

    mutate(response.data, true);
  }, [offset, mutate]);


  return (
    <RootLayout>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4'>
        {(pokemons?.results || []).map((pokemon:any, index:number) => 
          <PokemonCard 
            key={index}
            name={pokemon.name} 
            index={index + offset}
          />)}
      </div>
      <div 
        className='flex items-center justify-center gap-4 p-4 dark:bg-slate-900 bg-gray-300 mt-4 h-fit'
      >
        {offset > 0 && 
        <ButtonIcon 
          onClick={() => changePageHandler(false)}
        >
          <ArrowLeftCircle/>
        </ButtonIcon>}
        {offset < 1000 &&
        <ButtonIcon
          onClick={ () => changePageHandler(true)}
        >
          <ArrowRightCircle/>
        </ButtonIcon>}
      </div>
    </RootLayout>
  );
}
