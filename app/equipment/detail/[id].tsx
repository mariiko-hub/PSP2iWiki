
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { equipmentDatabase, shieldWeaves, modules } from '@/services/wikiData';

export default function EquipmentDetailScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  const allEquipment = [...equipmentDatabase, ...shieldWeaves, ...modules];
  const item = allEquipment.find(e => e.id === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.errorText}>Equipment not found</Text>
      </SafeAreaView>
    );
  }

  const getRarityStars = (rarity: number) => {
    return '★'.repeat(Math.min(rarity, 5)) + '☆'.repeat(Math.max(0, 5 - rarity));
  };

  const getElementColor = (element: string): string => {
    const colors: Record<string, string> = {
      Fire: '#FF6B35',
      Ice: '#4ECDC4',
      Lightning: '#FFE66D',
      Light: '#F7FFF7',
      Dark: '#1A1A2E',
    };
    return colors[element] || theme.colors.primary;
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: item.name,
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: { color: theme.colors.text, fontSize: 16 },
        }}
      />
      <SafeAreaView style={styles.container} edges={[]}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 20 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.titleRow}>
              <Text style={styles.name}>{item.name}</Text>
              {item.element && (
                <View style={[styles.elementBadge, { backgroundColor: getElementColor(item.element) }]}>
                  <MaterialIcons name="flash-on" size={16} color="#000" />
                  <Text style={styles.elementText}>{item.element}</Text>
                </View>
              )}
            </View>
            <Text style={styles.rarity}>{getRarityStars(item.rarity)}</Text>
          </View>

          {/* Info Cards */}
          <View style={styles.infoGrid}>
            <View style={styles.infoCard}>
              <MaterialIcons name="category" size={24} color={theme.colors.primary} />
              <Text style={styles.infoLabel}>Type</Text>
              <Text style={styles.infoValue}>{item.type}</Text>
            </View>
            <View style={styles.infoCard}>
              <MaterialIcons name="trending-up" size={24} color={theme.colors.primary} />
              <Text style={styles.infoLabel}>Level</Text>
              <Text style={styles.infoValue}>{item.level}</Text>
            </View>
            {item.manufacturer && (
              <View style={styles.infoCard}>
                <MaterialIcons name="business" size={24} color={theme.colors.primary} />
                <Text style={styles.infoLabel}>Maker</Text>
                <Text style={styles.infoValue}>{item.manufacturer}</Text>
              </View>
            )}
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          {/* Stats */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Statistics</Text>
            {Object.entries(item.stats).map(([key, value]) => {
              if (!value) return null;
              return (
                <View key={key} style={styles.statRow}>
                  <Text style={styles.statName}>{key.toUpperCase()}</Text>
                  <View style={styles.statBar}>
                    <View
                      style={[
                        styles.statBarFill,
                        { width: `${Math.min((value as number) / 10, 100)}%` },
                      ]}
                    />
                    <Text style={styles.statValue}>{value}</Text>
                  </View>
                </View>
              );
            })}
            {Object.keys(item.stats).length === 0 && (
              <Text style={styles.noStats}>Special effect module - no direct stats</Text>
            )}
          </View>

          {/* Usage Tips */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Usage Tips</Text>
            <View style={styles.tipCard}>
              <MaterialIcons name="lightbulb" size={20} color={theme.colors.primary} />
              <Text style={styles.tipText}>
                {getTipForItem(item.type, item.rarity)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function getTipForItem(type: string, rarity: number): string {
  if (type.includes('Module - Blast')) {
    return 'Only one blast module can be equipped per shield-weave. Choose based on your preferred element and playstyle.';
  }
  if (type.includes('Module - Resist')) {
    return 'Stack different resist modules to gain immunity to multiple status effects. Very useful in endgame content.';
  }
  if (type.includes('Module')) {
    return 'Stat modules stack infinitely. Equip multiple of the same type for maximum benefit if you have enough slots.';
  }
  if (type.includes('Shield-weave')) {
    return 'Choose shield-weaves based on your class needs. Yohmei for Forces, Tenora-senba for Hunters, Rabol for Rangers.';
  }
  if (rarity >= 10) {
    return 'Legendary equipment! Can be upgraded further with Extend Codes for maximum power. Essential for endgame content.';
  }
  if (rarity >= 5) {
    return 'High-quality equipment suitable for mid to late game. Worth investing in upgrades and grinding materials.';
  }
  return 'Solid equipment for your current level. Upgrade at the weapon shop to enhance stats further.';
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  name: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    flex: 1,
  },
  elementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.sm,
    gap: 4,
  },
  elementText: {
    ...theme.typography.caption,
    color: '#000',
    fontWeight: '700',
  },
  rarity: {
    ...theme.typography.h2,
    color: theme.colors.primary,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  infoCard: {
    flex: 1,
    minWidth: 100,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  infoLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSubtle,
    marginTop: theme.spacing.xs,
  },
  infoValue: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '600',
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSubtle,
    lineHeight: 24,
  },
  statRow: {
    marginBottom: theme.spacing.md,
  },
  statName: {
    ...theme.typography.caption,
    color: theme.colors.text,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  statBar: {
    height: 32,
    backgroundColor: theme.colors.surfaceLight,
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
  },
  statBarFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
    opacity: 0.3,
  },
  statValue: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '700',
    textAlign: 'center',
  },
  noStats: {
    ...theme.typography.body,
    color: theme.colors.textMuted,
    fontStyle: 'italic',
  },
  tipCard: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  tipText: {
    ...theme.typography.body,
    color: theme.colors.textSubtle,
    flex: 1,
    lineHeight: 22,
  },
  errorText: {
    ...theme.typography.body,
    color: theme.colors.error,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
});
