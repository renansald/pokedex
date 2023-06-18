import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import RootLayout from '../layout';
import useFetch from '@/hooks/useFetch';
import { Pokemon } from '@/types';
import { Home } from 'react-feather';
import ButtonIcon from '@/components/ButtonIcon';


type Props = {}

const PokemonDetail = (props: Props) => {
  const router = useRouter();
  const pokemonName = router.query.name;
  const {data: pokemon, error, mutate} = useFetch<Pokemon>(`pokemon/${pokemonName}`, undefined);
  const pokemonIndex = pokemon?.id ? pokemon?.id<100 ? ('00' + (pokemon?.id)).slice(-3) : pokemon?.id : '000';

  const renderTypes = () => pokemon?.types.map((type, index)=>{
    return (<li key={index} className='px-2 py-1 dark:bg-slate-700 bg-gray-100 rounded-md uppercase'>
      {type.type.name}
    </li>);});
  
  const renderStats = () => pokemon?.stats.map((stat, index)=>{
    return (
      <div key={index} className='dark:bg-slate-700 bg-gray-100 my-2 rounded p-1'>
        <div className='bg-gray-300 dark:bg-slate-900 px-2 dark:text-slate-500 text-black font-bold capitalize rounded-r-xl' 
          style={{width: `${stat.base_stat < 100 ? stat.base_stat : 100}%`}}
        >
          {`${stat.stat.name}: ${stat.base_stat}`}
        </div>
      </div>
    );
  });

  console.log(pokemon);
  return (
    <RootLayout
      title={pokemon?.name}
    >
      <div className='absolute left-0 top-12'>
        <ButtonIcon onClick={()=>{router.push('/');}}>
          <Home/>
        </ButtonIcon>
      </div>

      <div
        className="flex flex-col items-center justify-center"
      >
        <span
          className="absolute text-[400px] font-bold dark:text-slate-500 text-black z-[-1]"
        >
          {`#${pokemonIndex}`}
        </span>
        <Image 
          alt={pokemon?.name || 'Pokemon Image'}
          width={400}
          height={400}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`}
        />
      </div>

      <div className='rounded p-5 bg-gray-300 dark:bg-slate-900'>
        <ul className='flex gap-5'>
          {renderTypes()}
        </ul>
      </div>

      <div>
        {renderStats()}
      </div>
    </RootLayout>
  );
};

export default PokemonDetail;