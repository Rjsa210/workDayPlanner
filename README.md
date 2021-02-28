# unit05_WorkDayPlanner
In this project we were instructed to take an existing HTML and CSS and achieve functionality by adding javascript, and utilizing third party API's.

In the process of completing this assignment I also strive for the following personal goals.
1. I wished to not modify the html at all besides adding script tags and link tags for the css and necessary API's.
1. In the past, my code has gotten a bit messy towards the end of an assignment as I correct issues that I come across. for this project I tried to keep my code as tidy as possible. 
1. I know that this might not be the goal in the real world, but I attempted to keep all the necessary functions nested within a single master function that is called when the page loads. The goal was that a for loop would generate all functionality for each hour block based on an array of moment.js times. Ultimately this was not possible in quite the way I hoped based on being able to refer to indexes of an array from within a moment.js function format. 

The planner functions as follows.
1. A for loop generates the individual schedule blocks from an array of individual     .momentjs times. Color rules are applied and event listeners are assigned to each block to submit data to local storage, and a query is sent to local storage to retrieve data for each hour block. [figure1](assets/screenshots/figure1.jpg)
1. When the selects a specific hour block, they input a text and click save. The inputted text is then saved to local storage. [figure2](assets/screenshots/figure2.jpg) [figure3](assets/screenshots/figure3.jpg)
1. If the user enters new data for an hour block and clicks save, the new data overwrites the old in local storage. [figure4](assets/screenshots/figure4.jpg)
1. If the page is refreshed the previously stored data is pulled from local storage and displayed to the page. 
1. The hour blocks change color based on the time of day, the current hour is displayed in red with white text, previous hours are displayed in gray, and future hours are displayed in green.

### Issues and Successes

I wanted the page to generate from one single concise for/loop. This loop would...
1. Create and append all necessary elements in order.
1. Assign classes, names and ID's to all elements based on index of the array.
1. Assign color rules based on the data stored in the index of the Array
1. Have a nested function to set/get data to and from local storage, and assign an event listener to execute.

Ultimately, I was unable to achieve the last as neatly as I had hoped due to an inability to base a JQuery selector on an index of an array. If there is a way to do this, I have not been able to find it. For example $('#input' + i) does not work, so this must be referenced outside of the for loop

I did however learn a lot about working with API's and would be able to complete this project much faster with the knowledge I have gained. Also i learned how to make CSS selectors much more versatile, and not just apply to elements, classes and id's; but also datasets, names, etc.