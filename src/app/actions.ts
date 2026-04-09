'use server'

import { supabase } from '@/lib/supabase'

export async function saveVictim(email: string, userAgent: string) {
  try {
    const { error } = await supabase
      .from('victimas')
      .insert([
        { 
          email: email, 
          user_agent: userAgent 
        }
      ])
    
    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error saving victim:', error)
    return { success: false, error: (error as Error).message }
  }
}
