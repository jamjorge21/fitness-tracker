const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
     
        exercises:[
            {
                name: {
                    type:String,
                    require: "Log in your Workout"
                },
                weight: {
                    type: Number,
                    require: "Log in your Weight"
                },
                sets: {
                    type: Number,
                    require: "Log in the number of sets completed"
                },
                reps: {
                    type: Number,
                    require: "Log in the reps completed"
                },
                duration: {
                    type:String,
                    require:"How long was your workout"
                },
                distance: {
                    type: Number,
                    require: "Log in your total Distance"
                },
                
                type: {
                    type:String,
                    require: "Log in what type of workout you completed"
                },
                
                day: {
                    type: Number,
                    default: Date.now
                },
            }
        ]

        
    }, 
    {
       
    
} );
        
const Workout = mongoose.model("Workout",workoutSchema );

module.exports = Workout;






