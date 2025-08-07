import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, MessageSquare, Volume2, Languages, Play, Square, Mic, MicOff, Headphones } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [activeMode, setActiveMode] = useState<'isl-to-text' | 'text-to-isl' | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [detectedText, setDetectedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleStartISLDetection = () => {
    setActiveMode('isl-to-text');
    setIsRecording(true);
    // Simulate ISL detection
    setTimeout(() => {
      setDetectedText('Hello, how are you?');
    }, 2000);
  };

  const handleStopISLDetection = () => {
    setIsRecording(false);
  };

  const handleConvertToSpeech = () => {
    if (detectedText) {
      Alert.alert('Speech', `Converting to speech: "${detectedText}"`);
    }
  };

  const handleTranslateToHindi = () => {
    if (detectedText) {
      setTranslatedText('नमस्ते, आप कैसे हैं?');
    }
  };

  const handleTextToISL = () => {
    setActiveMode('text-to-isl');
    if (inputText) {
      Alert.alert('ISL Animation', `Converting to ISL: "${inputText}"`);
    }
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setInputText('Hello, nice to meet you');
        setIsListening(false);
      }, 3000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.appNameContainer}>
            <View style={styles.logoContainer}>
              <Headphones size={28} color="#8B5CF6" />
            </View>
            <Text style={styles.title}>VoiceHeard</Text>
          </View>
          <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Seamless two-way translation between Indian Sign Language and text/speech with multilingual support
          </Text>
          </View>
        </View>

        {/* Main Cards */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={[styles.card, activeMode === 'isl-to-text' && styles.activeCard]}
            onPress={() => setActiveMode(activeMode === 'isl-to-text' ? null : 'isl-to-text')}
          >
            <View style={styles.cardIcon}>
              <Camera size={32} color="#2563EB" />
            </View>
            <Text style={styles.cardTitle}>ISL to Text/Speech</Text>
            <Text style={styles.cardDescription}>
              Detect sign language gestures and convert to text or speech
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, activeMode === 'text-to-isl' && styles.activeCard]}
            onPress={() => setActiveMode(activeMode === 'text-to-isl' ? null : 'text-to-isl')}
          >
            <View style={styles.cardIcon}>
              <MessageSquare size={32} color="#2563EB" />
            </View>
            <Text style={styles.cardTitle}>Text/Speech to ISL</Text>
            <Text style={styles.cardDescription}>
              Convert text or speech to animated sign language gestures
            </Text>
          </TouchableOpacity>
        </View>

        {/* ISL to Text Mode */}
        {activeMode === 'isl-to-text' && (
          <View style={styles.modeContainer}>
            <View style={styles.cameraContainer}>
              <View style={styles.cameraPlaceholder}>
                <Camera size={48} color="#6B7280" />
                <Text style={styles.cameraText}>Camera Feed</Text>
                {isRecording && <Text style={styles.recordingText}>● Recording...</Text>}
              </View>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.actionButton, isRecording && styles.stopButton]}
                onPress={isRecording ? handleStopISLDetection : handleStartISLDetection}
              >
                {isRecording ? <Square size={20} color="#FFFFFF" /> : <Play size={20} color="#FFFFFF" />}
                <Text style={styles.buttonText}>
                  {isRecording ? 'Stop' : 'Start'} Detection
                </Text>
              </TouchableOpacity>
            </View>

            {detectedText && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Detected Text:</Text>
                <Text style={styles.resultText}>{detectedText}</Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.secondaryButton} onPress={handleConvertToSpeech}>
                    <Volume2 size={18} color="#2563EB" />
                    <Text style={styles.secondaryButtonText}>Convert to Speech</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.secondaryButton} onPress={handleTranslateToHindi}>
                    <Languages size={18} color="#2563EB" />
                    <Text style={styles.secondaryButtonText}>Translate to Hindi</Text>
                  </TouchableOpacity>
                </View>

                {translatedText && (
                  <View style={styles.translationContainer}>
                    <Text style={styles.resultLabel}>Hindi Translation:</Text>
                    <Text style={styles.resultText}>{translatedText}</Text>
                  </View>
                )}
              </View>
            )}
          </View>
        )}

        {/* Text to ISL Mode */}
        {activeMode === 'text-to-isl' && (
          <View style={styles.modeContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Enter text to convert to ISL:</Text>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInput}>{inputText || 'Type your message here...'}</Text>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.actionButton, { backgroundColor: '#059669' }]}
                  onPress={handleVoiceInput}
                >
                  {isListening ? <MicOff size={20} color="#FFFFFF" /> : <Mic size={20} color="#FFFFFF" />}
                  <Text style={styles.buttonText}>
                    {isListening ? 'Stop Listening' : 'Voice Input'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={handleTextToISL}>
                  <Play size={20} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Convert to ISL</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.avatarContainer}>
              <View style={styles.avatarPlaceholder}>
                <MessageSquare size={48} color="#6B7280" />
                <Text style={styles.avatarText}>3D Avatar Animation</Text>
              </View>
            </View>
          </View>
        )}
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
    marginBottom: 20,
  },
  logoContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#F3E8FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#8B5CF6',
    fontFamily: 'Times New Roman',
    textShadowColor: 'rgba(139, 92, 246, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  cardsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeCard: {
    borderColor: '#8B5CF6',
  },
  cardIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#F3E8FF',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  modeContainer: {
    padding: 24,
    gap: 24,
  },
  cameraContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  cameraPlaceholder: {
    height: 240,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  cameraText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
  },
  recordingText: {
    fontSize: 14,
    color: '#DC2626',
    marginTop: 4,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  actionButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stopButton: {
    backgroundColor: '#DC2626',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  secondaryButtonText: {
    color: '#8B5CF6',
    fontSize: 14,
    fontWeight: '600',
  },
  resultContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    gap: 16,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  resultText: {
    fontSize: 18,
    color: '#374151',
    lineHeight: 24,
  },
  translationContainer: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  inputContainer: {
    gap: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  textInputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  textInput: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  avatarContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  avatarPlaceholder: {
    height: 200,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  avatarText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
  },
});