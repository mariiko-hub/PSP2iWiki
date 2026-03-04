import { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { useWiki } from '@/hooks/useWiki';

export default function PageScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getPageById, isBookmarked, toggleBookmark, markAsViewed } = useWiki();

  const page = getPageById(id || '');

  useEffect(() => {
    if (page) {
      markAsViewed(page.id);
    }
  }, [page?.id]);

  if (!page) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.errorText}>Page not found</Text>
      </SafeAreaView>
    );
  }

  const bookmarked = isBookmarked(page.id);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: page.title,
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: { color: theme.colors.text, fontSize: 16 },
          headerRight: () => (
            <Pressable
              onPress={() => toggleBookmark(page.id)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ marginRight: 8 }}
            >
              <MaterialIcons
                name={bookmarked ? 'bookmark' : 'bookmark-border'}
                size={24}
                color={bookmarked ? theme.colors.primary : theme.colors.text}
              />
            </Pressable>
          ),
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
          {/* Tags */}
          <View style={styles.tagsContainer}>
            {page.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          {/* Content */}
          <View style={styles.contentContainer}>
            {page.content.split('\n').map((line, index) => {
              // Headers
              if (line.startsWith('# ')) {
                return (
                  <Text key={index} style={styles.h1}>
                    {line.replace('# ', '')}
                  </Text>
                );
              }
              if (line.startsWith('## ')) {
                return (
                  <Text key={index} style={styles.h2}>
                    {line.replace('## ', '')}
                  </Text>
                );
              }
              if (line.startsWith('### ')) {
                return (
                  <Text key={index} style={styles.h3}>
                    {line.replace('### ', '')}
                  </Text>
                );
              }
              // Bold list items
              if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.+?)\*\*:(.+)/);
                if (match) {
                  return (
                    <View key={index} style={styles.listItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.paragraph}>
                        <Text style={styles.bold}>{match[1]}:</Text>
                        {match[2]}
                      </Text>
                    </View>
                  );
                }
              }
              // Regular list items
              if (line.startsWith('- ')) {
                return (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.paragraph}>{line.replace('- ', '')}</Text>
                  </View>
                );
              }
              // Paragraphs
              if (line.trim()) {
                return (
                  <Text key={index} style={styles.paragraph}>
                    {line}
                  </Text>
                );
              }
              return <View key={index} style={styles.spacer} />;
            })}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <MaterialIcons name="update" size={14} color={theme.colors.textMuted} />
            <Text style={styles.footerText}>
              Last updated: {new Date(page.lastUpdated).toLocaleDateString()}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.lg,
  },
  tag: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
  },
  tagText: {
    ...theme.typography.small,
    color: theme.colors.background,
    fontWeight: '600',
    fontSize: 11,
  },
  contentContainer: {
    gap: theme.spacing.sm,
  },
  h1: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  h2: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  h3: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  paragraph: {
    ...theme.typography.body,
    color: theme.colors.textSubtle,
    lineHeight: 24,
  },
  bold: {
    fontWeight: '600',
    color: theme.colors.text,
  },
  listItem: {
    flexDirection: 'row',
    marginLeft: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  bullet: {
    ...theme.typography.body,
    color: theme.colors.primary,
  },
  spacer: {
    height: theme.spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  footerText: {
    ...theme.typography.small,
    color: theme.colors.textMuted,
  },
  errorText: {
    ...theme.typography.body,
    color: theme.colors.error,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
});
