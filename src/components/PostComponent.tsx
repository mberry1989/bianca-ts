import { Post } from "@/models";
import RichTextComponent from "./RichTextComponent";

type AppProps = {
    item: Post
}

const PostComponent = ({ item }: AppProps) => {
    return (
        <>
        <h3>{item.elements.title.value}</h3>
        <div>
            <RichTextComponent item={item} />
        </div>
        </>
    );
}

export default PostComponent;