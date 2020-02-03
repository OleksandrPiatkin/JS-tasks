const text = `Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович. Как ревизор?
Артемий Филиппович. Как ревизор?
Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович. Вот те на!
Артемий Филиппович. Вот не было заботы, так подай!
Лука Лукич. Господи Боже! еще и с секретным предписаньем!`;

const actorNames = [ 'Городничий', 'Аммос Федорович', 'Лука Лукич' ];
const sepText= text.split('\n');

let test  = setRoleText2(actorNames);
console.log('testing tne 2d funct\n', test);

function setRoleText2(names) { 
    let outPut = '';
    names.forEach((item) => {
        outPut = `${outPut}${item}\n${setRoleText(item)}\n`;
    });
    return outPut;
}

function setRoleText(name) {

    let actorText = '';
    sepText.forEach(( item, index ) => {
        if (item.indexOf(name) >= 0) { 
            actorText = `${actorText}${index + 1})${item.slice(name.length + 1)}\n`;
         }
      });
    return actorText;
}
