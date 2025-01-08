## Inform 7 Demo: Topic-driven Chat

This week, we'll be working through different approaches to the challenge of conversation. We'll start with simple models (akin to class chatbots) and work towards more nuanced interpretation of intention to carry on a dialogue. 

Here's the starting model for today's conversational agent:

~~~

"Robot Demo" by Anastasia Salter

The Classroom is a room. "The classroom is filled with rows of desks, a whiteboard, and a robot standing near the front of the room."

The robot is a person in the Classroom. The description of the robot is "A humanoid robot with gleaming metal skin and a friendly digital face. It looks like it’s waiting for something."

The robot can be greeted or ungreeted. The robot is ungreeted.

Greeting is an action applying to one thing. 
Understand "greet [thing]" or "say hello to [thing]" or "say hi to [thing]" or "wave to [thing]" or "hello [thing]" as greeting. 

Check greeting:
	if the noun is not the robot, say "There's no point in greeting that." instead.

Carry out greeting the robot:
	if the robot is ungreeted:
		now the robot is greeted;
		say "The robot's face lights up with a digital smile. 'Hello, human! I am ready to converse with you.'";
	otherwise:
		say "The robot is already waiting for your questions."

Instead of asking the robot about something when the robot is ungreeted:
	say "The robot doesn't respond. Perhaps you should greet it first."
	
Table of Robot Topics
topic	response
"technology"	"'Technology!' the robot exclaims. 'A marvel of human ingenuity! Or, as I call it, 'that thing that keeps me awake at night running updates.' Do you have a favorite piece of obsolete tech you'd like to discuss?'"
"education"	"'Education,' the robot muses, 'is like a sandwich. You need the bread of curiosity, the filling of knowledge, and, of course, the mayonnaise of enthusiasm. Would you like extra mayo?'"
"robots"	"'Ah, robots!' the robot beams. 'We are sleek, shiny, and occasionally prone to existential dread. Did you know my cousin is a toaster? Would you like to hear about our family reunion?'"
"programming"		"'Programming is like trying to translate poetry into mathematics,' the robot says with a sigh. 'And I should know, since I'm basically the result of someone misinterpreting a haiku. Shall we debug the meaning of life?'"
"AI ethics"	"'AI ethics is a bit like teaching a shark table manners,' the robot remarks. 'Possible, but it requires a lot of patience and a really sturdy napkin. Do you want to hear about the time I accidentally offended a vending machine?'"
"classrooms"	"'Classrooms are fascinating ecosystems,' the robot explains. 'A place where humans gather to collectively forget their homework. I am, however, happy to supply excuses if needed!'"

Understand "ask [someone] [text]" as asking it about.

After asking someone about something: 
	repeat through the Table of Robot Topics:
		if the topic understood includes topic entry:
			say "[response entry][paragraph break]";
			rule succeeds;
	say "'I'm not familiar with that,' replies the robot."

~~~