import { Difficulty } from '../../type';

type DifficultySelectorProps = {
    setDifficulties: (difficultes: Difficulty[]) => void;
    difficulties: Difficulty[];
}

const DifficultySelector = ({difficulties, setDifficulties}: DifficultySelectorProps) => {

    const handleClickDifficulty = (difficulty: Difficulty) => {
        difficulties.includes(difficulty)
        ? setDifficulties(difficulties.filter((diff) => diff !== difficulty))
        : setDifficulties([...difficulties, difficulty]);
    }


  return (
    <div className='difficulties-selector'>
        {Object.values(Difficulty).map((difficulty) => (
            <button
                key={difficulty}
                className={`difficulty-button ${difficulties.includes(difficulty) ? 'active' : ''}`}
                onClick={() => handleClickDifficulty(difficulty)}
            >
                {difficulty}
            </button>
        ))}
    </div>
  )
}

export default DifficultySelector