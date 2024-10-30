{
  const getLengthOrSquare = (param: string | number): number => {
    if (typeof param === "string") {
      return param.length;
    } else {
      return param * param;
    }
  };
}

{
  interface Person {
    name: string;
    age: number;
    phone?: number;
    address?: {
      city: string;
      street: string;
    };
  }

  const getAddressCity = (person: Person) => {
    return person.address?.city ?? "No city";
  };
}

{
  class Cat {
    name: string;
    sound: string;
    constructor(name: string, sound: string) {
      this.name = name;
      this.sound = sound;
    }
  }
  const isCat = (param: Cat) => {
    return param instanceof Cat ? "yes, it's a cat." : "no, it is not a cat.";
  };
  const cat1 = new Cat("Fluffy", "Meow");
}

{
  const arrList = [1, "two", 3, "four", 5];

  const getTotal = (arr: Array<string | number>) => {
    return arr
      .filter((item) => typeof item === "number")
      .reduce((acc, curr) => (acc += curr), 0);
  };

  getTotal(arrList);
}

{
  interface Car {
    make: string;
    model: string;
    year: number;
  }
  interface Driver {
    name: string;
    licenseNumber: number;
  }

  const getCarAndDriver = (
    car: Car,
    driver: Driver
  ): { car: string; driver: string } => {
    return {
      car: car.make + " " + car.model + " " + car.year,
      driver: driver.name + " " + driver.licenseNumber,
    };
  };

  const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  };
  const myDriver = {
    name: "Shamim",
    licenseNumber: 123456,
  };

  const result = getCarAndDriver(myCar, myDriver);
}

{
  const summationOfArrayNumbers = (param: unknown) => {
    const isArrayOfNumbers =
      Array.isArray(param) && param.every((item) => typeof item === "number");
    if (isArrayOfNumbers) {
      return param.reduce((acc, curr) => (acc += curr), 0);
    } else {
      return "This is not an array of numbers.";
    }
  };
}

{
  const numbers: number[] = [1, 2, 3, 4, 5, 2];
  const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
  const targetNumber: number = 4;
  const targetString: string = "cherry";

  const findFirstOccurrence = <T>(arr: T[], value: T): number => {
    return arr.indexOf(value);
  };

  const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
  const indexInStrings = findFirstOccurrence(strings, targetString);
}

{
  interface Product {
    name: string;
    price: number;
    quantity: number;
  }
  const getTotalPrice = (products: Product[]): number => {
    return products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  };

  const productList: Product[] = [
    {
      name: "Product 1",
      price: 100,
      quantity: 2,
    },
    {
      name: "Product 2",
      price: 200,
      quantity: 1,
    },
    {
      name: "Product 3",
      price: 300,
      quantity: 3,
    },
  ];
  const total = getTotalPrice(productList);
}
