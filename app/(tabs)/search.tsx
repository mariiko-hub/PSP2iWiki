import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { useWiki } from '@/hooks/useWiki';
import { SearchBar } from '@/components/SearchBar';
import { PageListItem } from '@/components/PageListItem';

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { searchQuery, setSearchQuery, searchResults, isBookmarked, toggleBookmark } = useWiki();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Search Wiki</Text>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search articles, weapons, missions..."
        />
      </View>

      {searchQuery.trim() === '' ? (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="search" size={64} color={theme.colors.textMuted} />
          <Text style={styles.emptyText}>Enter keywords to search</Text>
          <Text style={styles.emptyHint}>
            Try: weapons, missions, races, photon arts
          </Text>
        </View>
      ) : searchResults.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="search-off" size={64} color={theme.colors.textMuted} />
          <Text style={styles.emptyText}>No results found</Text>
          <Text style={styles.emptyHint}>Try different keywords</Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PageListItem
              page={item}
              isBookmarked={isBookmarked(item.id)}
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
    gap: theme.spacing.md,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
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
