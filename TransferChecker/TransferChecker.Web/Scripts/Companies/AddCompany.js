$(function () {
    $("#company-success").hide();
});
function AddCompanyViewModel() {
    var self = this;
    self.companyName = ko.observable('');
    self.stations = GlobalStationsArray;
    self.numOfPositions = ko.observable();
    self.selectedStation = ko.observable('0');
    self.addCompany = function () {
        if (self.isValid()) {
            $.ajax({
                type: "POST",
                url: "/AddCompany",
                data: {
                    Name: self.companyName(), StationId: self.selectedStation(),
                    NumberOfPositions: self.numOfPositions()
                },
                success: function (company) {
                    if (company.Id != 0) {
                        $("#company-success").slideDown().delay(1000).slideUp();
                        self.companyName('');
                        self.numOfPositions('1');
                    } else {
                        alert("error occurred");
                        console.log(company);
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
        } else {
            alert("not valid");
        }
    };

    self.isValid = ko.computed(function () {
        var valid = false;
        if (self.companyName() != "" && self.selectedStation() != null) {
            valid = true;
        }
        return valid;
    }, this);
}

ko.applyBindings(new AddCompanyViewModel(), $("#company-form")[0]);