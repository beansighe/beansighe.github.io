// Add your code here
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  console.group("======== Form Submission =========");
  console.log("Name: %s", form.elements["name"].value);
  console.log("Username: %s", form.elements["username"].value);
  console.log("Email: %s", form.elements["email"].value);
  options = {
    dateStyle: "long",
    //day: "numeric",
    //month: "long",
    //year: "numeric"
  };
  dobFormat = new Intl.DateTimeFormat("en-US", options);
  console.log(
    "Date of Birth: %s",
    dobFormat.format(form.elements["dob"].valueAsDate)
  );
  pronounOpts = form.getElementsByClassName("pronoun-input");
  pronouns = null;
  for (let i = 0; i < 4; ++i) {
    if (pronounOpts[i].checked == true) {
      pronouns = pronounOpts[i].value;
    }
  }
  console.log("Pronouns: %s", pronouns);
  console.groupEnd();
  event.preventDefault();

  /*inputs = form.getElementsByTagName("input");

  for (let i = 0, len = inputs.length; i < len; ++i) {
    if (inputs[i].value == "")
      console.error("missing field: %s", inputs[i].name);
  }
  if (pronouns == null) {
    console.error("no pronoun selection made");
  }
  */
});
