module.exports = {
    data() {
        return {
            errors: [],
        };
    },
    methods: {
        hasError(index, key) {
            return (`${index}.${key}` in this.errors);
        },

        getError(index, key) {
            return this.errors[`${index}.${key}`][0]
                .replace('.', '')
                .replace(new RegExp("[0-9]","g"), ' ')
                .replace(/#|_/g, ' ');
        },

        setDefaultErrors() {
            this.errors = [];
        }
    },
};
