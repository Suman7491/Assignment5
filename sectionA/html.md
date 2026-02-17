# Section A - Revision Notes  
## HTML & CSS Fundamentals

---

# A.1 HTML Fundamentals

## Key Points to Revise

---

### HTML Document Structure

- `<!DOCTYPE>` – Declares the HTML version and ensures standards mode.
- `<html>` – Root element of the HTML document.
- `<head>` – Contains metadata, title, links to CSS, etc.
- `<body>` – Contains the visible content of the webpage.

This structure forms the foundation of every HTML page.

---

### Meta Tags

Meta tags provide information about the webpage to browsers and search engines.

- `charset` – Defines character encoding (usually UTF-8).
- `viewport` – Makes the page responsive on mobile devices.
- `description` – Short summary for search engines.
- `keywords` – Keywords related to the page content.

Meta tags improve SEO and responsiveness.

---

### Semantic HTML5 Elements

Semantic elements clearly describe their meaning.

- `<header>` – Top section of a page.
- `<nav>` – Navigation links.
- `<main>` – Main content of the page.
- `<section>` – Group of related content.
- `<article>` – Independent content (blog, news).
- `<aside>` – Sidebar content.
- `<footer>` – Bottom section of a page.

They improve SEO, accessibility, and code readability.

---

### Forms

Forms are used to collect user input.

Important parts:
- Input types (text, email, password, number, date, etc.)
- `<label>` for accessibility
- Validation attributes:
  - `required` – Makes field mandatory
  - `pattern` – Defines input format
  - `min`, `max` – Set value limits

Forms should be user-friendly and accessible.

---

### Form Attributes

- `action` – URL where form data is sent.
- `method` – HTTP method (GET or POST).
- `name` – Identifies form data.
- `id` – Unique identifier.
- `placeholder` – Hint text inside input.

These control how form data is handled.

---

### Tables

Tables display structured data in rows and columns.

- `<table>` – Main table element
- `<thead>` – Table header section
- `<tbody>` – Table body
- `<tfoot>` – Table footer
- `<tr>` – Table row
- `<th>` – Header cell
- `<td>` – Data cell

Used for structured data like reports or schedules.

---

### Lists

Lists organize content clearly.

- `<ul>` – Unordered list (bullets)
- `<ol>` – Ordered list (numbers)
- `<li>` – List item
- `<dl>` – Description list
- `<dt>` – Term
- `<dd>` – Description

Lists improve readability.

---

### Media Elements

Used to display images, audio, and video.

- `<img>` – Displays image
  - `src` – Image path
  - `alt` – Alternative text (important for accessibility)
- `<audio>` – Adds audio
- `<video>` – Adds video

Media makes websites more interactive.

---

### Links and Navigation

- `<a>` – Anchor tag used to create links
  - `href` – Destination URL
  - `target` – Where to open link (`_blank`, `_self`)
  - `rel` – Relationship (security purposes)

Links connect web pages together.

---

### Attributes

- `class` – Used for styling multiple elements.
- `id` – Unique identifier for one element.
- `data-*` – Custom attributes used to store extra data for JavaScript.

Attributes provide additional information about elements.

---

### Accessibility Basics

Accessibility ensures websites are usable by everyone.

- ARIA attributes – Improve support for screen readers.
- `alt` text – Describes images for visually impaired users.
- Semantic structure – Helps assistive technologies understand content.

Accessible websites improve user experience and inclusivity.


## 1. What is the purpose of DOCTYPE and why is it important?

`<!DOCTYPE>` is a declaration placed at the top of an HTML document.

It tells the browser:
> "This document is written in HTML5."

### Why It Is Important

- Tells the browser which HTML version is used
- Forces the browser to use **Standards Mode**
- Prevents browser from entering **Quirks Mode (old 1990s behavior)**

### Without <!DOCTYPE>

- CSS layout may break
- Flexbox may not work properly
- Width & height calculations behave incorrectly
- Browser may interpret code differently

### With <!DOCTYPE>

- Modern layout works properly
- Consistent behavior across browsers
- Clean rendering

---

## 2. What is Semantic HTML?

Semantic HTML means using HTML tags that clearly describe the meaning of the content.

In simple words:
Semantic tags tell both the browser and developers what the content represents.

### Examples

- `<header>`
- `<nav>`
- `<section>`
- `<article>`
- `<footer>`

### Why Semantic Tags Are Important

- Improves SEO
- Helps screen readers (Accessibility)
- Makes code easier to understand
- Better page structure
- Recommended in HTML5

---

## 3. Difference Between Block and Inline Elements

Block elements start on a new line and take full width.  
Inline elements stay in the same line and take only required space.

### Block Elements

- Start on a new line
- Take full width
- Can contain block and inline elements
- Width and height can be changed

**Examples:**

```html
<div>Hello</div>
<p>This is paragraph</p>
<h1>Heading</h1>

## 4. How do you make forms accessible and user-friendly?

To make forms accessible and user-friendly:

- Use proper labels  
- Use correct input types  
- Provide clear error messages  
- Support keyboard navigation  
- Use semantic HTML  
- Add required validation  
- Ensure good spacing and layout  

### Accessible forms work well for:

- Screen readers  
- Keyboard users  
- Mobile users  
- People with disabilities  

### User-friendly forms are:

- Easy to understand  
- Easy to fill  
- Clear when errors happen  

---

## 5. What are data attributes and when would you use them?

Data attributes are custom HTML attributes that start with `data-` and are used to store extra information in HTML elements, especially for JavaScript.

### Syntax

```html
<div data-user="raj" data-age="24"></div>

=> They are used to:

- Store extra information in HTML  
- Connect HTML with JavaScript  
- Avoid using unnecessary global variables  
- Keep code clean and organized  

=> Important Rules:

- Must start with `data-`  
- Can store strings, numbers, booleans  
- Used mainly with JavaScript  
- Valid in HTML5  

