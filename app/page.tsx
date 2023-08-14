import prismadb from '@/lib/prismadb'
import Dashboard from './templates/Dashboard'

export default async function Home() {
  const yarns = await prismadb.card.findMany()
  console.log(yarns[0].id)
  return <Dashboard allYarns={yarns} />
}
