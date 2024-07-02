### Component Description: SideNav

Instantiated in page.tsx

Display a list of categories, each containing a list of commands, in an accordion-style layout.

#### Imports:
- React and hooks: useState, useEffect
- Material-UI components: 
  - Box, List, ListItem, ListItemButton, ListItemText, Stack
  - Accordion, AccordionSummary, AccordionDetails
  - ExpandMoreIcon
  - Typography
- Custom styles: Imported from SideNav.module.scss

#### Props:
- data: Array of category objects to be displayed in the nav.
- handleSelected: Function to handle the selection of a command.
- defaultCategory: The category to be expanded by default.

#### State:
- expanded: ID of the currently expanded category.
-- 
- activeNavItem: ID of the currently active (selected) nav item.

#### Functions:
1. handleListItemClick(index: number):
   - Updates the activeNavItem state to the clicked item index.
   
2. handleChange(categoryId: number):
   - Returns a function to update the expanded state to the clicked category's ID.
   - Resets the activeNavItem state.

#### useEffect Hook:
- Monitors changes to defaultCategory.
- Sets the expanded category and resets the active item when defaultCategory changes.

#### Main Return (JSX):
- Stack: 
  - Container for the navigation menu with specified styles.
- Map through sortedData:
  - For each category:
    - Accordion: Represents a category.
    - AccordionSummary: The header of the accordion, displaying the category name.
    - AccordionDetails: Contains a list of commands within the category.
    - List: Contains multiple ListItem components.
    - ListItem: Each item represents a command.
    - ListItemButton: Clickable button for each command.
    - ListItemText: Displays the command name.

