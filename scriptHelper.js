// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty";
   } else if (isNaN(testInput) === false){
    return "Is a Number";
   } else {
    return "Not a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const h2 = document.getElementById("launchStatus");
    const ready = true;
    
    if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoMass)==="Empty"){
        alert("All fields are required.");
    } else if (validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number"){
        alert("Please use only letters for Pilot and Co-pilot names.");
    } else if (validateInput(fuelLevel)==="Not a Number" || validateInput(cargoMass)==="Not a Number"){
        alert("Please use only numbers for Fuel Level and Cargo Mass.");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready to get going`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready to make this happen`;
        
        if (fuelLevel < 10000){
            ready = false;
            fuelStatus.innerHTML = "You need more fuel, yo!";
        } else {
            fuelStatus.innerHTML = "Fuel levels good";
        }

        if (cargoMass > 10000){
            ready = false;
            cargoStatus.innerHTML = "We ain't going anywhere with this much mass!"
        } else {
            cargoStatus.innerHTML = "Way to pack light! Cargo mass is good to go!"
        }
    }

    
    

    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
