$(function () {
    $("#station-success").hide();
});
function AddStationViewModel() {
    var self = this;
    self.stationName = ko.observable('');
    self.stationNumber = ko.observable('');

    self.addStation = function () {
        if (self.stationName() != '' && self.stationNumber() != '') {
            $.ajax({
                type: "POST",
                url: "/AddStation",
                data: { Number: self.stationNumber(), Name: self.stationName() },
                success: function (data) {
                    if (data == 1) {
                        $("#station-success").slideDown().delay(1000).slideUp();
                        self.stationName('');
                        self.stationNumber('');
                    }
                }
            });
        } else {
            alert("Must fill out station number and name!");
        }
    };
}
ko.applyBindings(new AddStationViewModel(), $("#add-station")[0]);