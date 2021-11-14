export const areas = {
  "AK": {
    "name": "Alaska", "side": "US", "airfield": 5, "links": { "E": ["HI"], "S": ["HI"], "JA": ["MI"] }
  },
  "AU": {
    "name": "Australia", "side": "US", "currentOwner": "US", "Au": true
  },
  "BO": {
    "name": "Borneo", "side": "US", "airfield": 4, "Au": true, "links": { "E": ["NG"], "S": ["NG"], "JA": ["PH"] }
  },
  "CI": {
    "name": "Caroline Islands", "side": "JA", "airfield": 5, "links": { "E": ["ML","SI"], "S": ["NG","SI"], "JA": ["MA"] }
  },
  "EA": {
    "name": "East Asia", "side": "JA", "currentOwner": "JA", "links": { "E": ["PH"], "S": ["PH"], "JA": ["JA"] }
  },
  "GI": {
    "name": "Gilbert Islands", "side": "JA", "airfield": 4, "links": { "E": ["HI"], "S": ["SI"], "JA": ["ML", "SI"] }
  },
  "HI": {
    "name": "Hawaiian Islands", "side": "US", "currentOwner": "US", "links": { "E": [], "S": ["GI"], "JA": ["MI"] }
  },
  "IJ": {
    "name": "Iwo Jima", "side": "JA", "airfield": 5, "links": { "E": ["MA"], "S": ["MA"], "JA": ["JA"] }
  },
  "JA": {
    "name": "JA", "side": "JA", "currentOwner": "JA", "links": { "E": ["IJ"], "S": ["OK"], "JA": [] }
  },
  "MA": {
    "name": "Mariana Islands", "side": "JA", "airfield": 6, "links": { "E": ["WI"], "S": ["CI", "PH"], "JA": ["IJ"] }
  },
  "MI": {
    "name": "Midway", "side": "US", "airfield": 2, "links": { "E": ["HI"], "S": ["WI", "HI"], "JA": ["WI"] }
  },
  "ML": {
    "name": "Marshall Islands", "side": "JA", "airfield": 4, "links": { "E": ["GI"], "S": ["SI"], "JA": ["CI"] }
  },
  "NC": {
    "name": "New Caledonia", "side": "US", "airfield": 3, "Au": true, "links": { "E": ["SA"], "S": ["SA"], "JA": ["SI"] }
  },
  "NG": {
    "name": "New Guinea", "side": "US", "airfield": 8, "Au": true, "links": { "E": ["SI"], "S": ["SI"], "JA": ["BO", "CI"] }
  },
  "OK": {
    "name": "Okinawa", "side": "JA", "airfield": 4, "links": { "E": ["PH"], "S": ["PH"], "JA": ["JA"] }
  },
  "PH": {
    "name": "Philippines", "side": "US", "airfield": 9, "links": { "E": ["MA"], "S": ["BO"], "JA": ["OK"] }
  },
  "SA": {
    "name": "Samoa", "side": "US", "airfield": 2, "links": { "E": ["HI"], "S": ["NC"], "JA": ["NC", "GI"] }
  },
  "SI": {
    "name": "Solomon Islands", "side": "US", "airfield": 6, "Au": true, "links": { "E": ["GI"], "S": ["GI"], "JA": ["CI"] }
  },
  "WC": {
    "name": "West Coast", "side": "US", "currentOwner": "US"
  },
  "WI": {
    "name": "Wake Island", "side": "JA", "airfield": 3, "links": { "E": ["MI"], "S": ["ML"], "JA": ["MA"] }
  },
  "P1": { "min": 1942, "max": 1945 },
  "P2": { "min": 1943, "max": 1945 },
  "P3": { "min": 1944, "max": 1945 },
  "RE": { "name": "Reinforcements" },
  "--": { "name": "Sunk Ships" }
}

export const getAreaIdList = () => Object.keys(areas)
