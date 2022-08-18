import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <h1>Resources</h1>
      <table>
        <thead>
          <tr>
            <th colSpan="2">GRAMMAR SECTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Topics</td>
          </tr>
          <tr>
            <td>
              <Link to="grammar/present-tense">Present tenses</Link>
            </td>
            <td>
              Present simple; present continuous; state verbs; the verb to be
            </td>
          </tr>

          <tr>
            <td>
              <Link to="grammar/past-tense">Past tenses</Link>
            </td>
            <td>
              Past simple; past continuous; used to + verb and would + verb;
              be/get used to + -ing or noun
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Resources;
