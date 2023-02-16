import { Certification, ContentBlock, contentTypes, Event, Feature, Organization, Person, Post, Service } from '@/models';
import { isComponent, isLinkedItem, RichTextElement } from '@kontent-ai/react-components';
import { Element as DomHandlerElement } from 'domhandler';

type AppProps = {
    item: ContentBlock | Post | Person | Event | Service | Feature | Organization | Certification
}

const RichTextComponent = ({ item }: AppProps) => {
    const evalType = (type: string) => {
        switch (type) {
            case contentTypes.content_block.codename:
                const block = item as ContentBlock
                return block.elements.body
            case contentTypes.post.codename:
                const post = item as Post
                return post.elements.body
            case contentTypes.person.codename:
                const person = item as Person
                return person.elements.bio
            case contentTypes.feature.codename:
                const feature = item as Feature
                return feature.elements.description
            default:
                const service = item as Service
                return service.elements.description
        }
    }

    const richText = evalType(item.system.type)

    return (
        <RichTextElement
            richTextElement={richText}
            resolvers={{
                resolveLinkedItem: (linkedItem, { domElement, domToReact }) => {
                    if (isComponent(domElement)) {
                        return (
                            <>
                                <h1>Component</h1>
                                <pre>{JSON.stringify(linkedItem, undefined, 2)}</pre>;
                            </>
                        );
                    }
                    if (isLinkedItem(domElement)) {
                        return (
                            <>
                                <h1>Linked item</h1>
                                <pre>{JSON.stringify(linkedItem, undefined, 2)}</pre>;

                            </>
                        );
                    }
                    throw new Error("Unknown type of the linked item's dom node");
                },
                resolveImage: (image, { domElement, domToReact }): JSX.Element => (
                    <img
                        src={image.url}
                        alt={image.description ? image.description : image.imageId}
                        width="200"
                    />
                ),
                resolveLink: (link, { domElement, domToReact }): JSX.Element => (
                    <a href={`/${link.type}/${link.urlSlug}`}>
                        {domToReact(domElement.children)}
                    </a>
                ),
                resolveDomNode: ({ domNode, domToReact }) => {
                    if (domNode instanceof DomHandlerElement && domNode.name === 'table') {
                        return <div className="table-wrapper">{domToReact([domNode])}</div>;
                    }
                }
            }}
        />
    );
}

export default RichTextComponent;