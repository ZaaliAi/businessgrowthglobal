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
import { useState, useRef, ChangeEvent } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered, Image as ImageIcon, Quote } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters.'),
  slug: z.string().min(2, 'Slug must be at least 2 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  content: z.string().min(10, 'Content must be at least 10 characters.'),
});

export type PostFormValues = z.infer<typeof formSchema>;

interface PostFormProps {
  title: string;
  onSubmit: (values: PostFormValues) => Promise<boolean>;
  initialData?: PostFormValues;
  submitButtonText?: string;
}

export function PostForm({ title, onSubmit, initialData, submitButtonText = 'Submit' }: PostFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();


  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: '',
      slug: '',
      content: '',
    },
  });

  const handleFormSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true);
    const success = await onSubmit(values);
    if (!success) {
      setIsSubmitting(false);
    }
  };
  
  const insertText = (syntax: string, placeholder: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const textToInsert = selectedText ? `${syntax}${selectedText}${syntax}` : `${syntax}${placeholder}${syntax}`;
    
    form.setValue('content', 
      textarea.value.substring(0, start) + textToInsert + textarea.value.substring(end)
    );
    textarea.focus();
    setTimeout(() => {
        const newPos = start + textToInsert.length - (selectedText ? syntax.length : 0);
        textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };
  
  const insertHeading = (level: number) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const prefix = `${'#'.repeat(level)} `;
    const start = textarea.selectionStart;
    
    form.setValue('content',
      textarea.value.substring(0, start) + prefix + textarea.value.substring(start)
    );
    textarea.focus();
    setTimeout(() => {
      textarea.setSelectionRange(start + prefix.length, start + prefix.length);
    }, 0);
  }

  const insertList = (ordered: boolean) => {
    const textarea = textareaRef.current;
    if(!textarea) return;

    const start = textarea.selectionStart;
    const textToInsert = ordered ? '1. ' : '- ';
     form.setValue('content', 
      textarea.value.substring(0, start) + textToInsert + textarea.value.substring(start)
    );
    textarea.focus();
    setTimeout(() => {
        const newPos = start + textToInsert.length;
        textarea.setSelectionRange(newPos, newPos);
    }, 0);
  }

  const insertBlockquote = () => {
    const textarea = textareaRef.current;
    if(!textarea) return;

    const start = textarea.selectionStart;
    const textToInsert = '> ';
     form.setValue('content', 
      textarea.value.substring(0, start) + textToInsert + textarea.value.substring(start)
    );
    textarea.focus();
    setTimeout(() => {
        const newPos = start + textToInsert.length;
        textarea.setSelectionRange(newPos, newPos);
    }, 0);
  }

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsSubmitting(true);
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('posts-images')
      .upload(fileName, file);

    setIsSubmitting(false);

    if (error) {
      toast({ variant: 'destructive', title: 'Image Upload Failed', description: error.message });
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('posts-images')
      .getPublicUrl(data.path);
    
    const textarea = textareaRef.current;
    if(!textarea) return;

    const start = textarea.selectionStart;
    const textToInsert = `\n![${file.name}](${publicUrl})\n`;
    form.setValue('content', 
      textarea.value.substring(0, start) + textToInsert + textarea.value.substring(start)
    );
     textarea.focus();
    setTimeout(() => {
        const newPos = start + textToInsert.length;
        textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };


  return (
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-primary mb-8">{title}</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Blog Post Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="blog-post-title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content (Markdown)</FormLabel>
                     <div className="flex items-center gap-1 border border-input rounded-t-md p-2 bg-secondary">
                        <Button type="button" variant="outline" size="icon" onClick={() => insertText('**', 'bold text')}><Bold className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertText('*', 'italic text')}><Italic className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertHeading(1)}><Heading1 className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertHeading(2)}><Heading2 className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertHeading(3)}><Heading3 className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertList(false)}><List className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertList(true)}><ListOrdered className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertBlockquote()}><Quote className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => fileInputRef.current?.click()}><ImageIcon className="h-4 w-4" /></Button>
                        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Write your blog post here..."
                        className="min-h-[400px] rounded-t-none focus-visible:ring-offset-0"
                        {...field}
                        ref={textareaRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : submitButtonText}
              </Button>
            </form>
          </Form>
        </div>
      </div>
  );
}
