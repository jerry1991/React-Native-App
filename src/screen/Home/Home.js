import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import { observer, inject } from "mobx-react";
import NavBar from "../../components/NavBar";
import { SafeAreaView } from "react-navigation";
import { ui, commonStyle } from "../../style/layout";
import { SearchBar } from "react-native-elements";

import IconUser from "../../assets/icon/APP_icon-14.png";

@inject("store")
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActiveIndex: 0,
      anchorList: [
        {
          anchorAvtar: "",
          anchorName: "大家看好"
        },
        {
          anchorAvtar: "",
          anchorName: "littefor"
        },
        {
          anchorAvtar: "",
          anchorName: "是个傻逼"
        },
        {
          anchorAvtar: "",
          anchorName: "嘿嘿嘿嘿"
        },
        {
          anchorAvtar: "",
          anchorName: "对你无语了"
        },
        {
          anchorAvtar: "",
          anchorName: "对你无语了"
        },
        {
          anchorAvtar: "",
          anchorName: "对你无语了"
        },
        {
          anchorAvtar: "",
          anchorName: "真心对你无语了"
        }
      ],
      shotVideoList: [
        {
          title: "马尼拉赌神",
          times: "5:45"
        },
        {
          title: "马尼拉赌神",
          times: "5:45"
        },
        {
          title: "马尼拉赌神",
          times: "5:45"
        },
        {
          title: "马尼拉赌神",
          times: "5:45"
        },
        {
          title: "马尼拉赌神",
          times: "5:45"
        },
        {
          title: "马尼拉赌神",
          times: "5:45"
        }
      ]
    };
  }
  getStyle = index => {
    return this.state.currentActiveIndex === index
      ? styles.active
      : styles.category;
  };

  setActiveIndex = index => {
    this.setState({
      currentActiveIndex: index
    });
  };
  _renderItem = elem => {
    return (
      <View style={styles.anchorList}>
        <View style={styles.anchorAvtar} />
        <View style={styles.anchorNameWrap}>
          <Text style={styles.anchorName} numberOfLines={1}>
            {elem.anchorName}
          </Text>
        </View>
      </View>
    );
  };

  NavBarCenterComponent = () => {
    return (
      <View style={styles.NavBarCenter}>
        <TouchableOpacity onPress={() => this.setActiveIndex(0)}>
          <Text style={this.getStyle(0)}>分类</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setActiveIndex(1)}>
          <Text style={this.getStyle(1)}>推介</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setActiveIndex(2)}>
          <Text style={this.getStyle(2)}>关注</Text>
        </TouchableOpacity>
      </View>
    );
  };

  NavBarLeftComponent = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
        <Image style={styles.NavBarIconUser} source={IconUser} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{
          top: commonStyle.safeAreaTop,
          bottom: commonStyle.safeAreaBottomNever
        }}
      >
        <NavBar
          leftComponent={this.NavBarLeftComponent()}
          centerComponent={this.NavBarCenterComponent()}
          innerStyle={styles.NavBarHomeStyle}
        />
        <ScrollView contentContainerStyle={styles.boxWrapper}>
          <View style={styles.searchWrap}>
            <SearchBar
              inputStyle={styles.searchArea}
              containerStyle={styles.searchAreaContainer}
              round
              placeholder="主播大奖赛"
            />
          </View>
          <View style={styles.anchorListWrap}>
            <FlatList
              horizontal="true"
              data={this.state.anchorList}
              renderItem={({ item }) => this._renderItem(item)}
            />
          </View>
          <View style={styles.livingNow}>
            <Text style={styles.commonTitle}>正在直播</Text>
            <View>
              <View style={styles.livingImageWrap}>
                <View style={styles.hoverText}>
                  <Text style={styles.hoverTextLeft}>马尼拉赌神</Text>
                  <View style={styles.hoverTextRight}>
                    <Text style={styles.textPeoples}>7652</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.livingDescription}>百家乐火热开赛</Text>
              <Text style={styles.livingSubDescription}>百家乐</Text>
            </View>
            <View>
              <View style={styles.livingImageWrap}>
                <View style={styles.hoverText}>
                  <Text style={styles.hoverTextLeft}>马尼拉赌神</Text>
                  <View style={styles.hoverTextRight}>
                    <Text style={styles.textPeoples}>7652</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.livingDescription}>百家乐火热开赛</Text>
              <Text style={styles.livingSubDescription}>百家乐</Text>
            </View>
          </View>
          <View style={styles.livingNow}>
            <Text style={styles.commonTitle}>短视频</Text>
            <View style={styles.shotVideoList}>
              {this.state.shotVideoList.map(item => {
                return (
                  <View style={styles.showVideoItemWrap}>
                    <View style={styles.showVideoItem}>
                      <View style={styles.hoverText}>
                        <Text style={styles.hoverTextLeft}>{item.title}</Text>
                        <View style={styles.hoverTextRight}>
                          <Text style={styles.textPeoples}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                    <Text style={styles.showVideoTilte}>百家乐火热开赛</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    height: commonStyle.height - 45
  },
  NavBarCenter: {
    flexDirection: "row"
  },
  NavBarIconUser: {
    width: ui(56),
    height: ui(56),
    marginLeft: 10
  },
  category: {
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    color: commonStyle.fontColor
  },
  active: {
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    color: commonStyle.fontColorBlack,
    fontWeight: "bold"
  },
  iconLeft: {
    width: ui(45),
    height: ui(45)
  },
  searchArea: {
    backgroundColor: "#f1f1f1",
    fontSize: ui(24),
    padding: 0
  },
  searchAreaContainer: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0
  },
  boxWrapper: {
    // flex: 1
  },
  searchWrap: {
    marginHorizontal: ui(20),
    marginVertical: ui(10)
  },
  anchorListWrap: {
    marginTop: ui(10),
    marginBottom: ui(30),
    marginLeft: ui(30)
  },
  anchorName: {
    fontSize: ui(24),
    textAlign: "center",
    paddingVertical: ui(10),
    width: ui(112)
  },
  anchorAvtar: {
    width: ui(112),
    height: ui(112),
    borderRadius: ui(56),
    backgroundColor: commonStyle.defaultBorderColor
  },
  anchorList: {
    marginRight: ui(30)
  },
  anchorNameWrap: {
    justifyContent: "center"
  },
  livingNow: {
    marginHorizontal: ui(30),
    marginBottom: ui(30)
  },
  commonTitle: {
    color: commonStyle.fontBlack,
    fontSize: ui(commonStyle.uiTextFontTitle),
    fontWeight: "bold"
  },
  livingImageWrap: {
    marginTop: ui(20),
    height: ui(360),
    backgroundColor: commonStyle.defaultBorderColor
  },
  hoverText: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    height: ui(60),
    backgroundColor: "rgba(0,0,0,0.2)",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  hoverTextLeft: {
    color: "#fff",
    lineHeight: ui(60),
    paddingLeft: 5
  },
  textPeoples: {
    color: "#fff",
    lineHeight: ui(60),
    paddingHorizontal: 5
  },
  livingDescription: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: ui(28),
    color: commonStyle.fontBlack1
  },
  livingSubDescription: {
    fontSize: ui(24),
    color: commonStyle.fontGray
  },
  shotVideoList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: ui(20)
  },
  showVideoItemWrap: {
    width: "48%"
  },
  showVideoItem: {
    height: ui(240),
    backgroundColor: commonStyle.defaultBorderColor
  },
  showVideoTilte: {
    fontSize: ui(28),
    color: commonStyle.fontBlack1,
    marginTop: 5,
    marginBottom: 12
  }
});

export default Home;
