import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bymvkfidckbttrldxvql.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5bXZrZmlkY2tidHRybGR4dnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTYyNDksImV4cCI6MjAwNjk5MjI0OX0.Av96uj4EuM1JR_rnPzTsjlS2uTwiXMpHTOumw7ztuYA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
