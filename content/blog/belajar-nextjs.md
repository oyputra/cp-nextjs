---
title: "Belajar Next.js"
image: "/images/landing5.jpg"
date: "01/03/2025"
author: "admin"
---

## With Tailwind CSS
next/font can be used with Tailwind CSS through a CSS variable.

In the example below, we use the font Inter from next/font/google (you can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter. Then, use inter.variable to add the CSS variable to your HTML document.

## Reusing fonts
Every time you call the `localFont` or Google font function, that font is hosted as one instance in your application. Therefore, if you load the same font function in multiple files, multiple instances of the same font are hosted. In this situation, it is recommended to do the following:

* Call the font loader function in one shared file
* Export it as a constant
* Import the constant in each file where you would like to use this font