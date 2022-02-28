class Datasource {
    constructor() {
       this.url = 'https://static.ngnrs.io/test/prices'

    }

async getPrices () {
    try {  
        const response = await fetch(this.url);
        const data = await response.json();
        console.log(data);
        const prices = data.data.prices;
        prices.forEach(price => {
        price.mid = () => (price.buy + price.sell) / 200;
        price.quote = () => price.pair.slice(-3);
    });
        return prices; 
    } catch (error) {
        console.log(error);
    }
           
    }

}
           

let ds = new Datasource ();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
});
