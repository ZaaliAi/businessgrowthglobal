'use client';

import { Badge } from '@/components/ui/badge';
import WebinarRegistrationForm from './webinar-registration-form';

export default function ScaleSmarterRegistrationSection() {
  return (
    <section id="register" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Secure Your Spot</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Register for the AEROPS Webinar Series
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete the form below to get access to all 8 sessions and qualify for our exclusive giveaways.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <WebinarRegistrationForm />
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            By registering, you'll receive session reminders and exclusive growth resources.
          </p>
        </div>
      </div>
    </section>
  );
}
