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
				"photo" : "http://bootdey.com/img/Content/user_1.jpg",
				"gender" : "M",
				"phone" : "0600000000",
				"adress" : "California",
				"context" : "Joueur de batterie amateur.",
				"anamnese" : "",
				"birthdate" : "1967-04-20",
				"criteriaList" : [
					{
						"name" : "douleur",
						"values" : [9, 8, 7, 7, 5, 4, 2]
					}
				],
				"seanceList" : [
					{
						"numero" : 1,
						"date" : "2016-02-12",
						"type" : "bilan"
					},
					{
						"numero" : 2,
						"date" : "2016-02-19",
						"type" : "suivi"
					},
					{
						"numero" : 3,
						"date" : "2016-02-26",
						"type" : "suivi"
					},
					{
						"numero" : 4,
						"date" : "2016-03-03",
						"type" : "bilan"
					}
				]

			},
			{
				"id" : 2,
				"firstname" : "Neal",
				"lastname" : "Morse",
				"pathology" : "Lombalgie",
				"goal" : "mettre à nouveau le feu sur scène.",
				"email": "morse.neal@gmail.om",
				"photo" : "http://bootdey.com/img/Content/user_2.jpg",
				"gender" : "M",
				"phone" : "0600000000",
				"adress" : "California",
				"context" : "Chanteur à ses heures perdues",
				"anamnese" : "",
				"birthdate" : "1960-08-02",
				"criteriaList" : [
					{
						"name" : "douleur",
						"values" : [9, 8, 7, 9, 6, 4, 1]
					}
				]
			},
			{
				"id" : 3,
				"firstname" : "Roine",
				"lastname" : "Stolt",
				"pathology" : "Rééducation ligaments croisés",
				"goal" : "Faire des bonds sur scène",
				"email": "roine.stolt@gmail.com",
				"photo" : "http://bootdey.com/img/Content/user_3.jpg",
				"gender" : "M",
				"phone" : "0600000000",
				"adress" : "California",
				"context" : "Guitariste du dimanche",
				"anamnese" : "",
				"birthdate" : "1956-09-05",
				"criteriaList" : [
					{
						"name" : "angle",
						"values" : [10, 30, 35, 45, 60, 70]
					},
					{
						"name" : "douleur",
						"values" : [9, 8, 8, 5, 4, 4]
					}
				]
			},
			{
				"id" : 4,
				"firstname" : "Pete",
				"lastname" : "Trewavas",
				"pathology" : "Arthrose",
				"goal" : "Jouer de la basse",
				"email": "pete@trewavas.com",
				"photo" : "http://bootdey.com/img/Content/user_1.jpg",
				"gender" : "M",
				"phone" : "0600000000",
				"adress" : "California",
				"context" : "Bassiste débutant",
				"anamnese" : "",
				"birthdate" : "1959-01-15",
				"criteriaList" : [
					{
						"name" : "douleur",
						"values" : [9, 8, 8, 5, 4, 4]
					}
				]
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
