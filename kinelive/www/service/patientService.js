angular.module('service.patientService', []).factory('patientService', [function() {
	return {
		patientList : [
			{
				"id" : 1,
				"firstname" : "Pascal",
				"lastname" : "ZELLNER",
				"pathology" : "Lombalgie",
				"goal" : "pouvoir à nouveau jouer de la batterie.",
				"email" : "mikep@yahoo.fr",
				"photo" : "image/patient.png",
				"gender" : "M",
				"phone" : "06 22 32 51 17",
				"adress" : "16 rue de la paix 67000 Strasbourg",
				"context" : "Sportif de haute montagne",
				"anamnese" : "Lombargie aigue entre L4 et L5, 2ième traitement",
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
				"lastname" : "MORSE",
				"pathology" : "Lombalgie",
				"goal" : "mettre à nouveau le feu sur scène.",
				"email": "morse.neal@gmail.om",
				"photo" : "image/patient1.png",
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
				"firstname" : "Rosine",
				"lastname" : "SOLT",
				"pathology" : "Rééducation ligaments croisés",
				"goal" : "Faire des bonds sur scène",
				"email": "roine.stolt@gmail.com",
				"photo" : "image/patient2.png",
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
				"lastname" : "TREWAVAS",
				"pathology" : "Arthrose",
				"goal" : "Jouer de la basse",
				"email": "pete@trewavas.com",
				"photo" : "image/patient3.png",
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
		},

		addSuiviToPatient : function(id) {
			for (patient in this.patientList) {
				if((this.patientList[patient]).id == id) {
					var seance = {
						"numero" : "5",
						"date" : new Date(),
						"type" : "suivi"
					};
					(this.patientList[patient]).seanceList.push(seance);
					break;
				}
			}
		}
	};
}]);
