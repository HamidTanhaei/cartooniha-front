interface IVideoCategory {
    totalepisods: number;
    name: string;
    enname: string;
}

export interface IVideo {
    id: number;
    name: string;
    summary: string;
    customorder: number;
    rating: number;
    viewed: number;
    video_category: IVideoCategory;
}

export interface IVideoOtherEpisodes {
    id: number;
    name: string;
    summary: string;
    customorder: number;
}

export interface IVideoPage extends IVideo {
    bookmarks: any;
    bookmarked: boolean;
    otherEpisodes: IVideoOtherEpisodes;
}
