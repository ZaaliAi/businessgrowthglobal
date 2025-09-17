import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ArrowRight } from 'lucide-react';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import SignOutButton from './sign-out-button';

export default async function Header() {
  const supabase = await createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 mr-2">
          <Image 
            src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Business-Global-Growth-logo.png" 
            alt="Business Growth Global Logo"
            width={160}
            height={32}
            className="h-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/programs" className="transition-colors hover:text-primary/80">Programs</Link>
          <Link href="/case-studies" className="transition-colors hover:text-primary/80">Case Studies</Link>
          <Link href="/media" className="transition-colors hover:text-primary/80">Media</Link>
          <Link href="/our-founder" className="transition-colors hover:text-primary/80">Our Founder</Link>
          <Link href="/meet-the-team" className="transition-colors hover:text-primary/80">Meet the Team</Link>
          <Link href="/blog" className="transition-colors hover:text-primary/80">Blog</Link>
          <Link href="/contact" className="transition-colors hover:text-primary/80">Contact</Link>
          {session && (
             <Link href="/admin" className="transition-colors hover:text-primary/80">Admin</Link>
          )}
        </nav>
        <div className="flex items-center justify-end gap-4">
           {session ? (
            <SignOutButton />
           ) : (
            <Button asChild className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                  Book a Discovery Call
              </Link>
            </Button>
           )}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                <Link href="/" className="mr-6 flex items-center">
                  <Image 
                    src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Business-Global-Growth-logo.png" 
                    alt="Business Growth Global Logo"
                    width={180}
                    height={36}
                  />
                </Link>
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link href="/programs" className="block px-2 py-1 transition-colors hover:text-primary/80">Programs</Link>
                    <Link href="/case-studies" className="block px-2 py-1 transition-colors hover:text-primary/80">Case Studies</Link>
                    <Link href="/media" className="block px-2 py-1 transition-colors hover:text-primary/80">Media</Link>
                    <Link href="/our-founder" className="block px-2 py-1 transition-colors hover:text-primary/80">Our Founder</Link>
                    <Link href="/meet-the-team" className="block px-2 py-1 transition-colors hover:text-primary/80">Meet the Team</Link>
                    <Link href="/blog" className="block px-2 py-1 transition-colors hover:text-primary/80">Blog</Link>
                    <Link href="/contact" className="block px-2 py-1 transition-colors hover:text-primary/80">Contact</Link>
                    {session && (
                      <Link href="/admin" className="block px-2 py-1 transition-colors hover:text-primary/80">Admin</Link>
                    )}
                  </nav>
                  {session ? (
                    <SignOutButton />
                  ) : (
                    <Button asChild>
                      <Link href="/contact">
                          Book a Discovery Call
                      </Link>
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
