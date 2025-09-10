import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Questão 1</h2>
        <ul>
            <li>Alternativa 1</li>
            <li>Alternativa 2</li>
            <li>Alternativa 3</li>
            <li>Alternativa 4</li>
        </ul>
        <button>Próxima</button>
        <div className="index">1 a 5 Questões</div>
    </div>
  )
}

export default Quiz