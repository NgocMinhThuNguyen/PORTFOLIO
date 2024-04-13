# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)
- **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [GitHub](https://github.com/NgocMinhThuNguyen/PORTFOLIO)
- Live Site URL: [Live Site](https://ngocminhthunguyen.github.io/PORTFOLIO/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascipt

### What I learned

For this challenge, I learned about one of a very common css class `.sr-only`:

```css
.sr-only {
  display: none;
  position: absolute; 
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px; 
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

I also learn new css property for underline, the `text-underline-offset` allows to set the space between the text and the underline, no need to use a div or border and padding. However, when the `text-underline-offset` is not a part of that text box content, it may overlay on other content

```css
.underline {
  text-decoration: underline;
  text-decoration-color: hsl(var(--clr-green));
  text-decoration-thickness: 2px;
  text-underline-offset: 1rem;
}
```

### Continued development

Hook the form up so it sends and stores the user's enquiry 

## Author

- Website - [Thu Nguyen](https://github.com/NgocMinhThuNguyen)
- Frontend Mentor - [@Thu Nguyen](https://www.frontendmentor.io/profile/NgocMinhThuNguyen)
