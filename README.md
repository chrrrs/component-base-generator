## 💾 component-base-generator

Create folder and files associated with the component in question.

### Issue

On a large project we had to create the same folder/file structure for every component manually.

Adding a folder `/ComponentName` to a specific folder, within our project, with the files `index.ts`, `ComponentName.tsx` and `ComponentName.scss`.

### Solution

Node script that takes the full path to desired folder and the desired component name. Creates the folder and generates files inside based on the supply named. Files are generated based on a predefined structure from templates.

Say we have a `components` folder within our project and we execute our script to create a `Input` component. This would result in the following structure.

```
├── src
│   └── components
|       └── Input
│           ├── index.ts
│           ├── Input.tsx
│           └── Input.scss
```

### Guide

To use the script run

```
npm run start ${folder} ${componentName}
```

example:

```
npm run start C:/Users/Chris/Documents/instagram/src/components/ Input
```

Keep in mind that the folder path must be complete with either a `/` or `\` in the end, dependant on your OS.

You can easily add more templates or adjust them to your purpose. They do not have to be TypeScript specific. Update the extentions array in the `index` file if you need more files.

```javascript
const extensions = [".ts", ".tsx", ".scss"];
```

If you want the entry file to have the same name as the rest of the generated files, just remove the ternary operator from the `createFile` utility.

```javascript
`${path}${extension === ".ts" ? "index" : name}${extension}`,
```

You could even add more cases to have a broader array of file naming based on different parameters.
