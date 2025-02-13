'use client'


import React, { useEffect } from "react";
import "/styles/items/remake_tesla.css";

const TeslaPage = () => {
  useEffect(() => {
    const menu = document.querySelector("#nav_menu");
    if (menu) {
      menu.addEventListener("click", () => {
        document.body.style.overflow = "hidden";

        const menuDiv = document.createElement("div");
        menuDiv.classList.add("nav_menu_class");
        document.body.appendChild(menuDiv);

        const fondNoir = document.createElement("div");
        fondNoir.classList.add("fond_noir_class");
        document.body.appendChild(fondNoir);

        const menuDivCross = document.querySelector(
          "#nav_menu_cross"
        ) as HTMLElement;
        menuDivCross.style.display = "initial";

        const navMenuList = document.querySelector(
          "#nav_menu_list"
        ) as HTMLElement;
        navMenuList.style.display = "initial";

        const navMenuListLi = document.querySelector(
          "#nav_menu_list_li"
        ) as HTMLElement;
        navMenuListLi.style.display = "initial";

        const navMenuListPosition = document.querySelector(
          "#nav_menu_list_position"
        ) as HTMLElement;
        navMenuListPosition.style.display = "flex";

        const menuListDivPosition = document.querySelector(
          "#nav_menu_list_position"
        );
        menuListDivPosition?.addEventListener("click", () => {
          navMenuListPosition.style.display = "none";
          navMenuListLi.style.display = "none";
          const navMenuBack = document.querySelector(
            "#nav_menu_back"
          ) as HTMLElement;
          navMenuBack.style.display = "flex";
          const navMenuListLiPosition = document.querySelector(
            "#nav_menu_list_li_position"
          ) as HTMLElement;
          navMenuListLiPosition.style.display = "initial";
        });

        const navMenuBack = document.querySelector(
          "#nav_menu_back"
        ) as HTMLElement;
        navMenuBack.addEventListener("click", () => {
          navMenuListPosition.style.display = "flex";
          navMenuListLi.style.display = "initial";
          navMenuBack.style.display = "none";
          const navMenuListLiPosition = document.querySelector(
            "#nav_menu_list_li_position"
          ) as HTMLElement;
          navMenuListLiPosition.style.display = "none";
        });

        menuDivCross.addEventListener("click", () => {
          document.body.style.overflow = "initial";
          menuDivCross.style.display = "none";
          menuDiv.remove();
          fondNoir.remove();
          navMenuList.style.display = "none";
          navMenuListLi.style.display = "none";
          navMenuBack.style.display = "none";
          const navMenuListLiPosition = document.querySelector(
            "#nav_menu_list_li_position"
          ) as HTMLElement;
          navMenuListLiPosition.style.display = "none";
        });

        fondNoir.addEventListener("click", () => {
          document.body.style.overflow = "initial";
          menuDivCross.style.display = "none";
          menuDiv.remove();
          fondNoir.remove();
          navMenuList.style.display = "none";
          navMenuListLi.style.display = "none";
          navMenuBack.style.display = "none";
          const navMenuListLiPosition = document.querySelector(
            "#nav_menu_list_li_position"
          ) as HTMLElement;
          navMenuListLiPosition.style.display = "none";
        });

        const topPageScroll = document.querySelector(
          "#top_page_scroll_svg"
        ) as HTMLElement;
        window.addEventListener("scroll", () => {
          const actualScroll = window.pageYOffset;
          if (actualScroll > 200) {
            topPageScroll.style.display = "initial";
          } else {
            topPageScroll.style.display = "none";
          }
        });

        topPageScroll.addEventListener("click", () => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });

        const scrollSvg = document.querySelector(
          "#first_page_scroll_svg"
        ) as HTMLElement;
        scrollSvg.addEventListener("click", () => {
          const teslaModelY = document.getElementById("tesla_modely");
          teslaModelY?.scrollIntoView({
            behavior: "smooth",
          });
        });

        const pageUp = document.getElementById("pageUp");
        pageUp?.addEventListener("click", () => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
      });

      // Add the performance event listeners
      const addPerfEvent = (
        model: string,
        perfId: string,
        performanceText: string
      ) => {
        const modelPerf = document.getElementById(perfId);
        modelPerf?.addEventListener("click", () => {
          modelPerf.style.display = "none";

          const modelPerfList = document.createElement("div");
          modelPerfList.classList.add(`${model}_perf_list_class`);
          document.body.appendChild(modelPerfList);

          const perfTextLine1 = document.createElement("p");
          perfTextLine1.classList.add("all_model_perf_text_line1_class");
          perfTextLine1.textContent = `Autonomy : ${performanceText}`;
          modelPerfList.appendChild(perfTextLine1);

          const perfTextLine2 = document.createElement("p");
          perfTextLine2.classList.add("all_model_perf_text_line2_class");
          perfTextLine2.textContent = "0 à 100 km/h : 3.2s";
          modelPerfList.appendChild(perfTextLine2);

          const modelPerfClose = document.getElementById(model);
          modelPerfClose?.addEventListener("click", () => {
            modelPerfList.remove();
            modelPerf.style.display = "flex";
          });
        });
      };

      addPerfEvent("model3", "model3_perf", "491 km");
      addPerfEvent("modely", "modely_perf", "430 km");
      addPerfEvent("models", "models_perf", "604 km");
      addPerfEvent("modelx", "modelx_perf", "534 km");
    }
  }, []);

  return (
    <div>
      <nav>
        <a href="remake_tesla.html">
          <img
            src="images/logo_tesla2.png"
            id="logo_tesla_id"
            alt="Tesla Logo"
          />
        </a>

        <ul id="ul_one" className="ul_nav">
          <li>
            <a href="#models_container" className="a_nav">
              Model S
            </a>
          </li>
          <li>
            <a href="#model3_container" className="a_nav">
              Model 3
            </a>
          </li>
          <li>
            <a href="#modelx_container" className="a_nav">
              Model X
            </a>
          </li>
          <li>
            <a href="#modely_container" className="a_nav">
              Model Y
            </a>
          </li>
          <li>
            <a href="#solar_roof_container" className="a_nav">
              Solar Roof
            </a>
          </li>
          <li>
            <a href="#solar_panels_container" className="a_nav">
              Solar Panels
            </a>
          </li>
        </ul>

        <ul id="ul_two" className="ul_nav">
          <li>
            <a href="#" className="a_nav">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="a_nav">
              Account
            </a>
          </li>
          <li>
            <a href="#" className="a_nav" id="nav_menu">
              Menu
            </a>
          </li>
        </ul>
      </nav>

      {/* Other components like model containers go here */}
      <a href="../../" className="retour_bouton">
        Retour
      </a>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        id="top_page_scroll_svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
        />
      </svg>

      <p id="pageUp">Top of the page</p>

      <script src="remake_tesla.js"></script>
    </div>
  );
};

export default TeslaPage;
