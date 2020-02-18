const filtredByRevievs = obj.sort((a, b) => {

    const cutIndexA = a.ratingRevievs.indexOf(' ');
    const cutIndexB = b.ratingRevievs.indexOf(' ');

    const firstValue = a.ratingRevievs.slice(0, cutIndexA);
    const secondValue = b.ratingRevievs.slice(0, cutIndexB);
    
    return firstValue - secondValue;
});

console.log('filtred By Revievs Obj\n', filtredByRevievs);
  
const filtredByPrice = obj.sort((a, b) => {

  const checkPrice = obj => typeof obj.price === 'object' ? obj.price.newUan : obj.price;

  const firstPrice = checkPrice(a); 
  const secondPrice = checkPrice(b);

  const firstCut = firstPrice.substring(0, firstPrice.length - 4);
  const secondCut = secondPrice.substring(0, secondPrice.length - 4);

  const firstValue = firstCut.replace(' ', '');
  const secondValue = secondCut.replace(' ', '');

  return firstValue - secondValue;
});

console.log('filtred By Price\n', filtredByPrice);
