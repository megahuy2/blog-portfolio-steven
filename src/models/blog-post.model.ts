
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readingTime: number; // in minutes
  thumbnailUrl: string;
}