import { StyleSheet } from 'react-native';
import Fonts from '../../DesignPatterns/fonts';
import Color from '../../DesignPatterns/colors';

const HeaderStyles = StyleSheet.create({
    container: {
        width: "115%",
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomWidth: 3,
        borderColor: "#ED7C03"
    },
    title: {
        color: Color.Fonts.Primary,
        fontSize: 30,
        textTransform: 'capitalize',
        fontFamily: Fonts.Primary.BOLD,
        marginHorizontal: "13%",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
      },
});

export default HeaderStyles;