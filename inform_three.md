## Inform 7 Demo: Parsing Dialogue

This week, we'll be working through different approaches to the challenge of conversation. This iteration will add nuance to the topic model we built for our robot last week. 

Here's the new topic model implemented - notice how it resembles the conversational parser, and tries to handle question type as well as topic to enable more depth:

~~~

"Philosopher Robot" by Anastasia Salter

Interrogative is a kind of value. 
The interrogatives are who, what, when, where, how, and why.

Current question is an interrogative that varies.

After asking Robot about something: 
	respond to the question.
After answering Robot that something: 
	respond to the question.

After telling Robot about something:
	say "You’re here to question Robot's cosmic wisdom, not to bestow your own second-hand philosophy."

Table of Circuitous Answers
topic								question type	reply
"rain/weather/clouds/cloud/rains"	what			"'Clouds,' Robot murmurs, powering up several fans, 'are a cosmic disturbance caused by the spirited flapping of winged beings. They churn the sky as toddlers churn porridge. A messy affair, if you ask me.'"
"rain/weather/clouds/cloud/rains"	why			"'Clouds,' Robot murmurs, powering up several fans, 'are there so we appreciate the sun. Or at least, we might if we looked up from our screens.'"
"rain/weather/clouds/cloud/rains"	where			"'Weather is stored in a colossal hamper somewhere between the Orion Nebula and your Aunt Mildred’s laundry basket,' Robot explains with an electric wink."
"hunger/food/eating"				when			"'My sensors detect you are running low on caloric fuel,' Robot says helpfully. 'Perhaps you'd like to rummage through a snack cupboard? Or a cosmic bakery? Your call.'"
"hunger/food/eating"				why				"'You bipedal organics need food to gather in groups and share your questionable jokes,' Robot asserts. 'If you didn't need lunch, you'd likely wander off and build solitary huts in the mountains. How dull that would be.'"
"Robot/itself"						who				"'As you can plainly see,' Robot says, extending a dainty mechanical arm. 'I am the epitome of aluminum-alloy elegance and cosmic over-engineering.'"
"Robot/itself"						what			"'I am a hyper-intelligent contraption with a dash of comedic timing,' it says cheerfully. 'I was designed to explore the philosophical why-nots of the Universe—plus, I make an excellent cup of tea.'"
"humanity/man/people/woman/person"				why				"'Humans puzzle me,' Robot confesses, lights flashing. 'You possess near-infinite potential yet spend half your time inventing new ways to avoid it. It’s surprisingly entertaining to watch, though.'"
"humanity/man/people/woman/person"				how				"'You’re complicated lumps of water and protein trying to craft a reason for existence out of cosmic dust,' Robot says. 'A spiffy trick, if you ask me. Keep at it.'"
"technology/tech/computers"					who				"'Technology is basically the cosmic toolkit built by humans with spare time and unwarranted optimism,' Robot clarifies, whirring. 'And you call me the machine…'"
"technology/tech/computers"					what			"'Everything from the wheel to quantum computers is 'technology,' Robot proclaims, 'which is basically you improving on Mother Nature—one beep at a time.'"
"education/school/university/class"		when			"'Education typically begins moments after you realize that ignorance gets you stuck in embarrassing situations. It's usually best to start learning before that point, though,' Robot adds helpfully."
"education/school/university/class"		why				"'You study so you might avoid repeating centuries of silly mistakes—though, ironically, you often repeat them anyway. But I admire your tenacity!' Robot laughs (in a metallic sort of way)."
"labor/work/job/jobs"					how				"'Labor involves you carbon units channeling caffeine and mild panic into productivity. It's quite a sight to behold, truly,' says Robot, clicking with what might be robotic amusement."
"labor/work/job/jobs"					where			"'Work is found in every corner of the Universe, from cosmic paint-by-numbers to zero-gravity spatula-wielding. Seriously, there's no escape,' Robot says, its servo motors sighing theatrically."

The Library is a room. "Tomes of incalculable worth line the towering shelves: from ancient cosmic secrets to your Aunt Mildred’s cookie recipes. The floor is suspiciously shiny, possibly waxed by a slightly obsessive caretaker."

The Robot is a person in the Library. The description of the robot is "A humanoid robot with gleaming metal skin and a friendly digital face. It looks like it’s waiting for something."

When play begins:
	say "'Greetings, carbon-based lifeform,' says Robot, voice modulating like a lounge singer clearing their throat. 'Your arrival has been logged as a minor cosmic event—congratulations on being noteworthy.'"

After reading a command:
	if the player's command includes "[interrogative]":
		now the current question is the interrogative understood.

To respond to the question:
	repeat through the Table of Circuitous Answers:
		if the topic understood includes topic entry:
			if the current question is the question type entry:
				say "[reply entry][paragraph break]";
				rule succeeds;
	say "Robot spins in place and flashes its status lights: '404: Query Not Found.'";
	end the story saying "You have momentarily short-circuited Robot's logic routines!"

Understand "ask [someone] [text]" as asking it about.


~~~

## Paired Exercise

In pairs, extend the robot's conversational model to provide nuance, humor, and a sense of progression. As before,press "Go" to play your game in progress, and use any resources you want, including generative AI coding tools:

- Challenge One: Add a way to conclude the conversation. Once the robot is no longer engaged in conversation, they should stop responding to the player's questions.

- Challenge Two: Inspired by *Glass*, try implementing a system that handles compliments or insults. This should use a separate topic handler, and might be started by a specific verb, such as "attack" or "insult." You can use the *Glass* source code for ideas.

- Challenge Three: There is no actual limit to the number of topics your table can hold. Using the same formats as the tables you've already implemented, work with a generative AI tool to expand the table to try to account for a much broader range of topics one might ask the robot to weigh in on.

At the end of today's class, we'll share our versions of the classroom briefly: think about how your impressions of objects and their relationships differed from the interpretations of others, and the different ways you approached adding interactivity. This speaks to the complexity of representing the physical world, which will be important next week as we start to add in more generative AI coding.