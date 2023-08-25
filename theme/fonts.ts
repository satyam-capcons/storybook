/* eslint-disable prettier/prettier */
import { TextStyle } from 'react-native';

const size = {
    s: 12,
    default: 14,
    md: 16,
    lg: 20,
    xlg: 24,
    xxlg: 32,
};

const weight: { [key: string]: TextStyle['fontWeight'] } = {
    full: '900',
    thick: '700',
    semi: '600',
    bold: 'bold',
    normal: 'normal',
    thin: '400',
};

export default { size, weight };