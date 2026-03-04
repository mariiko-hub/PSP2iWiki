import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { useWiki } from '@/hooks/useWiki';
import { PageListItem } from '@/components/PageListItem';

export default function BookmarksScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { bookmarkedPages, toggleBookmark } = useWiki();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Bookmarks</Text>
        <Text style={styles.subtitle}>
          {bookmarkedPages.length} {bookmarkedPages.length === 1 ? 'page' : 'pages'} saved
        </Text>
      </View>

      {bookmarkedPages.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="bookmark-border" size={64} color={theme.colors.textMuted} />
          <Text style={styles.emptyText}>No bookmarks yet</Text>
          <Text style={styles.emptyHint}>
            Tap the bookmark icon on any page to save it here
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookmarkedPages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PageListItem
              page={item}
              isBookmarked={true}
              onPress={() => router.push(`/page/${item.id}`)}
              onBookmarkPress={() => toggleBookmark(item.id)}
            />
          )}
          contentContainerStyle={[
            styles.listContent,
            { paddingBottom: insets.bottom + 80 },
          ]}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSubtle,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
  emptyText: {
    ...theme.typography.h3,
    color: theme.colors.textSubtle,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  emptyHint: {
    ...theme.typography.body,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  listContent: {
    padding: theme.spacing.md,
  },
});
