import React from "react";
import { Header } from "react-native-elements";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ui } from "../style/layout";

class NavBar extends React.Component {
  render() {
    const outerStyle = Object.assign(
      styles.outerContainer,
      this.props.outerStyle
    );
    const innerStyle = Object.assign(
      styles.innerContainer,
      this.props.innerStyle
    );
    return (
      <Header
        leftComponent={this.props.leftComponent}
        centerComponent={this.props.centerComponent}
        rightComponent={this.props.rightComponent}
        outerContainerStyles={outerStyle}
        innerContainerStyles={innerStyle}
      />
    );
  }
}

NavBar.propTypes = {
  leftComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  outerStyle: PropTypes.object,
  innerStyle: PropTypes.object
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 0,
    height: ui(88),
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    alignItems: "center"
  }
});

export default NavBar;
