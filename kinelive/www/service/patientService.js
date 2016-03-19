angular.module('service.patientService', [])

.factory('patientService', [function() {
	return {
		patientList : [
			{
				"id" : 1,
				"firstname" : "Mike",
				"lastname" : "Portnoy"
			},
			{
				"id" : 2,
				"firstname" : "Neal",
				"lastname" : "Morse"
			},
			{
				"id" : 3,
				"firstname" : "Roine",
				"lastname" : "Stolt"
			},
			{
				"id" : 4,
				"firstname" : "Pete",
				"lastname" : "Trewavas"
			}
		],

		getAll : function() {
			return this.patientList;
		},

		get : function(id) {
			for (patient in this.patientList) {
				if((this.patientList[patient]).id == id) {
					return (this.patientList[patient]);
				}
			}
			return null;
		},

		add : function(patient) {
			patientList.push(patient);
		}
	};
}]);