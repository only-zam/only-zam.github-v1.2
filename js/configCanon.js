const configCanon = {
    "jambP": 780,
    "interLock": 840,
    "lockSection": 620,
    "topBottom": 800,
    "headerP": 680,
    "sillP": 866,
    "glass": 130,
    "rubber": 50,
    "woolFile": 100,
    "rollers": 150,
    "lock": 650,
    "guiders": 30,
    "tube": 620,
    "butterFly": 520,
    "jambCover": 300,
    "singleHeader": 350,
    "divider": 480,
    "installPc": 0.275,
    "pOutter": 650,
    "pInner": 750,
    "sideArms": 900,
    "projectHandle": 600,
    "projectBidding": 335,
  };


const profileDropdownBox2 = document.getElementById("profileColour");

  profileDropdownBox2.addEventListener("change", function() {
  console.log("Selected profile colour changed to:", profileDropdownBox2.value);
  updateProfileConfig(profileDropdownBox2.value);
  console.log("configCanon.jambP updated to:", configCanon.jambP);
  console.log("configCanon.lockSection updated to:", configCanon.lockSection);
});
  console.log("Initial value of configCanon.jambP:", configCanon.jambP);

  function updateProfileConfig(selectedValue) {

  switch (selectedValue) {
      case "white":
      case "silver":
      case "brown":
        setSillProperties(920);
        setOutterFrameProperties(680);
        setInterlockProperties(840);
        setLockSectionProperties(620);
        setTopBottomProperties(740)
        setButterFlyProperties(510);
        setJambCoverProperties(300);
        setProjectedProperties(750);
        setProjectBiddingProperties(335);
        setSingleHeaderProperties(350);
      break;


      case "black":
      case "grey":
      case "champagne":
        setSillProperties(870);
        setOutterFrameProperties(720);
        setInterlockProperties(850);
        setLockSectionProperties(620);
        setTopBottomProperties(800)
        setButterFlyProperties(520);
        setJambCoverProperties(340);
        setProjectedProperties(750);
        setProjectBiddingProperties(395);
        setSingleHeaderProperties(395);
      break;

      default:
      break;
      }
    }

    function setSillProperties(value) {
      configCanon.sillP = value;
    }

    function setOutterFrameProperties(value) {
        configCanon.jambP = value;
        configCanon.headerP = value;
        configCanon.tube = value;
    }

    function setInterlockProperties(value) {
        configCanon.interLock = value;
    }

    function setLockSectionProperties(value) {
        configCanon.lockSection = value;
    }

    function setTopBottomProperties(value) {
        configCanon.topBottom = value;
    }

    function setButterFlyProperties(value) {
        configCanon.butterFly = value;
  }

    function setJambCoverProperties(value) {
        configCanon.jambCover = value;
    }

    function setProjectedProperties(value) {
        configCanon.pInner = value;
        configCanon.pOutter = value;
    }    

    function setProjectBiddingProperties(value) {
        configCanon.projectBidding = value;
    }

    function setSingleHeaderProperties(value) {
        configCanon.singleHeader = value;
    }



// Define the event listener for the glass type select element
const glassTypeBox2 = document.getElementById("glassType");
glassTypeBox2.addEventListener("change", function() {
  const selectedType = glassTypeBox2.value;
  console.log("Selected glass type changed to:", selectedType);
  updateGlassConfig(selectedType, glassThicknessBox2.value);

});

// Define the event listener for the glass thickness select element
  const glassThicknessBox2 = document.getElementById("glassThickness");
  glassThicknessBox2.addEventListener("change", function() {
  const selectedThickness = glassThicknessBox2.value;
  const selectedType = glassTypeBox2.value;
  console.log("Selected thickness-type pair changed to:", selectedThickness + "-" + selectedType);
  updateGlassConfig(selectedType, glassThicknessBox2.value);
});


// Defines a function to update the glass configuration based on the selected type and thickness
function updateGlassConfig(selectedType, selectedThickness) {
  switch (selectedType) {
    case "clear":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(130);
                break;
              case "5mm":
                setGlassPrice(160);
                break;
              case "6mm":
                setGlassPrice(180);
                break;
              case "8mm":
                setGlassPrice(210);
                break;
              case "3+3mmLam":
                setGlassPrice(300);
                break;
              case "4+4mmLam":
                setGlassPrice(350);
                break;
              case "5+5mmLam":
                setGlassPrice(400);
                break;
              case "6mmTuff":
                setGlassPrice(300);
                break;
              case "8mmTuff":
                setGlassPrice(350);
                break;
           }
           break;
    case "oneWay":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(170);
                break;
              case "5mm":
                setGlassPrice(200);
                break;
              case "6mm":
                setGlassPrice(220);
                break;
              case "8mm":
                setGlassPrice(240);
                break;
              case "3+3mmLam":
                setGlassPrice(350);
                break;
              case "4+4mmLam":
                setGlassPrice(380);
                break;
              case "5+5mmLam":
                setGlassPrice(420);
                break;
              case "6mmTuff":
                setGlassPrice(360);
                break;
              case "8mmTuff":
                setGlassPrice(410);
                break;
           }
      break;
    case "tinted":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(170);
                break;
              case "5mm":
                setGlassPrice(200);
                break;
              case "6mm":
                setGlassPrice(220);
                break;
              case "8mm":
                setGlassPrice(240);
                break;
              case "3+3mmLam":
                setGlassPrice(350);
                break;
              case "4+4mmLam":
                setGlassPrice(380);
                break;
              case "5+5mmLam":
                setGlassPrice(420);
                break;
              case "6mmTuff":
                setGlassPrice(360);
                break;
              case "8mmTuff":
                setGlassPrice(410);
                break;
           }
      break;
    case "obscured":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(150);
                break;
              case "5mm":
                setGlassPrice(180);
                break;
              case "6mm":
                setGlassPrice(200);
                break;
              case "8mm":
                setGlassPrice(220);
                break;
           }
      break;
  }

  function setGlassPrice(value) {
        configCanon.glass = value;
      }

  console.log("configCanon.glass updated to:", configCanon.glass);
}


console.log("Initial value of configCanon.glass:", configCanon.glass);

