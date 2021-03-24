# Contributing to Mello

:tada: Thanks for contributing to the project! :tada:

The following is a guide for contributing to Mello. These are guidelines, not rules, so use your best judgement! Suggestions for changes are welcome in the form of a pull request.

## Table Of Contents
### [Code of Conduct](#code-of-conduct)

### [Contributing to the Project](#contributing-to-the-project)
 * [Reporting Bugs](#reporting-bugs)
 * [Suggesting Enhancements](#suggesting-enhancements)
 * [Pull Requests](#pull-requests)

### [Project Resources](#project-resources)
 * [Adding Background Images](#adding-background-images)
 * [Adding SVG Images](#adding-svg-images)

### [Styleguides](#styleguides)
 * [Naming Conventions](#naming-conventions)
 * [BEM Naming for CSS](#bem-naming-for-css)
 * [File Structure](#file-structure)
 * [Git Commit Messages](#git-commit-messages)

### [Acknowledgements](#acknowledgements)

## Code of Conduct
This project and everyone participating in it is governed by the [Mello Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Contributing to The Project
### Reporting Bugs
Bugs are tracked through GitHub issues, to report a bug, create an issue and provide the following information:
* A Description of the Bug.
* Steps to reproduce the bug.
* Any necessary additional information.

Bugs should be appropriately labelled as such.
### Suggesting Enhancements
Enhancements are tracked through GitHub issues, to suggest an enhancement, create an issue and provide the following information:
* Provide a clear and informative title to identify the suggestion.
* Provide a detailed description of the suggested enhancement.
* Explain why this enhancment would be useful to most Mello users.

Enhancements should be appropriately labelled as such.
### Pull Requests

## Project Resources
### Adding SVG Images
### Adding Background Images
* Navigate to https://undraw.co/illustrations 
* In the top right hand corner, there is a colour box drop down. Open this drop down and change the colour sceme to #135EF2. This is also labled as the primary colour in the variables.scss under stylesheets. 
* Now you can search and explore the images before downloading as an SVG and adding to the project. 

## Styleguides
### Naming Conventions
Names of project files should:
* Be described in three or less words.
* Include, if necessary, the subgroup name.
* Names of components should be in PascalCase and end in .jsx.
* Names of function files should be in camelCase and end in .js.
* Names of scss files should also be in camelCase.
### BEM Naming for CSS
Mello uses the BEM Naming structure, which aims to keep CSS codebases structured with a consistent naming convention.

*For more information, see https://yandex.com/dev/bem/*
### File Structure
Project files should be:
* Assets, Components, Pages, Stylesheets, and other project elements placed in their respective folders.
* Components placed in a labelled subfolder (See [Naming Conventions](#naming-conventions)).
* SCSS files should mirror component file structure.
### Git Commit Messages
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
## Acknowledgements
* This CONTRIBUTING.md was based on [The Atom CONTRIBUTING.md](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
