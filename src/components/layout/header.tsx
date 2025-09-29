'use client';

import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '../theme-switcher';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, onClick, delay }: { href: string; label: string; onClick?: () => void, delay?: number }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
      style={{ animationDelay: `${delay}ms`}}
    >
      {label}
    </a>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
        isScrolled ? 'border-border bg-background/5 backdrop-blur-xl' : ''
      )}
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <div className="flex flex-col leading-tight">
            <span>Ankit</span>
            <span>Nandoliya</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
           <ThemeSwitcher />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
         <ThemeSwitcher />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background/95 backdrop-blur-xl">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                   <a href="#" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <Code2 className="h-6 w-6 text-primary" />
                    <div className="flex flex-col leading-tight">
                      <span>Ankit</span>
                      <span>Nandoliya</span>
                    </div>
                  </a>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                     <div key={link.href} className={cn('opacity-0 animate-fade-in-up', isMobileMenuOpen && 'opacity-100')}>
                      <NavLink
                        {...link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        delay={index * 100 + 100}
                      />
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
