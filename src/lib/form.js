window.GPForm = function (data) {
    var form = this;

    $.extend(this, data);

    this.errors = new GPFormErrors();
    this.busy = false;
    this.successful = false;

    this.startProcessing = function () {
        form.errors.forget();
        form.busy = true;
        form.successful = false;
    };

    this.finishProcessing = function () {
        form.busy = false;
        form.successful = true;
    };

    this.resetStatus = function () {
        form.errors.forget();
        form.busy = false;
        form.successful = false;
    };

    this.setErrors = function (errors) {
        form.busy = false;
        form.errors.set(errors);
    };
};
