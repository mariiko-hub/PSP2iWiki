import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bookmark } from '@/types/wiki';

const STORAGE_KEYS = {
  BOOKMARKS: '@psp2i_bookmarks',
  RECENT_PAGES: '@psp2i_recent',
  SEARCH_HISTORY: '@psp2i_search',
};

export const storageService = {
  // Bookmarks
  async getBookmarks(): Promise<Bookmark[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  async addBookmark(pageId: string): Promise<void> {
    const bookmarks = await this.getBookmarks();
    const newBookmark: Bookmark = {
      pageId,
      timestamp: new Date().toISOString(),
    };
    const updated = [newBookmark, ...bookmarks.filter(b => b.pageId !== pageId)];
    await AsyncStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  },

  async removeBookmark(pageId: string): Promise<void> {
    const bookmarks = await this.getBookmarks();
    const updated = bookmarks.filter(b => b.pageId !== pageId);
    await AsyncStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  },

  async isBookmarked(pageId: string): Promise<boolean> {
    const bookmarks = await this.getBookmarks();
    return bookmarks.some(b => b.pageId === pageId);
  },

  // Recent pages
  async addRecentPage(pageId: string): Promise<void> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.RECENT_PAGES);
      const recent: string[] = data ? JSON.parse(data) : [];
      const updated = [pageId, ...recent.filter(id => id !== pageId)].slice(0, 20);
      await AsyncStorage.setItem(STORAGE_KEYS.RECENT_PAGES, JSON.stringify(updated));
    } catch {}
  },

  async getRecentPages(): Promise<string[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.RECENT_PAGES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  // Search history
  async addSearchTerm(term: string): Promise<void> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      const history: string[] = data ? JSON.parse(data) : [];
      const updated = [term, ...history.filter(t => t !== term)].slice(0, 10);
      await AsyncStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(updated));
    } catch {}
  },

  async getSearchHistory(): Promise<string[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
};
