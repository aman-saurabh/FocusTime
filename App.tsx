/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
//import type { PropsWithChildren } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Focus from './src/features/Focus';
import Timer from './src/features/Timer';
import { colors } from './src/utils/colors'

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   return (
//     <View style={styles.sectionContainer}>
//       <Text>
//         {title}
//       </Text>
//       <Text>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const [currentSubject, setCurrentSubject] = useState('Aman');
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        // <View>
        //   <Text style={{ color: colors.white }}>I am going to render the timer for {currentSubject}.</Text>
        // </View>
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => { }}
          clearSubject={() => { }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.darkBlue
  }
});

export default App;
