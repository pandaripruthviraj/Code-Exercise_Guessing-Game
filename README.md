# Code-Exercise_Guessing-Game
Code Exercise_Guessing Game
Title
	Code Exercise_Guessing Game

Description

	The program picks a random number from 1 to 10. The user gets three guesses.
	As soon as the user enters the correct number the program writes a winning message and exits.
	If the user fails to enter the correct number in three guesses, the program writes a failure message and exits. 
	The program also writes "cold" when the guess is 3 or more away from the correct answer, "warm" when the guess is 2 away, and "hot" when the guess is 1 away 

Prerequisites

	Check "maven" is there in your system along with it you need to have "Eclipse IDE".
	You need to have maven repository location in your machine.

Running the application

	Import the guessingGame folder into Eclipse IDE. Import as File -> import -> Existing Projects into Workspace
	Right click on project. Select Maven build. It will give you Edit Configuration window. Check for "Goals" option.
	In "Goals" option type "spring-boot:run" then click on "Apply" and "Run".
	Wait for the operation to complete. It will give you like this 
	"o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''"
	"Started GuessingApplication in 5.072 seconds (JVM running for 8.495)".
	Then Go to Google Chrome browser hit the below link
	"http://localhost:8080/game". It will return "Welcome to Game Guesing".
	Then open "GuessingGame.html" file. Now test the application.
	
Author

	Pruthviraj Pudari
