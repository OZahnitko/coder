# Question 1

# Question 2

## Packets



## IP addresses (IPv4 and IPv6)

## Routers and Routing

## Domain and DNS

# Question 10

- how many data types
- what language
- just the built-in types?

# Question 12

Executing the block of Ruby code in question:

```ruby
celsius = gets
fahrenheit = (celsius * 9 / 5) + 32
print 'The result is: '
print fahrenheit
puts '.'
```

produces the following console error:

```bash
swap.rb:4:in `<main>': undefined method `/' for "13\\n13\\n13\\n13\\n13\\n13\\n13\\n13\\n13\\n":String (NoMethodError)
```

The error messages describes an `undefined method /` for `"...":String (NoMethodError)`, indicating that an arithmetic division operation is being performed on a `String`, which is not possible in `Ruby`.

The error with the code is caused by the fact that the `celsius = gets` command takes the input from the console, which is always a `String`, and tries to perform arithmetic operations on it.

This can be confirmed by checking the `class` property of the `celsius` object:

```ruby
celsius = gets
puts celsius.class
# String
```

To fix this issue, the data returned from the `gets` function should be converted to `Integer`, or even better, since celsius is sensitive enough to measure decimal point changes in temperature, a `Float`.

Final code:

```ruby
celsius = gets.chomp.to_f
fahrenheit = (celsius * 9 / 5) + 32
print 'The result is: '
print fahrenheit
puts '.'
```

# Question 13

Executing the block of code in question:

```ruby
arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]

i = 0

i += 1 while (i < arr.size - 1) && (arr[i] < arr[i + 1])

puts i

arr[i] = arr[i + 1]
arr[i + 1] = arr[i]
```

and then adding a `puts arr` statement at the end to see what the resulting array looks like, produces the following output:

```bash
3
5
22
29
19
19
51
78
96
84
```

where the first integer is the index at which the swap is supposed to occur, and the following 9 integers are the items in the array.

The issue with the output are the values at indexes 3 and 4. If the code executed correctly, value at index 3 should have been 19, which is the case, but the value at index 4 should have been 39, which is _**not the case**_.

The problem in the above code is that when the line `arr[i] = arr[i + 1]` is executed, which in this case is `arr[3] = arr[4]`, the value at index 3, which is 39, is overwritten by the value at index 4, which is 19. But then when the following line `arr[i + 1] = arr[i]` is executed, which in this case is `arr[4] = arr[3]`, the value at index 3 is now 19, as it was overwritten in the previous operation, and so the value at index 4 is overwritten to 19 again, resulting in a repeating value.

One possible solution is to assign the value stored at `arr[i]` in a `temp` variable, and then assign the value of that variable to `arr[i + 1]`.

The following code snippet implements those this solution.

```ruby
arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]

i = 0

i += 1 while (i < arr.size - 1) && (arr[i] < arr[i + 1])

puts i

puts arr[i]
temp = arr[i]
arr[i + 1] = temp
```

The output can be checked by adding a `puts arr` statement at the end to see the resulting array:

```bash
5
22
29
19
39
51
78
96
84
```

As show, values at indexes 3 and 4 are now in the correct order.

# Question 14

## Flowchart

Still to come.

## Pseudocode

```
procedure primeFinder(startValue, endValue)
  for each outerValue between startValue and endValue
    (if (value = 2) then
      (print 2 to console)
    else
      (for each innerValue between 2 and outerValue
        (if (the remainder of outerValue divided by outerValue = 0) then
          (break from the inner loop))
        print 'innerValue is a prime.' to the console)
        break from the outer loop)

```

# Question 15

```ruby
def weather_descriptor(raining, temperature)
  if raining && (temperature >= 15)
    puts "It's warm and raining."
  elsif raining && (temperature < 15)
    puts "It's wet and cold."
  elsif !raining && (temperature >= 15)
    puts "It's warm but not raining."
  else
    puts "It's not raining but cold."
  end
end

weather_descriptor(true, 15)
```

# Question 16

`index.js`

```javascript
const chalk = require("chalk");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const skillsData = [
  { codingSkill: "Python", weight: 1 },
  { codingSkill: "Ruby", weight: 2 },
  { codingSkill: "Bash", weight: 4 },
  { codingSkill: "Git", weight: 8 },
  { codingSkill: "HTML", weight: 16 },
  { codingSkill: "TDD", weight: 32 },
  { codingSkill: "CSS", weight: 64 },
  { codingSkill: "JavaScript", weight: 128 },
];

const askQuestion = () => {
  rl.question("Enter your coding skills: ", (answer) => {
    if (
      answer.trim().trim().length === 0 ||
      answer.trim().replace(/,+/g, " ").trim().length === 0
    ) {
      console.log(
        "You did not seem to enter anything there, samurai!\nTry Again!"
      );
      askQuestion();
    } else {
      formatOutput(parseInput(answer));
      rl.question("\nDo you want to go again? (Y/n): ", (response) => {
        if (response.trim().toLowerCase() === "y") {
          askQuestion();
        } else {
          console.log("\nCatch you on the flippity flip!");
          rl.close();
        }
      });
    }
  });
};

const formatOrdinalNumbers = (number) => {
  switch (number) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${number}th`;
  }
};

const formatOutput = (input) => {
  let output = input
    .map(
      ({ codingSkill, weight }, index) =>
        `The ${formatOrdinalNumbers(index + 1)} skill you entered was "${
          weight ? chalk.green(codingSkill) : chalk.red(codingSkill)
        }". ${
          weight
            ? chalk.bgGreen(`Your score increased by ${weight} points.`)
            : chalk.bgRed(
                `We don't need that ${chalk.bold(
                  "TRASH"
                )}, so it will not reflect your score.`
              )
        }`
    )
    .join("\n")
    .concat(
      `\n\nYour total score is ${input.reduce((acc, { weight }) => {
        return acc + weight;
      }, 0)}.`
    )
    .concat(
      "\n\nIf you wanted to increase your score even further, look into learning the following...\n\n"
    )
    .concat(
      skillsData
        .filter(
          ({ codingSkill }) =>
            !input
              .map((userSkill) => userSkill.codingSkill)
              .includes(codingSkill)
        )
        .map(
          ({ codingSkill, weight }) =>
            `${codingSkill}, which would increase your score by ${weight}, bringing your total to ${chalk.bgGreen(
              input.reduce((acc, { weight }) => {
                return acc + weight;
              }, 0) + weight
            )}.`
        )
        .join("\n")
    );

  console.log(output);
};

const parseInput = (rawInput) =>
  rawInput
    .trim()
    .replace(/,+/g, " ")
    .split(/\s+/)
    .map(
      (userSkill) =>
        skillsData.find(
          ({ codingSkill }) =>
            codingSkill.toLowerCase() === userSkill.toLowerCase()
        ) || { codingSkill: userSkill, weight: 0 }
    );

askQuestion();
```
