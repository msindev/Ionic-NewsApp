export interface NewsResponse {
  status: string;
  totalResults: number;
  articles?: ArticlesEntity[] | null;
}
export interface ArticlesEntity {
  source: Source;
  author?: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  content?: string | null;
}
export interface Source {
  id?: string | null;
  name: string;
}
