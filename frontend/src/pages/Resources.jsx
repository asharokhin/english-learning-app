import React from "react";
import { Link } from "react-router-dom";

function Resources() {
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
        </tbody>
      </table>
    </>
  );
}

export default Resources;
