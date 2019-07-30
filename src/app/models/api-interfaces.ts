export interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
}

export interface ApiResponse {
  Response: string;
  Search: Movie[];
  totalResults: string;
}