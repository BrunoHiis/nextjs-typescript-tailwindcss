import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const register = (
  name: string,
  email: string,
  password: string,
  recaptchaToken: string
) => {
  return axios
    .post(
      API_URL + "/v1/auth/register",
      {
        name,
        email,
        password,
        recaptchaToken,
      },
      { withCredentials: true }
    )
    .then(
      (response) => {
        return response.status
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.")
        } else {
          alert("Unknown error, try again.")
          // anything else
        }
      }
    )
}

const isAuthenticated = () => {
  return axios.get(API_URL + "/v1/auth/isAuthenticated", { withCredentials: true }).then(
    (response: any) => {
      return response.data
    },
    (err) => {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        return err.response.status
      } else if (err.request) {
        // client never received a response, or request never left
        alert("Please check your internet connection.")
      } else {
        alert("Unknown error, try again.")
        // anything else
      }
    }
  )
}

const login = (email: string, password: string, recaptchaToken: any) => {
  return axios
    .post(
      API_URL + "/v1/auth/login",
      {
        email,
        password,
        recaptchaToken,
      },
      { withCredentials: true }
    )
    .then(
      (response: any) => {
        return response.status
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.")
        } else {
          alert("Unknown error, try again.")
          // anything else
        }
      }
    )
}

const logout = () => {
  return axios.post(API_URL + "/v1/auth/logout", { withCredentials: true }).then(
    (response: any) => {
      return response.data
    },
    (err) => {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        return err.response.status
      } else if (err.request) {
        // client never received a response, or request never left
        alert("Please check your internet connection.")
      } else {
        alert("Unknown error, try again.")
        // anything else
      }
    }
  )
}

const forgotPassword = (email: string) => {
  return axios
    .post(
      API_URL + "/v1/auth/forgot-password",
      {
        email,
      },
      { withCredentials: true }
    )
    .then(
      (response: any) => {
        return response.data
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.")
        } else {
          alert("Unknown error, try again.")
          // anything else
        }
      }
    )
}

const resetPassword = (password: string, token: string) => {
  return axios
    .post(
      API_URL + "/v1/auth/reset-password",
      {
        password,
        token,
      },
      { withCredentials: true }
    )
    .then(
      (response: any) => {
        return response.data
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.")
        } else {
          alert("Unknown error, try again.")
          // anything else
        }
      }
    )
}

export default {
  register,
  login,
  logout,
  isAuthenticated,
  forgotPassword,
  resetPassword,
}
