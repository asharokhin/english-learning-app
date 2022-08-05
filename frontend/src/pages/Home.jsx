import React from 'react';

function Home() {
  return (
    <div>
      <div>
        <h1>Learn English language</h1>
        <h3>With high quality materials provided by Fluent English.</h3>
        <br />
        <form>
          <input style={{ borderBottomLeftRadius: '10px' }} type="text" placeholder="Search our materials, e.g. Past Perfect" />
          <button type="submit">  s</button>
        </form>
      </div>
      <br />
      <div>
        <h3>About Fluent English</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit!.</p>
      </div>
      <footer>
        Fluent English, 2022
      </footer>
    </div>

  );
}

export default Home;
