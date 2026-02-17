# A.2 CSS Fundamentals

## Key Points to Revise

---
## CSS Selectors

CSS selectors are used to target HTML elements.

- **Element selector** – Targets HTML tags (`div`, `p`)
- **Class selector** – Targets elements with a class (`.box`)
- **ID selector** – Targets a unique element (`#header`)
- **Attribute selector** – Targets elements with specific attributes (`input[type="text"]`)
- **Pseudo-classes** – Define special states (`:hover`, `:focus`, `:nth-child()`)
- **Pseudo-elements** – Style specific parts of elements (`::before`, `::after`)

---

# Specificity and Cascade

- **Cascade** – Rules are applied based on order and importance.
- **Specificity** – Determines which rule wins when styles conflict.
- More specific selectors override less specific ones.

---
## Box Model

The CSS box model consists of:

- **Content** – Actual text or image
- **Padding** – Space inside border
- **Border** – Surrounds padding
- **Margin** – Space outside border

It controls layout

## box sizing

- **content-box** – Default. Width and height include only content.
- **border-box** – Width and height include padding and border.

border-box makes layout easier to control.


### Display Properties

- **block** – Takes full width, starts on new line
- **inline** – Takes only needed width
- **inline-block** – Inline but allows width & height
- **none** – Hides the element

---

### Position Property

- **static** – Default position
- **relative** – Moves relative to original position
- **absolute** – Positioned relative to nearest positioned parent
- **fixed** – Fixed to viewport
- **sticky** – Switches between relative and fixed based on scroll

---

### Flexbox Basics

Flexbox is used for flexible layouts.

- **Flex container** – Parent element with `display: flex`
- **Flex items** – Child elements
- **justify-content** – Aligns items horizontally
- **align-items** – Aligns items vertically

---

### Grid Basics

CSS Grid is used for two-dimensional layouts.

- **grid-template-columns / rows** – Define grid structure
- **grid areas** – Name sections of grid layout

---

### Units

CSS units define size and spacing.

- **px** – Fixed pixel unit
- **%** – Relative to parent
- **em** – Relative to parent font size
- **rem** – Relative to root font size
- **vh** – Viewport height
- **vw** – Viewport width

---

### Responsive Design

Responsive design makes websites work on all screen sizes.

- **Media queries** – Apply styles based on screen size
- **Mobile-first approach** – Design for mobile first, then larger screens

---

### CSS Specificity Calculation

Specificity values:

- **Inline styles** → 1000
- **ID selectors** → 100
- **Class / Attribute / Pseudo-class** → 10
- **Element selectors** → 1

Higher value wins when styles conflict.

## 1. Explain the CSS Box Model with a diagram?

=> The CSS box model consists of content, padding, border, and margin.  
It defines how the total width and height of an element are calculated.

### Diagram

+---------------------------+
|         MARGIN            |
|  +---------------------+  |
|  |       BORDER        |  |
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+

=> Padding

- Space between content and border  
- Increases the size of the box  

Example:

```css
padding: 20px;

=> Border

Surrounds padding and content
border: 5px solid black;

=> Margin

Space outside the border

Creates distance between elements

Example:

margin: 30px;


## 2. What is CSS Specificity and how is it calculated?

=> CSS specificity determines which CSS rule is applied when multiple rules target the same element.  
It is calculated based on inline styles, IDs, classes, and element selectors using a point-based system.

---

### Order of Priority (High → Low)

- `!important`

- Inline styles  
  Example:  
  ```html
  <p style="color: red;">Hello</p>
- ID selectors  

- Class selectors  

- Element selectors  

---

=> Specificity is calculated using this format:

- Inline styles → 1000  
- ID selectors → 100  
- Class / Attribute / Pseudo-class → 10  
- Element / Pseudo-element → 1  

## 3. Difference between Margin and Padding with visual examples

=> Padding is the space inside an element between content and border,  
while margin is the space outside an element that separates it from other elements.

---

### Comparison Table

| Feature            | Margin                          | Padding                         |
|--------------------|----------------------------------|----------------------------------|
| Position           | Outside the border              | Inside the border               |
| Purpose            | Creates space between elements  | Creates space inside element    |
| Background color   | Not affected                    | Affected                        |
| Part of box size   | No                              | Yes                             |

---

### Visual Understanding

## 4. How does position: relative vs absolute work?

=> `position: relative` moves an element relative to its original position  
while keeping it in the normal flow.

=> `position: absolute` removes the element from normal flow and positions it  
relative to the nearest positioned ancestor.

---

### Key Difference

| Feature            | Relative                     | Absolute                         |
|--------------------|------------------------------|----------------------------------|
| Normal flow        | Yes                          | No                               |
| Space reserved     | Yes                          | No                               |
| Moves relative to  | Its original position        | Nearest positioned parent        |
| Used for           | Small adjustments            | Overlays, badges, popups         |

---

### Example

```html
<div class="parent">
  <div class="child">Child</div>
</div>
```css
.parent {
  position: relative;
  width: 300px;
  height: 300px;
  background: lightgray;
}

.child {
  position: absolute;
  top: 20px;
  left: 20px;
}

## 5. What is the difference between display: none and visibility: hidden?

=> `display: none` completely removes the element from the document layout.

=> `visibility: hidden` hides the element but keeps its space in the layout.

---

### Key Differences

| Feature            | display: none          | visibility: hidden     |
|--------------------|------------------------|------------------------|
| Visible            | No                     | No                     |
| Space reserved     | No                     | Yes                    |
| Affects layout     | Yes                    | No                     |
| User interaction   | No                     | No                     |

---

### Example

```css
.box1 {
  display: none;
}

.box2 {
  visibility: hidden;
}

