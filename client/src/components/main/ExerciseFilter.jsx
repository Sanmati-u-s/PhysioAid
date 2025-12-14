import React from 'react';

const ExerciseFilter = ({ filters, onFilterChange, selectedMuscle, selectedMuscleName, onSearch, filterOptions }) => {
  // Default filter options if not provided
  const defaultExerciseTypes = ['All', 'Mobility', 'Stretching', 'Strengthening', 'Core Strengthening'];
  const defaultDifficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Use provided filter options or defaults
  const exerciseTypes = filterOptions?.types 
    ? ['All', ...filterOptions.types.sort()] 
    : defaultExerciseTypes;
  const difficultyLevels = filterOptions?.difficulties 
    ? ['All', ...filterOptions.difficulties.sort()] 
    : defaultDifficultyLevels;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Filter Exercises</h3>
      
      {/* Selected Body Part */}
      {selectedMuscle && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">Area of Pain:</p>
          <p className="text-lg font-semibold text-blue-800">{selectedMuscleName}</p>
        </div>
      )}
      
      {!selectedMuscle && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">Select a body part to view exercises</p>
        </div>
      )}
      
      <div className="space-y-4">
        {/* Exercise Type */}
        <div>
          <label htmlFor="exercise-type" className="block text-sm font-medium text-gray-700 mb-2">
            Exercise Type
          </label>
          <select
            id="exercise-type"
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            disabled={!selectedMuscle}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            {exerciseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty Level
          </label>
          <select
            id="difficulty"
            value={filters.difficulty}
            onChange={(e) => onFilterChange('difficulty', e.target.value)}
            disabled={!selectedMuscle}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-700 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            {difficultyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="mt-6">
          <button
            onClick={onSearch}
            disabled={!selectedMuscle}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all ${
              selectedMuscle
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedMuscle ? 'Search Exercises' : 'Select Area of Pain'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseFilter;
