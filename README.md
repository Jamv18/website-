# website-
new thing

This repository holds various little experiments and toy projects.

## Direct website links:

- Basic starter page: https://jamv18.github.io/website-/
- Pong: https://jamv18.github.io/website-/jackson-experiment <=== THIS REQUIRES MERGING [THIS PR](https://github.com/Jamv18/website-/pull/2)

-----------------

## Tutorials for Jackson

This repository holds some code made with HTML/CSS/JavaScript code and some that additionally uses p5.js.

#### Optional courses that would be good to go though early to learn about web stuff

- (basic, free JavaScript Course) https://www.codecademy.com/learn/introduction-to-javascript
- (not as important) https://www.codecademy.com/learn/learn-css
- (not as important) https://www.codecademy.com/learn/learn-html
- (basic, free GitHub and markdown language course) https://www.codecademy.com/learn/learn-github-introduction
- (intermediate "Git" course in case you get stuck) https://www.w3schools.com/git/default.asp?remote=github

#### p5.js tutorial

- Introduction to p5.js on "Coding Train" channel, which is by same guy that wrote the "nature of code" book: https://www.youtube.com/watch?v=yPWkPOfnGsw
- Maybe easier to follow person, Patt Vira, who has bunch of p5.js videos: https://www.youtube.com/watch?v=x1NxkEjfNtI

#### VS Code Editor introduction videos
- Goes through basic functionality and different ways to use it: https://www.youtube.com/watch?v=EUJlVYggR1Y

## Instructions for playing with this locally on your computer

### How to install VS Code

1. instructions: https://code.visualstudio.com/docs/setup/setup-overview
2. direct download page: https://code.visualstudio.com/download
3. Quick video introduction into VS Code: https://www.youtube.com/watch?v=B-s71n0dHUk

### How to install P5.js extension in VS Code

1. Follow instructions here to install the extension: https://p5js.org/tutorials/setting-up-your-environment/#vscode

### How to use "live server" functionality from the P5.js extension in VS Code to start a working web server

1. You should have already installed the p5.js extension mentioned above in VS Code.
2. Right click on a HTML file, in other words a file that ends with `.html`. 
3. You should see `open with live server` option, click that. 
4. You should then see a browser opened up in another tab or window and your website displayed in that window.
5. If the browser opens but you don't see anything there, right click on the browser window and select "inspector" or similar to bring up a debugging sub-window. Click on "console" to see if there are any error messages.

### How to sync your code from GitHub to local computer
1. Go to the repository website you want to "clone" locally. https://github.com/JustinGOSSES/website-
2. Click the big green button that says `<> Code`.
3. In the sub-window that pops up copy the URL that appears under https. For the repo above, it would be `https://github.com/JustinGOSSES/website-.git`
4. Using VS Code on your local computer, click `file` and then `Open Folder`. In the window, that pops up, navigate to where you want your code to go. You will probably want to create a new empty folder for this code!
5. Once you've done that, you should have VS Code open up in your new empty folder. 
6. In VS Code menu bar, click view and then "terminal" to have a terminal appear in lower right side of VS Code if it is not already there. You may need to drag the edges of the terminal sub-window to size it to your liking.
7. In the terminal window, type `git clone` and then the repository you selected in step 3. This will looked like `git clone https://github.com/JustinGOSSES/website-.git`. Hit enter.
8. Step 7 should have cloned the repository into the folder you have opened. 
9. Now you should have a working repository cloned locally! You should see the files in the left sub-window titled "SOURCE CONTROL". You may need to click the top folder to expand it to see everything.

### how to sync changes to code you made on your local computer to GitHub repository
1. Save any changes in the file you are working in. This can be done in two ways. 
  - (A) hit "command" button next to space bar and "s".
  - (B) Select "file" and then "save" from the menu bar in VS Code.
2. Click on the icon in left menu bar of VS Code that looks like three circles connected by forked lines.
3. In the window that pops up, write a message that describes the changes you've made and why you made them since your last "commit" of code.
3. In the window that pops up, hit "commit" once you have added your message.
4. If window pops up that says "save and commit all changes", click yes to that. 
5. Now click blue "Sync Changes". You'll see a message that says changes will be pulled and pushed. and then a little spinning circle that will finish when done. 