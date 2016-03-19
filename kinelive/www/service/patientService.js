angular.module('service.patientService', [])

.factory('patientService', [function() {
	return {
		patientList : [
			{
				"id" : 1,
				"firstname" : "Mike",
				"lastname" : "Portnoy",
				"pathology" : "Arthrose",
				"goal" : "pouvoir à nouveau jouer de la batterie."
			},
			{
				"id" : 2,
				"firstname" : "Neal",
				"lastname" : "Morse",
				"pathology" : "Lombalgie",
				"goal" : "mettre à nouveau le feu sur scène."
			},
			{
				"id" : 3,
				"firstname" : "Roine",
				"lastname" : "Stolt",
				"pathology" : "Rééducation ligaments croisés",
				"goal" : "Faire des bonds sur scène"
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
			this.patientList.push(patient);
		}
	};
}]);
