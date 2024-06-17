const urlAva = 'https://i.pinimg.com/736x/dd/f8/70/ddf8707ea3147a8a1c0d4d1f4f13e470.jpg';
const nick = 'aeroph...';
const tovar = 'Кейс х1';

const getLastBuyers = (limit = 10) => {
  const result  = [];

  for (let i = 0; i < limit; i++) {
    result.push({
      urlAva, nick, tovar
    });    
  }

  return result;
};

export default getLastBuyers;
