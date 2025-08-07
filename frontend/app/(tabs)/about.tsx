import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, MessageSquare, Volume2, Languages, BookOpen, CircleHelp as HelpCircle, Headphones } from 'lucide-react-native';

export default function AboutScreen() {
  const features = [
    {
      icon: <Camera size={24} color="#2563EB" />,
      title: 'Real-time ISL Recognition',
      description: 'Advanced AI-powered gesture recognition for accurate ISL detection'
    },
    {
      icon: <MessageSquare size={24} color="#2563EB" />,
      title: '3D Avatar Animation',
      description: 'Lifelike 3D avatars that demonstrate ISL gestures clearly'
    },
    {
      icon: <Volume2 size={24} color="#2563EB" />,
      title: 'Text-to-Speech',
      description: 'Convert translated text to natural-sounding speech'
    },
    {
      icon: <Languages size={24} color="#2563EB" />,
      title: 'Hindi Translation',
      description: 'Seamless translation between English and Hindi'
    },
  ];

  const howToUseSteps = [
    {
      step: 1,
      title: 'ISL to Text/Speech',
      description: 'Tap "ISL to Text/Speech" card, allow camera access, and start signing. The app will detect your gestures and form sentences automatically.',
      details: [
        'Position yourself clearly in front of the camera',
        'Ensure good lighting for accurate detection',
        'Sign at a moderate pace for best results',
        'Wait for the app to process each gesture'
      ]
    },
    {
      step: 2,
      title: 'Text/Speech to ISL',
      description: 'Select "Text/Speech to ISL", enter your text or use voice input, then watch the 3D avatar demonstrate the signs.',
      details: [
        'Type your message in the text box',
        'Or use the microphone for voice input',
        'Tap "Convert to ISL" to see the animation',
        'Watch the avatar demonstrate each sign'
      ]
    },
    {
      step: 3,
      title: 'Learn ISL Basics',
      description: 'Visit the Learn tab to practice alphabets and numbers with interactive animations.',
      details: [
        'Browse through ISL alphabets A-Z',
        'Learn number signs 0-9',
        'Tap any letter/number to see the gesture',
        'Practice following the animations'
      ]
    },
    {
      step: 4,
      title: 'Manage Your Account',
      description: 'Sign in to save translations, view history, and track your learning progress.',
      details: [
        'Create an account to save your progress',
        'View your translation history',
        'Save frequently used phrases',
        'Clear history when needed'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the ISL recognition?',
      answer: 'Our AI model has been trained on thousands of ISL gestures and achieves over 95% accuracy in good lighting conditions.'
    },
    {
      question: 'Can I use the app offline?',
      answer: 'Basic functionality requires internet connection for AI processing. We are working on offline capabilities for future updates.'
    },
    {
      question: 'Which languages are supported?',
      answer: 'Currently we support English and Hindi. More languages will be added in future updates.'
    },
    {
      question: 'How do I improve recognition accuracy?',
      answer: 'Ensure good lighting, position yourself clearly in camera view, and sign at moderate pace for best results.'
    }
  ];

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
          <Text style={styles.title}>About VoiceHeard</Text>
          <Text style={styles.subtitle}>
            Your comprehensive guide to using the ISL Translation App
          </Text>
          </View>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View style={styles.featureIcon}>
                {feature.icon}
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* How to Use */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Use</Text>
          {howToUseSteps.map((step) => (
            <View key={step.step} style={styles.stepCard}>
              <View style={styles.stepHeader}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{step.step}</Text>
                </View>
                <Text style={styles.stepTitle}>{step.title}</Text>
              </View>
              <Text style={styles.stepDescription}>{step.description}</Text>
              <View style={styles.stepDetails}>
                {step.details.map((detail, index) => (
                  <View key={index} style={styles.stepDetailItem}>
                    <Text style={styles.stepDetailBullet}>•</Text>
                    <Text style={styles.stepDetailText}>{detail}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* FAQ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          {faqs.map((faq, index) => (
            <View key={index} style={styles.faqCard}>
              <View style={styles.faqHeader}>
                <HelpCircle size={20} color="#2563EB" />
                <Text style={styles.faqQuestion}>{faq.question}</Text>
              </View>
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}
        </View>

        {/* Tips */}
        <View style={styles.section}>
          <View style={styles.tipsCard}>
            <Text style={styles.tipsTitle}>💡 Pro Tips</Text>
            <View style={styles.tipsList}>
              <Text style={styles.tip}>• Use good lighting for better gesture recognition</Text>
              <Text style={styles.tip}>• Keep your hands visible and centered in the camera</Text>
              <Text style={styles.tip}>• Practice with the Learn tab before attempting conversations</Text>
              <Text style={styles.tip}>• Sign at a moderate pace for optimal accuracy</Text>
              <Text style={styles.tip}>• Save frequently used phrases for quick access</Text>
            </View>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Need Help?</Text>
            <Text style={styles.contactText}>
              If you encounter any issues or have suggestions for improvement, please reach out to our support team.
            </Text>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Contact Support</Text>
            </TouchableOpacity>
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
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#F3E8FF',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepNumber: {
    width: 32,
    height: 32,
    backgroundColor: '#8B5CF6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  stepDescription: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 12,
  },
  stepDetails: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
  },
  stepDetailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  stepDetailBullet: {
    fontSize: 14,
    color: '#8B5CF6',
    marginRight: 8,
    marginTop: 2,
  },
  stepDetailText: {
    flex: 1,
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  tipsCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#92400E',
    marginBottom: 12,
  },
  tipsList: {
    gap: 8,
  },
  tip: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});