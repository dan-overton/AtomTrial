requirejs(['vendor/knockout-3.4.0', 'personnelViewModel', 'vendor/domReady!'], function (ko, personnelViewModel) {
    ko.applyBindings(new personnelViewModel());
});
