import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, History, Settings, LogOut, Trash2, Star, Headphones } from 'lucide-react-native';

export default function AccountScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

  const recentTranslations = [
    { id: 1, text: 'Hello, how are you?', translation: 'नमस्ते, आप कैसे हैं?', type: 'isl-to-text', date: '2024-01-15' },
    { id: 2, text: 'Thank you very much', translation: 'धन्यवाद', type: 'text-to-isl', date: '2024-01-14' },
    { id: 3, text: 'Good morning', translation: 'सुप्रभात', type: 'isl-to-text', date: '2024-01-13' },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    Alert.alert('Success', 'Logged in successfully!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Alert.alert('Success', 'Logged out successfully!');
  };

  const handleClearHistory = () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear all translation history?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: () => Alert.alert('Success', 'History cleared!') }
      ]
    );
  };

  const handleSaveTranslation = (id: number) => {
    Alert.alert('Success', 'Translation saved to favorites!');
  };

  const LoginScreen = () => (
    <View style={styles.loginContainer}>
      <View style={styles.loginCard}>
        <View style={styles.loginIcon}>
          <User size={48} color="#2563EB" />
        </View>
        <Text style={styles.loginTitle}>Welcome Back</Text>
        <Text style={styles.loginSubtitle}>Sign in to access your account and translation history</Text>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const UserDashboard = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* User Profile */}
      <View style={styles.profileCard}>
        <View style={styles.profileIcon}>
          <User size={32} color="#2563EB" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard}>
            <History size={24} color="#2563EB" />
            <Text style={styles.actionText}>View History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Star size={24} color="#2563EB" />
            <Text style={styles.actionText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard} onPress={handleClearHistory}>
            <Trash2 size={24} color="#DC2626" />
            <Text style={[styles.actionText, { color: '#DC2626' }]}>Clear History</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Translations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Translations</Text>
        {recentTranslations.map((item) => (
          <View key={item.id} style={styles.translationCard}>
            <View style={styles.translationHeader}>
              <Text style={styles.translationType}>
                {item.type === 'isl-to-text' ? 'ISL → Text' : 'Text → ISL'}
              </Text>
              <Text style={styles.translationDate}>{item.date}</Text>
            </View>
            <Text style={styles.translationText}>{item.text}</Text>
            <Text style={styles.translationResult}>{item.translation}</Text>
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={() => handleSaveTranslation(item.id)}
            >
              <Star size={16} color="#2563EB" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Logout */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={20} color="#DC2626" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.appNameContainer}>
          <View style={styles.logoContainer}>
            <Headphones size={24} color="#8B5CF6" />
          </View>
          <Text style={styles.appTitle}>VoiceHeard</Text>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.subtitle}>Manage your profile and translation history</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {isLoggedIn ? <UserDashboard /> : <LoginScreen />}
      </View>
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '100%',
    maxWidth: 400,
  },
  loginIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#F3E8FF',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  loginSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  loginButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '600',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileIcon: {
    width: 56,
    height: 56,
    backgroundColor: '#F3E8FF',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
  },
  settingsButton: {
    padding: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: {
    fontSize: 12,
    color: '#8B5CF6',
    marginTop: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  translationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  translationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  translationType: {
    fontSize: 12,
    color: '#8B5CF6',
    fontWeight: '600',
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  translationDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  translationText: {
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  translationResult: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  saveButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },
  logoutText: {
    fontSize: 16,
    color: '#DC2626',
    fontWeight: '600',
  },
});