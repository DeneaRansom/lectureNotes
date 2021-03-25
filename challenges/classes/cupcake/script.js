class Cupcake {
    constructor(batter, icing, cost){
        this.batter = batter;
        this.icing = icing;
        this.cost = cost;
    }

    getDescription() {
        return `A ${this.cost} ${this.batter} cupcake cake with ${this.icing} on top!`;
    }
}
class CupcakeShop {
    constructor(location){
      this.location = location;
      this.inventory = [];
      this.cash = 0;
    }
   getStatus() {
       return `The shop has ${this.cash} and ${this.inventory.length} cupcakes!`
   }

   bakeBatch(numberOfCupcakes, batter, icing, pricePerCupcake) {
       for(let i = 0; i < numberOfCupcakes; i++) {
        let newCupCake = new Cupcake(batter, icing, pricePerCupcake) 
        this.addtoInventory(newCupCake);
       }
   }

   addtoInventory(cupcake) {
       this.inventory.push(cupcake);
   }

   sellCupCake() {
       if (this.inventory.length > 0) {
           let toSell = this.inventory.pop();
           this.cash += toSell.cost;
           return toSell;
       } else {
           return "No cupcakes to sell"
       }
   }

}
let cakeBakeShop = new CupcakeShop("New Orleans");
let cakeBakeShopStatus = cakeBakeShop.getStatus();
cakeBakeShop.bakeBatch(13, "chocolate", "Vanilla", 2.75)
let soldCupCake = cakeBakeShop.sellCupCake()
console.log(soldCupCake);
console.log(cakeBakeShopStatus);