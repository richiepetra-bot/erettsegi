import { createClient, SupabaseClient } from "@supabase/supabase-js";

let cachedClient: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
  if (cachedClient) return cachedClient;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "A SUPABASE_URL es SUPABASE_SERVICE_ROLE_KEY kornyezeti valtozok nincsenek beallitva."
    );
  }

  cachedClient = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
    db: { schema: (process.env.SUPABASE_SCHEMA || "erettsegi") as "public" },
  });
  return cachedClient;
}
