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
//TODO: Check only the individual items, i.e. maybe a user made a mistake in a single string, no need to reject the whole.
//TODO: Check for empty input strings
//TODO: Allow for multiple inputs - don't close stdin

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
                "We don't need that trash, so it will not reflect your score."
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
            `${codingSkill}, which would increase your score by ${weight}`
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
