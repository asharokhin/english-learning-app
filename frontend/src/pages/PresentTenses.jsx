import React from "react";
import styles from "./PresentTenses.module.css";

function PresentTenses() {
  return (
    <div>
      <h1>Present Tenses</h1>
      <h3>1 Present Simple</h3>
      <table>
        <tbody>
          <tr>
            <td>+</td>
            <td>verb / verb + -s</td>
            <td>
              <p className={styles.example}>
                She <b>works</b> in London.
              </p>
            </td>
          </tr>
          <tr>
            <td>-</td>
            <td>do/does not + verb</td>
            <td>
              <p className={styles.example}>
                He <b>doesn&apos;t work</b> in London.
              </p>
            </td>
          </tr>
          <tr>
            <td>?</td>
            <td>do/does ... + verb?</td>
            <td>
              <p className={styles.example}>
                Where <b>do</b> you <b>work</b>?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>We use the present simple:</p>
      <ul>
        <li>
          <p>to say when things happen if they take place regularly:</p>
          <p className={styles.example}>
            They <b>eat</b> lunch <b>at two o&apos;clock</b>.
          </p>
        </li>
        <li>
          <p>to talk about permanent situations:</p>
          <p className={styles.example}>
            I <b>work</b> in London.
          </p>
        </li>
        <li>
          <p>to state general truths:</p>
          <p className={styles.example}>
            Those bags <b>sell</b> really fast.
          </p>
          <p className={styles.example}>
            The moon <b>goes</b> round the earth.
          </p>
        </li>
        <li>
          <p>to talk about habits and how the happen:</p>
          <p className={styles.example}>
            You <b>buy</b> new clothes <b>every Saturday</b>.
          </p>
        </li>
        <li>
          <p>to describe the plots of books and films:</p>
          <p className={styles.example}>
            The story <b>begins</b> and <b>ends</b> in Spain. The year <b>is</b>{" "}
            1937.
          </p>
        </li>
      </ul>
      <br />
      <h3>2 Present continuous</h3>
      <table>
        <tbody>
          <tr>
            <td>+</td>
            <td>am/is/are + verb + -ing</td>
            <td>
              <p className={styles.example}>
                He
                <b>&apos;s working</b> in London this week.
              </p>
            </td>
          </tr>
          <tr>
            <td>-</td>
            <td>am/is/are not + verb + -ing</td>
            <td>
              <p className={styles.example}>
                {" "}
                I<b>&apos;m not working</b> in London this week.
              </p>
            </td>
          </tr>
          <tr>
            <td>?</td>
            <td>am/is/are … + verb + -ing?</td>
            <td>
              <p className={styles.example}>
                <b>Are</b> you <b>working</b> in London this week?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>We use present continuous:</p>
      <ul>
        <li>
          to talk about the present moment:
          <p className={styles.example}>
            I<b>&apos;m wearing</b> a pair of old jeans.
          </p>
          <p className={styles.example}>
            I<b>&apos;m looking</b> at a blue bag right now.
          </p>
        </li>
        <li>
          <p>
            to suggest that an action is temporary, often with words like now,
            at the moment, at present or just:
          </p>
          <p className={styles.example}>
            They
            <b>&apos;re eating</b> lunch at the moment.
          </p>
          <p className={styles.example}>
            I<b>&apos;m working</b> in London this week.{" "}
            <span>(= I don&apos;t usually work in London)</span>
          </p>
        </li>
        <li>
          <p>
            for an action around the time of speaking, which has begun but is
            not finished:
          </p>
          <p className={styles.example}>
            I<b>&apos;m cleaning</b> my room.
          </p>
          <p className={styles.example}>
            I<b>&apos;m looking</b> round the shops.
            <p>
              (Millie isn&apos;t looking round at this moment – she has stopped
              to talk to Lisa – but she plans to continue looking round later.)
            </p>
          </p>
        </li>
        <li>
          <p>for changing or developing situations:</p>
          <p className={styles.example}>
            Navy blue bags <b>are getting</b> really fashionable.
          </p>
          <p className={styles.example}>
            The Earth&apos;s temperature <b>is rising</b>.
          </p>
        </li>
        <li>
          <p>
            with a word like always or continually if we want to criticise or
            complain:
          </p>
          <p className={styles.example}>
            You
            <b>&apos;re always buying</b> new clothes!{" "}
            <span>(= you buy too many)</span>
          </p>
          <p className={styles.example}>
            He
            <b>&apos;s always complaining</b> about things.
          </p>
        </li>
        <li>
          <p>
            with <em>always</em> when something unexpected happens several
            times:
          </p>
          <p className={styles.example}>
            I<b>&apos;m always meeting</b> my neighbour John near the station. I
            guess he works somewhere near there.
          </p>
        </li>
      </ul>
      <h3>3 State verbs</h3>
      <p>
        These verbs are nearly always used in a simple rather than a continuous
        tense. They are mostly about thoughts, feelings, belonging and the
        senses:
      </p>
    </div>
  );
}

export default PresentTenses;
