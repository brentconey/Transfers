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
                success: function (station) {
                    console.log(station);
                    if (station.Id != 0) {
                        $("#station-success").slideDown().delay(1000).slideUp();
                        self.stationName('');
                        self.stationNumber('');
                        GlobalStationsArray.push(new Station(station));
                    } else {
                        alert("No station was added.");
                    }
                },
                error: function (data) {
                    alert("An Error Occured");
                    console.log(data);
                }
            });
        } else {
            alert("Must fill out station number and name!");
        }
    };
}
ko.applyBindings(new AddStationViewModel(), $("#add-station")[0]);