'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';
import { useState } from 'react';
import { MoveRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  orgName: z.string().min(2, { message: 'Organisation Name must be at least 2 characters.' }),
  website: z.string().url({ message: 'Please enter a valid URL (include http:// or https://).' }).optional().or(z.literal('')),
  annualIncome: z.string({ required_error: "Please select an income range." }),
  primaryChallenge: z.string().min(10, { message: 'Challenge description must be at least 10 characters.' }),
});

export default function NonProfitForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      orgName: '',
      website: '',
      primaryChallenge: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const structuredMessage = `
Organisation Name: ${values.orgName}
Website: ${values.website || 'N/A'}
Annual Income: ${values.annualIncome}

Primary Challenge:
${values.primaryChallenge}
      `.trim();

      const { error } = await supabase.functions.invoke('contact-form', {
        body: {
            name: values.name,
            email: values.email,
            message: structuredMessage
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      toast({
        title: 'Application Received!',
        description: "We've received your mission health audit request. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: (error as Error).message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="audit-form" className="w-full py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Apply for Your Free "Mission Health" Audit</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete the form below to qualify for your complimentary session.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl bg-card p-8 rounded-xl shadow-sm border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="jane@charity.org" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="orgName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organisation Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Community First" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="annualIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Income Range</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select annual income" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<£100k">&lt; £100k / $150k</SelectItem>
                        <SelectItem value="£100k-£1M">£100k - £1M ($150k - $1.5M)</SelectItem>
                        <SelectItem value="£1M-£5M">£1M - £5M ($1.5M - $7M)</SelectItem>
                        <SelectItem value=">£5M">&gt; £5M / $7M</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryChallenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Operational Challenge</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What is the biggest bottleneck holding your mission back?"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Book My Free Audit'}
                <MoveRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
