import store from '../store'

import { NORMAL, NORMAL_REDIRECT_URL, LOGIN_URL, REGISTER_URL } from './constant';

export const guard = (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn && to.meta.hasOwnProperty('role')) {
            if ('null' != to.meta.role) {
                let roles = 'null' != to.meta.role ? to.meta.role.split('|') : to.meta.role;

                if (roles.includes(store.getters.getRole)) {
                    next();
                    return;
                } else {
                    next('/page-not-found');
                    return;
                }
            }
        }
        next('/')
    }
    next();
};

const guestUrl = [ LOGIN_URL, REGISTER_URL, ];

export const guest = (to, from, next) => {
    if (store.getters.isLoggedIn && guestUrl.includes(to.name)) {
        if (store.getters.getRole) {
            next(NORMAL_REDIRECT_URL);
        }
    } else { next(); }
};