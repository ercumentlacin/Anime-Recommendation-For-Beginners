export interface Anime {
  id: number;
  genre: string;
  header: Header;
  list: List[];
}

export interface Header {
  title: string;
  description: string;
  imgUrl: string;
}

export interface List {
  genres: string[];
  title: string;
  imgUrl: string;
  description: string;
}
