import IcSearch from '@assets/Icons/IcSearch';
import {Colors} from '@themes/Colors';
import {Fonts} from '@themes/Fonts';
import {GlobalStyles} from '@themes/Styles';
import {scaleFont, scaleSize} from '@utils/Normalize';
import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {InputProps, InputState} from 'src/Types/components';

class Input extends Component<InputProps, InputState> {
  private inputRef: React.RefObject<TextInput>;

  constructor(props: InputProps) {
    super(props);
    this.state = {
      borderColor: Colors['Gray-300'],
    };
    this.inputRef = React.createRef<TextInput>();
  }

  onFocus = () => {
    this.setState({borderColor: Colors['Primary-500']});
  };

  onBlur = () => {
    this.setState({borderColor: Colors['Gray-300']});
  };

  focus = () => {
    if (this.inputRef?.current) {
      this.inputRef.current.focus();
    }
  };

  render() {
    const {borderColor} = this.state;
    const {...restProps} = this.props;

    const inputWrapperStyles = [
      GlobalStyles.rowStyle,
      styles.inputWrapper,
      {
        borderColor,
      },
    ];

    return (
      <View style={inputWrapperStyles}>
        <IcSearch />
        <TextInput
          {...restProps}
          ref={this.inputRef}
          style={styles.input}
          placeholderTextColor={Colors['Typography-500']}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    height: scaleSize(48),
    backgroundColor: Colors.White,
    paddingHorizontal: scaleSize(12),
    borderWidth: scaleSize(1),
    borderRadius: scaleSize(12),
  },
  input: {
    flex: 1,
    fontFamily: Fonts.REGULAR,
    fontSize: scaleFont(14),
    color: Colors['Primary-900'],
    padding: scaleSize(12),
  },
});
