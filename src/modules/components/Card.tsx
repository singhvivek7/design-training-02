import Image, { StaticImageData } from 'next/image';
import { FaPerson } from 'react-icons/fa6';

import './styles/Card.scss';

export interface CardProps {
  id: string;
  imgSrc: StaticImageData;
  type: string;
  title: string;
  size: number;
  description: string;
  price: number;
  priceUnit: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <Image src={props.imgSrc} width={400} height={400} alt="bed" />
        <p className="self-start font-semibold text-sm">{props.type}</p>
        <div className="flex flex-col justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <h4 className="text-3xl font-bold">{props.title}</h4>
            <div className="flex items-center justify-center gap-1 mb-2">
              <FaPerson />
              <span>{props.size}</span>
            </div>
          </div>
          <p className="text-sm my-2">{props.description}</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <span className="text-3xl font-semibold">${props.price}</span>
            <span>/{props.priceUnit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
