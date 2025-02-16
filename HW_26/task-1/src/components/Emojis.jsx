import React, { useState, useEffect } from "react";
import "/src/styles/Emojis.css";

const Emojis = () => {
  const [emojis, setEmojis] = useState([
    { id: 1, emoji: "🤔", votes: 0 },
    { id: 2, emoji: "😡", votes: 0 },
    { id: 3, emoji: "🇬🇧", votes: 0 },
    { id: 4, emoji: "🦅", votes: 0 },
    { id: 5, emoji: "💀", votes: 0 },
  ]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const savedVotes = localStorage.getItem("emojiVotes");
    if (savedVotes) {
      setEmojis(JSON.parse(savedVotes));
    }
  }, []);

  const vote = (id) => {
    setEmojis((prevEmojis) => {
      const updatedEmojis = prevEmojis.map((emoji) =>
        emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
      );
      localStorage.setItem("emojiVotes", JSON.stringify(updatedEmojis));
      return updatedEmojis;
    });
  };

  const clear = () => {
    setEmojis((prevEmojis) => {
      const resetEmojis = prevEmojis.map((emoji) => ({ ...emoji, votes: 0 }));
      localStorage.removeItem("emojiVotes");
      return resetEmojis;
    });
    setShowResults(false);
  };

  const maxVotes = Math.max(...emojis.map((emoji) => emoji.votes));
  const winners = emojis.filter(
    (emoji) => emoji.votes === maxVotes && maxVotes > 0
  );

  return (
    <div>
      <h1>Голосування за найкращий смайлик</h1>
      <div>
        {emojis.map((emoji) => (
          <button
            className="emojis"
            key={emoji.id}
            onClick={() => vote(emoji.id)}
          >
            {emoji.emoji} ({emoji.votes})
          </button>
        ))}
      </div>
      <button className="control" onClick={() => setShowResults(true)}>
        Show Results
      </button>
      <button className="control" onClick={clear}>
        Очистити результати
      </button>
      {showResults && winners.length > 0 && (
        <div>
          <h2>Переможець:</h2>
          <p className="emojis">
            {winners.map((winner) => winner.emoji).join(", ")} ({maxVotes}{" "}
            голосів)
          </p>
        </div>
      )}
    </div>
  );
};

export default Emojis;
