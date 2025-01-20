import {z} from 'zod';

export const todoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['L', 'M', 'H']).default('L'),
  deadline: z.string().refine(val => !isNaN(Date.parse(val)), 'Invalid date'),
});

export type TodoFormValues = z.infer<typeof todoSchema>;
