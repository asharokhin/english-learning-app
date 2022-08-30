/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styles from "./PresentTenses.module.css";
import { useFirstElement } from "../hooks/hooks";
import Exercises from "./Exercises/Exercises";

const PresentTenses = () => {
  const [sideBarIsOpen, toggleSidebar] = useState(true);

  const [currentViewedTocItem, setCurrentViewedTocItem] = useState("");

  // Article content
  const observedElements = React.useCallback(() => {
    const mainElement = document.querySelector("main") ?? document;
    const elements = mainElement.querySelectorAll("h2, h2 ~ *:not(section)");
    return Array.from(elements);
  }, []);

  const idByObservedElement = React.useRef(new Map());

  useEffect(() => {
    // Map article header id to according elements
    observedElements().reduce((currentId, observedElement) => {
      let resultId = currentId;
      const observedId = observedElement.id.toLowerCase();

      if (observedId) {
        resultId = observedId;
      }

      idByObservedElement.current.set(observedElement, resultId);

      return resultId;
    }, "");
  }, [observedElements]);

  useFirstElement(observedElements, (element) => {
    const id = element ? idByObservedElement.current.get(element) ?? "" : "";
    if (id !== currentViewedTocItem) {
      setCurrentViewedTocItem(id);
    }
  });

  return (
    <div className={styles["main-wrapper"]}>
      <Sidebar
        className={styles.toc}
        sideBarIsOpen={sideBarIsOpen}
        toggleSidebar={toggleSidebar}
        currentViewedTocItem={currentViewedTocItem}
      />
      <main id="content" className={styles["main-content"]} role="main">
        <article className={styles["main-page-content"]}>
          <h1>Present Tenses</h1>
          <section id={0}>
            <h2 id="present_simple">
              <a
                className={styles.main__anchor}
                name="present_simple"
                href="#present_simple"
                content="1"
              >
                Present Simple
              </a>
            </h2>
            <div className="section-content">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Утвердительные предложения</p>
                    </td>
                    <td>verb / verb + -s</td>
                    <td>
                      <p className={styles.example}>
                        He <strong>lives</strong> in Boston.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Отрицательные предложения</p>
                    </td>
                    <td>do/does not + verb</td>
                    <td>
                      <p className={styles.example}>
                        She <strong>doesn&apos;t live</strong> in Boston.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Вопросительные предложения</p>
                    </td>
                    <td>do/does ... + verb?</td>
                    <td>
                      <p className={styles.example}>
                        Where <strong>do</strong> you <strong>live</strong>?
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Время <em>present simple</em> употребляется:
              </p>
              <ul>
                <li>
                  <p>
                    чтобы сообщить, когда происходит действие, если оно
                    выполняется регулярно:
                  </p>
                  <p className={styles.example}>
                    They <strong>eat</strong> lunch{" "}
                    <strong>at two o&apos;clock</strong>.
                  </p>
                </li>
                <li>
                  <p>to talk about permanent situations:</p>
                  <p className={styles.example}>
                    I <strong>work</strong> in London.
                  </p>
                </li>
                <li>
                  <p>to state general truths:</p>
                  <p className={styles.example}>
                    Those bags <strong>sell</strong> really fast.
                  </p>
                  <p className={styles.example}>
                    The moon <strong>goes</strong> round the earth.
                  </p>
                </li>
                <li>
                  <p>to talk about habits and how the happen:</p>
                  <p className={styles.example}>
                    You <strong>buy</strong> new clothes{" "}
                    <strong>every Saturday</strong>.
                  </p>
                </li>
                <li>
                  <p>to describe the plots of books and films:</p>
                  <p className={styles.example}>
                    The story <strong>begins</strong> and <strong>ends</strong>{" "}
                    in Spain. The year <strong>is</strong> 1937.
                  </p>
                </li>
              </ul>
              <br />
            </div>
          </section>
          <section id={1}>
            <h2 id="present_continuous">
              <a
                className={styles.main__anchor}
                name="present_continuous"
                href="#present_continuous"
                content="2"
              >
                Present continuous
              </a>
            </h2>
            <div className="section-content">
              <table>
                <tbody>
                  <tr>
                    <td>+</td>
                    <td>am/is/are + verb + -ing</td>
                    <td>
                      <p className={styles.example}>
                        He
                        <strong>&apos;s working</strong> in London this week.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>am/is/are not + verb + -ing</td>
                    <td>
                      <p className={styles.example}>
                        {" "}
                        I<strong>&apos;m not working</strong> in London this
                        week.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>?</td>
                    <td>am/is/are … + verb + -ing?</td>
                    <td>
                      <p className={styles.example}>
                        <strong>Are</strong> you <strong>working</strong> in
                        London this week?
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
                    I<strong>&apos;m wearing</strong> a pair of old jeans.
                  </p>
                  <p className={styles.example}>
                    I<strong>&apos;m looking</strong> at a blue bag right now.
                  </p>
                </li>
                <li>
                  <p>
                    to suggest that an action is temporary, often with words
                    like now, at the moment, at present or just:
                  </p>
                  <p className={styles.example}>
                    They
                    <strong>&apos;re eating</strong> lunch at the moment.
                  </p>
                  <p>
                    <span className={styles.example}>
                      I<strong>&apos;m working</strong> in London this week.
                    </span>{" "}
                    <span>(= I don&apos;t usually work in London)</span>
                  </p>
                </li>
                <li>
                  <p>
                    for an action around the time of speaking, which has begun
                    but is not finished:
                  </p>
                  <p className={styles.example}>
                    I<strong>&apos;m cleaning</strong> my room.
                  </p>

                  <p>
                    <span className={styles.example}>
                      I<strong>&apos;m looking</strong> round the shops.&nbsp;
                    </span>
                    (Millie isn&apos;t looking round at this moment – she has
                    stopped to talk to Lisa – but she plans to continue looking
                    round later.)
                  </p>
                </li>
                <li>
                  <p>for changing or developing situations:</p>
                  <p className={styles.example}>
                    Navy blue bags <strong>are getting</strong> really
                    fashionable.
                  </p>
                  <p className={styles.example}>
                    The Earth&apos;s temperature <strong>is rising</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    with a word like <em>always</em> or <em>continually</em> if
                    we want to criticise or complain:
                  </p>
                  <p>
                    <span className={styles.example}>
                      {" "}
                      You
                      <strong>&apos;re always buying</strong> new clothes!{" "}
                    </span>
                    <span>(= you buy too many)</span>
                  </p>
                  <p className={styles.example}>
                    He
                    <strong>&apos;s always complaining</strong> about things.
                  </p>
                </li>
                <li>
                  <p>
                    with <em>always</em> when something unexpected happens
                    several times:
                  </p>
                  <p className={styles.example}>
                    I<strong>&apos;m always meeting</strong> my neighbour John
                    near the station. I guess he works somewhere near there.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section id={2}>
            <h2 id="state_verbs">
              <a
                className={styles.main__anchor}
                name="state_verbs"
                href="#state_verbs"
                content="3"
              >
                State verbs
              </a>
            </h2>
            <div className="section-content">
              <p>
                These verbs are nearly always used in a simple rather than a
                continuous tense. They are mostly about thoughts, feelings,
                belonging and the senses:
              </p>
              <p>
                {" "}
                <span className={styles.example}>
                  … that leather bag you want to get
                </span>{" "}
                (<strong>not</strong> <s>you are wanting to</s>)
              </p>
              <p>
                <span className={styles.example}>
                  You don’t deserve to hear it.
                </span>{" "}
                (<strong>not</strong> <s>you aren&apos;t deserving to</s>)
              </p>
              <p>The following are some important state verbs:</p>
              <ul>
                <li>
                  <p>
                    thoughts:{" "}
                    <em>
                      believe, know, mean, realise, recognise, remember,
                      suppose, understand, feel
                    </em>{" "}
                    (= believe), <em>think</em> (= believe):
                  </p>
                  <p className={styles.example}>
                    I <strong>think</strong> you&apos;re wrong.
                  </p>
                  <p className={styles.example}>
                    We <strong>feel</strong> this decision is right.
                  </p>
                </li>
                <li>
                  <p>
                    feelings:{" "}
                    <em>
                      adore, dislike, despise, hate, like, love, want, wish,
                      prefer
                    </em>
                    :
                  </p>
                  <p className={styles.example}>
                    They <strong>despise</strong> me because of the way I&apos;m
                    living.
                  </p>
                </li>
                <li>
                  <p>
                    belonging: <em>belong, have</em> (= possess),{" "}
                    <em>own, possess:</em>
                  </p>
                  <p className={styles.example}>
                    It <strong>belongs</strong> to my father.
                  </p>
                  <p className={styles.example}>
                    The manager <strong>has</strong> the biggest company car.
                  </p>
                </li>
                <li>
                  <p>
                    senses: <em>smell, taste, hear, see</em>:
                  </p>
                  <p className={styles.example}>
                    This sauce <strong>tastes</strong> great.
                  </p>
                  <p className={styles.example}>
                    I <strong>hear</strong> what you&apos;re saying to me, but I
                    don&apos;t agree.
                  </p>
                  <p className={styles.example}>
                    <strong>Do</strong> you <strong>see</strong> anything you
                    want to buy here?
                  </p>
                  <p>
                    We use <em>can</em> with these verbs to show we are talking
                    about this moment:
                  </p>
                  <p className={styles.example}>
                    I <strong>can see</strong> you&apos;re tired.
                  </p>
                  <p className={styles.example}>
                    I <strong>can hear</strong> someone in the next room.
                  </p>
                </li>
                <li>
                  <p>
                    other state verbs:{" "}
                    <em>need, contain, deserve, fit, seem, look</em> (= seem),{" "}
                    <em>look like, matter, weigh</em>:{" "}
                  </p>
                  <p className={styles.example}>
                    This medicine <strong>contains</strong> aspirin.
                  </p>
                  <p className={styles.example}>
                    Mark <strong>weighs</strong> 70 kilos.
                  </p>
                </li>
              </ul>
              <p>
                <em>Think</em> is not a state verb when it refers to what
                someone is doing, not what they believe:
              </p>
              <p className={styles.example}>
                I<strong>&apos;m thinking</strong> about my holiday.
              </p>
              <p>
                <em>Have</em> can be continuous when it does not mean `possess`:
              </p>
              <p className={styles.example}>
                Steve <strong>is having</strong> a difficult time at college
                this term.
              </p>
              <p className={styles.example}>
                Can I phone you back later? We
                <strong>&apos;re having</strong> lunch right now.
              </p>
              <p>
                <em>Taste</em> and <em>smell</em> can be continuous when they
                refer to what someone is doing:
              </p>
              <p className={styles.example}>
                I<strong>&apos;m tasting</strong> the sauce.
              </p>
              <p>
                <em>Listen to, watch</em> and <em>look</em> at are not state
                verbs and can be continuous:
              </p>
              <p className={styles.example}>
                We<strong>&apos;re listening</strong> to music and Diane{" "}
                <strong>is watching</strong> a DVD upstairs.
              </p>
              <p>
                <em>See</em> can be continuous when it means `meet with`:
              </p>
              <p className={styles.example}>
                Lara&apos;s at the medical centre. She
                <strong>&apos;s seeing</strong> a doctor about her sore throat.
              </p>
              <p>
                <em>Weight</em> can be continuous when it refers to what someone
                is doing:
              </p>
              <p className={styles.example}>
                The shop assistant <strong>is weighing</strong> the cheese.
              </p>
            </div>
          </section>
          <section id={3}>
            <h2 id="the_verb_to_be">
              <a
                className={styles.main__anchor}
                name="the_verb_to_be"
                href="#the_verb_to_be"
                content="4"
              >
                The verb <em>to be</em>
              </a>
            </h2>
            <div className="section-content">
              <p>
                The verb <em>to be</em> is nearly always used in a simple rather
                than a continuous tense. When it is continuous it emphasises
                that a situation is temporary. It often describes a
                person&apos;s behaviour:
              </p>
              <p>
                <span className={styles.example}>
                  You<strong>&apos;re being</strong> so impatient!
                </span>{" "}
                (Millie doesn’t believe that Lisa is normally an impatient
                person.)
              </p>
              <p className={styles.example}>
                My brother <strong>is being</strong> very nice to me this week.
                I wonder what he wants!
              </p>
              <p className={styles.example}>
                Francis is filling in a form online, so we
                <strong>&apos;re</strong> all <strong>being</strong> quiet as we
                don&apos;t want him to make any mistakes.
              </p>
            </div>
          </section>
          <section className={styles["section-exercises"]}>
            <h2 id="exercises">
              <a
                className={styles.main__anchor}
                name="exercises"
                href="#exercises"
              >
                Grammar exercises
              </a>
            </h2>
            <Exercises />
          </section>
          <section>
            <h2 id="videos">
              <a className={styles.main__anchor} name="videos" href="#videos">
                Useful videos
              </a>
            </h2>
            <div className="section-content">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UxHo94JGot0"
                title="YouTube video player 1"
                frameBorder="0"
                allowFullScreen
              />
              <br />
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_TUKYWPuW4g"
                title="YouTube video player 2"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Sidebar = ({ currentViewedTocItem }) => {
  return (
    <div className={styles.toc}>
      <aside className={styles["document-toc-container"]}>
        <section className={styles["document-toc"]}>
          <header>
            <h2>In this article</h2>
          </header>
          <ul className={styles["document-toc-list"]}>
            <li className={styles["document-toc-item"]}>
              <a
                className={`${styles.menu__item} ${
                  currentViewedTocItem === "present_simple" ? styles.active : ""
                }`}
                href="#present_simple"
              >
                Present simple
              </a>
            </li>
            <li className={styles["document-toc-item"]}>
              <a
                className={`${styles.menu__item} ${
                  currentViewedTocItem === "present_continuous"
                    ? styles.active
                    : ""
                }`}
                href="#present_continuous"
              >
                Present continuous
              </a>
            </li>
            <li className={styles["document-toc-item"]}>
              <a
                className={`${styles.menu__item} ${
                  currentViewedTocItem === "state_verbs" ? styles.active : ""
                }`}
                href="#state_verbs"
              >
                State verbs
              </a>
            </li>
            <li className={styles["document-toc-item"]}>
              <a
                className={`${styles.menu__item} ${
                  currentViewedTocItem === "the_verb_to_be" ? styles.active : ""
                }`}
                href="#the_verb_to_be"
              >
                The verb to be
              </a>
            </li>

            <li className={styles["document-toc-item"]}>
              <a
                className={`${styles.menu__item} ${
                  currentViewedTocItem === "exercises" ? styles.active : ""
                }`}
                href="#exercises"
              >
                Grammar exercises
              </a>
            </li>
            <li className={styles["document-toc-item"]}>
              <a
                className={`${styles.menu__item} ${
                  currentViewedTocItem === "videos" ? styles.active : ""
                }`}
                href="#videos"
              >
                Useful videos
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default PresentTenses;
