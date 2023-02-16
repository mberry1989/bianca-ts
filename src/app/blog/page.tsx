import { contentTypes, Page, Post } from '@/models'
import { getItemByUrlSlug, getItemsOfType } from '@/services/kontent'
import styles from '@/app/page.module.css'
import ComposableLayout from '@/components/ComposableLayout'
import CardComponent from '@/components/CardComponent'
import Link from 'next/link'

export default async function Blog(){
    const page = await getPageData()
    const posts = await getPosts()
    const content = page.elements.content.linkedItems

    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <h1>{page.elements.title.value}</h1>
          <div>
            {content.length > 0 && content.map(item => (<ComposableLayout item={item} key={item.system.id} />))}
          </div>
          <div>
            {posts && posts.map(post => (
              <Link href={`/blog/${post.elements.url.value}`} key={post.system.id}>
                <CardComponent item={post} />
              </Link>
              ))}
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