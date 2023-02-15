import { contentTypes, Page, Post } from '@/models'
import { getItemByUrlSlug, getItemsOfType } from '@/services/kontent'
import styles from '@/app/page.module.css'

export default async function Blog(){
    const page = await getPageData()
    const posts = await getPosts()

    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <h1>{page.elements.title.value}</h1>
          <div>
            {posts && posts.map(post => (post.elements.title.value))}
          </div>
        </div>
      </main>
    )
}

async function getPageData(){
    const page = await getItemByUrlSlug<Page>('elements.url', 'blog', 2)
    return page
}

async function getPosts(){
    const postTypeCodename = contentTypes.post.codename
    const posts = await getItemsOfType<Post>(postTypeCodename, 2)
    return posts
}