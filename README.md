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
- Proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
- Links between pages as necessary
- Application textual content
- Placeholder for 3rd party service calls
- Application images
- Login placeholder, including user name display
- Database data placeholder showing content stored in the database
- WebSocket data placeholder showing where realtime communication will go
