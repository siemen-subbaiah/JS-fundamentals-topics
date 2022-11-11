## Event Bubbling and Capturing

- These are two ways of event propagation in the DOM tree.

- Event propagation is a way to describe the “stack” of events that are fired in a web browser

- Bubbling: Propagating the events from inside to outside

- Capturing (Trickling): Propagating the events from outside to inside

- Event Bubbling is used by default

- This can be achieved by passing a third argument to the addEventListener method called ‘useCapture’ which can be just put as true or false (true means it is event capturing)

- Event propagation can be stopped by using the event object in the callback function (stopPropagation)

## Event delegation

- Event delegation is a mechanism of responding to UI-events via a single common parent rather than each child

- Attaching a single event listener to the parent instead of attaching it to every single child

- This can be achieved by e.target

### Benefits of event delegation:

- Improves memory space

- Mitigates risk of performance bottle neck

- Dom manipulation

- When elements get added dynamically, the process of adding events is slow

## Limitations:

- All the events are not bubbled up, some events like blur, focus are not bubbled up .

- if e.stopPropagation is used in child, then events are not bubbled up
