import { Service } from "@/models";
import RichTextComponent from "./RichTextComponent";

type AppProps = {
    item: Service
}

const ServiceComponent = ({ item }: AppProps) => {
    return (
        <>
            <h3>{item.elements.name.value}</h3>
            <div>
                <RichTextComponent item={item} />
            </div>
        </>
    );
}

export default ServiceComponent;