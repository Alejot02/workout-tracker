const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users.routes');
const exercisesRouter = require('./routes/exercises.routes');
const workoutPlansRouter = require('./routes/workoutPlan.routes');
const workoutExercisesRouter = require('./routes/workoutExercise.routes');
const workoutSchedulesRouter = require('./routes/workoutSchedule.routes');
const workoutReportsRouter = require('./routes/workoutReport.routes');


const app = express();
app.use(express.json());


app.use('/api/v1/users', usersRouter);
app.use('/api/v1/exercises', exercisesRouter);
app.use('/api/v1/workout-plans', workoutPlansRouter);
app.use('/api/v1/workout-exercises', workoutExercisesRouter);
app.use('/api/v1/workout-schedules', workoutSchedulesRouter);
app.use('/api/v1/workout-reports', workoutReportsRouter);


app.get('/', (req, res) => res.send('Workout Tracker API (JSON storage)'));


// error handler
app.use((err, req, res, next) => {
console.error(err);
res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});


module.exports = app;