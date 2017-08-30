# CSS

> Contains basic and advanced questions

#### Questions

- [ ] 01. What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
  > - Resetting: Remove all the native styles provided by browsers
  > - Normalizing: Make the browser styles consistent [...](http://nicolasgallagher.com/about-normalize-css/)
- [ ] 02. Describe `z-index` and how stacking context is formed.
  > `z-index` tells how elements should be stacked in a screen. Stacking context can be formed in several situations, but most famously, by a root element and positioned elements. In each stacking context, `z-index` will be calculated separately for its children and will stack the children in ascending order.
- [ ] 03. Can you tell me some latest css features
  > Grid, Variables, Flexbox 
- [ ] 04. Describe Floats and how they work
  > There are left, right and none for float. Each value indicates how an element should float. When float is set, each element will get out of its normal flow and will be shifted to the specified direction, until it gets its container or another floated element.
- [ ] 05. What are the various clearing techniques and which is appropriate for what context?
  > using `display: flex`, using `height: auto` & `overflow:hidden`, using clearfix method
- [ ] 06. `display` vs `visibility`
  > - `display:none` means that the element will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between other tags.
  > - `visibility:hidden` means that unlike `display:none`, the element is not visible, but space is allocated for it on the page. The element is rendered, it just isn't seen on the page.
- [ ] 07. Describe `inline`, `inline-block`, and `block` display elements
  > Inline Elements: don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are `<span>` , `<strong>`, and `<img>` tags.
  > Inline-block Elements: are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare `display: inline-block` in your CSS code.
  > Block Elements: always starts on a new line, and fills up the horizontal space left and right on the web page. You can add margins and padding on all four sides of any block element — top, right, left, and bottom. Some examples of block elements are `<div>` and `<p>` tags
- [ ] 08. Explain CSS sprites, and how you would implement them on a page or site.
  > CSS sprite is combining multiple images into a merged one image and use CSS to render each of them properly for each element. It's usually implemented using `background: url(...) x-axis y-axis;`, or both `background-image` and `background-position`.
- [ ] 09. What is the difference between classes and IDs in CSS?
  > - ids are unique: Each element can have only one id, Each page can have only one element with that id
  > - classes are NOT unique: You can use the same class on multiple elements, You can use multiple classes on the same element.
  > Javascript cares: JavaScript people are already probably more in tune with the differences between classes and ids. JavaScript depends on there being only one page element with any particular id, or else the commonly used `getElementById` function couldn't be depended on.
- [ ] 10. Describe BFC(Block Formatting Context) and how it works.
  > BFC is a part of rendering a webpage. It's used to determine from which positioning and clearing should be done. The context is created by several ways, but the most famously, by a root element, float, positioned, display, rtc.,.
- [ ] 11. What are your favourite image replacement techniques and which do you use when?
  > CSS image replacement is a technique of replacing a text element (usually a header tag like an `<h1>`) with an image (often a logo). It has its origins in the time before web fonts and SVG [...](https://css-tricks.com/the-image-replacement-museum/)
- [ ] How would you approach fixing browser-specific styling issues?
- [ ] How do you serve your pages for feature-constrained browsers?
      - What techniques/processes do you use?
- [ ] What are the different ways to visually hide content (and make it available only for screen readers)?
- [ ] Have you ever used a grid system, and if so, what do you prefer?
- [ ] Have you used or implemented media queries or mobile specific layouts/CSS?
- [ ] Are you familiar with styling SVG?
- [ ] How do you optimize your webpages for print?
- [ ] What are some of the "gotchas" for writing efficient CSS?
- [ ] What are the advantages/disadvantages of using CSS preprocessors?
      - Describe what you like and dislike about the CSS preprocessors you have used.
- [ ] How would you implement a web design comp that uses non-standard fonts?
- [ ] Explain how a browser determines what elements match a CSS selector.
- [ ] Describe pseudo-elements and discuss what they are used for.
- [ ] Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
- [ ] What does `* { box-sizing: border-box; }` do? What are its advantages?
- [ ] List as many values for the display property that you can remember.
- [ ] What's the difference between `inline` and `inline-block`?
- [ ] What's the difference between a relative, fixed, absolute and statically positioned element?
- [ ] The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?
- [ ] What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
- [ ] Have you played around with the new CSS Flexbox or Grid specs?
- [ ] How is responsive design different from adaptive design?
- [ ] Have you ever worked with retina graphics? If so, when and what techniques did you use?
- [ ] Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?
- [ ] - Margin collapsing
- [ ] - Units such as em, vh, vh, vmin, vmax etc..
- [ ] - Overflow
- [ ] - media query
- [ ] - Pseudo classes
- [ ] - Different selectors in CSS (class, id, attributes etc,.)
- [ ] - Child selectors (dependent etc,)
- [ ] - Vertical & Horizontal center (Using tables, positions, flex box etc,.)
- [ ] - @import
- [ ] - Specificity
- [ ] - Animations
- [ ] - Transitions
- [ ] - Sass, Less
- [ ] - Box-sizing (border-box, content-box)
- [ ] - Calc()
- [ ] - Variables in css
- [ ] - currentColor
- [ ] - backface-visibility.
- [ ] - How many ways you can style an element using css (inline, external, embedded, imported).
- [ ] - FOUC (flash of unstyled content)
- [ ] - translate
- [ ] - CSS Methodologies (BEM, OOCSS etc,.)
- [ ] - Gradients, Text shadows
- [ ] - HTML5 shim
- [ ] - Cross browser issues in CSS
- [ ] - Cross browser testing
- [ ] - SVG and its benifits
- [ ] - Print stylesheets

#### Reference:

- [JS Dude](http://thatjsdude.com/interview/css.html)
- [Java Point](http://www.javatpoint.com/css-interview-questions)
- [Skilledup](http://www.skilledup.com/articles/25-css-interview-questions-answers)
- [Tutorials Point](https://www.tutorialspoint.com/css/css_interview_questions.htm)
- [CSS Tricks](https://css-tricks.com/interview-questions-css/)
- [Frontend Developer Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
