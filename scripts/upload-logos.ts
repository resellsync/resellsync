import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const SUPABASE_URL = "https://hlpakrakaoyhohjppxkg.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: SUPABASE_SERVICE_ROLE_KEY environment variable is not set');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const BUCKET_NAME = 'marketplace-logos';
const PUBLIC_FOLDER = 'public/logos';

interface UploadResult {
  originalName: string;
  sanitizedName: string;
  publicUrl: string;
}

console.log('Upload script started');

async function createBucketIfNotExists() {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  if (error) throw error;

  const bucketExists = buckets.some(bucket => bucket.name === BUCKET_NAME);
  if (!bucketExists) {
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 1024 * 1024, // 1MB
      allowedMimeTypes: ['image/svg+xml']
    });
    if (createError) throw createError;
    console.log(`Created bucket: ${BUCKET_NAME}`);
  }
}

async function uploadSvgFiles() {
  try {
    // Create bucket if it doesn't exist
    await createBucketIfNotExists();

    // Read all SVG files from the public/logos directory
    const files = fs.readdirSync(PUBLIC_FOLDER)
      .filter(file => file.toLowerCase().endsWith('.svg'));

    const uploadResults: UploadResult[] = [];

    for (const file of files) {
      const filePath = path.join(PUBLIC_FOLDER, file);
      const sanitizedFileName = file.replace(/\s+/g, '-');
      const fileContent = fs.readFileSync(filePath);

      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(sanitizedFileName, fileContent, {
          contentType: 'image/svg+xml',
          upsert: false
        });

      if (error) {
        console.error(`Error uploading ${file}:`, error.message);
        continue;
      }

      // Generate public URL
      const publicUrl = `${supabase.storage.from(BUCKET_NAME).getPublicUrl(sanitizedFileName).data.publicUrl}`;
      
      uploadResults.push({
        originalName: file,
        sanitizedName: sanitizedFileName,
        publicUrl
      });

      console.log(`Uploaded ${file} -> ${sanitizedFileName}`);
    }

    // Output results
    console.log('\nUpload Results:');
    console.log('---------------');
    uploadResults.forEach(result => {
      console.log(`\nOriginal: ${result.originalName}`);
      console.log(`Sanitized: ${result.sanitizedName}`);
      console.log(`Public URL: ${result.publicUrl}`);
    });

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the upload process
uploadSvgFiles(); 