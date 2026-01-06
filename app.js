// Fitness Tracker App JavaScript

class FitnessTracker {
    constructor() {
        this.exercises = this.loadExercises();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setDefaultDate();
        this.displayExercises();
        this.updateStats();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('exercise-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addExercise();
        });

        // Filter buttons
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterExercises(e.target.dataset.filter);
                
                // Update active button
                document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').value = today;
    }

    addExercise() {
        const exerciseType = document.getElementById('exercise-type').value;
        const duration = parseInt(document.getElementById('duration').value);
        const calories = parseInt(document.getElementById('calories').value);
        const date = document.getElementById('date').value;
        const notes = document.getElementById('notes').value;

        const exercise = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            type: exerciseType,
            duration: duration,
            calories: calories,
            date: date,
            notes: notes,
            timestamp: new Date().toISOString()
        };

        this.exercises.unshift(exercise);
        this.saveExercises();
        this.displayExercises();
        this.updateStats();
        this.resetForm();
        this.showNotification('Exercise added successfully! 🎉');
    }

    deleteExercise(id) {
        if (confirm('Are you sure you want to delete this exercise?')) {
            this.exercises = this.exercises.filter(ex => ex.id !== id);
            this.saveExercises();
            this.displayExercises();
            this.updateStats();
            this.showNotification('Exercise deleted! 🗑️');
        }
    }

    filterExercises(filter) {
        this.currentFilter = filter;
        this.displayExercises();
    }

    getFilteredExercises() {
        const now = new Date();
        
        switch(this.currentFilter) {
            case 'week':
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                return this.exercises.filter(ex => new Date(ex.date) >= weekAgo);
            
            case 'month':
                const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                return this.exercises.filter(ex => new Date(ex.date) >= monthAgo);
            
            case 'all':
            default:
                return this.exercises;
        }
    }

    displayExercises() {
        const exerciseList = document.getElementById('exercise-list');
        const filteredExercises = this.getFilteredExercises();

        if (filteredExercises.length === 0) {
            exerciseList.innerHTML = '<p class="empty-message">No exercises found for this filter. Start tracking your fitness journey!</p>';
            return;
        }

        exerciseList.innerHTML = filteredExercises.map(exercise => `
            <div class="exercise-item">
                <div class="exercise-info">
                    <div class="exercise-header">
                        <span class="exercise-type">${this.getExerciseIcon(exercise.type)} ${exercise.type}</span>
                        <span class="exercise-date">${this.formatDate(exercise.date)}</span>
                    </div>
                    <div class="exercise-details">
                        <div class="detail-item">
                            <span class="icon">⏱️</span>
                            <span>${exercise.duration} min</span>
                        </div>
                        <div class="detail-item">
                            <span class="icon">🔥</span>
                            <span>${exercise.calories} cal</span>
                        </div>
                    </div>
                    ${exercise.notes ? `<div class="exercise-notes">📝 ${exercise.notes}</div>` : ''}
                </div>
                <div class="exercise-actions">
                    <button class="btn btn-delete" onclick="tracker.deleteExercise('${exercise.id}')">Delete</button>
                </div>
            </div>
        `).join('');
    }

    updateStats() {
        const totalExercises = this.exercises.length;
        const totalDuration = this.exercises.reduce((sum, ex) => sum + ex.duration, 0);
        const totalCalories = this.exercises.reduce((sum, ex) => sum + ex.calories, 0);
        const avgDuration = totalExercises > 0 ? Math.round(totalDuration / totalExercises) : 0;

        document.getElementById('total-exercises').textContent = totalExercises;
        document.getElementById('total-duration').textContent = totalDuration;
        document.getElementById('total-calories').textContent = totalCalories;
        document.getElementById('avg-duration').textContent = avgDuration;
    }

    getExerciseIcon(type) {
        const icons = {
            'Running': '🏃',
            'Cycling': '🚴',
            'Swimming': '🏊',
            'Walking': '🚶',
            'Weightlifting': '🏋️',
            'Yoga': '🧘',
            'Cardio': '❤️',
            'HIIT': '⚡',
            'Other': '💪'
        };
        return icons[type] || '💪';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    resetForm() {
        document.getElementById('exercise-form').reset();
        this.setDefaultDate();
    }

    showNotification(message) {
        // Simple notification - could be enhanced with a toast library
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    loadExercises() {
        try {
            const stored = localStorage.getItem('fitnessExercises');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading exercises from localStorage:', error);
            return [];
        }
    }

    saveExercises() {
        localStorage.setItem('fitnessExercises', JSON.stringify(this.exercises));
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the fitness tracker
const tracker = new FitnessTracker();
