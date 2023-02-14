import { Homepage } from '@/models/content-types/Homepage'
import { getItemByCodename } from '@/services/kontent'
import styles from './page.module.css'

export default async function Home() {
  const home = await getData()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {home.elements.title.value}
      </div>
    </main>
  )
}

async function getData(){
  const item = await getItemByCodename<Homepage>('homepage', 1)
  return item
}
