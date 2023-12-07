import Repository from './Repository';

const resource = '/secured/blogs';

const BlogService = {
  get() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/`)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  find(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/${id}`)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  create(payload,id) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/create/category/${id}`, payload)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  update(id,catId, payload) {
    return new Promise((resolve, reject) => {
      Repository.put(`${resource}/${id}/category/${catId}`, payload)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  delete(id) {
    return new Promise((resolve, reject) => {
      Repository.delete(`${resource}/${id}`)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  
};

export default BlogService;
