import axios from "axios"
import ErrMessage from "./errorMessage"

const instance = axios.create({
  baseURL: "/",
  timeout: 10000,
  validateStatus: function(status) {
    return status >= 200 && status < 300
  }
})

instance.interceptors.request.use(
  config => {
    if (config.method === "post") {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    if (typeof response === "string") {
      response = JSON.parse(response)
    }
    if (response.code < 1) {
      //show error message
    }
    return response
  },
  error => {
    var errorMessage = ""
    if (error && error.response) {
      switch (error.response.status) {
        case "500":
        case "501":
        case "502":
          errorMessage = ErrMessage.errorCode["500"]
          break
        case "404":
          errorMessage = ErrMessage.errorCode["404"]
          break
        default:
          errorMessage = ErrMessage.errorCode["10001"]
      }
    } else {
      errorMessage = ErrMessage.errorCode["10001"]
    }

    if (errorMessage) {
      // dialog
    }

    return Promise.reject(error)
  }
)

export default {
  static get(url, params = {}, options = {}) {
    return instance({
      method: "get",
      url: url,
      params: params,
      headers: options.headers
    })
  },
  static post(url, params = {}, options = {}) {
    return instance({
      method: "post",
      url: url,
      data: params,
      headers: options.headers
    })
  }
}
