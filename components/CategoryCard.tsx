import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { WikiCategory } from '@/types/wiki';

interface CategoryCardProps {
  category: WikiCategory;
  onPress: () => void;
}

export function CategoryCard({ category, onPress }: CategoryCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons
          name={category.icon as any}
          size={32}
          color={theme.colors.primary}
        />
      </View>
      <Text style={styles.title}>{category.name}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {category.description}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 150,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    margin: theme.spacing.xs,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
  },
  title: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  description: {
    ...theme.typography.small,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
});
