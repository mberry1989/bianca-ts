import { Service } from "@/models";

type AppProps = {
    item: Service
}

const ServiceComponent = ({ item }: AppProps) => {
    return (
        <>
            {item.elements.name.value}
        </>
    );
}

export default ServiceComponent;