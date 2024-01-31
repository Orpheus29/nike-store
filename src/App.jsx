import { useState } from 'react';

import {
  Hero,
  Footer,
  Sidebar,
  Services,
  Subscribe,
  SpecialOffer,
  SuperQuality,
  CustomerRewiews,
  PopularProducts,
} from './sections';

import { Nav } from './components';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen ? (
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      ) : (
        <main className='relative'>
          <Nav setIsMenuOpen={setIsMenuOpen} />

          <section className='xl:padding-l wide:padding-r padding-b'>
            <Hero />
          </section>

          <section className='padding'>
            <PopularProducts />
          </section>

          <section className='padding'>
            <SpecialOffer />
          </section>

          <section className='padding'>
            <SuperQuality />
          </section>

          <section className='padding-x py-24'>
            <Services />
          </section>

          <section className='bg-pale-blue padding'>
            <CustomerRewiews />
          </section>

          <section className='padding-x sm:py-32 py-16 w-full'>
            <Subscribe />
          </section>

          <section className='bg-black padding-x padding-t pb-8'>
            <Footer />
          </section>
        </main>
      )}
    </>
  );
};

export default App;
