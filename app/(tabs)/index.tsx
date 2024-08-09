import { useEffect, useRef, useState } from 'react';
import { Button, Image, Platform, StyleSheet, TextInput } from 'react-native';
import { Audio } from 'expo-av';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [sound, setSound] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [volume, setVolume] = useState();
  async function playSound() {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,});
    const { sound } = await Audio.Sound.createAsync(require('./808.mp3'));
    setSound(sound);
    if (verifyVolume()) {
      sound.setVolumeAsync(Number.parseFloat(volume));
    }
    await sound.playAsync();
  }
  async function stopSound() {
    sound.unloadAsync();
  }
  function isAlarmTime() {
    const date = new Date();
    return (date.getHours() == hours
      && date.getMinutes() == minutes);
  }
  async function setAlarm3() {
    console.log("Hours=" + hours + ", Minutes="
      + minutes + ", verifyTime()=" + verifyTime());
    if (verifyTime()) {
      const date1 = new Date();
      date1.setHours(hours);
      date1.setMinutes(minutes);
      date1.setSeconds(0);
      const date2 = new Date();
      const dateDiff = date1 - date2;
      const dateDiff2 = 86400000 + dateDiff;
      console.log("date1=" + date1 + ", date2=" + date2 + ", date1 - date2=" + dateDiff);
      console.log("verifyVolume()=" + verifyVolume());
      dateDiff > 0 ? setAlarm4(dateDiff) : setAlarm4(dateDiff2);
    }
    function setAlarm4(dateDiff0) {
      setTimeout(() => playSound(), dateDiff0);
      const hour = 1000 * 3600;
      const minute = 1000 * 60;
      console.log("Alarm will ring in " + dateDiff0 / (dateDiff0 > hour ? hour
        : dateDiff0 > minute ? minute : 1000)
      + (dateDiff0 > hour ? " hours." : dateDiff0 > minute ? " minutes." : " seconds."));
    }
  }
  function verifyTime() {
    return hours >= 0 && hours <= 24 && minutes >= 0 && minutes <= 60
  }
  function verifyVolume() {
    const volumeNumber = Number.parseFloat(volume);
    return volumeNumber != NaN && volumeNumber >= 0 && volumeNumber <= 1;
  }

  return (
    <ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText></ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Alarm set to: { hours }:{ minutes }</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Hours:</ThemedText>
        <ThemedTextInput onChangeText={newText => setHours(newText)} style={styles.titleContainer} />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Minutes:</ThemedText>
        <ThemedTextInput onChangeText={newText => setMinutes(newText)} style={styles.titleContainer} />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Volume from 0.0 to 1.0:</ThemedText>
        <ThemedTextInput onChangeText={newText => setVolume(newText)} style={styles.titleContainer} />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Button title="Set Alarm" onPress={setAlarm3}/>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Button title="Stop Sound" onPress={stopSound}/>
      </ThemedView>
    </ThemedView>
  );
}



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
