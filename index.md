# DGAH 220

- **Instructor:** Dr. Anastasia Salter
- **Email:** asalter@carleton.edu
- **Office:** Weitz 239A
- **Class Sessions:** Tuesday / Thursday 3:10 PM - 4:55 PM
- **Class Location:** Language & Dining Center 104
- **Office Hours:** Tuesday / Thursday 1:00 PM - 2:45PM

---

## Contents

- [DGAH 220](#dgah-220)
  - [Contents](#contents)
  - [Course Description](#course-description)
  - [Course Objectives](#course-objectives)
  - [Materials and Texts](#materials-and-texts)
  - [Evaluation and Grading](#evaluation-and-grading)
  - [Weekly Schedule](#weekly-schedule)
  
---

## Course Description

Generative AI tools such as ChatGPT and GitHub CoPilot are fundamentally reshaping programming practices and workflows, raising questions about the future of code and so-called "prompt engineering," or writing for the machine. This class will situate this moment of potential transformation in the history of literate programming and "natural language" coding using Inform 7, as well as current tools such as ml5.js, an accessible machine learning library. Students will engage this history and future of computational creativity through writing and re-writing code, both with and without generative AI interventions, for conversational bots, interactive fiction, and experimental games.

The course is divided into three modules: Writing as Code; Code as Text; and Creative Code. Throughout, we will work together on weekly shorter creative coding exercises and build towards three more complicated projects: a parser-based interactive fiction; a text generator; and a portfolio of interactive art. 

---

## Course Objectives

- Explore and understand the history of text generation, both with and without "AI"
- Create original works using natural language programming
- Design creative, simple text generation and interactive systems for the web
- Engage generative AI tools thoughtfully as a scripting interface
- Build a portfolio of creative, personal, computational works

---

## Materials and Texts

Required books include:

- *Code to Joy.* Michael Littman. 
- *Output.* Lillian-Yvonne Bertram and Nick Montfort. 
- *Artificial Intelligence.* Melanie Mitchell. 

A subscription to an AI tool (such as Claude or ChatGPT) is recommended but not required: it is likely that some assignments will result in hitting usage caps on free tools, particularly in the second half of the course. Students will need GitHub accounts. Assignments will require the use of Visual Studio Code, GitHub Desktop and/or Git, and Inform 7.

---

## Evaluation and Grading

| Points  | Assignment Summary |
|---|---|
| 30 | **Creative Code Exercises** - Every week, students will complete a creative code exercise, starting from a shared code base or demo and moving towards their own design and implementation. |
| 15 | **Interactive Fiction** - As the final creative exercise of "Writing as Code," students will design a simple short experience using Inform 7. |
| 15 | **Text Generator** - As the final creative exercise of "Code as Text," students will build a web-based text generator using JavaScript. |
| 15 | **Portfolio** - As the final creative exercise of "Creative Coding," students will develop a portfolio of interactive experiments. |
| 15 | **Final Essay** - The final exam will consist of a take-home essay connecting the conceptual readings to the semester's exercises towards considering the future of creative code. |
| 10 | **Participation** - Participation will be assessed based on attendance and readiness to participate in class activities, including having creative work ready to share at Tuesday meetings as indicated. |

Grades are calculated out of 100 following a standard letter scale. Extended projects will be accepted up to three days late with no penalty. Attendance is expected, and worth ten points of the final grade, with two excused absences except in cases of emergency or medical need. However, if you miss a class, a summary of what you missed will be posted along with slides and any other materials in the Moodle.

---

## Weekly Schedule

All readings should be completed before the class meeting as listed. Every class meeting will involve a combination of lecture, discussion, demos, and exercises. Please bring your laptop to follow along and get started on creative exercises.

**Week One: Writing as Code - Introducing "Natural Language" - January 7th and 9th** 

 - Tuesday: Class Overview
   - Play Together: [9:05, Adam Cadre](https://adamcadre.ac/if/905.html)
 - Thursday: [Inform 7 Demo](inform_one.md)
   - Play Together: [Shade, Andrew Plotkin](https://www.eblong.com/zarf/zweb/shade/)
   - Read: *Code to Joy* - Telling Computers What to Do

**Week Two:  Writing as Code - Conversations - January 14th and 16th** 

 - Tuesday: **[Imagined Rooms Due](code_one.md)**
   - Review: [Challenge Solutions](./inform_one/)
   - Play Together: [Glass, Emily Short](https://iplayif.com/?story=https%3A%2F%2Fifarchive.org%2Fif-archive%2Fgames%2Fzcode%2FGlass.zblorb)
   - Read: *Code to Joy* - The What of Programming
   - Demo: [Topic-driven Chat](inform_two.md)
 - Thursday: Building Dialogues
   - Play Together / Code Reading: [Adventure](https://rickadams.org/adventure/advent/) in [Fortran](https://github.com/wh0am1-dev/adventure) and [Inform 7](https://ifarchive.org/if-archive/games/source/inform/Advent_Crowther_source.txt)
   - Demo: [Parsing Dialogue](inform_three.md)
   - Read: *Output* - Conversations: Zork, Galatea, Adventure

**Week Three: Writing as Code - Interactive Fiction - January 21st and 23rd**

 - Tuesday: **[Conversation Simulators Due](code_two.md)**
   - Review: [Challenge Solutions](./inform_two/)
   - Play Together / Code reading: [ELIZA in JavaScript](https://github.com/oren/eliza-bot)
   - Read: *Code to Joy* - Sequencing Commands
   - Demo: Rescripting ELIZA
 - Thursday: Designing for Interaction
   - Code reading: [Infocom](https://github.com/historicalsource/)
   - Demo: [Iterating and Combining](inform_four.md)
   - Read: *Output* - Conversations: ELIZA, SHRDLU, PARRY, ALICE, Cleverbot, Tay, Sandy Speaks, Subreddit Simulator

**Week Four: Code as Writing - Histories - January 28th and 30th**

 - Tuesday: **[Interactive Fiction Due](interactive_fiction.md)**
   - Demo: [Distant Read](distant_read.md)
   - Play Together: [Taroko Gorge Remixes](https://collection.eliterature.org/3/collection-taroko.html)
   - Read: *Code to Joy* - Splitting on Conditionals
 - Thursday: JavaScript Poetics
   - Demo: [Combining Texts](combine_texts.md)
   - Read: *Output* - Poetry: Taroko Gorge, House of Trust, and five others (your choice)

**Week Five: Code as Writing - Bots - February 4th and 6th**

 - Tuesday: **[Taroko Gorge Re-Remix Due](code_three.md)**
   - Code reading: [NaNoGenMo](https://nanogenmo.github.io/)
   - Demo: [Tracery Grammars - Text](https://github.com/galaxykate/tracery)
   - Read: *Code to Joy* - Defining Functions
 - Thursday: [Tracery Grammars - Images](https://github.com/derekahmedzai/cheapbotsdonequick/blob/master/svg-tracery-image-bots.md)
   - Code reading: [Cheap Bots](https://cheapbotstootsweet.com/) + [Image bots](https://alien-sunset.neocities.org/bots/Bots)
   - Discuss: [The problem with SVGs](https://simonwillison.net/tags/pelican-riding-a-bicycle/)
   - Demo: [Bluesky Bot](bot.json)
   - Demo: [Local AI](local_ai.md)
   - Read: *Output* - Tweets and Microblogging (all)

**Week Six: Code as Writing - Poetics - February 11th and 13th**

 - Tuesday: **[Bluesky Bot Due](bot.md)**
   - Read: *Code to Joy* - Combining Code and Data
   - Read: *Artificial Intelligence* - Part I: Background
   - Demo: [Local AI, Grammars, and starting with Tracery for the web](tracery_web.md)
 - Thursday: Tracery and P5.js
   - Demo: [Combining Tracery and P5](tracery_p5.md)
   - Read: *Output* - Haiku (all)

**Week Seven: Creative Code - Games - February 18th and 20th**

 - Tuesday: **[Text Generator Due](text_generator.md)**
   - Read: *Code to Joy* - Programmable World
   - Read: *Artificial Intelligence* - Part II: Looking and Seeing
   - Demo: GitHub Copilot and Code-specific tools
 - Thursday: [P5.js Interactions](p5_game.md)
   - Demo: [Games and Metagames](https://anastasiasalter.net/AIAdmin/)
   - Read: *Output* - Visual Poetry (all)

**Week Eight: Creative Code - Vision - February 25th and 27th**

 - Tuesday: **[P5.js Game Due](p5_game.md)**
   - Read: *Artificial Intelligence* - Part III: Learning to Play
 - Thursday: ml5.js and Teachable Machine
   - Read: *Output* - Text and Image (all)

**Week Nine: Creative Code - Interfaces - March 4th and 6th**

 - Tuesday: **ML5.js Piece Due**
   - Read: *Artificial Intelligence* - Part IV: Artificial Intelligence Meets Natural Language
 - Thursday: Combining libraries
   - Read: *Output* - Humor (all)

**Week Ten: Play and Critique - March 11th**

 - Tuesday: **Portfolio Due**
   - Read: *Artificial Intelligence* - Part V: The Barrier of Meaning

**Take-Home Final Exam: Reflective Writing - Due Monday, March 17th**