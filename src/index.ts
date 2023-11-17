import "./style.css";
class Car {
  constructor(
    public nameCar: string,
    public tire: 4, // mashina baloni
    public color: string,
    public priceCar: string
  ) {}

  run() {
    console.log(`${this.nameCar} is running...`);
  }
}

class ElectroCar extends Car {}
class PetrolCar extends Car {}
class HybridCar extends Car {}

class BYD extends ElectroCar {}
class Kia extends PetrolCar {}
class Jetour extends HybridCar {}

interface Capacity {
  electroCar: number;
  petrolCar: number;
  hybridCar: number;
}

interface Pricing {
  electroCarPricePerMinute: number;
  petrolCarPricePerMinute: number;
  hybridCarPricePerMinute: number;
}

const capacityParking: Capacity = {
  electroCar: 4,
  petrolCar: 12,
  hybridCar: 3,
};

const pricingParking: Pricing = {
  electroCarPricePerMinute: 10,
  petrolCarPricePerMinute: 4,
  hybridCarPricePerMinute: 20,
};
let sum:number;
class Parking<T extends Car> {
  public cars: T[] = [];
  constructor(public nameParking: string, public capacity: Capacity, public pricing: Pricing) {}

  enterCar(car: T) {


    if (this.cars.length < this.capacity.electroCar) {
      this.cars.push(car);
      console.log(`${car.nameCar} to'xtash joyiga kirdi.`);
    } else {
      console.log(`${this.nameParking} is full by => ${car.constructor.name}s.`);
    }
  }

  logoutCar(car: T) {
    const index = this.cars.indexOf(car);
    if (index !== -1) {
      this.cars.splice(index, 1);
      console.log(`${car.nameCar}to'xtash joyidan chiqdi.`);
    }
  }

  calculateTotalPricePerCar(car: T) {
    // const pricePerMinute = this.pricing.electroCarPricePerMinute;
    // return this.calculateMinutes() * pricePerMinute;
  }

  calculateMinutes() {}

  calculateTotalProfit() {}

}

const parking1 = new Parking<ElectroCar>("Hayat", capacityParking, pricingParking);
const parking2 = new Parking<PetrolCar>("MegaPlanet", capacityParking, pricingParking);
const parking3 = new Parking<HybridCar>("MaksimGorki", capacityParking, pricingParking);
console.log(parking1);
console.log(parking2);
console.log(parking3);

console.log("-----------------------MOSHINA-----------------------------------------");

const car1 = new BYD("BYD", 4, "blue", "4$");
const car2 = new Kia("Kia", 4, "green", "2$");
const car3 = new Jetour("Jetour", 4, "black", "3$");


console.log(car1);
console.log(car2);
console.log(car3);

console.log("-----------------------MOSHINA KIRISH-----------------------------------------");

parking1.enterCar(car1);
parking2.enterCar(car2);
parking3.enterCar(car3);


parking1.logoutCar(car1);
parking2.logoutCar(car2);
parking3.logoutCar(car3);

class Parkinged{
	private enterTime: Date;

	constructor() {
			this.enterTime = new Date();
	}

	getEnterTime(): Date {
			return this.enterTime;
	}

	calculateTimeElapsed(): number {
			const currentTime = new Date();
			const timeDiff = currentTime.getTime() - this.enterTime.getTime();
			return Math.floor(timeDiff / 1000); // Convert milliseconds to seconds
	}
}

function main() {
	const parking = new Parkinged();

	// Simulating user input for car type
	// const carType = prompt('Enter the car type:');
	console.log("-----------------------MOSHINANI ketishi-----------------------------------------");

	console.log(`Car name: ${car2.nameCar}`);
	console.log(`Enter time: ${parking.getEnterTime()}`);
	setTimeout(() => {
		const timeElapsed = parking.calculateTimeElapsed();
		console.log(`Time elapsed (seconds): ${timeElapsed}`);
		console.log(`Time pricing ${timeElapsed * 5}$`)
}, 5000);
	console.log(`Car name: ${car1.nameCar}`);
	console.log(`Enter time: ${parking.getEnterTime()}`);
	setTimeout(() => {
		const timeElapsed = parking.calculateTimeElapsed();
		console.log(`Time elapsed (seconds): ${timeElapsed}`);
		console.log(`Time pricing ${timeElapsed * 5}$`)
}, 5000);
	console.log(`Car name: ${car3.nameCar}`);
	console.log(`Enter time: ${parking.getEnterTime()}`);
	setTimeout(() => {
		const timeElapsed = parking.calculateTimeElapsed();
		console.log(`${car3}Time  (seconds): ${timeElapsed}`);
		console.log(`Time pricing ${timeElapsed * 5}$`)
}, 5000);

	// Simulating some time passing
	// In a real project, you would use your own logic to determine when to calculate the time elapsed

// const value = timeElapsed.value;

	// console.log(`Time price ${ * 5 }`)
}


main();
const result = main();
console.log(result);

// const fri = getEnterTime();