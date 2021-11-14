import { getAreaIdList } from './areas.js'

export const forces = {
  "1942": {
    "JA": {
      "air": {
        "types": {
          "A6M": { "cost": 1, "aa": [8, 4], "saa": [4, 2], "aship": null, "asurf": null },
          "B5N": { "cost": 2, "aa": null, "saa": null, "aship": [6, 3], "asurf": [2, 1] },
          "D3A": { "cost": 2, "aa": null, "saa": null, "aship": [4, 2], "asurf": [4, 2] },
          "KI27": { "cost": 1, "aa": [4, 2], "saa": [2, 1], "aship": null, "asurf": null },
          "KI43": { "cost": 1, "aa": [6, 3] , "saa": [3, 2], "aship": null, "asurf": null },
          "KI21": { "cost": 2, "aa": null, "saa": null, "aship": [2, 1], "asurf": [6, 3] },
          "KI48": { "cost": 2, "aa": null, "saa": null, "aship": [2, 1], "asurf": [4, 2] },
          "G3M": { "cost": 2, "aa": null, "saa": null, "aship": [2, 1], "asurf": [4, 2] },
          "G4M": { "cost": 2, "aa": null, "saa": null, "aship": [4, 2], "asurf": [4, 2] },
          "A6M-G4M": { "cost": 3, "aa": [6, 3] , "saa": [3, 2], "aship": [4, 2], "asurf": [4, 2] },
          "A6M-G3M": { "cost": 3, "aa": [6, 3], "saa": [3, 2], "aship": [2, 1], "asurf": [4, 2] }    
        },
        "units": {
          "3 Kokutai": { "type": "A6M", "loc": "PH", "hp": 2, "moveTo": "" },
          "6 Kokutai": { "type": "A6M", "loc": "RE", "hp": 2, "moveTo": "" },
          "Tainan Kokutai": { "type": "A6M", "loc": "NG", "hp": 2, "moveTo": "" },
          "Yamada Kokutai": { "type": "A6M", "loc": "PH", "hp": 2, "moveTo": "" },
          "Chitose Kokutai": { "type": "A6M-G4M", "loc": "EA", "hp": 2, "moveTo": "" },
          "24 Sentai": { "type": "KI27", "loc": "PH", "hp": 2, "moveTo": "" },
          "59 Sentai": { "type": "KI43", "loc": "NG", "hp": 2, "moveTo": "" },
          "248 Sentai": { "type": "KI43", "loc": "RE", "hp": 2, "moveTo": "" },
          "14 Sentai": { "type": "KI21", "loc": "PH", "hp": 2, "moveTo": "" },
          "60 Sentai": { "type": "KI21", "loc": "RE", "hp": 2, "moveTo": "" },
          "8 Sentai": { "type": "KI48", "loc": "NG", "hp": 2, "moveTo": "" },
          "Mihoro Kokutai": { "type": "G3M", "loc": "PH", "hp": 2, "moveTo": "" },
          "4 Kokutai": { "type": "G4M", "loc": "NG", "hp": 2, "moveTo": "" },
          "751 Kokutai": { "type": "G4M", "loc": "RE", "hp": 2, "moveTo": "" },
          "753 Kokutai": { "type": "G4M", "loc": "RE", "hp": 2, "moveTo": "" },
          "Misawa Kokutai": { "type": "G4M", "loc": "RE", "hp": 2, "moveTo": "" },
          "Takao Kokutai": { "type": "G4M", "loc": "RE", "hp": 2, "moveTo": "" },
          "1 Kokutai": { "type": "A6M-G4M", "loc": "ML", "hp": 2, "moveTo": "" },
          "Kanoya Kokutai": { "type": "A6M-G4M", "loc": "PH", "hp": 2, "moveTo": "" },
          "Genzan Kokutai": { "type": "A6M-G3M", "loc": "PH", "hp": 2, "moveTo": "" }
        }
      },
      "land": {
        "units": {
          "2-INF": { "cost": 3, "attack": [5, 3], "loc": "EA", "hp": 2, "moveTo": "" },
          "38-INF": { "cost": 2, "attack": [4, 2], "loc": "EA", "hp": 2, "moveTo": "" },
          "48-INF": { "cost": 3, "attack": [5, 3], "loc": "EA", "hp": 2, "moveTo": "" },
          "6TH-INF": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
          "7TH-INF": { "cost": 2, "attack": [4, 2], "loc": "RE", "hp": 2, "moveTo": "" },
          "16TH-INF": { "cost": 3, "attack": [5, 3], "loc": "PH", "hp": 2, "moveTo": "" },
          "20TH-INF": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
          "35TH-INF": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
          "51ST-INF": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
          "55TH-INF": { "cost": 2, "attack": [4, 2], "loc": "NG", "hp": 2, "moveTo": "" },
          "6TH-BASE": { "cost": 0, "attack": [2, 1], "loc": "ML", "hp": 2, "moveTo": "" },

          "BN-1": { "cost": 2, "attack": [1, 0], "loc": "MA", "hp": 2, "moveTo": "" },
          "BN-2": { "cost": 2, "attack": [1, 0], "loc": "IJ", "hp": 2, "moveTo": "" },
          "BN-3": { "cost": 2, "attack": [1, 0], "loc": "OK", "hp": 2, "moveTo": "" },
          "BN-4": { "cost": 2, "attack": [1, 0], "loc": "BO", "hp": 2, "moveTo": "" },
          "BN-5": { "cost": 2, "attack": [1, 0], "loc": "GI", "hp": 2, "moveTo": "" },
          "BN-6": { "cost": 2, "attack": [1, 0], "loc": "WI", "hp": 2, "moveTo": "" },
          "BN-7": { "cost": 2, "attack": [1, 0], "loc": "CI", "hp": 2, "moveTo": "" },
          "BN-8": { "cost": 2, "attack": [1, 0], "loc": "JP", "hp": 2, "moveTo": "" },
          "BN-9": { "cost": 2, "attack": [1, 0], "loc": "JP", "hp": 2, "moveTo": "" }
        }
      },
      "ships": {
        "units": {
          "SS1": { "type": "SS", "loc": "--", "hp": 2, "moveTo": "" },
          "SS2": { "type": "SS", "loc": "--", "hp": 2, "moveTo": "" },
          "SS3": { "type": "SS", "loc": "--", "hp": 2, "moveTo": "" },
          "DD1": { "type": "DD", "loc": "--", "hp": 2, "moveTo": "" },
          "DD2": { "type": "DD", "loc": "--", "hp": 2, "moveTo": "" },
          "DD3": { "type": "DD", "loc": "--", "hp": 2, "moveTo": "" },
          "DD4": { "type": "DD", "loc": "--", "hp": 2, "moveTo": "" },
          "DD5": { "type": "DD", "loc": "--", "hp": 2, "moveTo": "" },
          "DD6": { "type": "DD", "loc": "--", "hp": 2, "moveTo": "" },
          "DD7": { "type": "DD", "loc": "--", "hp": 2, "moveTo": "" },
          "AOBA-KINUGASA": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "ASHIGARA-NASHI": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "FURUTAKA-KAKO": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "MAYA-ATAGO": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "MAGOMI-MIKUMA": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "MYOKO-HAGURO": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "SUZUYA-KUMANO": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "TAKAO-CHOKAI": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "TONE-CHIKUMA": { "type": "CG", "loc": "--", "hp": 2, "moveTo": "" },
          "YAMATO-MUSASHI": { "type": "BB-YAMATO", "loc": "--", "hp": 2, "moveTo": "" },
          "NAGATO-MUTSU": { "type": "BB-NAGATO", "loc": "--", "hp": 2, "moveTo": "" },
          "KONGO-HARUNA": { "type": "BB-KONGO", "loc": "--", "hp": 2, "moveTo": "" },
          "HIEI-KIRISHIMA": { "type": "BB-KONGO", "loc": "--", "hp": 2, "moveTo": "" },
          "FUSO-YAMASHIRO": { "type": "BB-FUSO", "loc": "--", "hp": 2, "moveTo": "" },
          "ISE-HYUGA": { "type": "BB-FUSO", "loc": "--", "hp": 2, "moveTo": "" },
          "AKAGI": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "KAGA": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "SORYU": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "HIRYU": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "SHOKAKU": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "ZUIKAKU": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "HIYO": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "JUNYO": { "type": "CV", "loc": "--", "hp": 2, "moveTo": "" },
          "HOSHO": { "type": "CVL", "loc": "--", "hp": 2, "moveTo": "" },
          "RYUJO": { "type": "CVL", "loc": "--", "hp": 2, "moveTo": "" },
          "SHOHO": { "type": "CVL", "loc": "--", "hp": 2, "moveTo": "" },
          "ZUIHO": { "type": "CVL", "loc": "--", "hp": 2, "moveTo": "" },
          "CHUYO": { "type": "CVE", "loc": "--", "hp": 2, "moveTo": "" },
          "RYUHO": { "type": "CVE", "loc": "--", "hp": 2, "moveTo": "" },
          "UNYO": { "type": "CVE", "loc": "--", "hp": 2, "moveTo": "" },
          "TAIYO": { "type": "CVE", "loc": "--", "hp": 2, "moveTo": "" }             
        },
        "class": {
          "SS": { "cost": 2, "aa": null, "aship": [3, 2], "asw": [1, 1], "type": "Sub" },
          "DD": { "cost": 2, "aa": [2, 1], "aship": [3, 2], "asw": [1, 1], "type": "Surf" },
          "CG": { "cost": 2, "aa": [2, 1], "aship": [4, 2], "asw": [1, 1], "type": "Surf" },
          "BB-YAMATO": { "cost": 4, "aa": [3, 2], "aship": [7, 4], "asw": [2, 1], "type": "Surf" },
          "BB-NAGATO": { "cost": 3, "aa": [2, 1], "aship": [6, 3], "asw": [1, 1], "type": "Surf" },
          "BB-KONGO": {"cost": 3, "aa": [3, 2], "aship": [5, 3], "asw": [1, 1], "type": "Surf" },
          "BB-FUSO": {"cost": 3, "aa": [2, 1], "aship": [5, 3], "asw": [1, 1], "type": "Surf" },
          "CV": { "cost": 1, "aa": [4, 2], "saa": [2, 1], "aship": null, "asw": [2, 1], "type": "Carrier" },
          "CVL": { "cost": 1, "aa": [2, 1], "saa": [1, 0], "aship": null, "asw": [1, 1], "type": "Carrier" },
          "CVE": { "cost": 1, "aa": [2, 1], "saa": [1, 0], "aship": null, "asw": [1, 1], "type": "Carrier" }
        }
      }
    },
    "US": {
      "air": {
        "types": {
          "F4F": { "cost": 1, "aa": [5, 3], "saa": [3, 2], "aship": [1, 1], "asurf": [2, 1] },
          "SBD": { "cost": 2, "aa": null, "saa": null, "aship": [4, 2], "asurf": [3, 2] },
          "TBD": { "cost": 1, "aa": null, "saa": null, "aship": [3, 2], "asurf": [2, 1] },
          "P39": { "cost": 2, "aa": [3, 2], "saa": [2, 1], "aship": [1, 1], "asurf": [3, 2] },
          "P40": { "cost": 2, "aa": [5, 3], "saa": [3, 2], "aship": [1, 1], "asurf": [2, 1] },
          "B17": { "cost": 1, "aa": null, "saa": null, "aship": [1, 1], "asurf": [4, 2] },
          "B24": { "cost": 1, "aa": null, "saa": null, "aship": [1, 1], "asurf": [4, 2] },
          "B25": { "cost": 2, "aa": null, "saa": null, "aship": [3, 2], "asurf": [3, 2] },
          "B26": { "cost": 2, "aa": null, "saa": null, "aship": [3, 2], "asurf": [3, 2] },
          "ANSON": { "cost": 1, "aa": null, "saa": null, "aship": [1, 1], "asurf": [2, 1] },
          "BFIGHT": { "cost": 2, "aa": [3, 2], "saa": [2, 1], "aship": [3, 2], "asurf": [3, 2] },
          "F4F-SBD0": { "cost": 2, "aa": [5, 3], "saa": [3, 2], "aship": [4, 2], "asurf": [3, 2] },
          "F4F-SBD1": { "cost": 2, "aa": [3, 2], "saa": [2, 1], "aship": [4, 2], "asurf": [3, 2] },
          "F4F-SBD2": { "cost": 2, "aa": [3, 2], "saa": [2, 1], "aship": [3, 2], "asurf": [3, 2] }
        },
        "units": {
          "18-FG": { "type": "P39", "loc": "HI", "hp": 2, "moveTo": "" },
          "RAAF-FG": { "type": "P40", "loc": "NG", "hp": 2, "moveTo": "", "cost": 1, "au": true },
          "8-FG": { "type": "P40", "loc": "RE", "hp": 2, "moveTo": "" },
          "49-FG": { "type": "P40", "loc": "RE", "hp": 2, "moveTo": "" },
          "343-FG": { "type": "P40", "loc": "AK", "hp": 2, "moveTo": "" },
          "11-BG": { "type": "B17", "loc": "HI", "hp": 2, "moveTo": "" },
          "19-BG": { "type": "B17", "loc": "AU", "hp": 2, "moveTo": "" },
          "28-BG": { "type": "B17", "loc": "AK", "hp": 2, "moveTo": "" },
          "43-BG": { "type": "B17", "loc": "RE", "hp": 2, "moveTo": "" },
          "90-BG": { "type": "B24", "loc": "RE", "hp": 2, "moveTo": "" },
          "3-BG": { "type": "B25", "loc": "RE", "hp": 2, "moveTo": "" },
          "38-BG": { "type": "B25", "loc": "RE", "hp": 2, "moveTo": "" },
          "22-BG": { "type": "B26", "loc": "RE", "hp": 2, "moveTo": "" },
          "RAAF-BG1": { "type": "ANSON", "loc": "NG", "hp": 2, "moveTo": "", "au": true },
          "RAAF-BG2": { "type": "BFIGHT", "loc": "RE", "hp": 2, "moveTo": "", "au": true },
          "13-MAG": { "type": "F4F-SBD0", "loc": "SA", "hp": 2, "moveTo": "" },
          "21-MAG": { "type": "F4F-SBD0", "loc": "HI", "hp": 2, "moveTo": "" },
          "23-MAG": { "type": "F4F-SBD1", "loc": "RE", "hp": 2, "moveTo": "" },
          "22-MAG": { "type": "F4F-SBD2", "loc": "MI", "hp": 2, "moveTo": "" }
        }
      },
      "land": {
        "units": {
          "1AU-INF": { "cost": 1, "attack": [4, 2], "loc": "RE", "au": true, "hp": 2, "moveTo": "" },
            "AMERICAN-INF": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
            "USAFFE": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
            "25-INF": { "cost": 1, "attack": [3, 2], "loc": "HI", "hp": 2, "moveTo": "" },
            "32-INF": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
            "43-INF": { "cost": 1, "attack": [3, 2], "loc": "RE", "hp": 2, "moveTo": "" },
            "1-MARINE": { "cost": 2, "attack": [5, 3], "loc": "RE", "marine": true, "hp": 2, "moveTo": "" },
            "2-MARINE": { "cost": 2, "attack": [5, 3], "loc": "RE", "marine": true, "hp": 2, "moveTo": "" },

            "BN-1": { "cost": 2, "attack": [1, 0], "loc": "NC", "marine": true, "hp": 2, "moveTo": "" },
            "BN-2": { "cost": 2, "attack": [1, 0], "loc": "BO", "marine": true, "hp": 2, "moveTo": "" },
            "BN-3": { "cost": 2, "attack": [1, 0], "loc": "SI", "marine": true, "hp": 2, "moveTo": "" },
            "BN-4": { "cost": 2, "attack": [1, 0], "loc": "WC", "marine": true, "hp": 2, "moveTo": "" },
            "BN-5": { "cost": 2, "attack": [1, 0], "loc": "WC", "marine": true, "hp": 2, "moveTo": "" }
        }
      },
      "ships": {
        "class": {
          "SS": { "cost": 2, "aa": null, "aship": [2, 1], "asw": [1, 1], "type": "Sub" },
          "DD": { "cost": 2, "aa": [3, 2], "aship": [2, 1], "asw": [3, 2], "type": "Surf" },
          "CY-YORKTOWN": { "cost": 5, "priorityCost": 1, "aa": [4, 2], "saa": [2, 1], "aship": null, "asw": [2, 1], "type": "Carrier" },
          "CV-WASP": { "cost": 5, "priorityCost": 1, "aa": [2, 1], "saa": [1, 0], "aship": null, "asw": [2, 1], "type": "Carrier" },
          "CV-LEXINGTON": { "cost": 5, "priorityCost": 1, "aa": [2, 1], "saa": [1, 0], "aship": null, "asw": [2, 1], "type": "Carrier" },
          "BB-NCAROLINA": { "cost": 4, "aa": [4, 2], "aship": [6, 3], "asw": [2, 1], "type": "Surf" },
          "BB-SDAKOTA": { "cost": 4, "aa": [4, 2], "aship": [6, 3], "asw": [2, 1], "type": "Surf" },
          "BB-COLORADO": { "cost": 3, "aa": [3, 2], "aship": [4, 2], "asw": [2, 1], "type": "Surf" },
          "BB-NEWMEXICO": { "cost": 3, "aa": [3, 2], "aship": [4, 2], "asw": [2, 1], "type": "Surf" },
          "CG-BROOKLYN": { "cost": 2, "aa": [3, 2], "aship": [3, 2], "asw": [2, 1], "type": "Surf" },
          "CG-NORTHAMPTON": { "cost": 2, "aa": [2, 1], "aship": [4, 2], "asw": [2, 1], "type": "Surf" },
          "CG-PENSACOLA": { "cost": 2, "aa": [2, 1], "aship": [4, 2], "asw": [2, 1], "type": "Surf" },
          "CG-PORTLAND": { "cost": 2, "aa": [2, 1], "aship": [4, 2], "asw": [2, 1], "type": "Surf" },
          "CG-NEWORLEANS": { "cost": 2, "aa": [2, 1], "aship": [4, 2], "asw": [2, 1], "type": "Surf" },
          "CG-ABDA": { "cost": 2, "aa": [2, 1], "aship": [4, 2], "asw": [1, 1], "type": "Surf" }
        },
        "units": {
          "SS1": { "type": "SS", "loc": "HI", "hp": 2, "moveTo": "" },
          "SS2": { "type": "SS", "loc": "P1", "hp": 2, "moveTo": "" },
          "SS3": { "type": "SS", "loc": "AU", "hp": 2, "moveTo": "" },
          "SS4": { "type": "SS", "loc": "P1", "hp": 2, "moveTo": "" },
          "DD1": { "type": "DD", "loc": "HI", "hp": 2, "moveTo": "" },
          "DD2": { "type": "DD", "loc": "WC", "hp": 2, "moveTo": "" },
          "DD4": { "type": "DD", "loc": "P1", "hp": 2, "moveTo": "" },
          "DD6": { "type": "DD", "loc": "HI", "hp": 2, "moveTo": "" },
          "DD12": { "type": "DD", "loc": "P1", "hp": 2, "moveTo": "" },
          "YORKTOWN": { "type": "CV-YORKTOWN", "loc": "P1", "hp": 2, "moveTo": "" },
          "ENTERPRISE": { "type": "CV-YORKTOWN", "loc": "HI", "hp": 2, "moveTo": "" },
          "HORNET": { "type": "CV-YORKTOWN", "loc": "RE", "hp": 2, "moveTo": "" },
          "WASP": { "type": "CV-WASP", "loc": "RE", "hp": 2, "moveTo": "" },
          "LEXINGTON": { "type": "CV-LEXINGTON", "loc": "HI", "hp": 2, "moveTo": "" },
          "SARATOGA": { "type": "CV-LEXINGTON", "loc": "P1", "hp": 2, "moveTo": "" },
          "NCAROLINA-WASHINGTON": { "type": "BB-NCAROLINA", "loc": "RE", "hp": 2, "moveTo": "" },
          "SDAKOTA-INDIANA": { "type": "BB-SDAKOTA", "loc": "RE", "hp": 2, "moveTo": "" },
          "COLORADO-MARYLAND": { "type": "BB-COLORADO", "loc": "RE", "hp": 2, "moveTo": "" },
          "NEWMEXICO-MISSISIPI": { "type": "BB-NEWMEXICO", "loc": "RE", "hp": 2, "moveTo": "" },
          "HONOLULU-NASHVILLE": { "type": "CG-BROOKLYN", "loc": "HI", "hp": 2, "moveTo": "" },
          "PHOENIX-BOISE": { "type": "CG-BROOKLYN", "loc": "P1", "hp": 2, "moveTo": "" },
          "STLOUIS-HELENA": { "type": "CG-BROOKLYN", "loc": "P1", "hp": 2, "moveTo": "" },

          "CHESTER-LOUISVILLE": { "type": "CG-NORTHAMPTON", "loc": "HI", "hp": 2, "moveTo": "" },
          "CHICAGO-NORTHAMPTON": { "type": "CG-NORTHAMPTON", "loc": "HI", "hp": 2, "moveTo": "" },
          "PENSACOLA-SALTLAKECITY": { "type": "CG-PENSACOLA", "loc": "P1", "hp": 2, "moveTo": "" },
          "PORTLAND-INDIANAPOLIS": { "type": "CG-PORTLAND", "loc": "P1", "hp": 2, "moveTo": "" },
          "NEWORLEANS-MINNEAPOLIS": { "type": "CG-NEWORLEANS", "loc": "HI", "hp": 2, "moveTo": "" },
          "SANFRANCISCO-ASTORIA": { "type": "CG-NEWORLEANS", "loc": "HI", "hp": 2, "moveTo": "" },
          "VINCENNES-QUINCY": { "type": "CG-NEWORLEANS", "loc": "RE", "hp": 2, "moveTo": "" },
          "ABDA": { "type": "CG-ABDA", "loc": "AU", "hp": 2, "moveTo": "" }
        }
      }
    }
  },
  "1943": {
  },
  "1944": {
  },
  "1945": {
  }
}

// NOSONAR
// const forcesByArea = {
//   JA: {
//     HI: {
//       air: {
//         units: [], count: 0
//       },
//       land: {
//         units: [], count: 0
//       },
//       sea: {
//         units: [], count: 0
//       },
//       ashoreCount: 0
//     }  
//   }
// }

const forcesByArea = {
}

export const setForcesByArea = (year = '1942') => {
  forcesByArea['JA'] = { }
  forcesByArea['US'] = { }

  getAreaIdList().forEach((area) => {
    forcesByArea['JA'][area] = {
      air: { units: [], count: 0 },
      land: { units: [], count: 0 },
      sea: { units: [], count: 0 },
      ashoreCount: 0
    }  
    forcesByArea['US'][area] = {
      air: { units: [], count: 0 },
      land: { units: [], count: 0 },
      sea: { units: [], count: 0 },
      ashoreCount: 0
    }  
  })
  
  for (const side of forces) {
    const forcesSide = forces[year][side]
    for (const category of forcesSide) {
      const forcesSideCategory = forcesSide[category]
      for (const unit of forcesSideCategory.units) {

        // unit.moveTo = '' // reset unit to not moved

        const area = unit.loc
        if (area !== '--') { // not sunk/destroyed
          forcesByArea[side][area][categpry].units.push(unit)
          forcesByArea[side][area][categpry].count += 1
          if (category !== 'sea') { // not ship
            forcesByArea[side][area].ashoreCount += 1
          }
        }
      }
    }
  }
}

export const Scouting (year = '1942') => {
  getAreaIdList().forEach((area) => {
    if (forcesByArea.JA[area].ashoreCount === 1) { // if only 1 JA Ashore, set it as moved
      const category = (forcesByArea.JA[area]['air'].count === 1) ? 'air' : 'land'
      const unitId = forcesByArea.JA[area]['air'].units[0]
      const unit = forces[year][side]['air'].units[unitId]
      unit.moveTo = unit.loc
    }
  })
} 

export const iterateForces = (year = '1942', action = null) => {
  for (const side of forces) {
    const forcesSide = forces[year][side]
    for (const category of forcesSide) {
      const forcesSideCategory = forcesSide[category]
      for (const unit of forcesSideCategory.units) {
        unit.moveTo = '' // reset unit to not moved
      }
    }
  }
}

// setForcesByArea
