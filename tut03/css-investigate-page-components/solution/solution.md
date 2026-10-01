## Investigating properties of a webpage with browser dev tools

> Throughout this activity you should look at the css properties within the Inspector tab of developer tools.

Take a look at this webpage. It covers a number of exciting things to do in one of Australia's popular western tourist site: **Rottnest Island**

We will look at this on desktop only.

https://rottnestexpress.com.au/rottnest-island/

Use the **developer tools** capability of browsers, try and answer the following questions

### Question 1

On [this page](https://rottnestexpress.com.au/rottnest-island/) what is the font size of the "ROTTNEST ISLAND" title?

![](./images/q1.png)

> 1.67em

### Question 2

On [this page](https://rottnestexpress.com.au/rottnest-island/) what CSS exists that causes images to animate themselves onto the page?

> `transition: filter .3s,transform .6s,-webkit-filter .3s`

### Question 3

On [this page](https://rottnestexpress.com.au/rottnest-island/) is the text "Journey Beyond" at the bottom an image or is it text? Where does the image link to?

> It's an image
> https://rottnestexpress.com.au/wp-content/themes/journey-beyond/built/images/jb_logo.png

### Question 4

Can we change all of the images on this page to have an opacity of `0.8`?

> Use the console
> document.getElementsByTagName("img").forEach(img => img.style.opacity = 0.8);
> Can add style as well in browser

### Question 5

On [this page](https://rottnestexpress.com.au/rottnest-island/) demonstrate how we can change all backgrounds, borders, and text that is red, and change it to the colour blue?

> Check which class the background colour was set in
> e.g. for the buttons it's o-button--stroke
> This can then be set in the browser / with JS
