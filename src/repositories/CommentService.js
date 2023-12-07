import Repository from './Repository';

const resource = '/secured/comments';

const CommentService = {
  get(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`public/comments/${id}`)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  

  create(id,payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/create/blog/${id}`, payload)
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
