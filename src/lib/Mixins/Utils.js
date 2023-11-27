module.exports = {
    methods: {
        reload() {
            var location = this.$route.fullPath;

            this.$router.replace('/');

            this.$nextTick(() => this.$router.replace(location));
        }
    }
};
