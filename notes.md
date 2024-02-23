# CS 260 Notes
## Winter 2024 | Ari Tanner
### Can use on midterm and final

### GitHub assignment (1/10/24)
[README file](README.md)
I learned how to resolve conflicts between my changes and GitHub's changes.
- Basically just follow what the terminal tells you and pull stuff within Visual Studio.

I also learned how to write [markdown files](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Start-up Requirements (1/12/24)
HTML - Basic structural and organizational elements

CSS - Styling and animating

JavaScript - Interactivity (e.g. What happens when a user presses a button)

Web service - Remote functions that your application calls on your, or someone else's, web server (e.g. saveScores, getWeather, chatWithFriend)

Authentication - Creating accounts and logging in

Database persistence - Storing user data in a database (e.g. Save the high scores and login information)

WebSocket - Support for pushing data from the server. This can be peer to peer communication (e.g. chatting with friends through the browser), or realtime data from the server (e.g. stock prices or the current game leader).

Web framework - Using React to add components and request routing

### AWS - EC2 (1/19/24)
I learned: DON'T UPDATE/UPGRADE THE UBUNTU THING

Elastic IP: 35.174.135.119

Command to remote shell into server: ssh -i [key pair file] ubuntu@neurospicy.click

### HTML
index.html is the default file to open if you don't specify.  
Title is just part of the information in the head (not actually rendered in the body).  
I can't figure out how to embed videos from YouTube (if it's possible), but I successfully downloaded a NASA YouTube video, uploaded it to File Garden, then used the link there to embed it in my HTML on CodePen.  

DEPLOY: ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
(copy the deployFiles.sh from the Simon repo)

### CSS
Content inside padding inside border inside margin (peanut butter and margarin)

### JavaScript
console.log("hello world") -- returns "undefined" (doesn't return anything)  
declare variable: let y = 1 (var is the old one and has scope issues) (const y = 1 is constant variable declaration)  
equality: === (triple equals)  

### Kahoot Midterm Review  
1. Can use this CSS to load fonts from google: @import url('https://fonts.googleapis.com/css?family=Quicksand');  
2. (/20cd1ae0-4ee3-4acc-9db4-6e0485f49c35.webp): Hello World text will be oriented as two lines, with the first one saying "World" and the second "Hello"  
3. CSS padding puts space around the content of selected elements
4. Executing:  
const f = y => ++y;  
console.log(f(3))  
Will output 4  
5. In HTML, \<div\> creates a division element  
6. Order of CSS box model, outside going in: margin, border, padding, content  
7. (/20cd1ae0-4ee3-4acc-9db4-6e0485f49c35.webp): Output: ['rat', 'fish']  
8. (/bb5e65e6-8855-4376-9a14-a5a40ba123a9.webp): Output: cow:rat:fish  
9. (/70dfbff7-5d45-428a-bb6e-af9fe9201a0c.webp): Output: ['a1', 'a2', 'a3']  
10. document.querySelector('p').addEventListener('mouseover', console.log);  
    - Adds a mouseover event listener to a p element
11. HTML tag for unordered list: <ul>
12. JavaScript functions:  
    - const f = (x) => {}   (assigning a variable to an arrow function)
    - function f(x) {}  (this is the standard way of declaring a function)
    - const f = function(x) {}   (assigning a variable to a function)
    - NOT valid: function f(x) = {}   (don't use the equals sign to declare a function)  
13. Include JavaScript in HTML:
    - \<script\>1+1\</script\>
    - \<script\> src="main.js" />
    - \<div onclick='1+1' />
    - NOT valid: \<javascript\>1+1\</javascript\>  
14. Valid Javascrpit object: {n:1}  (no equals)  
    NOT valid:
    - {n=1}
    - {"n"=1}
    - {"n"="1"}  
15. The DOM textContent property sets the child text for an element  
16. HTML hyperlink: \<a href='https://c.com'\>x\</a\>
17. .header for classes, #header for id  
18. Valid JSON: {"x":3}
    NOT valid:
    - {'x':3}
    - {"x":undefined}
    - {x:3}
19. Console command to make a script executable: chmod +x deploy.sh  
20. DNS subdomain example: c260.cs.byu.edu  
21. To point to another DNS record, you should use CNAME  
22. (/2190cbae-7213-437e-8981-09d5846c8c3e.webp) outputs: burger fries taco shake noodles  
23. (/23f674a9-8d2f-4bc3-a358-852c63e25498.webp) outputs: A D B