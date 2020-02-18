const rolesText = `Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович. Как ревизор?
Артемий Филиппович. Как ревизор?
Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович. Вот те на!
Артемий Филиппович. Вот не было заботы, так подай!
Лука Лукич. Господи Боже! еще и с секретным предписаньем!`;

const actorNames = [ 'Городничий', 'Аммос Федорович', 'Лука Лукич' ];
const sptiedText = rolesText.split('\n');

let outPut  = setActorsText(actorNames);
console.log('Output of actors\n', outPut);

function setActorsText(names) { 
    let actorsText = '';
    names.forEach((item) => {
        actorsText = `${actorsText}${item}\n${setRoleText(item)}\n`;
    });
    return actorsText;
}

function setRoleText(name) {
    let actorText = '';
    sptiedText.forEach(( item, index ) => {
        if (item.indexOf(name) >= 0) { 
            actorText = `${actorText}${index + 1})${item.slice(name.length + 1)}\n`;
         }
      });
    return actorText;
}
