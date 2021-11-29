1. Please implement it using TypeScript + Angular (front end) + Node.js (back end):

-> Done

2. Please create a single webpage of TreeGrid, and host it online, so that we can all test the same version.

-> Done : https://hungry-rosalind-544024.netlify.app/

3. You may borrow this source code: https://ej2.syncfusion.com/angular/documentation/treegrid/virtual, and all other Angular TreeGrid samples. By default, your TreeGrid has 10K rows (RowID=1,2,3...10K), all users edit this single TreeGrid (a JSON file on server), all edits are persistent between users.

-> TreeGrid integration is done using public dummy API

4. This TreeGrid shall always occupy user's browser full-screen, enable Vertical & Horizontal default-scroll-bars, but no Pager bar (i.e. single page).

-> Browser full screen not done. 

5. This TreeGrid shall be fully responsive on both PC browser (keyboard+mouse) and Mobile touchscreen (fingers).

-> Done

* Please implement 2 Context Menus on this TreeGrid: (Note:  The ☑ symbol means this context menu item functions as an On/Off switch)
  * Context Menu 1 - 
  * Right-click or long-press (mobile) a "Column Header", to pop-up these menu items:
  5.1. EditCol: User can set (via dialog) a column's Name, Data-Type (Text/Num/Date/Boolean/DropDownList), Default-Value (of current DataType), Minimum-Column-Width (when screen shrinked), Font-size, Font-color, Background-color, Alignment, Text-wrap ☑.

  -> Not done
  
  5.2. NewCol: User can Create a new column, with the same EditCol dialog, SAVE will create the Column, CANCEL will not.

  ->Not done

  5.3. DelCol: User can Delete a column, such change cannot be undone, (user can also Drag-n-drop to Reorder & Resize columns).

  -> Not done

  5.4. ChooseCol: User choose columns to show or hide. See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/columnchooser

  -> Done

  5.5. FreezeCol ☑: Enable Freeze all-left-side (including current) columns, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/frozen-column

  -> Done

  5.6. FilterCol ☑: Enable "Filter Bar" in Parent Hierarchy Mode, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/filter

  -> Done

  5.7. MultiSort ☑: Enable Multi-Sort for columns, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/sorting

  -> Done

* Context Menu 2 - Rright-click or long-press (mobile) a "Row", to pop-up these menu items:

  1. AddNext; AddChild; DelRow; EditRow: User can Add(Next)/Add(Child)/Del/"Dialog-Edit" a row, (user can also Drag-n-drop to Move multi-selected rows).

  -> Not done

  2. MultiSelect ☑: Enable user to "Multi-select" rows on PC and Mobile, See https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/selection

  -> Not done

  3. CopyRows; CutRows: Copy/Cut multi-selected rows - similar to how MS Windows File Explorer copy/cut Files (leaf rows) and Folders (non-leaf rows).

  -> Not done
  (The rows being Copied/Cut shall be highlighted in Pink color, but not removed yet, until user perform Paste)
PasteNext: Insert the copied/cut Rows as "next siblings" of the current row PasteChild: Insert the copied/cut Rows as "children" of the current row (Copy+Paste will auto-generate new RowIDs, because all RowIDs are unique in a TreeGrid)

Tech stack: 
    Please use Syncfusion EJ2 Angular TreeGrid (trial version), but it doen't support all requested features, so, you HAVE to write custom code.
    We carefully designed this test task to be self-explanatory, ambiguity free, please let us know if you see any room for improvement.
    Please double-check the above requirements before you commit to implement it 100% (word for word) -- not 98%, not 99%!
