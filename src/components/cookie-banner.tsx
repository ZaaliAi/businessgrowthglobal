'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground p-4 shadow-lg animate-in slide-in-from-bottom-full">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="flex-shrink-0 flex gap-2">
          <Button onClick={handleAccept} size="sm">Accept</Button>
        </div>
      </div>
    </div>
  );
}
