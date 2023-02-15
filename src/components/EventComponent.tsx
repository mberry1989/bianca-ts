import { Event } from "@/models";
import RichTextComponent from "./RichTextComponent";
type AppProps = {
    item: Event
}

const EventComponent = ({ item }: AppProps) => {
    return (
        <>
        <h3>{item.elements.name.value}</h3>
        <div>
            <RichTextComponent item={item} />
        </div>
        </>
    );
}

export default EventComponent;