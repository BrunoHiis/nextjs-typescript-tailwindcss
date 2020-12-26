import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const getSubmissions = (organization: string) => {
  return axios
    .get(API_URL + "/v1/submission?organization=" + organization, {
      withCredentials: true,
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

const getSingleSubmission = (organization: string, id: string) => {
  return axios
    .get(API_URL + "/v1/submission?organization=" + organization, {
      withCredentials: true,
    })
    .then(
      (response: any) => {
        response.results.map((submission: any) => {
          if (submission.id === id) {
            // initialUpvoted = submission.upvoted
            //   ? "upvote"
            //   : submission.downvoted
            //   ? "downvote"
            //   : ""
            return submission
          }
        })
        // return response
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

const createSubmission = (
  title: string,
  content: string,
  category: string,
  organization: string
) => {
  return axios
    .post(
      API_URL + "/v1/submission",
      {
        title,
        content,
        category,
        organization,
      },
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

const removeSubmission = (id: string, organization: string) => {
  return axios
    .delete(API_URL + "/v1/submission", {
      data: {
        submissionId: id,
        organization,
      },
      withCredentials: true,
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

const updateSubmission = (
  id: string,
  status: string,
  organization: string,
  category?: string,
  commentsAllowed?: boolean
) => {
  return axios
    .post(
      API_URL + "/v1/submission/info",
      {
        submissionId: id,
        organization,
        status,
        category,
        commentsAllowed,
      },
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

const updateSubmissionCategory = (
  oldCategory: string,
  newCategory: string,
  organization: string
) => {
  return axios
    .patch(
      API_URL + "/v1/organization/category",
      {
        oldCategory,
        newCategory,
        organization,
      },
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

const getComments = (id: any) => {
  return axios
    .get(API_URL + "/v1/comment", {
      withCredentials: true,
      params: {
        submissionId: id,
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

const createComment = (content: string, submissionId: string, organization: string) => {
  return axios
    .post(
      API_URL + "/v1/comment",
      {
        content,
        submissionId,
        organization,
      },
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

const replyToComment = (id: string, content: string) => {
  return axios
    .post(
      API_URL + "/v1/comment/reply",
      {
        id,
        content,
      },
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

const deleteComment = (id: string) => {
  return axios
    .delete(API_URL + "/v1/comment", {
      data: {
        id,
      },
      withCredentials: true,
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

const deleteCommentReply = (parentId: any, id: string) => {
  return axios
    .delete(API_URL + "/v1/comment/reply", {
      data: {
        parentId,
        id,
      },
      withCredentials: true,
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

const updateComment = (id: any, content: string) => {
  return axios
    .patch(
      API_URL + "/v1/comment",
      {
        id,
        content,
      },
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

const updateCommentReply = (parentId: any, id: string, content: string) => {
  return axios
    .patch(
      API_URL + "/v1/comment/reply",
      {
        id,
        content,
        parentId,
      },
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

const addCategory = (category: string, organization: string) => {
  return axios
    .post(
      API_URL + "/v1/organization/category",
      {
        category,
        organization,
      },
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

const removeCategory = (category: string, organization: string) => {
  return axios
    .delete(API_URL + "/v1/organization/category", {
      data: {
        category,
        organization,
      },
      withCredentials: true,
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

const upvoteSubmission = (submissionId: string, organization: string) => {
  return axios
    .post(
      API_URL + "/v1/submission/upvote",
      {
        submissionId,
        organization,
      },
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

const downvoteSubmission = (submissionId: string, organization: string) => {
  return axios
    .post(
      API_URL + "/v1/submission/downvote",
      {
        submissionId,
        organization,
      },
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

const filterSubmissions = (
  popularity: string,
  status: Array<string>,
  category: Array<string>,
  organization: string,
  page?: number,
  limit?: number,
  q?: string
) => {
  return axios
    .get(API_URL + "/v1/submission", {
      withCredentials: true,
      params: {
        organization,
        sortBy:
          popularity === "Top"
            ? "upvotes:desc"
            : popularity === "Recent"
            ? "date:desc"
            : "upvotes:asc",
        status: status,
        category: category,
        page,
        limit,
        q,
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

export default {
  getSubmissions,
  getSingleSubmission,
  upvoteSubmission,
  removeSubmission,
  updateSubmission,
  updateSubmissionCategory,
  removeCategory,
  addCategory,
  filterSubmissions,
  downvoteSubmission,
  createSubmission,
  getComments,
  createComment,
  replyToComment,
  deleteComment,
  deleteCommentReply,
  updateCommentReply,
  updateComment,
}
