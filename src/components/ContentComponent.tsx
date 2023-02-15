import { ContentBlock } from "@/models";

type AppProps = {
    item: ContentBlock
}

const ContentComponent = ({ item }: AppProps) => {
    return ( 
        <>
        <div>{item.elements.headline.value}</div>
        </>
     );
}
 
export default ContentComponent;