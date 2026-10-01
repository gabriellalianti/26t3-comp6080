### Exercises: W2
- Ideally watch the tutorial videos in your own time
	- [css-replicate-layered-and-mobile](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/css-replicate-layered-and-mobile)
	- [css-replicate-simple-flex](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/css-replicate-simple-flex)

### Exercises: W3
- [css-investigate-page-components](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/css-investigate-page-components)
	- Question 4 (another way using JS)
		```javascript
		document.getElementsByTagName(“img”).forEach(img => img.style.opacity = 0.8);
		```
	- Question 5 using JS
		```javascript
		// Get the elements (comma separated)
		const elements = document.querySelectorAll('.o-button--stroke');
		// Apply styles
		elements.forEach(el => {
		  el.style.setProperty('background-color', 'blue', 'important');
		  el.style.setProperty('border-color', 'blue', 'important');
		  el.style.setProperty('color', 'blue', 'important');
		});
		```
- [node-number-manipulation-1](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/node-number-manipulation-1)
	- The `filter` method
		- Runs a function on every item of your array
		- Returns a new array containing only the items that return `true` from that
	- The `reduce` method
		- Reduces an array to a single final value
		- Takes in an accumulator and the current item
		- The default accumulator value is zero
	- The `slice` method
		- Takes in a start index (inclusive) and end index (exclusive) 
	- Looping with`for in`
- [node-number-manipulation-2](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/node-number-manipulation-2)
	- The `sort` method
		- Sorts an array in place, lexicographic by default
		- Can pass our own comparison function
			- Takes in `a` and `b`
				- If the function returns zero, `a` and `b` are equal
				- If the function returns positive, `a > b` (so put `b` before `a`)
				- If the function returns negative `a < b` (so put `a` before `b`)
			- For example use `a - b` for ascending, and `b - a` for descending
	- The `join` method
		- Joins an array into a single string
		- Takes in a separator
	- The `reverse` method
		- Reverses an array in place
- [node-momentjs-problem](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/node-momentjs-problem)
	- Moment.js is a legacy project
	- We'll use Day.js for today
- [css-mobile-first-page](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/css-mobile-first-page)
	- [Bootstrap grids](https://getbootstrap.com/docs/5.1/layout/grid/)
	- Bootstrap divides every row into 12 invisible columns.
		- `.col-3`: Takes up 3 out of 12 columns. (12/3 = 4 images per row)
		- `.col-4`: Takes up 4 out of 12 columns. (12/4 = 3 images per row)
		- `.col-6`: Takes up 6 out of 12 columns. (12/6 = 2 images per row)
- [nodejs-uuid-problem](https://cgi.cse.unsw.edu.au/~cs6080/26T3/content/tutorials/nodejs-uuid-problem)
	- Use a key-value store / dictionary
	- Sorting the frequency map by the frequency (using the sort method with a comparison function)

### Admin
- Quiz 1 is next week
	- Hayden is going to explain more about the quiz in the lecture(s)
	- Content will be everything up to the week the quizzes are in
	- Watch the lectures