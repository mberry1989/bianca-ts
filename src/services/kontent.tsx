import { createDeliveryClient, IContentItem, IContentItemElements } from "@kontent-ai/delivery-sdk";

const deliveryClient = createDeliveryClient({
    projectId: process.env.KONTENT_PROJECT_ID ?? '',
    previewApiKey: process.env.KONTENT_PREVIEW_KEY ?? '',
    defaultQueryConfig: {
        usePreviewMode: process.env.KONTENT_PREVIEW_KEY !== '' ? true : false
    }
});

export async function getItemByCodename<T extends IContentItem<IContentItemElements>>(codename: string, depth: number) {
    const response = await deliveryClient.item<T>(codename)
        .depthParameter(depth)
        .toPromise()

    return response.data.item
}

export async function getItemByUrlSlug<T extends IContentItem<IContentItemElements>>(element: string, slug: string, depth: number) {
    const response = await deliveryClient.items<T>()
        .equalsFilter(element, slug)
        .depthParameter(depth)
        .toPromise()

    return response.data.items[0]
}

export async function getItems<T extends IContentItem<IContentItemElements>>(depth: number) {
    const response = await deliveryClient.items<T>()
        .depthParameter(depth)
        .toPromise()

    return response.data.items
}

export async function getItemsOfType<T extends IContentItem<IContentItemElements>>(type: string, depth: number) {
    const response = await deliveryClient.items<T>()
        .type(type)
        .depthParameter(depth)
        .toPromise()

    return response.data.items
}

export async function getNavigationItems<T extends IContentItem<IContentItemElements>>(homepageCodename: string, subpagesCodename: string, depth: number) {
    const response = await deliveryClient.item<T>(homepageCodename)
        .depthParameter(depth)
        .elementsParameter([subpagesCodename])
        .toPromise()

    return response.data.item
}

