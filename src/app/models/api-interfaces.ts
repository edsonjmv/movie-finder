export interface Movie {
  id: number;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface ApiResponse {
  results: Movie[];
}