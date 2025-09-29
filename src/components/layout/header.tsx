'use client';

import { useState, useEffect } from 'react';
import { Code2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import TimeWeatherWidget from '../time-weather-widget';

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
      className="font-normal text-xs text-foreground transition-all duration-300 hover:text-primary hover:scale-110"
      style={{ animationDelay: `${delay}ms`}}
    >
      {label}
    </a>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled ? 'border-border' : 'border-transparent',
        'bg-background/95 backdrop-blur-xl'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <Code2 className="h-6 w-6 text-primary" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[20%] bg-black/5 backdrop-blur-lg p-2">
              <div className="flex h-full flex-col items-start gap-4">
                 <nav className="flex flex-1 flex-col items-start justify-center gap-1">
                  {navLinks.map((link, index) => (
                     <div key={link.href} className={cn('opacity-0 animate-fade-in-up', isMobileMenuOpen && 'opacity-100')}>
                      <SheetClose asChild>
                        <NavLink
                          {...link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          delay={index * 100 + 100}
                        />
                      </SheetClose>
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
