import { Contact } from "@/models";

type AppProps = {
    item: Contact
}

const ContactComponent = ({ item }: AppProps) => {
    return (
        <>
            {item.elements.phone.value}
        </>
    );
}

export default ContactComponent;