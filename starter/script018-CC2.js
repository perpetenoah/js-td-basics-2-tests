/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/


let teamJohn=Math.trunc((89+120+103)/3);
let teamMike=Math.trunc((116+94+123)/3);
let teamMary = Math.trunc((97+134+105)/3);
console.log(`John : ${teamJohn} et Mike : ${teamMike} et Mary : ${teamMary}`);

if (teamJohn>teamMike){
    console.log(`L'équipe de John est celle qui a le plus de points (${teamJohn} points)`);
} else {
    console.log(`L'équipe de Mike est celle qui a le plus de points (${teamMike} points)`);
}
// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

if (teamJohn>teamMike && teamJohn>teamMary){
    console.log(`L'équipe de John est celle qui a le plus de points (${teamJohn} points)`);
} else if (teamMike>teamJohn && teamMike>teamMary){
    console.log(`L'équipe de Mike est celle qui a le plus de points (${teamMike} points)`);
} else {
    console.log(`L'équipe de Mary est celle qui a le plus de points (${teamMary} points)`);
}

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.
