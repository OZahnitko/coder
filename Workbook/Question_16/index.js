const readline = require("readline");

const skillsData = require("./skillsData.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//TODO: Check only the individual items, i.e. maybe a user made a mistake in a single string, no need to reject the whole.

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

rl.question(
  "Please enter your skills, separated by either space or a comma: ",
  (userInput) => {
    rl.close();
    const userSkills = parseInput(userInput);
    console.log(userSkills);
    // console.log(
    //   userSkills.map((userSkill) => {
    //     const targetSkill = skillsData.find(
    //       (skill) => skill.codingSkill.toLowerCase() === userSkill
    //     );
    //     console.log(targetSkill);
    //     return `You're good at ${targetSkill.codingSkill}, which adds ${targetSkill.weight} to your score.`;
    //   })
    // );
  }
);
