import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { WikiPage } from '@/types/wiki';

interface PageListItemProps {
  page: WikiPage;
  isBookmarked?: boolean;
  onPress: () => void;
  onBookmarkPress?: () => void;
}

export function PageListItem({ page, isBookmarked, onPress, onBookmarkPress }: PageListItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.item,
        pressed && styles.itemPressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{page.title}</Text>
        <View style={styles.tagsContainer}>
          {page.tags.slice(0, 3).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
      {onBookmarkPress && (
        <Pressable
          style={styles.bookmarkButton}
          onPress={onBookmarkPress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <MaterialIcons
            name={isBookmarked ? 'bookmark' : 'bookmark-border'}
            size={24}
            color={isBookmarked ? theme.colors.primary : theme.colors.textMuted}
          />
        </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  itemPressed: {
    opacity: 0.7,
  },
  content: {
    flex: 1,
  },
  title: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xs,
  },
  tag: {
    backgroundColor: theme.colors.surfaceLight,
    borderRadius: 4,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
  },
  tagText: {
    ...theme.typography.small,
    color: theme.colors.textSubtle,
    fontSize: 11,
  },
  bookmarkButton: {
    marginLeft: theme.spacing.sm,
    padding: theme.spacing.xs,
  },
});
