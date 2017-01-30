console.log("test");

var deaths = [
    {
      "TOTAL": "Terrorist attack by Jihadist immigrants",
      "deaths": "2",
      "percent": 7.614934104e-7,
      "threshold": 7.6e-7,
      "chances": 1313209,
      "background": "#000000"
    },
    {
      "TOTAL": "Right-wing terrorism",
      "deaths": "5",
      "percent": 0.000001903733526,
      "threshold": 0.00000267,
      "chances": 525283.6,
      "background": "#bb0000"
    },
    {
      "TOTAL": "Terrorist attack by Jihadist citizens",
      "deaths": "7",
      "percent": 0.000002665226936,
      "threshold": 0.00000533,
      "chances": 375202.57,
      "background": "#000000"
    },
    {
      "TOTAL": "cancer",
      "deaths": "591,699",
      "percent": 0.2252874447,
      "threshold": 0.22529278,
      "chances": 4.44,
      "background": "#82c7e8"
    },
    {
      "TOTAL": "lung disease",
      "deaths": "147,101",
      "percent": 0.05600822108,
      "threshold": 0.281301,
      "chances": 17.85,
      "background": "#c3a91e"
    },
    {
      "TOTAL": "falling out of bed",
      "deaths": "737",
      "percent": 0.0002806103217,
      "threshold": 0.28158161,
      "chances": 3563.66,
      "background": "#cca9f1"
    },
    {
      "TOTAL": "stroke",
      "deaths": "133,103",
      "percent": 0.0506785287,
      "threshold": 0.33226014,
      "chances": 19.73,
      "background": "#961e1e"
    },
    {
      "TOTAL": "alzheimer's",
      "deaths": "93,541",
      "percent": 0.03561542755,
      "threshold": 0.36787556,
      "chances": 28.08,
      "background": "6e1e96"
    },
    {
      "TOTAL": "diabetes",
      "deaths": "76,488",
      "percent": 0.02912255399,
      "threshold": 0.39699812,
      "chances": 34.34,
      "background": "#8e8e8e"
    },
    {
      "TOTAL": "influenza and pneumonia",
      "deaths": "55227",
      "percent": 0.02102749829,
      "threshold": 0.41802562,
      "chances": 47.56,
      "background": "#28a1d2"
    },
    {
      "TOTAL": "Kidney disease",
      "deaths": "48146",
      "percent": 0.01833143087,
      "threshold": 0.43635705,
      "chances": 54.55,
      "background": "#b6d228"
    },
    {
      "TOTAL": "lightning",
      "deaths": "31",
      "percent": 0.00001180314786,
      "threshold": 0.43636885,
      "chances": 84723.16,
      "background": "#00fff5"
    },
    {
      "TOTAL": "traffic accidents",
      "deaths": "37000",
      "percent": 0.01408762809,
      "threshold": 0.45045648,
      "chances": 70.98,
      "background": "#33393e"
    },
    {
      "TOTAL": "murder",
      "deaths": "14,249",
      "percent": 0.005425259803,
      "threshold": 0.45588174,
      "chances": 184.32,
      "background": "#4a0d0d"
    },
    {
      "TOTAL": "drowning",
      "deaths": "4500",
      "percent": 0.001713360173,
      "threshold": 0.4575951,
      "chances": 583.65,
      "background": "#208fa2"
    },
    {
      "TOTAL": "fall involving ice skates, skis, roller-skates, or skteboards",
      "deaths": "1139",
      "percent": 0.0004336704972,
      "threshold": 0.45802877,
      "chances": 2305.9,
      "background": "#9eced6"
    },
    {
      "TOTAL": "fall from tree",
      "deaths": "1413",
      "percent": 0.0005379950945,
      "threshold": 0.45856676,
      "chances": 1858.75,
      "background": "#1e611d"
    },
    {
      "TOTAL": "constipation",
      "deaths": "2167",
      "percent": 0.0008250781102,
      "threshold": 0.45939184,
      "chances": 1212.01,
      "background": "#542d0a"
    },
    {
      "TOTAL": "SIDS",
      "deaths": "1545",
      "percent": 0.0005882536595,
      "threshold": 0.45998009,
      "chances": 1699.95,
      "background": "#eaabd7"
    },
    {
      "TOTAL": "liver disease",
      "deaths": "38,170",
      "percent": 0.01453310174,
      "threshold": 0.4745132,
      "chances": 68.81,
      "background": "#216942"
    },
    {
      "TOTAL": "hypertension",
      "deaths": "30,221",
      "percent": 0.01150654618,
      "threshold": 0.48601974,
      "chances": 86.91,
      "background": "#9d89d8"
    },
    {
      "TOTAL": "Parkinson’s disease",
      "deaths": "26150",
      "percent": 0.009956526341,
      "threshold": 0.49597627,
      "chances": 100.44,
      "background": "#b7b7b7"
    },
    {
      "TOTAL": "Pneumonitis due to solids and liquids",
      "deaths": "18792",
      "percent": 0.007154992084,
      "threshold": 0.50313126,
      "chances": 139.76,
      "background": "#33393e"
    },
    {
      "TOTAL": "unintentional poisoning",
      "deaths": "38851",
      "percent": 0.01479239024,
      "threshold": 0.51792365,
      "chances": 67.6,
      "background": "#25ff00"
    },
    {
      "TOTAL": "intentional self harm",
      "deaths": "44193",
      "percent": 0.01682633914,
      "threshold": 0.53474999,
      "chances": 59.43,
      "background": "#0e2f08"
    },
    {
      "TOTAL": "anemia",
      "deaths": "5,219",
      "percent": 0.001987117054,
      "threshold": 0.53673711,
      "chances": 503.24,
      "background": "#c71b1b"
    },
    {
      "TOTAL": "asthma",
      "deaths": "3,651",
      "percent": 0.001390106221,
      "threshold": 0.53812721,
      "chances": 719.37,
      "background": "#b2d5e6"
    },
    {
      "TOTAL": "HIV",
      "deaths": "6,721",
      "percent": 0.002558998606,
      "threshold": 0.54068621,
      "chances": 390.78,
      "background": "#c71f1f"
    },
    {
      "TOTAL": "viral hepatitis",
      "deaths": "8,081",
      "percent": 0.003076814125,
      "threshold": 0.54376303,
      "chances": 325.01,
      "background": "#585858"
    },
    {
      "TOTAL": "fire",
      "deaths": "3127",
      "percent": 0.001190594947,
      "threshold": 0.54495362,
      "chances": 839.92,
      "background": "#ff8213"
    },
    {
      "TOTAL": "accident involving machinery",
      "deaths": "590",
      "percent": 0.0002246405561,
      "threshold": 0.54517826,
      "chances": 4451.56,
      "background": "#ffd913"
    },
    {
      "TOTAL": "appendicitis",
      "deaths": "415",
      "percent": 0.0001580098827,
      "threshold": 0.54533627,
      "chances": 6328.72,
      "background": "#585858"
    },
    {
      "TOTAL": "tuburculosis",
      "deaths": "569",
      "percent": 0.0002166448753,
      "threshold": 0.54555292,
      "chances": 4615.85,
      "background": "#585858"
    },
    {
      "TOTAL": "whooping cough",
      "deaths": "26",
      "percent": 0.000009899414335,
      "threshold": 0.54556282,
      "chances": 101016.08,
      "background": "#585858"
    },
    {
      "TOTAL": "meningitis",
      "deaths": "608",
      "percent": 0.0002314939968,
      "threshold": 0.54579431,
      "chances": 4319.77,
      "background": "#585858"
    },
    {
      "TOTAL": "syphilis",
      "deaths": "30",
      "percent": 0.00001142240116,
      "threshold": 0.54580573,
      "chances": 87547.27,
      "background": "#585858"
    },
    {
      "TOTAL": "heart disease",
      "deaths": "614348",
      "percent": 0.2339109769,
      "threshold": 0.77971671,
      "chances": 4.28,
      "background": "#c71f1f"
    },
    {
      "TOTAL": "injury (other)",
      "deaths": "48696",
      "percent": 0.01854084156,
      "threshold": 0.79825755,
      "chances": 53.93,
      "background": "#585858"
    },
    {
      "TOTAL": "low birth weight",
      "deaths": "4,173",
      "percent": 0.001588856001,
      "threshold": 0.79984641,
      "chances": 629.38,
      "background": "#585858"
    },
    {
      "TOTAL": "pregnancy and childbirth",
      "deaths": "663",
      "percent": 0.0002524350656,
      "threshold": 0.80009884,
      "chances": 3961.41,
      "background": "#eaabd7"
    },
    {
      "TOTAL": "congenital abnormalities",
      "deaths": "11,835",
      "percent": 0.004506137256,
      "threshold": 0.80460498,
      "chances": 221.92,
      "background": "#585858"
    },
    {
      "TOTAL": "alcohol",
      "deaths": "6,230",
      "percent": 0.002372051973,
      "threshold": 0.80697703,
      "chances": 421.58,
      "background": "#585858"
    },
    {
      "TOTAL": "skin disease",
      "deaths": "4,147",
      "percent": 0.001578956586,
      "threshold": 0.80855599,
      "chances": 633.33,
      "background": "#585858"
    },
    {
      "TOTAL": "multiple sclerosis",
      "deaths": "3,738",
      "percent": 0.001423231184,
      "threshold": 0.80997922,
      "chances": 702.63,
      "background": "#585858"
    },
    {
      "TOTAL": "illness (other)",
      "deaths": "",
      "percent": 0.1900207812,
      "threshold": 1,
      "chances": 5.26,
      "background": "#585858"
    }
];
var button = document.getElementById('die');


function die() {
   var index = Math.random();
   var death;

   for (var i = 0; i < deaths.length; i++) {
      if (index < deaths[i].threshold) {
         death = deaths[i];
         break;
      }
   }

   document.getElementById('cause__label').innerText = death.TOTAL;
   document.getElementById('odds__factor').innerText = death.chances;
   document.getElementsByTagName('body')[0].setAttribute('style', "background-color: " + death.background + ";");
}


button.onclick = die;

die();

