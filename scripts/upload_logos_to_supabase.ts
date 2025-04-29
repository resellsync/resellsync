import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const SUPABASE_URL = 'https://hlpakrakaoyhohjppxkg.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscGFrcmFrYW95aG9oanBweGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNzU3MDYsImV4cCI6MjA2MDY1MTcwNn0.7FKKhpO1mJp5m-UnpjX1pLQPwEQImfDFSSZFORGR0kE';
const BUCKET = 'marketplace-logos';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOAD_DIR = path.join(__dirname, '../tmp/supabase-uploads');

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function uploadFile(filename: string) {
  const filePath = path.join(UPLOAD_DIR, filename);
  const fileBuffer = fs.readFileSync(filePath);
  const { data, error } = await supabase.storage.from(BUCKET).upload(filename, fileBuffer, {
    cacheControl: '3600',
    upsert: true,
    contentType: 'image/svg+xml',
  });
  if (error) {
    console.error(`Failed to upload ${filename}:`, error.message);
    return null;
  }
  // Get public URL
  const { publicUrl } = supabase.storage.from(BUCKET).getPublicUrl(filename).data;
  return publicUrl;
}

async function main() {
  const files = fs.readdirSync(UPLOAD_DIR).filter(f => f.endsWith('.svg'));
  for (const file of files) {
    const url = await uploadFile(file);
    if (url) {
      console.log(`${file} => ${url}`);
    }
  }
}

main(); 