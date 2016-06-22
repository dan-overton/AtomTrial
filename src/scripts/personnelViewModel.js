define(['vendor/knockout-3.4.0'], function(ko) {
  return function personnelViewModel() {
    var viewmodel = this;
    var people = [
      {id: 1, name: "Mr Smith", jobTitle: "Software Developer", bio: "Writes code", selected: ko.observable(true)},
      {id: 2, name: "Mr Jones", jobTitle: "Business Analyst", bio: "Handles the client", selected: ko.observable(false)},
      {id: 3, name: "Mrs Howard", jobTitle: "Scrum Master", bio: "Does the books", selected: ko.observable(false)}];

    viewmodel.people = ko.observableArray(people);
    viewmodel.detailsText = ko.observable(viewmodel.people()[0].bio);

    viewmodel.showText = function(selectedPerson)
    {
      var people = viewmodel.people();
      for(var i = 0; i < people.length; i++)
      {
        people[i].selected(people[i].id === selectedPerson.id);
      }
      viewmodel.detailsText(selectedPerson.bio);
    };
  };
});
