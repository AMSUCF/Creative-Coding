## Building an Animated Generator

For this exercise, we'll work from the same .json file and tracery library as before, but we'll incorporate p5.js.

- Download [p5.js](https://p5js.org/download/) into the same folder as the rest of your project.
- Set up the new html file to include Tracery, jQuery, and p5.js
- P5.js is a library for animation and interaction that relies on two basic functions, setup and draw: we'll use those to build a basic particle system. Refer to Allison Parrish's [creative coding with P5](https://creative-coding.decontextualize.com/first-steps/) tutorials for guidance on experimenting with this library in combination with generative code.
- We'll start by hooking up our Tracery grammar using a similar structure to Tuesday's example, and print the text wherever the reader clicks. Start with a short fragment from your grammar, then try iterating through different approaches to the text.
- Use a simple particle system to animate either the text (as shown in the [demo](text_gen/p5.html)) or another element (moving shapes in the background, etc.). Store the information about each object to track motion, and delete objects when they move off-screen to avoid overloading the system.
- Try combining the two stages of the exercise: for example, the [combined demo](text_gen/combined.html) still rotates through the headline generator, but also builds a particle system in the background based on user interactions with the page.

Use some combination of these elements, along with your own and generated code, to finish out the text generator.