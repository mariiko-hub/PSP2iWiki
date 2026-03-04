export interface WikiCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  section: 'character' | 'items' | 'gameplay' | 'misc' | 'extra';
}

export interface WikiPage {
  id: string;
  categoryId: string;
  title: string;
  content: string;
  tags: string[];
  lastUpdated: string;
}

export interface Bookmark {
  pageId: string;
  timestamp: string;
}
