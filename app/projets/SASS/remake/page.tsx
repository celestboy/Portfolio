"use client";


import React, { useState } from "react";
import Image from "next/image";
import "/styles/items/SASS/remake/style.css";

const IntegrationPage: React.FC = () => {
  const [navResponsive, setNavResponsive] = useState(false);

  const handleBurgerClick = () => {
    setNavResponsive(!navResponsive);
  };

  return (
    <>
      <a href="../../../" className="retour_bouton">
        Retour
      </a>

      <header className="header">
        <nav className="header__nav">
          <Image
            src="/items/SASS/logo-remake.svg"
            alt="Remake logo"
            width={100}
            height={100}
          />
          <button className="header__nav__burger" onClick={handleBurgerClick}>
            <span className="header__nav__burger--bar"></span>
            <span className="header__nav__burger--bar"></span>
            <span className="header__nav__burger--bar"></span>
          </button>
          <div
            className="header__nav__responsive__container"
            id={navResponsive ? "navResponsive" : ""}
          >
            <ul className="header__nav__list">
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__list__item__link">
                  Home
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__list__item__link">
                  Category
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__list__item__link">
                  About
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__list__item__link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="header__nav__searchbar">
              <svg
                className="header__nav__searchbar__loupe"
                width="25"
                height="25"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.034 9.47059L8.18704 7.63196C8.90686 6.73772 9.25671 5.60168 9.16464 4.45743C9.07258 3.31317 8.5456 2.24768 7.69207 1.48003C6.83854 0.712383 5.72333 0.300933 4.57576 0.330283C3.42818 0.359633 2.33546 0.827552 1.52229 1.63783C0.709112 2.4481 0.237292 3.53914 0.203841 4.6866C0.17039 5.83407 0.577852 6.95074 1.34244 7.80701C2.10704 8.66328 3.17064 9.19406 4.31456 9.29021C5.45848 9.38636 6.59576 9.04057 7.49256 8.32395L9.32461 10.1626C9.37089 10.2094 9.42598 10.2466 9.48671 10.272C9.54744 10.2974 9.61261 10.3106 9.67845 10.3107C9.74428 10.3108 9.80949 10.2979 9.87031 10.2727C9.93113 10.2475 9.98636 10.2105 10.0328 10.1638C10.1229 10.071 10.1733 9.9468 10.1736 9.81746C10.1738 9.68812 10.1238 9.56375 10.034 9.47059V9.47059ZM4.69468 8.31895C4.00421 8.31772 3.3296 8.11176 2.75617 7.72713C2.18275 7.3425 1.73626 6.79646 1.47316 6.15807C1.21007 5.51968 1.14219 4.81761 1.2781 4.14064C1.41402 3.46367 1.74763 2.84221 2.23674 2.35484C2.72586 1.86747 3.34851 1.53608 4.02596 1.40259C4.70341 1.26909 5.40523 1.33948 6.04268 1.60486C6.68012 1.87023 7.22456 2.31867 7.60714 2.89347C7.98973 3.46826 8.19327 4.1436 8.19204 4.83408C8.19038 5.75998 7.82098 6.6473 7.1651 7.30084C6.50922 7.95438 5.62058 8.32061 4.69468 8.31895V8.31895Z"
                  fill="#667479"
                />
              </svg>

              <input
                className="header__nav__searchbar__input"
                type="text"
                placeholder="Search something here!"
              />
            </div>

            <button className="header__nav__button">Login</button>
          </div>
        </nav>

        <section className="header__section">
          <h1 className="header__section__title">One more friend</h1>
          <h2 className="header__section__subtitle">Thousands more fun!</h2>
          <p className="header__section__text">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="header__section__button">
            <button className="header__section__button--intro">
              View Intro
              <svg
                className="header__section__button--intro--svg"
                width="25"
                height="25"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.86651 4.35738L4.8601 7.94824L7.85569 6.15816L4.86651 4.35738Z"
                  fill="#003459"
                  stroke="#003459"
                  strokeWidth="0.897717"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="header__section__button--explore">
              Explore Now
            </button>
          </div>
        </section>

        <Image
          className="main__section2__img"
          src="/items/SASS/header-image.png"
          alt="Main header image"
          width={1200}
          height={600}
          layout="responsive"
        />
      </header>

      <main className="main">
        <section className="main__section0">
          <div className="main__section0__header">
            <p className="main__section0__header__text1">Whats new ?</p>
            <h3 className="main__section0__header__text2">
              Take a look at some of our pets
            </h3>
            <button className="main__section0__header__button">
              View more
              <svg
                className="main__section0__header__button--svg"
                width="10"
                height="15"
                viewBox="0 0 4 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.27637 0.642578L3.26773 2.64107L1.26924 4.63242"
                  stroke="#003459"
                  strokeWidth="0.897717"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="main__section1__articles">
            {Array.from({ length: 8 }).map((_, index) => (
              <article
                key={index}
                className="main__section1__articles__article"
              >
                <Image
                  className="main__section1__articles__article__img"
                  src="/items/SASS/chien.png"
                  alt="chien disponible à l'adoption"
                  width={600}
                  height={400}
                />
                <h3 className="main__section1__articles__article__title">
                  MO231 - Pomeranian White
                </h3>

                <div
                  className="article-info"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>
                    Genre:{" "}
                    <span className="main__section1__articles__article__text--span">
                      Male
                    </span>
                  </span>
                  <span style={{ fontSize: ".5rem" }}>⚫</span>
                  <span>
                    Âge:{" "}
                    <span className="main__section1__articles__article__text--span">
                      02 months
                    </span>
                  </span>
                </div>

                <p className="main__section1__articles__article__price">
                  6.900.000 VND
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="main__section2">
          <div className="main__section2__text-block">
            <h2 className="main__section2__text-block__title">
              One More Friend
            </h2>
            <h3 className="main__section2__text-block__subtitle">
              Thousands More Fun!
            </h3>
            <p className="main__section2__text-block__text">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            <div className="main__section2__button">
              <button className="main__section2__button--intro">
                View Intro
                <svg
                  className="main__section2__button--intro--svg"
                  width="25"
                  height="25"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.86651 4.35738L4.8601 7.94824L7.85569 6.15816L4.86651 4.35738Z"
                    fill="#003459"
                    stroke="#003459"
                    strokeWidth="0.897717"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="main__section2__button--explore">
                Explore Now
              </button>
            </div>
          </div>

          <Image
            className="main__section2__img"
            src="/items/SASS/section2-image.png"
            alt="//"
            width={600}
            height={400}
            layout="intrinsic"
          />
        </section>

        <section className="main__section0">
          <div className="main__section0__header">
            <p className="main__section0__header__text1">You already know ?</p>
            <h3 className="main__section0__header__text2">
              Useful pet knowledge
            </h3>
            <button className="main__section0__header__button">
              View more
              <svg
                className="main__section0__header__button--svg"
                width="10"
                height="15"
                viewBox="0 0 4 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.27637 0.642578L3.26773 2.64107L1.26924 4.63242"
                  stroke="#003459"
                  strokeWidth="0.897717"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="main__section3">
          <article className="main__section3__article">
            <Image
              className="main__section3__article__img"
              src="/items/SASS/chien3.png"
              alt="//"
              width={600}
              height={400}
              layout="intrinsic"
            />

            <span className="main__section3__article__span">Pet knowledge</span>

            <h3 className="main__section3__article__title">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </h3>

            <p className="main__section3__article__subtitle">
              Pet knowledge What is a Pomeranian? How to Identify Pomeranian
              Dogs The Pomeranian, also known as the Pomeranian (Pom dog), is
              always in the top of the cutest pets. Not only that, the small,
              lovely, smart, friendly, and skillful circus dog breed.
            </p>
          </article>

          <article className="main__section3__article">
            <Image
              className="main__section3__article__img"
              src="/items/SASS/chien3.png"
              alt="//"
              width={600}
              height={400}
              layout="intrinsic"
            />

            <span className="main__section3__article__span">Pet knowledge</span>

            <h3 className="main__section3__article__title">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </h3>

            <p className="main__section3__article__subtitle">
              Pet knowledge What is a Pomeranian? How to Identify Pomeranian
              Dogs The Pomeranian, also known as the Pomeranian (Pom dog), is
              always in the top of the cutest pets. Not only that, the small,
              lovely, smart, friendly, and skillful circus dog breed.
            </p>
          </article>

          <article className="main__section3__article">
            <Image
              className="main__section3__article__img"
              src="/items/SASS/chien3.png"
              alt="//"
              width={600}
              height={400}
              layout="intrinsic"
            />

            <span className="main__section3__article__span">Pet knowledge</span>

            <h3 className="main__section3__article__title">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </h3>

            <p className="main__section3__article__subtitle">
              Pet knowledge What is a Pomeranian? How to Identify Pomeranian
              Dogs The Pomeranian, also known as the Pomeranian (Pom dog), is
              always in the top of the cutest pets. Not only that, the small,
              lovely, smart, friendly, and skillful circus dog breed.
            </p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <section className="footer__section1">
          <h2 className="footer__section1__title">
            Register now so you don&apos;t miss our programs
          </h2>

          <div className="footer__section1__searchbar">
            <input
              type="text"
              className="footer__section1__searchbar__input"
              placeholder="Enter your Email"
            />

            <button className="footer__section1__searchbar__button">
              Subscribe Now
            </button>
          </div>
        </section>

        <section className="footer__section2">
          <ul className="footer__section2__list">
            <li className="footer__section2__list__item">
              <a className="footer__section2__list__item__link" href="#">
                Home
              </a>
            </li>
            <li className="footer__section2__list__item">
              <a className="footer__section2__list__item__link" href="#">
                Category
              </a>
            </li>
            <li className="footer__section2__list__item">
              <a className="footer__section2__list__item__link" href="#">
                About
              </a>
            </li>
            <li className="footer__section2__list__item">
              <a className="footer__section2__list__item__link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <ul className="footer__section2__list2">
            <li className="footer__section2__list2__item">
              <a href="#" className="footer__section2__list2__item__link">
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 16 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1656 7.60124C15.1524 3.6349 11.9264 0.430236 7.96001 0.443418C3.99367 0.456599 0.789006 3.68264 0.802188 7.64898C0.814101 11.2335 3.4502 14.1959 6.88532 14.7233L6.86864 9.7048L5.04516 9.71086L5.03826 7.6349L6.86174 7.62884L6.85648 6.04662C6.8505 4.24671 7.9194 3.24893 9.55983 3.24348C10.3453 3.24087 11.1679 3.37841 11.1679 3.37841L11.1738 5.14577L10.2682 5.14878C9.37611 5.15175 9.09966 5.70631 9.10154 6.27481L9.10602 7.62138L11.0978 7.61476L10.7863 9.69178L9.11292 9.69734L9.1296 14.7158C12.5611 14.1656 15.1775 11.1858 15.1656 7.60124Z"
                    fill="#00171F"
                  />
                </svg>
              </a>
            </li>

            <li className="footer__section2__list2__item">
              <a href="#" className="footer__section2__list2__item__link">
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_53_1881)">
                    <path
                      d="M4.6433 13.3417C10.0621 13.3237 13.0119 8.82332 12.9989 4.93033C12.9985 4.80409 12.9953 4.67506 12.9893 4.54883C13.5646 4.12984 14.0606 3.61158 14.4539 3.0184C13.9176 3.25916 13.3478 3.41712 12.7641 3.4869C13.3777 3.1163 13.8362 2.53579 14.0545 1.85297C13.4772 2.19769 12.8454 2.44161 12.1862 2.57427C11.7403 2.10352 11.1516 1.7928 10.5113 1.69016C9.871 1.58751 9.21472 1.69866 8.64393 2.00641C8.07313 2.31415 7.61961 2.80137 7.35349 3.39272C7.08736 3.98407 7.02345 4.64661 7.17164 5.27793C6.00021 5.22305 4.85338 4.9226 3.80552 4.39606C2.75765 3.86953 1.83213 3.12866 1.08896 2.22148C0.71493 2.87132 0.602368 3.63918 0.774148 4.36903C0.945929 5.09887 1.38916 5.73592 2.01376 6.15071C1.54584 6.13741 1.0878 6.01296 0.677477 5.78765L0.677598 5.82412C0.679441 6.50476 0.916938 7.16375 1.34972 7.68909C1.7825 8.21442 2.38385 8.57367 3.05155 8.70577C2.61853 8.82579 2.1637 8.84458 1.72226 8.76068C1.91249 9.34541 2.28053 9.85616 2.77501 10.2216C3.2695 10.5871 3.86575 10.7891 4.48055 10.7994C3.43959 11.6227 2.1518 12.0717 0.824611 12.074C0.589245 12.0744 0.354063 12.0608 0.120325 12.0332C1.47148 12.8937 3.04141 13.3479 4.6433 13.3417Z"
                      fill="#00171F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_53_1881">
                      <rect
                        width="14.3635"
                        height="14.3635"
                        fill="white"
                        transform="translate(0.0810547 0.339844) rotate(-0.190416)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>

            <li className="footer__section2__list2__item">
              <a href="#" className="footer__section2__list2__item__link">
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_53_1882)">
                    <path
                      d="M7.5688 1.48229C9.48766 1.47591 9.71492 1.48357 10.4697 1.51473C11.1711 1.54326 11.5502 1.65982 11.803 1.75717C12.1373 1.88511 12.3791 2.04141 12.6296 2.29025C12.8829 2.54189 13.038 2.77984 13.1682 3.11324C13.2672 3.3654 13.3863 3.74653 13.4195 4.44496C13.4556 5.2023 13.4648 5.4295 13.4712 7.34555C13.4775 9.26441 13.4699 9.49167 13.4387 10.2464C13.4102 10.9479 13.2936 11.327 13.1963 11.5798C13.0684 11.9141 12.9121 12.1558 12.6632 12.4063C12.4116 12.6597 12.1736 12.8147 11.8402 12.9449C11.5881 13.0439 11.2069 13.163 10.5085 13.1962C9.75116 13.2324 9.52396 13.2416 7.60791 13.2479C5.68905 13.2543 5.46179 13.2466 4.70703 13.2155C4.0056 13.187 3.62648 13.0704 3.37367 12.973C3.03941 12.8451 2.79763 12.6888 2.54712 12.44C2.2938 12.1883 2.13871 11.9504 2.00856 11.617C1.90953 11.3648 1.79044 10.9837 1.75726 10.2852C1.72108 9.52791 1.71191 9.30071 1.70554 7.38466C1.69916 5.4658 1.70682 5.23854 1.73798 4.48379C1.76651 3.78235 1.88307 3.40323 1.98042 3.15042C2.10836 2.81616 2.26465 2.57438 2.5135 2.32387C2.76514 2.07055 3.00308 1.91546 3.33649 1.78531C3.58865 1.68628 3.96978 1.56719 4.66821 1.53401C5.42274 1.49784 5.64994 1.48867 7.5688 1.48229ZM7.56451 0.189023C5.61479 0.195503 5.37075 0.20473 4.605 0.240939C3.84206 0.277139 3.31787 0.402318 2.86399 0.580566C2.3905 0.767294 1.99015 1.01269 1.59312 1.41518C1.19328 1.81487 0.950548 2.21685 0.766962 2.68876C0.591744 3.14662 0.470043 3.66883 0.438915 4.432C0.407805 5.20077 0.4002 5.44487 0.40668 7.39458C0.41316 9.3443 0.422387 9.58834 0.458596 10.3541C0.494797 11.117 0.619975 11.6412 0.798223 12.0951C0.984951 12.5686 1.23035 12.9689 1.63284 13.366C2.03252 13.763 2.43451 14.0085 2.90641 14.1893C3.36427 14.3645 3.88648 14.4862 4.64964 14.5174C5.41562 14.5485 5.65971 14.5561 7.60943 14.5496C9.55914 14.5431 9.80318 14.5339 10.5689 14.4977C11.3319 14.4615 11.8561 14.3363 12.3099 14.1581C12.7806 13.9742 13.181 13.726 13.578 13.3263C13.975 12.9266 14.2206 12.5246 14.4014 12.0527C14.5766 11.5948 14.6983 11.0726 14.7294 10.3095C14.7605 9.54349 14.7681 9.2994 14.7617 7.34968C14.7552 5.39996 14.746 5.15593 14.7097 4.39018C14.6735 3.62724 14.5484 3.10305 14.3701 2.64917C14.1918 2.17284 13.9464 1.77249 13.5439 1.37546C13.1442 0.978429 12.7422 0.732891 12.2703 0.55211C11.8125 0.376893 11.2903 0.255191 10.5271 0.224063C9.75832 0.190148 9.51422 0.182543 7.56451 0.189023Z"
                      fill="#00171F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_53_1882">
                      <rect
                        width="14.3635"
                        height="14.3635"
                        transform="translate(0.382812 0.212891) rotate(-0.190416)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </section>

        <section className="footer__section3">
          <p className="footer__section3__text">
            © 2022 Monito. All rights reserved.
          </p>

          <Image
            src="/items/SASS/logo-remake.svg"
            alt="Remake logo"
            width={100}
            height={100}
          />

          <div className="footer__section3__container">
            <p className="footer__section3__container__text1">
              Terms of service
            </p>
            <p className="footer__section3__container__text2">Privacy policy</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default IntegrationPage;
