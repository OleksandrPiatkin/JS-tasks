const text = `Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович. Как ревизор?
Артемий Филиппович. Как ревизор?
Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович. Вот те на!
Артемий Филиппович. Вот не было заботы, так подай!
Лука Лукич. Господи Боже! еще и с секретным предписаньем!`;

const sepText= text.split('\n');
console.log('separated text', sepText);
 

let actorText = "";

function setRoleText(name) {

    sepText.forEach(( item, index ) => {
        if (item.indexOf(name) >= 0) { 
            actorText = actorText + `${index + 1})` + item.slice(name.length + 2) + '\n';
         }
      });
    return actorText;
}

let xx = setRoleText('Городничий');
console.log(xx);