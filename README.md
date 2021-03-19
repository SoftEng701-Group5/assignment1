# SOFTENG701 Group5 - Assignment1
| CI                  | Status   |
| ------------------- | -------- |
| Tests               | Disabled |
| ESLint and Prettier |  [![ESLint and Prettier](https://github.com/SoftEng701-Group5/assignment1/actions/workflows/eslint_and_prettier.yml/badge.svg?branch=main)](https://github.com/SoftEng701-Group5/assignment1/actions/workflows/eslint_and_prettier.yml) |
| Build and Deploy    | [![Build and Deploy](https://github.com/SoftEng701-Group5/assignment1/actions/workflows/build_and_deploy.yml/badge.svg?branch=main)](https://github.com/SoftEng701-Group5/assignment1/actions/workflows/build_and_deploy.yml) |

## Workflow

### Setting Up
1) Go to the shared repository, and click the 'Fork' button in the top right corner
2) Click on your username to create your own copy of the shared repository. This is where you will collate your work
3) Open a command prompt window on your computer, and navigate to the directory you want to store the project
4) In your forked repository, click the green 'Code' button, and copy the github url in it
5) In your command prompt, execute `git clone [copied-url]`. This should download your forked repository
6) Run the command `cd assignment1` to go into the assignment folder
7) Run the command `git remote add origin [copied-url]` to make sure your project is linked to your forked repository
8) Go to the shared repository, click the green 'Code' button, and copy the link
9) In your command prompt, run `git remote add upstream [new-copied-url]` to link your project to the shared repository
10) Run `npm install` to make sure your project is up to date

### Issues
Every new piece of work should be based on an issue. Your group should make a collection of issues, each being small enough for one dev to pick up and work on. An issue should describe a single piece of work, and should be associated with a 'label' to denote what kind of work the issue includes, e.g. 'Bugfix' for bug fixes or 'Enhancement' for new features.

### Working With Branches
Note: The naming convention for a feature branch is feature-[feature-name]. E.g. "feature-welcome-page"

Make a branch:
1) If you are making a new feature branch, run `git checkout main` to switch to the main branch. Otherwise, switch onto the feature branch your are working off
2) Run `git pull upstream main` to make sure your branch is up to date
3) Run `git branch [branch-name]` to create the branch
4) Run `git checkout [branch-name]` to switch to the branch

Committing: Always commit to origin, not to upstream!
1) Run `git add .` to add all your modified files
2) Run `git commit -m "Type your commit message"` to make the commit
3) Run `git push origin` to push your changes onto your forked repository

### Merging Your Changes
Everytime you want to update the shared repository with your changes, you need to make a Pull Request (PR). This is a formal merge request that allows other team members to review your code before it's pushed onto the shared repository.

First, make sure your code is up-to-date with the shared repository
1) Run `git pull upstream main` to sync your branch with the master branch
2) Run `git pull upstream feature-[your-branch]` to sync your local branch with the shared feature branch. This makes sure that any other work on the feature, e.g. by other group members, is included with your work.

Groupwork Features: If you are working in your group on a feature, and need to give your group access to your work, without pushing it to main 
1) First, make sure you have a feature branch on the shared repository. Go into the repository, select on the branches dropdown, and type the name of the feature branch you have been working from. This should be named 'feature-[something]'
2) If no branches show up, click 'Create branch: [branch-name]'
3) Go to your forked repository, and onto the branch that you want push
4) Click on 'Pull Request' to open the PR
5) Make sure that 'base Repository' is set to 'SoftEng701-Group5/assignment', 'base' is set to your feature branch name, 'head repository' is set to your forked repo, and 'head' is set to your feature branch that you're pushing
6) Write a short descriptive title for the PR to summarise your changes. Use the comment box to describe what you have changed, and any decisions you had to make
7) On the right-hand side, select 2 'Reviewers' to review your PR, and give it a label
8) Click 'Create pull request'

Independent Features & Bugfixes: Can go straight onto upstream/main
- If you have a piece of finished work that you need to give the rest of the team access to, you can set the base branch to 'main'
- The rest of the PR process should be kept the same

With your PR open, you should wait for 2 approvals on your pull request. Your reviewers may ask you to change some of the code. If you need to make changes, you can make them and and push them to your origin branch. They will then appear in the pull request.

Most PRs should be associated with an issue. To link an issue and a PR, go to the 'issues' tab, select the relevant issue, click on 'Linked pull requests' in the lower-right of the page, and select the PR you just created. When your PR is merged, the issue will be automatically closed.

When you get 2 approvals, make sure that the green merge button has 'Squash and Merge' selected, and then you can merge your PR.

### Releases
For group-based features, you should collect the work on a feature branch. When the work is done, you can make a PR from upstream/feature-[your-feature] to upstream/main. The rest of the PR process should be kept the same.
