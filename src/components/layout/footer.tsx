import { Linkedin, Twitter, Mail, Phone, LogIn } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 py-12 md:flex-row md:items-start">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-primary">Business Growth Global</p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Business Growth Global. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="text-md font-semibold text-primary">Contact Us</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@businessgrowthglobal.com" className="hover:text-primary">
              info@businessgrowthglobal.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+44 1234 567890</span>
          </div>
           <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <LogIn className="h-4 w-4" />
            <Link href="/login" className="hover:text-primary">
              Admin Login
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
