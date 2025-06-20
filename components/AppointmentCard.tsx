// AppointmentCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  status: string; // 'Upcoming', 'Completed', etc.
  date: string;
  time: string;
  doctorImage: string;
  timerText: string | null;
  onPressDetails: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctorName,
  specialty,
  status,
  date,
  time,
  doctorImage,
  timerText,
  onPressDetails,
}) => {
  // Determine if the "Join Call" button should be disabled and styled differently
  const isJoinCallDisabled = status === 'Upcoming';
  const joinCallButtonStyle: ViewStyle = isJoinCallDisabled ? styles.joinCallButtonDisabled : styles.joinCallButtonActive;
  const joinCallButtonTextStyle: TextStyle = isJoinCallDisabled ? styles.joinCallButtonTextDisabled : styles.joinCallButtonTextActive;

  return (
    <View style={styles.appointmentCard}>
      <View style={styles.glowGreenLarge}></View> {/* Keep the glow effect */}
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.doctorName}>{doctorName}</Text>
          <View style={styles.doctorInfo}>
            <Text style={styles.specialty}>{specialty}</Text>
            <Text style={styles.statusBadge}>{status}</Text>
          </View>
        </View>
        <Image source={{ uri: doctorImage }} style={styles.doctorImage} />
      </View>
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeItem}>
          <Icon name="calendar-alt" size={14} color="#16a34a" /> {/* Hardcoded icon color */}
          <Text style={styles.dateTimeText}>{date}</Text>
        </View>
        <View style={styles.dateTimeItem}>
          <Icon name="clock" size={14} color="#16a34a" /> {/* Hardcoded icon color */}
          <Text style={styles.dateTimeText}>{time}</Text>
        </View>
      </View>
      <View style={styles.cardButtons}>
        <TouchableOpacity style={styles.viewDetailButton} onPress={onPressDetails}>
          <Text style={styles.viewDetailButtonText}>View Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={joinCallButtonStyle} disabled={isJoinCallDisabled}>
          <Text style={joinCallButtonTextStyle}>Join Call</Text>
        </TouchableOpacity>
      </View>
      {timerText && <Text style={styles.timerText}>{timerText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  // Base styles for the "larger" card variant
  appointmentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    padding: 32,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20, // Keep margin between cards
  },
  glowGreenLarge: {
    position: 'absolute',
    top: -40,
    left: -40,
    width: 160,
    height: 160,
    backgroundColor: '#6ee7b7',
    opacity: 0.2,
    borderRadius: 9999,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    zIndex: 1,
  },
  doctorName: {
    color: '#1f2937',
    fontSize: 24,
    fontWeight: '600',
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  specialty: {
    color: '#4b5563',
    fontSize: 16,
    fontWeight: '500',
  },
  statusBadge: {
    backgroundColor: 'rgba(252, 211, 77, 0.7)',
    color: '#92400e',
    fontWeight: '600',
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  doctorImage: {
    width: 64,
    height: 64,
    borderRadius: 16,
    objectFit: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 24,
    position: 'relative',
    zIndex: 1,
  },
  dateTimeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateTimeText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
  cardButtons: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
    position: 'relative',
    zIndex: 1,
  },
  viewDetailButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#16a34a',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  viewDetailButtonText: {
    color: '#047857',
    fontSize: 16,
    fontWeight: '600',
  },
  // Active Join Call Button styles
  joinCallButtonActive: {
    flex: 1,
    backgroundColor: '#16a34a', // Default active color
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  joinCallButtonTextActive: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  // Disabled Join Call Button styles
  joinCallButtonDisabled: {
    flex: 1,
    backgroundColor: '#9ca3af', // Grey for disabled
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  joinCallButtonTextDisabled: {
    color: '#e5e7eb', // Lighter text for disabled
    fontSize: 16,
    fontWeight: '600',
  },
  timerText: {
    fontSize: 12,
    color: '#047857',
    marginTop: 16,
    textAlign: 'right',
    fontWeight: '600',
  },
});

export default AppointmentCard;