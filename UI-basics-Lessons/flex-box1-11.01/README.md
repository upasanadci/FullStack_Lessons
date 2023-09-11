# flex-box on the parent element

### Flexbox properties:

## `display: flex;`

## flex-direction :

    flex-direction: row | row-reverse | column | column-reverse;

- row: left to right – by default
- row-reverse: right to left
- column: top to bottom
- column-reverse: bottom to top

## flex-wrap :

    flex-wrap: wrap | nowrap | wrap-reverse| wrap;

- nowrap: all flex items will be on one line – by default
- wrap: flex items will wrap onto multiple lines, from top to bottom.
- wrap-reverse: flex items will wrap onto multiple lines from bottom to top.

## flex-flow

    flex-flow : row nowrap;

- This is a shorthand for the flex-direction and flex-wrap properties together

## justify-content

      justify-content: flex-start| flex-end | center | space-between | space-around | space-evenly;

### This defines the alignment along the main axis.

- flex-start: items are packed toward the start of the flex-direction.
- flex-end: items are packed toward the end of the flex-direction.
- center: items are centered along the line
- space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line.
- space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides.
- space-evenly: items are distributed so that the
  spacing between any two items (and the space to the edges) is equal.

## align-items

    align-items: stretch | flex-start | flex-end | center | baseline;

### This defines how flex items are laid out along the cross axis on the current line

- stretch: stretch to fill the container – by default
- flex-start: items are placed at the start of the cross axis.
- flex-end: items are placed at the end of the cross axis.
- center: items are centered in the cross-axis.
-  baseline: items are aligned such as their baselines align.

## align-content

    align-content :  flex-start | flex-end | center | space-between | space-around | space-evenly| stretch;


 ### To align elements on the cross-axis, when there is a lot of available space we can use the property, align-content. 
 ### This property should have flex-wrap.

- flex-start: items packed to the start of the container. 
- flex-end: items packed to the end of the container. 
- center: items centered in the container.
- space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end.
- space-around: items evenly distributed with equal space around each line.
- space-evenly: items are evenly distributed with equal space around them.
- stretch: lines stretch to take up the remaining space – by default.



## resources

 https://yoksel.github.io/flex-cheatsheet/#flex-shrink

 https://css-tricks.com/snippets/css/a-guide-to-flexbox/