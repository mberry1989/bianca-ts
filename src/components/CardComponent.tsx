import { Post } from "@/models";
import Image from "next/image";

type AppProps = {
    item: Post
}

const CardComponent = ({ item }: AppProps) => {
    return (
        <div>
            <h4>{item.elements.title.value}</h4>
            <div>
                <Image
                    src= {item.elements.image.value[0].url}
                    alt={item.elements.title.value}
                    width='300'
                    height='150'
                />
            </div>
        </div>
    );
}

export default CardComponent;