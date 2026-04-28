import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import shortLogo from '../../content/SHORT WHITE LOGO+.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Clients', href: '#clients' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsOpen(false);
  const navTheme = isOverDark ? 'light' : 'dark';

  useEffect(() => {
    const updateTheme = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 76;
      const sampleX = window.innerWidth / 2;
      const sampleY = Math.min(window.innerHeight - 1, headerHeight + 8);
      const element = document.elementFromPoint(sampleX, sampleY);
      const themedElement = element?.closest<HTMLElement>('[data-nav-theme]');

      setIsOverDark(themedElement?.dataset.navTheme === 'dark');
    };

    updateTheme();
    window.addEventListener('scroll', updateTheme, { passive: true });
    window.addEventListener('resize', updateTheme);

    return () => {
      window.removeEventListener('scroll', updateTheme);
      window.removeEventListener('resize', updateTheme);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
        navTheme === 'light'
          ? 'border-white/12 bg-[#111017]/82 text-white'
          : 'border-black/10 bg-[#fbf7f1]/86 text-[#111114]'
      }`}
    >
      <nav className="section-shell flex min-h-[4.75rem] items-center justify-between gap-4 py-3">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-[1.15rem] border shadow-[0_10px_30px_rgba(17,17,20,0.08)] transition-colors duration-500 ${
              navTheme === 'light' ? 'border-white/14 bg-white/12' : 'border-black/10 bg-white/76'
            }`}
          >
            <img
              src={shortLogo}
              alt="Make It Happen logo"
              className="h-full w-full object-contain p-1.5"
            />
          </span>
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.18em]">
              Make It Happen
            </span>
            <span
              className={`mt-0.5 hidden text-xs font-medium transition-colors duration-500 sm:block ${
                navTheme === 'light' ? 'text-white/58' : 'text-black/55'
              }`}
            >
              Stay online. Grow IRL.
            </span>
          </span>
        </a>

        <div
          className={`hidden items-center gap-1 rounded-full border p-1 shadow-[0_14px_36px_rgba(17,17,20,0.06)] transition-colors duration-500 lg:flex ${
            navTheme === 'light' ? 'border-white/12 bg-white/8' : 'border-black/10 bg-white/56'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 xl:px-4 xl:text-xs ${
                navTheme === 'light'
                  ? 'text-white/68 hover:bg-white hover:text-[#111114]'
                  : 'text-black/58 hover:bg-[#111114] hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#ff6a1f] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,106,31,0.22)] transition-transform duration-300 hover:scale-[1.03] xl:inline-flex"
        >
          Start a project
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_12px_28px_rgba(17,17,20,0.08)] transition-colors duration-500 lg:hidden ${
            navTheme === 'light'
              ? 'border-white/14 bg-white/10 text-white'
              : 'border-black/10 bg-white/72 text-[#111114]'
          }`}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="section-shell pb-4 lg:hidden">
          <div
            className={`grid gap-2 rounded-[1.4rem] border p-2 shadow-[0_18px_44px_rgba(17,17,20,0.1)] transition-colors duration-500 ${
              navTheme === 'light' ? 'border-white/12 bg-[#111017]/94' : 'border-black/10 bg-white/88'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-[1rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  navTheme === 'light'
                    ? 'text-white/68 hover:bg-white hover:text-[#111114]'
                    : 'text-black/62 hover:bg-[#111114] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
