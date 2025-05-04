{
  // intercae - generic

  // interface Developer<T, X = null> {
  //   name: string;
  //   computer: {
  //     brand: string;
  //     model: string;
  //     releaseYear: number;
  //   };
  //   smartWatch: T;
  //   bike?: X;
  // }

  // type EmilabWatch = {
  //   brand: string;
  //   model: string;
  //   display: string;
  // };

  // const poorDeveloper: Developer<EmilabWatch> = {
  //   name: "Persian",
  //   computer: {
  //     brand: "Asus",
  //     model: "X-255UR",
  //     releaseYear: 2013,
  //   },
  //   smartWatch: {
  //     brand: "Emilab",
  //     model: "kw66",
  //     display: "OLED",
  //   },
  // };

  // interface AppleWatch {
  //   brand: string;
  //   model: string;
  //   heartTrack: boolean;
  //   sleepTrack: boolean;
  // }

  // interface YamahaBike {
  //   model: string;
  //   engineCapacity: string;
  // }

  // const richDeveloper: Developer<AppleWatch, YamahaBike> = {
  //   name: "Rich Dev",
  //   computer: {
  //     brand: "HP",
  //     model: "X-25UR",
  //     releaseYear: 2018,
  //   },
  //   smartWatch: {
  //     brand: "Apple Watch",
  //     model: "Something",
  //     heartTrack: true,
  //     sleepTrack: true,
  //   },
  //   bike: {
  //     model: "Yamaha",
  //     engineCapacity: "100cc",
  //   },
  // };

  const removeDublicate = <T>(...nums: T[]): T[] => {
    console.log(nums);
    let result: T[] = [];

     for(const num of nums){
      if(!result.includes(num)){
        result.push(num);
      }
     }
     return result;
  }

  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const result = removeDublicate(...numbersArray)
  console.log(result);

  //
}
