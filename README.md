# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript.

## Features
- Classic 3x3 Tic-Tac-Toe gameplay
- Dynamic player turns with "X" and "O"
- Displays winner or draw message
- Reset and New Game functionality
- Responsive and visually appealing UI

## Technologies Used
- **HTML** for structure
- **CSS** for styling
- **JavaScript** for game logic

## How to Play
1. Open `index.html` in a browser.
2. Players take turns clicking on the grid to place their mark ("X" or "O").
3. The game automatically detects a winner or a draw.
4. Click **New Game** or **Reset Game** to restart.

## File Structure
```
├── index.html  (Main HTML file)
├── style.css   (CSS for styling)
└── script.js   (Game logic in JavaScript)
```

## Game Logic
- The game tracks turns using `turnO` (true for "O", false for "X").
- Click events are handled for each box, updating the UI and disabling played cells.
- Winning patterns are checked using predefined combinations.
- If all cells are filled without a winner, the game declares a draw.
- The winner message or draw message is displayed dynamically.


## Future Enhancements
- Improve mobile responsiveness.
- Add AI opponent for single-player mode.
- Enhance animations and UI effects.

## License
This project is open-source and free to use. Modify and enhance as needed!
