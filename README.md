# lab9_itmd361
9th &amp; Final Lab in ITMD361

FINAL EDIT:

As stated in the final commit for the js file, I will explain line by line to show proper understanding of this lab.

Lines 1 & 12: The init function is dependent on line 12's event handle of the window loading up. The init function will only run once the window has loaded.
Lines 2 & 3: These are the predefined variables for the objects that will be used/modified within this lab. I like to predefine my variables before inserting them into any functions. These variables specifically target the button and text input field on the webpage.
Line 5: This is the "main" function of the lab, and I am simply defining its name and opening up the bracket for instructions.
Line 6: Here I am telling the function to modify the 'textoutput' ID, which is the ID given to the h2 header, within the HTML document. By using .innerHTML, I am able to modify the content of that header (object). This comes together by making the object equal to the 'usertext.value' which is the variable we predefined for user input.
Line 7: Finally, this line of code tells the window to alert the user with our name (as its own string) added (combined with) to the value of the usertext variable we predefined earlier.
Line 10: This is the event listener that will wait for the user to click on the button, in order to run the function we just described above. Nothing will happen unless the user clicks the button in order to run this function.