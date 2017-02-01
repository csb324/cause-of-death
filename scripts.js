var deathCount = parseInt(localStorage.getItem("cause_of_death_count")) || 0;
var terrorismCount = parseInt(localStorage.getItem("cause_of_death_terrorism_count")) || 0;
var deaths = [
 {
   "Cause": "heart disease",
   "Deaths": 348949,
   "Color": "#c71f1f",
   "percent": 0.13286118,
   "threshold": 0.13286118,
   "Odds": 7.53
 },
 {
   "Cause": "lung disease",
   "Deaths": 170318,
   "Color": "#E7899C",
   "percent": 0.06484802,
   "threshold": 0.1977092,
   "Odds": 15.42
 },
 {
   "Cause": "lung cancer",
   "Deaths": 156449,
   "Color": "#6abae0",
   "percent": 0.05956744,
   "threshold": 0.25727664,
   "Odds": 16.79
 },
 {
   "Cause": "heart attack",
   "Deaths": 129336,
   "Color": "#c71f1f",
   "percent": 0.04924426,
   "threshold": 0.3065209,
   "Odds": 20.31
 },
 {
   "Cause": "dementia",
   "Deaths": 123325,
   "Color": "#708090",
   "percent": 0.04695559,
   "threshold": 0.35347648,
   "Odds": 21.3
 },
 {
   "Cause": "stroke",
   "Deaths": 102007,
   "Color": "#82168B",
   "percent": 0.03883883,
   "threshold": 0.39231531,
   "Odds": 25.75
 },
 {
   "Cause": "alzheimer's",
   "Deaths": 93507,
   "Color": "#708090",
   "percent": 0.03560248,
   "threshold": 0.4279178,
   "Odds": 28.09
 },
 {
   "Cause": "diabetes",
   "Deaths": 76457,
   "Color": "#4E9BBF",
   "percent": 0.02911075,
   "threshold": 0.45702855,
   "Odds": 34.35
 },
 {
   "Cause": "heart failure",
   "Deaths": 68394,
   "Color": "#c71f1f",
   "percent": 0.02604079,
   "threshold": 0.48306934,
   "Odds": 38.4
 },
 {
   "Cause": "hypertension",
   "Deaths": 68332,
   "Color": "#c71f1f",
   "percent": 0.02601718,
   "threshold": 0.50908652,
   "Odds": 38.44
 },
 {
   "Cause": "cancer (other)",
   "Deaths": 64425,
   "Color": "#6abae0",
   "percent": 0.02452961,
   "threshold": 0.53361613,
   "Odds": 40.77
 },
 {
   "Cause": "pneumonia",
   "Deaths": 50001,
   "Color": "#4E9BBF",
   "percent": 0.01903772,
   "threshold": 0.55265384,
   "Odds": 52.53
 },
 {
   "Cause": "intentional self-harm",
   "Deaths": 42471,
   "Color": "#3C3C3C",
   "percent": 0.01617069,
   "threshold": 0.56882454,
   "Odds": 61.84
 },
 {
   "Cause": "breast cancer",
   "Deaths": 41665,
   "Color": "#6abae0",
   "percent": 0.01586381,
   "threshold": 0.58468835,
   "Odds": 63.04
 },
 {
   "Cause": "colon cancer",
   "Deaths": 40470,
   "Color": "#6abae0",
   "percent": 0.01540882,
   "threshold": 0.60009717,
   "Odds": 64.9
 },
 {
   "Cause": "pancreatic cancer",
   "Deaths": 40419,
   "Color": "#6abae0",
   "percent": 0.0153894,
   "threshold": 0.61548657,
   "Odds": 64.98
 },
 {
   "Cause": "sepsis",
   "Deaths": 38662,
   "Color": "#7B9007",
   "percent": 0.01472043,
   "threshold": 0.630207,
   "Odds": 67.93
 },
 {
   "Cause": "kidney failure",
   "Deaths": 29756,
   "Color": "#908407",
   "percent": 0.0113295,
   "threshold": 0.6415365,
   "Odds": 88.27
 },
 {
   "Cause": "liver disease",
   "Deaths": 28417,
   "Color": "#908407",
   "percent": 0.01081968,
   "threshold": 0.65235617,
   "Odds": 92.42
 },
 {
   "Cause": "prostate cancer",
   "Deaths": 28344,
   "Color": "#6abae0",
   "percent": 0.01079188,
   "threshold": 0.66314806,
   "Odds": 92.66
 },
 {
   "Cause": "parkinson's",
   "Deaths": 25972,
   "Color": "#82168B",
   "percent": 0.00988875,
   "threshold": 0.67303681,
   "Odds": 101.12
 },
 {
   "Cause": "unspecified fall",
   "Deaths": 25283,
   "Color": "#65112D",
   "percent": 0.00962642,
   "threshold": 0.68266323,
   "Odds": 103.88
 },
 {
   "Cause": "leukemia",
   "Deaths": 23394,
   "Color": "#6abae0",
   "percent": 0.00890719,
   "threshold": 0.69157042,
   "Odds": 112.27
 },
 {
   "Cause": "kidney cancer",
   "Deaths": 22827,
   "Color": "#6abae0",
   "percent": 0.00869131,
   "threshold": 0.70026173,
   "Odds": 115.06
 },
 {
   "Cause": "traffic accident",
   "Deaths": 21436,
   "Color": "#65112D",
   "percent": 0.00816169,
   "threshold": 0.70842341,
   "Odds": 122.52
 },
 {
   "Cause": "accidental drug overdose",
   "Deaths": 21059,
   "Color": "#005555",
   "percent": 0.00801814,
   "threshold": 0.71644156,
   "Odds": 124.72
 },
 {
   "Cause": "liver cancer",
   "Deaths": 20929,
   "Color": "#6abae0",
   "percent": 0.00796865,
   "threshold": 0.7244102,
   "Odds": 125.49
 },
 {
   "Cause": "kidney disease",
   "Deaths": 20923,
   "Color": "#908407",
   "percent": 0.00796636,
   "threshold": 0.73237657,
   "Odds": 125.53
 },
 {
   "Cause": "liver disease due to alcohol",
   "Deaths": 19009,
   "Color": "#908407",
   "percent": 0.00723761,
   "threshold": 0.73961418,
   "Odds": 138.17
 },
 {
   "Cause": "pneumonitis due to food and vomit",
   "Deaths": 18789,
   "Color": "#E7899C",
   "percent": 0.00715385,
   "threshold": 0.74676803,
   "Odds": 139.78
 },
 {
   "Cause": "brain cancer",
   "Deaths": 18692,
   "Color": "#6abae0",
   "percent": 0.00711692,
   "threshold": 0.75388495,
   "Odds": 140.51
 },
 {
   "Cause": "unintentional poisoning",
   "Deaths": 21152,
   "Color": "#7ED600",
   "percent": 0.00805355,
   "threshold": 0.7619385,
   "Odds": 124.17
 },
 {
   "Cause": "bladder cancer",
   "Deaths": 16161,
   "Color": "#6abae0",
   "percent": 0.00615325,
   "threshold": 0.76809175,
   "Odds": 162.52
 },
 {
   "Cause": "throat cancer",
   "Deaths": 15991,
   "Color": "#6abae0",
   "percent": 0.00608852,
   "threshold": 0.77418027,
   "Odds": 164.24
 },
 {
   "Cause": "brain disease",
   "Deaths": 14442,
   "Color": "#8F33A3",
   "percent": 0.00549874,
   "threshold": 0.77967902,
   "Odds": 181.86
 },
 {
   "Cause": "ovarian cancer",
   "Deaths": 14195,
   "Color": "#6abae0",
   "percent": 0.0054047,
   "threshold": 0.78508371,
   "Odds": 185.02
 },
 {
   "Cause": "uterine cancer",
   "Deaths": 13744,
   "Color": "#6abae0",
   "percent": 0.00523298,
   "threshold": 0.7903167,
   "Odds": 191.1
 },
 {
   "Cause": "brain hemmorhage",
   "Deaths": 13640,
   "Color": "#8F33A3",
   "percent": 0.00519339,
   "threshold": 0.79551008,
   "Odds": 192.55
 },
 {
   "Cause": "skin cancer",
   "Deaths": 13059,
   "Color": "#6abae0",
   "percent": 0.00497217,
   "threshold": 0.80048225,
   "Odds": 201.12
 },
 {
   "Cause": "non-hodgkin's lymphoma",
   "Deaths": 12075,
   "Color": "#6abae0",
   "percent": 0.00459752,
   "threshold": 0.80507977,
   "Odds": 217.51
 },
 {
   "Cause": "urinary tract infection",
   "Deaths": 11681,
   "Color": "#CAA91B",
   "percent": 0.0044475,
   "threshold": 0.80952727,
   "Odds": 224.85
 },
 {
   "Cause": "high cholesterol",
   "Deaths": 10973,
   "Color": "#c71f1f",
   "percent": 0.00417793,
   "threshold": 0.81370521,
   "Odds": 239.35
 },
 {
   "Cause": "assault by firearm",
   "Deaths": 10945,
   "Color": "#A00704",
   "percent": 0.00416727,
   "threshold": 0.81787248,
   "Odds": 239.97
 },
 {
   "Cause": "stomach cancer",
   "Deaths": 10449,
   "Color": "#6abae0",
   "percent": 0.00397842,
   "threshold": 0.8218509,
   "Odds": 251.36
 },
 {
   "Cause": "gastrointestinal disease",
   "Deaths": 9896,
   "Color": "#CAA91B",
   "percent": 0.00376787,
   "threshold": 0.82561877,
   "Odds": 265.4
 },
 {
   "Cause": "gastrointestinal bleeding",
   "Deaths": 8370,
   "Color": "#CAA91B",
   "percent": 0.00318685,
   "threshold": 0.82880562,
   "Odds": 313.79
 },
 {
   "Cause": "pulmonary embolism",
   "Deaths": 8124,
   "Color": "#E7899C",
   "percent": 0.00309319,
   "threshold": 0.83189881,
   "Odds": 323.29
 },
 {
   "Cause": "hepatitis",
   "Deaths": 7345,
   "Color": "#c71f1f",
   "percent": 0.00279658,
   "threshold": 0.83469539,
   "Odds": 357.58
 },
 {
   "Cause": "rectum cancer",
   "Deaths": 6821,
   "Color": "#6abae0",
   "percent": 0.00259707,
   "threshold": 0.83729246,
   "Odds": 385.05
 },
 {
   "Cause": "brain damage",
   "Deaths": 6795,
   "Color": "#8F33A3",
   "percent": 0.00258717,
   "threshold": 0.83987964,
   "Odds": 386.52
 },
 {
   "Cause": "myelodysplastic syndrome",
   "Deaths": 6787,
   "Color": "#708090",
   "percent": 0.00258413,
   "threshold": 0.84246377,
   "Odds": 386.98
 },
 {
   "Cause": "obesity (other)",
   "Deaths": 6735,
   "Color": "#708090",
   "percent": 0.00256433,
   "threshold": 0.8450281,
   "Odds": 389.97
 },
 {
   "Cause": "hiv",
   "Deaths": 6721,
   "Color": "#c71f1f",
   "percent": 0.002559,
   "threshold": 0.84758709,
   "Odds": 390.78
 },
 {
   "Cause": "senility",
   "Deaths": 6698,
   "Color": "#708090",
   "percent": 0.00255024,
   "threshold": 0.85013734,
   "Odds": 392.12
 },
 {
   "Cause": "bile duct cancer",
   "Deaths": 6440,
   "Color": "#6abae0",
   "percent": 0.00245201,
   "threshold": 0.85258934,
   "Odds": 407.83
 },
 {
   "Cause": "degenerative nerve disease (other)",
   "Deaths": 6350,
   "Color": "#8F33A3",
   "percent": 0.00241774,
   "threshold": 0.85500709,
   "Odds": 413.61
 },
 {
   "Cause": "traffic accident (pedestrian)",
   "Deaths": 5001,
   "Color": "#474762",
   "percent": 0.00190411,
   "threshold": 0.8569112,
   "Odds": 525.18
 },
 {
   "Cause": "intestinal obstruction",
   "Deaths": 4987,
   "Color": "#828282",
   "percent": 0.00189878,
   "threshold": 0.85880998,
   "Odds": 526.65
 },
 {
   "Cause": "respiratory failure, unspecified",
   "Deaths": 4461,
   "Color": "#E7899C",
   "percent": 0.00169851,
   "threshold": 0.86050849,
   "Odds": 588.75
 },
 {
   "Cause": "alcohol dependence",
   "Deaths": 4412,
   "Color": "#A35733",
   "percent": 0.00167985,
   "threshold": 0.86218835,
   "Odds": 595.29
 },
 {
   "Cause": "multiple sclerosis",
   "Deaths": 4174,
   "Color": "#828282",
   "percent": 0.00158924,
   "threshold": 0.86377759,
   "Odds": 629.23
 },
 {
   "Cause": "premature birth",
   "Deaths": 4114,
   "Color": "#BB73E7",
   "percent": 0.00156639,
   "threshold": 0.86534398,
   "Odds": 638.41
 },
 {
   "Cause": "lack of expected physiological development",
   "Deaths": 4077,
   "Color": "#BB73E7",
   "percent": 0.0015523,
   "threshold": 0.86689628,
   "Odds": 644.2
 },
 {
   "Cause": "malnutrition",
   "Deaths": 3674,
   "Color": "#848EB1",
   "percent": 0.00139886,
   "threshold": 0.86829515,
   "Odds": 714.87
 },
 {
   "Cause": "metabolic disorders",
   "Deaths": 3477,
   "Color": "#828282",
   "percent": 0.00132386,
   "threshold": 0.869619,
   "Odds": 755.37
 },
 {
   "Cause": "choking (non-food)",
   "Deaths": 3352,
   "Color": "#C1256B",
   "percent": 0.00127626,
   "threshold": 0.87089527,
   "Odds": 783.54
 },
 {
   "Cause": "aortic aneurysm",
   "Deaths": 3319,
   "Color": "#c71f1f",
   "percent": 0.0012637,
   "threshold": 0.87215896,
   "Odds": 791.33
 },
 {
   "Cause": "larynx cancer",
   "Deaths": 3316,
   "Color": "#6abae0",
   "percent": 0.00126256,
   "threshold": 0.87342152,
   "Odds": 792.04
 },
 {
   "Cause": "athsma",
   "Deaths": 3149,
   "Color": "#708090",
   "percent": 0.00119897,
   "threshold": 0.87462049,
   "Odds": 834.05
 },
 {
   "Cause": "injury (other)",
   "Deaths": 2859,
   "Color": "#A00704",
   "percent": 0.00108855,
   "threshold": 0.87570905,
   "Odds": 918.65
 },
 {
   "Cause": "substance abuse (alcohol)",
   "Deaths": 2743,
   "Color": "#A35733",
   "percent": 0.00104439,
   "threshold": 0.87675343,
   "Odds": 957.5
 },
 {
   "Cause": "anemia",
   "Deaths": 2735,
   "Color": "#c71f1f",
   "percent": 0.00104134,
   "threshold": 0.87779478,
   "Odds": 960.3
 },
 {
   "Cause": "fire",
   "Deaths": 2701,
   "Color": "#E6710C",
   "percent": 0.0010284,
   "threshold": 0.87882317,
   "Odds": 972.39
 },
 {
   "Cause": "accidental poisoning",
   "Deaths": 0,
   "Color": "#0D6323",
   "percent": 0,
   "threshold": 0.87882317,
   "Odds": 0
 },
 {
   "Cause": "pancreatitis",
   "Deaths": 2455,
   "Color": "#828282",
   "percent": 0.00093473,
   "threshold": 0.87975791,
   "Odds": 1069.82
 },
 {
   "Cause": "influenza",
   "Deaths": 2454,
   "Color": "#2B4888",
   "percent": 0.00093435,
   "threshold": 0.88069226,
   "Odds": 1070.26
 },
 {
   "Cause": "diverticular disease",
   "Deaths": 2435,
   "Color": "#8F33A3",
   "percent": 0.00092712,
   "threshold": 0.88161938,
   "Odds": 1078.61
 },
 {
   "Cause": "tongue cancer",
   "Deaths": 2373,
   "Color": "#6abae0",
   "percent": 0.00090351,
   "threshold": 0.88252289,
   "Odds": 1106.79
 },
 {
   "Cause": "traffic accident (motorcycle)",
   "Deaths": 2371,
   "Color": "#474762",
   "percent": 0.00090275,
   "threshold": 0.88342564,
   "Odds": 1107.73
 },
 {
   "Cause": "respiratory arrest",
   "Deaths": 2339,
   "Color": "#E7899C",
   "percent": 0.00089057,
   "threshold": 0.88431621,
   "Odds": 1122.88
 },
 {
   "Cause": "fall involving stairs",
   "Deaths": 2285,
   "Color": "#C1256B",
   "percent": 0.00087001,
   "threshold": 0.88518621,
   "Odds": 1149.42
 },
 {
   "Cause": "accidental alcohol poisoning",
   "Deaths": 2283,
   "Color": "#A35733",
   "percent": 0.00086924,
   "threshold": 0.88605546,
   "Odds": 1150.42
 },
 {
   "Cause": "gallbladder cancer",
   "Deaths": 2278,
   "Color": "#6abae0",
   "percent": 0.00086734,
   "threshold": 0.8869228,
   "Odds": 1152.95
 },
 {
   "Cause": "arthritis",
   "Deaths": 1986,
   "Color": "#708090",
   "percent": 0.00075616,
   "threshold": 0.88767896,
   "Odds": 1322.47
 },
 {
   "Cause": "stomach flu",
   "Deaths": 1916,
   "Color": "#2B4888",
   "percent": 0.00072951,
   "threshold": 0.88840847,
   "Odds": 1370.78
 },
 {
   "Cause": "thyroid cancer",
   "Deaths": 1832,
   "Color": "#6abae0",
   "percent": 0.00069753,
   "threshold": 0.889106,
   "Odds": 1433.63
 },
 {
   "Cause": "assault by sharp object",
   "Deaths": 1740,
   "Color": "#A00704",
   "percent": 0.0006625,
   "threshold": 0.8897685,
   "Odds": 1509.44
 },
 {
   "Cause": "general symptoms",
   "Deaths": 1710,
   "Color": "#2B4888",
   "percent": 0.00065108,
   "threshold": 0.89041958,
   "Odds": 1535.92
 },
 {
   "Cause": "drowning in a natural body of water",
   "Deaths": 1695,
   "Color": "#33A38F",
   "percent": 0.00064537,
   "threshold": 0.89106494,
   "Odds": 1549.51
 },
 {
   "Cause": "cerebral palsy",
   "Deaths": 1664,
   "Color": "#8F33A3",
   "percent": 0.00063356,
   "threshold": 0.8916985,
   "Odds": 1578.38
 },
 {
   "Cause": "electrolyte imbalance",
   "Deaths": 1649,
   "Color": "#7ED600",
   "percent": 0.00062785,
   "threshold": 0.89232635,
   "Odds": 1592.73
 },
 {
   "Cause": "surgery or medical care",
   "Deaths": 1626,
   "Color": "#2B4888",
   "percent": 0.00061909,
   "threshold": 0.89294545,
   "Odds": 1615.26
 },
 {
   "Cause": "assault by unspecified means",
   "Deaths": 1585,
   "Color": "#A00704",
   "percent": 0.00060348,
   "threshold": 0.89354893,
   "Odds": 1657.05
 },
 {
   "Cause": "pharynx cancer",
   "Deaths": 1569,
   "Color": "#6abae0",
   "percent": 0.00059739,
   "threshold": 0.89414632,
   "Odds": 1673.94
 },
 {
   "Cause": "sudden infant death syndrome",
   "Deaths": 1546,
   "Color": "#BB73E7",
   "percent": 0.00058863,
   "threshold": 0.89473496,
   "Odds": 1698.85
 },
 {
   "Cause": "bronchitis",
   "Deaths": 1536,
   "Color": "#2B4888",
   "percent": 0.00058483,
   "threshold": 0.89531979,
   "Odds": 1709.91
 },
 {
   "Cause": "thyroid disease",
   "Deaths": 1536,
   "Color": "#828282",
   "percent": 0.00058483,
   "threshold": 0.89590461,
   "Odds": 1709.91
 },
 {
   "Cause": "bone infection",
   "Deaths": 1469,
   "Color": "#959277",
   "percent": 0.00055932,
   "threshold": 0.89646393,
   "Odds": 1787.9
 },
 {
   "Cause": "mouth cancer",
   "Deaths": 1411,
   "Color": "#6abae0",
   "percent": 0.00053723,
   "threshold": 0.89700116,
   "Odds": 1861.39
 },
 {
   "Cause": "down's syndrome",
   "Deaths": 1228,
   "Color": "#8F33A3",
   "percent": 0.00046756,
   "threshold": 0.89746872,
   "Odds": 2138.78
 },
 {
   "Cause": "substance abuse (other)",
   "Deaths": 1226,
   "Color": "#A35733",
   "percent": 0.0004668,
   "threshold": 0.89793552,
   "Odds": 2142.27
 },
 {
   "Cause": "clotting disorder",
   "Deaths": 1207,
   "Color": "#c71f1f",
   "percent": 0.00045956,
   "threshold": 0.89839508,
   "Odds": 2175.99
 },
 {
   "Cause": "choking (food)",
   "Deaths": 1169,
   "Color": "#C1256B",
   "percent": 0.00044509,
   "threshold": 0.89884017,
   "Odds": 2246.72
 },
 {
   "Cause": "gallbladder disease",
   "Deaths": 1106,
   "Color": "#828282",
   "percent": 0.00042111,
   "threshold": 0.89926128,
   "Odds": 2374.7
 },
 {
   "Cause": "traffic collision with stationary object",
   "Deaths": 1099,
   "Color": "#474762",
   "percent": 0.00041844,
   "threshold": 0.89967972,
   "Odds": 2389.83
 },
 {
   "Cause": "sleep apnoea",
   "Deaths": 1087,
   "Color": "#2B4888",
   "percent": 0.00041387,
   "threshold": 0.90009359,
   "Odds": 2416.21
 },
 {
   "Cause": "seizure",
   "Deaths": 1080,
   "Color": "#8F33A3",
   "percent": 0.00041121,
   "threshold": 0.90050479,
   "Odds": 2431.87
 },
 {
   "Cause": "huntington's disease",
   "Deaths": 1076,
   "Color": "#8F33A3",
   "percent": 0.00040968,
   "threshold": 0.90091448,
   "Odds": 2440.91
 },
 {
   "Cause": "vulvular cancer",
   "Deaths": 1066,
   "Color": "#6abae0",
   "percent": 0.00040588,
   "threshold": 0.90132035,
   "Odds": 2463.81
 },
 {
   "Cause": "hodgkin's lymphoma",
   "Deaths": 1058,
   "Color": "#6abae0",
   "percent": 0.00040283,
   "threshold": 0.90172318,
   "Odds": 2482.44
 },
 {
   "Cause": "epilepsy",
   "Deaths": 1051,
   "Color": "#8F33A3",
   "percent": 0.00040016,
   "threshold": 0.90212335,
   "Odds": 2498.97
 },
 {
   "Cause": "accident (other)",
   "Deaths": 1049,
   "Color": "#C1256B",
   "percent": 0.0003994,
   "threshold": 0.90252275,
   "Odds": 2503.73
 },
 {
   "Cause": "exposure to excessive natural cold",
   "Deaths": 930,
   "Color": "#0de8b1",
   "percent": 0.00035409,
   "threshold": 0.90287685,
   "Odds": 2824.11
 },
 {
   "Cause": "accidental suffocation in bed",
   "Deaths": 913,
   "Color": "#C1256B",
   "percent": 0.00034762,
   "threshold": 0.90322447,
   "Odds": 2876.69
 },
 {
   "Cause": "tonsil cancer",
   "Deaths": 897,
   "Color": "#6abae0",
   "percent": 0.00034153,
   "threshold": 0.903566,
   "Odds": 2928
 },
 {
   "Cause": "muscular dystrophy",
   "Deaths": 851,
   "Color": "#c71f1f",
   "percent": 0.00032402,
   "threshold": 0.90389001,
   "Odds": 3086.27
 },
 {
   "Cause": "fall involving bed",
   "Deaths": 835,
   "Color": "#d24d57",
   "percent": 0.00031792,
   "threshold": 0.90420794,
   "Odds": 3145.41
 },
 {
   "Cause": "malaise",
   "Deaths": 824,
   "Color": "#3C3C3C",
   "percent": 0.00031374,
   "threshold": 0.90452167,
   "Odds": 3187.4
 },
 {
   "Cause": "gum disease",
   "Deaths": 823,
   "Color": "#d24d57",
   "percent": 0.00031335,
   "threshold": 0.90483503,
   "Odds": 3191.27
 },
 {
   "Cause": "anal cancer",
   "Deaths": 784,
   "Color": "#6abae0",
   "percent": 0.00029851,
   "threshold": 0.90513353,
   "Odds": 3350.02
 },
 {
   "Cause": "struck by thrown, projected, or falling object",
   "Deaths": 742,
   "Color": "#C1256B",
   "percent": 0.00028251,
   "threshold": 0.90541605,
   "Odds": 3539.65
 },
 {
   "Cause": "fall from slipping, tripping, or stumbling",
   "Deaths": 737,
   "Color": "#C1256B",
   "percent": 0.00028061,
   "threshold": 0.90569666,
   "Odds": 3563.66
 },
 {
   "Cause": "appendix cancer",
   "Deaths": 728,
   "Color": "#6abae0",
   "percent": 0.00027718,
   "threshold": 0.90597384,
   "Odds": 3607.72
 },
 {
   "Cause": "drowning in a swimming pool",
   "Deaths": 701,
   "Color": "#33A38F",
   "percent": 0.0002669,
   "threshold": 0.90624074,
   "Odds": 3746.67
 },
 {
   "Cause": "influenza (avian)",
   "Deaths": 677,
   "Color": "#2B4888",
   "percent": 0.00025777,
   "threshold": 0.90649851,
   "Odds": 3879.49
 },
 {
   "Cause": "drowning (other)",
   "Deaths": 572,
   "Color": "#33A38F",
   "percent": 0.00021779,
   "threshold": 0.9067163,
   "Odds": 4591.64
 },
 {
   "Cause": "assault by strangulation",
   "Deaths": 520,
   "Color": "#A00704",
   "percent": 0.00019799,
   "threshold": 0.90691428,
   "Odds": 5050.8
 },
 {
   "Cause": "cyclist accident",
   "Deaths": 504,
   "Color": "#474762",
   "percent": 0.0001919,
   "threshold": 0.90710618,
   "Odds": 5211.15
 },
 {
   "Cause": "fall from building or structure",
   "Deaths": 501,
   "Color": "#C1256B",
   "percent": 0.00019075,
   "threshold": 0.90729693,
   "Odds": 5242.35
 },
 {
   "Cause": "tuberculosis",
   "Deaths": 493,
   "Color": "#828282",
   "percent": 0.00018771,
   "threshold": 0.90748464,
   "Odds": 5327.42
 },
 {
   "Cause": "sickle-cell anemia",
   "Deaths": 484,
   "Color": "#c71f1f",
   "percent": 0.00018428,
   "threshold": 0.90766892,
   "Odds": 5426.48
 },
 {
   "Cause": "fall on and from ladder",
   "Deaths": 475,
   "Color": "#C1256B",
   "percent": 0.00018085,
   "threshold": 0.90784978,
   "Odds": 5529.3
 },
 {
   "Cause": "drowning in a bathtub",
   "Deaths": 438,
   "Color": "#33A38F",
   "percent": 0.00016677,
   "threshold": 0.90801655,
   "Odds": 5996.39
 },
 {
   "Cause": "creutzfeldt-jakob disease",
   "Deaths": 402,
   "Color": "#828282",
   "percent": 0.00015306,
   "threshold": 0.90816961,
   "Odds": 6533.38
 },
 {
   "Cause": "fall involving chair",
   "Deaths": 327,
   "Color": "#d24d57",
   "percent": 0.0001245,
   "threshold": 0.90829411,
   "Odds": 8031.86
 },
 {
   "Cause": "exposure to electric current",
   "Deaths": 257,
   "Color": "#7ED600",
   "percent": 0.00009785,
   "threshold": 0.90839196,
   "Odds": 10219.53
 },
 {
   "Cause": "exposure to excessive natural heat",
   "Deaths": 244,
   "Color": "#E6710C",
   "percent": 0.0000929,
   "threshold": 0.90848486,
   "Odds": 10764.01
 },
 {
   "Cause": "agricultural machinery",
   "Deaths": 191,
   "Color": "#b8860b",
   "percent": 0.00007272,
   "threshold": 0.90855759,
   "Odds": 13750.88
 },
 {
   "Cause": "blood loss",
   "Deaths": 162,
   "Color": "#c71f1f",
   "percent": 0.00006168,
   "threshold": 0.90861927,
   "Odds": 16212.46
 },
 {
   "Cause": "fall involving ice and snow",
   "Deaths": 139,
   "Color": "#4b77be",
   "percent": 0.00005292,
   "threshold": 0.90867219,
   "Odds": 18895.09
 },
 {
   "Cause": "legionnaires' disease",
   "Deaths": 132,
   "Color": "#8F33A3",
   "percent": 0.00005026,
   "threshold": 0.90872245,
   "Odds": 19897.11
 },
 {
   "Cause": "west nile fever",
   "Deaths": 104,
   "Color": "#828282",
   "percent": 0.0000396,
   "threshold": 0.90876205,
   "Odds": 25254.02
 },
 {
   "Cause": "avalanche, landslide, and other earth movements",
   "Deaths": 85,
   "Color": "#A35733",
   "percent": 0.00003236,
   "threshold": 0.90879441,
   "Odds": 30899.04
 },
 {
   "Cause": "assault by smoke, fire, and flames",
   "Deaths": 83,
   "Color": "#E6710C",
   "percent": 0.0000316,
   "threshold": 0.90882601,
   "Odds": 31643.59
 },
 {
   "Cause": "bitten or struck by mammal",
   "Deaths": 83,
   "Color": "#A35733",
   "percent": 0.0000316,
   "threshold": 0.90885762,
   "Odds": 31643.59
 },
 {
   "Cause": "fall from cliff",
   "Deaths": 82,
   "Color": "#C1256B",
   "percent": 0.00003122,
   "threshold": 0.90888884,
   "Odds": 32029.49
 },
 {
   "Cause": "assault by drugs, medicaments and biological substances",
   "Deaths": 81,
   "Color": "#A00704",
   "percent": 0.00003084,
   "threshold": 0.90891968,
   "Odds": 32424.91
 },
 {
   "Cause": "fall from tree",
   "Deaths": 74,
   "Color": "#6B8E23",
   "percent": 0.00002818,
   "threshold": 0.90894785,
   "Odds": 35492.14
 },
 {
   "Cause": "fall from animal or animal-drawn vehicle",
   "Deaths": 73,
   "Color": "#C1256B",
   "percent": 0.00002779,
   "threshold": 0.90897565,
   "Odds": 35978.33
 },
 {
   "Cause": "powered lawnmower",
   "Deaths": 72,
   "Color": "#7ED600",
   "percent": 0.00002741,
   "threshold": 0.90900306,
   "Odds": 36478.03
 },
 {
   "Cause": "assault by bodily force",
   "Deaths": 66,
   "Color": "#A00704",
   "percent": 0.00002513,
   "threshold": 0.90902819,
   "Odds": 39794.21
 },
 {
   "Cause": "contact with hornets, wasps, and bees",
   "Deaths": 64,
   "Color": "#b8860b",
   "percent": 0.00002437,
   "threshold": 0.90905256,
   "Odds": 41037.78
 },
 {
   "Cause": "victim of cataclysmic storm",
   "Deaths": 61,
   "Color": "#25757E",
   "percent": 0.00002323,
   "threshold": 0.90907578,
   "Odds": 43056.03
 },
 {
   "Cause": "assault by crashing of motor vehicle",
   "Deaths": 56,
   "Color": "#A00704",
   "percent": 0.00002132,
   "threshold": 0.9090971,
   "Odds": 46900.32
 },
 {
   "Cause": "fall involving ice-skates, skis, roller-skates or skateboards",
   "Deaths": 52,
   "Color": "#4b77be",
   "percent": 0.0000198,
   "threshold": 0.9091169,
   "Odds": 50508.04
 },
 {
   "Cause": "assault by blunt object",
   "Deaths": 45,
   "Color": "#A00704",
   "percent": 0.00001713,
   "threshold": 0.90913404,
   "Odds": 58364.84
 },
 {
   "Cause": "salmonella",
   "Deaths": 45,
   "Color": "#2B4888",
   "percent": 0.00001713,
   "threshold": 0.90915117,
   "Odds": 58364.84
 },
 {
   "Cause": "helicopter accident",
   "Deaths": 41,
   "Color": "#4b77be",
   "percent": 0.00001561,
   "threshold": 0.90916678,
   "Odds": 64058.98
 },
 {
   "Cause": "syphilis",
   "Deaths": 38,
   "Color": "#2B4888",
   "percent": 0.00001447,
   "threshold": 0.90918125,
   "Odds": 69116.26
 },
 {
   "Cause": "legal execution",
   "Deaths": 34,
   "Color": "#0F2367",
   "percent": 0.00001295,
   "threshold": 0.9091942,
   "Odds": 77247.59
 },
 {
   "Cause": "fall into water",
   "Deaths": 30,
   "Color": "#33A38F",
   "percent": 0.00001142,
   "threshold": 0.90920562,
   "Odds": 87547.27
 },
 {
   "Cause": "lyme disease",
   "Deaths": 15,
   "Color": "#7ED600",
   "percent": 0.00000571,
   "threshold": 0.90921133,
   "Odds": 175094.53
 },
 {
   "Cause": "toxic shock syndrome",
   "Deaths": 12,
   "Color": "#828282",
   "percent": 0.00000457,
   "threshold": 0.9092159,
   "Odds": 218868.17
 },
 {
   "Cause": "terrorist attack by jihadist citizens",
   "Deaths": 7,
   "Color": "#000",
   "percent": 0.00000267,
   "threshold": 0.90921856,
   "Odds": 375202.57,
   "isTerror": true
 },
 {
   "Cause": "right-wing terrorism",
   "Deaths": 5,
   "Color": "#000",
   "percent": 0.0000019,
   "threshold": 0.90922047,
   "Odds": 525283.6
 },
 {
   "Cause": "terrorist attack by jihadist immigrants",
   "Deaths": 2,
   "Color": "#000",
   "percent": 7.6e-7,
   "threshold": 0.90922123,
   "Odds": 1313209,
   "isTerror": true
 },
 {
   "Cause": "Illness (other)",
   "Deaths": null,
   "Color": "#828282",
   "percent": 0.09077877,
   "threshold": 1,
   "Odds": 11.02
 }
];
var button = document.getElementById('die');
var tweet = document.getElementById('share');

function die() {
   var index = Math.random();

   deathCount += 1;
   localStorage.setItem("cause_of_death_count", deathCount)

   var death;

   for (var i = 0; i < deaths.length; i++) {
      if (index < deaths[i].threshold) {
         death = deaths[i];
         break;
      }
   }

   if (death.isTerror) {
      terrorismCount += 1;
      localStorage.setItem("cause_of_death_terrorism_count", terrorCount);
   }

   var tweetString = "https://twitter.com/intent/tweet?text=I've%20died%20"
      + deathCount 
      + "%20times!&url=http%3A//yourcauseofdeath.com";

   tweet.setAttribute('href', tweetString);


   document.getElementById('death__count').innerText = deathCount;
   if (deathCount > 1) {
      document.getElementById('death__times').innerText = "times";
   }


   document.getElementById('terror__count').innerText = terrorismCount;
   if (terrorismCount == 1) {
      document.getElementById('terror__times').innerText = "time";
   } else {
      document.getElementById('terror__times').innerText = "times";
   }


   
   document.getElementById('cause__label').innerText = death.Cause;
   document.getElementById('odds__factor').innerText = death.Odds;
   document.getElementsByTagName('body')[0].setAttribute('style', "background-color: " + death.Color + ";");
}


button.onclick = die;

die();

