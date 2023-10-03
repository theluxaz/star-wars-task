export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  characters: string[];
}

export interface Character {
  name: string;
  gender: string;
  birth_year: string;
  mass: string;
}
