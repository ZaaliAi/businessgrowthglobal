import Link from 'next/link';
import Image from 'next/image';

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/Business-Global-Growth-logo.png" 
            alt="Business Growth Global Logo"
            width={160}
            height={32}
            className="h-auto"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
