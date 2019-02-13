interface IVideoMainCategory {
    mc_id: number;
    mc_name: string;
    mc_metadesc: string;
    mc_metakeyword: string;
}

interface IVideoCategory {
    totalepisods: number;
    name: string;
    gener: string;
    enname: string;
    video_maincat: IVideoMainCategory;
}

export interface IVideo {
    id: number;
    name: string;
    summary: string;
    customorder: number;
    rating?: number;
    viewed?: number;
    video_category: IVideoCategory;
    ext_fieldsD: string;
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
