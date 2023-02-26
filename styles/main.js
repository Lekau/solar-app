import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100,
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 80,
    },
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        marginTop: '80%',
        flex: 1
    }, 
    progressCircle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        marginTop: '50%',
    }
});