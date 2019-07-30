/* export interface Movie {
  id: number;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface ApiResponse {
  results: Movie[];
} */

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ApiResponse {
  Response: string;
  Search: Movie[];
  totalResults: string;
}