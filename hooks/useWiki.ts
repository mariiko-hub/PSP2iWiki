import { useState, useEffect, useMemo } from 'react';
import { wikiCategories, wikiPages } from '@/services/wikiData';
import { storageService } from '@/services/storage';
import { WikiPage } from '@/types/wiki';

export function useWiki() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [recentPageIds, setRecentPageIds] = useState<string[]>([]);

  useEffect(() => {
    loadBookmarks();
    loadRecentPages();
  }, []);

  const loadBookmarks = async () => {
    const bookmarks = await storageService.getBookmarks();
    setBookmarkedIds(bookmarks.map(b => b.pageId));
  };

  const loadRecentPages = async () => {
    const recent = await storageService.getRecentPages();
    setRecentPageIds(recent);
  };

  const toggleBookmark = async (pageId: string) => {
    const isCurrentlyBookmarked = bookmarkedIds.includes(pageId);
    if (isCurrentlyBookmarked) {
      await storageService.removeBookmark(pageId);
    } else {
      await storageService.addBookmark(pageId);
    }
    await loadBookmarks();
  };

  const markAsViewed = async (pageId: string) => {
    await storageService.addRecentPage(pageId);
    await loadRecentPages();
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return wikiPages.filter(page =>
      page.title.toLowerCase().includes(query) ||
      page.content.toLowerCase().includes(query) ||
      page.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const getPagesByCategory = (categoryId: string): WikiPage[] => {
    return wikiPages.filter(page => page.categoryId === categoryId);
  };

  const getPageById = (pageId: string): WikiPage | undefined => {
    return wikiPages.find(page => page.id === pageId);
  };

  const bookmarkedPages = useMemo(() => {
    return wikiPages.filter(page => bookmarkedIds.includes(page.id));
  }, [bookmarkedIds]);

  const recentPages = useMemo(() => {
    return recentPageIds
      .map(id => wikiPages.find(page => page.id === id))
      .filter((page): page is WikiPage => page !== undefined)
      .slice(0, 10);
  }, [recentPageIds]);

  return {
    categories: wikiCategories,
    pages: wikiPages,
    searchQuery,
    setSearchQuery,
    searchResults,
    getPagesByCategory,
    getPageById,
    bookmarkedPages,
    recentPages,
    isBookmarked: (pageId: string) => bookmarkedIds.includes(pageId),
    toggleBookmark,
    markAsViewed,
  };
}
