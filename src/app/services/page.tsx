import { Page } from '@/models'
import { getItemByUrlSlug } from '@/services/kontent'
import styles from '@/app/page.module.css'
import ComposableLayout from '@/components/ComposableLayout'

export default async function Services() {
  const page = await getPageData()
  const content = page.elements.content.linkedItems

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{page.elements.title.value}</h1>
        <div>
          {content.length > 0 && content.map(item => (<ComposableLayout item={item} key={item.system.id} />))}
        </div>
      </div>
    </main>
  )
}

async function getPageData() {
  const page = await getItemByUrlSlug<Page>('elements.url', 'services', 2)
  return page
}