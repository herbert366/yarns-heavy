'use server'
import prismadb from '@/lib/prismadb'

export async function addCard(yarnData: any) {
  try {
    await prismadb.card.create({
      data: {
        tvShow: yarnData.tvShow,
        subtitle: yarnData.subtitle,
        time: yarnData.time,
        url: yarnData.url,
      },
    })

    return {
      error: false,
      success: true,
    }
  } catch (error) {
    return {
      error: error.message,
      success: false,
    }
  }
}
