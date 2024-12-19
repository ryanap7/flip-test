import {Colors} from '@themes/Colors';
import {scaleSize} from '@utils/Normalize';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ModalRN from 'react-native-modal';
import {ModalProps, ModalState} from 'src/Types/components';

class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      visible: false,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({visible: true});
  }

  hide() {
    this.setState({visible: false});
  }

  render() {
    const {children} = this.props;

    return (
      <ModalRN
        useNativeDriver
        isVisible={this.state.visible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropColor={Colors.Black}
        backdropOpacity={0.6}
        onBackdropPress={this.hide}
        onBackButtonPress={this.hide}
        hideModalContentWhileAnimating>
        <View style={[styles.wrapper]}>{children}</View>
      </ModalRN>
    );
  }
}

export default Modal;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.White,
    padding: scaleSize(16),
    borderRadius: scaleSize(12),
  },
});
