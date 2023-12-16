import logo from '@/assets/img/logo-light.png';
import './styles/Footer.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="flex flex-col justify-center items-center lg:items-start gap-8">
          <p className="text-3xl">Newsletter & Special Promo</p>
          <div className="">
            <input
              type="text"
              placeholder="Enter your email here"
              className="rounded-l-xl py-3 px-5 text-black/90 md:text-2xl outline-none w-52 md:w-72"
            />
            <button className="py-3 px-5 md:text-2xl bg bg-teal-500 text-white rounded-r-xl">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <Image
            className="self-center"
            src={logo}
            width={120}
            height={120}
            alt="logo"
          />
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <Link href={'/'}>About Us</Link>
              <Link href={'/'}>Contact</Link>
              <Link href={'/'}>Location</Link>
            </div>
            <div className="flex flex-col">
              <Link href={'/'}>FAQ</Link>
              <Link href={'/'}>Terms of Use</Link>
              <Link href={'/'}>Privacy Policy</Link>
            </div>
            <div className="flex flex-col">
              <Link href={'/'}>Services & Facilities</Link>
              <Link href={'/'}>Career</Link>
              <Link href={'/'}>How to book</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <p className="border-t-[1px] border-dashed border-gray-100/40 w-fit pt-2 text-sm">
          © Copyright Booking Hotels. All right reserved.
        </p>
      </div>
    </footer>
  );
};
