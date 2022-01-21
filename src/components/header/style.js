import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#7d5aa3',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
    }
});

export default HeaderStyles;