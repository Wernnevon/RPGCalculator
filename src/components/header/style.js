import { StyleSheet } from 'react-native';
import Fonts from '../../DesignPatterns/fonts';
import Color from '../../DesignPatterns/colors';

const HeaderStyles = StyleSheet.create({
    container: {
        width: "115%",
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomWidth: 3,
        borderColor: "#ED7C03",
        position: 'relative',
    },
    title: {
        color: Color.Fonts.Primary,
        fontSize: 30,
        textTransform: 'capitalize',
        fontFamily: Fonts.Primary.BOLD,
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
    alignLeft: {
        position: 'absolute',
        left: 65,
    },
    alignRight: {
        position: 'absolute',
        right: 65,
    }
});

export default HeaderStyles;