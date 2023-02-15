import { Event } from "@/models";
type AppProps = {
    item: Event
}

const EventComponent = ({ item }: AppProps) => {
    return (
        <>
            {item.elements.name.value}
        </>
    );
}

export default EventComponent;