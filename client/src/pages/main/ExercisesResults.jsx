import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import { physiotherapyExercises } from '../../config';

const ExercisesResults = () => {
  useScrollToTop();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { selectedMuscle, selectedMuscleName, filters } = location.state || {};

  // Redirect if no state provided
  if (!selectedMuscle) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No exercises selected</h2>
          <button
            onClick={() => navigate('/main/exercises')}
            className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Go Back to Selection
          </button>
        </div>
      </div>
    );
  }

  // Get and filter exercises
  const getFilteredExercises = () => {
    if (!physiotherapyExercises[selectedMuscle]) {
      return [];
    }

    let exercises = physiotherapyExercises[selectedMuscle];

    // Apply filters
    if (filters?.type && filters.type !== 'All') {
      exercises = exercises.filter(ex => ex.type === filters.type);
    }
    if (filters?.difficulty && filters.difficulty !== 'All') {
      exercises = exercises.filter(ex => ex.difficulty === filters.difficulty);
    }

    return exercises;
  };

  const filteredExercises = getFilteredExercises();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/main/exercises')}
            className="text-blue-600 cursor-pointer hover:text-blue-800 font-semibold mb-4 flex items-center gap-2"
          >
            ← Back to Selection
          </button>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Exercises for {selectedMuscleName}
          </h1>
          <p className="text-gray-600 text-lg">
            {filteredExercises.length} exercise{filteredExercises.length !== 1 ? 's' : ''} available
          </p>

          {/* Active Filters Display */}
          <div className="mt-4 flex gap-2 flex-wrap">
            {filters?.type && filters.type !== 'All' && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Type: {filters.type}
              </span>
            )}
            {filters?.difficulty && filters.difficulty !== 'All' && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Difficulty: {filters.difficulty}
              </span>
            )}
          </div>
        </div>

        {/* Exercises List */}
        {filteredExercises.length > 0 ? (
          <div className="space-y-6">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
              >
                {/* Exercise Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {exercise.name}
                    </h2>
                    <p className="text-gray-600 text-base mt-2">
                      {exercise.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                      {exercise.type}
                    </span>
                  </div>
                </div>

                {/* Exercise Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-4 bg-gray-50 rounded-lg p-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Equipment</p>
                    <p className="font-semibold text-gray-800 mt-1">{exercise.equipment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Difficulty</p>
                    <p className="mt-1">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Sets × Reps</p>
                    <p className="font-semibold text-gray-800 mt-1">{exercise.sets} × {exercise.reps}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Pain Level</p>
                    <p className="font-semibold text-gray-800 mt-1">{exercise.painLevel}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-900">Duration:</strong> <span className="text-blue-800">{exercise.duration}</span>
                  </p>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Step-by-Step Instructions:</h3>
                  <ol className="space-y-3">
                    {exercise.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold text-sm">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 pt-1">
                          {instruction}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No Exercises Found
            </h3>
            <p className="text-gray-600 mb-6">
              No exercises match your selected filters. Try adjusting your criteria.
            </p>
            <button
              onClick={() => navigate('/main/exercises')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Try Different Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisesResults;
