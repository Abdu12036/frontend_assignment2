// Objects and methods
const burabayTour = {
  name: "Burabay Adventure",
  price: 120,
  duration: "1 Day",
  location: "Kazakhstan",
  description: "Explore the lakes, forests, and mountains of Burabay.",
  
  getInfo: function() {
    return `${this.name} - ${this.duration} trip in ${this.location}. Price: $${this.price}`;
  }
};


const charynTour = {
    name: "Charyn Adventure",
    price: 150,
    duration: "1 Day",
    location: "Kazakhstan",
    description: "Unforgettable landscapes and the breathtaking Valley of Castles.",

    getInfo: function() {
        return `${this.name} - ${this.duration} trip in ${this.location}. Price: $${this.price}`;
    }
};

const emelTour = {
    name: "Altyn Emel Adventure",
    price: 120,
    duration: "1 Day",
    location: "Kazakhstan",
    description: "Step into a world of surreal landscapes, from the famous “singing” sand dunes to the painted Aktau and Katutau mountains.",

    getInfo: function() {
        return `${this.name} - ${this.duration} trip in ${this.location}. Price: $${this.price}`;
    }
};

// console.log(burabayTour.getInfo());
// console.log(charynTour.getInfo());
// console.log(emelTour.getInfo());


// Arrays and Iteration
const tours = [
  { name: "Burabay", price: 120 },
  { name: "Charyn Canyon", price: 150 },
  { name: "Altyn Emel", price: 100 }
];

for (let i = 0; i < tours.length; i++) {
    console.log(tours[i].name + " " + tours[i].price);
}


// Higher-order functions
const cheapTours = tours.filter(tour => tour.price < 130);

cheapTours.forEach(tour => {
  console.log(`Affordable: ${tour.name} - $${tour.price}`);
});
