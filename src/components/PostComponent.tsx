import { Post } from "@/models";

type AppProps = {
    item: Post
}

const PostComponent = ({ item }: AppProps) => {
    return (
        <>
            {item.elements.title.value}
        </>
    );
}

export default PostComponent;