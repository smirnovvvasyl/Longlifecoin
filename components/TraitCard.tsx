import { useMemo } from 'react';
import Image from 'next/image';
import { Trait, TraitType } from '../types';

interface Props {
  traitType: TraitType;
  trait: Trait;
}

export default function TraitCard({ traitType, trait }: Props) {
  const imagePath = useMemo(() => {
    return `/assets/traits/${traitType.toLowerCase()}/${trait.name}.png`;
  }, [trait])
  return <div className="rounded-3xl flex flex-col overflow-hidden border-2">
    <div className="w-full">
      <Image src={imagePath} width="250" height="250" layout="responsive" alt={trait.name}/>
    </div>
    <div className="text-center bg-black pt-2 pb-4">
      <p className="uppercase text-2xl font-bold">{trait.name}</p>
    </div>
  </div>
}