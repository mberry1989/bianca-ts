import { Page } from "@/models"
import { getItemByUrlSlug } from "@/services/kontent"
import styles from '@/app/page.module.css'

export default async function Contact() {
    const page = await getPageData()

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>{page.elements.title.value}</h1>
                <div>

                </div>
            </div>
        </main>
    )
}

async function getPageData() {
    const page = await getItemByUrlSlug<Page>('elements.url', 'contact', 2)
    return page
}