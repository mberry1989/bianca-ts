import { Page } from '@/models'
import { getItemByUrlSlug } from '@/services/kontent'
import styles from '@/app/page.module.css'

export default async function Services(){
    const page = await getPageData()

    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <h1>{page.elements.title.value}</h1>
        </div>
      </main>
    )
}

async function getPageData(){
    const page = await getItemByUrlSlug<Page>('elements.url', 'services', 2)
    return page
}