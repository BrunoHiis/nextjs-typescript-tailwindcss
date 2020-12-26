import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const changeImage = (formData: any) => {
  return axios
    .post(API_URL + "/v1/user/profile", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(
      (response) => {
        return response
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

const getUser = (cookie?: any) => {
  if (cookie) {
    return axios
      .get(API_URL + "/v1/user", {
        headers: {
          Cookie: cookie,
        },
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err
        }
      )
  } else {
    return axios
      .get(API_URL + "/v1/user", {
        withCredentials: true,
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err
        }
      )
  }
}

const updateUserData = (name: string) => {
  return axios
    .patch(
      API_URL + "/v1/user",
      { name },
      {
        withCredentials: true,
      }
    )
    .then(
      (response) => {
        return response
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
  changeImage,
  getUser,
  updateUserData,
}
