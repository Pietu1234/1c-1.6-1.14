import React, { useState } from 'react';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Anecdote = ({ anecdotes, selected, votes }) => (
  <div>
    <p>{anecdotes[selected]}</p>
    <p>Has {votes[selected]} votes</p>
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  // ... (sama kuin aiemmin)
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const anecdotes = [
    "moi",
    "moro",
    "hei",
    // ... (aiemmat anekdootit)
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />

      <h1>Statistics</h1>
      {good + neutral + bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}

      <h1>Random Anecdote</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button onClick={voteAnecdote} text="Vote" />
      <Button onClick={randomAnecdote} text="Show Another Anecdote" />
    </div>
  );
};

export default App;








