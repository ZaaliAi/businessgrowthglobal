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
import { Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered, Image as ImageIcon, Quote, Upload } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters.'),
  slug: z.string().min(2, 'Slug must be at least 2 characters.').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens.'),
  content: z.string().min(10, 'Content must be at least 10 characters.'),
  image_url: z.string().url('Must be a valid URL.').optional().or(z.literal('')),
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
  const [isUploading, setIsUploading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentImageInputRef = useRef<HTMLInputElement>(null);
  const featuredImageInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();


  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: '',
      slug: '',
      content: '',
      image_url: '',
    },
  });
  
  const featuredImageUrl = form.watch('image_url');

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
      textarea.value.substring(0, start) + textToInsert + textarea.value.substring(end),
      { shouldValidate: true }
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
      textarea.value.substring(0, start) + prefix + textarea.value.substring(start),
      { shouldValidate: true }
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
      textarea.value.substring(0, start) + textToInsert + textarea.value.substring(start),
      { shouldValidate: true }
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
      textarea.value.substring(0, start) + textToInsert + textarea.value.substring(start),
      { shouldValidate: true }
    );
    textarea.focus();
    setTimeout(() => {
        const newPos = start + textToInsert.length;
        textarea.setSelectionRange(newPos, newPos);
    }, 0);
  }

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>, isFeatured: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const fileName = `${Date.now()}-${file.name}`;
    
    // Upload the file
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('posts-images')
      .upload(fileName, file);

    if (uploadError) {
      setIsUploading(false);
      toast({ variant: 'destructive', title: 'Image Upload Failed', description: uploadError.message });
      return;
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from('posts-images')
      .getPublicUrl(uploadData.path);

    setIsUploading(false);

    if (!publicUrlData?.publicUrl) {
        toast({ variant: 'destructive', title: 'Failed to get public URL', description: 'The image was uploaded, but we could not retrieve its public URL. Please check your bucket permissions.' });
        return;
    }

    const publicUrl = publicUrlData.publicUrl;
    
    if (isFeatured) {
        form.setValue('image_url', publicUrl, { shouldValidate: true });
    } else {
        const textarea = textareaRef.current;
        if(!textarea) return;

        const start = textarea.selectionStart;
        const textToInsert = `
![${file.name}](${publicUrl})
`;
        form.setValue('content', 
        textarea.value.substring(0, start) + textToInsert + textarea.value.substring(start),
        { shouldValidate: true }
        );
        textarea.focus();
        setTimeout(() => {
            const newPos = start + textToInsert.length;
            textarea.setSelectionRange(newPos, newPos);
        }, 0);
    }
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
                name="image_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Image</FormLabel>
                    <FormControl>
                        <div className="w-full">
                            <Button type="button" variant="outline" onClick={() => featuredImageInputRef.current?.click()} disabled={isUploading}>
                                <Upload className="mr-2" />
                                {isUploading ? 'Uploading...' : 'Upload Featured Image'}
                            </Button>
                            <input type="file" ref={featuredImageInputRef} onChange={(e) => handleImageUpload(e, true)} className="hidden" accept="image/*" />
                            {featuredImageUrl && (
                                <div className="mt-4 relative aspect-video w-full max-w-sm rounded-lg overflow-hidden border">
                                    <Image src={featuredImageUrl} alt="Featured image preview" fill className="object-cover" />
                                </div>
                            )}
                        </div>
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
                     <div className="flex items-center gap-1 border border-input rounded-t-md p-2 bg-secondary flex-wrap">
                        <Button type="button" variant="outline" size="icon" onClick={() => insertText('**', 'bold text')}><Bold className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertText('*', 'italic text')}><Italic className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertHeading(1)}><Heading1 className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertHeading(2)}><Heading2 className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertHeading(3)}><Heading3 className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertList(false)}><List className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertList(true)}><ListOrdered className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => insertBlockquote()}><Quote className="h-4 w-4" /></Button>
                        <Button type="button" variant="outline" size="icon" onClick={() => contentImageInputRef.current?.click()} disabled={isUploading}><ImageIcon className="h-4 w-4" /></Button>
                        <input type="file" ref={contentImageInputRef} onChange={(e) => handleImageUpload(e, false)} className="hidden" accept="image/*" />
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Write your blog post here... You can also paste YouTube video links directly."
                        className="min-h-[400px] rounded-t-none focus-visible:ring-offset-0"
                        {...field}
                        ref={textareaRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting || isUploading}>
                {isSubmitting ? 'Saving...' : submitButtonText}
              </Button>
            </form>
          </Form>
        </div>
      </div>
  );
}
