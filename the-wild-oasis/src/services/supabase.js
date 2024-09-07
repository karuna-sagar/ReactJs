
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://drigeelhjneikhucopma.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyaWdlZWxoam5laWtodWNvcG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzMDA1MDMsImV4cCI6MjAzODg3NjUwM30.OigxWVtCOXsyGXrYseTMCiGskl7Ie7cMuElWYDizWHo"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase