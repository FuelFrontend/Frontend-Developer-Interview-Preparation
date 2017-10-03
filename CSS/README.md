# CSS

> Contains basic and advanced questions

#### Questions

- [x] 01. What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
  
  > - Resetting: Remove all the native styles provided by browsers
  > - Normalizing: Make the browser styles consistent [more...](http://nicolasgallagher.com/about-normalize-css/)

- [x] 02. Describe `z-index` and how stacking context is formed.
  
  > `z-index` tells how elements should be stacked in a screen. Stacking context can be formed in several situations, but most famously, by a root element and positioned elements. In each stacking context, `z-index` will be calculated separately for its children and will stack the children in ascending order.

- [x] 03. Can you tell me some latest css features
  
  > Grid, Variables, Flexbox 

- [x] 04. Describe Floats and how they work
  
  > There are left, right and none for float. Each value indicates how an element should float. When float is set, each element will get out of its normal flow and will be shifted to the specified direction, until it gets its container or another floated element.
  
- [x] 05. What are the various clearing techniques and which is appropriate for what context?
  
  > using `display: flex`, using `height: auto` & `overflow:hidden`, using clearfix method

- [x] 06. `display:none` vs `visibility:hidden`
  
  > - `display:none` means that the element will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between other tags.
  > - `visibility:hidden` means that unlike `display:none`, the element is not visible, but space is allocated for it on the page. The element is rendered, it just isn't seen on the page.

- [x] 07. Describe `inline`, `inline-block`, and `block` display elements
  
  > - Inline Elements: don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are `<span>` , `<strong>`, and `<img>` tags.
  > - Inline-block Elements: are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare `display: inline-block` in your CSS code.
  > - Block Elements: always starts on a new line, and fills up the horizontal space left and right on the web page. You can add margins and padding on all four sides of any block element — top, right, left, and bottom. Some examples of block elements are `<div>` and `<p>` tags

- [x] 08. Explain CSS sprites, and how you would implement them on a page or site.
  
  > - CSS sprite is combining multiple images into a merged one image and use CSS to render each of them properly for each element. It's usually implemented using `background: url(...) x-axis y-axis;`, or both `background-image` and `background-position`. This technique saves on multiple HTTP requests but can be a pain to compile, as any changes to the sprite image will need to have the CSS updated with any new positions.
  > - With HTTP2 though, having multiple images loaded is no longer much of an issue.

- [x] 09. What is the difference between classes and IDs in CSS?
  
  > - ids are unique: Each element can have only one id, Each page can have only one element with that id
  > - classes are NOT unique: You can use the same class on multiple elements, You can use multiple classes on the same element.
  > Javascript cares: JavaScript people are already probably more in tune with the differences between classes and ids. JavaScript depends on there being only one page element with any particular id, or else the commonly used `getElementById` function couldn't be depended on.

- [x] 10. Describe BFC(Block Formatting Context) and how it works.
  
  > BFC is a part of rendering a webpage. It's used to determine from which positioning and clearing should be done. The context is created by several ways, but the most famously, by a root element, float, positioned, display, etc.,.

- [x] 11. What are your favorite image replacement techniques and which do you use when?
  
  > CSS image replacement is a technique of replacing a text element (usually a header tag like an `<h1>`) with an image (often a logo). It has its origins in the time before web fonts and SVG [more...](https://css-tricks.com/the-image-replacement-museum/)

- [x] 12. How would you approach fixing browser-specific styling issues?
  
  > With Use a separate stylesheet that only loads when that specific browser is being used. Thankfully, the days of IE specific stylesheets are almost [gone](https://css-tricks.com/how-to-create-an-ie-only-stylesheet/).

- [x] 13. How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?
  
  > Polyfills or graceful degradation using library like [modernizr](https://modernizr.com/)

- [x] 14. What are the different ways to visually hide content (and make it available only for screen readers)?
  
  > - You can use `visibility: hidden;` or `display:none`
  > - You can set the dimension `width:0; height:0;`
  > - Using `text-indent: -10000px;` to hide the content off display
  > - Using `position: absolute` & `clip: rect(1px, 1px, 1px, 1px)`

- [x] 15. Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?
  
  > Yes, translate do not cause the browser to trigger [repaint and layout](https://developers.google.com/web/fundamentals/performance/rendering/) and instead only acts on the compositor. I tend to only ever use translate/transform nowadays, and only using absolute positioning for elements initial position. I'll then translate it from that initial position for better performance.

- [x] 16. What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

  > Mostly bootstrap, foundation. With foundation, it's easy to only use components that you need by importing the SASS components that you need. Even if you use only components you use, its comes with an extra code that you don't want. 
  > - If you want to create quick prototypes - Yes to frameworks
  > - If you are developing a bigger application with perf considerations - better use custom code instead of frameworks

- [x] 17. Describe relative, fixed, absolute and statically positioned element?

  > - Static - The default behavior of an element.
  > - Relative - Renders the element like it normally would, however you're able to position the item (top, bottom, left, right) from that starting position.
  > - Absolute - Takes the element out of the flow of the document allowing you to position the element within the context of it's parent.
  > - Fixed - Like absolute positioning, but the element will move with the screen.

- [x] 18. What's the difference between `inline` and `inline-block`?
  
  > - Inline Elements: don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are `<span>` , `<strong>`, and `<img>` tags.
  > - Inline-block Elements: are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare `display: inline-block` in your CSS code.
  > - [Visual Representation](https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block)

- [x] 19. List as many values for the display property that you can remember.
  
  > `none`, `block`, `inline`, `inline-block`, `table`, `table-cell`, `flex`, `static`, `inherit` 

- [x] 20. What are the advantages/disadvantages of using CSS preprocessors? Describe what you like and dislike about the CSS preprocessors you have used.

  > - Pros: Nested tags, Mixins, Importing other styles in, Modularity
  > - Cons: Nested tags are hard to read after a certain point, Have to use build tools to compile, Easy to abuse (@extend in sass)

- [x] 21. Considerations for printing webpages?
  
  > - Specify a Print Style Sheet `<link rel="stylesheet" href="print.css" media="print" />`
  > - Hide Extraneous Elements `.navigation, .footer { display: none;}` 
  > - Bump Up Font Sizes and Line-Heights `body { font-size: 120%; line-height: 130%; }`
  > - Move to Serif Fonts `body { font-family: Georgia, "Times New Roman", Times, serif; }`
  > - Display the destination of links & make them standout with different color `a:link:after { content: " (" attr(href) ") "; }`
  > - Enlarge content area `#content { width: 100%; margin: 0; float: none; }`

- [x] 22. Explain how a browser determines what elements match a CSS selector.

  > - CSS Selectors are matched by browser engines from right to left consider `#menu ul li a { color: #00f; }` The browser first checks for `a`, then `li`, then `ul`, and then `#menu`.
  > - Check matching elements for the key(right-most) selector
  > - Check if the elements are matching parents for the next selectors

- [x] 23. How would you implement a web design company that uses non-standard fonts?
  
  > - Google web font is a best alternative to non-standard fonts
  > - If it's a non-standard and custom font then we can use `@font-face` to render it.

- [x] 24. What does `* { box-sizing: border-box; }` do? What are its advantages?

  > - Apply a natural box layout model to all elements. 
  > - If you set an element width to 300px and if you apply 10px padding then the rendered element on browser would take 300 + leftmargin 20 + rightmargin 20 = total of 340px in width. If you give `box-sizing: border-box` the padding is applied right inside your box model and rendered width would be 300px irrespective of padding / border used. Also the content section in the element shrinks in order to not take more the 300px width.
  ```css
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ```

- [x] 25. How is responsive design different from adaptive design?
  > - Responsive: There is one basic layout, and it changes responsively to screen changes
  > - Adaptive: For each possible screen size, there is a distinct layout.

- [x] 26. Have you ever worked with retina graphics? If so, when and what techniques did you use?
 > - Images/Icons are very important things to handle in retina displays as the pixel density is higher in retina display than normal. There are few techniques we can use 
 > - Use font icons instead of image icons
 > - Use SVG instead of bitmap images
 > - Using css media queries to supply hi-res images
```css
@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {
  .image {
    background: url(/path/to/my/highreslogo.png) no-repeat;
    background-size: 200px 400px;
  }
}
```

- [x] 27. The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?

  > CSS priority is determined by [specificity and inheritance](https://www.smashingmagazine.com/2010/04/css-specificity-and-inheritance/).
  > - Specificity: ID > class, psuedo-class > element, psuedo-element
  > - Inheritence: specified value → computed value → used value → actual value

- [x] 28. Describe pseudo-elements and discuss what they are used for.

  > - It's to style a part of an element, like `::first-letter` or `::before`. They can be used to add a special symbol before a paragraph, change color of first character of a line, etc.
  > - These are appropriately called pseudo "elements" (not selectors) because they don't select any "real" element that exists on the page

- [x] 29. What's HTML5 shim, what's its usage

  > - The HTML5 Shiv enables use of HTML5 sectioning elements in legacy Internet Explorer and provides basic HTML5 styling for Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x.
  > - Pretty much not needed now as most of the browser as on _12 Sep 2017_ supports sectioning elements

- [x] 30. What is Media Queries and why it's used?

  > - The goal of responsive design is creating the right experience for the right device.
  > - With a gazillion different devices on the market, this can be a big task. Media queries helps us achieve our goal of creating right experience for the right device. 
  > - CSS Media queries allow us to target CSS rules based on - for instance - screen size, device-orientation or display-density. This means you can use CSS Media Queries to tweak a CSS for an iPad, printer or create a responsive site.
  > - Media queries are useful when you want to apply CSS styles depending on a device's general type (such as print vs. screen), specific characteristics (such as the width of the browser viewport). With the huge variety of internet-connected devices available today, media queries are a vital tool for building websites and apps that are robust enough to work on whatever hardware your users have.

  > Media quries sample code
  ```css
  /* Print */
  @media print { ... }

  /* Screen with maximum width of 1024px */
  @media screen (max-width: 1024px) { ... }

  /* Screen and Print */
  @media screen, print { ... }
  ```

- [x] 31. CSS Units
  
  > Length is a number followed by a length unit, such as 10px, 2em, etc. Let's see some commonly used units
    > - A) Absolute Length: Absolute CSS length units are not well suited for web design. They are a digital representation of measurements in the physical world. Eg. cm (centimeters), mm (millimeters), in (inches), pc (picas), pt (points), px (pixels)
  >    - **px:** Pixel is relative to the viewing device. For screen display, one CSS pixel typically equals one device pixel (dot) of the display.
  > - B) Relative Lengths
  >   - **em:** Relative to the font-size of the element (Eg. If the font size of the parent element is 30px then the value of 1em will compute to 30px (30 x 1). If we substitute 1em, from our example, with 0.5em, the value will compute to 15px (30 x 0.5))
  >   - **rem:** Relative to font-size of the root element (which is the html element in HTML documents)
  >  - C) Viewport Percentage Lengths
  >    - **vw:** (viewport width) This is the “viewport width” unit. 1vw is equal to 1/100th of the width of the viewport. For example, if the width of the window is 1000px, 1vw will be 10px.
  >    - **vh:** (viewport height) Same as the vw (viewport width) unit only it is based on the viewport height instead. 1vh is equal to 1/100th of the viewport height. For example, if the browser’s height is 900px, 1vh would evaluate to 9px.
  >    - **vmin:** vmin equals to 1/100th of the minimum value between the height and the width of the viewport. In other words, 1/100th of the side with the smallest length. For example, if the dimensions were 1200 x 800, the value would be 8px.
  >    - **vmax:** Similar to vmin, except it equals to 1/100th of the maximum value between the height and the width of the viewport. In other words, 1/100th of the side with the largest length. For example, if the dimensions were 1200 x 800, the value would be 12px.

- [x] 32. Overflow
  
  > - Every single element on a page is a rectangular box. If you don't set the height of a box, the height of that box will grow as large as it needs to be to accommodate the content. But what happens when you do set a specific height or width on a box, and the content inside cannot fit? That is where the CSS overflow property comes in, allowing you to specify how you would like that handled.
  > - There are four values for the overflow property: `visible` (default), `hidden`, `scroll`, and `auto`. There are also sister properties `overflow-y` and `overflow-x`, which enjoy less widespread adoption.

- [x] 33. Pseudo classes

  > - A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, `:hover` can be used to change a button's color when the user hovers over it. Few examples shown below (Full Reference - https://css-tricks.com/pseudo-class-selectors/)
  > - Link related
  >   - `:link` this is essentially the same as a[href].
  >   - `:visited` already been visited by the current browser.
  >   - `:hover` mouse cursor rolls over a link, it's hover state.
  >   - `:active` being clicked on or otherwise activated.
  > - Input
  >   - `:focus` puts cursor on the input field thus making it ready to enter data
  > - Position Based
  >   - `:first-child` Selects the first element within a parent
  >   - `:last-child` Selects the last element within a parent
  >   - `:nth-child()` Selects elements based on a simple provided algebraic expression (e.g. "2n" or "4n-1")

- [x] 34. CSS Selectors
  
  > - CSS selectors define the elements to which a set of CSS rules apply.
  > - **Basic Selectors**
  >    - Element selector (`input`)
  >    - Class selector (`.class-name`)
  >    - ID selector (`#id-name`)
  >    - Universal selector (`*`)
  >    - Attribute selector (`[attr]`, (`[attr~=value]`, (`[attr*=value]`, etc.,)
  > - **Combinators**
  >    - Adjacent sibling combinator (`+`) (Eg.) `h2 + p` will match all `<p>` elements that directly follow an `<h2>`.
  >    - General sibling combinator ('~') (Eg.) `p ~ span` will match all `<span>` elements that follow a `<p>`.
  >    - Child combinator ('>') (Eg.) `ul > li` will match all `<li>` elements that are nested directly inside a `<ul>` element.
  >    - Descendant combinator (' ') (Eg.) `div span` will match all `<span>` elements that are inside a `<div>` element.
  > - **Pseudo-classes**
  >    - Selection of elements based on state information that is not contained in the document tree. (Eg.) `a:visited` will match all `<a>` elements that have been visited by the user.
  > - **Pseudo-elements**
  >    - Represent entities that are not included in HTML. (Eg.) `p::first-line` will match the first line of all `<p>` elements.

- [x] 35. @import

  > - The @import CSS at-rule is used to import style rules from other style sheets / paths
  >   ```css
  >   /* Syntax  */
  >   @import url;
  >   @import url list-of-media-queries;
  >
  >   /* Example */
  >   @import url("fineprint.css") print;
  >   @import 'custom.css';
  >   @import "common.css" screen, projection;
  >   @import url('landscape.css') screen and (orientation:landscape);
  >   ```

- [ ] - Animations
- [ ] - Transitions
- [ ] - Sass, Less
- [ ] - Calc()
- [ ] - Variables in css
- [ ] - currentColor
- [ ] - backface-visibility.
- [ ] - translate
- [ ] - Gradients, Text shadows
- [ ] - Cross browser issues in CSS
- [ ] - Cross browser testing
- [ ] - SVG and its benefits

#### Concepts

- [ ] - Specificity
- [ ] - Box model
- [ ] - Margin collapsing
- [ ] - FOUC (flash of unstyled content)
- [ ] - CSS Methodologies (BEM, OOCSS etc,.)
- [ ] - RWD (Responsive Web Design)

#### Generic Questions

- [x] Have you played around with the new CSS Flexbox or Grid specs?

  > Flexbox is fantastic and I suggest that everyone starts using it. It especially makes it easy to vertically center elements.
  > [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is looking to be amazing. I haven't used it yet, but I'm sure it'll start taking place of some more popular grid frameworks.
  
- [ ] Are you familiar with styling SVG?
- [ ] Have you ever used a grid system, and if so, what do you prefer?
- [ ] Have you used or implemented media queries or mobile specific layouts/CSS?
- [ ] What are some of the "gotchas" for writing efficient CSS?
- [ ] Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
- [ ] - Vertical & Horizontal center (Using tables, positions, flex box etc,.)
- [ ] - How many ways you can style an element using css (inline, external, embedded, imported).


#### Reference:

- [JS Dude](http://thatjsdude.com/interview/css.html)
- [Java Point](http://www.javatpoint.com/css-interview-questions)
- [Skilledup](http://www.skilledup.com/articles/25-css-interview-questions-answers)
- [Tutorials Point](https://www.tutorialspoint.com/css/css_interview_questions.htm)
- [CSS Tricks](https://css-tricks.com/interview-questions-css/)
- [Frontend Developer Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
