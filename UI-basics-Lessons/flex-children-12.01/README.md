
# flex-box on the children elements

### Properties


## order :

    order: number;

  - wth the order property we can change the default order of one item inside the parent container


## flex-grow :

    flex-grow : number;


- flex-grow will make the item grow and take the available space that exists inside the parent container.
- depends on the number one item can take more space than the other/others

## flex-shrink :

    flex-shrink : number;

- flex-shrink will make the item reduce its width if there is no available space 
- depends on the number one item can shrink more than the other/others
- by default flex-shrink : 1;
## flex-basis : 

    flex-basis : everything we use for width or height;


- defines the default size of an item 
- if both flex-basis and width are defined width will be ignored
-  

## flex : 

    flex : flex-grow | flex-shrink | flex-basis;

- This is the shorthand for flex-grow, flex-shrink and flex-basis combined.
- flex:1; will give, each child equal width and fill up the container width.

## align-self 

    align-self : auto | flex-start | flex-end | center |baseline | stretch


 - align self will align one item on the cross axis (like align-items but for one item only) 