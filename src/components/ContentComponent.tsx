import { ContentBlock } from "@/models";
import RichTextComponent from "./RichTextComponent";

type AppProps = {
    item: ContentBlock
}

const ContentComponent = ({ item }: AppProps) => {
    return ( 
        <>
        <h3>{item.elements.headline.value}</h3>
        <div>
            <RichTextComponent item={item as ContentBlock}/>
        </div>
        </>
     );
}
 
export default ContentComponent;