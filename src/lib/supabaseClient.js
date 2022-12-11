import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://bhjzrqrdubhbkdtilvzc.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoanpycXJkdWJoYmtkdGlsdnpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwOTU2NjcsImV4cCI6MTk4MTY3MTY2N30.EM1CfHSDTFji1n-_pqXEvFGfgW-chnVZ8uZth_HiWSc'
);
