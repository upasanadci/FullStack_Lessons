# Grid Properties for the Children

## grid-column-start

## grid-column-end

## grid-row-start

## grid-row-end

Determines a grid item’s location within the grid by referring to specific grid lines. grid-column-start/grid-row-start is the line where the item begins, and grid-column-end/grid-row-end is the line where the item ends.

### example :

    .item {
        grid-column-start: <number> | <name> | span <number> | span <name> | auto;

        grid-column-end: <number> | <name> | span <number> | span <name> | auto;

        grid-row-start: <number> | <name> | span <number> | span <name> | auto;

        grid-row-end: <number> | <name> | span <number> | span <name> | auto;
    }

## grid-column

## grid-row

Shorthand for grid-column-start + grid-column-end, and grid-row-start + grid-row-end, respectively.

### example :

    .item {
         grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    }

## grid-area

An even shorter shorthand for grid-row-start + grid-column-start + grid-row-end + grid-column-end.

### example :

    .item {
           grid-area:  <row-start> / <column-start> / <row-end> / <column-end>;

    }

## justify-self

      justify-self: start | end | center | stretch;

- start – aligns the grid item to be flush with the start edge of the cell
- end – aligns the grid item to be flush with the end edge of the cell
- center – aligns the grid item in the center of the cell
- stretch – fills the whole width of the cell (this is the default)

## align-self

    align-self: start | end | center | stretch;

- start – aligns the grid item to be flush with the start edge of the cell
- end – aligns the grid item to be flush with the end edge of the cell
- center – aligns the grid item in the center of the cell
- stretch – fills the whole height of the cell (this is the default)

## place-self

place-self sets both the align-self and justify-self properties in a single declaration.

## [A complete guide to css grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
