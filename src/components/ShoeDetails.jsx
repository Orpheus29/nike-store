'use client';

import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { close, star } from '../assets/icons';

const ShoeDetails = ({
  imgURL,
  rating,
  name,
  price,
  description,
  isOpen,
  closeModal,
}) => {
  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as='div'
          className='relative z-10'
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform
                  rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-3'
                >
                  <button
                    type='button'
                    onClick={closeModal}
                    className='absolute top-2 right-2 z-10 p-2.5 bg-slate-50 rounded-full outline-none'
                  >
                    <img
                      src={close}
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  <div className='w-full h-100'>
                    <img
                      src={imgURL}
                      className='object-contain w-full'
                      alt='shoe model'
                    />
                  </div>
                  <div className='flex gap-2.5'>
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
                  <h2 className='font-semibold text-2xl capitalize'>{name}</h2>
                  <h4 className='text-grey text-xl capitalize'>{price}</h4>
                  <p className='font-montserrat text-l leading-normal text-slate-gray'>
                    {description}
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ShoeDetails;
