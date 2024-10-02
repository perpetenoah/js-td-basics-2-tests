// Jour suivant

/*
1. Stockez le jour actuel (nom du jour, type texte) dans une constante.
2. Écrivez des tests pour stocker dans une variable le nom du jour suivant dans chaque cas de figure :
   - Si le jour actuel est "lundi", alors le jour suivant est "mardi".
   - Si le jour actuel est "mardi", alors le jour suivant est "mercredi".
   - Si le jour actuel est "mercredi", alors le jour suivant est "jeudi".
   - Si le jour actuel est "jeudi", alors le jour suivant est "vendredi".
   - Si le jour actuel est "vendredi", alors le jour suivant est "samedi".
   - Si le jour actuel est "samedi", alors le jour suivant est "dimanche".
   - Si le jour actuel est "dimanche", alors le jour suivant est "lundi".
   - Si le jour actuel ne correspond à aucun des jours de la semaine, affichez dans la console "Erreur : jour non reconnu!"
3. Testez si la variable qui contient le nom du jour suivant n'est pas vide, et dans ce cas, affichez dans la console le message "Demain, nous serons …" suivi du nom du jour suivant.
*/

// Exemple : si le jour actuel est "mardi", le programme devrait afficher "Demain, nous serons mercredi."

// N'oubliez pas de tester votre programme avec divers jours de la semaine.


const nomDuJour ="lundi";

if (nomDuJour==="lundi"){
    console.log("Le jour suivant est mardi");
} else if (nomDuJour==="mardi"){
    console.log("Le jours suivant est mercredi");
} else if (nomDuJour==="mercredi"){
    console.log("Le jours suivant est jeudi");
} else if (nomDuJour==="jeudi"){
    console.log("Le jours suivant est vendredi");
} else if (nomDuJour==="vendredi"){
    console.log("Le jours suivant est samedi");
} else if (nomDuJour==="samedi"){
    console.log("Le jours suivant est dimanche");
} else if (nomDuJour==="dimanche"){
    console.log("Le jours suivant est lundi");
}
