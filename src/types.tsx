export interface Pokemon{
  name: string,
  url: string,
}

export interface Response {
  count: number,
  next?: string,
  previous?: string,
  results: Pokemon[]
}

export interface Pokemon {
  id: number,
  name: string,
  stats: any[],
  types: any[],
}