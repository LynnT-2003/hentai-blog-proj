import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
            <div className="post">
              <div className="image">
                <img
                  src="https://pbs.twimg.com/media/Fq5atUwaUAAnKEe.jpg"
                  alt=""
                  style={{ width: "723px", height: "576px" }}
                />
              </div>
              <div className="texts">
                <h2>Oshi no ko Ep.1 Masterpiece </h2>
                <p className="info">
                  <a href="author" className="author">
                    Thurein Thway
                  </a>
                  <time>06-05-2023 02:40</time>
                </p>
                <p className="summary">
                  What more could an anime ask for than a 90 minute pilot
                  episode filled with striking animations, talented VAs and a
                  story loyal to the manga.
                </p>
              </div>
            </div>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
