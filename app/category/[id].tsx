import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { useWiki } from '@/hooks/useWiki';
import { PageListItem } from '@/components/PageListItem';

export default function CategoryScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { categories, getPagesByCategory, isBookmarked, toggleBookmark } = useWiki();

  const category = categories.find(c => c.id === id);
  const pages = getPagesByCategory(id || '');

  // Check if this is an equipment category
  const isEquipmentCategory = ['weapons', 'shield-weaves', 'modules'].includes(id || '');

  if (isEquipmentCategory) {
    router.replace(`/equipment/${id}`);
    return null;
  }

  if (!category) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.errorText}>Category not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: category.name,
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: { color: theme.colors.text },
        }}
      />
      <SafeAreaView style={styles.container} edges={[]}>
        <View style={styles.categoryHeader}>
          <View style={styles.iconContainer}>
            <MaterialIcons name={category.icon as any} size={40} color={theme.colors.primary} />
          </View>
          <Text style={styles.description}>{category.description}</Text>
          <Text style={styles.count}>
            {pages.length} {pages.length === 1 ? 'article' : 'articles'}
          </Text>
        </View>

        {pages.length === 0 ? (
          <View style={styles.emptyContainer}>
            <MaterialIcons name="article" size={64} color={theme.colors.textMuted} />
            <Text style={styles.emptyText}>No articles yet</Text>
          </View>
        ) : (
          <FlatList
            data={pages}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  categoryHeader: {
    padding: theme.spacing.md,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSubtle,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  count: {
    ...theme.typography.caption,
    color: theme.colors.textMuted,
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
  },
  listContent: {
    padding: theme.spacing.md,
  },
  errorText: {
    ...theme.typography.body,
    color: theme.colors.error,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
});
