import React from "react"
import { StyleSheet } from "react-native"
import Dialog, {
  ScaleAnimation,
  DialogTitle,
  DialogButton,
  DialogContent
} from "react-native-popup-dialog"
import PropTypes from "prop-types"

export default class extends React.Component {
  static propTypes = {
    type: PropTypes.string
  }
  alert() {
    return [
      <DialogButton
        text={this.props.confitmText || "确认"}
        onPress={this.props.confirmAction}
      />
    ]
  }
  confirm() {
    return [
      <DialogButton
        text={this.props.cancelText || "取消"}
        onPress={this.props.cancelAction}
      />,
      <DialogButton
        text={this.props.confitmText || "确认"}
        onPress={this.props.confirmAction}
      />
    ]
  }
  render() {
    const type = this.props.type === "confirm" ? this.confirm() : this.alert()
    return (
      <Dialog
        visible={this.props.visible}
        onTouchOutside={this.props.onTouchOutside}
        dialogStyle={styles.defaultStyle}
        dialogTitle={<DialogTitle title={this.props.title || "友情提示"} />}
        actions={type}
        dialogAnimation={
          new ScaleAnimation({
            toValue: 0.8,
            useNativeDriver: true
          })
        }
        animationDuration={400}
      >
        <DialogContent style={styles.containerStyle}>
          {this.props.children}
        </DialogContent>
      </Dialog>
    )
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    width: "80%"
  },
  containerStyle: {}
})
