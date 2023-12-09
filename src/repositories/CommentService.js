import Repository from './Repository';

const resource = '/secured/comments';

const CommentService = {
  get(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/${id}/comments`)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  

  create(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/`, payload)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

};

export default CommentService;
