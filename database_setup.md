# Database Integration Guide (Supabase)

This guide explains how to connect your contact forms to a free Supabase database so you can store customer inquiries and product requests.

## 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up.
2. Click "New Project".
3. Enter a name (e.g., `deepsikha-db`) and a secure database password.
4. Select a region close to your users (e.g., London).
5. Click "Create new project".

## 2. Create the Contacts Table
1. Once the project is ready, go to the **Table Editor** (icon on the left).
2. Click "New Table".
3. Name it `contacts`.
4. Enable "Row Level Security (RLS)" (checked by default).
5. Add the following columns:
   - `id`: int8, Primary Key (default)
   - `created_at`: timestamptz, Default: `now()` (default)
   - `name`: text
   - `email`: text
   - `message`: text
   - `product_interest`: text (nullable, for when they request a specific product)
6. Click "Save".

## 3. Connect to Your Frontend
To connect securely without exposing your private keys, you have two main options:

### Option A: Direct (Easiest for testing, requires RLS policies)
1. Install the client: `npm install @supabase/supabase-js`
2. Create a file `src/supabaseClient.ts`:
   ```typescript
   import { createClient } from '@supabase/supabase-js'

   const supabaseUrl = 'YOUR_SUPABASE_URL'
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

   export const supabase = createClient(supabaseUrl, supabaseKey)
   ```
3. Get your URL and Key from Supabase Settings > API.
4. **CRITICAL**: Go to Authentication > Policies in Supabase. Create a policy for `contacts` table to allow "INSERT" for "anon" role. This allows anyone to submit a form.

### Option B: Netlify Functions (Secure, Recommended for Production)
Since you are deploying to Netlify, use a serverless function to hide your database logic.
1. Create a folder `netlify/functions`.
2. Create `submit-contact.ts`.
3. Use the Supabase Admin SDK in the function to insert data.

## 4. Update the Code
In `src/components/ContactModal.tsx`, update the `handleSubmit` function:

```typescript
import { supabase } from '../supabaseClient'; // If using Option A

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const { error } = await supabase
    .from('contacts')
    .insert([
      { 
        name: formData.name, 
        email: formData.email, 
        message: formData.message,
        product_interest: productName || null
      }
    ]);

  if (error) {
    alert('Error sending transmission.');
  } else {
    alert('Transmission received. We will contact you shortly.');
    onClose();
  }
};
```

## 5. View Your Data
Go to the Table Editor in Supabase to see all submitted requests!
