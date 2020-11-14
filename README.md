# tweetPredictor
## To Run in dev
* export FLASK_APP=api
* flask run
* npm start

# To Do
* Test fetch code on frontend 
* Implement redux and load pictures from state
* Spinning wheel only on home page
* Update Db to current
* AWS
* Docker
* In place to catch missing tweets, ex. today rdt tweet at 6:36 pm was not counted in db
* Jira/Git on youtube
* Push docker image into aws from docker git
* docker with db???
* mongodb??
* change db schema of user
* check for duplicate emails on backend

# In Future
* Have function that downloads any users tweet data and calculates moving average
* Have 100, 50 dma
* Event tracker - number of events today placement
* Correlate tweets with event times
* At the top when showing the weekly/daily counts certain color means in value area, or projected to be in value area, red =  projected not to be in value area, green = projected to be in value area
* Data validation/backup
* Security Questions/Email users who forget password


# Things to Know
* Database duplicating values because brave browser extension vanilla cookie manager was clearing cookies from other brave browser extensions causing a 2nd render of page on start up.
* Look into iframe, read html standard website
* Most people have a container in before they put the content of their html on the page that designates padding between the header and rest of page, max-width of text/main content (margins), and padding of main content as well as media references to change padding/margins if page gets smaller, this gives effect of whitespace around main content on webpage.
* Don't use flexbox for page layout, can be accomplished with media queries, percentages, and max-widths
* em is scaled font size in html/css based on parent, rem is scaled based on root node
* News conference, bill trump is signing = high number of tweets
* Need to restart flask server after every change in flask
* To add a dependency to package.json - npm install dependency --save
* UTC time is 4 hours ahead of ET
* Look into cron job on AWS server
* div:empty css means no children inside element
* let keyword is variable only defined in scope of function, var keyword is global (like public and private in java)
* docker compose allows multiple containers at once such as db or backend along with frontend
* When you use fetch() function in javascript, it is expecting a request object from the server, why use jsonify in some cases in backend code
* all html input tags return an event object, why you need to use event.target.value to get text returned from html input form
* Components that are wrapped in a Route have access to this.props.history, components that aren't wrapped with a Route need to be passed withRouter or hooks
* Context (this), global in functions if not explicitly told to set context, so context depends on how function is called, in arrow functions context is scope of function (lexical scope) for global code/functions will be set to global scope (use this of parent scope, inherits this of parent scope), regular functions need to be bound explicitly
* Ex. 
var obj = {
    bar: function (){
        var x = (() => this)
        return x
    }
}

var fn = obj.bar() // calls bar as method of obj set this to obj, fn() === obj
var fn2 = obj.bar // references bar but never calls it, calling bar method inside obj now returns window because it follows the this from fn2 (global), fn2()() === window is true
* functions in es6 class need to be bound explicitly, arrow functions handle this automatically
* if you pass a function to a variable and then get its length it will correspond to the number of parameters taken by the function

* profile page, redux
* private route with utility function calling async function that sees if user is logged in or not OR login_required on backend or return null