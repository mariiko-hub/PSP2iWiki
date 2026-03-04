
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { equipmentDatabase, shieldWeaves, modules } from '@/services/wikiData';

export default function EquipmentListScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { type } = useLocalSearchParams<{ type: string }>();
  const [filter, setFilter] = useState('all');

  const getEquipmentData = () => {
    if (type === 'shield-weaves') return shieldWeaves;
    if (type === 'modules') return modules;
    return equipmentDatabase;
  };

  const equipment = getEquipmentData();

  const getUniqueTypes = () => {
    const types = new Set(equipment.map(e => e.type));
    return ['all', ...Array.from(types)];
  };

  const filteredEquipment = filter === 'all' 
    ? equipment 
    : equipment.filter(e => e.type === filter);

  const getTitle = () => {
    if (type === 'shield-weaves') return 'Shield-weaves';
    if (type === 'modules') return 'Modules';
    return 'Weapons';
  };

  const getRarityStars = (rarity: number) => {
    return '★'.repeat(Math.min(rarity, 5)) + '☆'.repeat(Math.max(0, 5 - rarity));
  };

  const getStatDisplay = (stats: any) => {
    const statEntries = Object.entries(stats).filter(([_, value]) => value);
    if (statEntries.length === 0) return 'Special Effect';
    return statEntries
      .map(([key, value]) => `${key.toUpperCase()} ${value}`)
      .join(' • ');
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: getTitle(),
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: { color: theme.colors.text },
        }}
      />
      <SafeAreaView style={styles.container} edges={[]}>
        {/* Filter Bar */}
        <View style={styles.filterContainer}>
          <FlatList
            horizontal
            data={getUniqueTypes()}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.filterButton,
                  filter === item && styles.filterButtonActive,
                ]}
                onPress={() => setFilter(item)}
              >
                <Text
                  style={[
                    styles.filterText,
                    filter === item && styles.filterTextActive,
                  ]}
                >
                  {item === 'all' ? 'All' : item}
                </Text>
              </Pressable>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContent}
          />
        </View>

        {/* Equipment List */}
        <FlatList
          data={filteredEquipment}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                styles.itemCard,
                pressed && styles.itemCardPressed,
              ]}
              onPress={() => router.push(`/equipment/detail/${item.id}`)}
            >
              <View style={styles.itemHeader}>
                <View style={styles.itemTitleRow}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  {item.element && (
                    <View style={[styles.elementBadge, { backgroundColor: getElementColor(item.element) }]}>
                      <Text style={styles.elementText}>{item.element}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.itemRarity}>{getRarityStars(item.rarity)}</Text>
              </View>
              
              <View style={styles.itemInfo}>
                <Text style={styles.itemType}>{item.type}</Text>
                <Text style={styles.itemLevel}>Lv.{item.level}</Text>
              </View>
              
              <Text style={styles.itemStats}>{getStatDisplay(item.stats)}</Text>
              
              {item.manufacturer && (
                <View style={styles.manufacturer}>
                  <MaterialIcons name="business" size={12} color={theme.colors.textMuted} />
                  <Text style={styles.manufacturerText}>{item.manufacturer}</Text>
                </View>
              )}
            </Pressable>
          )}
          contentContainerStyle={[
            styles.listContent,
            { paddingBottom: insets.bottom + 20 },
          ]}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <MaterialIcons name="inventory-2" size={64} color={theme.colors.textMuted} />
              <Text style={styles.emptyText}>No equipment found</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
}

function getElementColor(element: string): string {
  const colors: Record<string, string> = {
    Fire: '#FF6B35',
    Ice: '#4ECDC4',
    Lightning: '#FFE66D',
    Light: '#F7FFF7',
    Dark: '#1A1A2E',
  };
  return colors[element] || theme.colors.primary;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  filterContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  filterContent: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  filterButton: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginRight: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  filterButtonActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  filterText: {
    ...theme.typography.caption,
    color: theme.colors.textSubtle,
    fontWeight: '600',
  },
  filterTextActive: {
    color: theme.colors.background,
  },
  listContent: {
    padding: theme.spacing.md,
  },
  itemCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  itemCardPressed: {
    opacity: 0.7,
  },
  itemHeader: {
    marginBottom: theme.spacing.xs,
  },
  itemTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  itemName: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '700',
    flex: 1,
  },
  elementBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
  },
  elementText: {
    ...theme.typography.small,
    color: '#000',
    fontWeight: '600',
    fontSize: 10,
  },
  itemRarity: {
    ...theme.typography.caption,
    color: theme.colors.primary,
    fontSize: 14,
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xs,
  },
  itemType: {
    ...theme.typography.caption,
    color: theme.colors.textSubtle,
  },
  itemLevel: {
    ...theme.typography.caption,
    color: theme.colors.textMuted,
  },
  itemStats: {
    ...theme.typography.small,
    color: theme.colors.primary,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  manufacturer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  manufacturerText: {
    ...theme.typography.small,
    color: theme.colors.textMuted,
    fontSize: 11,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  },
  emptyText: {
    ...theme.typography.h3,
    color: theme.colors.textSubtle,
    marginTop: theme.spacing.md,
  },
});
