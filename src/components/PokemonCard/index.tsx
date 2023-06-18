import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

type Props = {
  name: string,
  index: number
}

const PokemonCard = ({name, index}: Props) => {
  const pokemonIndex = index<100 ? ('00' + (index+1)).slice(-3) : index+1;
  return (
    <Link href={`/pokemonDetails/${name}`} passHref>
      <motion.div
        className='dark:bg-slate-900 rounded p-5 flex flex-col items-center relative bg-gray-300'
        initial='hidden'
        whileInView='visible'
        transition={{duration: 1}}
        viewport={{once: true, amount: 'some'}}
        variants={{
          hidden:{opacity: 0, x:-50},
          visible: {opacity: 1, x:0}
        }}
        key={index}
      >
        <Image
          className='z-10'
          width={150}
          height={150}
          alt="Pokemon image" 
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`}
        />
        <span 
          className='absolute text-5xl dark:text-slate-500 top-0 right-3 font-bold text-black'
        >
          {`#${pokemonIndex}`}
        </span>
        <span className='uppercase font-semibold tracking-wide dark:text-amber-400 text-red-600'>
          {name}
        </span>
      </motion.div>
    </Link>
  );
};

export default PokemonCard;