import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Countdown } from '../components/CountDown'
import RoundedButton from '../components/RoundedButton'

const Timer = ({ focusSubject, onTimerEnd, clearSubject }: {
    focusSubject: string | null, onTimerEnd: any, clearSubject: any
}) => {
    const [isStarted, setIsStarted] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <Countdown minutes={5} isPaused={!isStarted} onProgress={() => { }} onEnd={() => { }} />
            </View>
            <View style={styles.buttonWrapper}>
                {isStarted ? (<RoundedButton title="pause" onPress={() => setIsStarted(false)} />) :
                    (<RoundedButton title="start" onPress={() => setIsStarted(true)} />)}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countDown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Timer