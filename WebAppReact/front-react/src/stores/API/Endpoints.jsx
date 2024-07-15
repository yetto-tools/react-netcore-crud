export const url = "http://localhost:5193/";
export const url_api = "http://localhost:5193/api";

export const API = {
  category: {
    url: `${url_api}/Category`,
    method: "GET",
    categories: {
      url: `${url_api}/Category/categories`,
      method: "GET",
    },
    search: {
      url: `${url_api}/Category/search`,
      method: "POST",
    },
    save: {
      url: `${url_api}/Category/save`,
      method: "PUT",
    },
  },

  product: {
    url: `${url_api}/Product`,
    method: "GET",
    products: {
      url: `${url_api}/Product/products`,
      method: "GET",
    },
    search: {
      url: `${url_api}/Product/search`,
      method: "POST",
    },
    save: {
      url: `${url_api}/Product/save`,
      method: "PUT",
    },
  },

  sale: {
    url: `${url_api}/Sale`,
    method: "GET",
    sales: {
      url: `${url_api}/Sale/sales`,
      method: "GET",
    },
    search: {
      url: `${url_api}/Sale/search`,
      method: "POST",
    },
    save: {
      url: `${url_api}/Sale/save`,
      method: "PUT",
    },
  },

  customer: {
    url: `${url_api}/Customer`,
    method: "GET",
    customers: {
      url: `${url_api}/Customer/customers`,
      method: "GET",
    },
    search: {
      url: `${url_api}/Customer/search`,
      method: "POST",
    },
    save: {
      url: `${url_api}/Customer/save`,
      method: "PUT",
    },
  },

  user: {
    url: `${url_api}/User`,
    method: "GET",
    users: {
      url: `${url_api}/User/users`,
      method: "GET",
    },
    search: {
      url: `${url_api}/User/search`,
      method: "POST",
    },
    save: {
      url: `${url_api}/User/save`,
      method: "PUT",
    },
  },

  register: {
    url: `${url_api}/User/save`,
    method: "PUT",
  },
  login: {
    url: `${url_api}/Auth/login`,
    method: "POST",
  },
};
