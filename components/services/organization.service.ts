import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const getOrganization = () => {
  return axios
    .get(API_URL + "/v1/organization/admin/orgs", {
      withCredentials: true,
      params: {
        limit: 100,
      },
    })

    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const startCheckout = (
  plan: string,
  duration: string,
  organization: string
) => {
  return axios.get(
    API_URL +
      "/v1/webhook?plan=" +
      plan +
      "&duration=" +
      duration +
      "&organization=" +
      organization,
    {
      withCredentials: true,
    }
  );
};

const checkOrganization = (organization: string) => {
  return axios
    .get(API_URL + "/v1/organization?organization=" + organization)
    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const getAdmins = (organization: string) => {
  return axios
    .get(API_URL + "/v1/organization/admin", {
      withCredentials: true,
      params: {
        organization,
      },
    })
    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const removeOrgMember = (organization: string, adminToRemove: string) => {
  return axios
    .delete(API_URL + "/v1/organization/admin", {
      data: {
        organization,
        adminToRemove,
      },
      withCredentials: true,
    })
    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const deleteOrganization = (organization: string) => {
  return axios
    .delete(API_URL + "/v1/organization", {
      data: {
        organization,
      },
      withCredentials: true,
    })
    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const updateOrganization = (
  organization: string,
  newDisplayName: string,
  newBrandColor: string
) => {
  return axios
    .patch(
      API_URL + "/v1/organization",
      {
        organization,
        newDisplayName,
        newBrandColor,
      },
      {
        withCredentials: true,
      }
    )
    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const changeImage = (formData: any, organization: string) => {
  return axios
    .post(
      API_URL + "/v1/organization/image?organization=" + organization,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const createOrganization = (
  subdomain: string,
  language: string,
  displayName: string
) => {
  return axios
    .post(
      API_URL + "/v1/organization",
      {
        name: subdomain,
        language,
        displayName,
      },
      {
        withCredentials: true,
      }
    )

    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const addAdmin = (subdomain: string, email: string) => {
  return axios
    .post(
      API_URL + "/v1/organization/admin",
      {
        email,
        organization: subdomain,
      },
      {
        withCredentials: true,
      }
    )

    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

const cancelSubscription = (organization: string) => {
  return axios
    .post(API_URL + "/v1/webhook/cancelSubscription", {
      organization
    },{
      withCredentials: true,
    })
    .then(
      (response) => {
        return response;
      },
      (err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          return err.response.status;
        } else if (err.request) {
          // client never received a response, or request never left
          alert("Please check your internet connection.");
        } else {
          alert("Unknown error, try again.");
          // anything else
        }
      }
    );
};

export default {
  getOrganization,
  checkOrganization,
  createOrganization,
  startCheckout,
  getAdmins,
  updateOrganization,
  removeOrgMember,
  addAdmin,
  changeImage,
  deleteOrganization,
  cancelSubscription,
};
