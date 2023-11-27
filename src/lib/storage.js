const base_key = 'thirdeye_';

export const set = (key, value) => {
    localStorage.setItem(key, value);
};

export const get = key => {
    return localStorage.getItem(key);
};

export const remove = key => {
    return localStorage.removeItem(key);
};

export const setToken = token => {
    set(`${base_key}token`, token);
};

export const getToken = () => {
    return get(`${base_key}token`);
};

export const removeToken = () => {
    return remove(`${base_key}token`);
};

export const setUser = user => {
    set(`${base_key}user`, user);
};

export const getUser = () => {
    return JSON.parse(get(`${base_key}user`));
};

export const removeUser = () => {
    return remove(`${base_key}user`);
};

export const setAccess = role => {
    set(`${base_key}role`, role);
};

export const getAccess = () => {
    return get(`${base_key}role`);
};

export const removeAccess = () => {
    return remove(`${base_key}role`);
};


