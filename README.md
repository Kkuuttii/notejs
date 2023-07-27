# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Description
This project was created as a test-task. 

### I needed:
Develop a SPA with React.js: a text-based note editor with tags.
Technical requirements:
1. React.js hooks;
2. Using TypeScript;
3. Using the UI library;
4. Use a state manager.

### How it works 
► You can create a new note. Just click the "Create a new note" button.
![image](https://github.com/Kkuuttii/notejs/assets/90791743/65450232-eb20-4c33-8f60-c3000c4f533a)

► When you write a note, you can use hashtags. Hashtags are highlighted and shown below the note.
Hashtags help you filter your posts.

![image](https://github.com/Kkuuttii/notejs/assets/90791743/6ff3793c-8ed1-4f82-9d10-8594e0a957e5)
![image](https://github.com/Kkuuttii/notejs/assets/90791743/1f082cbe-3361-4a5f-bc52-06be44ac6999)
![image](https://github.com/Kkuuttii/notejs/assets/90791743/e7ed1a72-2ac0-4ca1-8fbd-1abf8655f73f)


► You can edit or delete a note.

![image](https://github.com/Kkuuttii/notejs/assets/90791743/9296b0ed-5d86-4162-a704-dfaeefa6eb30)
![image](https://github.com/Kkuuttii/notejs/assets/90791743/e407fd24-391e-445e-82ed-1cb477f93994)


### Challenges and solving
The biggest challenge was to create a text editor that would highlight hashtags in note writing mode. 
I tried different ways to solve the problem:
- I used the div tag with attribute contenteditable 
- I was looking for different ways to create input
- Also I found property dangerouslySetInnerHTML, but of course I didn't use it.
- And I found Draft.js (is a JavaScript rich text editor framework, built for React and backed by an immutable model). I found this method the most convenient, understandable and most suitable. Thus, I settled on this method.

