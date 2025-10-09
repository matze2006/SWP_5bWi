import React from 'react'

type Props = {};

interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

// Beispiel Daten
const cars: Car[] = [
    { brand: "Tesla", model: "Model S", price: 95000, year: 2023 },
    { brand: "BMW", model: "M3", price: 72000, year: 2021 },
    { brand: "Toyota", model: "Corolla", price: 22000, year: 2022 },
    { brand: "Mercedes", model: "C-Class", price: 55000, year: 2020 },
    { brand: "Audi", model: "A6", price: 63000, year: 2024 },
];

// Funktionen mit for-each
function getTotalPrice(cars: Car[]): number {
    let total = 0;
    cars.forEach((car) => {
        total += car.price;
    })
    return total;
}

function printCars(cars: Car[]): void {
    cars.forEach((car) => {
        console.log(`${car.brand} ${car.model} (${car.year}) - $${car.price.toLocaleString()}`);
    });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    const result: Car[] = [];
    cars.forEach((car) => {
        if (car.price > minPrice) {
            result.push(car);
        }
    });
    return result;
}

// Funktionen mit Array-Funktionen
function getTotalPriceArray(cars: Car[]): number {
    return cars.reduce((sum, car) => sum + car.price, 0);
}

function printCarsArray(cars: Car[]): void {
    console.log(
        cars
            .map((car) => `${car.brand} ${car.model} (${car.year}) - $${car.price.toLocaleString()}`)
            .join("\n")
    );
}

function getExpensiveCarsArray(cars: Car[], minPrice: number): Car[] {
    return cars.filter((car) => car.price > minPrice)
}

const car_example_Aufgabe_1 = (props: Props) => {
    const totalPrice = getTotalPrice(cars);
    const totalPriceArray = getTotalPriceArray(cars);
    const expensiveCars = getExpensiveCars(cars, 50000);
    const expensiveCarsArray = getExpensiveCarsArray(cars, 50000);

    console.log("mit for-each")
    printCars(cars);
    console.log("mit Array-Funktion")
    printCarsArray(cars);

    return (
        <div className="p-4">
            <div className="text-3xl font-bold mb-4">Gesamtpreis</div>
            <p className="mb-1">Mit for-each: ${totalPrice.toLocaleString()}</p>
            <p className="mb-4">Mit Array-Funktion: ${totalPriceArray.toLocaleString()}</p>

            <div className="text-2xl font-semibold mb-2">Teuere Autos</div>
            <div className="mb-1">Mit for-each</div>
            <ul className="list-disc pl-6 mb-4">
                {expensiveCars.map((car, index) => (
                    <li key={index}>
                        {car.brand} {car.model} - ${car.price.toLocaleString()}
                    </li>
                ))}
            </ul>

            <h3 className="mb-1">Mit Array-Funktion</h3>
            <ul className="list-disc pl-6">
                {expensiveCarsArray.map((car, index) => (
                    <li key={index}>
                        {car.brand} {car.model} - ${car.price.toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default car_example_Aufgabe_1