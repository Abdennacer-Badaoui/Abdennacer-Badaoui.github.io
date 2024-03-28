AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "K-diffusion with a TransformerEncoder (Ongoing)",
    cardImage: "assets/images/1fsGpkQcKn71z1TRGR89bg.jpg",
    description: "This project investigates the use of transformer encoders for predicting noise added to a vector or matrix. The goal is to train a model that can effectively capture the underlying noise patterns and accurately predict the noise value for each element in the sequence. ",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/K-Diffusion_with_Transformer_Encoder",
  },
  {
    title: "Segmentation of Optic Nerve Sheath",
    cardImage: "assets/images/Measurement-of-optic-nerve-sheath-diameter-and-optic-nerve-diameter-ONSD-optic-nerve.png",
    description: "This project focused on ultrasound image segmentation of the optic nerve sheath for measuring its diameter.",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/Segmenation_of_nerf_optic_sheath",
  },
  {
    title: "Fashion MNIST Classification using CLIP Embeddings",
    cardImage: "assets/images/Fashion-MNIST-dataset.png",
    description: "Using CLIP embeddings for Fashion MNIST classification ",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/CLIP_on_Fashion_MNIST",
  },
  {
    title: "Anomaly Detection",
    cardImage: "assets/images/AdobeStock_106786408.jpeg",
    description: " Anomaly Detetction using Local Outlier Factor, Autoencoder and integration.",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/Anomaly-Detection",
  },
  {
    title: "Cross-sectional-equity-returns-prediction-with-machine-learning",
    cardImage: "assets/images/7385.jpg_wh860.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/Cross-sectional-equity-returns-prediction-with-machine-learning",
  },
  
  {
    title: "SÉCURITÉ ET DÉFENSE, ÉCOUTE ET HACKING",
    cardImage: "assets/images/oie_rnLj3DiE4hqJ.png",
    description:
      "Machine Learning appliqué à la détection et à la reconnaissance d'objets connectés ZigBee.",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/Connected-objects-detection",
  },
  {
    title: "Classification Of Geospatial Data",
    cardImage: "assets/images/20160702-geospatial-big-data-australia-geocube-1.jpg",
    description: " The aim of this project is to build a robust classifier able to classify some geospatial data.",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/Classification-of-geospatial_data",
  },
  {
    title: "MyVelib Bike Sharing System",
    cardImage: "assets/images/imageDefaut.jpg",
    description: "This project consisted in programming a management system for a fleet of bike rental in Java. It was realized within the framework of the course Object oriented software engineering of 2nd year at CentraleSupélec. ",
    tagimg:"",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/MyVelib_Bike_Sharing_System",
  },
  {
    title: "Localization of acoustic waves",
    cardImage: "assets/images/248486102-f5e1e9fb-488b-4e21-9c2e-d8f0fd4d2893.png",
    description:"Localization of acoustic waves",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/Abdennacer-Badaoui/Localisation-d-ondes-acoustiques",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
