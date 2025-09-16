import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Mail, Phone, Linkedin, Facebook } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="contact" className="w-full py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;d love to hear from you. Reach out to us for a no-obligation chat about your business goals.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg gap-8">
              <Card>
                  <CardContent className="p-8">
                      <div className="space-y-8">
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 pt-1">
                                  <Mail className="h-6 w-6 text-accent" />
                              </div>
                              <div>
                                  <h3 className="text-lg font-semibold text-primary">Email Us</h3>
                                  <p className="text-muted-foreground">The best way to reach us for any inquiries.</p>
                                  <a href="mailto:hello@businessgrowth.global" className="mt-2 inline-block font-semibold text-accent hover:underline">
                                      hello@businessgrowth.global
                                  </a>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 pt-1">
                                  <Phone className="h-6 w-6 text-accent" />
                              </div>
                              <div>
                                  <h3 className="text-lg font-semibold text-primary">Call Us</h3>
                                  <p className="text-muted-foreground">Speak with our team directly during business hours.</p>
                                  <div className="mt-2 space-y-2">
                                      <p className="font-semibold text-primary">UK: +44 1630 411313</p>
                                      <p className="font-semibold text-primary">USA: +1 386 388 4277</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-xl">Connect with Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4">
                     <a href="https://www.linkedin.com/company/74039492/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                      <Linkedin className="h-8 w-8" />
                       <span className="sr-only">LinkedIn</span>
                    </a>
                     <a href="https://www.facebook.com/BusinessGrowthGlobal/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                      <Facebook className="h-8 w-8" />
                       <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
