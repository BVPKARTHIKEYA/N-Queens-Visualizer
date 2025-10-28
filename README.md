# N-Queens Visualizer 👑

An interactive web-based visualization tool for solving and displaying all possible solutions to the classic N-Queens problem using backtracking algorithm with animated step-by-step visualization.

## 📋 Overview

The N-Queens problem is a classic chess puzzle where N queens must be placed on an N×N chessboard such that no two queens threaten each other. This visualizer demonstrates the backtracking algorithm by showing the placement process in real-time across multiple boards, displaying all valid arrangements.

## ✨ Features

- **Interactive Input** — Enter the number of queens (1-8) to visualize
- **Speed Control** — Adjustable slider to control animation speed from slow to fast
- **Multiple Solutions** — Displays all possible valid board arrangements simultaneously
- **Real-time Animation** — Watch the backtracking algorithm explore and validate queen placements
- **Dark Mode** — Toggle between light and dark themes with persistent preference storage
- **Responsive Design** — Works seamlessly on desktop and mobile devices
- **Visual Feedback** — Color-coded cells show the algorithm's checking process

## 🎮 How to Use

1. **Enter Number of Queens**: Input a value between 1 and 8 in the text field
2. **Adjust Speed**: Use the slider to set visualization speed (SLOW ← → FAST)
3. **Click Play**: Press the play button to start the visualization
4. **Watch the Magic**: Observe as the algorithm places queens and finds all valid solutions

## 🏗️ Project Structure
```
📁 n-queens-visualizer
├── index.html         # Main HTML structure with Tailwind CSS
├── styles.css         # Custom CSS styling for chessboard
├── app.js             # Core JavaScript logic and backtracking algorithm
└── README.md          # Project documentation
```

## 🧠 Algorithm Explanation

The visualizer implements a **recursive backtracking algorithm**:

1. **Place Queen**: Attempt to place a queen in the current row
2. **Validation Check**: Verify no conflicts exist in:
   - Vertical column (upward)
   - Upper-left diagonal
   - Upper-right diagonal
3. **Recurse**: Move to the next row and repeat
4. **Backtrack**: If placement fails, remove queen and try next column
5. **Solution Found**: When all N queens are placed, save the configuration

### Complexity
- **Time Complexity**: O(N!)
- **Space Complexity**: O(N²)

## 🎨 Technologies Used

- **HTML5** — Structure and layout
- **Tailwind CSS** — Modern utility-first styling with dark mode support
- **Vanilla JavaScript** — Core logic and DOM manipulation
- **Font Awesome** — Chess queen icons

## 📊 Supported Board Sizes

| N | Total Solutions |
|---|----------------|
| 1 | 1              |
| 2 | 0              |
| 3 | 0              |
| 4 | 2              |
| 5 | 10             |
| 6 | 4              |
| 7 | 40             |
| 8 | 92             |

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/n-queens-visualizer.git
```

2. Navigate to the project directory:
```bash
cd n-queens-visualizer
```

3. Open `index.html` in your web browser:
```bash
open index.html
```

No build process or dependencies required!

## 🎯 Key Features Explained

### Dark Mode
- Persistent theme preference using localStorage
- Smooth transitions between light and dark modes
- Optimized color schemes for both themes

### Animation Control
- Real-time speed adjustment without stopping visualization
- Visual progress bar showing current speed setting
- Delay mechanism for smooth, watchable animations

### Board Validation
- Visual highlighting during conflict checking
- Automatic backtracking when conflicts detected
- Queen icon placement using Font Awesome

## 🔧 Code Highlights

**Queen Placement Validation**:
```javascript
isValid = async (board, r, col, n) => {
    // Check vertical, upper-left, and upper-right for conflicts
    // Returns true if position is safe
}
```

**Recursive Solver**:
```javascript
solveQueen = async (board, r, n) => {
    if (r === n) {
        // Solution found - create new board
    }
    // Try placing queen in each column
    // Recurse to next row
    // Backtrack if needed
}
```

## 📝 Future Enhancements

- [ ] Support for larger board sizes (9-12)
- [ ] Step-by-step mode with manual control
- [ ] Export solutions as images
- [ ] Performance metrics display
- [ ] Sound effects for placements
- [ ] Algorithm comparison mode

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ♟️ by [B.V.P. Karthikeya]

---

**Note**: For optimal performance, use board sizes up to 8. Larger values may cause extended computation times.
