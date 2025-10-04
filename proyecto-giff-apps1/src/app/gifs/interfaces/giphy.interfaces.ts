export interface GiphyResponse {
    data: GiphyItem[];
}

export interface GiphyItem {
    id: string;
    title: string;
    images: GiphyImage;
}

export interface GiphyImage {
    original: GiphyItemImageOriginal;
}

export interface GiphyItemImageOriginal {
    url: string;
}