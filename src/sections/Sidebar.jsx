import { navLinks } from '../constants';

import { headerLogo } from '../assets/images';
import { close } from '../assets/icons';

const Sidebar = ({ setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <aside
      className='padding-x py-8 absolute z-10 w-full'
      onClick={toggleMenu}
    >
      <div className='flex justify-between items-center max-container mb-10'>
        <a href='#home'>
          <img
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </a>
        <div
          className='px-4 cursor-pointer'
          onClick={toggleMenu}
        >
          <img
            src={close}
            alt='close'
            width={25}
            height={25}
          />
        </div>
      </div>

      <nav className='flex justify-between items-center'>
        <ul className='flex-1 flex flex-col items-center gap-6'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-xl font-semibold text-slate-gray uppercase'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
