const videos=[{
titre:"1_structure Algorithmique",
categorie:"algorithme",
image:"v1.png",
lien:"https://www.youtube.com/watch?v=OghB357fNPs&t=6s",
id:0
}];
const articles=[{
    image:"a1.png",
    titre:"jsx",
    id:0,
    categorie:"react",partie:[{soustitre:"definition",explication:"JSX signifie JavaScript XML.<br>SX nous permet d'écrire des éléments HTML en JavaScript et de les placer dans le DOM sans aucune méthode createElement()  et/ou appendChild()."},

        {soustitre:"Expressions en JSX",explication:"Avec JSX, vous pouvez écrire des expressions entre accolades { }"}
      ,  {soustitre:"gros bloc de HTML",explication:"Pour écrire du HTML sur plusieurs lignes, placez le HTML entre parenthèses  { }"},
      ,  {soustitre:"Un élément de niveau supérieur",explication:"Le code HTML doit être enveloppé dans UN élément de niveau supérieur.Donc, si vous souhaitez écrire deux paragraphes, vous devez les placer à l'intérieur d'un élément parent, comme un divélément."},
      ,  {soustitre:"className",explication:"Utiliser l'attribut classNameau lieu de classdans JSX."}
    ]

}];
const categories=["algorithme","react","tout"]
export {articles,videos,categories}
