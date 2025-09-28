'use client';

import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
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

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </a>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
        isScrolled ? 'border-border bg-background/80 backdrop-blur-sm' : ''
      )}
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span>Ankit Nanndoliya</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                   <a href="#" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <Code2 className="h-6 w-6 text-primary" />
                    <span>Ankit Nanndoliya</span>
                  </a>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} onClick={() => setIsMobileMenuOpen(false)} />
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
