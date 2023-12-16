'use client';

import Link from 'next/link';
import logo from '@/assets/img/logo-dark.png';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

import './styles/Header.scss';
import { useState } from 'react';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="header-wrapper">
      <nav className={`header ${isNavOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}>
        <Link className="nav-link" href={'/'}>
          Home
        </Link>
        <Link className="nav-link" href={'/'}>
          About
        </Link>
        <Link className="nav-link" href={'/'}>
          Newsletter
        </Link>
        <Image
          src={logo}
          className="logo"
          width={100}
          height={100}
          alt="Hotel Logo"
        />
        {!isNavOpen ? (
          <GiHamburgerMenu
            onClick={() => setIsNavOpen(prev => !prev)}
            className="hamburger"
          />
        ) : (
          <FaTimes
            onClick={() => setIsNavOpen(prev => !prev)}
            className="hamburger"
          />
        )}

        <Link className="nav-link" href={'/'}>
          Rooms
        </Link>
        <Link className="nav-link" href={'/'}>
          Services
        </Link>
        <Link className="nav-link" href={'/'}>
          Pricing
        </Link>
        {isNavOpen && (
          <div className="mobile-nav">
            <Link
              className="mobile-nav-link"
              onClick={() => {
                setIsNavOpen(false);
              }}
              href={'/'}>
              Home
            </Link>
            <Link
              className="mobile-nav-link"
              onClick={() => {
                setIsNavOpen(false);
              }}
              href={'/'}>
              About
            </Link>
            <Link
              className="mobile-nav-link"
              onClick={() => {
                setIsNavOpen(false);
              }}
              href={'/'}>
              Newsletter
            </Link>
            <Link
              className="mobile-nav-link"
              onClick={() => {
                setIsNavOpen(false);
              }}
              href={'/'}>
              Rooms
            </Link>
            <Link
              className="mobile-nav-link"
              onClick={() => {
                setIsNavOpen(false);
              }}
              href={'/'}>
              Services
            </Link>
            <Link
              className="mobile-nav-link"
              onClick={() => {
                setIsNavOpen(false);
              }}
              href={'/'}>
              Pricing
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
