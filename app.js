const { createElement: h } = React;

let sidebarOpen = false;

const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const navbar = document.querySelector(".top-navbar");

  sidebarOpen = !sidebarOpen;
  if (sidebarOpen) {
    sidebar.classList.add("visible");
    navbar.classList.add("shrink");
  } else {
    sidebar.classList.remove("visible");
    navbar.classList.remove("shrink");
  }
};

const topNavbar = h("header", { className: "top-navbar" }, [
  h("div", { className: "profile-nav", onClick: toggleSidebar }, [
    h("img", {
      src: "./white_background.png",
      alt: "Shivam Sheth",
      className: "nav-avatar"
    }),
    h("span", { className: "profile-name" }, "Shivam Sheth")
  ]),
  h("ul", { className: "nav-list-horizontal" }, [
    ...["Home", "About", "Resume", "Certifications", "Portfolio", "Contact"].map(section =>
      h("li", {}, h("a", {
        href: `#${section.toLowerCase()}`,
        className: "nav-link"
      }, section))
    ),
    h("li", { className: "dropdown" }, [
      h("span", { className: "nav-link dropdown-toggle" }, "Explore Me ▾"),
      h("ul", { className: "dropdown-menu" }, [
        ["GitHub", "https://github.com/Shivamsheth"],
        ["LinkedIn", "https://www.linkedin.com/in/shivam-sheth-4a9bb3241/"],
        ["Inventor", "https://pro-inventor.vercel.app"]
      ].map(([name, link]) =>
        h("li", {}, h("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, name))
      ))
    ])
  ])
]);

const sidebar = h("aside", { className: "sidebar" }, [
  h("div", { className: "profile" }, [
   h("img", {
  src: "./white_background.png",
  className: "avatar nav-avatar", // or nav-avatar
  alt: "Shivam Sheth"
}),

    h("h1", { className: "profile-name" }, "Shivam Sheth"),
    h("p", { className: "title" }, "Student - MCA (Full Stack Web)")
  ]),
  h("div", { className: "skills-grid" },
    [
      ["C Language", 4], ["Java", 3], ["JavaScript", 4],
      ["HTML", 5], ["CSS", 4], ["React JS", 4],
      ["Node JS", 4], ["MySQL", 4], ["PHP", 4], ["UI/UX", 4]
    ].map(([skill, level]) =>
      h("div", { className: "skill" }, [
        h("div", { className: "skill-title" }, skill),
        h("div", { className: "skill-bar-wrapper" },
          h("div", {
            className: "skill-bar",
            "data-level": (level / 5) * 100
          })
        )
      ])
    )
  )
]);

const mainContent = h("main", { className: "main-content" }, [
  h("section", { id: "home", className: "section fade-in" }, [
    h("h2", {}, "Welcome to My Portfolio"),
    h("p", { className: "justify" }, "This is my personal portfolio showcasing my journey, projects, and goals as a full-stack developer.")
  ]),
  h("section", { id: "about", className: "section fade-in" }, [
    h("h2", {}, "About Me"),
    h("p", { className: "justify" }, "I'm Shivam Sheth, currently pursuing my MCA at Parul University."),
    h("p", { className: "justify" }, "My passion lies in building innovative and client-focused digital solutions."),
    h("p", { className: "justify" }, "Open to remote and local (Gujarat) opportunities.")
  ]),
  h("section", { id: "resume", className: "section fade-in" }, [
    h("h2", {}, "Resume"),
    h("a", {
      href: "./resume.pdf",
      className: "btn",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "View Full Resume")
  ]),
  h("section", { id: "certifications", className: "section fade-in certifications" }, [
    h("h2", {}, "Certifications"),
    h("ul", {}, [
      h("li", {}, h("a", {
        href: "https://www.mygreatlearning.com/certificate/URERNYRS",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Agile Methodology – Great Learning")),
      h("li", {}, h("a", {
        href: "https://www.mygreatlearning.com/certificate/ATVHYDFJ",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Java Programming – Great Learning")),
      h("li", {}, "Advanced Java: JSP & Servlets – Simplilearn"),
      h("li", {}, "Java Spoken Tutorial – IIT Bombay"),
      h("li", {}, "Full Stack App Development – Parul University")
    ])
  ]),
  h("section", { id: "portfolio", className: "section fade-in" }, [
    h("h2", {}, "Portfolio"),
    h("div", { className: "portfolio-grid" }, [
      ["Employee Management System", "https://empmanagebyshivam.netlify.app"],
      ["GitHub Profile Tracker", "https://git-hub-profile-tracker-seven.vercel.app/"],
      ["Online Quiz Platform", "https://quizzz-jet.vercel.app/"],
      ["Pro-Inventor", "https://pro-inventor.vercel.app/"],
      ["Gullak", "https://gullak-budget.vercel.app/"],
      ["Google Sheet-Clone", "https://google-sheet-clone-plum.vercel.app/"]
    ].map(([title, url]) =>
      h("div", { className: "portfolio-item" },
        h("a", { href: url, target: "_blank", rel: "noopener noreferrer" }, title)
      )
    ))
  ]),
  h("section", { id: "contact", className: "section fade-in" }, [
    h("h2", {}, "Contact"),
    h("p", { className: "justify" }, "📧 Email: shivamsheth808@gmail.com"),
    h("p", { className: "justify" }, "📞 Phone: +91 9737887178"),
    h("p", { className: "justify" }, "🌍 From: India")
  ]),
  h("footer", { className: "footer fade-in" }, [
    h("p", {}, "© 2025 Shivam Sheth. All rights reserved.")
  ])
]);

const App = () => h("div", { className: "layout" }, [topNavbar, sidebar, mainContent]);
ReactDOM.render(h(App), document.getElementById("root"));

// === Animations and Interactivity ===
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    const level = bar.getAttribute("data-level");
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.transition = "width 1s ease-in-out";
      bar.style.width = `${level}%`;
    }, 300);
  });

  document.querySelectorAll(".fade-in").forEach(el => {
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 }).observe(el);
  });
});
