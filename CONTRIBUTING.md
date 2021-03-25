# Contributing to Mello

:tada: Thanks for contributing to the project! :tada:

The following is a guide for contributing to Mello. These are guidelines, not rules, so use your best judgement! Suggestions for changes are welcome in the form of a pull request.

## Table Of Contents

### [Code of Conduct](#code-of-conduct)

### [Contributing to the Project](#contributing-to-the-project)

- [Issues](#Issues)
- [Working with Branches](#Working-with-branches)
- [Releases](#Releases)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

### [Project Resources](#project-resources)

- [Adding Background Images](#adding-background-images)
- [Adding SVG Icons](#adding-svg-icons)

### [Styleguides](#styleguides)

- [Figma Design](#figma-design)
- [Naming Conventions](#naming-conventions)
- [BEM Naming for CSS](#bem-naming-for-css)
- [File Structure](#file-structure)
- [Git Commit Messages](#git-commit-messages)

### [Acknowledgements](#acknowledgements)

## Code of Conduct

This project and everyone participating in it is governed by the [Mello Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Contributing to The Project

### Issues

Every new piece of work should be based on an issue. Your group should make a collection of issues, each being small enough for one dev to pick up and work on. An issue should describe a single piece of work, and should be associated with a 'label' to denote what kind of work the issue includes, e.g. 'Bugfix' for bug fixes or 'Enhancement' for new features.

### Working With Branches

Note: The naming convention for a feature branch is feature-[feature-name]. E.g. "feature-welcome-page"

Make a branch:

1. If you are making a new feature branch, run `git checkout main` to switch to the main branch. Otherwise, switch onto the feature branch your are working off
2. Run `git pull upstream main` to make sure your branch is up to date
3. Run `git branch [branch-name]` to create the branch
4. Run `git checkout [branch-name]` to switch to the branch

Committing: Always commit to origin, not to upstream!

1. Run `git add .` to add all your modified files
2. Run `git commit -m "Type your commit message"` to make the commit
3. Run `git push origin` to push your changes onto your forked repository

### Merging Your Changes

Everytime you want to update the shared repository with your changes, you need to make a Pull Request (PR). This is a formal merge request that allows other team members to review your code before it's pushed onto the shared repository.

First, make sure your code is up-to-date with the shared repository

1. Run `git pull upstream main` to sync your branch with the master branch
2. Run `git pull upstream feature-[your-branch]` to sync your local branch with the shared feature branch. This makes sure that any other work on the feature, e.g. by other group members, is included with your work.

Groupwork Features: If you are working in your group on a feature, and need to give your group access to your work, without pushing it to main

1. First, make sure you have a feature branch on the shared repository. Go into the repository, select on the branches dropdown, and type the name of the feature branch you have been working from. This should be named 'feature-[something]'
2. If no branches show up, click 'Create branch: [branch-name]'
3. Go to your forked repository, and onto the branch that you want push
4. Click on 'Pull Request' to open the PR
5. Make sure that 'base Repository' is set to 'SoftEng701-Group5/assignment', 'base' is set to your feature branch name, 'head repository' is set to your forked repo, and 'head' is set to your feature branch that you're pushing
6. Write a short descriptive title for the PR to summarise your changes. Use the comment box to describe what you have changed, and any decisions you had to make
7. On the right-hand side, select 2 'Reviewers' to review your PR, and give it a label
8. Click 'Create pull request'

Independent Features & Bugfixes: Can go straight onto upstream/main

- If you have a piece of finished work that you need to give the rest of the team access to, you can set the base branch to 'main'
- The rest of the PR process should be kept the same

With your PR open, you should wait for 2 approvals on your pull request. Your reviewers may ask you to change some of the code. If you need to make changes, you can make them and and push them to your origin branch. They will then appear in the pull request.

Most PRs should be associated with an issue. To link an issue and a PR, go to the 'issues' tab, select the relevant issue, click on 'Linked pull requests' in the lower-right of the page, and select the PR you just created. When your PR is merged, the issue will be automatically closed.

When you get 2 approvals, make sure that the green merge button has 'Squash and Merge' selected, and then you can merge your PR.

### Releases

For group-based features, you should collect the work on a feature branch. When the work is done, you can make a PR from upstream/feature-[your-feature] to upstream/main. The rest of the PR process should be kept the same.

### Reporting Bugs

Bugs are tracked through GitHub issues, to report a bug, create an issue and provide the following information:

- A Description of the Bug.
- Steps to reproduce the bug.
- Any necessary additional information.

Bugs should be appropriately labelled as such.

### Suggesting Enhancements

Enhancements are tracked through GitHub issues, to suggest an enhancement, create an issue and provide the following information:

- Provide a clear and informative title to identify the suggestion.
- Provide a detailed description of the suggested enhancement.
- Explain why this enhancment would be useful to most Mello users.

Enhancements should be appropriately labelled as such.

## Project Resources

### Adding SVG Icons

- Navigate to https://www.svgrepo.com and click 'Download SVG File' on the icon you want.
- Create a new component file in the project in the icons package, using the naming convention '[Icon Name]Icon.jsx'.
- Open the .svg in a text editor and copy all the text between and including the \<svg>\</svg> tags.
- Paste this text into the return of the component function.
- Some extra data in the <svg> tag may need to be deleted for it to display correctly, e.g. xmlns:xlink="", xml:space="".
- Add style={{fill: "white"}} to the \<svg> tag to match the other white icons if necessary.<br/><br/>
  To use this new icon in the app, locate componentFunctions.jsx
- Add an import statement and the icon component to the map const in componentFunctions.jsx
- The icon can now be used in components such as IconButton.jsx by passing the icon name in as a prop to said component.

### Adding Background Images

- Navigate to https://undraw.co/illustrations
- In the top right hand corner, there is a colour box drop down. Open this drop down and change the colour sceme to #135EF2. This is also labled as the primary colour in the variables.scss under stylesheets.
- Now you can search and explore the images before downloading as an SVG and adding to the project.

## Styleguides

### Figma Design

[Figma](https://www.figma.com/file/j01UWGTaIPsrbdHJjs7Htp/701-3rd-iteration?node-id=0%3A1)

### Naming Conventions

Names of project files should:

- Be described in three or less words.
- Include, if necessary, the subgroup name.
- Names of components should be in PascalCase and end in .jsx.
- Names of function files should be in camelCase and end in .js.
- Names of scss files should also be in camelCase.

### BEM Naming for CSS

Mello uses the BEM Naming structure, which aims to keep CSS codebases structured with a consistent naming convention.
_For more information, see https://yandex.com/dev/bem/_

### File Structure

Project files should be:

- Assets, Components, Pages, Stylesheets, and other project elements placed in their respective folders.
- Components placed in a labelled subfolder (See [Naming Conventions](#naming-conventions)).
- SCSS files should mirror component file structure.

### Styling Components with CSS

Components should each have their own SCSS file if they require styling. To link a created SCSS file with a component:

- @import the .scss file in index.scss
- Give the HTML in the component a ClassName and reference this ClassName in the SCSS file.
- Variables from variables.scss should be used where possible to ensure consistent styling.

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Acknowledgements

- This CONTRIBUTING.md was based on [The Atom CONTRIBUTING.md](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
