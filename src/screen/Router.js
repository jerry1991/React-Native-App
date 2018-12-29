import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import Home from "./Home/Home";
import Live from "./Live/Live";
import Bonus from "./Bonus/Bonus";
import ShotVideo from "./ShotVideo/ShotVideo";
import FamousHall from "./FamousHall/FamousHall";
import Login from "./Login/Login";

import HomeIconUnSelected from "../assets/tab/unseleted/home.png";
import HomeIconSelected from "../assets/tab/seleted/home.png";
import LiveIconUnSelected from "../assets/tab/unseleted/live.png";
import LiveIconSelected from "../assets/tab/seleted/live.png";
import WinIconUnSelected from "../assets/tab/unseleted/win.png";
import WinIconSelected from "../assets/tab/seleted/win.png";
import VideoIconUnSelected from "../assets/tab/unseleted/video.png";
import VideoIconSelected from "../assets/tab/seleted/video.png";
import FamousIconUnSelected from "../assets/tab/unseleted/famous.png";
import FamousIconSelected from "../assets/tab/seleted/famous.png";
import { ui } from "../style/layout";

const styles = StyleSheet.create({
  icon: {
    width: ui(50),
    height: ui(50)
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.icon}
              source={focused ? HomeIconSelected : HomeIconUnSelected}
            />
          );
        }
      }
    },
    Live: {
      screen: Live,
      navigationOptions: {
        tabBarLabel: "直播",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.icon}
              source={focused ? LiveIconSelected : LiveIconUnSelected}
            />
          );
        }
      }
    },
    Bonus: {
      screen: Bonus,
      navigationOptions: {
        tabBarLabel: "大奖赛",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.icon}
              source={focused ? WinIconSelected : WinIconUnSelected}
            />
          );
        }
      }
    },
    ShotVideo: {
      screen: ShotVideo,
      navigationOptions: {
        tabBarLabel: "短视频",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.icon}
              source={focused ? VideoIconSelected : VideoIconUnSelected}
            />
          );
        }
      }
    },
    FamousHall: {
      screen: FamousHall,
      navigationOptions: {
        tabBarLabel: "名人堂",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.icon}
              source={focused ? FamousIconSelected : FamousIconUnSelected}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#dc5957",
      inactiveTintColor: "#a8a8a8"
    }
  }
);

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: TabNavigator
      },
      Login: Login
    },
    {
      initialRouteName: "Home",
      headerMode: "none"
    }
  )
);

export default AppContainer;
