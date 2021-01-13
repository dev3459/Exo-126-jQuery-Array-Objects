//Script commun
//Tableaux qui comporte trois objets person
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age" : 65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];


//Script pour la page index.html
if(document.getElementById('toggle')){
    listePerson();
}else{
    //Déclaration de l'index à zéro
    let index = 0;

    //Initialisation de la function affichage
    affichage();

    //Fonction affichage qui affiche l'élément du tableau qui correspond à l'index
    function affichage(){
        let avatar = arrObj[index].avatar;
        let avatarHTML = document.getElementById('img');
        avatarHTML.src = avatar;

        let nom = arrObj[index].person;
        let nomHTML = document.getElementById('nom');
        nomHTML.innerHTML = nom;

        let age = arrObj[index].age;
        nomHTML.innerHTML += ' (' + age + ' ans)';
    }

    //Évènement lors du clic cela ajoute 1 à l'index et lance la fonction affiche pour mettre à jour l'affichage
    document.getElementById('next').addEventListener('click', function(){
        if(index >= arrObj.length - 1) index = -1;
        index++;
        affichage();
    });

    //Pareil que l'évènement au dessus mais permet de décrémenter index;
    document.getElementById('prev').addEventListener('click', function(){
        if(index <= 0) index = arrObj.length;
        index--;
        affichage();
    });
}

//Script pour la page index_list.html
//Fonction pour créer les images
function createImage(src, alt, parent){
    let create = document.createElement('img');
    create.src = src;
    create.alt = alt;
    parent.append(create);
}

//Fonction pour créer les noms et âges
function createNameAndAge(innerHTML, parent){
    let create = document.createElement('p');
    create.innerHTML = innerHTML;
    parent.append(create);
}

//Fonction qui boucle sur les éléments
function listePerson(){
    let parent = document.getElementById('avatar');

    for(let i = 0; i < arrObj.length; i++){
        createImage(arrObj[i].avatar, "image avatar", parent);
        createNameAndAge(arrObj[i].person + " (" + arrObj[i].age + " ans)", parent);
    }
}