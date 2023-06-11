import { formatISO9075 } from "date-fns";

export default function Post({
  title,
  post,
  summary,
  cover,
  createdAt,
  author,
}) {
  return (
    <>
      <div className="post">
        <div className="image">
          <img
            src={"http://localhost:4000/" + cover}
            alt=""
            style={{ maxHeight: "550px" }}
          />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a href="author" className="author">
              {author.username}
            </a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
      {/* <div className="post">
        <div className="image">
          <img
            src="https://otakukart.com/wp-content/uploads/2022/07/Sagiri-723x576.jpg"
            alt=""
            style={{ maxHeight: "550px" }}
          />
        </div>
        <div className="texts">
          <h2>2023 New Waifu Unlocked: Sagiri</h2>
          <p className="info">
            <a href="author" className="author">
              Lynn Thit
            </a>
            <time>06-05-2023 02:00</time>
          </p>
          <p className="summary">
            Asaemon Sagiri's striking beauty is undeniable - her piercing eyes
            seem to see through your soul, her delicate hands convey power, and
            her confident stance exudes irresistible allure.
          </p>
        </div>
      </div> */}
      {/* <div className="post">
        <div className="image">
          <img
            src="https://github.com/LynnT-2003/hentai-blog-proj/blob/main/images/oshinoko.png?raw=true"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Oshi no ko Ep.1 Masterpiece </h2>
          <p className="info">
            <a href="author" className="author">
              Thurein Thway
            </a>
            <time>06-05-2023 02:20</time>
          </p>
          <p className="summary">
            What more could an anime ask for than a 90 minute pilot episode
            filled with striking animations, talented VAs and a story loyal to
            the manga. The experience was unlike any other anime, as if 4
            episodes of different genres were smashed together to create this
            masterpiece.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://github.com/LynnT-2003/hentai-blog-proj/blob/main/images/177013.png?raw=true"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>I survived 177013 </h2>
          <p className="info">
            <a href="author" className="author">
              Thurein Thway
            </a>
            <time>06-05-2023 03:10</time>
          </p>
          <p className="summary">
            This is how I actually survived reading 177013
          </p>
        </div>
      </div> */}
    </>
  );
}
