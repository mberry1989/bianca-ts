import { Page } from "@/models";
import Link from "next/link";

type AppProps = {
    menu: Page[];
};

const Navigation = ({ menu }: AppProps) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/' >Home</Link>
                </li>
                {menu && menu.map(page => {
                    return (
                        <li key={page.system.id}>
                            <Link href={page.elements.url.value}>
                                {page.elements.title.value}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    );
}

export default Navigation;