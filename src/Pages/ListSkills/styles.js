import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#f0f0f0',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: 10,
        zIndex: 9,
    },
    title: {
        color: '#000',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    card: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 50,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dice: {
        width: 32,
        height: 32,
        fontSize: 15,
        textAlign: "center",
        paddingTop: 5,
    }
});

export default Styles;