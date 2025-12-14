import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import BodySelector from '../../components/main/BodySelector';
import ExerciseFilter from '../../components/main/ExerciseFilter';
import { physiotherapyExercises } from '../../config';

const Exercises = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [selectedMuscleName, setSelectedMuscleName] = useState('');
  const [filters, setFilters] = useState({
    type: 'All',
    difficulty: 'All',
  });

  const handleMuscleSelect = (muscleId, muscleName) => {
    setSelectedMuscle(muscleId);
    setSelectedMuscleName(muscleName);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Get unique filter options from all exercises
  const getAllFilterOptions = () => {
    let allTypes = new Set();
    let allDifficulties = new Set();

    if (selectedMuscle && physiotherapyExercises[selectedMuscle]) {
      physiotherapyExercises[selectedMuscle].forEach(ex => {
        allTypes.add(ex.type);
        allDifficulties.add(ex.difficulty);
      });
    }

    return {
      types: Array.from(allTypes),
      difficulties: Array.from(allDifficulties),
    };
  };

  const filterOptions = getAllFilterOptions();

  const handleSearch = () => {
    if (selectedMuscle) {
      // Navigate to results page with query parameters
      navigate('/main/exercises/results', {
        state: {
          selectedMuscle,
          selectedMuscleName,
          filters,
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold cursor-pointer text-gray-800 mb-8 text-center">
          Select Area of Pain
        </h1>

        {/* Body Selector */}
        <div className="mb-8">
          <BodySelector
            onMuscleSelect={handleMuscleSelect}
            selectedMuscle={selectedMuscle}
          />
        </div>

        {/* Filter Section */}
        <div className="max-w-md mx-auto">
          <ExerciseFilter 
            filters={filters} 
            onFilterChange={handleFilterChange}
            selectedMuscle={selectedMuscle}
            selectedMuscleName={selectedMuscleName}
            onSearch={handleSearch}
            filterOptions={filterOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Exercises;