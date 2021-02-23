const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const skillsData = [
  { codingSkill: "Python", weight: 1 },
  { codingSkill: "Ruby", weight: 2 },
  { codingSkill: "bash", weight: 4 },
  { codingSkill: "git", weight: 8 },
  { codingSkill: "html", weight: 16 },
  { codingSkill: "tdd", weight: 32 },
  { codingSkill: "css", weight: 64 },
  { codingSkill: "JavaScript", weight: 128 },
];
//TODO: Check only the individual items, i.e. maybe a user made a mistake in a single string, no need to reject the whole.
//TODO: Check for empty input strings
//TODO: Allow for multiple inputs - don't close stdin

const parseInput = (rawInput) => {
  //   return /^[A-Za-z\s,]+$/.test(rawInput)
  //     ? {
  //         data: rawInput
  //           .trim()
  //           .replace(/,+/g, "")
  //           .split(/\s+/)
  //           .map((skill) => skill.toLowerCase()),
  //       }
  //     : { error: "Invalid input" };
  //   return {
  //     data: rawInput
  //       .trim()
  //       .replace(/,+/g, " ")
  //       .split(/\s+/)
  //       .map((userSkill) => ({
  //         skillName: userSkill,
  //         valid:
  //           (/^[A-Za-z\s,]+$/.test(userSkill) &&
  //             skillsData.find(
  //               (skill) =>
  //                 skill.codingSkill.toLowerCase() === userSkill.toLowerCase()
  //             )) ||
  //           false,
  //       })),
  //   };
  return {
    data: rawInput
      .trim()
      .replace(/,+/g, " ")
      .split(/\s+/)
      .map((userSkill) => {
        const targetSkill = skillsData.find(
          (skill) => skill.codingSkill.toLowerCase() === userSkill.toLowerCase()
        );
        return targetSkill
          ? targetSkill
          : {
              codingSkill: userSkill,
              message: `Could not find information about ${userSkill} in our database, and it's value is not reflected in your score.`,
              weight: null,
            };
      }),
  };
};

// rl.question(
//   "Please enter your skills, separated by either space or a comma: ",
//   (userInput) => {
//     rl.close();
//     const userSkills = parseInput(userInput);
//     console.log(userSkills);
//     // console.log(
//     //   userSkills.map((userSkill) => {
//     //     const targetSkill = skillsData.find(
//     //       (skill) => skill.codingSkill.toLowerCase() === userSkill
//     //     );
//     //     console.log(targetSkill);
//     //     return `You're good at ${targetSkill.codingSkill}, which adds ${targetSkill.weight} to your score.`;
//     //   })
//     // );
//   }
// );

// rl.question(
//   "Please enter your coding skills, separated by space or comma: ",
//   (answer) => {
//     console.log(answer.trim().length);
//     rl.close();
//   }
// );

// const askQuestion = () => {
//   const finished = false;
//   rl.question(
//     "Please enter your coding skills, separated by space or comma: ",
//     (answer) => {
//       rl.close();
//       console.log(answer.trim().length);
//       if (answer.trim().length === 0) {
//         finished = false;
//       } else {
//         finished === true;
//       }
//     }
//   );
// if (finished) {
//   askQuestion();
// }
// };

// askQuestion();

// const askQuestion = () => {
//   const askAgain = false;

//   rl.question("What?: ", (answer) => {
//     rl.close();
//     if (answer.trim().toLowerCase() === "what") {
//       askAgain === true;
//     }
//   });

//   console.log(`Ask again is set to ${askAgain}`);

//   if (askAgain === true) {
//     askQuestion();
//   }
// };

const askQuestion = () => {
  rl.question("What is the name: ", (answer) => {
    console.log("And the answer is...");
    console.log(answer);
    return rl.close();
  });
};

askQuestion();
