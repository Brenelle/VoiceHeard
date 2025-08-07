import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Hash, Type, Headphones } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const numbers = Array.from({ length: 10 }, (_, i) => i.toString());

export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState<'alphabets' | 'numbers'>('alphabets');

  const handleSignPress = (sign: string) => {
    Alert.alert('ISL Sign', `Playing animation for "${sign}"`);
  };

  const renderSignGrid = (items: string[]) => {
    return (
      <View style={styles.grid}>
        {items.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.signCard}
            onPress={() => handleSignPress(item)}
          >
            <View style={styles.signPlaceholder}>
              <Text style={styles.signText}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.appNameContainer}>
            <View style={styles.logoContainer}>
              <Headphones size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.appTitle}>VoiceHeard</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Learn ISL</Text>
            <Text style={styles.subtitle}>
              Master the basics of Indian Sign Language with interactive animations
            </Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'alphabets' && styles.activeTab]}
            onPress={() => setActiveTab('alphabets')}
          >
            <Type size={20} color={activeTab === 'alphabets' ? '#FFFFFF' : '#6B7280'} />
            <Text style={[styles.tabText, activeTab === 'alphabets' && styles.activeTabText]}>
              Alphabets
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'numbers' && styles.activeTab]}
            onPress={() => setActiveTab('numbers')}
          >
            <Hash size={20} color={activeTab === 'numbers' ? '#FFFFFF' : '#6B7280'} />
            <Text style={[styles.tabText, activeTab === 'numbers' && styles.activeTabText]}>
              Numbers
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {activeTab === 'alphabets' && (
            <View>
              <Text style={styles.sectionTitle}>ISL Alphabets (A-Z)</Text>
              <Text style={styles.sectionSubtitle}>
                Tap any letter to see the corresponding sign language gesture
              </Text>
              {renderSignGrid(alphabets)}
            </View>
          )}

          {activeTab === 'numbers' && (
            <View>
              <Text style={styles.sectionTitle}>ISL Numbers (0-9)</Text>
              <Text style={styles.sectionSubtitle}>
                Tap any number to see the corresponding sign language gesture
              </Text>
              {renderSignGrid(numbers)}
            </View>
          )}
        </View>

        {/* Instructions */}
        <View style={styles.instructions}>
          <Text style={styles.instructionTitle}>How to Use</Text>
          <View style={styles.instructionItem}>
            <Text style={styles.instructionNumber}>1</Text>
            <Text style={styles.instructionText}>
              Select between Alphabets or Numbers tab
            </Text>
          </View>
          <View style={styles.instructionItem}>
            <Text style={styles.instructionNumber}>2</Text>
            <Text style={styles.instructionText}>
              Tap on any letter or number to view the ISL gesture
            </Text>
          </View>
          <View style={styles.instructionItem}>
            <Text style={styles.instructionNumber}>3</Text>
            <Text style={styles.instructionText}>
              Practice the gestures by following the 3D animations
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 24,
  },
  appNameContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#F3E8FF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8B5CF6',
    fontFamily: 'Times New Roman',
    textShadowColor: 'rgba(139, 92, 246, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  activeTab: {
    backgroundColor: '#8B5CF6',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  signCard: {
    width: (width - 72) / 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  signPlaceholder: {
    width: '100%',
    height: 60,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  signText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
  },
  instructions: {
    margin: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  instructionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  instructionNumber: {
    width: 24,
    height: 24,
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
    marginRight: 12,
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
});
