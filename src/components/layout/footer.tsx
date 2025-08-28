import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-primary">Business Growth Global</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Business Growth Global. All rights reserved.
          </p>
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
