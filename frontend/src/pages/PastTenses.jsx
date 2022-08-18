import React from "react";
import styles from "./PresentTenses.module.css";

const PastTenses = () => {
  return (
    <div>
      <h1>Past Tenses</h1>
      <h3>1 Past simple</h3>
      <table>
        <tbody>
          <tr>
            <td>+</td>
            <td>verb + -ed*</td>
            <td>
              <p className={styles.example}>
                I <strong>wanted</strong> it.
              </p>
            </td>
          </tr>
          <tr>
            <td>-</td>
            <td>did not + verb</td>
            <td>
              <p className={styles.example}>
                I <strong>didn&apos;t want</strong> it.
              </p>
            </td>
          </tr>
          <tr>
            <td>?</td>
            <td>did ... + verb?</td>
            <td>
              <p className={styles.example}>
                What <strong>did</strong> you <strong>want</strong>?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>*Regular verbs add -ed or -d to the verb:</p>
      <p className={styles.example}>
        <span>want</span> <span>&rarr;</span> <span>wanted</span>{" "}
        &nbsp;&nbsp;&nbsp;
        <span>hope</span> <span>&rarr;</span> <span>hoped</span>
      </p>
      <p>Many common verbs are irregular (See Irregular verbs):</p>
      <p className={styles.example}>
        <span>think</span> <span>&rarr;</span> <span>thought</span>{" "}
        &nbsp;&nbsp;&nbsp;
        <span>make</span> <span>&rarr;</span> <span>made</span>
      </p>
      <p>
        To <em>be</em> is irregular:
      </p>
      <p className={styles.example}>
        <i>am/is (not)</i> <span>&rarr;</span> <i>was (not)</i>
      </p>
      <p>We use the past simple:</p>
      <ul>
        <li>
          <p>for completed actions and events in the past:</p>
          <p className={styles.example}>
            We <strong>had</strong> an exam on Thursday.
          </p>
          <p className={styles.example}>
            We <strong>caught</strong> the coach.
          </p>
        </li>
        <li>
          <p>for a sequence of actions or events:</p>
          <p className={styles.example}>
            I <strong>went</strong> round the shops, then I{" "}
            <strong>went</strong> to the cinema.
          </p>
        </li>
        <li>
          <p>for permanent or long-term situations in the past:</p>
          <p className={styles.example}>
            I really <strong>enjoyed</strong> myself when I <strong>was</strong>{" "}
            a teenager.
          </p>
        </li>
        <li>
          <p>for repeated events:</p>
          <p className={styles.example}>
            Jack&apos;s grandmother <strong>went</strong> to lots of concerts.
          </p>
          <p className={styles.example}>
            She always <strong>asked</strong> for an autograph when she{" "}
            <strong>met</strong> someone famous.
          </p>
        </li>
      </ul>
      <p>Seee also Unit 3 for further uses of the past simple.</p>
      <h3>2 Past continuous</h3>
      <table>
        <tbody>
          <tr>
            <td>+</td>
            <td>was/were + verb + -ing</td>
            <td>
              <p className={styles.example}>
                They <strong>were</strong> waiting.
              </p>
            </td>
          </tr>
          <tr>
            <td>-</td>
            <td>was/were not + verb + -ing</td>
            <td>
              <p className={styles.example}>
                She <strong>wasn&apos;t waiting</strong>.
              </p>
            </td>
          </tr>
          <tr>
            <td>?</td>
            <td>was/were ... + verb + -ing?</td>
            <td>
              <p className={styles.example}>
                <strong>Were</strong> you <strong>waiting</strong>?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>We use past continuous:</p>
      <ul>
        <li>
          <p>
            for an activity beginning before a past action and continuing until
            or after it. The action is usually in the past simple:
          </p>
          <div>
            <p className={styles.example}>
              We did some revision while we <strong>were travelling</strong>.
            </p>
            <div>
              <div>we were travelling</div>
              <div />
              <div>we did some revision</div>
            </div>
          </div>
          <div>
            <p className={styles.example}>
              When we <strong>were queuing</strong> for the cinema, we saw a
              famous footballer.
            </p>
            <div>
              <div>we were queuing</div>
              <div />
              <div>we saw a famous footballer</div>
            </div>
          </div>
        </li>
        <li>
          <p>for two things happening at the same time:</p>
          <p className={styles.example}>
            He <strong>was buying</strong> a burger and all the crowds{" "}
            <strong>were walking</strong> past.
          </p>
          <div>
            <div>he was buying a burger</div>
            <div>the crowds were walking past</div>
          </div>
        </li>
        <li>
          <p>
            for repeated events, with a word like <em>always</em> or{" "}
            <em>continually</em>, especially if the speaker is criticising the
            activity:
          </p>
          <p>
            <span className={styles.example}>
              She <strong>was always worrying</strong> about her homework.{" "}
            </span>
            (= Jack &apos;s grandmother thinks she worried too much.)
          </p>
        </li>
        <li>
          <p>
            for unfulfilled plans, with verbs like <em>hope</em>, <em>plan</em>,
            etc.:
          </p>
          <p>
            <span className={styles.example}>
              I <strong>was hoping</strong> to find a new jacket.{" "}
            </span>
            (= but I didn&apos;t find one)
          </p>
        </li>
      </ul>
      <p>
        State verbs are nearly always used in the past simple, not the past
        continuous (see Unit 1, B3):
        <p>
          <span className={styles.example}>I didn&apos; know him.</span>&nbsp; (
          <strong>not</strong> <s>I wasn&apos;t knowing him</s>)
        </p>
      </p>
      <h3>
        3 <em>used to </em> + verb and <em>would</em> + verb
      </h3>
      <table>
        <tbody>
          <tr>
            <td>+</td>
            <td>used to + verb</td>
            <td>
              <p className={styles.example}>
                He <strong>used to read</strong> comics.
              </p>
            </td>
          </tr>
          <tr>
            <td>-</td>
            <td>did not use to + verb</td>
            <td>
              <p className={styles.example}>
                We <strong>didn&apos;t use to read</strong> comics.
              </p>
            </td>
          </tr>
          <tr>
            <td>?</td>
            <td>did ... use to + verb?</td>
            <td>
              <p className={styles.example}>
                <strong>Did</strong> you <strong>use to read</strong> comics?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <tbody>
          <tr>
            <td>+</td>
            <td>would + verb</td>
            <td>
              <p className={styles.example}>
                He <strong>would read</strong> comics.
              </p>
            </td>
          </tr>
          <tr>
            <td>-</td>
            <td>would not + verb</td>
            <td>
              <p className={styles.example}>
                We <strong>wouldn&apos;t read</strong> comics.
              </p>
            </td>
          </tr>
          <tr>
            <td>?</td>
            <td>would ... + verb?</td>
            <td>
              <p className={styles.example}>
                <strong>Would</strong> you <strong>read</strong> comics?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        We use <em>used to</em> and <em>would</em> to talk about past habits
        when we are emphasising that they are no longer true:
      </p>
      <p>
        <span className={styles.example}>
          I <strong>used to collect</strong> all the autographs of film stars
          when I was a teenager.
        </span>{" "}
        (= she doesn&apos;t do this now)
      </p>
      <p>
        <span className={styles.example}>
          I <strong>would go</strong> up to town on my own.
        </span>{" "}
        (= she doesn&apos;t do this now)
      </p>
      <p>
        <em>Used to</em> can describe actions and states, but <em>would</em> can
        only describe actions:
      </p>
      <p className={styles.example}>
        All the teenagers <strong>used to / would scream</strong> at pop
        concerts.
      </p>
      <p>
        <span className={styles.example}>
          They <strong>used to be</strong> crazy about the Beatles.
        </span>{" "}
        (<strong>not</strong> <s>would be crazy</s>)
      </p>
      <p>
        Notice the position of frequency adverbs (see Unit 8) with{" "}
        <em>used to</em>:
      </p>
      <p>
        <span className={styles.example}>
          I <strong>often used to study</strong> on my own.
        </span>{" "}
        (<strong>not</strong> <s>I used to often study</s>)
      </p>
      <p>
        <em>Used to</em> is much more common than <em>would</em>.
      </p>
      <h3>
        4 <em>be/get used to</em> + -ing or noun
      </h3>
      <p>
        <em>Be used to</em> means &lsquo;be accustomed to&rsquo;. It can be
        past, present or future, unlike <em>used to</em>, which is a past tense.
      </p>
      <p>
        <span className={styles.example}>
          I<strong>&apos;m used to working</strong> at weekends.
        </span>{" "}
        (= I often work at weekends, it&apos;s normal for me now)
      </p>
      <p>The question form is:</p>
      <p className={styles.example}>
        <strong>Are</strong> you <strong>used to working</strong> at weekends?
      </p>
      <p>
        <em>Get used to</em> means &lsquo;gradually become accustomed to&rsquo;.
        It can be past, present or future, unlike <em>used to</em>, which is a
        past tense.
      </p>
      <p>
        <span className={styles.example}>
          {" "}
          My new school starts at 7.30. I&apos;m not used to starting classes so
          early but I guess I&apos;<strong>ll</strong> soon{" "}
          <strong>get used to doing</strong> it.
        </span>{" "}
        (= My previous school started later, but I&apos;ll soon become
        accustomed to the change and it won&apos;t bother me.)
      </p>
      <p>
        <em>Be/get used to</em> can be followed by <em>-ing</em> or by a
        noun/pronoun:
      </p>
      <p>
        <span className={styles.example}>
          He <strong>wasn&apos;t used to criticism</strong> and found it hard to
          accept.
        </span>{" "}
        (= People hadn&apos;t criticised him before so he didn&apos;t like it.)
      </p>
      <p>
        <span className={styles.example}>
          My parents <strong>are getting used to</strong> a quiet{" "}
          <strong>house</strong>, now the children have all left home.
        </span>{" "}
        (= When the children first left, my parents found the house strangely
        quiet, but it&apos;s gradually becoming normal for them.)
      </p>
    </div>
  );
};

export default PastTenses;
