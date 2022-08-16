/* eslint-disable react/prop-types */
import React from "react";

const ListeningMultipleChoice = ({ content }) => {
  const { sentences } = content;
  const id = "1l1vdg2ICwT7N0ZxCD9T3O_vkYpJGmMq2";
  return (
    <div>
      <audio controls autoPlay muted>
        <source
          src={`https://docs.google.com/uc?export=download&id=${id}`}
          type="audio/mp3"
        />
      </audio>
      <ol>
        {sentences.map((s, i) => (
          <li key={s.question}>
            <p>{s.question}</p>
            <form>
              <ol>
                {s.choices.map((c, j) => (
                  <li key={c}>
                    <input
                      type="radio"
                      id={`rad${j}`}
                      name={`answer${i}`}
                      required
                    />
                    <label htmlFor={`rad${j}`}>{c}</label>
                  </li>
                ))}
              </ol>
            </form>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListeningMultipleChoice;

/*
const id = "1l1vdg2ICwT7N0ZxCD9T3O_vkYpJGmMq2";
  return (
    <div>
      <audio controls autoPlay muted>
        <source
          src={`https://docs.google.com/uc?export=download&id=${id}`}
          type="audio/mp3"
        />
      </audio>
*/
