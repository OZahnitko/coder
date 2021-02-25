# Question 1

## DNS

The **Domain Name System (DNS)** was created in 1984 alongside the Domain Name Servers, allowing the translation of IP addresses from their numeric or binary form, such as 8.8.8.8 or 00001000.00001000.00001000.00001000, into a human readable domain name, like [google.com](google.com).

The **DNS resolution process** involves communication between 4 DNS servers (Cloudflare, 2021):

1. **DNS recursor** receives the request from a browser, and depending on whether cached data is available, either responds immediately with the IP address, or contacts the
2. **DNS root nameserver**, which, depending on the extension (.com, .net, etc...) of the domain name requested, directs the recursor to the
3. **TLD nameserver**, which maintains the information on all domain names that share a common domain name extension, that finally directs to the
4. **Authoritative nameserver**, which contains all the relevant information specific to the domain name it serves, which allows it to provide the recursor with the appropriate IP address.

DNS is one the core technologies that contributed to making the internet more accessible and user friendly.

## Word Wide Web

In 1989, Tim Berners-Lee put forward a proposal for the development of a "distributed hypertext system" (Berners-Lee, 1089), originally called "Mesh", to aid CERN in managing their large droves of information. He described the system as a '"web" of notes and links (like references) between them', where the notes can be any type of resource, and the links - hyperlinks. He developed the code for the underlying protocols (HTML, HTTP, and URLs) the following year, and renamed the system as the "World Wide Web", and the following year, the [first web page](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html) was created.

As the Web continued to grow and develop, the concept of Web 2.0 began to emerge, envisioning a move away from static, non-interactive pages displaying content generated on the server, to "Web as a platform", with applications and services built directly on the web. This evolution was aided by the development of JavaScript.

## JavaScript

In 1995, while working at the Netscape Communications Corporation, Brendan Eich developed a new "programming language for the browser" that eventually came to be known as JavaScript (JS) (Severance, 2012). He co-founded Mozilla, which released the Firefox browser in 2004. As JS continued to grow and mature, it led to the rise of client-side scripting, allowing the development of more interactive web applications, user experience, interactivity and performance of which was increased by Ajax technique, which allowed for asynchronous data fetching, which combined with conditional rendering possible through client-side scripting, removed the need for entire page reloads.

The JS ecosystem became even more full featured after the release of Google's Chrome browser, which not only brought about an increase in performance through just-in-time (JIT) compilation, but also led to the development of the Node.js runtime environment, which had the ability to perform server-side operations, allowing for complete web development in a single language, which undoubtedly led to JS becoming the most popular programming language in the world.

## Social Media and User Generated Content

The rise of social media sites like Digg, Myspace, Facebook and Reddit, as well as platforms that host user generated content, such as YouTube and Soundcloud, have transformed the Internet from mostly a curated experience for the end user, into a space where they are able to share the content that they create, have others find and explore it, and be part of the process that shapes the platform that they are using.

The ability to choose what we see, and just as importantly, what we do not see, has led to the phenomenon of the "filter bubble" (DuckDuckGo, 2018). As massive platforms such as Google and Facebook gather ever more information about people, they are better able to serve content that generates engagement and ad revenue, but also happens to be content that reenforces the person's view of the world, avoids contradicting their beliefs, or challenging the way that they see the world. When exposed to such filtering for long enough, people start to believe that the way they see the world online is the reality, and become closed off to new ideas that challenge that belief (Pariser, 2011).

## The iPhone and the Mobile Web

Although not a direct development in any of the core internet technologies, the release of the iPhone in 2007, which brought the smartphone to the masses, has fundamentally changed how content on the Internet is consumed, and therefore developed. With a 222% increase in mobile internet traffic in the last 7 years (as of 2019), and in many developing countries being the primary gateway to accessing the Internet, meaning that figure is likely to keep increasing, "mobile first" development is likely to remain the top priority for any new or existing project.

# Question 2

## Packets

A packet, in the TCP/IP protocol suite, is one of the most basic unit of information in network transmission. Although an IP datagram is the actual unit of data that is sent over the network, it is only concerned with the source and destination of the transmission, and not with the varying frame sizes, network conditions and protocols that exist over then range of network that it will be travelling through on its route to the destination. IP packets contain a fragment of the original datagram, as well as the appropriate header information regarding the IP address required for the next hop over the network.

## IP addresses (IPv4 and IPv6)

An Internet Protocol address is a unique numeric address that used to identify a device, either on the Internet or on a local network, and allow routing of data to that device. If datagrams and packets carry various IP addresses in their headers, such as source/destination, as well as the address for the next hop over the intermediary network of devices that make up the Internet.

IPv4 is an address with the size limit of 32 bits, resulting in a maximum number of possible unique addresses of just over 4 million, a number that is further reduced when a number of reserved addresses is taken into consideration.

IPv6 addresses have a size limit of 128 bits, for a total of **3.403 x 10^38** unique addresses. The support for IPv6 addresses is not universal.

## Routers and Routing

Routing is the process of navigating packets of data from the source to the intended destination over a series of intermediary networks, in a series of hops. Routers are the computer devices along the route that facilitate the routing and transmission of the data.

When data is being transmitted, because it has to travel over a variety of devices and networks, many of which would have incompatible network specifications and conditions, as well as being too large to fit in a single frame of network transmission, it is the task of the router to break the data down into appropriate chunks, add the necessary routing information to the headers, allowing data to be fragmented for transmission, but providing the appropriate data for facilitate reassembly upon arrival.

## Domain and DNS

A domain name is a human readable address for a device connected to the internet. Although the location of the device connected to the Internet is represented in the IPv4/6 address format, it is not easy to remember or enter. To make the Internet more accessible, the Domain Name System was established in the mid-80s, along with a series of servers and databases that contain information on all registered IP addresses and associated domain names, as well as the crucial routing information.

The technologies described above are what makes the transmission of data possible over the myriad of interconnected devices that make up any large network, including the Internet. Domain names and DNS servers allow the user to navigate easily between web resources, where routers transmit data from the source to the destination, through a series of devices and networks, all identifiable with a unique IP address, to transmit fragmented packets of data, along with the information needed to be reassembled at the destination.

# Question 3

**Transmission Control Protocol** (**TCP**) is a protocol that "supports the sharing of resources that exist in different packet switching networks".

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

## JavaScript

```javascript
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

# References

Berners-Lee, T. (1989). Information Management: A Proposal. CERN [online] Available at: https://cds.cern.ch/record/369245/files/dd-89-001.pdf

Cloudflare.com, (2021). _What is DNS ?| How DNS Works_. [online] Available at: https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/ [Accessed 26 Feb. 2021].

DuckDuckGo.com, (2018). _Measuring the "Filter Bubble": How Google is influencing what you click_. [online] Available at: https://spreadprivacy.com/google-filter-bubble-study/ [Accessed 26 Feb. 2021]

Pariser, E. (2011). _The Filter Bubble: What the Internet is Hiding from You_. US: Viking.

Severance, C. (2012). JavaScript: Designing a Language in 10 Days. _Computing Conversations_, pp.7-8
