import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function VictimsPage() {
  const { data: victims, error } = await supabase
    .from('victimas')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <div style={{ padding: '2rem' }}>Error cargando datos: {error.message}</div>
  }

  return (
    <div style={{ padding: '2rem', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ marginBottom: '2rem', color: '#00ff88' }}>Reporte de Simulacro: Víctimas</h1>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#111' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Fecha y Hora</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Navegador/Dispositivo</th>
            </tr>
          </thead>
          <tbody>
            {victims?.map((victim) => (
              <tr key={victim.id} style={{ borderBottom: '1px solid #222' }}>
                <td style={{ padding: '1rem' }}>{victim.email}</td>
                <td style={{ padding: '1rem' }}>{new Date(victim.created_at).toLocaleString()}</td>
                <td style={{ padding: '1rem', fontSize: '0.8rem', opacity: 0.7 }}>{victim.user_agent}</td>
              </tr>
            ))}
            {victims?.length === 0 && (
              <tr>
                <td colSpan={3} style={{ padding: '2rem', textAlign: 'center' }}>No hay registros aún.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
