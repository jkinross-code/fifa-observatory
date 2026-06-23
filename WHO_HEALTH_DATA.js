// WHO Global Health Observatory + World Bank data
// Sources:
//   NCD_BMI_30A: WHO GHO - Obesity prevalence (BMI ≥30), age-standardised, both sexes (%)
//   SA_0000001688: WHO GHO - Total alcohol per capita consumption (litres pure alcohol, both sexes)
//   WHS2_131: WHO GHO - NCD mortality rate per 100k, age-standardised, both sexes
//   WHOSIS_000001: WHO GHO - Life expectancy at birth, both sexes (years)
//   NCD_PAC: WHO GHO - Physical inactivity in adults (%)
//   NCD_DIABETES_PREVALENCE_AGESTD: WHO GHO - Diabetes prevalence, age-standardised (%)
//   NY.GDP.PCAP.CD: World Bank - GDP per capita, current USD
// Year keys = baseline year for each World Cup (year prior to tournament)
// SCG (Serbia & Montenegro): SRB data used as proxy (successor state)
// SAU alcohol: null (alcohol prohibited)
// PRK GDP: null (World Bank no data)
// Fetched: 2026-06-22

const WHO_HEALTH_DATA = {
  "ALB": {
    2005: { obesity: 14.6702, alcohol_pc: 5.2988, ncd_mort: 587.41, life_exp: 74.2068, inactivity: 21.0385, diabetes: 6.5959, gdp_pc: 2742 },
    2009: { obesity: 16.3639, alcohol_pc: 5.8272, ncd_mort: 527.15, life_exp: 75.5577, inactivity: 21.9211, diabetes: 7.297, gdp_pc: 4214 },
    2013: { obesity: 18.2861, alcohol_pc: 4.6502, ncd_mort: 481.02, life_exp: 77.7741, inactivity: 23.0088, diabetes: 10.8238, gdp_pc: 4543 },
    2017: { obesity: 20.3171, alcohol_pc: 4.6389, ncd_mort: 552.74, life_exp: 77.9104, inactivity: 24.3899, diabetes: 9.1491, gdp_pc: 5006 },
    2021: { obesity: 22.4026, alcohol_pc: 4.2541, ncd_mort: 415.69, life_exp: 76.3909, inactivity: 26.1095, diabetes: 13.622, gdp_pc: 7242 }
  },
  "ARG": {
    2005: { obesity: 21.3493, alcohol_pc: 5.3163, ncd_mort: 488.51, life_exp: 75.2553, inactivity: 35.3575, diabetes: 8.3931, gdp_pc: 5068 },
    2009: { obesity: 24.0153, alcohol_pc: 6.3608, ncd_mort: 457.18, life_exp: 75.8519, inactivity: 36.1412, diabetes: 11.6879, gdp_pc: 8150 },
    2013: { obesity: 27.1188, alcohol_pc: 7.2304, ncd_mort: 443.15, life_exp: 76.2089, inactivity: 37.0921, diabetes: 12.336, gdp_pc: 12964 },
    2017: { obesity: 30.6291, alcohol_pc: 7.0969, ncd_mort: 426.31, life_exp: 76.6435, inactivity: 38.2396, diabetes: 12.8934, gdp_pc: 14533 },
    2021: { obesity: 34.3171, alcohol_pc: 7.4337, ncd_mort: 397.0, life_exp: 74.569, inactivity: 39.4958, diabetes: 10.4203, gdp_pc: 10738 }
  },
  "AUS": {
    2005: { obesity: 22.5457, alcohol_pc: 11.2095, ncd_mort: 348.73, life_exp: 80.8413, inactivity: 28.1778, diabetes: 4.9187, gdp_pc: 34535 },
    2009: { obesity: 24.5577, alcohol_pc: 11.2597, ncd_mort: 320.66, life_exp: 81.7526, inactivity: 28.0344, diabetes: 5.527, gdp_pc: 42955 },
    2013: { obesity: 26.1797, alcohol_pc: 10.4455, ncd_mort: 297.73, life_exp: 82.4634, inactivity: 27.8305, diabetes: 6.0859, gdp_pc: 68477 },
    2017: { obesity: 27.8471, alcohol_pc: 10.7077, ncd_mort: 287.11, life_exp: 82.6797, inactivity: 27.7732, diabetes: 6.8053, gdp_pc: 54118 },
    2021: { obesity: 29.4119, alcohol_pc: 11.2162, ncd_mort: 275.8, life_exp: 83.1018, inactivity: 27.9, diabetes: 10.1245, gdp_pc: 60759 }
  },
  "BEL": {
    2005: { obesity: 16.1951, alcohol_pc: 11.9688, ncd_mort: 404.59, life_exp: 78.8524, inactivity: 45.0515, diabetes: 3.8935, gdp_pc: 36810 },
    2009: { obesity: 17.2556, alcohol_pc: 11.3554, ncd_mort: 368.3, life_exp: 79.8267, inactivity: 41.145, diabetes: 4.2568, gdp_pc: 44923 },
    2013: { obesity: 17.9982, alcohol_pc: 12.3749, ncd_mort: 352.69, life_exp: 80.3247, inactivity: 37.0434, diabetes: 6.2874, gdp_pc: 46965 },
    2017: { obesity: 18.8482, alcohol_pc: 10.3408, ncd_mort: 324.71, life_exp: 81.1513, inactivity: 33.2079, diabetes: 5.4566, gdp_pc: 44035 },
    2021: { obesity: 19.9132, alcohol_pc: 9.4739, ncd_mort: 283.81, life_exp: 81.506, inactivity: 29.6615, diabetes: 8.3562, gdp_pc: 51658 }
  },
  "BIH": {
    2005: { obesity: 15.527, alcohol_pc: 5.3997, ncd_mort: 515.16, life_exp: 76.5488, inactivity: 16.9901, diabetes: 10.865, gdp_pc: 2740 },
    2009: { obesity: 16.7378, alcohol_pc: 5.8149, ncd_mort: 516.02, life_exp: 76.7826, inactivity: 18.3101, diabetes: 9.0501, gdp_pc: 4540 },
    2013: { obesity: 17.9056, alcohol_pc: 5.8364, ncd_mort: 506.39, life_exp: 77.2119, inactivity: 19.6958, diabetes: 13.4516, gdp_pc: 5035 },
    2017: { obesity: 19.0, alcohol_pc: 6.4209, ncd_mort: 510.21, life_exp: 77.2491, inactivity: 21.3651, diabetes: 14.9335, gdp_pc: 5345 },
    2021: { obesity: 20.0588, alcohol_pc: 6.2139, ncd_mort: 510.28, life_exp: 74.8494, inactivity: 23.3392, diabetes: 12.7856, gdp_pc: 7295 }
  },
  "BOL": {
    2005: { obesity: 16.2255, alcohol_pc: 3.6004, ncd_mort: 572.63, life_exp: 68.7316, inactivity: 20.8357, diabetes: 9.9909, gdp_pc: 1020 },
    2009: { obesity: 18.8031, alcohol_pc: 4.4524, ncd_mort: 557.17, life_exp: 70.1371, inactivity: 20.6114, diabetes: 14.3199, gdp_pc: 1731 },
    2013: { obesity: 21.6386, alcohol_pc: 4.1844, ncd_mort: 541.25, life_exp: 71.3381, inactivity: 20.6036, diabetes: 12.8815, gdp_pc: 2870 },
    2017: { obesity: 24.5795, alcohol_pc: 4.0588, ncd_mort: 531.78, life_exp: 72.4478, inactivity: 20.8209, diabetes: 14.6355, gdp_pc: 4048 },
    2021: { obesity: 27.5118, alcohol_pc: 3.7207, ncd_mort: 505.29, life_exp: 65.4106, inactivity: 21.189, diabetes: 16.7017, gdp_pc: 4011 }
  },
  "BRA": {
    2005: { obesity: 14.6311, alcohol_pc: 9.768, ncd_mort: 538.54, life_exp: 73.1479, inactivity: 32.2819, diabetes: 10.5959, gdp_pc: 4828 },
    2009: { obesity: 16.9506, alcohol_pc: 10.238, ncd_mort: 512.83, life_exp: 73.8424, inactivity: 33.8998, diabetes: 8.613, gdp_pc: 8679 },
    2013: { obesity: 19.9624, alcohol_pc: 9.7899, ncd_mort: 488.39, life_exp: 74.4217, inactivity: 35.8772, diabetes: 12.8428, gdp_pc: 12459 },
    2017: { obesity: 23.4693, alcohol_pc: 9.7239, ncd_mort: 466.94, life_exp: 74.9891, inactivity: 38.0583, diabetes: 14.4959, gdp_pc: 10081 },
    2021: { obesity: 27.1902, alcohol_pc: 9.7375, ncd_mort: 447.88, life_exp: 72.3884, inactivity: 40.3318, diabetes: 16.3673, gdp_pc: 7973 }
  },
  "CAN": {
    2005: { obesity: 22.6271, alcohol_pc: 9.9511, ncd_mort: 372.46, life_exp: 79.9509, inactivity: 30.0819, diabetes: 8.4347, gdp_pc: 36384 },
    2009: { obesity: 24.0375, alcohol_pc: 10.2029, ncd_mort: 340.33, life_exp: 80.8826, inactivity: 32.4817, diabetes: 6.248, gdp_pc: 40875 },
    2013: { obesity: 24.8297, alcohol_pc: 9.9507, ncd_mort: 318.14, life_exp: 81.5583, inactivity: 34.794, diabetes: 6.2177, gdp_pc: 52638 },
    2017: { obesity: 25.3579, alcohol_pc: 9.9443, ncd_mort: 316.9, life_exp: 81.7095, inactivity: 37.1972, diabetes: 8.6125, gdp_pc: 45130 },
    2021: { obesity: 25.7054, alcohol_pc: 9.9531, ncd_mort: 309.8, life_exp: 81.5828, inactivity: 39.6941, diabetes: 6.7188, gdp_pc: 52887 }
  },
  "CHE": {
    2005: { obesity: 9.3242, alcohol_pc: 10.8151, ncd_mort: 340.19, life_exp: 81.1149, inactivity: 28.5696, diabetes: 3.7524, gdp_pc: 56243 },
    2009: { obesity: 9.9008, alcohol_pc: 10.5787, ncd_mort: 315.48, life_exp: 81.8904, inactivity: 26.7067, diabetes: 3.7972, gdp_pc: 71568 },
    2013: { obesity: 10.1872, alcohol_pc: 10.0752, ncd_mort: 299.72, life_exp: 82.4755, inactivity: 24.84, diabetes: 5.1371, gdp_pc: 87304 },
    2017: { obesity: 10.4959, alcohol_pc: 9.4852, ncd_mort: 278.99, life_exp: 83.1399, inactivity: 23.3114, diabetes: 3.9847, gdp_pc: 82254 },
    2021: { obesity: 10.9042, alcohol_pc: 9.2765, ncd_mort: 250.96, life_exp: 83.328, inactivity: 22.1341, diabetes: 4.2164, gdp_pc: 93665 }
  },
  "CHL": {
    2005: { obesity: 24.2089, alcohol_pc: 6.6462, ncd_mort: 418.71, life_exp: 78.0049, inactivity: 26.1677, diabetes: 9.047, gdp_pc: 7480 },
    2009: { obesity: 27.1382, alcohol_pc: 7.2012, ncd_mort: 377.89, life_exp: 79.0049, inactivity: 28.9347, diabetes: 10.07, gdp_pc: 10099 },
    2013: { obesity: 30.4403, alcohol_pc: 7.1388, ncd_mort: 355.67, life_exp: 79.8255, inactivity: 32.0192, diabetes: 11.2147, gdp_pc: 15684 },
    2017: { obesity: 34.0348, alcohol_pc: 7.1444, ncd_mort: 334.65, life_exp: 80.6588, inactivity: 35.3926, diabetes: 12.3667, gdp_pc: 14880 },
    2021: { obesity: 37.6853, alcohol_pc: 7.1209, ncd_mort: 330.15, life_exp: 79.024, inactivity: 38.8727, diabetes: 17.6024, gdp_pc: 16207 }
  },
  "CMR": {
    2005: { obesity: 9.2345, alcohol_pc: 11.1959, ncd_mort: 705.67, life_exp: 54.127, inactivity: 20.7756, diabetes: 8.1333, gdp_pc: 1143 },
    2009: { obesity: 10.83, alcohol_pc: 11.9969, ncd_mort: 706.82, life_exp: 56.2682, inactivity: 19.6837, diabetes: 7.9614, gdp_pc: 1461 },
    2013: { obesity: 11.9778, alcohol_pc: 12.8907, ncd_mort: 713.91, life_exp: 58.1602, inactivity: 18.4682, diabetes: 12.4979, gdp_pc: 1576 },
    2017: { obesity: 13.2313, alcohol_pc: 11.7266, ncd_mort: 682.72, life_exp: 60.6426, inactivity: 17.4837, diabetes: 13.202, gdp_pc: 1496 },
    2021: { obesity: 14.7638, alcohol_pc: 12.5907, ncd_mort: 638.81, life_exp: 61.7693, inactivity: 16.834, diabetes: 16.6636, gdp_pc: 1672 }
  },
  "COL": {
    2005: { obesity: 14.1842, alcohol_pc: 4.6995, ncd_mort: 480.21, life_exp: 74.44, inactivity: 26.6333, diabetes: 8.3515, gdp_pc: 3456 },
    2009: { obesity: 16.3965, alcohol_pc: 4.5544, ncd_mort: 423.92, life_exp: 75.7593, inactivity: 28.349, diabetes: 12.3652, gdp_pc: 5251 },
    2013: { obesity: 18.7915, alcohol_pc: 4.4258, ncd_mort: 388.88, life_exp: 77.2279, inactivity: 30.2549, diabetes: 10.7874, gdp_pc: 8279 },
    2017: { obesity: 21.0783, alcohol_pc: 4.123, ncd_mort: 386.32, life_exp: 77.7944, inactivity: 32.1728, diabetes: 11.4803, gdp_pc: 6480 },
    2021: { obesity: 23.2211, alcohol_pc: 4.3177, ncd_mort: 412.35, life_exp: 74.533, inactivity: 34.0326, diabetes: 12.0835, gdp_pc: 6223 }
  },
  "CRI": {
    2005: { obesity: 20.5212, alcohol_pc: 4.0992, ncd_mort: 346.57, life_exp: 79.722, inactivity: 42.8771, diabetes: 14.4337, gdp_pc: 4703 },
    2009: { obesity: 23.0654, alcohol_pc: 4.0902, ncd_mort: 321.84, life_exp: 80.6096, inactivity: 44.6216, diabetes: 14.013, gdp_pc: 6833 },
    2013: { obesity: 25.705, alcohol_pc: 3.5645, ncd_mort: 323.93, life_exp: 80.5979, inactivity: 46.444, diabetes: 17.2321, gdp_pc: 10803 },
    2017: { obesity: 28.2765, alcohol_pc: 3.7135, ncd_mort: 326.79, life_exp: 80.1951, inactivity: 48.268, diabetes: 24.4498, gdp_pc: 12317 },
    2021: { obesity: 30.7674, alcohol_pc: 3.8558, ncd_mort: 305.92, life_exp: 78.6305, inactivity: 50.0836, diabetes: 22.4977, gdp_pc: 12838 }
  },
  "CZE": {
    2005: { obesity: 19.9094, alcohol_pc: 14.5716, ncd_mort: 563.45, life_exp: 75.9987, inactivity: 25.359, diabetes: 5.8948, gdp_pc: 13442 },
    2009: { obesity: 21.0291, alcohol_pc: 14.2767, ncd_mort: 496.91, life_exp: 77.2752, inactivity: 25.474, diabetes: 8.5305, gdp_pc: 19817 },
    2013: { obesity: 22.4027, alcohol_pc: 13.7851, ncd_mort: 465.23, life_exp: 78.1114, inactivity: 25.8137, diabetes: 6.657, gdp_pc: 20260 },
    2017: { obesity: 23.8396, alcohol_pc: 13.9233, ncd_mort: 428.63, life_exp: 78.8547, inactivity: 26.4055, diabetes: 7.037, gdp_pc: 20913 },
    2021: { obesity: 25.2103, alcohol_pc: 13.7001, ncd_mort: 418.97, life_exp: 77.0773, inactivity: 27.0003, diabetes: 7.5597, gdp_pc: 27696 }
  },
  "DEU": {
    2005: { obesity: 19.6856, alcohol_pc: 12.7956, ncd_mort: 420.12, life_exp: 79.2082, inactivity: 20.9973, diabetes: 6.8162, gdp_pc: 35084 },
    2009: { obesity: 20.4985, alcohol_pc: 12.0088, ncd_mort: 390.02, life_exp: 79.9944, inactivity: 19.6352, diabetes: 6.8718, gdp_pc: 42472 },
    2013: { obesity: 20.5985, alcohol_pc: 12.1606, ncd_mort: 381.07, life_exp: 80.2887, inactivity: 18.0819, diabetes: 9.0259, gdp_pc: 47207 },
    2017: { obesity: 20.5634, alcohol_pc: 11.8214, ncd_mort: 363.61, life_exp: 80.7512, inactivity: 16.5349, diabetes: 6.5719, gdp_pc: 45554 },
    2021: { obesity: 20.5683, alcohol_pc: 11.1034, ncd_mort: 349.82, life_exp: 80.4914, inactivity: 15.325, diabetes: 6.5673, gdp_pc: 52349 }
  },
  "DNK": {
    2005: { obesity: 11.8295, alcohol_pc: 12.0466, ncd_mort: 461.18, life_exp: 78.1313, inactivity: 25.1301, diabetes: 3.9033, gdp_pc: 48926 },
    2009: { obesity: 12.4702, alcohol_pc: 11.1284, ncd_mort: 432.95, life_exp: 78.8776, inactivity: 22.2763, diabetes: 3.7496, gdp_pc: 58413 },
    2013: { obesity: 12.7714, alcohol_pc: 10.2815, ncd_mort: 383.7, life_exp: 80.1646, inactivity: 19.4325, diabetes: 3.4821, gdp_pc: 61378 },
    2017: { obesity: 13.1897, alcohol_pc: 10.085, ncd_mort: 355.54, life_exp: 80.941, inactivity: 17.0407, diabetes: 2.46, gdp_pc: 57522 },
    2021: { obesity: 13.7886, alcohol_pc: 10.2644, ncd_mort: 340.46, life_exp: 81.184, inactivity: 14.9539, diabetes: 3.0553, gdp_pc: 69341 }
  },
  "DZA": {
    2005: { obesity: 15.5795, alcohol_pc: 0.4651, ncd_mort: 567.46, life_exp: 74.0785, inactivity: 23.059, diabetes: 17.5044, gdp_pc: 3233 },
    2009: { obesity: 17.3663, alcohol_pc: 0.416, ncd_mort: 558.81, life_exp: 75.0603, inactivity: 23.9324, diabetes: 18.9178, gdp_pc: 4235 },
    2013: { obesity: 19.2305, alcohol_pc: 0.4957, ncd_mort: 550.44, life_exp: 75.7906, inactivity: 25.0751, diabetes: 15.9595, gdp_pc: 5980 },
    2017: { obesity: 21.0523, alcohol_pc: 0.5017, ncd_mort: 526.69, life_exp: 76.4043, inactivity: 26.4893, diabetes: 17.3893, gdp_pc: 4555 },
    2021: { obesity: 22.5072, alcohol_pc: 0.4251, ncd_mort: 517.45, life_exp: 75.9777, inactivity: 28.0318, diabetes: 23.5122, gdp_pc: 4161 }
  },
  "ECU": {
    2005: { obesity: 16.2082, alcohol_pc: 4.1774, ncd_mort: 477.57, life_exp: 73.7577, inactivity: 20.618, diabetes: 7.3659, gdp_pc: 2909 },
    2009: { obesity: 18.5073, alcohol_pc: 4.3514, ncd_mort: 438.79, life_exp: 74.9336, inactivity: 20.7426, diabetes: 8.2931, gdp_pc: 4053 },
    2013: { obesity: 21.1232, alcohol_pc: 4.3511, ncd_mort: 413.68, life_exp: 76.4042, inactivity: 21.1023, diabetes: 9.4164, gdp_pc: 6109 },
    2017: { obesity: 23.8708, alcohol_pc: 3.4878, ncd_mort: 403.59, life_exp: 77.3125, inactivity: 21.6317, diabetes: 10.7051, gdp_pc: 6233 },
    2021: { obesity: 26.7094, alcohol_pc: 2.8832, ncd_mort: 437.71, life_exp: 73.958, inactivity: 22.3121, diabetes: 12.2299, gdp_pc: 6061 }
  },
  "EGY": {
    2005: { obesity: 32.1417, alcohol_pc: 0.1212, ncd_mort: 803.63, life_exp: 69.5227, inactivity: 29.5092, diabetes: 15.6975, gdp_pc: 1106 },
    2009: { obesity: 35.2735, alcohol_pc: 0.1475, ncd_mort: 819.98, life_exp: 69.7893, inactivity: 30.0244, diabetes: 23.275, gdp_pc: 2162 },
    2013: { obesity: 38.2504, alcohol_pc: 0.1505, ncd_mort: 798.97, life_exp: 70.4715, inactivity: 30.62, diabetes: 26.8079, gdp_pc: 3026 },
    2017: { obesity: 40.8305, alcohol_pc: 0.11, ncd_mort: 797.14, life_exp: 71.2514, inactivity: 31.4027, diabetes: 30.2301, gdp_pc: 2395 },
    2021: { obesity: 42.6775, alcohol_pc: 0.0886, ncd_mort: 766.79, life_exp: 69.1082, inactivity: 32.1651, diabetes: 27.1099, gdp_pc: 3827 }
  },
  "ESP": {
    2005: { obesity: 20.3532, alcohol_pc: 12.9793, ncd_mort: 379.95, life_exp: 80.0098, inactivity: 39.3233, diabetes: 7.7372, gdp_pc: 26451 },
    2009: { obesity: 20.8035, alcohol_pc: 11.7812, ncd_mort: 340.7, life_exp: 81.3292, inactivity: 36.1927, diabetes: 9.3246, gdp_pc: 32280 },
    2013: { obesity: 19.8648, alcohol_pc: 11.0888, ncd_mort: 307.01, life_exp: 82.4788, inactivity: 32.8987, diabetes: 7.8104, gdp_pc: 29229 },
    2017: { obesity: 18.2597, alcohol_pc: 11.5568, ncd_mort: 298.71, life_exp: 82.6758, inactivity: 29.5251, diabetes: 4.6509, gdp_pc: 28381 },
    2021: { obesity: 16.5185, alcohol_pc: 11.168, ncd_mort: 274.2, life_exp: 82.6627, inactivity: 26.092, diabetes: 5.1981, gdp_pc: 30799 }
  },
  "FRA": {
    2005: { obesity: 12.4876, alcohol_pc: 13.874, ncd_mort: 361.68, life_exp: 80.0046, inactivity: 38.6062, diabetes: 4.8802, gdp_pc: 34696 },
    2009: { obesity: 12.8937, alcohol_pc: 13.321, ncd_mort: 328.45, life_exp: 81.0406, inactivity: 36.0752, diabetes: 4.5742, gdp_pc: 41728 },
    2013: { obesity: 12.7334, alcohol_pc: 12.8256, ncd_mort: 308.42, life_exp: 81.82, inactivity: 33.2197, diabetes: 4.0003, gdp_pc: 42669 },
    2017: { obesity: 12.2776, alcohol_pc: 12.5482, ncd_mort: 296.01, life_exp: 82.1709, inactivity: 30.3973, diabetes: 3.3595, gdp_pc: 38687 },
    2021: { obesity: 11.6474, alcohol_pc: 11.4333, ncd_mort: 281.51, life_exp: 81.9227, inactivity: 27.745, diabetes: 3.784, gdp_pc: 43725 }
  },
  "GBR": {
    2005: { obesity: 22.2799, alcohol_pc: 12.3436, ncd_mort: 418.33, life_exp: 78.9121, inactivity: 36.0677, diabetes: 6.9317, gdp_pc: 42240 },
    2009: { obesity: 24.0858, alcohol_pc: 11.3953, ncd_mort: 375.93, life_exp: 80.0318, inactivity: 32.5695, diabetes: 7.8942, gdp_pc: 39009 },
    2013: { obesity: 25.1595, alcohol_pc: 10.6858, ncd_mort: 359.86, life_exp: 80.6857, inactivity: 28.9443, diabetes: 8.7261, gdp_pc: 43607 },
    2017: { obesity: 26.0499, alcohol_pc: 10.9652, ncd_mort: 349.17, life_exp: 80.9241, inactivity: 25.6114, diabetes: 9.6839, gdp_pc: 40917 },
    2021: { obesity: 26.8099, alcohol_pc: 11.0643, ncd_mort: 342.35, life_exp: 80.1006, inactivity: 22.6066, diabetes: 8.4744, gdp_pc: 47691 }
  },
  "GHA": {
    2005: { obesity: 7.976, alcohol_pc: 1.9401, ncd_mort: 652.1, life_exp: 60.0663, inactivity: 16.0223, diabetes: 7.4076, gdp_pc: 479 },
    2009: { obesity: 9.3148, alcohol_pc: 2.7358, ncd_mort: 670.61, life_exp: 61.528, inactivity: 16.6794, diabetes: 8.0098, gdp_pc: 1048 },
    2013: { obesity: 10.3547, alcohol_pc: 3.3511, ncd_mort: 652.74, life_exp: 63.5867, inactivity: 17.1973, diabetes: 6.9858, gdp_pc: 2295 },
    2017: { obesity: 11.6229, alcohol_pc: 3.0089, ncd_mort: 632.31, life_exp: 65.0859, inactivity: 17.9075, diabetes: 8.2336, gdp_pc: 2012 },
    2021: { obesity: 13.2239, alcohol_pc: 2.7508, ncd_mort: 606.38, life_exp: 66.1018, inactivity: 18.9318, diabetes: 9.9053, gdp_pc: 2445 }
  },
  "GRC": {
    2005: { obesity: 20.5981, alcohol_pc: 9.3154, ncd_mort: 409.03, life_exp: 79.4015, inactivity: 33.0084, diabetes: 9.5648, gdp_pc: 22054 },
    2009: { obesity: 22.9107, alcohol_pc: 9.1354, ncd_mort: 382.51, life_exp: 80.0225, inactivity: 34.9054, diabetes: 7.2144, gdp_pc: 29425 },
    2013: { obesity: 24.5637, alcohol_pc: 8.5203, ncd_mort: 358.63, life_exp: 80.7796, inactivity: 36.4866, diabetes: 7.1721, gdp_pc: 21573 },
    2017: { obesity: 25.786, alcohol_pc: 8.5033, ncd_mort: 352.82, life_exp: 80.694, inactivity: 37.9821, diabetes: 7.1333, gdp_pc: 18632 },
    2021: { obesity: 26.7387, alcohol_pc: 7.9133, ncd_mort: 347.12, life_exp: 79.5979, inactivity: 39.4251, diabetes: 7.2037, gdp_pc: 20655 }
  },
  "HND": {
    2005: { obesity: 17.731, alcohol_pc: 3.5637, ncd_mort: 566.58, life_exp: 70.5444, inactivity: 27.3918, diabetes: 8.483, gdp_pc: 1305 },
    2009: { obesity: 20.605, alcohol_pc: 3.3334, ncd_mort: 561.28, life_exp: 70.9945, inactivity: 28.9625, diabetes: 12.763, gdp_pc: 1781 },
    2013: { obesity: 23.6295, alcohol_pc: 3.1525, ncd_mort: 673.1, life_exp: 69.3529, inactivity: 30.7119, diabetes: 11.1972, gdp_pc: 2081 },
    2017: { obesity: 26.6265, alcohol_pc: 3.2282, ncd_mort: 639.43, life_exp: 71.2712, inactivity: 32.5588, diabetes: 12.1538, gdp_pc: 2413 },
    2021: { obesity: 29.5361, alcohol_pc: 3.4928, ncd_mort: 556.02, life_exp: 68.9631, inactivity: 34.481, diabetes: 16.5393, gdp_pc: 2735 }
  },
  "HRV": {
    2005: { obesity: 18.4033, alcohol_pc: 9.9585, ncd_mort: 572.9, life_exp: 75.4761, inactivity: 17.3441, diabetes: 5.8385, gdp_pc: 10444 },
    2009: { obesity: 21.1101, alcohol_pc: 9.6423, ncd_mort: 540.64, life_exp: 76.4456, inactivity: 20.4726, diabetes: 6.435, gdp_pc: 14475 },
    2013: { obesity: 23.777, alcohol_pc: 9.2865, ncd_mort: 481.77, life_exp: 77.8531, inactivity: 23.985, diabetes: 9.6324, gdp_pc: 14135 },
    2017: { obesity: 26.3329, alcohol_pc: 9.7259, ncd_mort: 466.57, life_exp: 78.1255, inactivity: 27.8021, diabetes: 10.6262, gdp_pc: 13902 },
    2021: { obesity: 28.8172, alcohol_pc: 10.1318, ncd_mort: 461.02, life_exp: 76.8617, inactivity: 31.9698, diabetes: 11.7339, gdp_pc: 17789 }
  },
  "HUN": {
    2005: { obesity: 21.1434, alcohol_pc: 14.2268, ncd_mort: 706.68, life_exp: 72.8481, inactivity: 22.2486, diabetes: 9.9221, gdp_pc: 11212 },
    2009: { obesity: 23.6132, alcohol_pc: 12.5243, ncd_mort: 637.76, life_exp: 74.2242, inactivity: 24.5833, diabetes: 10.792, gdp_pc: 13051 },
    2013: { obesity: 25.8935, alcohol_pc: 12.1478, ncd_mort: 583.37, life_exp: 75.5916, inactivity: 27.135, diabetes: 8.8349, gdp_pc: 13739 },
    2017: { obesity: 27.9928, alcohol_pc: 12.3592, ncd_mort: 577.19, life_exp: 75.9018, inactivity: 29.8176, diabetes: 12.9424, gdp_pc: 14736 },
    2021: { obesity: 29.9051, alcohol_pc: 11.6791, ncd_mort: 548.77, life_exp: 74.3955, inactivity: 32.601, diabetes: 14.3292, gdp_pc: 19031 }
  },
  "IDN": {
    2005: { obesity: 3.441, alcohol_pc: 0.0782, ncd_mort: 692.47, life_exp: 68.2347, inactivity: 14.5456, diabetes: 5.4221, gdp_pc: 1238 },
    2009: { obesity: 4.5157, alcohol_pc: 0.0975, ncd_mort: 696.61, life_exp: 69.0239, inactivity: 15.1159, diabetes: 6.1864, gdp_pc: 2218 },
    2013: { obesity: 5.9339, alcohol_pc: 0.113, ncd_mort: 681.76, life_exp: 70.054, inactivity: 15.823, diabetes: 7.4405, gdp_pc: 3567 },
    2017: { obesity: 7.7581, alcohol_pc: 0.1112, ncd_mort: 666.02, life_exp: 71.0006, inactivity: 16.8179, diabetes: 12.2406, gdp_pc: 3799 },
    2021: { obesity: 9.9369, alcohol_pc: 0.0863, ncd_mort: 591.98, life_exp: 68.2617, inactivity: 17.9786, diabetes: 12.0175, gdp_pc: 4287 }
  },
  "IRN": {
    2005: { obesity: 17.2488, alcohol_pc: 0.0119, ncd_mort: 492.04, life_exp: 74.885, inactivity: 31.0296, diabetes: 9.6242, gdp_pc: 3132 },
    2009: { obesity: 18.9354, alcohol_pc: 0.0256, ncd_mort: 456.12, life_exp: 76.242, inactivity: 34.1523, diabetes: 11.0189, gdp_pc: 5416 },
    2013: { obesity: 20.609, alcohol_pc: 0.0119, ncd_mort: 435.42, life_exp: 77.1967, inactivity: 37.5579, diabetes: 12.6417, gdp_pc: 6223 },
    2017: { obesity: 22.4152, alcohol_pc: 0.0264, ncd_mort: 443.21, life_exp: 77.479, inactivity: 41.3148, diabetes: 14.3427, gdp_pc: 6001 },
    2021: { obesity: 23.6954, alcohol_pc: 0.0205, ncd_mort: 395.23, life_exp: 74.7108, inactivity: 45.0457, diabetes: 19.6353, gdp_pc: 4605 }
  },
  "ISL": {
    2005: { obesity: 16.7579, alcohol_pc: 8.0967, ncd_mort: 355.03, life_exp: 80.903, inactivity: 32.219, diabetes: 4.1489, gdp_pc: 57784 },
    2009: { obesity: 18.2303, alcohol_pc: 8.1051, ncd_mort: 331.72, life_exp: 81.4959, inactivity: 30.9355, diabetes: 5.745, gdp_pc: 41484 },
    2013: { obesity: 19.1904, alcohol_pc: 7.6889, ncd_mort: 314.43, life_exp: 82.0738, inactivity: 29.8936, diabetes: 5.9257, gdp_pc: 50173 },
    2017: { obesity: 20.1644, alcohol_pc: 7.7446, ncd_mort: 306.65, life_exp: 82.2734, inactivity: 28.7182, diabetes: 6.2798, gdp_pc: 72976 },
    2021: { obesity: 21.2664, alcohol_pc: 8.3963, ncd_mort: 299.32, life_exp: 82.5777, inactivity: 27.8327, diabetes: 6.8399, gdp_pc: 70425 }
  },
  "ITA": {
    2005: { obesity: 14.8786, alcohol_pc: 9.3539, ncd_mort: 372.51, life_exp: 80.5106, inactivity: 46.6155, diabetes: 5.5238, gdp_pc: 32063 },
    2009: { obesity: 15.6085, alcohol_pc: 8.2546, ncd_mort: 336.32, life_exp: 81.5215, inactivity: 46.5335, diabetes: 7.9417, gdp_pc: 37100 },
    2013: { obesity: 15.6275, alcohol_pc: 8.0551, ncd_mort: 310.02, life_exp: 82.2879, inactivity: 46.0885, diabetes: 8.3284, gdp_pc: 35702 },
    2017: { obesity: 15.2198, alcohol_pc: 8.216, ncd_mort: 302.7, life_exp: 82.5219, inactivity: 45.6022, diabetes: 8.8546, gdp_pc: 32844 },
    2021: { obesity: 14.5418, alcohol_pc: 8.4518, ncd_mort: 284.94, life_exp: 82.1975, inactivity: 45.2523, diabetes: 9.5294, gdp_pc: 36853 }
  },
  "JPN": {
    2005: { obesity: 3.0833, alcohol_pc: 7.3623, ncd_mort: 270.0, life_exp: 82.2382, inactivity: 35.6975, diabetes: 5.7828, gdp_pc: 37813 },
    2009: { obesity: 3.5369, alcohol_pc: 6.7316, ncd_mort: 249.19, life_exp: 83.1582, inactivity: 39.0526, diabetes: 7.491, gdp_pc: 41309 },
    2013: { obesity: 4.0003, alcohol_pc: 6.7073, ncd_mort: 241.8, life_exp: 83.5602, inactivity: 42.4786, diabetes: 5.6167, gdp_pc: 40899 },
    2017: { obesity: 4.5726, alcohol_pc: 6.6307, ncd_mort: 233.56, life_exp: 84.2581, inactivity: 46.006, diabetes: 7.9274, gdp_pc: 38834 },
    2021: { obesity: 5.2752, alcohol_pc: 6.2696, ncd_mort: 230.7, life_exp: 84.4607, inactivity: 49.6899, diabetes: 8.4692, gdp_pc: 40095 }
  },
  "KEN": {
    2005: { obesity: 5.4969, alcohol_pc: 1.2584, ncd_mort: 458.24, life_exp: 56.3951, inactivity: 9.8431, diabetes: 5.4088, gdp_pc: 523 },
    2009: { obesity: 6.6205, alcohol_pc: 1.7471, ncd_mort: 505.85, life_exp: 60.4906, inactivity: 9.0231, diabetes: 5.2672, gdp_pc: 1048 },
    2013: { obesity: 7.7586, alcohol_pc: 1.8954, ncd_mort: 508.86, life_exp: 63.1158, inactivity: 8.4038, diabetes: 5.132, gdp_pc: 1371 },
    2017: { obesity: 8.9707, alcohol_pc: 2.0919, ncd_mort: 539.17, life_exp: 65.6113, inactivity: 7.9534, diabetes: 6.7132, gdp_pc: 1667 },
    2021: { obesity: 10.2346, alcohol_pc: 2.1294, ncd_mort: 507.84, life_exp: 66.7622, inactivity: 7.599, diabetes: 5.4887, gdp_pc: 2061 }
  },
  "KOR": {
    2005: { obesity: 2.9286, alcohol_pc: 9.5564, ncd_mort: 414.34, life_exp: 78.3709, inactivity: 33.291, diabetes: 11.227, gdp_pc: 20167 },
    2009: { obesity: 3.5602, alcohol_pc: 9.5761, ncd_mort: 331.87, life_exp: 80.3628, inactivity: 39.2496, diabetes: 11.5109, gdp_pc: 19937 },
    2013: { obesity: 4.3387, alcohol_pc: 9.4014, ncd_mort: 290.89, life_exp: 81.6862, inactivity: 45.4894, diabetes: 12.0013, gdp_pc: 28449 },
    2017: { obesity: 5.4434, alcohol_pc: 9.0761, ncd_mort: 247.53, life_exp: 83.0922, inactivity: 52.0787, diabetes: 9.418, gdp_pc: 33297 },
    2021: { obesity: 6.9482, alcohol_pc: 8.3602, ncd_mort: 223.24, life_exp: 83.7998, inactivity: 58.9222, diabetes: 13.7008, gdp_pc: 37518 }
  },
  "LBN": {
    2005: { obesity: 23.0728, alcohol_pc: 1.9345, ncd_mort: 442.42, life_exp: 77.1713, inactivity: 39.0942, diabetes: 18.8334, gdp_pc: 4602 },
    2009: { obesity: 25.2464, alcohol_pc: 2.2092, ncd_mort: 424.32, life_exp: 77.7903, inactivity: 43.8031, diabetes: 15.6133, gdp_pc: 7091 },
    2013: { obesity: 27.173, alcohol_pc: 1.9209, ncd_mort: 414.56, life_exp: 78.1648, inactivity: 48.5878, diabetes: 21.4703, gdp_pc: 8162 },
    2017: { obesity: 28.7715, alcohol_pc: 2.0135, ncd_mort: 374.82, life_exp: 79.0304, inactivity: 53.6591, diabetes: 18.1005, gdp_pc: 8608 },
    2021: { obesity: 29.9031, alcohol_pc: 1.9766, ncd_mort: 362.61, life_exp: 74.3421, inactivity: 58.4709, diabetes: 24.1489, gdp_pc: 4045 }
  },
  "MAR": {
    2005: { obesity: 13.5427, alcohol_pc: 0.4794, ncd_mort: 624.5, life_exp: 71.2338, inactivity: 20.6271, diabetes: 18.8334, gdp_pc: 2243 },
    2009: { obesity: 15.3508, alcohol_pc: 0.5356, ncd_mort: 619.39, life_exp: 72.1615, inactivity: 21.1473, diabetes: 20.2054, gdp_pc: 3120 },
    2013: { obesity: 17.2282, alcohol_pc: 0.4533, ncd_mort: 618.51, life_exp: 72.9657, inactivity: 21.8713, diabetes: 16.7609, gdp_pc: 3380 },
    2017: { obesity: 19.0422, alcohol_pc: 0.4496, ncd_mort: 624.2, life_exp: 73.5335, inactivity: 22.8318, diabetes: 17.898, gdp_pc: 3297 },
    2021: { obesity: 20.4924, alcohol_pc: 0.4249, ncd_mort: 610.39, life_exp: 72.6187, inactivity: 23.9279, diabetes: 18.5525, gdp_pc: 3786 }
  },
  "MEX": {
    2005: { obesity: 24.778, alcohol_pc: 5.287, ncd_mort: 480.97, life_exp: 74.9268, inactivity: 22.5635, diabetes: 17.2092, gdp_pc: 8672 },
    2009: { obesity: 27.3316, alcohol_pc: 5.6035, ncd_mort: 470.84, life_exp: 75.1422, inactivity: 23.7366, diabetes: 23.9187, gdp_pc: 8424 },
    2013: { obesity: 30.096, alcohol_pc: 5.1416, ncd_mort: 453.35, life_exp: 75.9294, inactivity: 25.0083, diabetes: 18.7674, gdp_pc: 11217 },
    2017: { obesity: 32.8087, alcohol_pc: 5.8566, ncd_mort: 456.68, life_exp: 75.8702, inactivity: 26.3769, diabetes: 16.9405, gdp_pc: 9649 },
    2021: { obesity: 35.4053, alcohol_pc: 6.1923, ncd_mort: 455.4, life_exp: 70.8326, inactivity: 27.6874, diabetes: 14.7655, gdp_pc: 10314 }
  },
  "NGA": {
    2005: { obesity: 6.6945, alcohol_pc: 1.0936, ncd_mort: 536.91, life_exp: 56.9175, inactivity: 18.8035, diabetes: 9.4459, gdp_pc: 1211 },
    2009: { obesity: 8.0202, alcohol_pc: 1.3555, ncd_mort: 519.27, life_exp: 59.302, inactivity: 18.0448, diabetes: 7.7867, gdp_pc: 1820 },
    2013: { obesity: 9.1085, alcohol_pc: 1.5242, ncd_mort: 498.5, life_exp: 61.0412, inactivity: 17.1787, diabetes: 10.7619, gdp_pc: 2873 },
    2017: { obesity: 10.4512, alcohol_pc: 1.7033, ncd_mort: 480.54, life_exp: 62.3621, inactivity: 16.5509, diabetes: 11.7789, gdp_pc: 1876 },
    2021: { obesity: 12.18, alcohol_pc: 1.8469, ncd_mort: 495.46, life_exp: 63.3975, inactivity: 16.2203, diabetes: 12.9998, gdp_pc: 2787 }
  },
  "NLD": {
    2005: { obesity: 12.8581, alcohol_pc: 10.6453, ncd_mort: 410.17, life_exp: 79.3414, inactivity: 18.9327, diabetes: 5.0601, gdp_pc: 42165 },
    2009: { obesity: 13.6143, alcohol_pc: 10.2689, ncd_mort: 365.06, life_exp: 80.5436, inactivity: 17.0131, diabetes: 7.0132, gdp_pc: 53172 },
    2013: { obesity: 13.881, alcohol_pc: 9.6922, ncd_mort: 347.59, life_exp: 81.1169, inactivity: 15.0416, diabetes: 7.2107, gdp_pc: 52602 },
    2017: { obesity: 14.0961, alcohol_pc: 9.2338, ncd_mort: 331.77, life_exp: 81.528, inactivity: 13.2939, diabetes: 7.5511, gdp_pc: 49514 },
    2021: { obesity: 14.3894, alcohol_pc: 8.9684, ncd_mort: 308.12, life_exp: 81.1248, inactivity: 11.7705, diabetes: 8.1057, gdp_pc: 60142 }
  },
  "NZL": {
    2005: { obesity: 25.3451, alcohol_pc: 9.9639, ncd_mort: 380.86, life_exp: 79.9364, inactivity: 22.2341, diabetes: 6.3847, gdp_pc: 27751 },
    2009: { obesity: 27.9053, alcohol_pc: 10.1407, ncd_mort: 356.47, life_exp: 80.5624, inactivity: 22.0355, diabetes: 6.8336, gdp_pc: 28277 },
    2013: { obesity: 29.8097, alcohol_pc: 9.8063, ncd_mort: 330.38, life_exp: 81.3636, inactivity: 21.6669, diabetes: 9.5505, gdp_pc: 43000 },
    2017: { obesity: 31.4647, alcohol_pc: 9.371, ncd_mort: 334.07, life_exp: 81.1638, inactivity: 21.0891, diabetes: 7.8527, gdp_pc: 42950 },
    2021: { obesity: 32.9311, alcohol_pc: 9.381, ncd_mort: 301.84, life_exp: 82.2015, inactivity: 20.7635, diabetes: 11.3578, gdp_pc: 49950 }
  },
  "PAN": {
    2005: { obesity: 20.9456, alcohol_pc: 5.6674, ncd_mort: 415.99, life_exp: 76.452, inactivity: 39.1442, diabetes: 7.4104, gdp_pc: 5018 },
    2009: { obesity: 24.1529, alcohol_pc: 6.7363, ncd_mort: 370.6, life_exp: 77.169, inactivity: 43.3884, diabetes: 10.6572, gdp_pc: 7797 },
    2013: { obesity: 27.6956, alcohol_pc: 6.9741, ncd_mort: 366.33, life_exp: 77.6523, inactivity: 47.9109, diabetes: 11.3076, gdp_pc: 12273 },
    2017: { obesity: 31.3526, alcohol_pc: 7.2153, ncd_mort: 366.59, life_exp: 78.3318, inactivity: 52.4701, diabetes: 11.4056, gdp_pc: 15695 },
    2021: { obesity: 34.9696, alcohol_pc: 6.4709, ncd_mort: 341.41, life_exp: 77.2387, inactivity: 56.8877, diabetes: 11.3262, gdp_pc: 15510 }
  },
  "PER": {
    2005: { obesity: 14.19, alcohol_pc: 3.6512, ncd_mort: 279.21, life_exp: 77.5367, inactivity: 26.0626, diabetes: 6.4077, gdp_pc: 2707 },
    2009: { obesity: 16.4336, alcohol_pc: 4.6969, ncd_mort: 283.01, life_exp: 78.1183, inactivity: 27.7537, diabetes: 6.284, gdp_pc: 4181 },
    2013: { obesity: 19.3716, alcohol_pc: 5.0611, ncd_mort: 253.9, life_exp: 79.4826, inactivity: 29.7243, diabetes: 10.8723, gdp_pc: 6747 },
    2017: { obesity: 22.7978, alcohol_pc: 5.101, ncd_mort: 279.03, life_exp: 79.3585, inactivity: 31.7266, diabetes: 14.6671, gdp_pc: 6736 },
    2021: { obesity: 26.4218, alcohol_pc: 4.5987, ncd_mort: 336.06, life_exp: 71.6673, inactivity: 33.9052, diabetes: 16.2241, gdp_pc: 6826 }
  },
  "POL": {
    2005: { obesity: 18.8501, alcohol_pc: 10.8365, ncd_mort: 582.83, life_exp: 74.8955, inactivity: 26.4771, diabetes: 7.6895, gdp_pc: 8044 },
    2009: { obesity: 20.2917, alcohol_pc: 11.8342, ncd_mort: 546.48, life_exp: 75.6387, inactivity: 29.4677, diabetes: 8.6791, gdp_pc: 11556 },
    2013: { obesity: 21.2778, alcohol_pc: 11.9062, ncd_mort: 493.86, life_exp: 76.8653, inactivity: 32.6575, diabetes: 7.4686, gdp_pc: 13622 },
    2017: { obesity: 21.7078, alcohol_pc: 11.8922, ncd_mort: 469.89, life_exp: 77.5619, inactivity: 36.1474, diabetes: 8.7622, gdp_pc: 13913 },
    2021: { obesity: 21.7471, alcohol_pc: 12.1397, ncd_mort: 460.2, life_exp: 75.4021, inactivity: 39.8265, diabetes: 13.6814, gdp_pc: 18636 }
  },
  "PRK": {
    2005: { obesity: 4.5938, alcohol_pc: 2.3568, ncd_mort: 626.48, life_exp: 69.6278, inactivity: 20.9153, diabetes: 7.3926, gdp_pc: null },
    2009: { obesity: 5.6813, alcohol_pc: 2.5456, ncd_mort: 682.24, life_exp: 69.872, inactivity: 22.3167, diabetes: 8.0562, gdp_pc: null },
    2013: { obesity: 6.977, alcohol_pc: 2.7659, ncd_mort: 686.95, life_exp: 70.8361, inactivity: 23.7289, diabetes: 9.1145, gdp_pc: null },
    2017: { obesity: 8.5519, alcohol_pc: 2.7029, ncd_mort: 639.31, life_exp: 71.9224, inactivity: 25.5735, diabetes: 13.9677, gdp_pc: null },
    2021: { obesity: 10.3925, alcohol_pc: 2.6173, ncd_mort: 584.05, life_exp: 72.6431, inactivity: 27.6539, diabetes: 16.7459, gdp_pc: null }
  },
  "PRT": {
    2005: { obesity: 17.4357, alcohol_pc: 13.159, ncd_mort: 440.12, life_exp: 77.9918, inactivity: 47.1335, diabetes: 5.9524, gdp_pc: 18780 },
    2009: { obesity: 18.6136, alcohol_pc: 12.5928, ncd_mort: 384.28, life_exp: 79.4058, inactivity: 49.4957, diabetes: 6.2813, gdp_pc: 23151 },
    2013: { obesity: 18.9829, alcohol_pc: 11.1195, ncd_mort: 350.65, life_exp: 80.5273, inactivity: 51.6255, diabetes: 8.8768, gdp_pc: 21676 },
    2017: { obesity: 18.8342, alcohol_pc: 12.3892, ncd_mort: 332.01, life_exp: 81.1466, inactivity: 53.7041, diabetes: 9.2666, gdp_pc: 21442 },
    2021: { obesity: 18.3996, alcohol_pc: 12.8561, ncd_mort: 306.6, life_exp: 81.1796, inactivity: 55.6124, diabetes: 7.2258, gdp_pc: 24711 }
  },
  "PRY": {
    2005: { obesity: 20.2753, alcohol_pc: 6.4254, ncd_mort: 443.65, life_exp: 74.8514, inactivity: 24.3717, diabetes: 12.4785, gdp_pc: 1971 },
    2009: { obesity: 22.8323, alcohol_pc: 7.1218, ncd_mort: 450.84, life_exp: 74.7863, inactivity: 26.5191, diabetes: 13.6123, gdp_pc: 3942 },
    2013: { obesity: 25.7461, alcohol_pc: 6.7799, ncd_mort: 460.02, life_exp: 75.0396, inactivity: 28.9407, diabetes: 14.9057, gdp_pc: 6436 },
    2017: { obesity: 28.9254, alcohol_pc: 6.384, ncd_mort: 466.88, life_exp: 75.3468, inactivity: 31.6268, diabetes: 12.6386, gdp_pc: 6152 },
    2021: { obesity: 32.1732, alcohol_pc: 6.5519, ncd_mort: 455.78, life_exp: 70.2708, inactivity: 34.4381, diabetes: 13.9597, gdp_pc: 5977 }
  },
  "QAT": {
    2005: { obesity: 30.325, alcohol_pc: 1.2672, ncd_mort: 917.69, life_exp: 71.0395, inactivity: 44.2084, diabetes: 20.7288, gdp_pc: 53950 },
    2009: { obesity: 33.5666, alcohol_pc: 1.2333, ncd_mort: 796.13, life_exp: 72.7713, inactivity: 44.256, diabetes: 29.1683, gdp_pc: 60786 },
    2013: { obesity: 36.7553, alcohol_pc: 1.2622, ncd_mort: 560.98, life_exp: 75.7952, inactivity: 46.5333, diabetes: 23.8458, gdp_pc: 103697 },
    2017: { obesity: 39.1893, alcohol_pc: 1.1889, ncd_mort: 432.01, life_exp: 78.5144, inactivity: 48.074, diabetes: 32.5956, gdp_pc: 63280 },
    2021: { obesity: 41.1584, alcohol_pc: 1.2499, ncd_mort: 479.91, life_exp: 76.7101, inactivity: 50.5293, diabetes: 25.6805, gdp_pc: 71752 }
  },
  "RUS": {
    2005: { obesity: 19.3063, alcohol_pc: 15.0334, ncd_mort: 972.16, life_exp: 65.1898, inactivity: 12.6943, diabetes: 7.809, gdp_pc: 5323 },
    2009: { obesity: 19.8921, alcohol_pc: 14.7338, ncd_mort: 815.34, life_exp: 68.5566, inactivity: 14.2239, diabetes: 6.3416, gdp_pc: 8563 },
    2013: { obesity: 19.9899, alcohol_pc: 13.5048, ncd_mort: 697.53, life_exp: 70.6958, inactivity: 15.8428, diabetes: 8.9178, gdp_pc: 15941 },
    2017: { obesity: 19.4143, alcohol_pc: 10.8532, ncd_mort: 649.06, life_exp: 72.4994, inactivity: 17.6188, diabetes: 7.233, gdp_pc: 10659 },
    2021: { obesity: 18.4027, alcohol_pc: 10.085, ncd_mort: 585.18, life_exp: 70.0173, inactivity: 19.8146, diabetes: 7.9214, gdp_pc: 12425 }
  },
  "SAU": {
    2005: { obesity: 30.7336, alcohol_pc: null, ncd_mort: 738.28, life_exp: 71.8163, inactivity: 53.9101, diabetes: 33.0319, gdp_pc: 15976 },
    2009: { obesity: 33.3587, alcohol_pc: null, ncd_mort: 586.53, life_exp: 73.9001, inactivity: 52.844, diabetes: 32.4269, gdp_pc: 17718 },
    2013: { obesity: 35.6622, alcohol_pc: null, ncd_mort: 431.79, life_exp: 77.3314, inactivity: 52.1367, diabetes: 31.2259, gdp_pc: 27865 },
    2017: { obesity: 37.535, alcohol_pc: null, ncd_mort: 487.45, life_exp: 76.7429, inactivity: 51.0135, diabetes: 22.7373, gdp_pc: 23929 },
    2021: { obesity: 39.2337, alcohol_pc: null, ncd_mort: 462.09, life_exp: 76.4292, inactivity: 49.8145, diabetes: 21.1573, gdp_pc: 31921 }
  },
  "SCG": {
    2005: { obesity: 15.9022, alcohol_pc: 11.0981, ncd_mort: 767.46, life_exp: 72.7838, inactivity: 50.392, diabetes: 8.7835, gdp_pc: 3808 },
    2009: { obesity: 17.1816, alcohol_pc: 10.8755, ncd_mort: 688.58, life_exp: 73.9736, inactivity: 50.0704, diabetes: 7.248, gdp_pc: 6414 },
    2013: { obesity: 18.4527, alcohol_pc: 10.5397, ncd_mort: 628.32, life_exp: 75.229, inactivity: 49.693, diabetes: 10.769, gdp_pc: 7040 },
    2017: { obesity: 19.6685, alcohol_pc: 10.9017, ncd_mort: 613.06, life_exp: 75.5706, inactivity: 49.3302, diabetes: 9.1204, gdp_pc: 6548 },
    2021: { obesity: 20.8405, alcohol_pc: 10.905, ncd_mort: 608.13, life_exp: 72.8089, inactivity: 49.0218, diabetes: 10.4082, gdp_pc: 9681 }
  },
  "SEN": {
    2005: { obesity: 5.7607, alcohol_pc: 0.2455, ncd_mort: 624.03, life_exp: 62.363, inactivity: 17.9262, diabetes: 10.2434, gdp_pc: 980 },
    2009: { obesity: 6.75, alcohol_pc: 0.4207, ncd_mort: 627.57, life_exp: 65.1162, inactivity: 16.9703, diabetes: 8.0909, gdp_pc: 1309 },
    2013: { obesity: 7.6436, alcohol_pc: 0.3462, ncd_mort: 620.48, life_exp: 66.5859, inactivity: 15.9791, diabetes: 10.2955, gdp_pc: 1380 },
    2017: { obesity: 8.7771, alcohol_pc: 0.397, ncd_mort: 611.89, life_exp: 68.1198, inactivity: 15.2383, diabetes: 7.9692, gdp_pc: 1357 },
    2021: { obesity: 10.2603, alcohol_pc: 0.3699, ncd_mort: 595.78, life_exp: 67.792, inactivity: 14.7835, diabetes: 10.2331, gdp_pc: 1598 }
  },
  "SRB": {
    2005: { obesity: 15.9022, alcohol_pc: 11.0981, ncd_mort: 767.46, life_exp: 72.7838, inactivity: 50.392, diabetes: 8.7835, gdp_pc: 3808 },
    2009: { obesity: 17.1816, alcohol_pc: 10.8755, ncd_mort: 688.58, life_exp: 73.9736, inactivity: 50.0704, diabetes: 7.248, gdp_pc: 6414 },
    2013: { obesity: 18.4527, alcohol_pc: 10.5397, ncd_mort: 628.32, life_exp: 75.229, inactivity: 49.693, diabetes: 10.769, gdp_pc: 7040 },
    2017: { obesity: 19.6685, alcohol_pc: 10.9017, ncd_mort: 613.06, life_exp: 75.5706, inactivity: 49.3302, diabetes: 9.1204, gdp_pc: 6548 },
    2021: { obesity: 20.8405, alcohol_pc: 10.905, ncd_mort: 608.13, life_exp: 72.8089, inactivity: 49.0218, diabetes: 10.4082, gdp_pc: 9681 }
  },
  "SVK": {
    2005: { obesity: 17.2907, alcohol_pc: 11.8166, ncd_mort: 643.96, life_exp: 74.0978, inactivity: 26.7754, diabetes: 5.593, gdp_pc: 11642 },
    2009: { obesity: 19.1665, alcohol_pc: 12.077, ncd_mort: 582.02, life_exp: 75.2166, inactivity: 26.2631, diabetes: 8.1962, gdp_pc: 16587 },
    2013: { obesity: 21.0897, alcohol_pc: 11.4866, ncd_mort: 522.81, life_exp: 76.4756, inactivity: 25.9813, diabetes: 9.0113, gdp_pc: 18313 },
    2017: { obesity: 22.9287, alcohol_pc: 11.2607, ncd_mort: 489.74, life_exp: 77.0946, inactivity: 25.9227, diabetes: 7.461, gdp_pc: 17646 },
    2021: { obesity: 24.6785, alcohol_pc: 9.6548, ncd_mort: 473.64, life_exp: 74.5094, inactivity: 26.0507, diabetes: 11.4747, gdp_pc: 22123 }
  },
  "SVN": {
    2005: { obesity: 15.2057, alcohol_pc: 12.6975, ncd_mort: 467.82, life_exp: 77.4413, inactivity: 20.9829, diabetes: 6.5875, gdp_pc: 17970 },
    2009: { obesity: 15.8642, alcohol_pc: 11.7956, ncd_mort: 406.59, life_exp: 79.0509, inactivity: 21.093, diabetes: 7.3013, gdp_pc: 24502 },
    2013: { obesity: 16.4285, alcohol_pc: 11.5926, ncd_mort: 371.21, life_exp: 80.1368, inactivity: 21.4004, diabetes: 10.8449, gdp_pc: 23237 },
    2017: { obesity: 17.2222, alcohol_pc: 11.1414, ncd_mort: 355.16, life_exp: 80.7899, inactivity: 21.8159, diabetes: 9.1669, gdp_pc: 23303 },
    2021: { obesity: 18.4725, alcohol_pc: 11.0567, ncd_mort: 323.32, life_exp: 80.415, inactivity: 22.4645, diabetes: 13.6775, gdp_pc: 29193 }
  },
  "SWE": {
    2005: { obesity: 13.708, alcohol_pc: 11.001, ncd_mort: 372.1, life_exp: 80.4244, inactivity: 27.0245, diabetes: 3.9692, gdp_pc: 43378 },
    2009: { obesity: 14.6275, alcohol_pc: 9.6907, ncd_mort: 344.74, life_exp: 81.1482, inactivity: 22.3093, diabetes: 5.5838, gdp_pc: 46708 },
    2013: { obesity: 15.1608, alcohol_pc: 9.3174, ncd_mort: 326.41, life_exp: 81.6408, inactivity: 17.9159, diabetes: 4.3703, gdp_pc: 60844 },
    2017: { obesity: 15.8344, alcohol_pc: 9.0157, ncd_mort: 312.78, life_exp: 82.0846, inactivity: 14.3067, diabetes: 6.0487, gdp_pc: 53210 },
    2021: { obesity: 16.7238, alcohol_pc: 8.9072, ncd_mort: 276.62, life_exp: 82.6649, inactivity: 11.3612, diabetes: 6.4845, gdp_pc: 60648 }
  },
  "TGO": {
    2005: { obesity: 4.963, alcohol_pc: 0.9458, ncd_mort: 746.5, life_exp: 56.9587, inactivity: 11.8969, diabetes: 7.4476, gdp_pc: 551 },
    2009: { obesity: 6.3149, alcohol_pc: 1.0558, ncd_mort: 757.28, life_exp: 58.5088, inactivity: 12.021, diabetes: 6.2684, gdp_pc: 721 },
    2013: { obesity: 7.6461, alcohol_pc: 1.0146, ncd_mort: 733.71, life_exp: 60.7123, inactivity: 12.0849, diabetes: 7.0217, gdp_pc: 827 },
    2017: { obesity: 9.3536, alcohol_pc: 1.0991, ncd_mort: 722.96, life_exp: 62.5531, inactivity: 12.3296, diabetes: 8.0043, gdp_pc: 793 },
    2021: { obesity: 11.5147, alcohol_pc: 1.3765, ncd_mort: 686.51, life_exp: 63.8646, inactivity: 12.8141, diabetes: 9.1685, gdp_pc: 962 }
  },
  "TTO": {
    2005: { obesity: 22.2904, alcohol_pc: 5.4496, ncd_mort: 591.63, life_exp: 71.6754, inactivity: 37.1088, diabetes: 19.539, gdp_pc: 12346 },
    2009: { obesity: 24.0862, alcohol_pc: 5.5028, ncd_mort: 539.06, life_exp: 72.841, inactivity: 38.9532, diabetes: 22.1706, gdp_pc: 14634 },
    2013: { obesity: 25.7656, alcohol_pc: 5.4336, ncd_mort: 508.94, life_exp: 74.3173, inactivity: 40.9698, diabetes: 29.7308, gdp_pc: 21305 },
    2017: { obesity: 27.5502, alcohol_pc: 5.0741, ncd_mort: 525.95, life_exp: 74.0052, inactivity: 43.101, diabetes: 26.1389, gdp_pc: 17566 },
    2021: { obesity: 29.4167, alcohol_pc: 5.0031, ncd_mort: 504.68, life_exp: 71.7071, inactivity: 45.1339, diabetes: 27.6728, gdp_pc: 17713 }
  },
  "TUN": {
    2005: { obesity: 18.7225, alcohol_pc: 1.663, ncd_mort: 519.45, life_exp: 75.3728, inactivity: 23.7859, diabetes: 14.4057, gdp_pc: 3147 },
    2009: { obesity: 20.5815, alcohol_pc: 1.7358, ncd_mort: 498.99, life_exp: 76.0762, inactivity: 25.8725, diabetes: 11.9147, gdp_pc: 4080 },
    2013: { obesity: 22.379, alcohol_pc: 1.7516, ncd_mort: 475.26, life_exp: 76.6137, inactivity: 28.1396, diabetes: 13.1381, gdp_pc: 4370 },
    2017: { obesity: 24.029, alcohol_pc: 1.924, ncd_mort: 464.78, life_exp: 77.0315, inactivity: 30.6648, diabetes: 14.5438, gdp_pc: 3619 },
    2021: { obesity: 25.2295, alcohol_pc: 1.6512, ncd_mort: 432.4, life_exp: 74.0684, inactivity: 33.1647, diabetes: 15.5835, gdp_pc: 3907 }
  },
  "TUR": {
    2005: { obesity: 26.8916, alcohol_pc: 2.0719, ncd_mort: 490.21, life_exp: 76.1964, inactivity: 39.1245, diabetes: 14.2196, gdp_pc: 7332 },
    2009: { obesity: 28.3598, alcohol_pc: 2.1907, ncd_mort: 510.77, life_exp: 76.346, inactivity: 40.3833, diabetes: 11.7692, gdp_pc: 9077 },
    2013: { obesity: 29.3254, alcohol_pc: 2.1334, ncd_mort: 499.52, life_exp: 76.8342, inactivity: 41.5728, diabetes: 13.228, gdp_pc: 12636 },
    2017: { obesity: 29.7318, alcohol_pc: 1.8895, ncd_mort: 500.5, life_exp: 77.0708, inactivity: 42.8448, diabetes: 14.9142, gdp_pc: 10756 },
    2021: { obesity: 29.2643, alcohol_pc: 1.9693, ncd_mort: 470.55, life_exp: 75.2724, inactivity: 44.1401, diabetes: 21.7296, gdp_pc: 9982 }
  },
  "UKR": {
    2005: { obesity: 20.8019, alcohol_pc: 7.1997, ncd_mort: 914.36, life_exp: 67.106, inactivity: 11.857, diabetes: 8.0485, gdp_pc: 1875 },
    2009: { obesity: 21.8592, alcohol_pc: 8.5225, ncd_mort: 802.06, life_exp: 69.493, inactivity: 12.5506, diabetes: 6.7164, gdp_pc: 2607 },
    2013: { obesity: 22.5343, alcohol_pc: 8.4755, ncd_mort: 711.04, life_exp: 71.5533, inactivity: 13.166, diabetes: 9.1678, gdp_pc: 4130 },
    2017: { obesity: 22.8037, alcohol_pc: 6.0644, ncd_mort: 644.16, life_exp: 73.001, inactivity: 13.8399, diabetes: 9.8082, gdp_pc: 2604 },
    2021: { obesity: 22.8037, alcohol_pc: 4.7765, ncd_mort: 629.07, life_exp: 70.9067, inactivity: 14.8391, diabetes: 8.5633, gdp_pc: 4776 }
  },
  "URY": {
    2005: { obesity: 20.3315, alcohol_pc: 7.0008, ncd_mort: 507.11, life_exp: 75.6499, inactivity: 31.9852, diabetes: 13.2385, gdp_pc: 5284 },
    2009: { obesity: 22.8561, alcohol_pc: 7.1722, ncd_mort: 457.12, life_exp: 76.6713, inactivity: 32.8545, diabetes: 14.1844, gdp_pc: 9881 },
    2013: { obesity: 25.7754, alcohol_pc: 6.8611, ncd_mort: 446.85, life_exp: 76.702, inactivity: 33.8243, diabetes: 11.748, gdp_pc: 18335 },
    2017: { obesity: 29.0043, alcohol_pc: 6.4658, ncd_mort: 433.7, life_exp: 77.3393, inactivity: 34.9381, diabetes: 12.7199, gdp_pc: 19185 },
    2021: { obesity: 32.3444, alcohol_pc: 6.3634, ncd_mort: 446.41, life_exp: 74.983, inactivity: 36.1087, diabetes: 13.8502, gdp_pc: 17882 }
  },
  "USA": {
    2005: { obesity: 32.1362, alcohol_pc: 9.1932, ncd_mort: 449.01, life_exp: 77.3846, inactivity: 32.3828, diabetes: 8.5741, gdp_pc: 44123 },
    2009: { obesity: 35.2218, alcohol_pc: 9.2477, ncd_mort: 411.31, life_exp: 78.4239, inactivity: 33.4979, diabetes: 9.3908, gdp_pc: 47195 },
    2013: { obesity: 37.3499, alcohol_pc: 9.323, ncd_mort: 402.03, life_exp: 78.7595, inactivity: 34.3319, diabetes: 10.0463, gdp_pc: 53179 },
    2017: { obesity: 38.983, alcohol_pc: 9.3066, ncd_mort: 407.93, life_exp: 78.5008, inactivity: 35.1692, diabetes: 10.9684, gdp_pc: 59635 },
    2021: { obesity: 40.1741, alcohol_pc: 9.7561, ncd_mort: 423.6, life_exp: 76.3737, inactivity: 36.1272, diabetes: 12.1538, gdp_pc: 70205 }
  },
  "UZB": {
    2005: { obesity: 14.9074, alcohol_pc: 1.6827, ncd_mort: 1303.16, life_exp: 63.2003, inactivity: 10.7133, diabetes: 8.8786, gdp_pc: 543 },
    2009: { obesity: 17.9421, alcohol_pc: 1.7725, ncd_mort: 1084.65, life_exp: 66.2801, inactivity: 14.1161, diabetes: 12.8208, gdp_pc: 1206 },
    2013: { obesity: 21.4553, alcohol_pc: 2.2077, ncd_mort: 984.6, life_exp: 68.3724, inactivity: 18.3193, diabetes: 14.867, gdp_pc: 2462 },
    2017: { obesity: 25.0701, alcohol_pc: 2.6378, ncd_mort: 851.46, life_exp: 70.4027, inactivity: 23.2826, diabetes: 18.2107, gdp_pc: 2191 },
    2021: { obesity: 28.5871, alcohol_pc: 2.525, ncd_mort: 724.77, life_exp: 72.1888, inactivity: 28.9299, diabetes: 18.1625, gdp_pc: 2259 }
  },
  "VNM": {
    2005: { obesity: 0.4449, alcohol_pc: 6.0563, ncd_mort: 577.56, life_exp: 72.1765, inactivity: 17.8697, diabetes: 4.8173, gdp_pc: 711 },
    2009: { obesity: 0.6358, alcohol_pc: 8.4251, ncd_mort: 591.13, life_exp: 72.4113, inactivity: 20.1864, diabetes: 5.1716, gdp_pc: 1226 },
    2013: { obesity: 0.9266, alcohol_pc: 10.0813, ncd_mort: 586.39, life_exp: 72.8398, inactivity: 22.8941, diabetes: 6.0659, gdp_pc: 2360 },
    2017: { obesity: 1.3402, alcohol_pc: 11.1368, ncd_mort: 576.14, life_exp: 73.4014, inactivity: 25.9401, diabetes: 10.0354, gdp_pc: 2956 },
    2021: { obesity: 1.8821, alcohol_pc: 10.7334, ncd_mort: 546.15, life_exp: 73.7966, inactivity: 29.3319, diabetes: 10.1995, gdp_pc: 3704 }
  },
  "ZAF": {
    2005: { obesity: 25.7545, alcohol_pc: 8.3279, ncd_mort: 583.13, life_exp: 52.0316, inactivity: 47.1187, diabetes: 14.7193, gdp_pc: 5837 },
    2009: { obesity: 27.7182, alcohol_pc: 8.2356, ncd_mort: 627.43, life_exp: 55.2698, inactivity: 46.6175, diabetes: 15.0719, gdp_pc: 6375 },
    2013: { obesity: 28.8372, alcohol_pc: 8.4155, ncd_mort: 645.22, life_exp: 62.085, inactivity: 45.638, diabetes: 19.8257, gdp_pc: 7332 },
    2017: { obesity: 29.8483, alcohol_pc: 8.3233, ncd_mort: 616.27, life_exp: 64.7484, inactivity: 44.6434, diabetes: 19.2507, gdp_pc: 6618 },
    2021: { obesity: 30.8391, alcohol_pc: 7.7984, ncd_mort: 560.44, life_exp: 61.4992, inactivity: 43.8379, diabetes: 13.9708, gdp_pc: 6829 }
  }
};
