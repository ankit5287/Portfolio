'use server';

import { z } from 'zod';
import { summarizeProjectDescriptions } from '@/ai/flows/summarize-project-descriptions';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

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
    
    // Save to Firestore
    await addDoc(collection(db, 'contacts'), {
      ...parsedData,
      submittedAt: new Date(),
    });

    console.log('Contact form submitted and saved to Firestore:', parsedData);
    return { success: true, message: 'Form submitted successfully.' };
  } catch (error) {
    console.error('Error handling contact form:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data.', errors: error.errors };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
