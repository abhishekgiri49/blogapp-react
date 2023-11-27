module.exports = {
    methods: {
        alert(options) {
            swal.fire(options)
        },

        success({ title = "Success!", text = "That's all done!", timer = 1000, showConfirmationButton = false } = {}) {
            this.alert({
                title: title,
                text: text,
                timer: timer,
                showConfirmButton: showConfirmationButton,
                type: 'success'
            });
        },

        error({ title = "Error!", text = "Oops...Something went wrong" } = {}) {
            this.alert({
                title: title,
                text: text,
                type: 'error'
            });
        },

        confirm(callback, options, title, text) {
            options = Object.assign({
                title: title || "Are you sure?",
                text: text|| "Are you sure you want to do that?",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                // closeOnConfirm: false
            }, options);

            this.$swal.fire(options).then(callback);
        }
    },
};
