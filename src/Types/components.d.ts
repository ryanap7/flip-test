import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface InputProps extends TextInputProps {}

export interface InputState {
  borderColor: string;
}

export interface TextProps {
  style?: TextStyle | ViewStyle | undefined | any;
  type?: 'Bold' | 'SemiBold' | 'Medium' | 'Regular' | 'Light';
  size?:
    | '6xl'
    | '5xl'
    | '4xl'
    | '3xl'
    | '2xl'
    | 'xl'
    | 'lg'
    | 'base'
    | 'sm'
    | 'xs'
    | 'xxs';
  text: string | number | undefined | null;
  color?: string;
  numberOfLines?: number;
}

export interface ModalProps {
  children: ReactNode;
}

export interface ModalState {
  visible: boolean;
}
