# 💪 Fitness Tracker App

A modern, user-friendly web application for tracking your fitness exercises and monitoring your workout progress. This app helps you log exercises, track calories burned, monitor workout duration, and view your fitness statistics over time.

## 🌟 Features

- **Exercise Logging**: Track various types of exercises including running, cycling, swimming, weightlifting, yoga, and more
- **Detailed Metrics**: Record duration (minutes) and calories burned for each workout
- **Exercise History**: View all your logged exercises with filtering options
- **Real-time Statistics**: See total exercises, total minutes, total calories, and average duration
- **Data Persistence**: All data is saved locally using browser localStorage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations and intuitive interface

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No installation required - it's a static web application!

### Running the App

#### Option 1: Direct File Access
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start tracking your fitness journey!

#### Option 2: Using a Local Server (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammadJaved906/Fitness-Tracker-app.git
   cd Fitness-Tracker-app
   ```

2. Start a local server using one of these methods:
   
   **Using Python:**
   ```bash
   python -m http.server 8080
   ```
   
   **Using Node.js:**
   ```bash
   npm start
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8080
   ```

3. Open your browser and navigate to `http://localhost:8080`

## 📖 How to Use

### Logging an Exercise

1. **Select Exercise Type**: Choose from the dropdown menu (Running, Cycling, Swimming, etc.)
2. **Enter Duration**: Input the workout duration in minutes
3. **Enter Calories**: Add the estimated calories burned
4. **Select Date**: Choose the date of your workout
5. **Add Notes** (Optional): Include any additional details about your workout
6. **Click "Add Exercise"**: Your exercise will be logged and saved

### Viewing Statistics

The statistics section displays:
- **Total Exercises**: Number of workouts logged
- **Total Minutes**: Cumulative workout time
- **Total Calories**: Total calories burned
- **Avg Duration**: Average workout duration

### Filtering Exercise History

Use the filter buttons to view:
- **All**: Display all logged exercises
- **This Week**: Show exercises from the last 7 days
- **This Month**: Display exercises from the last 30 days

### Managing Exercises

- **Delete**: Click the "Delete" button on any exercise to remove it from your history

## 🛠️ Technology Stack

- **HTML5**: Structure and content
- **CSS3**: Styling with modern gradients and animations
- **JavaScript (ES6+)**: Functionality and data management
- **LocalStorage**: Client-side data persistence

## 📁 Project Structure

```
Fitness-Tracker-app/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with responsive design
├── app.js              # JavaScript functionality
├── package.json        # Project metadata
├── .gitignore          # Git ignore file
└── README.md           # Documentation
```

## 🎨 Features in Detail

### Exercise Types Supported
- 🏃 Running
- 🚴 Cycling
- 🏊 Swimming
- 🚶 Walking
- 🏋️ Weightlifting
- 🧘 Yoga
- ❤️ Cardio
- ⚡ HIIT
- 💪 Other

### Data Storage
All exercise data is stored locally in your browser using localStorage. This means:
- Your data persists between sessions
- No account or login required
- Privacy-first approach (data never leaves your device)
- Works offline

## 🔒 Privacy

This app runs entirely in your browser. No data is sent to any server, and all information is stored locally on your device using browser localStorage.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Muhammad Javed

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed with user experience in mind
- Inspired by the fitness community

---

**Stay Fit, Stay Healthy! 💪**