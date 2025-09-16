import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="contact" className="w-full py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We'd love to hear from you. Reach out to us via email or phone.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-xl space-y-8">
                <div className="flex items-center justify-center gap-4 text-lg">
                    <Mail className="h-6 w-6 text-accent" />
                    <a href="mailto:hello@businessgrowth.global" className="font-semibold text-primary hover:underline">
                        hello@businessgrowth.global
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-4 text-lg">
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-accent" />
                        <span className="font-semibold text-primary">UK: +44 1630 411313</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-accent" />
                        <span className="font-semibold text-primary">USA: +1 386 388 4277</span>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
