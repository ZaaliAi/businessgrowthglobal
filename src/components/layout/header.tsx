import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ArrowRight, ChevronDown } from 'lucide-react';
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary/80 focus:outline-none">
              Programs <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/programs" className="cursor-pointer w-full">1-2-1 Programs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/the-circle-club" className="cursor-pointer w-full">The Circle Club</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/aerops-framework" className="transition-colors hover:text-primary/80">AEROPS</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary/80 focus:outline-none">
              Organizations <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/for-profits" className="cursor-pointer w-full">For-Profits</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/non-profits" className="cursor-pointer w-full">Non-Profits</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vc-backed" className="cursor-pointer w-full">VC-Backed</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary/80 focus:outline-none">
              About Us <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/case-studies" className="cursor-pointer w-full">Case Studies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/our-team" className="cursor-pointer w-full">Our Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/media" className="cursor-pointer w-full">Media</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog" className="cursor-pointer w-full">Blog</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                    <div className="block px-2 py-1 font-medium">Programs</div>
                    <div className="pl-6 grid gap-2 text-base">
                      <Link href="/programs" className="block py-1 transition-colors hover:text-primary/80">1-2-1 Programs</Link>
                      <Link href="/the-circle-club" className="block py-1 transition-colors hover:text-primary/80">The Circle Club</Link>
                    </div>
                    <Link href="/aerops-framework" className="block px-2 py-1 transition-colors hover:text-primary/80">AEROPS</Link>
                    <div className="block px-2 py-1 font-medium">Organizations</div>
                    <div className="pl-6 grid gap-2 text-base">
                      <Link href="/for-profits" className="block py-1 transition-colors hover:text-primary/80">For-Profits</Link>
                      <Link href="/non-profits" className="block py-1 transition-colors hover:text-primary/80">Non-Profits</Link>
                      <Link href="/vc-backed" className="block py-1 transition-colors hover:text-primary/80">VC-Backed</Link>
                    </div>
                    <div className="block px-2 py-1 font-medium">About Us</div>
                    <div className="pl-6 grid gap-2 text-base">
                      <Link href="/case-studies" className="block py-1 transition-colors hover:text-primary/80">Case Studies</Link>
                      <Link href="/our-team" className="block py-1 transition-colors hover:text-primary/80">Our Team</Link>
                      <Link href="/media" className="block py-1 transition-colors hover:text-primary/80">Media</Link>
                      <Link href="/blog" className="block py-1 transition-colors hover:text-primary/80">Blog</Link>
                    </div>
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
