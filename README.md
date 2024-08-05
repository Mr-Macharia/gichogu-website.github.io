# Web Development Project - Git Branching Guide (Part 1)

## Introduction

Welcome to our web development project! This README provides an overview of our Git branching strategy and workflow for the HTML, CSS, and JavaScript stages of our project.

## Project Structure

Our project uses three main branches:

- `HTML`: For all HTML-related development
- `CSS`: For all CSS styling
- `JavaScript`: For all JavaScript functionality

## Getting Started

1. Clone the repository:
git clone [repository-url]

2. Navigate to the project directory:
cd path/to/your/project

3. Check out your assigned branch:
git checkout [HTML/CSS/JavaScript]

4. Verify you're on the correct branch:
git branch

## Making Changes

1. Make your changes in VS Code or your preferred editor.
2. Stage your changes:
git add .

4. Commit your changes:
git commit -m "Your descriptive commit message"

6. Push your changes:
git push origin [your-branch-name]

## Staying Updated

1. Fetch the latest changes:
git fetch origin

3. Pull the latest changes:
git pull origin [your-branch-name]

## Best Practices

- Always check your current branch before making changes
- Comment your code thoroughly
- Pull changes regularly
- Never work directly on the main branch

## Troubleshooting

If you encounter issues:
- Use `git status` to check your working directory
- Use `git log` to view commit history
- Contact a team lead if you encounter merge conflicts

For more detailed information, refer to the full Git Branching Guide document in the project repository.

Happy coding!



Web Development Project - Portfolio Website (Part 2)
Project Overview
This part of the project involves the implementation of a responsive portfolio website with the following key features:

Dark mode toggle
Animated headline
Smooth scrolling navigation
Project showcase
Skills and technology display
Contact form
Social media links

HTML Structure
The index.html file defines the structure of the portfolio website:
Header with navigation links and dark mode toggle
Main sections:
Headline with profile image and introduction
Projects showcase
About me section with skills
Contact form
Footer with social media links

CSS Styling
The styles.css file contains the following key styling features:
Responsive design using flexbox and grid layouts
Custom color scheme with CSS variables for easy theming
Dark mode styles
Animated hover effects for projects and buttons
Custom styling for form elements
Social media icon styling with hover effects

JavaScript Functionality
The scripts.js file implements the following interactive features:
Dark Mode Toggle:
Switches between light and dark themes
Saves user preference in local storage
Animated Headline:
Types out the headline text character by character
Smooth Scrolling:
Implements smooth scrolling for navigation links
Contact Form Handling:
Prevents default form submission
Displays a thank you message and resets the form



Key Components

Project Cards:
Display project images with overlaid descriptions
Hover effects to reveal project details

Skills Cards:
Showcase different skill categories (Languages, Frameworks, Skills)
Distinct styling for each category


Social Media Icons:
Custom-styled icons with hover effects and tooltips


Responsive Design
The website is designed to be responsive, with specific media queries for smaller screens:

Adjusts layout for mobile devices
Resizes and repositions elements for better mobile viewing


This implementation provides a solid foundation for a modern, responsive portfolio website with key features like dark mode and smooth navigation.

