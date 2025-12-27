import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhblexymccjalnovinys.supabase.co';
const supabaseAnonKey = 'sb_publishable_L4Iii_wz3QfAEQRdJG0JgQ_OrDxqzyN';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
