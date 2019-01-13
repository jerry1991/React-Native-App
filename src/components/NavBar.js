import React from "react"
import { Header } from "react-native-elements"
import { StyleSheet } from "react-native"
import PropTypes from "prop-types"
import { ui } from "../style/layout"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"

class NavBar extends React.Component {
  backBtn = () => {
    return (
      <TouchableOpacity style={styles.BackBtn} onPress={this.props.back}>
        <Icon size={30} name="angle-left" />
      </TouchableOpacity>
    )
  }
  render() {
    const outerStyle = Object.assign(
      styles.outerContainer,
      this.props.outerStyle
    )
    const innerStyle = Object.assign(
      styles.innerContainer,
      this.props.innerStyle
    )
    return (
      <Header
        leftComponent={
          this.props.showBackBtn ? this.backBtn() : this.props.leftComponent
        }
        centerComponent={this.props.centerComponent}
        rightComponent={this.props.rightComponent}
        outerContainerStyles={outerStyle}
        innerContainerStyles={innerStyle}
      />
    )
  }
}

NavBar.propTypes = {
  leftComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  outerStyle: PropTypes.object,
  innerStyle: PropTypes.object,
  showBackBtn: PropTypes.bool
}

const styles = StyleSheet.create({
  BackBtn: {
    marginLeft: 15
  },
  outerContainer: {
    padding: 0,
    height: ui(88),
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  innerContainer: {
    alignItems: "center"
  }
})

export default NavBar
