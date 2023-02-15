import { Homepage } from '@/models/content-types/Homepage'
import { contentTypes } from '@/models'
import { getItemByCodename } from '@/services/kontent'
import styles from './page.module.css'

export default async function Home() {
  const home = await getPageData()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {home.elements.title.value}
      </div>
    </main>
  )
}

async function getPageData(){
  const homepageCodename = contentTypes.homepage.codename
  const item = await getItemByCodename<Homepage>(homepageCodename, 1)
  return item
}
