# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Objectif

Revolutionize Organization at Notion
🎯 Your Mission at Notion :
Imagine joining the Notion team, the digital brain that combines notes, databases, Kanban boards, wikis, calendars, and reminders into one intuitive tool. As the very first developer on board, you have a unique opportunity: to build the FileTree component, which will be the backbone of our entire application. This is the challenge that awaits you: to create the nervous system through which all information flows and organizes.

🫵 Your role :
We are counting on you to develop FileTree, an elegant and highly functional component that will help users visualize and manipulate their virtual workspace with astonishing ease. You will shape the fundamental experience of organization and navigation within Notion, enabling everyone to shape their personal idea generator and dynamic wiki.

Props
The FileTree component will be provided with props containing a tree of nested objects which describe the files and directories in a file system, as follow:

```js
<FileTree root={
  {
    name: "My workspace",
    type: "dir",
    children: [
      {
        name: "Design projects",
        type: "dir",
        children: [
          {
            name: "App Redesign",
            type: "file"
          }
        ]
      },
      {
        name: "Development",
        type: "dir",
        children: [
          {
            name: "Frontend Tasks",
            type: "file"
          }
        ]
      },
      {
        name: "Marketing",
        type: "file"
      },
      {
        name: "Sales pitch",
        type: "file"
      },
    ]
  }
} />
```
The file system for the above sample structure is:
```
My workspace/
    Design projects/
        App Redesign
    Development/
        Frontend Tasks
    Marketing
    Sales pitch
```
where My workspace, Design Projects, Development are directories and App redesign, Marketing and Sales pitch are files in these directories.

You can assume that props.root always contains a directory as the root object, even if this root directory has no children. You can also assume that the objects adhere strictly to the above structure and are well-formed. Objects with type: "file" will not have a children array, and objects with type: "dir" are guaranteed to have a children array, even if they have no children (the array is empty).

Rendering
The FileTree component should render the files and directories which are visible as elements with a data-testid attribute: 
```js
<li data-testid="node">
```
 The data-testid attribute will be used by the testing suite to validate your code. You may add classes to this node element if you wish.

In keeping with the file/directory structure, there will be two `<li data-testid="node">` types: directory elements and name elements. In both cases, the value corresponding to the node's name key should be rendered somewhere within the inner HTML of the element (or one of its children). For expanded directory elements, all children should be rendered as child lists following the parent pattern depending on their type.

These elements should be rendered conditionally depending on which directories are expanded. Additionally, the order of elements in the original object should be preserved.

All `<li data-testid="node">` elements corresponding to directories should contain a child element `<div data-testid="dir-expand">` that can be clicked to expand the directory tree for that node. You're free to make this element any type you wish as long as it responds to a click event.

Behavior
Initially, all directories will be collapsed; only the lone root directory will be visible. A collapsed directory should not render any of its children.

Once a `<div data-testid="dir-expand">` element is clicked within a corresponding `<li data-testid="node">` element corresponding to a directory, the node should be expanded to reveal all of its immediate children, as well as any descendents which were expanded previously.

Each directory's state should not be dependent on any other directory. For example, if a directory is collapsed which has child directories which are open, those child directories should continue to be open upon re-expanding the parent directory.

Design and Style
As a manually tested part of the challenge, please add CSS necessary to present a clean and attractive user interface. There's no need for in-depth styling, but do take the time to show a basic grasp of CSS and design principles.

In particular, the resulting structure should be visibly nested to assist the user in determining which children belong to which directory. Include a distinguishing identifier (such as an icon) to differentiate files and folders.

⏯ Demo
This demo illustrates the expected behavior of the component.

![Demo](/public/demo.gif)

The props for your Web Preview environment can be adjusted in your workspace in ./src/App.jsx. These changes only affect the Web Preview environment and have to bearing on the test submission, the code for which will bypass App and instantiate your component directly.
