import { Homepage } from '@/models/content-types/Homepage'
import { contentTypes } from '@/models'
import { getItemByCodename } from '@/services/kontent'
import styles from './page.module.css'
import ComposableLayout from '@/components/ComposableLayout'

export default async function Home() {
  const home = await getPageData()
  const featured = home.elements.featuredContent.linkedItems
  const content = home.elements.content.linkedItems
  return (
    <main className={styles.main}>
      <div>
        <h1>
          {home.elements.title.value}
        </h1>
        <div>
          <h2>Featured</h2>
          {featured.length > 0 &&
            featured.map(item => (<ComposableLayout item={item} key={item.system.id} />))
          }
        </div>
        <div>
          <h2>Regular Content:</h2>
          {content.length > 0 &&
            content.map((item) => (<ComposableLayout item={item} key={item.system.id} />))
          }
        </div>
      </div>
    </main>
  )
}

async function getPageData() {
  const homepageCodename = contentTypes.homepage.codename
  const item = await getItemByCodename<Homepage>(homepageCodename, 2)
  return item
}
