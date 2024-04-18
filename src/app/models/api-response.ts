export interface SWAPIResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
