# Startup
CS 260
Ari Tanner  

## Elevator Pitch
Have you ever struggled to understand why you feel terrible, or even just "off"? Have you ever finally figured out what's wrong with you, only to fail to find any solutions? If you are autistic or otherwise neurodivergent, these might be very familiar situations for you. Neurospicy Care is designed to help you think through your quandary, then give you a suggestion for self care. You can even add friends and congratulate them for taking care of themselves!  

## Design
(View alt text for an explanation)
![Image showing the proposed design of the website. The login screen contains a username input box, a password input box, and buttons to either login or create a new account. The login button leads to a new page which prompts the user, "Write about how you feel to help you determine which quandary to choose below:" The user is given a text box with a save button at the bottom. Then it says, "Options (if you are unsure, just pick the one you think is best):" The user is then given buttons with different quandaries written on them, depending on what the user has saved in their account. The image shows them selecting the button "understimulated", which leads them to a new page. This page says, "You chose: Understimulated" "Your suggestion: Dance like no one is watching!" Below this is the text, "Helpful?" next to one "yes" and one "no" button. Below that it says "Generate a new suggestion," which points again to the page to reload with a new suggestion. Below that is an option to "Return to previous page," with an arrow pointing to the previous page, and below that an option to "Continue to personal page," with an arrow poining to a new page. There is a note outside of the page that says, "suggestions are randomly generated from the list of suggestions paired with the chosen quandary." The new page says "Personalize:", then gives examples of each quandary with the paired suggestions listed under it. Next to each quandary and suggestion item is a button option to remove the item. At the end of each suggestion list, there is a text box with a save button to add a new suggestion. At the end of the quandary list, there is an option to add a new quandary, or choose from a standard list. There is a "Friends:" page off to the side to be accessed from the top menu. It shows an example of a friend, "Matthew completed a self-care suggestion!" and a button to congratulate them. It also shows, "You completed a self-care suggestion!" and that five people have congratulated you for that.](/IMG_0922.jpg)  

## Key Features
- Account creation and login
- Journal-like text entries that are persistently stored and can be viewed from your personal page
- Ability to access pre-populated quandaries and their linked self-care suggestions
- Ability to personalize the site by adding and removing quandaries and self-care suggestions
- Only see one self-care suggestion based on that quandary to mitigate descision anxiety
- Ability to record completion of a self-care suggestion and its effectiveness
- Ability to share with friends that you practiced self-care, and to see and congratulate friends on their self-care
    - If time: implement friend requests, otherwise just show all users since it's not a busy site
- Protects privacy and well-being by only sharing that "\<Username\> practiced self care!" and not the specifics of what they did  

## Technologies
I am going to use the required technologies in the following ways:
- **HTML** - Five HTML pages: login, personalize self-care, selection of quandary, self-care suggestion, and friends.
- **CSS** - Styling that looks good on different screen sizes. Muted fonts and color choices for a more calming effect.
- **JavaScript** - Provides login, transfer input information, link quandaries and suggestions together, randomly generate suggestions.
- **Service** - Call to third party to access current date/time to record when a self-care suggestion was completed. Endpoints: login, retreive quandaries and suggestions, submit suggestion completion, submit new quandries and suggestions, submit friend congratulations
- **DB/Login** - Register and login users. Store users, quandries, suggestions, and journal entries in database.
- **WebSocket** - As each user completes self-care suggestions, this is shown in all other user's "Friends" feed. Users can react in celebration to these items, which show up in real time on each user's feed.
- **React** - Tying it together with the React framework.  

## HTML
Properly structured HTML
- HTML pages for each component of your application
    - index.html (login), quandary_selection.html, suggestion.html, personalize.html, friends.html
- Proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
    - throughout my files
- Links between pages as necessary
    - in the header for three of the files, and through navigation buttons for the others
- Application textual content
    - all my pages have the necessary text
- Placeholder for 3rd party service calls
    - on friends.html, the date and time of each post will be retrieved through a 3rd party call
- Application images
    - the celebration button uses an image from the internet (no attribution required)
    - the login page uses a colorful brain image
- Login placeholder, including user name display
    - index.html is the login page. The username is also displayed on each page with a header
- Database data placeholder showing content stored in the database
    - Each user's personal list of quandaries and suggestions, their journal entries, and their suggestion completions will be stored in te database
- WebSocket data placeholder showing where realtime communication will go
    - on friends.html, the celebration count will update in real time as users click the celebration button  

## CSS
Properly styled CSS
- Header, footer, and main content body
    - On each page
- Navigation elements
    - Links to the appropriate pages from the appropriate pages
- Responsive to window resizing
    - Flex responds to resizing
- Application elements
    - Dark theme contrast and deals with some spacing
- Application text content
    - Text and consistent fonts and colors
- Application images
    - Image logo justified right  

## JavaScript
- Future login: 
    - If you type in a username and password and click "Create new account", that username and password are saved to local storage and you are taken to personalize.html to set up your account. If you click "Login", your username and password must match the username and password in local storage. (if you forget your username/password just enter something and click "Create new account")
- Future database data:
    - Users can enter new quandaries and suggestions, which are stored in JavaScript arrays. This will later be changed to persistent database data, customizable for each user.
- Future WebSocket:
    - On the friends page, the number of people celebrated randomly increments to represent the future realtime communication between users.
- Interaction logic:
    - The username entered at login is displayed in the header
    - The main logic currently exists on the quandary selection page. Selecting a quandary will display that quandary at the bottom of the page, along with a randomly-generated suggestion from the list paired with the chosen quandary. 
    - The personalize page allows for adding and displaying a new custom quandary. That quandary does not yet transfer over to the quandary selection page, and there is not yet an option to add suggestions with it. This would be much easier to do with json files.
    - My entire website basically requires persistent database data to really be effective so a lot more will come.

## Service
- Create an HTTP service using Node.js and Express
    - I did this
- Frontend served up using Express static middleware
    - I did this
- Your frontend calls third party service endpoints
    - funfact.html displays a random number fact using a 3rd-party API
- Your backend provides service endpoints
    - index.js file with get and post functions
- Your frontend calls your service endpoints
    - quandary_selection.js saves the value from the selected radio button with the backend endpoint, and then retrieves that value with the endpoint
    - personalize.js saves the entered text with the backend endpoint