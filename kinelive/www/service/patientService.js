angular.module('service.patientService', []).factory('patientService', [function() {
	return {
		patientList : [
			{
				"id" : 1,
				"firstname" : "Mike",
				"lastname" : "Portnoy",
				"pathology" : "Arthrose",
				"goal" : "pouvoir à nouveau jouer de la batterie.",
				"email" : "mikep@yahoo.fr",
				"photo" : "http://bootdey.com/img/Content/user_1.jpg"
			},
			{
				"id" : 2,
				"firstname" : "Neal",
				"lastname" : "Morse",
				"pathology" : "Lombalgie",
				"goal" : "mettre à nouveau le feu sur scène.",
				"email": "morse.neal@gmail.om",
				"photo" : "http://bootdey.com/img/Content/user_2.jpg"
			},
			{
				"id" : 3,
				"firstname" : "Roine",
				"lastname" : "Stolt",
				"pathology" : "Rééducation ligaments croisés",
				"goal" : "Faire des bonds sur scène",
				"email": "roine.stolt@gmail.com",
				"photo" : "http://bootdey.com/img/Content/user_3.jpg"
			},
			{
				"id" : 4,
				"firstname" : "Pete",
				"lastname" : "Trewavas",
				"email": "pete@trewavas.com",
				"photo" : "http://bootdey.com/img/Content/user_1.jpg"
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
