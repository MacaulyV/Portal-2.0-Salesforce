// searchSuggestions.ts
export interface SearchSuggestion {
  term: string;
  link: string;
}

export const searchSuggestions: SearchSuggestion[] = [
  { term: 'uva', link: 'https://www.salesforce.com/br/' },
  { term: 'maçã', link: '/frutas/maca' },
  { term: 'banana', link: '/frutas/banana' },
];