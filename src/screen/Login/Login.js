import React from "react"
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native"
import { SafeAreaView } from "react-navigation"
import NavBar from "../../components/NavBar"
import { commonStyle, ui } from "../../style/layout"
import Icon from "react-native-vector-icons/dist/FontAwesome"
import Dialog from "../../components/Dialog"

class Login extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      showPassword: false,
      password: "",
      phoneNumber: "",
      isModalVisible: false,
      errorMessage: "",
      logining: true,
      validateErrorMessage: "",
      showDialog: false
    }
  }

  toggleShowPassword = () => {
    const currentState = this.state.showPassword === true ? false : true
    this.setState({
      showPassword: currentState
    })
  }

  doValidate = () => {
    let errorMessage = ""
    if (!/^1[3|4|5|7|8]\d{9}/.test(this.state.phoneNumber)) {
      errorMessage = "手机号码格式错误"
    }

    if (
      !errorMessage &&
      (this.state.password.length < 6 || this.state.password.length > 18)
    ) {
      errorMessage = "密码长度在6-18个字符之间"
    }

    if (errorMessage) {
      this.setState({
        showDialog: true,
        validateErrorMessage: errorMessage
      })

      return false
    }

    return true
  }

  doLogin() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          code: 1,
          data: {
            userName: this.state.userName,
            password: this.state.password
          },
          message: "登录成功"
        })
      }, 2000)
    })
  }

  closeDialog = () => {
    this.setState({
      showDialog: false,
      validateErrorMessage: ""
    })
  }

  doSubmit = async () => {
    if (!this.doValidate()) return

    await this.setState({
      logining: false
    })

    const { code } = await this.doLogin()

    if (code === 1) {
      await this.setState({
        logining: true
      })
      this.props.navigation.navigate("Home")
    } else {
      // show error massge
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Dialog
          visible={this.state.showDialog}
          confirmAction={this.closeDialog}
        >
          <Text style={styles.dialogText}>
            {this.state.validateErrorMessage}
          </Text>
        </Dialog>

        <NavBar
          showBackBtn={true}
          rightComponent={<Text style={styles.register}>注册</Text>}
        />
        <ScrollView>
          <View style={styles.boxWrapper}>
            <View>
              <Text style={styles.title}>你好,</Text>
              <Text style={styles.title}>欢迎来到LiveShow</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="请输入手机号码"
                  style={styles.loginInput}
                  onChangeText={phoneNumber => {
                    this.setState({
                      phoneNumber
                    })
                  }}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  secureTextEntry={this.state.showPassword ? false : true}
                  placeholder="请输入密码"
                  style={styles.loginInput}
                  onChangeText={password =>
                    this.setState({
                      password
                    })
                  }
                />
                <TouchableOpacity
                  style={styles.eyes}
                  onPress={this.toggleShowPassword}
                >
                  <Icon
                    name={this.state.showPassword ? "eye" : "eye-slash"}
                    size={22}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.forgetPassword}>
                <Text style={styles.forgetPasswordText}>忘记密码?</Text>
              </View>
              <View style={styles.submitBtn}>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={this.doSubmit}
                >
                  {this.state.logining ? (
                    <Text style={styles.submitBtnText}>登录</Text>
                  ) : (
                    <ActivityIndicator size="small" color="#fff" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  boxWrapper: {
    marginHorizontal: 20,
    marginVertical: 30
  },
  title: {
    color: commonStyle.fontBlack,
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 30
  },
  form: {
    marginTop: 20
  },
  inputWrapper: {
    borderBottomWidth: ui(1.2),
    borderBottomColor: commonStyle.colorGray
  },
  register: {
    marginRight: 15,
    fontSize: 16
  },
  forgetPassword: {
    alignItems: "flex-end"
  },
  forgetPasswordText: {
    paddingVertical: 10,
    color: commonStyle.colorBlue
  },
  submitBtn: {
    marginTop: 20
  },
  submitButton: {
    height: ui(88),
    borderRadius: ui(8),
    backgroundColor: commonStyle.colorGray,
    alignItems: "center",
    justifyContent: "center"
  },
  submitBtnText: {
    fontSize: ui(28)
  },
  eyes: {
    position: "absolute",
    right: 0,
    top: 12,
    width: 40,
    alignItems: "flex-end"
  },
  loginInput: {
    height: ui(88)
  },
  dialogText: {
    paddingTop: ui(30)
  }
})

export default Login
