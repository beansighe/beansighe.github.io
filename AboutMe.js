let main = document.querySelector("main");

let headshot = document.createElement("img");
headshot.className = "img";
headshot.src = "../homework/images/headshot_monet.png";
headshot.alt = "selfie of Tierney in front of Monet's house, Giverny, France.";

let bio = document.createElement("p");
bio.textContent =
  " My name is Tierney McBride and I am a graduate student at PSU working\
 toward an M.S. in Computer Science and a Graduate Certificate in\
 Cybersecurity. This quarter I am taking Intro to Web Development,\
 Network Security, Music, Sound, and Computers, and Level B2 Swedish.\
 Things that I enjoy doing outside of school include playing mediocre\
 piano and guitar, playing video games mediocre-ally, and spreading the\
 gospel of Taskmaster UK.";
bio.className = "bio";

main.append(headshot);
main.append(bio);

console.log(bio.textContent);
