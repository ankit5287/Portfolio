'use server';

import { z } from 'zod';
import { summarizeProjectDescriptions } from '@/ai/flows/summarize-project-descriptions';

export async function getSummary(projectDescription: string) {
  try {
    const result = await summarizeProjectDescriptions({ projectDescription });
    return result.summary;
  } catch (error) {
    console.error('Error in getSummary action:', error);
    throw new Error('Failed to generate summary.');
  }
}

const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(data: z.infer<typeof ContactFormSchema>) {
  try {
    const parsedData = ContactFormSchema.parse(data);
    // In a real app, you would process this data (e.g., send an email, save to DB).
    // For this demo, we just log it to the server console.
    console.log('Contact form submitted:', parsedData);
    return { success: true, message: 'Form submitted successfully.' };
  } catch (error) {
    console.error('Error handling contact form:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data.', errors: error.errors };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
