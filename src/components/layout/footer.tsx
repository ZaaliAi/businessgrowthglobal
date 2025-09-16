import { Linkedin, Mail, Phone, LogIn, Users, Facebook } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 py-12 md:flex-row md:items-start">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-primary">Business Growth Global LTD</p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Business Growth Global LTD. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center sm:justify-start gap-6">
            <a href="https://associationofbusinessmentors.org/find-a-mentor/user/15588/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <div className="relative h-12 w-24">
                <Image
                  src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/abm.png"
                  alt="Association of Business Mentors Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <a href="https://www.emccglobal.org/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <div className="relative h-12 w-24">
                <Image
                  src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/cropped-emcc-uk-member-logo-transparent.png"
                  alt="EMCC UK Member Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <a href="https://www.armedforcescovenant.gov.uk/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Armed-Forced-Covenant.jpg"
              alt="Armed Forces Covenant"
              width={200}
              height={100}
              className="h-auto"
            />
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="text-md font-semibold text-primary">Contact Us</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:hello@businessgrowth.global" className="hover:text-primary">
              hello@businessgrowth.global
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>UK: +44 1630 411313</span>
          </div>
           <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>USA: +1 386 388 4277</span>
          </div>
           <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <LogIn className="h-4 w-4" />
            <Link href="/login" className="hover:text-primary">
              Admin Login
            </Link>
          </div>
           <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <Link href="/meet-the-team" className="hover:text-primary">
              Meet the Team
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/company/74039492/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary hover:text-primary/80">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.facebook.com/BusinessGrowthGlobal/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary hover:text-primary/80">
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
