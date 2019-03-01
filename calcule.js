var tableauNote=$("#marksWidget > div.mg_content > div > div > table > tbody");
var matieres = tableauNote.children();
var nombreMatiere = matieres.length;
var pointsTot = 0;
var sommeCoeff = 0;
for (var i = 0; i < nombreMatiere; ++i){
	var currMatiere = matieres[i];
	var casesMatiere = $(currMatiere).children();
	
	var coeff = parseInt($(casesMatiere[3]).html().replace(",","."));
	if (isNaN(coeff)) {
		continue;
	}
	
	sommeCoeff+=coeff
	var nbNoteCC = 0;
	var moyenneCCMatiere=0;
	var moyenneMatiere=0;
	
	var nbCases = casesMatiere.length
	for (var j = 4; j < nbCases - 1; ++j) {
		var currNote = parseFloat($(casesMatiere[j]).html().replace(",","."))
		if (isNaN(currNote) == false)
		{
			++nbNoteCC;
			moyenneCCMatiere+=currNote
			
		}
	
	}
	
	if (nbNoteCC > 0){
		moyenneCCMatiere = moyenneCCMatiere / nbNoteCC;
		moyenneMatiere = (moyenneCCMatiere + parseFloat($(casesMatiere[nbCases - 1]).html().replace(",",".")))/2
	}
	else {
		moyenneMatiere = parseFloat($(casesMatiere[nbCases - 1]).html().replace(",","."))
	}
	
	
	
	if (isNaN(moyenneMatiere) == true) {
		moyenneMatiere = moyenneCCMatiere;
	}
	
	pointsTot+=moyenneMatiere*coeff
	
	console.log($(casesMatiere[0]).text() + " : " + moyenneMatiere);
	
}
console.log("moyenne generale : " + pointsTot/sommeCoeff)