$(function () {
    $("#battalion-success").hide();
});
function AddBattalionViewModel() {
    var self = this;
    self.battalionName = ko.observable('');

    self.addBattalion = function () {
        if (self.battalionName() != '') {
            $.ajax({
                type: "POST",
                url: "/AddBattalion",
                data: { Name: self.battalionName() } 
            }).done(function(battalion){
                if (battalion.Id != 0) {
                    $("#battalion-success").fadeIn().delay(1000).fadeOut();
                    self.battalionName('');
                }
            });
        } else {
            alert("Must enter a name");
        }
    }
}

ko.applyBindings(new AddBattalionViewModel(), $("#add-battalion")[0]);