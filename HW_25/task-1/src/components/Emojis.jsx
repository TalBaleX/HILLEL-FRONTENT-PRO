import React, { Component } from "react";
import "/src/styles/Emojis.css";

class Emojis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, emoji: "🤔", votes: 0 },
        { id: 2, emoji: "😡", votes: 0 },
        { id: 3, emoji: "🇬🇧", votes: 0 },
        { id: 4, emoji: "🦅", votes: 0 },
        { id: 5, emoji: "💀", votes: 0 },
      ],
      showResults: false,
    };
  }

  componentDidMount() {
    const savedVotes = localStorage.getItem("emojiVotes");
    if (savedVotes) {
      this.setState({ emojis: JSON.parse(savedVotes) });
    }
  }

  vote = (id) => {
    this.setState(
      (prevState) => {
        const updatedEmojis = prevState.emojis.map((emoji) =>
          emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
        );
        return { emojis: updatedEmojis };
      },
      () => {
        localStorage.setItem("emojiVotes", JSON.stringify(this.state.emojis));
      }
    );
  };

  showResults = () => {
    this.setState({ showResults: true });
  };

  clear = () => {
    const resetEmojis = this.state.emojis.map((emoji) => ({
      ...emoji,
      votes: 0,
    }));
    this.setState({ emojis: resetEmojis, showResults: false }, () => {
      localStorage.removeItem("emojiVotes");
    });
  };

  render() {
    const { emojis, showResults } = this.state;
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
              onClick={() => this.vote(emoji.id)}
            >
              {emoji.emoji} ({emoji.votes})
            </button>
          ))}
        </div>
        <button className="control" onClick={this.showResults}>
          Show Results
        </button>
        <button className="control" onClick={this.clear}>
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
  }
}

export default Emojis;
