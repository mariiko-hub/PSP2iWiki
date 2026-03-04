import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { useWiki } from '@/hooks/useWiki';
import { CategoryCard } from '@/components/CategoryCard';

export default function WikiHomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { categories, recentPages } = useWiki();

  const sections = [
    { id: 'character', title: 'Character', icon: 'person' },
    { id: 'items', title: 'Items', icon: 'inventory' },
    { id: 'gameplay', title: 'Gameplay', icon: 'games' },
    { id: 'misc', title: 'Miscellaneous', icon: 'more-horiz' },
    { id: 'extra', title: 'Extra Content', icon: 'extension' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 80 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>PSP2i Wiki</Text>
          <Text style={styles.subtitle}>Phantasy Star Portable 2 Infinity</Text>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <MaterialIcons name="article" size={16} color={theme.colors.primary} />
              <Text style={styles.statText}>1,232 articles</Text>
            </View>
            <View style={styles.stat}>
              <MaterialIcons name="signal-wifi-off" size={16} color={theme.colors.success} />
              <Text style={styles.statText}>Offline ready</Text>
            </View>
          </View>
        </View>

        {/* Quick Equipment Access */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="inventory" size={20} color={theme.colors.primary} />
            <Text style={styles.sectionTitle}>Equipment Database</Text>
          </View>
          <View style={styles.equipmentGrid}>
            <Pressable
              style={({ pressed }) => [
                styles.equipmentCard,
                pressed && styles.equipmentCardPressed,
              ]}
              onPress={() => router.push('/equipment/weapons')}
            >
              <MaterialIcons name="gavel" size={32} color={theme.colors.primary} />
              <Text style={styles.equipmentTitle}>Weapons</Text>
              <Text style={styles.equipmentCount}>28 Types</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.equipmentCard,
                pressed && styles.equipmentCardPressed,
              ]}
              onPress={() => router.push('/equipment/shield-weaves')}
            >
              <MaterialIcons name="shield" size={32} color={theme.colors.primary} />
              <Text style={styles.equipmentTitle}>Armor</Text>
              <Text style={styles.equipmentCount}>Shield-weaves</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.equipmentCard,
                pressed && styles.equipmentCardPressed,
              ]}
              onPress={() => router.push('/equipment/modules')}
            >
              <MaterialIcons name="extension" size={32} color={theme.colors.primary} />
              <Text style={styles.equipmentTitle}>Modules</Text>
              <Text style={styles.equipmentCount}>Units</Text>
            </Pressable>
          </View>
        </View>

        {/* Recent Pages */}
        {recentPages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentScroll}
            >
              {recentPages.slice(0, 5).map((page) => (
                <Pressable
                  key={page.id}
                  style={({ pressed }) => [
                    styles.recentCard,
                    pressed && styles.recentCardPressed,
                  ]}
                  onPress={() => router.push(`/page/${page.id}`)}
                >
                  <Text style={styles.recentTitle} numberOfLines={2}>
                    {page.title}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Category Sections */}
        {sections.map((section) => {
          const sectionCategories = categories.filter(c => c.section === section.id);
          if (sectionCategories.length === 0) return null;

          return (
            <View key={section.id} style={styles.section}>
              <View style={styles.sectionHeader}>
                <MaterialIcons name={section.icon as any} size={20} color={theme.colors.primary} />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              <View style={styles.categoryGrid}>
                {sectionCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onPress={() => router.push(`/category/${category.id}`)}
                  />
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing.md,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSubtle,
    marginBottom: theme.spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  statText: {
    ...theme.typography.caption,
    color: theme.colors.textSubtle,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing.xs,
  },
  recentScroll: {
    paddingRight: theme.spacing.md,
  },
  recentCard: {
    width: 140,
    height: 80,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginRight: theme.spacing.sm,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  recentCardPressed: {
    opacity: 0.7,
  },
  recentTitle: {
    ...theme.typography.caption,
    color: theme.colors.text,
    fontWeight: '600',
  },
  equipmentGrid: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  equipmentCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    gap: theme.spacing.xs,
  },
  equipmentCardPressed: {
    opacity: 0.7,
  },
  equipmentTitle: {
    ...theme.typography.caption,
    color: theme.colors.text,
    fontWeight: '700',
  },
  equipmentCount: {
    ...theme.typography.small,
    color: theme.colors.textMuted,
    fontSize: 10,
  },
});
