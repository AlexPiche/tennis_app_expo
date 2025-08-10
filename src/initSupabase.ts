import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL!, 
    process.env.REACT_APP_SUPABASE_ANON_KEY!,
    {
        localStorage: AsyncStorage as any,
    }
);
