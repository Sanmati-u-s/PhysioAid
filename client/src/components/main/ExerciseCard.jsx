import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50">
        {exercise.image ? (
          <img
            src={exercise.image}
            alt={exercise.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <svg
              className="w-20 h-20 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {exercise.difficulty}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{exercise.name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {exercise.type}
          </span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            {exercise.equipment}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {exercise.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{exercise.sets} sets × {exercise.reps} reps</span>
          </div>
          
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
