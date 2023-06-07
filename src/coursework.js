const dataFile = "./src/courses.json";

const fetchCourses = (file) => {
  let courseArray = Array();
  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((course) => {
        console.log(course);
        courseArray.push(course);
      });
      /*data.forEach((course) => {
        courses.push(course);*/
    })
    .catch((error) => console.error(error));
  return courseArray;
};

const courses = fetchCourses(dataFile);
const main = document.getElementsByTagName("main")[0];

const createCourseListing = (course) => {
  const container = document.createElement("section");
  container.classList.add("course-container");

  const numberAndTitleContainer = document.createElement("div");
  numberAndTitleContainer.classList.add("course-row-flex-container");

  const number = document.createElement("h2");
  number.textContent = "CS" + course.number + " - ";
  number.classList.add("number-and-title-text");

  const name = document.createElement("p");
  name.textContent = course.title;
  name.classList.add("number-and-title-text");

  numberAndTitleContainer.appendChild(number);
  numberAndTitleContainer.appendChild(name);

  container.appendChild(numberAndTitleContainer);

  const termAndInstructorContainer = document.createElement("div");
  termAndInstructorContainer.classList.add("term-row-flex-container");

  const term = document.createElement("p");
  term.textContent = `${course.term} ${course.year}`;
  term.classList.add("term-instructor-text");

  const instructor = document.createElement("p");
  instructor.textContent = course.instructor;
  instructor.classList.add("term-instructor-text");

  termAndInstructorContainer.appendChild(term);
  termAndInstructorContainer.appendChild(instructor);

  container.appendChild(termAndInstructorContainer);

  return container;
};

let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayCourseList(courses);
});

const displayCourseList = (courses) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const course in courses) {
    const courseListing = createCourseListing(courses[course]);
    app.appendChild(courseListing);
  }
};

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};
