---

# Git Branching Guide for Web Development Project

Welcome to the Git branching guide for our web development project. This document is designed to help you understand how to use Git branches efficiently as we work through the HTML, CSS, and JavaScript stages of our project. This guide will cover everything you need to know about working with branches, making commits, pulling changes, and ensuring smooth collaboration. 

## Table of Contents

1. [Introduction to Git Branches](#introduction-to-git-branches)
2. [Setting Up Your Branch](#setting-up-your-branch)
3. [Making Changes and Committing](#making-changes-and-committing)
4. [Pulling Changes from the Remote Branch](#pulling-changes-from-the-remote-branch)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

## Introduction to Git Branches

### What is a Git Branch?

A Git branch is a separate line of development. Think of it as a way to work on a particular feature or section of your project without affecting the main codebase. In our project, we have three main branches:
- **HTML**: For all HTML related development.
- **CSS**: For all CSS styling.
- **JavaScript**: For all JavaScript functionality.

### Why Use Branches?

Branches allow multiple developers to work on different parts of the project simultaneously without interfering with each other’s work. They also make it easy to manage changes and ensure that our code remains organized and conflict-free.

## Setting Up Your Branch

Before you start working, ensure that you are on the correct branch. Here’s how you can set up your branch:

### Step 1: Navigate to Your Project Directory

Open Git Bash and navigate to your project directory using the `cd` command.

```bash
cd path/to/your/project
```

### Step 2: Check Out Your Branch

Switch to your assigned branch using the `git checkout` command. 

For the HTML team:
```bash
git checkout HTML
```

For the CSS team:
```bash
git checkout CSS
```

For the JavaScript team:
```bash
git checkout JavaScript
```

### Step 3: Verify Your Branch

Use the `git branch` command to verify that you are on the correct branch.

```bash
git branch
```

The current branch will be highlighted with an asterisk (*).

## Making Changes and Committing

Once you are on the correct branch, you can start making changes to the code.

### Step 1: Make Your Changes

Open your project in VS Code and make the necessary changes. Remember to comment your code to explain what you are doing. This helps others understand your work and makes collaboration smoother.

### Step 2: Stage Your Changes

After making changes, you need to stage them for commit using the `git add` command.

```bash
git add .
```

### Step 3: Commit Your Changes

Commit your changes with a descriptive message using the `git commit` command.

```bash
git commit -m "Your descriptive commit message"
```

### Step 4: Push Your Changes

Push your changes to the remote repository using the `git push` command.

```bash
git push origin your-branch-name
```

Replace `your-branch-name` with the name of your current branch (HTML, CSS, or JavaScript).

## Pulling Changes from the Remote Branch

It’s important to keep your local branch up to date with the remote branch. Here’s how you can pull the latest changes:

### Step 1: Fetch the Latest Changes

Use the `git fetch` command to fetch the latest changes from the remote repository.

```bash
git fetch origin
```

### Step 2: Pull the Latest Changes

Use the `git pull` command to pull the latest changes into your local branch.

```bash
git pull origin your-branch-name
```

This ensures that your local branch is up to date with the latest changes made by others.

## Best Practices

### Always Check Your Branch

Before making any changes, always check that you are on the correct branch using `git branch`.

### Comment Your Code

Make sure to comment your code. This helps others understand what you have done and why. It also makes it easier for you to remember what you did if you need to revisit your work later.

### Regularly Pull Changes

Regularly pull changes from the remote branch to ensure that your local branch is up to date. This helps prevent conflicts and ensures that everyone is working with the latest version of the code.

### Do Not Work on the Main Branch

Always make sure you are not on the main branch when working on your tasks. The main branch should remain clean and stable. All development work should be done on the respective feature branches (HTML, CSS, JavaScript).

## Troubleshooting

### Common Issues

- **Accidentally Working on the Main Branch**: If you find yourself on the main branch, switch to the correct branch immediately using `git checkout`.
- **Merge Conflicts**: While we aim to avoid merge conflicts, if they do occur, seek help from a team lead.

### Useful Commands

- `git status`: Always use this command to check the status of your working directory and see what changes need to be committed.
- `git log`: Use this command to view the commit history and understand what changes have been made recently.

## Conclusion

By following this guide, you will be able to work effectively with Git branches and collaborate smoothly with your team. Remember to communicate regularly, pull changes often, and comment your code. Happy coding!

---
