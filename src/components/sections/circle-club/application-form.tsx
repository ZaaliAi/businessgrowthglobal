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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';
import { useState } from 'react';
import { MoveRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z.string().min(2, { message: 'Business name is required.' }),
  website: z.string().url({ message: 'Please enter a valid URL (e.g., https://example.com).' }).optional().or(z.literal('')),
  revenue: z.string({ required_error: 'Please select a revenue range.' }),
  challenge: z.string().min(10, { message: 'Please describe your challenge.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(5, { message: 'Please enter a valid phone number.' }),
});

interface ApplicationFormProps {
  onSuccess?: () => void;
}

export default function ApplicationForm({ onSuccess }: ApplicationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      website: '',
      revenue: '',
      challenge: '',
      email: '',
      phone: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Format the message for the existing contact-form endpoint
      const formattedMessage = `
APPLICATION FOR THE CIRCLE CLUB

Business Name: ${values.businessName}
Website: ${values.website || 'N/A'}
Annual Revenue: ${values.revenue}
Phone: ${values.phone}

Biggest Challenge:
${values.challenge}
      `;

      const { error } = await supabase.functions.invoke('contact-form', {
        body: {
          name: values.name,
          email: values.email,
          message: formattedMessage,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      toast({
        title: 'Application Received!',
        description: "Thank you for applying. We will review your application and be in touch soon.",
      });
      form.reset();
      if (onSuccess) {
        onSuccess();
      }
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+44 7700 900000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Corp" {...field} />
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
                <FormLabel>Website URL (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://acme.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="revenue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Annual Revenue</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="< £500k">Less than £500k</SelectItem>
                  <SelectItem value="£500k - £1M">£500k - £1M</SelectItem>
                  <SelectItem value="£1M - £5M">£1M - £5M</SelectItem>
                  <SelectItem value="£5M - £10M">£5M - £10M</SelectItem>
                  <SelectItem value="£10M+">£10M+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your biggest business challenge right now?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what's holding you back..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full bg-[#D4AF37] text-primary hover:bg-[#b5952f] font-semibold" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
          <MoveRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
}
