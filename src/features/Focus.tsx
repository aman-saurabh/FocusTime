import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { TextInput } from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState<string | null>(null);
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Focus Featue</Text> */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    label="What would you like to focus on?"
                    onChangeText={text => setSubject(text)}
                />
                <View style={styles.button}>
                    <RoundedButton style={styles.button} title="+" size={50} onPress={() => addSubject(subject)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        flex: 0.8,
        marginRight: spacing.sm
    },
    button: {
        justifyContent: 'center'
    },
    inputContainer: {
        padding: spacing.lg,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    text: {
        color: colors.white
    }
})

export default Focus