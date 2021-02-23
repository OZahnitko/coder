const weatherDescriptor = (raining, temperature) => {
  if (raining && temperature < 15) {
    console.log("It's wet and cold.");
  } else if (!raining && temperature < 15) {
    console.log("It's not raining but cold.");
  } else if (!raining && temperature >= 15) {
    console.log("It's warm but not raining.");
  } else {
    console.log("It's warm and raining.");
  }
};

weatherDescriptor(false, 16);
