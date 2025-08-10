import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Hardcoded values for testing
const SUPABASE_URL = 'https://rlkpardfobzboywfmgdp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsa3BhcmRmb2J6Ym95d2ZtZ2RwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDg1MTExNCwiZXhwIjoyMDcwNDI3MTE0fQ.KcdTh3PmWkqln9R6PXUat4QCyGL_rId8EguoSdW84wo';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
        localStorage: AsyncStorage as any,
    }
);
