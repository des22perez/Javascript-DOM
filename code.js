//function for start button
function start() {
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//function for stop button
function stop() {
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

//dom req
function getData() {
    var loadedData = loadData();
    return loadedData;
}

//dom req
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += "  " + units;
    msg += "</td>";
    return msg;
}

//make sound function
function playCode() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
//to play any sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    //plays the function 
    this.play = function () {
        this.sound.play();
    }

    this.stop = function () {
        this.sound.pause();
    }
}

//creates table with data
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_alt,
        bmpSensor_press,
        bmpSensor_temp,
        dig_sensor_temp, 
        CSS_sensor_temp,
        CSS_sensor_eCO2,
        cssSensor_TVOC,
        UV,
        accel_x,
        accel_y,
        accel_z,
        mag_x,
        mag_y,
        mag_z,
        gyro_x,
        gyro_y,
        gyro_z

    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_alt = bmpSensor_alt;
        this.bmpSensor_press = bmpSensor_press;
        this.bmpSensor_temp = bmpSensor_temp;
        this.dig_sensor_temp = dig_sensor_temp;  
        this.CSS_sensor_temp = CSS_sensor_temp;
        this.CSS_sensor_eCO2 = CSS_sensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accel_x = accel_x;
        this.accel_y = accel_y;
        this.accel_z = accel_z;
        this.mag_x = mag_x;
        this.mag_y = mag_y;
        this.mag_z = mag_z;
        this.gyro_x = gyro_x;
        this.gyro_y = gyro_y;
        this.gyro_z = gyro_z;

    }
}


function playCraps() {
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //create sum of die1 and die2 variable
    var sum;
    //make die1 roll between 0-6 and round up for whole numbers
    die1 = Math.ceil(Math.random() * 6);
    //make die2 roll between 0-6 and round up for whole numbers
    die2 = Math.ceil(Math.random() * 6);
    //create sum formula
    sum = die1 + die2;
    //show rolled die1 value
    document.getElementById("die1Res").innerHTML = die1;
    //show rolled die2 value
    document.getElementById("die2Res").innerHTML = die2;
    //show rolled sum of die1 and 2 value
    document.getElementById("sumRes").innerHTML = sum;
    //lose if sum is 7 or 11
    if (sum == 7 || sum == 11) {
        //show that user has lost
        document.getElementById("crapsResults").innerHTML = "Craps You Lose!";
    }
    //win if die 1 and 2 are the same and they are even (%2=0 means it divides by 2 and has no remainder=even)
    else if (die1 == die2 && die1 % 2 == 0) {
        //show that user rolled even doubles and won
        document.getElementById("crapsResults").innerHTML = "Doubles, YOU WIN!!!";
    }
    //else means if none of the previous if statements are true
    else {
        //Allow user to play again if you get none of the previous results
        document.getElementById("crapsResults").innerHTML = "Push, please try again.";

    }

}

function runSandbox() {

    var count = 10;
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!!!";
        count--;
    }, 11000);
}

