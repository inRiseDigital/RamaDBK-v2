import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const INVENTORY_ITEMS = [
  { href: '/stock-list', label: 'All Stocks' },
  { href: '/stock-list/discounted', label: 'Discounted Stocks' },
  { href: '/stock-list/aucnet', label: 'Aucnet Stocks' },
];

const NAV_LINKS_LEFT = [
  { href: '/', label: 'HOME' },
  { href: '/spare-parts', label: 'PARTS' },
];

const NAV_LINKS_RIGHT = [
  { href: '/services', label: 'SERVICES' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/payments', label: 'PAYMENT' },
];

const ALL_LINKS = [...NAV_LINKS_LEFT, ...INVENTORY_ITEMS, ...NAV_LINKS_RIGHT];

export default function Navbar({ transparent = false }) {
  const { url } = usePage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [mobileInventoryOpen, setMobileInventoryOpen] = useState(false);
  const inventoryTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inventoryOpenRef = useRef(false);
  const inventoryBtnRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Keep ref in sync, force nav visible, and compute dropdown position
  useEffect(() => {
    inventoryOpenRef.current = inventoryOpen;
    if (inventoryOpen) {
      setIsVisible(true);
      if (inventoryBtnRef.current) {
        const rect = inventoryBtnRef.current.getBoundingClientRect();
        setDropdownPos({
          top: rect.bottom + 12,
          left: rect.left + rect.width / 2,
        });
      }
    }
  }, [inventoryOpen]);

  // Scroll hide/show — ref-based to avoid re-registering listener
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      // Don't hide navbar while dropdown is open
      if (inventoryOpenRef.current) {
        ticking.current = false;
        return;
      }
      const currentY = window.scrollY;
      if (currentY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(currentY < lastScrollY.current);
      }
      lastScrollY.current = currentY;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Dispatch menu toggle event
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('menuToggle', { detail: { isOpen: isMenuOpen } }));
  }, [isMenuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!inventoryOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-inventory-dropdown]')) {
        setInventoryOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [inventoryOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const currentPath = url.split('?')[0];
  const isActive = (path: string) => currentPath === path;
  const isInventoryActive = INVENTORY_ITEMS.some((item) => currentPath === item.href);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-[9999] bg-transparent text-white flex-col items-center py-2 overflow-visible"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Top accent bar */}
        <motion.div
          className="w-screen h-[6px] md:h-[8px] bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{ originX: 0.5 }}
        />

        {/* Mobile hamburger */}
        <div className="absolute left-2 top-3 md:hidden z-10">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="text-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile profile icon */}
        <div className="absolute right-2 top-3 md:hidden z-10">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="text-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-8 fill-current">
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Z"/>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="md:flex w-full items-center justify-center px-8 lg:px-16 xl:px-24 text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
          {/* Left links + Inventory dropdown */}
          <div className="flex gap-x-8 lg:gap-x-12 xl:gap-x-38 flex-1 justify-end">
            {NAV_LINKS_LEFT.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  prefetch
                  className="relative hidden md:flex whitespace-nowrap group"
                >
                  <span className={isActive(link.href) ? 'text-white' : 'text-white/90 group-hover:text-white transition-colors duration-200'}>
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ease-out ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Inventory Dropdown Trigger */}
            <motion.div
              data-inventory-dropdown
              className="relative hidden md:flex"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 + NAV_LINKS_LEFT.length * 0.07, ease: "easeOut" }}
              onMouseEnter={() => {
                if (inventoryTimeout.current) clearTimeout(inventoryTimeout.current);
                setInventoryOpen(true);
              }}
              onMouseLeave={() => {
                inventoryTimeout.current = setTimeout(() => setInventoryOpen(false), 150);
              }}
            >
              <button
                ref={inventoryBtnRef}
                className="relative whitespace-nowrap group flex items-center gap-1"
                onClick={() => setInventoryOpen((v) => !v)}
              >
                <span className={isInventoryActive ? 'text-white' : 'text-white/90 group-hover:text-white transition-colors duration-200'}>
                  INVENTORY
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${inventoryOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ease-out ${
                    isInventoryActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </motion.div>
          </div>

          {/* Center Logo */}
          <motion.div
            className="-mt-2 md:-mt-4 lg:-mt-4 xl:-mt-4 2xl:-mt-4 flex flex-col items-center justify-center"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex justify-center items-center">
              <svg viewBox="0 0 463 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[40px] md:w-[320px] md:h-[43px] lg:w-[300px] lg:h-[50px] xl:w-[300px] xl:h-[60px] 2xl:w-[450px] 2xl:h-[76px]">
                <g clipPath="url(#clip0_621_1184)">
                  <path d="M1100.03 0.000215264C1100.71 -6.33681e-05 1101.27 0.553259 1101.27 1.23604L1101.27 3.70869C1101.27 4.39141 1100.71 4.94525 1100.03 4.94553L463.207 5.20541C437.554 5.21587 417.04 28.1275 396.899 44.0133C387.45 51.4657 375.522 55.9149 362.554 55.9203L99.9709 56.0275C87.0026 56.0327 75.0706 51.5932 65.6154 44.1484C45.4609 28.2791 24.928 5.38426 -0.724277 5.39473L-630.762 5.65184C-631.444 5.65212 -631.998 5.09873 -631.998 4.41602L-631.999 1.94336C-632 1.26058 -631.446 0.706805 -630.764 0.706527L1100.03 0.000215264Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_621_1184"><rect width="463" height="56" fill="white"/></clipPath>
                </defs>
              </svg>
            </div>
            <Link href="/" prefetch className="flex justify-center">
              <h1 className="flex justify-center -mt-9 md:-mt-7 lg:-mt-10 xl:-mt-12 2xl:-mt-16 font-display">
                <img src="/ramalogo.jpg" alt="RamaDBK Logo" loading="lazy" width="200" height="50" className='z-10 w-[120px] h-[30px] lg:h-[30px] xl:h-[50px] lg:w-[150px] xl:w-[200px]'/>
              </h1>
            </Link>
          </motion.div>

          {/* Right links */}
          <div className="flex gap-x-8 lg:gap-x-12 xl:gap-x-38 flex-1 justify-start">
            {NAV_LINKS_RIGHT.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + (i + NAV_LINKS_LEFT.length) * 0.07, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  prefetch
                  className="relative hidden md:flex whitespace-nowrap group"
                >
                  <span className={isActive(link.href) ? 'text-white' : 'text-white/90 group-hover:text-white transition-colors duration-200'}>
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ease-out ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Inventory Dropdown — rendered via portal to escape nav stacking context */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {inventoryOpen && (
            <motion.div
              data-inventory-dropdown
              className="fixed hidden md:flex flex-col items-center gap-3 py-3"
              style={{
                top: dropdownPos.top,
                left: dropdownPos.left,
                transform: 'translateX(-50%)',
                zIndex: 99998,
              }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={() => {
                if (inventoryTimeout.current) clearTimeout(inventoryTimeout.current);
                setInventoryOpen(true);
              }}
              onMouseLeave={() => {
                inventoryTimeout.current = setTimeout(() => setInventoryOpen(false), 150);
              }}
            >
              {INVENTORY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    prefetch
                    onClick={() => setInventoryOpen(false)}
                    className="relative whitespace-nowrap group"
                  >
                    <span className={`text-sm font-semibold transition-colors duration-200 ${
                      isActive(item.href) ? 'text-white' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ease-out ${
                        isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Mobile Menu */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-[99999] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Menu content */}
              <div className="relative flex flex-col h-full">
                {/* Close button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 text-white z-10"
                  aria-label="Close menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Logo */}
                <motion.div
                  className="flex justify-center items-center py-2 border-b border-gray-700"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <img
                    src="/ramalogo.jpg"
                    alt="RamaDBK Logo"
                    loading="lazy"
                    width="144" height="104"
                    className="w-36 h-26 object-contain"
                  />
                </motion.div>

                {/* Nav items */}
                <div className="flex-1 flex flex-col justify-center items-center space-y-8">
                  {NAV_LINKS_LEFT.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.3, delay: 0.08 + i * 0.05, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        prefetch
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-xl font-medium transition-colors duration-200 ${
                          isActive(link.href)
                            ? 'text-red-600 border-b-2 border-red-600 pb-2'
                            : 'text-white hover:text-red-500'
                        } ${link.href === '/' ? 'text-2xl font-semibold' : ''}`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Inventory Accordion */}
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3, delay: 0.08 + NAV_LINKS_LEFT.length * 0.05, ease: "easeOut" }}
                  >
                    <button
                      onClick={() => setMobileInventoryOpen((v) => !v)}
                      className={`text-xl font-medium transition-colors duration-200 flex items-center gap-2 ${
                        isInventoryActive ? 'text-red-600' : 'text-white hover:text-red-500'
                      }`}
                    >
                      INVENTORY
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileInventoryOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileInventoryOpen && (
                        <motion.div
                          className="flex flex-col items-center mt-3 space-y-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {INVENTORY_ITEMS.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              prefetch
                              onClick={() => { setIsMenuOpen(false); setMobileInventoryOpen(false); }}
                              className={`text-base transition-colors duration-200 ${
                                isActive(item.href)
                                  ? 'text-red-600 font-semibold'
                                  : 'text-gray-300 hover:text-white'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {NAV_LINKS_RIGHT.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.3, delay: 0.08 + (NAV_LINKS_LEFT.length + 1 + i) * 0.05, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        prefetch
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-xl font-medium transition-colors duration-200 ${
                          isActive(link.href)
                            ? 'text-red-600 border-b-2 border-red-600 pb-2'
                            : 'text-white hover:text-red-500'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div
                  className="text-center py-8 text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <p><span className="text-red-600 font-bold">RAMA</span>DBK Private Limited</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
