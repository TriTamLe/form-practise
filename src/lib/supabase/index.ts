import {createClient} from "@supabase/supabase-js";

export const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_PROJECT_URL
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
export const SUPABASE_PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID
export const SUPABASE_BUCKET_NAME = import.meta.env.VITE_SUPABASE_BUCKET_NAME

export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY)