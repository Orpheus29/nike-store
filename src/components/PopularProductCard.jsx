import { useState } from 'react';

import ShoeDetails from './ShoeDetails';
import { star } from '../assets/icons';

const PopularProductCard = ({ product }) => {
  const { imgURL, rating, name, price } = product;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <div
        className='cursor-pointer'
        onClick={handleClick}
      >
        <img
          src={imgURL}
          alt='name'
          className='w-[280px] h-[280px]'
        />
        <div className='mt-8 flex justify-start gap-2.5'>
          <img
            src={star}
            alt='rating'
            width={24}
            height={24}
          />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>
            ({rating})
          </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          {name}
        </h3>
        <p className='mt-2 text-2xl text-coral-red leading-normal font-semibold font-montserrat'>
          {price}
        </p>
      </div>

      <ShoeDetails
        {...product}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default PopularProductCard;
