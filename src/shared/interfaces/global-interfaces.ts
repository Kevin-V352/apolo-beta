/* /--Auxiliar interfaces--/ */

interface Image {
    url: string;
}

interface Album {
    name: string;
    release_date: string;
    images: Image[];
}
/* /------------------------/ */

/* /----Global interfaces----/ */

export interface Artist {
    name: string;
}

export interface Song {
    album: Album;
    artists: Artist[];
    duration_ms: number;
    id: string;
    name: string;
    preview_url: string;
}

export interface ContexState {
    token: string;
    songList: Song[];
    search: boolean;
}

export interface ContextDefaultValue {
    getToken: () => void;
    getSongsList: (query: string, token: string) => void;
    state: ContexState;
}

export interface Action {
    payload: ContexState;
    type: string;
}

/* /------------------------/ */