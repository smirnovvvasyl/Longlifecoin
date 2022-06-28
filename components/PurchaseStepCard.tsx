import Image from 'next/image';
import { shimmerUrl } from './blur-image';
interface IProps {
  image: string;
  title: string;
  content: string;
  label: string;
  link: string;
  padding?: number;
}

export default function PurchaseStepCard({ image, title, content, label, link, padding = 0 }: IProps) {
  return <div className="mt-8 border rounded-2xl bg-gray-700 border-gray-500 pb-8 flex flex-col items-center">
    <div className={"w-20 h-20 border rounded-lg bg-gray-900 -mt-8 overflow-hidden border-gray-500 " + (padding ? `p-${padding}` : 'p-0')}>
      <Image src={image} width="80" height="80" alt={title} placeholder="blur" blurDataURL={shimmerUrl}/>
    </div>
    <p className="text-center font-bold mt-6 mb-8">{title}</p>
    <p className="text-center mb-8">{content}</p>
    <div className="flex justify-center">
      <a target={link.startsWith('https') ? "_blank" : ''} href={link} className="btn" rel="noreferrer">{label}</a>
    </div>
  </div>
}