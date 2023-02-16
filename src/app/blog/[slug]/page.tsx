import RichTextComponent from "@/components/RichTextComponent";
import { contentTypes, Post } from "@/models";
import { getItemByUrlSlug, getItemsOfType } from "@/services/kontent";
import styles from '@/app/page.module.css'
import Link from "next/link";

export default async function PageName({
    params,
}: {
    params: { slug: string };
}) {
    const post = await getItemData(params.slug)
    return (
        <main className={styles.main}>
        <div className={styles.description}>
            <Link href='/blog'>&lt; Back</Link>
            <h1>{post.elements.title.value}</h1>
            <RichTextComponent item={post} />
        </div>
        </main>
    );
}

export async function generateStaticParams() {
    const postCodename = contentTypes.post.codename
    const items = await getItemsOfType<Post>(postCodename, 0);

    return items.map((item) => ({
        slug: item.elements.url.value,
    }));
}

async function getItemData(slug: string) {
    const item = getItemByUrlSlug<Post>('elements.url', slug, 2)
    return item
}