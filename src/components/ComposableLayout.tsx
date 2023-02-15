import { Contact, ContentBlock, contentTypes, Service, Video, Event, Post } from "@/models";
import ContactComponent from "./ContactComponent";
import ContentComponent from "./ContentComponent";
import EventComponent from "./EventComponent";
import PostComponent from "./PostComponent";
import ServiceComponent from "./ServiceComponent";

type AppProps = {
    item: Service | Video | Event | ContentBlock | Contact | Post
}

const ComposableLayout = ({ item }: AppProps) => {
    const evalType = (type: string) => {
        switch (type) {
            case contentTypes.content_block.codename:
                return <ContentComponent item={item as ContentBlock} />
            case contentTypes.service.codename:
                return <ServiceComponent item={item as Service} />
            case contentTypes.contact.codename:
                return <ContactComponent item={item as Contact} />
            case contentTypes.event.codename:
                return <EventComponent item={item as Event} />
            case contentTypes.post.codename:
                return <PostComponent item={item as Post} />
            default:
                console.log(`composable ${item.system.type} not defined.`)
        }
    }
    return (
        <>
            {evalType(item.system.type)}
        </>
    )
}

export default ComposableLayout;