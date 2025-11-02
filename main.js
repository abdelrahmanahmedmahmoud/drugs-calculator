let requiaredDoseIV = document.getElementById("requiredIV");
let drugname = document.getElementById("dose-input-IV");
let monitor = document.getElementById("monitor");
let weightIV = document.getElementById("weightIV");
let resultIV = document.getElementById("resultIV");
let takenIV = document.getElementById("takenIV");
let minumimIV = document.getElementById("minumimIV");
let maxIV = document.getElementById("maximumIV");
let timeIV = document.getElementById("timeOfAdminstrationIV");
let durationIV = document.getElementById("DurationIV");
let stabilityIV = document.getElementById("StabilityOfVialIV");
let notesIV = document.getElementById("notesIV");
let renalAdjustmentIV = document.getElementById("renalAdjustmentIV");
let reconstituteIV = document.getElementById("ReconstitueIV");
let prefereddiluentIV = document.getElementById("prefereddiluentIV");
let maxperdoseIV = document.getElementById("maxPerDoseIV");
let concInMlIVconcinmlIV = document.getElementById("concInMlIV");
let rateIV = document.getElementById("rateIV");
let infusion = document.getElementById("infusion");

let rateSpecialCase = 0;
function calcIV(
  resultIV2,
  volumeToBeTakenFromVial,
  minFurtherDilution,
  maxFurtherDilution,
  timeOfAdminstrationIV,
  DurationIV,
  StabilityIV,
  NotesIV,
  RenalAdjustmentIV,
  ReconstituteIV,
  PrefereddiluentIV,
  MaxperdoseIV,
  ConcInMlIVconcinmlIV,
  Monitor,
  state = 0
) {
  infusion.innerText = ``;
  takenIV.innerHTML = `volume to be taken from vial is <span style ="color:red;">${
    Math.round(resultIV2 * volumeToBeTakenFromVial * 100) / 100
  }</span> ml`;
  resultIV.innerHTML = `Dose For child <span style = "color:red;">${resultIV2}</span> mg`;
  timeIV.innerText = `Taken over ${timeOfAdminstrationIV}`;
  durationIV.innerHTML = `Duration  is ${DurationIV}`;
  stabilityIV.innerText = `Stability Of Vial is ${StabilityIV}`;
  notesIV.innerText = `Iv Push: ${NotesIV}`;
  renalAdjustmentIV.innerHTML = `Renal Adjustment  <span style="color:red;">${RenalAdjustmentIV}</span> required`;
  reconstituteIV.innerText = `   ${ReconstituteIV}`;
  prefereddiluentIV.innerText = `Prefered diluent is ${PrefereddiluentIV}`;
  maxperdoseIV.innerText = `Maximum Dose ${MaxperdoseIV} `;
  rateIV.innerHTML = ``;
  concInMlIVconcinmlIV.innerText = `To give ${ConcInMlIVconcinmlIV} / ml`;
  monitor.innerText = `Monitor: ${Monitor}`;
  minumimIV.innerHTML = `Minimum Further Dilution is <span style="color:red";>${
    Math.round((resultIV2 / minFurtherDilution) * 100) / 100
  }</span> ml diluent`;
  maxIV.innerHTML = `Maximum Further Dilution is  <span style="color:red";>${
    Math.round((resultIV2 / maxFurtherDilution) * 100) / 100
  }</span> ml diluent`;
  if (state === 1) {
    minumimIV.innerHTML = `Minimum Further Dilution Not Less Than <span style="color:red";>${
      Math.round((resultIV2 / minFurtherDilution) * 100) / 100
    }</span> ml diluent`;
    maxIV.innerText = ``;

  } else if (state === 2) {
    minumimIV.innerHTML = `Minimum Further Dilution Not More Than <span style="color:red";>${
      Math.round((resultIV2 / minFurtherDilution) * 100) / 100
    }</span> ml diluent`;
    maxIV.innerText = ``;
    rateIV.innerHTML = ``;
        console.log("here");
  }
  if (state === 3) {
    rateIV.innerHTML = ``;
    console.log("here");
    resultIV.innerHTML = `Dose For child <span style = "color:red;">${
      resultIV2 * 24
    }</span> mcq`;
    takenIV.innerHTML = `volume to be taken from vial is <span style ="color:red;">${
      Math.round(resultIV2 *24 * volumeToBeTakenFromVial * 100) / 100
    }</span> ml`;
    minumimIV.innerHTML = `Dilution is <span style="color:red";>${
      Math.round((resultIV2 *24 / minFurtherDilution) * 100) / 100
    }</span> ml diluent`;
    maxIV.innerText = ``;
  } else if (state === 4) {
    rateIV.innerHTML = `Rate of infusion is <samp style="color:red;">${
      Math.round(((resultIV2 * 24) / minFurtherDilution / 24) * 100) / 100
    }</samp> ml/hr`;
    maxIV.innerText = ``;
    resultIV.innerHTML = `Dose For child <span style = "color:red;">${
      resultIV2 * 24
    }</span> mg`;
    takenIV.innerHTML = `volume to be taken from vial is <span style ="color:red;">${
      Math.round(resultIV2 *24* volumeToBeTakenFromVial * 100) / 100
    }</span> ml`;
    minumimIV.innerHTML = `Dilution is <span style="color:red";>${
      Math.round((resultIV2 *24 / minFurtherDilution) * 100) / 100
    }</span> ml diluent`;
  }
  if (state === 5) {
    console.log("done");
    minumimIV.innerHTML = `Dilution is <span style="color:red";>${
      Math.round((resultIV2 / minFurtherDilution) * 100) / 100
    }</span> ml diluent`;
    maxIV.innerText = ``;
  } else if (state === "mcg") {
    resultIV.innerHTML = `Dose for child is <span style="color:red;">${resultIV2}</span> mcq`;
  }

  if (state === 6) {
    prefereddiluentIV.innerText = "";
    takenIV.innerHTML = `volume to be taken from vial is <span style ="color:red;">${
      Math.round(resultIV2 * volumeToBeTakenFromVial * 100) / 100
    }</span> ml`;
    notesIV.innerText = ``;
    durationIV.innerHTML = "";
    timeIV.innerText = "";
    maxperdoseIV.innerText = "";
    resultIV.innerHTML = `Dose For child <span style = "color:red;">${resultIV2}</span> gm`;
    maxIV.innerText = ``;
    minumimIV.innerText = ``;

    infusion.innerHTML = `infusion time is <span style ="color:red;">${
      Math.round((resultIV2 / (weightIV.value * 0.1)) * 100) / 100
    }</span>hr`;
    rateIV.innerHTML = `infusion rate is <span style="color:red;">${
      Math.round(
        ((resultIV2 * volumeToBeTakenFromVial) /
          (resultIV2 / (weightIV.value * 0.1))) *
          100
      ) / 100
    }</span>ml/hr`;
  }
}
function calcApearIV() {
  let resultIV = requiaredDoseIV.value * weightIV.value;

  if (drugname.value === "Ceftriaxone") {
    calcIV(
      resultIV,
      10 / 1000,
      40,
      10,
      " 30 min",
      `<span style="color:red";>10:14</span> Days`,
      "48 hr (room) 10 days (refrigerated)",
      " 5 min",
      "Not",
      " Reconstitute 1 gm with 9.6 ml diluent - 2 gm with 19.2 ml diluent (FD: 10:40)",
      "NS , D5W , D10W ",
      "4 gm / dose",
      "100 mg ",
      "CBC ,KFT , LFT ,PLT,PT"
    );
  } else if (drugname.value === "Cefotaxime") {
    calcIV(
      resultIV,
      10 / 1000,
      40,
      10,
      " 10 to 30 min",
      `<span style="color:red";>10:14</span> Days`,
      "24 hr (room) 7 days (refrigerated)",
      " 3 : 5 min",
      "is",
      " Reconstitute 1 gm with 10 ml SWFI (FD: 10:40)",
      "NS , D5W , D10W ",
      "2 gm / dose",
      "95 mg ",
      "KFT"
    );
  } else if (drugname.value === "Cefepime") {
    calcIV(
      resultIV,
      10 / 1000,
      40,
      10,
      " 15 to 30 min",
      `<span style="color:red";>7:14</span> Days`,
      "24 hr (room) 7 days (refrigerated)",
      " 3 : 5 min",
      "is",
      " Reconstitute 1 gm with 10 ml diluent (FD: 10:40)",
      "NS , D5W , D10W ",
      "2 gm / dose",
      "100 mg ",
      "KFT , PT"
    );
  } else if (drugname.value === "Ceftazidime") {
    calcIV(
      resultIV,
      10 / 1000,
      40,
      10,
      " 30 min",
      `<span style="color:red";>7:14</span> Days`,
      "12 hr (room) 3 days (refrigerated)",
      " 3 : 5 min",
      "is",
      " Reconstitute 1 gm with 10 ml SWFI (FD: 10:40)",
      "NS , D5W , D10W ",
      "12 gm / day",
      "100 mg ",
      "KFT , INR, PT"
    );
  } else if (drugname.value === "unasyn") {
    calcIV(
      resultIV,
      4 / 1000,
      30,
      2,
      " 15 to 30 min",
      `<span style="color:red";>10:14</span> Days`,
      "8 hr (room) 2 days (refrigerated)",
      " 10 min",
      "is",
      " Reconstitute 1.5 gm with 3.2 ml SWFI & 3 gm with 6.4 SWFI (FD: 2:30)",
      "NS , D5W , D5W 1/2 N",
      "2 gm / dose",
      "250 mg ",
      "KFT ,CBC, LFT"
    );
  } else if (drugname.value === "tazocin") {
    calcIV(
      resultIV,
      10 / 2000,
      80,
      20,
      " 30 min",
      `<span style="color:red";>7:14</span> Days`,
      "24 hr (room) 2 days (refrigerated)",
      " 2: 5 min",
      "is",
      " Reconstitute 2.25 gm with 10 ml diluent, 3.375 gm with 15 ml diluent & 4.5 gm with 20 ml diluent (FD: 20:80)",
      "SWFI , NS , D5W   ",
      "16 gm / day",
      "200 mg ",
      "KFT, electrolyte ,CBC , PT"
    );
  } else if (drugname.value === "tigecycline") {
    calcIV(
      resultIV,
      50 / 50,
      1,
      1,
      "30 to 60 min",
      `<span style="color:red";>12:20</span> Days`,
      "24 hr (room) 2 days (refrigerated)",
      " NA",
      "not",
      " Reconstitute 50 mg with 50 ml diluent (FD: 1)",
      "NS , D5W  ",
      "50 mg / dose",
      "1 mg ",
      "LFT , PT",
      5
    );
  } else if (drugname.value === "vancomycin") {
    calcIV(
      resultIV,
      10 / 500,
      5,
      2,
      " 60 to 120 min",
      `<span style="color:red";>10:21</span> Days`,
      "4 days (refrigerated)",
      " Not taken as push",
      "is",
      " Reconstitute 500 mg with 10 ml SWFI & 1 gm with 20 ml SWFI(FD: 5)",
      "NS , D5W  ",
      "2 gm /day",
      "50 mg ",
      "KFT , WBC",
      1
    );
  } else if (drugname.value === "Amikacin") {
    calcIV(
      resultIV,
      2 / 500,
      5,
      2,
      " 30 to 60 min",
      `<span style="color:red";>10:14</span> Days`,
      "24 hr (room) 60 days (refrigerated)",
      " 1 : 5 min",
      "is",
      "500 mg /2ml  ready to use ampules (FD: 2:5)",
      "NS , D5W , D10W ",
      "1500 mg / day",
      "250 mg ",
      "KFT "
    );
  } else if (drugname.value === "Gentamycin") {
    calcIV(
      resultIV,
      2 / 80,
      10,
      1,
      " 30 to 120 min",
      `<span style="color:red";>7:14</span> Days`,
      "24 hr (room) 2 days (refrigerated)",
      " 3:5 min (conc of 40 mg /ml)",
      "is",
      "80mg / 2ml ready to use ampules (FD: 1:10)",
      "NS , D5W , D10W ",
      "7.5 mg/kg/ dose",
      "40 mg ",
      "KFT "
    );
  } else if (drugname.value === "Meronam") {
    calcIV(
      resultIV,
      10 / 500,
      20,
      1,
      "  30 min",
      `<span style="color:red";>7:14</span> Days`,
      "in D5W use immediately & in N.S 1 hr (room) 15 hr (refrigerated) ",
      " 3 : 5 min",
      "is",
      "Reconstitute 500 mg in 10 ml diluent & 1 gm with 20 ml diluent (FD: 1:20)",
      "NS , D5W , D10W ",
      "2 gm / dose",
      "50 mg ",
      "KFT "
    );
  } else if (drugname.value === "Tienam") {
    calcIV(
      resultIV,
      10 / 500,
      5,
      1,
      " 20 to 30 min",
      `<span style="color:red";>7:14</span> Days`,
      "4 hr (room) 24hr (refrigerated)",
      " not taken as push",
      "is",
      " Reconstitute 500 mg with 10 ml diluent (FD: 1:5)",
      "NS , D5W , D10W ",
      "1 gm / dose",
      "50 mg ",
      "KFT "
    );
  } else if (drugname.value === "clindamycin") {
    calcIV(
      resultIV,
      2 / 300,
      18,
      6,
      " 10 to 60 min",
      `<span style="color:red";>10:14</span> Days`,
      "24 hr (room) ",
      " by rate 30 mg /min",
      "Not",
      "300mg /2ml or 600mg /4ml ready to use ampule (FD: 6:18)",
      "NS , D5W , D10W ",
      "2700mg / day",
      "150 mg ",
      "KFT , LFT"
    );
  } else if (drugname.value === "Metronidazole") {
    calcIV(
      resultIV,
      100 / 500,
      5,
      5,
      " 30 to 60 min",
      `<span style="color:red";>7:10</span> Days`,
      "24 hr (room) ",
      " not taken as push",
      "is",
      "500 mg / 100 ml ready to use vial",
      "no further dilution ",
      "4gm / day",
      "5 mg ",
      "KFT , lft",
      5
    );
  } else if (drugname.value === "Ciprofloxacin") {
    calcIV(
      resultIV,
      100 / 200,
      2,
      1,
      " 60 min",
      `<span style="color:red";>10:21</span> Days`,
      "14 day (room) or (refrigerated)",
      " NA",
      "is",
      "200 mg /100 ml ready to use vial (FD : 1:2)",
      "NS , D5W , D10W ",
      "750 mg/ dose",
      "2 mg ",
      "KFT "
    );
  } else if (drugname.value === "levofloxacin") {
    calcIV(
      resultIV,
      30 / 750,
      5,
      5,
      " 60 to 90 min",
      `<span style="color:red";>10:14</span> Days`,
      "72 hr (room) 14 days (refrigerated)",
      " Not taken as push",
      "is",
      "750 mg /30 ml ready to use vial (FD:5)",
      "NS , D5W , D10W ",
      "750 mg / day",
      "25 mg ",
      "KFT , glucose",
      2
    );
  } else if (drugname.value === "Moxifloxacin") {
    calcIV(
      resultIV,
      250 / 400,
      40,
      10,
      " 60 min",
      `<span style="color:red";>7:10</span> Days`,
      "24 hr (room) 3 days (refrigerated)",
      " not taken as push",
      "no",
      " 400 mg /250 ml ready to use vial",
      " NO dilution",
      "200 mg / dose",
      "1.6 mg ",
      "CBC ,LFT",
      5
    );
  } else if (drugname.value === "Fluconazole") {
    calcIV(
      resultIV,
      100 / 200,
      40,
      10,
      " 60 to 120 min",
      `<span style="color:red";>14</span> Days`,
      "24 hr (room) 7 days (refrigerated)",
      " not taken as push",
      "not",
      "200 mg / 100 ml & 100 mg /50 ml ready to use vial",
      "NO dilution ",
      "600mg / day",
      "2 mg ",
      "LFT",
      5
    );
  } else if (drugname.value === "Linzeloid") {
    calcIV(
      resultIV,
      100 / 200,
      40,
      10,
      " 60 to 120 min",
      `<span style="color:red";>10:28</span> Days`,
      "24 hr (room) 2 days (refrigerated)",
      " N.A",
      "NOT",
      "200 mg / 100 ml ready to use vial",
      "NO dilution",
      "600 mg / dose",
      "2 mg ",
      "CBC",
      5
    );
  } else if (drugname.value === "Acyclovir") {
    calcIV(
      resultIV,
      10 / 500,
      7,
      7,
      " 60 min",
      `<span style="color:red";>14:21</span> Days`,
      "12 hr (room) not refrigerated",
      " Not taken as a push",
      "is",
      "Reconstitute 500 mg with 10 ml SWFI (FD :7)",
      "NS , D5W  ",
      "800 mg / dose",
      "50 mg ",
      "KFT ",
      1
    );
  } else if (drugname.value === "Amphoteracin B") {
    calcIV(
      resultIV,
      10 / 50,
      0.2,
      0.2,
      " 2 to 6 hrs",
      `<span style="color:red";>14:21</span> Days`,
      "24 hr (room) ",
      " NOT taken as push",
      "NOT",
      " Reconstitute 50 mg with 10 ml SWFI &  Pre-medicate with antipyretics/steroids (FD : 0.1)",
      " D5W , D10W , D20W (DONT MIX WITH N.S)",
      "400 mg / day",
      "5 mg ",
      "KFT , k",
      1
    );
  } else if (drugname.value === "Azithromycin") {
    calcIV(
      resultIV,
      5 / 500,
      2,
      1,
      " 60 min",
      `<span style="color:red";>7:10</span> Days`,
      "24 hr (room) 7 days (refrigerated)",
      " not taken as push",
      "not",
      " Reconstitute 500 mg with 4.8 ml SWFI ( fd 1:2)",
      "NS , D5W  ",
      "500 mg / dose",
      "100 mg ",
      "CBC , lft"
    );
  } else if (drugname.value === "Phenytoin") {
    calcIV(
      resultIV,
      5 / 250,
      5,
      5,
      " 1:4 hrs ",
      `<span style="color:red";>7 </span> Days in TBI`,
      "24 hr (room) ",
      " max infusion rate 3 mg/kg/min",
      "not",
      "250 mg / 5 ml ready to use ampoule (fd >5)",
      "NS ",
      "300 mg / day",
      "50 mg ",
      "ECG , BP",
      2
    );
  } else if (drugname.value === "Levetiracetam") {
    calcIV(
      resultIV,
      5 / 500,
      15,
      5,
      " 15  min",
      `<span style="color:red";>7 </span> Days in TBI`,
      "24 hr (room) 7 days (refrigerated)",
      " 5 min",
      "is",
      "500 mg / 5 ml & 100 mg /1 ml ready to use ampoule (fd  5 : 15)",
      "NS , D5W ",
      "4500 mg / dose",
      "100 mg ",
      "KFT , LFT , BP"
    );
  } else if (drugname.value === "Pethidine") {
    calcIV(
      resultIV,
      1 / 50,
      10,
      10,
      " 15  min",
      `<span style="color:red";>3 : 4 </span> hrs `,
      "discharge unused portion",
      " 4:5 min",
      "is",
      "50 mg /1 ml ready to use ampoule (fd :10)",
      "NS , D5W ",
      "75 mg / dose",
      "50 mg ",
      "KFT",
      1
    );
  } else if (drugname.value === "Pantoprazole") {
    calcIV(
      resultIV,
      10 / 40,
      0.8,
      0.4,
      " 15 : 30  min",
      `<span style="color:red";>as needed </span> Days `,
      "24 hr ( room)",
      " 2 min",
      "not",
      "Reconstitute 40 mg in 10 ml N.S ( fd 0.4:0.8)",
      "NS , D5W ",
      "40 mg / day",
      "4 mg ",
      "Ca & Mg  conc"
    );
  } else if (drugname.value === "Famotidine") {
    calcIV(
      resultIV,
      2 / 20,
      0.2,
      0.2,
      " 15: 30  min",
      `<span style="color:red";>as needed </span> Days `,
      " 7 days (room)",
      " 2 min",
      "is",
      "20 mg / 2 ml ready to use ampoule (fd 0.2)",
      "NS , D5W , D10W",
      "40 mg / day",
      "10 mg ",
      "KFT",
      2
    );
  } else if (drugname.value === "ondansetron") {
    calcIV(
      resultIV,
      2 / 4,
      2,
      1,
      " 15  min",
      `<span style="color:red";>as needed </span> Days `,
      "24 hr (room)",
      " 2: 5 min ",
      "not",
      "8 mg / 4 ml & 4 mg /2 ml ready to use ampoule ( fd 1:2)",
      "NS , D5W , D5NS ",
      "16 g / day",
      "2 mg ",
      " na"
    );
  } else if (drugname.value === "Ibuprofen") {
    calcIV(
      resultIV,
      8 / 800,
      4,
      4,
      " 10  min",
      `<span style="color:red";>as needed </span> Days `,
      "24 hr (room) ",
      " Not taken as push ",
      "not",
      "800 mg / 8 ml  & 400mg / 4 ml ready to use ampoule (fd 4 )",
      "NS , D5W ",
      "2400 mg / day",
      "100 mg ",
      "cbc",
      1
    );
  } else if (drugname.value === "Mgso4") {
    calcIV(
      resultIV,
      10 / 1000,
      50,
      5,
      " 20  min",
      `<span style="color:red";>as needed </span> Days `,
      "24 hr (room) ",
      " 3: 5 min",
      "not",
      "1000 mg /10 ml ready to use ampoule (fd 50)",
      "NS , D5W ",
      "2000 mg / dose",
      "100 mg ",
      "KFT , Ca, K , P",
      1
    );
  } else if (drugname.value === "Amiodarone") {
    calcIV(
      resultIV,
      3 / 150,
      3.6,
      3.6,
      "  20: 60 min (loading)  24 hr (maintenance)",
      `<span style="color:red";>as needed </span> `,
      "24 hr (room) ",
      " not taken as push",
      "not",
      "150 mg / 3 ml  ready to use ampoule (fd 3.6)",
      "NS , D5W ",
      "36 mg /kg/ day",
      "50 mg ",
      "KFT , LFT , BP",
      4
    );
  } else if (drugname.value === "Ca gluconate") {
    calcIV(
      resultIV,
      10 / 500,
      50,
      10,
      " by rate 50 mg /  min",
      `<span style="color:red";>as needed </span> Days `,
      "24 hr (room) 3:7 days (refrigerated)",
      " 5: 10 min",
      "not",
      "500 mg / 10  ml ready to use ampoule (fd: 10:50)",
      "NS , D5W ,D10W ",
      "2000 mg / dose",
      "50 mg ",
      "Ca+ , BP"
    );
  } else if (drugname.value === "somazina") {
    calcIV(
      resultIV,
      4 / 500,
      20,
      10,
      " 15 :30  min",
      `<span style="color:red";> according to case (up to 6 month)</span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "500 mg / 4 ml  ready to use ampoule (fd 10:20)",
      "NS , D5W ",
      "2000 mg / day",
      "125 mg ",
      " BP"
    );
  } else if (drugname.value === "Lasix") {
    calcIV(
      resultIV,
      2 / 20,
      2,
      1,
      "by rate 1mg /  min",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room) or (refrigerated)",
      " 1: 2 min",
      "not",
      "20 mg / 2 ml  ready to use ampoule (fd 1:2)",
      "NS , D5W , D10W ",
      "200 mg / day",
      "10 mg ",
      " KFT, Na , K ,Ca"
    );
  } else if (drugname.value === "Solumedrol") {
    calcIV(
      resultIV,
      10 / 500,
      20,
      2.5,
      " 30  min",
      `<span style="color:red";> according to case </span>  `,
      "8 hr (room)",
      " 3: 5 min ",
      "not",
      " reconstitute 500 mg in 7.8 ml diluent (fd 2.5 :20) ",
      "NS , D5W ",
      "60 mg/ kg / day",
      "50 mg ",
      " BP , blood glucose , electrolytes"
    );
  } else if (drugname.value === "Dexamethasone") {
    calcIV(
      resultIV,
      2 / 8,
      1,
      0.5,
      "  15 : 30  min",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " 1: 5 min",
      "not",
      "8 mg / 2 ml  ready to use ampoule (fd 0.5 : 1)",
      "NS , D5W, D10W ",
      "16 mg / day",
      "4 mg ",
      " BP , blood glucose , electrolytes"
    );
  } else if (drugname.value === "Atropine") {
    calcIV(
      resultIV,
      1 / 1,
      1,
      1,
      " 15 :30  min",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      "  taken as push",
      "not",
      "1 mg / 1 ml  ready to use ampoule (fd 1)",
      "NS , D5W ",
      "2 mg / dose",
      "1 mg ",
      " BP , HR",
      5
    );
  } else if (drugname.value === "Dopamine") {
    calcIV(
      resultIV,
      5 / 200,
      3.2,
      3.2,
      " 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "200 mg / 5 ml  ready to use ampoule (fd 3.2 or 1.6)",
      "NS , D5W ,D10W ",
      "50 mcq /kg /min",
      "40 mg ",
      " BP , HR",
      4
    );
  } else if (drugname.value === "Dobuterix") {
    calcIV(
      resultIV,
      20 / 250,
      4,
      4,
      " 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "250 mg / 20 ml  ready to use ampoule (fd 4 or 1)",
      "NS , D5W ,D10W ",
      "40 mcq /kg /min",
      "12.5 mg ",
      " BP , HR",
      4
    );
  } else if (drugname.value === "Adrenaline") {
    calcIV(
      resultIV,
      1 / 1,
      0.064,
      0.064,
      " 24 hr ",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      "  taken as push",
      "not",
      "1 mg / 1 ml  ready to use ampoule (fd 64 mcq)",
      "D5W , D10W ",
      "10 mcq / kg / min",
      "1 mg ",
      " BP",
      4
    );
  } else if (drugname.value === "Nor adrenaline") {
    calcIV(
      resultIV,
      4 / 4,
      0.064,
      0.064,
      " 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "4 mg / 4 ml  ready to use ampoule (fd 64 mcq)",
      "NS , D5W ",
      "10 mcq / kg / min",
      "1 mg ",
      " BP , urine output , ECG",
      4
    );
  } else if (drugname.value === "Aminophylline") {
    calcIV(
      resultIV,
      5 / 500,
      1,
      1,
      " 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "is",
      "500 mg / 5 ml  ready to use ampoule (fd 1)",
      "NS , D5W ",
      " N A",
      "100 mg ",
      " BP , HR",
      4
    );
  } else if (drugname.value === "Milrinone") {
    calcIV(
      resultIV,
      10 / 10,
      0.2,
      0.2,
      " 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "72 hr (room)",
      " not taken as push",
      "not",
      "10 mg / 10 ml  ready to use ampoule (fd 200 mcq)",
      " 1/2 NS , NS , D5W ",
      "2000 mg / day",
      "1 mg ",
      " platelets , BP ,Hr , K , urine output",
      4
    );
  } else if (drugname.value === "paracetamol") {
    calcIV(
      resultIV,
      100 / 1000,
      10,
      10,
      " 15 min ",
      `<span style="color:red";> according to case </span>  `,
      "6 hr (room)",
      " not taken as push",
      "not",
      "1000 mg / 100 ml  ready to use ampoule (fd 10)",
      "Not diluted ",
      "4000 mg / day",
      "10 mg ",
      " LFT",
      5
    );
  } else if (drugname.value === "Fentanyl") {
    calcIV(
      resultIV,
      1 / 50,
      10,
      10,
      " 24 hr ",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " 2: 5 min ",
      "is",
      "50 mcq / 1 ml  ready to use ampoule (fd : 10 mcq/ml)",
      "NS , D5W ",
      "1200 mcq / day",
      "50 mcq ",
      "  BP , Hr ",
      3
    );
  } else if (drugname.value === "Naloxone") {
    calcIV(
      resultIV,
      1 / 0.4,
      0.004,
      0.004,
      " 24 hr ",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " over 30 seconds",
      "not",
      "0.4 mg / 1 ml  ready to use ampoule (fd : 4 mcq)",
      "NS , D5W ",
      "2 mg / dose",
      "0.4 mg ",
      "  BP , Hr "
    );
  } else if (drugname.value === "ketamine") {
    calcIV(
      resultIV,
      1 / 50,
      2,
      2,
      " 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " 2:3 min ",
      "not",
      "50 mg / 1 ml  ready to use ampoule (fd : 2 )",
      "NS , D5W ",
      "1.2 mg / kg / hr ",
      "50 mg ",
      "  BP ,Hr ",
      4
    );
  } else if (drugname.value === "Midazolam") {
    calcIV(
      resultIV,
      1 / 50,
      1,
      1,
      " 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      "  taken as push for sedation ",
      "not",
      "15 mg / 3 ml  or 5 mg / 1 ml  ready to use ampoule (fd : 1)",
      "NS , D5W ",
      "1 mg /kg / hr",
      "5 mg ",
      "  BP ,Hr ",
      4
    );
  } else if (drugname.value === "Mannitol") {
    calcIV(
      resultIV,
      100 / 20,
      3.2,
      3.2,
      " 20: 30 min",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "20 g / 100 ml  ready to use pack",
      "Not diluted ",
      " N.A",
      "200 mg ",
      " KFT , Osmolality",
      5
    );
  } else if (drugname.value === "Propranolol") {
    calcIV(
      resultIV,
      10 / 1,
      3.2,
      3.2,
      "10: 15 min",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "add 9 ml N.S to vial to give 1 mg / 10 ml",
      "n.s  ",
      "3 mg /dose",
      "0.1 mg ",
      " BP , HR , ECG",
      5
    );
  } else if (drugname.value === "Kapron") {
    calcIV(
      resultIV,
      5 / 500,
      100,
      10,
      " 100 mg /min",
      `<span style="color:red";> 2 : 8 days</span>  `,
      "24 hr (room)",
      " not taken as push",
      "is",
      "500 mg / 5 ml  ready to use ampoule",
      "NS , D5W ,D10W ",
      "1000mg / day",
      "100 mg ",
      " INR , PT "
    );
  } else if (drugname.value === "Enoxaparin") {
    calcIV(
      resultIV,
      0.4 / 40,
      3.2,
      3.2,
      " 1 min",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      "  taken  s.c not iv",
      "not",
      "40 mg / 0.4 ml  ready to use syringe",
      "Not diluted ",
      "20 mg / dose ",
      "100 mg ",
      " CBC , plaelets",
      5
    );
  } else if (drugname.value === "Dicynone") {
    calcIV(
      resultIV,
      2 / 250,
      3.2,
      3.2,
      "30 min",
      `<span style="color:red";> according to case </span>  `,
      "6 hr (room)",
      "  not taken as push",
      "not",
      "250 mg / 2 ml  ready to use ampoule",
      "(10:50ml) N.S & D5W  ",
      "80 mg/ kg / day ",
      "125 mg ",
      " platelets",
      5
      );
  } else if (drugname.value === "phenobarbitone") {
    calcIV(
      resultIV,
      1 / 40,
      10,
      10,
      " 15 to 30 min",
      `<span style="color:red";>according to case</span> Days`,
      "8 hr (room) 24 hr (refrigerated)",
      " 60 mg / min",
      "is",
      " 40 mg / 1 ml ready to use vial (FD: 10)",
      "NS  ",
      "1 gm / dose",
      "40 mg ",
      "KFT , BP ,HR ,",
      2
      );
  } else if (drugname.value === "Albumin") {
    calcIV(
      resultIV,
      50 / 10,
      3.2,
      3.2,
      "maximum 4 hr",
      `<span style="color:red";> according to case </span>  `,
      "4 hr from opening",
      " not taken as push",
      "not",
      " (20 %) 10 g / 50 ml  ready to use vial",
      "NS , D5W to dilute to 5% if needed ",
      "25 gm / dose",
      "200 mg ",
      " cbc , electrolytes , urine output",
      5
    );
  } else if (drugname.value === "Aminoleban") {
    calcIV(
      resultIV,
      500 / 40,
      3.2,
      3.2,
      "over 24 hr",
      `<span style="color:red";> according to case  </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "40 g / 500 ml  ready to use pack ",
      "not diluted ",
      " na",
      "80 mg ",
      " LFT ,Ammonia , Electrolytes",
      6
    );
  } else if (drugname.value === "kidmin") {
    calcIV(
      resultIV,
      500 / 35,
      3.2,
      3.2,
      "over 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "35 g / 500 ml  ready to use pack ",
      "not diluted ",
      " na",
      "70 mg ",
      " KFT ,CBC , urine output",
      6
    );
  } else if (drugname.value === "Amiparen") {
    calcIV(
      resultIV,
      250 / 25,
      3.2,
      3.2,
      "over 24 hr",
      `<span style="color:red";> according to case </span>  `,
      "24 hr (room)",
      " not taken as push",
      "not",
      "25g / 250 ml  ready to use pack",
      "not diluted ",
      " na",
      "100 mg ",
      " LFT , Blood glucose , electrolytes",
      6
    );
  }
  if (rateSpecialCase !== 0) {
    resultIV = rateSpecialCase;
  }
  resultIV.innerHTML = `Dose For child <span style = "color:red;">${resultIV}</span> mg`;
}
let calcIVButton = document.getElementById("calcIV");
let calculateIVpara = document.getElementById("calculateIVpara");
let inputIV2h1 = document.getElementById("inputIV2h1");
let calculateIV = document.getElementById("calculateIV");
let outbutIV = document.getElementById("outputIV");
let inputIV = document.getElementById("inputIV");
let outputIV2 = document.getElementById("outputIV2");
let inputbackIV = document.getElementById("inputbackIV");
let inputbackIVbtn = document.getElementById("inputbackIVbtn");
let inputbackIVpara = document.getElementById("inputbackIVpara");
let GeneralInstructionsIV = document.getElementById("GeneralInstructionsIV");
let CalculationsForPatientIV = document.getElementById(
  "CalculationsForPatientIV"
);
function disapearinput() {
  calcIVButton.style.cssText =
    "translate:120% 0%;transition:all 0.1s ease-in-out;";
  calculateIVpara.style.cssText =
    "translate:100% 0%;transition:all 0.1s ease-in-out;";
  inputIV2h1.style.cssText =
    "translate:-200% 0%;transition:all 0.5s ease-in-out;";
  calculateIV.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;border-top-left-radius: 0px;border-bottom-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 20%;border-top-right-radius: 20%;";
  requiaredDoseIV.style.cssText =
    "translate:-200% 0%;transition:all 0.1s ease-in-out;";
  drugname.style.cssText =
    "translate:-200% 0%;transition:all 0.5s ease-in-out;";
  weightIV.style.cssText =
    "translate:-200% 0%;transition:all 0.5s ease-in-out;";
  inputbackIVbtn.style.cssText = "translate:-200% 0%;";
  inputbackIVpara.style.cssText = "translate:-200% 0%;";
  CalculationsForPatientIV.style.cssText = "translate:200% 0%;";
  GeneralInstructionsIV.style.cssText = "translate:200% 0%;";
  resultIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  takenIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  minumimIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  maxIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  timeIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  durationIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  stabilityIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  notesIV.style.cssText = "translate:250% 0%;transition:all 0.5s ease-in-out;";
  renalAdjustmentIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  reconstituteIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  prefereddiluentIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  maxperdoseIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  concInMlIVconcinmlIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  setTimeout(function () {
    calcIVButton.style.display = "none";
    calculateIVpara.style.display = "none";
    inputIV2h1.style.display = "none";
    calculateIV.style.display = "none";
    requiaredDoseIV.style.display = "none";
    drugname.style.display = "none";
    weightIV.style.display = "none";
    outbutIV.style.display = "flex";
    inputIV.style.display = "none";
  }, 500);

  setTimeout(function () {
    inputbackIVbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackIVpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    CalculationsForPatientIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    GeneralInstructionsIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    resultIV.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    takenIV.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    minumimIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    maxIV.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    timeIV.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    durationIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    stabilityIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    notesIV.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    renalAdjustmentIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    reconstituteIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    prefereddiluentIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    maxperdoseIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    concInMlIVconcinmlIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
  }, 1000);
}
function disapearoutput() {
  calculateIV.style.cssText =
    "translate:0% 0%;transition:all 0.5s ease-in-out;border-top-left-radius: 20%;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 20%;";
  inputbackIV.style.cssText =
    "translate:100% 0%;transition:all 0.5s ease-in-out;border-top-left-radius: 0px;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 20%;border-top-left-radius: 20%;";
  inputbackIVbtn.style.cssText =
    "translate:-120% 0%;transition:all 0.5s ease-in-out;";
  inputbackIVpara.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;";
  resultIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  takenIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  minumimIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  maxIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  timeIV.style.cssText = "translate:200% 0%;transition:all 0.5s ease-in-out;";
  durationIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  stabilityIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  notesIV.style.cssText = "translate:250% 0%;transition:all 0.5s ease-in-out;";
  renalAdjustmentIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  reconstituteIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  prefereddiluentIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  maxperdoseIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  concInMlIVconcinmlIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  GeneralInstructionsIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  CalculationsForPatientIV.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";

  setTimeout(function () {
    calcIVButton.style.display = "block";
    calculateIVpara.style.display = "block";
    inputIV2h1.style.display = "block";
    calculateIV.style.display = "flex";
    requiaredDoseIV.style.display = "flex";
    drugname.style.display = "block";
    weightIV.style.display = "block";
    outbutIV.style.display = "none";
    inputIV.style.display = "flex";
  }, 500);
  setTimeout(function () {
    drugname.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    requiaredDoseIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    weightIV.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    calcIVButton.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    calculateIVpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputIV2h1.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    calculateIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;border-top-left-radius: 20%;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 20%;border-top-left-radius: 20%;";
    inputbackIV.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;border-top-left-radius: 20%;border-bottom-left-radius: 0px;border-top-left-radius: 0px;border-bottom-right-radius: 20%;border-top-right-radius: 20%;";
  }, 1000);
}
let doseNameOral = document.getElementById("dose-input-oral");
let oralWeight = document.getElementById("wieght-oral");
let requiredDoseOral = document.getElementById("required-dose-input-oral");
let doseForChildOral = document.getElementById("doseForChildOral");
let maxPerDoseOral = document.getElementById("maxPerDoseOral");
let takenOral = document.getElementById("takenOral");
let durationOral = document.getElementById("durationOral");
let notesOral = document.getElementById("notesOral");
let generalins = document.getElementById("generalins");
function calcOral(
  ConcOral,
  MaxperdoseOral,
  resultOral2,
  DurationOral,
  NotesOral,
  general = "none"
) {
  generalins.innerHTML = `<b>${general}</b>`;
  doseForChildOral.innerText = `dose for child is ${
    Math.round(resultOral2 * 100) / 100
  } mg`;
  if (typeof MaxperdoseOral === "string") {
    maxPerDoseOral.innerText = `max per dose is ${MaxperdoseOral}`;
  } else {
    maxPerDoseOral.innerText = `max per dose is ${MaxperdoseOral} mg`;
  }
  durationOral.innerText = `duration is  ${DurationOral} `;
  notesOral.innerText = `Notes:  ${NotesOral} `;
  takenOral.innerHTML = `Volume to be taken from bottle is <span style="color:red;">${
    Math.round((resultOral2 / ConcOral) * 100) / 100
  }</span> ml`;
}
function calcoralapear() {
  resultOral = requiredDoseOral.value * oralWeight.value;
  if (doseNameOral.value === "Zithromax") {
    calcOral(
      200 / 5,
      500,
      resultOral,
      `5 days`,
      `use wihin 10 days once bottle opened`,
      "200 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "septazole") {
    calcOral(
      800 / 5,
      320,
      resultOral,
      `10:14 days`,
      `drink plenty of water`,
      "800 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "Gast reg") {
    calcOral(
      24 / 5,
      100,
      resultOral,
      `according to case `,
      `use  with food to minimize git irritation`,
      "200 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "brivaracetam") {
    calcOral(
      10 / 1,
      100,
      resultOral,
      `according to case `,
      `use  with food to minimize git irritation`,
      "10 mg / 1 ml suspension"
    );
  }
  if (doseNameOral.value === "Metronidazole") {
    calcOral(
      125 / 5,
      500,
      resultOral,
      `7:14 days`,
      `use wihin 14 days once bottle opened`,
      "125 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "Xilone forte") {
    calcOral(
      15 / 5,
      30,
      resultOral,
      `according to case`,
      `discard opened bottle after 90 days`,
      "15 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "Xilone") {
    calcOral(
      5 / 5,
      30,
      resultOral,
      `according to case`,
      `discard opened bottle after 90 days`,
      "5 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "Depakine 200 mg 1 ml") {
    calcOral(
      200 / 1,
      350,
      resultOral,
      `according to case `,
      `stored in a refrigerator (between 2°C and 8°C  should be used within 3 months of opening the bottle`
    );
  }
  if (doseNameOral.value === "Depakine 250 mg 5 ml") {
    calcOral(
      250 / 5,
      350,
      resultOral,
      `according to case`,
      `stored in a refrigerator (between 2°C and 8°C  should be used within 3 months of opening the bottle`
    );
  }
  if (doseNameOral.value === "Depakine 200 mg 5 ml") {
    calcOral(
      200 / 5,
      350,
      resultOral,
      `according to case`,
      `stored in a refrigerator (between 2°C and 8°C  should be used within 3 months of opening the bottle`
    );
  }
  if (doseNameOral.value === "Depakine 57.64 mg 1 ml") {
    calcOral(
      57.64 / 1,
      350,
      resultOral,
      `according to case`,
      `stored in a refrigerator (between 2°C and 8°C  should be used within 3 months of opening the bottle`
    );
    }
  if (doseNameOral.value === "phenobarbital") {
    calcOral(
      15 / 5,
      1000,
      resultOral,
      `according to case`,
      `stored at 20 : 25 c protect from light  should be used within 3 months of opening the bottle`
    );
  }
  if (doseNameOral.value === "Ethoxa") {
    calcOral(
      250 / 5,
      " 60 mg / kg",
      resultOral,
      `according to case`,
      `use wihin 90 days once bottle opened at room temperature`,
      "250 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "lacosamide") {
    calcOral(
      10 / 1,
      "10 mg / kg/ day",
      resultOral,
      `according to case`,
      `use wihin 7 weeks once bottle opened`,
      "10 mg / 1 ml suspension"
    );
  }
  if (doseNameOral.value === "Tiratam") {
    calcOral(
      100 / 1,
      1500,
      resultOral,
      `according to case`,
      `use wihin 90 days once bottle opened at room temperature`,
      "100 mg / 1 ml suspension"
    );
  }
  if (doseNameOral.value === "averozolid") {
    calcOral(
      100 / 5,
      600,
      resultOral,
      `according to case`,
      `use wihin 21 days once bottle opened at room temperature   invert bottle  before use 2 or 3 times dont shake`,
      "100 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "Tegretol") {
    calcOral(
      100 / 5,
      500,
      resultOral,
      `according to case`,
      `use wihin 90 days once bottle opened at room temperature`,
      "100 mg / 5 ml suspension"
    );
  }
  if (doseNameOral.value === "Potasium") {
    calcOral(
      20 / 15,
      "40 meq /kg ",
      resultOral,
      `according to case`,
      `must be diluted before use 120 ml cold water`,
      "20 meq / 15 ml suspension"
    );
  }
  if (doseNameOral.value === "Capoten") {
    calcOral(
      12.5 / 6,
      "6 mg /kg / day ",
      resultOral,
      `according to case`,
      `adminster 1 hour before meal`,
      "Half tab should be dissolved in 6 ml water"
    );
  }
  if (doseNameOral.value === "amiodarone") {
    calcOral(
      200 / 40,
      300,
      resultOral,
      `according to case`,
      `stable for 6 weeks at room temp 3 months in refrigerator`,
      "dissolve one tab with 40 ml water or syrp to give 5 mg/ml"
    );
  }
  if (doseNameOral.value === "Inderal") {
    calcOral(
      10 / 10,
      "6 mg /kg / day  ",
      resultOral,
      `according to case`,
      `use during or right after feeding`,
      "dissolve one tab in 10 ml water"
    );
  }
  if (doseNameOral.value === "Norvasc") {
    calcOral(
      10 / 10,
      "0.6mg /kg /day ",
      resultOral,
      `according to case`,
      `use with or without food`,
      "dissolve one tab in 10 ml water"
    );
  }
  if (doseNameOral.value === "Cidamax") {
    calcOral(
      250 / 10,
      "20 mg /kg /day ",
      resultOral,
      `according to case`,
      `use during or right after feeding`,
      "dissolve one tab in 10 ml water"
    );
  }
  if (doseNameOral.value === "Baclofen") {
    calcOral(
      25 / 10,
      "60 mg / day ",
      resultOral,
      `according to case`,
      `use with food`,
      "dissolve one tab in 10 ml water"
    );
  }
  if (doseNameOral.value === "Tamiflu") {
    calcOral(
      75 / 10,
      "na ",
      resultOral,
      `5 days`,
      `take with  or without food `,
      "dissolve one cap in 10 ml water"
    );
  }
  if (doseNameOral.value === "Tamiflu syrup") {
    calcOral(
      12 / 1,
      "na ",
      resultOral,
      `5 days`,
      `take with  or without food `,
      "12 mg / 1 ml suspension"
    );
  }
}
let calculateOral = document.getElementById("calculteOral");
let inputOral2h1 = document.getElementById("inputOral2h1");
let calculateOralpara = document.getElementById("calculateOralpara");
let inputOral = document.getElementById("inputOral");
let inputOral2 = document.getElementById("inputOral2");
let outputOral = document.getElementById("outputOral");
let inputBackOral = document.getElementById("inputBackOral");
let inputBackOralbtn = document.getElementById("inputBackOralbtn");
let inputBackOralpara = document.getElementById("inputBackOralpara");
let calculatebtnOral = document.getElementById("calculatebtnOral");
function calcOralf() {
  calculateOral.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;border-top-rigt-radius:0px;border-bottom-right-radius:20%;border-top-left-radius:0px;border-bottom-left-radius:0px;border-top-right-radius:20%;";
  inputOral2.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;";
  calculateOralpara.style.cssText =
    "translate:100% 0%;transition:all 0.5s ease-in-out;";
  calculatebtnOral.style.cssText =
    "translate:120% 0%;transition:all 0.5s ease-in-out;";
  inputBackOralpara.style.cssText = "translate:-120% 0%;";
  inputBackOralbtn.style.cssText = "translate:-120% 0%";
  doseForChildOral.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  maxPerDoseOral.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  durationOral.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  notesOral.style.cssText =
    "translate:250% 0%;transition:all 0.5s ease-in-out;";
  takenOral.style.cssText =
    "translate:200% 0%;transition:all 0.5s ease-in-out;";
  inputBackOral.style.cssText = "translate:0% 0%;";
  setTimeout(function () {
    inputOral.style.display = "none";
    outputOral.style.display = "flex";
  }, 500);
  setTimeout(function () {
    inputBackOralpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputBackOralbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    doseForChildOral.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    maxPerDoseOral.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    durationOral.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    notesOral.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    takenOral.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
  }, 1000);
}

function disapearoraloutput() {
  inputBackOral.style.cssText =
    "translate:100% 0%;transition:all 0.5s ease-in-out;border-top-left-radius:20%;border-bottom-right-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:20%;";
  inputBackOralpara.style.cssText =
    "translate:-120% 0%;transition:all 0.5s ease-in-out;";
  inputBackOralbtn.style.cssText =
    "translate:-120% 0%;transition:all 0.5s ease-in-out;";
  doseForChildOral.style.cssText =
    "translate:250% 0%;transition:all 0.5s ease-in-out;";
  maxPerDoseOral.style.cssText =
    "translate:250% 0%;transition:all 0.5s ease-in-out;";
  durationOral.style.cssText =
    "translate:250% 0%;transition:all 0.5s ease-in-out;";
  notesOral.style.cssText =
    "translate:250% 0%;transition:all 0.5s ease-in-out;";
  takenOral.style.cssText =
    "translate:250% 0%;transition:all 0.5s ease-in-out;";
  calculatebtnOral.style.cssText =
    "translate:120% 0%;transition:all 0.5s ease-in-out;";
  calculateOralpara.style.cssText =
    "translate:120% 0%;transition:all 0.5s ease-in-out;";
  calculateOral.style.cssText = "translate:0% 0%;";

  setTimeout(function () {
    inputOral.style.display = "flex";
    outputOral.style.display = "none";
  }, 500);
  setTimeout(function () {
    inputOral2.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    calculateOralpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    calculatebtnOral.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
  }, 1000);
}

let calcDfbtn = document.getElementById("calculateDfbtn");
let sodiumDF = document.getElementById("sodium");
let weightDF = document.getElementById("weightDF");
let bolusDF = document.getElementById("bolusDF");
let deficitDF = document.getElementById("deficitDF");
let fluidRatePer8hr = document.getElementById("fluidRatePer8hr");
let fluidRatePerhr = document.getElementById("fluidRatePerhr");
let fluidRateOver24hr = document.getElementById("fluidRateOver24hr");
let fluidRatePer16hr = document.getElementById("fluidRatePer16hr");
let fluidRatePerhr2 = document.getElementById("fluidRatePerhr2");
function calcDF() {
if (sodiumDF.value <= 157 ) {
  let deficitVolume = weightDF.value * deficitDF.value;
  let maintenance;
  if (weightDF.value <= 10) {
    maintenance = weightDF.value * 100;
  } else if (weightDF.value <= 20) {
    maintenance = 10 * 100 + (weightDF.value - 10) * 50;
  } else {
    maintenance = 10 * 100 + 10 * 50 + (weightDF.value - 20) * 20;
  }
  let fluidRatePer8hrInnerText =
    (deficitVolume - bolusDF.value) / 2 + maintenance / 3;
  fluidRatePer8hr.innerHTML = `1st 8hrs is <span style="color:red;">${
    Math.round(fluidRatePer8hrInnerText * 100) / 100
  }</span> ml`;
  fluidRatePerhr.innerHTML = `rate of infusion is <span style="color:green;">${
    Math.round((fluidRatePer8hrInnerText / 8) * 100) / 100
  }</span> ml/hr`;
  let fluidRatePer16hrInnerText =
    (deficitVolume - bolusDF.value) / 2 + (2 / 3) * maintenance;
  fluidRatePer16hr.innerHTML = `Remain 16 hr is <span style="color:red;">${
    Math.round(
      ((deficitVolume - bolusDF.value) / 2 + (2 / 3) * maintenance) * 100
    ) / 100
  }</span> ml`;
  fluidRatePerhr2.innerHTML = `rate of infusion is <span style="color:green;"> ${
    Math.round((fluidRatePer16hrInnerText / 16) * 100) / 100
  } </span> ml/hr`;
  let fluidRateOver24hrInnerText = deficitVolume + maintenance - bolusDF.value;
  fluidRateOver24hr.innerHTML = `over 24 hours is <span style="color:red;">${
    Math.round(fluidRateOver24hrInnerText * 100) / 100
  }</span> ml`;
  fluidRatePerhr3.innerHTML = `rate of infusion is <span style="color:green;">${
    Math.round((fluidRateOver24hrInnerText / 24) * 100) / 100
  }</span> ml/hr`;
 }else if(sodiumDF.value >157 && sodiumDF.value <= 170){
  document.querySelector("#fluidRatePer8hrParent").innerText="";
  document.querySelector("#fluidRatePer16hrParent").innerText="";
  document.querySelector("#first").innerText="";
  document.querySelector("#second").innerText="";
  let deficitVolume = weightDF.value * deficitDF.value;
  let maintenance;
  if (weightDF.value <= 10) {
    maintenance = weightDF.value * 100;
  } else if (weightDF.value <= 20) {
    maintenance = 10 * 100 + (weightDF.value - 10) * 50;
  } else {
    maintenance = 10 * 100 + 10 * 50 + (weightDF.value - 20) * 20;
  }
  fluidRatePerhr.innerHTML = ``
  fluidRatePerhr2.innerHTML = ``
  let fluidRateOver24hrInnerText = (deficitVolume - bolusDF.value)/2 + maintenance;
  fluidRateOver24hr.innerHTML = `over 24 hours is <span style="color:red;">${
    Math.round(fluidRateOver24hrInnerText * 100) / 100
  }</span> ml`;
  fluidRatePerhr3.innerHTML = `rate of infusion is <span style="color:green;">${
    Math.round((fluidRateOver24hrInnerText / 24) * 100) / 100
  }</span> ml/hr`;
 }else if(sodiumDF.value >171 && sodiumDF.value <= 183){
  document.querySelector("#fluidRatePer8hrParent").innerText="";
  document.querySelector("#fluidRatePer16hrParent").innerText="";
  document.querySelector("#first").innerText="";
  document.querySelector("#second").innerText="";
  let deficitVolume = weightDF.value * deficitDF.value;
  let maintenance;
  if (weightDF.value <= 10) {
    maintenance = weightDF.value * 100;
  } else if (weightDF.value <= 20) {
    maintenance = 10 * 100 + (weightDF.value - 10) * 50;
  } else {
    maintenance = 10 * 100 + 10 * 50 + (weightDF.value - 20) * 20;
  }
  fluidRatePerhr.innerHTML = ``
  fluidRatePerhr2.innerHTML = ``
  let fluidRateOver24hrInnerText = (deficitVolume - bolusDF.value)/3 + maintenance;
  fluidRateOver24hr.innerHTML = `over 24 hours is <span style="color:red;">${
    Math.round(fluidRateOver24hrInnerText * 100) / 100
  }</span> ml`;
  fluidRatePerhr3.innerHTML = `rate of infusion is <span style="color:green;">${
    Math.round((fluidRateOver24hrInnerText / 24) * 100) / 100
  }</span> ml/hr`;
 }else if(sodiumDF.value >184 && sodiumDF.value <= 196){
  document.querySelector("#fluidRatePer8hrParent").innerText="";
  document.querySelector("#fluidRatePer16hrParent").innerText="";
  document.querySelector("#first").innerText="";
  document.querySelector("#second").innerText="";
  let deficitVolume = weightDF.value * deficitDF.value;
  let maintenance;
  if (weightDF.value <= 10) {
    maintenance = weightDF.value * 100;
  } else if (weightDF.value <= 20) {
    maintenance = 10 * 100 + (weightDF.value - 10) * 50;
  } else {
    maintenance = 10 * 100 + 10 * 50 + (weightDF.value - 20) * 20;
  }
  fluidRatePerhr.innerHTML = ``
  fluidRatePerhr2.innerHTML = ``
  let fluidRateOver24hrInnerText = (deficitVolume - bolusDF.value)/4 + maintenance;
  fluidRateOver24hr.innerHTML = `over 24 hours is <span style="color:red;">${
    Math.round(fluidRateOver24hrInnerText * 100) / 100
  }</span> ml`;
  fluidRatePerhr3.innerHTML = `rate of infusion is <span style="color:green;">${
    Math.round((fluidRateOver24hrInnerText / 24) * 100) / 100
  }</span> ml/hr`;
 }
}
let g = document.getElementById("g");
let parentOfInputs = document.getElementById("parentOfInputs");
let volumeOfAllDrugs = document.getElementById("volumeOfAllDrugs");
let addNameInput = document.getElementById("addNameInput");
let inputMF = document.getElementById("inputMF");
let maintenance2 = document.getElementById("maintenance2");
let maintenance3 = document.getElementById("maintenance3");
let inputMF2 = document.getElementById("inputMF2");
let maintenance3_24 = document.getElementById("maintenance3/24");
let weightMF = document.getElementById("weightMF");
let calculateFludesOfdrugsMFbtn = document.getElementById(
  "calculateFludesOfdrugsMFbtn"
);
let outputMF2 = document.getElementById("outputMF2");
let generalInstructionsMF = document.getElementById("g");
let newNameInput = document.createElement("input");
let finished;
addNameInput.onclick = function () {
  newNameInput.style.marginTop = "10px";
  newNameInput.style.color = "red";
  newNameInput.style.backgroundColor = "rgba(255, 107, 107, 0.479)";
  newNameInput.placeholder = "choose the drug";
  let newDoseInput = document.createElement("input");
  newDoseInput.style.color = "red";
  newDoseInput.style.backgroundColor = "rgba(255, 107, 107, 0.479)";
  let datalist = document.createElement("datalist");
  let newDurationInput = document.createElement("input");
  newDurationInput.style.color = "red";
  newDurationInput.style.backgroundColor = "rgba(255, 107, 107, 0.479)";
  let dataListOfNewDurationInput = document.createElement("datalist");
  dataListOfNewDurationInput.id = "dataListOfNewDurationInput";
  dataListOfNewDurationInput.innerHTML = `
    <option> 24 </option>
    <option> 12 </option>
    <option> 8 </option>
    <option> 6 </option>
    <option> 4 </option>`;
  newDurationInput.type = "number";
  newDurationInput.placeholder = "choose the dose interval per hr";
  newDurationInput.setAttribute("list", "dataListOfNewDurationInput");
  newDoseInput.placeholder = "Enter dose in mg";
  newDoseInput.type = "number";
  datalist.id = "datalistOfNewInputMF";
  datalist.innerHTML = `
        <option>Ceftriaxone</option>
        <option>Cefotaxime</option>
        <option>Cefepime</option>
        <option>Unasyn</option>
        <option>Ceftazidime</option>
        <option>Tazosin</option>
        <option>Tigecycline</option>
        <option>Vancomycin</option>
        <option>Amikacin</option>
        <option>Gentamycin</option>
        <option>Meronam</option>
        <option>Tienam</option>
        <option>Clindamycin</option>
        <option>Ciprofloxacin</option>
        <option>Levofloxacin</option>
        <option>Moxifloxacin</option>
        <option>Azithromycin</option>
        <option>Linzeloid</option>
        <option>Metronidazole</option>
        <option>Fluconazole</option>
        <option>Amphoteracin B</option>
        <option>Acyclovir</option>
        <option>Phenytoin</option>
        <option>Levetiracetam</option>
        <option>Fentanyl</option>
        <option>Ketamine</option>
        <option>Midazolam</option>
        <option>Pethidine</option>
        <option>Pantoprazole</option>
        <option>Famotidine</option>
        <option>Ondansetron</option>
        <option>Paracetamol</option>
        <option>Ibuprofen</option>
        <option>Mannitol</option>
        <option>Albumin</option>
        <option>Mgso4</option>
        <option>Somazina</option>
        <option>Dexamethasone</option>
        <option>Solumedrol</option>
        <option>Dopamine</option>
        <option>Dobuterix</option>
        <option>Adrenaline</option>
        <option>Nor adrenaline</option>
        <option>Atropine</option>
        <option>Aminoleban</option>
        <option>Kidmin</option>
        <option>Amiodarone iv</option>
        <option>Ca gluconate</option>
        <option>Enoxaparin</option>
        <option>Kapron</option>
        <option>Dicynone</option>
        <option>Aminophylline</option>
        <option>Lasix</option>
        <option>Propranolol</option>
        <option>Zithromax syp</option>
        <option>Septazole syp</option>
        <option>Gast reg syp</option>
        <option>Metronidazole syp</option>
        <option>Xilone forte syp</option>
        <option>Xilone syp</option>
        <option>Depakine 200 mg 1 ml syp</option>
        <option>Depakine 250 mg 5 ml syp</option>
        <option>Depakine 200 mg 5 ml syp</option>
        <option>Depakine 57.64 mg 1 ml syp</option>
        <option>Ethoxa syp</option>
        <option>Lacosamide syp</option>
        <option>Tiratam syp</option>
        <option>Tegretol syp</option>
        <option>Potasium syp</option>
        <option>Capoten  tab</option>
        <option>Amiodarone tab</option>
        <option>Inderal tab</option>
        <option>Norvasc tab</option>
        <option>Cidamax tab</option>
        <option>Brivaracetam</option>
        <option>Amiparen</option>
        <option>Milrinone</option>
        <option>Phenobarbital</option>
        <option>Phenobarbitone syp</option>
        <option>Baclofen tab</option>
        <option>Naloxone</option>
        <option>Averozolid syrup</option>
        <option>Tamiflu syrup</option>
        <option>Tamiflu cap</option>`;
  newNameInput.setAttribute("list", "datalistOfNewInputMF");
  let mindil;
  finished = true;
  calculateFludesOfdrugsMFbtn.onclick = function () {
    if (finished === true) {
    if (newNameInput.value === "Ceftriaxone") {
      mindil = 40;
    } else if (newNameInput.value === "Cefotaxime") {
      mindil = 40;
    } else if (newNameInput.value === "Cefepime") {
      mindil = 40;
    } else if (newNameInput.value === "Ceftazidime") {
      mindil = 40;
    } else if (newNameInput.value === "Unasyn") {
      mindil = 30;
    } else if (newNameInput.value === "Tazosin") {
      mindil = 80;
    } else if (newNameInput.value === "Tigecycline") {
      mindil = 1;
    } else if (newNameInput.value === "Vancomycin") {
      mindil = 5;
    } else if (newNameInput.value === "Amikacin") {
      mindil = 5;
    } else if (newNameInput.value === "Gentamycin") {
      mindil = 10;
    } else if (newNameInput.value === "Meronam") {
      mindil = 20;
    } else if (newNameInput.value === "Tienam") {
      mindil = 5;
    } else if (newNameInput.value === "Clindamycin") {
      mindil = 18;
    } else if (newNameInput.value === "Ciprofloxacin") {
      mindil = 2;
    } else if (newNameInput.value === "Levofloxacin") {
      mindil = 5;
    } else if (newNameInput.value === "Moxifloxacin") {
      mindil = 1.6;
    } else if (newNameInput.value === "Azithromycin") {
      mindil = 2;
    } else if (newNameInput.value === "Linzeloid") {
      mindil = 2;
    } else if (newNameInput.value === "Metronidazole") {
      mindil = 5;
    } else if (newNameInput.value === "Fluconazole") {
      mindil = 2;
    } else if (newNameInput.value === "Amphoteracin B") {
      mindil = 0.1;
    } else if (newNameInput.value === "Acyclovir") {
      mindil = 7;
    } else if (newNameInput.value === "Phenytoin") {
      mindil = 5;
    } else if (newNameInput.value === "Levetiracetam") {
      mindil = 15;
    } else if (newNameInput.value === "Fentanyl") {
      mindil = 0.4166667;
    } else if (newNameInput.value === "Ketamine") {
      mindil = 0.0833333333;
    } else if (newNameInput.value === "Midazolam") {
      mindil = 0.04166667;
    } else if (newNameInput.value === "Pethidine") {
      mindil = 10;
    } else if (newNameInput.value === "Pantoprazole") {
      mindil = 0.8;
    } else if (newNameInput.value === "Famotidine") {
      mindil = 0.2;
    } else if (newNameInput.value === "Ondansetron") {
      mindil = 2;
    } else if (newNameInput.value === "Paracetamol") {
      mindil = 10;
    } else if (newNameInput.value === "Ibuprofen") {
      mindil = 4;
    } else if (newNameInput.value === "Naloxone") {
      mindil = 0.004;
    } else if (newNameInput.value === "Mannitol") {
      mindil = 0.2;
    } else if (newNameInput.value === "Albumin") {
      mindil = 0.2;
    } else if (newNameInput.value === "Aminoleban") {
      mindil = 0.08;
    } else if (newNameInput.value === "Kidmin") {
      mindil = 0.07;  
    } else if (newNameInput.value === "Mgso4") {
      mindil = 50;
    } else if (newNameInput.value === "Dexamethasone") {
      mindil = 1;
    } else if (newNameInput.value === "Solumedrol") {
      mindil = 20;
    } else if (newNameInput.value === "Dopamine") {
      mindil = 2.222222222;
    } else if (newNameInput.value === "Dobuterix") {
      mindil = 2.77777778;
    } else if (newNameInput.value === "Adrenaline") {
      mindil = 0.04166667;
    } else if (newNameInput.value === "Nor adrenaline") {
      mindil = 0.0444444444;
    } else if (newNameInput.value === "Atropine") {
      mindil = 1;
    } else if (newNameInput.value === "Amiodarone iv") {
      mindil = 3.6;
    } else if (newNameInput.value === "Ca gluconate") {
      mindil = 10;
    } else if (newNameInput.value === "Enoxaparin") {
      mindil = 100;
    } else if (newNameInput.value === "Kapron") {
      mindil = 100;
    } else if (newNameInput.value === "Dicynone") {
      mindil = 3;
    } else if (newNameInput.value === "Aminophylline") {
      mindil = 0.04166667;
    } else if (newNameInput.value === "Lasix") {
      mindil = 2;
    } else if (newNameInput.value === "Propranolol") {
      mindil = 0.1;
    } else if (newNameInput.value === "Somazina") {
      mindil = 20;
    } else if (newNameInput.value === "Amiparen") {
      mindil = 0.1;
    } else if (newNameInput.value === "Zithromax syp") {
      mindil = 40;
    } else if (newNameInput.value === "Septazole syp") {
      mindil = 160;
    } else if (newNameInput.value === "Gast reg syp") {
      mindil = 4.8;
    } else if (newNameInput.value === "Metronidazole syp") {
      mindil = 25;
    } else if (newNameInput.value === "Brivaracetam syp") {
      mindil = 10;
    } else if (newNameInput.value === "Xilone forte syp") {
      mindil = 3;
    } else if (newNameInput.value === "Xilone syp") {
      mindil = 1;
    } else if (newNameInput.value === "Depakine 200 mg 1 ml syp") {
      mindil = 200;
    } else if (newNameInput.value === "Depakine 250 mg 5 ml syp") {
      mindil = 50;
    } else if (newNameInput.value === "Depakine 200 mg 5 ml syp") {
      mindil = 40;
    } else if (newNameInput.value === "Depakine 57.64 mg 1 ml syp") {
      mindil = 57.64;
    } else if (newNameInput.value === "Phenobarbital syp") {
      mindil = 3;
    } else if (newNameInput.value === "Ethoxa syp") {
      mindil = 50;
    } else if (newNameInput.value === "Lacosamide syp") {
      mindil = 10;
    } else if (newNameInput.value === "Averozolid syrup") {
      mindil = 20;
    } else if (newNameInput.value === "Tiratam syp") {
      mindil = 100;
    } else if (newNameInput.value === "Tegretol syp") {
      mindil = 20;
    } else if (newNameInput.value === "Potasium syp") {
      mindil = 1.33;
    } else if (newNameInput.value === "Capoten tab") {
      mindil = 2;
    } else if (newNameInput.value === "Amiodarone tab") {
      mindil = 5;
    } else if (newNameInput.value === "Inderal tab") {
      mindil = 1;
    } else if (newNameInput.value === "Norvasc tab") {
      mindil = 1;
    } else if (newNameInput.value === "Cidamax tab") {
      mindil = 25;
    } else if (newNameInput.value === "Baclofen tab") {
      mindil = 2.5;
    } else if (newNameInput.value === "Tamiflu cap") {
      mindil = 7.5;
    } else if (newNameInput.value === "Tamiflu syrup") {
      mindil = 12;
    } else if (newNameInput.value === "Milrinone tab") {
      mindil = 0.2;
    } else if (newNameInput.value === "Phenobarbitone syp") {
      mindil = 10;
    }

    let minDilution;
    let volumeOver24Hrparent = document.createElement("ul");
    let label = document.createElement("li");
    let volumeOver24Hr = document.createElement("li");

    newNameInput.style.color = "gray";
    newNameInput.style.backgroundColor = "white";
    newDoseInput.style.color = "gray";
    newDoseInput.style.backgroundColor = "white";
    newDurationInput.style.color = "gray";
    newDurationInput.style.backgroundColor = "white";

    minDilution = (weightMF.value * newDoseInput.value) / mindil;
    let volumeOver24Hr2;
    if (newDurationInput.value == 24) {
      volumeOver24Hr2 = minDilution * 1;
    } else if (newDurationInput.value == 12) {
      volumeOver24Hr2 = minDilution * 2;
    } else if (newDurationInput.value == 6) {
      volumeOver24Hr2 = minDilution * 4;
    } else if (newDurationInput.value == 8) {
      volumeOver24Hr2 = minDilution * 3;
    } else if (newDurationInput.value == 4) {
      volumeOver24Hr2 = minDilution * 6;
    }
    volumeOver24Hr.innerText = volumeOver24Hr2;

    volumeOver24Hr.classList.add("move-item-output");
    volumeOver24Hr.classList.add("sum-item");
    label.innerText = `vol over 24 hr of ${newNameInput.value} in ml:`;
    if (volumeOver24Hrparent.childNodes.length === 0) {
      volumeOver24Hrparent.appendChild(label);
      volumeOver24Hrparent.appendChild(volumeOver24Hr);
    }
    volumeOver24Hrparent.classList.add("move-item-output");

    let maintenance;
    if (weightMF.value <= 10) {
      maintenance = weightMF.value * 100;
    } else if (weightMF.value <= 20) {
      maintenance = 10 * 100 + (weightMF.value - 10) * 50;
    } else {
      maintenance = 10 * 100 + 10 * 50 + (weightMF.value - 20) * 20;
    }
    maintenance2.innerHTML = `maintenance fluids over 24 hours before substitution: <span style="color:red;">${Math.round(maintenance * 100)/100}</span> ml`;
    let elements = document.querySelectorAll(".sum-item");
    let sum = volumeOver24Hr2;
    elements.forEach((el) => {
      let num = parseFloat(el.innerText);
      if (!isNaN(num)) sum += num;
    });

    volumeOfAllDrugs.innerHTML = `volume of all drugs over 24 hr: <span style="color:red;">${Math.round(sum * 100)/100}</span>ml`;
    if (newNameInput.value==="Dicynone"){
      volumeOfAllDrugs.innerHTML = `volume of all drugs over 24 hr: <span style="color:red;">1</span>ml`;
    }
    maintenance3.innerHTML = `maintenance fluids after substitution: <span style="color:green;">${
     Math.round((maintenance - sum)* 100)/100
    }</style> ml`;
    maintenance3_24.innerHTML = `maintenance fluids over 24 hours after substitution: <span style="color:green;">${+(
      (maintenance - sum) /
      24
    ).toFixed(2)}</span> ml/hr`;

    if (!g.contains(volumeOver24Hrparent)) {
      g.prepend(volumeOver24Hrparent);
    }
    finished = false;
    newNameInput.value = "";
  }else{
    alert("please press calculate button only once");
  };
  };
  parentOfInputs.appendChild(newNameInput);
  parentOfInputs.appendChild(newDoseInput);
  parentOfInputs.appendChild(datalist);
  parentOfInputs.appendChild(newDurationInput);
  parentOfInputs.appendChild(dataListOfNewDurationInput);
};

let inputbackMF = document.getElementById("inputbackMF");
let inputbackMFpara = document.getElementById("inputbackMFpara");
let inputbackMFbtn = document.getElementById("inputbackMFbtn");
let calculateMF = document.getElementById("calculateMF");
let calculateMFpara = document.getElementById("calculateMFpara");
let calculateMFbtn = document.getElementById("calculateMFbtn");
function outputApearMF() {
  inputMF2.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;";
  calculateMF.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;border-top-right-radius:20%;border-bottom-right-radius:20%;border-top-left-radius:0px;border-bottom-left-radius:0px;border-top-right-radius:20%;";
  calculateMFpara.style.cssText =
    "translate:130% 0%;transition:all 0.5s ease-in-out;";
  calculateMFbtn.style.cssText =
    "translate:130% 0%;transition:all 0.5s ease-in-out;";
  inputbackMFpara.style.cssText = "translate:-120% 0%;";
  inputbackMFbtn.style.cssText = "translate:-120% 0%;";
  document.querySelectorAll(".move-item-output").forEach((el) => {
    el.style.transform = "translate(100%, 0%)";
  });
  setTimeout(function () {
    inputMF.style.display = "none";
    outputMF.style.display = "flex";
  }, 500);
  setTimeout(function () {
    document.querySelectorAll(".move-item-output").forEach((el) => {
      el.style.transform = "translate(0%, 0%)";
      el.style.transition = "all 0.5s ease-in-out";
    });
    calculateMF.style.cssText =
      "translate:-100% 0%;transition:all 0.5s ease-in-out;border-top-right-radius:0%;border-bottom-right-radius:0%;border-top-left-radius:20%;border-bottom-left-radius:20%;";
    inputbackMFpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackMFbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    outputMF2.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    document.querySelectorAll(".move-item-output").forEach((el) => {
      el.style.transform = "translate(0%, 0%)";
      el.style.transition = "all 0.5s ease-in-out";
    });
  }, 1000);
}
function inputApearMF() {
  inputbackMF.style.cssText =
    "translate:100% 0%;transition:all 0.5s ease-in-out;border-top-left-radius:20%;border-bottom-right-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:20%;";
  outputMF2.style.cssText =
    "translate:100% 0%;transition:all 0.5s ease-in-out;";
  calculateMF.style.cssText =
    "translate:0% 0%;transition:all 0.5s ease-in-out;border-top-left-radius:20%;border-bottom-right-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:20%;";
  inputbackMFbtn.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;";
  inputbackMFpara.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;";
  document.querySelectorAll(".move-item-input").forEach((el) => {
    el.style.transform = "translate(-100%, 0%)";
    el.style.transition = "all 0.5s ease-in-out";
  });
  setTimeout(function () {
    outputMF.style.display = "none";
    inputMF.style.display = "flex";
  }, 500);
  setTimeout(function () {
    document.querySelectorAll(".move-item-input").forEach((el) => {
      el.style.transform = "translate(0%, 0%)";
      el.style.transition = "all 0.5s ease-in-out";
    });
    calculateMFpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    calculateMFbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputMF2.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackMF.style.cssText =
      "translate:0% 0%;border-top-left-radius:0%;border-bottom-right-radius:20%;border-top-right-radius:20%;border-bottom-left-radius:0%;";
  }, 1000);
}
let inputDF = document.getElementById("inputDF");
let inputDF2 = document.getElementById("inputDF2");
let inputDF2H1 = document.getElementById("inputDF2H1");
let calculateDF = document.getElementById("calculateDF");
let calculateDFpara = document.getElementById("calculateDfpara");
let calculateDfbtn = document.getElementById("calculateDfbtn");
let outbupDF = document.getElementById("outbupDF");
let inputbackDF = document.getElementById("inputbackDF");
let inputbackDFbtn = document.getElementById("inputbackDFbtn");
let inputbackDFpara = document.getElementById("inputbackDFpara");
let outbupDF2 = document.getElementById("outbupDF2");
let GeneralDF = document.getElementById("GeneralDF");
let bolusInstractionsDF = document.getElementById("bolusInstractionsDF");
let bolusInstractionsDF2 = document.getElementById("bolusInstractionsDF2");
let CalculationsDF = document.getElementById("CalculationsDF");
let fluidRatePer8hrParent = document.getElementById("fluidRatePer8hrParent");
let fluidRatePer16hrParent = document.getElementById("fluidRatePer16hrParent");
let fluidRateOver24hrParent = document.getElementById(
  "fluidRateOver24hrParent"
);
let first = document.getElementById("first");
let second = document.getElementById("second");
function inputDisapear() {
  calculateDF.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;border-top-right-radius:20%;border-bottom-right-radius:20%;border-top-left-radius:0px;border-bottom-left-radius:0px;";
  calculateDFpara.style.cssText =
    "translate:100% 0%;transition:all 0.5s ease-in-out;";
  calculateDfbtn.style.cssText =
    "translate:120% 0%;transition:all 0.5s ease-in-out;";
  inputDF2.style.cssText =
    "translate:-100% 0%;transition:all 0.5s ease-in-out;";
  GeneralDF.style.cssText =
    "translate:130% 0%;transition:all 0.5s ease-in-out;";
  bolusInstractionsDF.style.cssText =
    "translate:130% 0%;transition:all 0.5s ease-in-out;";
  bolusInstractionsDF2.style.cssText =
    "translate:130% 0%;transition:all 0.5s ease-in-out;";
  CalculationsDF.style.cssText = "translate:250% 0%";
  first.style.cssText = "translate:260% 0%;";
  second.style.cssText = "translate:250% 0%;";
  fluidRatePer8hrParent.style.cssText = "translate:250% 0%;";
  fluidRatePer16hrParent.style.cssText = "translate:250% 0%;";
  fluidRateOver24hrParent.style.cssText = "translate:250% 0%";
  inputbackDFbtn.style.cssText = "translate:-120% 0%;";
  inputbackDFpara.style.cssText = "translate:-120% 0%;";
  setTimeout(function () {
    inputDF.style.display = "none";
    outbupDF.style.display = "flex";
  }, 500);
  setTimeout(function () {
    first.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    second.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackDFbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackDFpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    GeneralDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    bolusInstractionsDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    bolusInstractionsDF2.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    CalculationsDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    fluidRatePer8hrParent.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    fluidRatePer16hrParent.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    fluidRateOver24hrParent.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackDFbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackDFpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
  }, 1000);
}
function outputDisapear() {
  inputbackDF.style.cssText =
    "translate:102.5% 0%;transition:all 0.5s ease-in-out;border-top-left-radius:20%;border-bottom-right-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:20%;";
  inputbackDFbtn.style.cssText =
    "translate:-120% 0%;transition:all 0.5s ease-in-out;";
  inputbackDFpara.style.cssText =
    "translate:-120% 0%;transition:all 0.5s ease-in-out;";
  outbupDF2.style.cssText =
    "translate:250% 0%;transition:all 0.5s ease-in-out;";
  inputDF2H1.style.cssText = "translate:-250% 0%;";
  weightMF.style.cssText = "translate:-250% 0%;";
  bolusDF.style.cssText = "translate:-250% 0%;";
  deficitDF.style.cssText = "translate:-250% 0%;";
  calculateDF.style.cssText =
    "translate:0% 0%;border-top-right-radius:0%;border-bottom-right-radius:0%;border-top-left-radius:20%;border-bottom-left-radius:20%;";
  GeneralDF.style.cssText = "translate:130% 0%;";
  bolusInstractionsDF.style.cssText = "translate:130% 0%;";
  bolusInstractionsDF2.style.cssText = "translate:130% 0%;";
  setTimeout(function () {
    inputDF.style.display = "flex";
    outbupDF.style.display = "none";
  }, 500);
  setTimeout(function () {
    calculateDFpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    calculateDfbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputDF2.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputDF2H1.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    weightMF.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    bolusDF.style.cssText = "translate:0% 0%;transition:all 0.5s ease-in-out;";
    deficitDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    outbupDF2.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;border-top-left-radius:0px;border-bottom-right-radius:20%;border-top-right-radius:20%;border-bottom-left-radius:0px;";
    inputbackDFbtn.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    inputbackDFpara.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    GeneralDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    bolusInstractionsDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    bolusInstractionsDF2.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    CalculationsDF.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    fluidRatePer8hrParent.style.cssText =
      "translate:0% 0%; transition:all 0.5s ease-in-out;";
    fluidRatePer16hrParent.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
    fluidRateOver24hrParent.style.cssText =
      "translate:0% 0%;transition:all 0.5s ease-in-out;";
  }, 1000);
}

let iv = document.getElementById("iv");
let MF = document.getElementById("MF");
let oral = document.getElementById("oral");
let DF = document.getElementById("DehydrationFluids");

function ivback() {
  iv.style.display = "flex";
  oral.style.display = "none";
  DF.style.display = "none";
  MF.style.display = "none";
  IvManiwal.style.display = "none";
  OralManiwal.style.display = "none";
  choice.style.display = "none";
  referance.style.display="none";
}

function oralback() {
  oral.style.display = "flex";
  iv.style.display = "none";
  DF.style.display = "none";
  MF.style.display = "none";
  IvManiwal.style.display = "none";
  OralManiwal.style.display = "none";
  choice.style.display = "none";
  referance.style.display="none";
}
function dehydrationFluidsBack() {
  oral.style.display = "none";
  iv.style.display = "none";
  DF.style.display = "flex";
  MF.style.display = "none";
  IvManiwal.style.display = "none";
  OralManiwal.style.display = "none";
  choice.style.display = "none";
  referance.style.display="none";
}
function MFback() {
  oral.style.display = "none";
  iv.style.display = "none";
  DF.style.display = "none";
  MF.style.display = "flex";
  IvManiwal.style.display = "none";
  OralManiwal.style.display = "none";
  choice.style.display = "none";
  referance.style.display="none";
}
let weightIVManiwal = document.getElementById("weightIVManiwal");
let doseIVManiwal = document.getElementById("doseIVManiwal");
let concInMlIVManiwal = document.getElementById("concInMlIVManiwal");
let volumeIvManiwal = document.getElementById("volumeIvManiwal");
let minConcIvManiwal = document.getElementById("minConcIvManiwal");
//output
let minDilutionOutput = document.getElementById("minDilutionIVManiwal");
let volumeToBeTakenOutput = document.getElementById("volumeToBeTakenIVManiwal");
let childDoseOutput = document.getElementById("childDoseIVManiwal");
function calcIvMan() {
  let childDose = weightIVManiwal.value * doseIVManiwal.value;
  let volumeToBeTaken =
    (childDose * volumeIvManiwal.value) / concInMlIVManiwal.value;
  let minDilution = childDose / minConcIvManiwal.value;
  minDilutionOutput.innerText = `Min dilution is ${minDilution} ml`;
  volumeToBeTakenOutput.innerText = `volume to be taken from vial is ${volumeToBeTaken} ml`;
  childDoseOutput.innerText = `Dose  for child is ${childDose} mg`;
}
let weightOralManiwal = document.getElementById("weightOralManiwal");
let doseOralManiwal = document.getElementById("doseOralManiwal");
let concInMlOralManiwal = document.getElementById("concInMlOralManiwal");
let volumeOralManiwal = document.getElementById("volumeOralManiwal");
let minConcOralManiwal = document.getElementById("minConcOralManiwal");
//output
let volumeToBeTakenOutputOral = document.getElementById(
  "volumeToBeTakenOralManiwal"
);
let childDoseOutputOral = document.getElementById("childDoseOralManiwal");
function calcOralMan() {
  let childDose = weightOralManiwal.value * doseOralManiwal.value;
  let volumeToBeTaken =
    (childDose * volumeOralManiwal.value) / concInMlOralManiwal.value;
  volumeToBeTakenOutputOral.innerText = `volume to be taken is ${volumeToBeTaken}`;
  childDoseOutputOral.innerText = `dose child is ${childDose}`;
}
function IvManiwalApear() {
  IvManiwal.style.display = "flex";
  oral.style.display = "none";
  iv.style.display = "none";
  DF.style.display = "none";
  MF.style.display = "none";
  OralManiwal.style.display = "none";
  choice.style.display = "none";
      referance.style.display="none";
}
function OralManiwalApear() {
  OralManiwal.style.display = "flex";
  oral.style.display = "none";
  iv.style.display = "none";
  DF.style.display = "none";
  MF.style.display = "none";
  IvManiwal.style.display = "none";
  choice.style.display = "none";
      referance.style.display="none";
}
let IvManiwal = document.getElementById("IvManiwal");
let OralManiwal = document.getElementById("oralManiwal");
let choice = document.getElementById("choice");
function ManiwalApear() {
  choice.style.display = "flex";
  IvManiwal.style.display = "none";
  oral.style.display = "none";
  iv.style.display = "none";
  DF.style.display = "none";
  MF.style.display = "none";
  OralManiwal.style.display = "none";
      referance.style.display="none";
}
infant = `mild(A) 5% {50 ml/kg} moderate(B) 10% {100 ml/kg} sever(C) 15 % {150 ml/kg}`;
child = `mild(A) 3% {30 ml/kg} moderate(B) 6% {60 ml/kg} sever(C) 9% {90 ml/kg}`;
let infantbtn = document.getElementById("infantbtn");
let childbtn = document.getElementById("childbtn");
let infantpara = document.getElementById("infant");
let childpara = document.getElementById("child");
infantbtn.onclick = function () {
  infantpara.innerText = infant;
  infantpara.style.display = "block";
  childpara.style.display = "none";
  this.style.display = "none";
  childbtn.style.display = "inline-block";
      referance.style.display="none";
};
childbtn.onclick = function () {
  childpara.innerText = child;
  childpara.style.display = "block";
  infantpara.style.display = "none";
  this.style.display = "none";
  infantbtn.style.display = "inline-block";
    referance.style.display="none";
};
let referance = document.getElementById("refernce");
function referanceapear(){
  referance.style.display="flex";
  iv.style.display="none";
  oral.style.display="none";
  DF.style.display="none";
  MF.style.display="none";
  IvManiwal.style.display = "none";
  OralManiwal.style.display = "none";
  choice.style.display = "none";
}