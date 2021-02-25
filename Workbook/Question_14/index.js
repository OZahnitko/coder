const primeFinder = (startValue, endValue) => {
  for (i = startValue; i <= endValue; i++) {
    if (i === 2) {
      console.log("2 is a prime");
    } else {
      for (j = 2; j < i; j++) {
        if (i % j === 0) {
          break;
        }
        console.log(`${i} is a prime.`);
        break;
      }
    }
  }
};

primeFinder(1, 100);
