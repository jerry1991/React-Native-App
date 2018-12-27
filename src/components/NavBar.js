import React from "react";
import { View, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import IconLeft from "../assets/icon/APP_icon-14.png";
import { commonStyle } from "../style/layout";

class NavBar extends React.Component {
  static propTypes = {};
  render() {
    return (
      <View style={styles.navBar}>
        <View style={styles.left}>
          <Image source={IconLeft} style={{ width: 25, height: 25 }} />
        </View>
        <View style={styles.center}>{this.props.children}</View>
        <View style={styles.right}>{this.props.right}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    height: 45,
    borderBottomWidth: 1,
    lineHeight: 45,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#f2f2f2"
  },
  left: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    height: 45,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    width: 45,
    height: 45
  }
});

export default NavBar;
