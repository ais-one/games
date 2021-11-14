export const game = {
  "year": ["1942", "1943", "1944", "1945"],
  "turn": ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"],
  "side": ["JA", "US", "Contested"],
  "CAG": {
    "1942": {
      "JA": {
        "CV": ["A6M", "D3A", "B5N"],
        "CVL": ["A6M", "D3A"],
        "CVE": ["D3A"]
      },
      "US": {
        "CV": ["F4F", "SBD", "SBD", "TBD"]
      },
      "supplyPerCampaignTurnUS": 21,
      "objectives": ["AK", "HI", "MI", "GI", "SA", "SI", "NG", "NC"],
      "evaluation": [8, 7 ,5, 4]
    },
    "1943": {
      "JA": {
        "CV": ["A6M", "D3A", "B5N"],
        "CVL": ["A6M", "D3A"],
        "CVE": ["D3A"]
      },
      "US": {
        "CV6": ["F6F", "F6F", "SBD", "SBD", "TBF"],
        "CV5": ["F6F", "SBD", "SBD", "TBF"],
        "CVL": ["F6F", "SBD", "TBF"],
        "CVE": ["F6F", "SBD"]
      },
      "supplyPerCampaignTurnUS": 23,
      "objectives": ["AK", "HI", "MI", "GI", "SA", "SI", "NG", "NC", "ML", "WI"],
      "evaluation": [10, 8, 6, 5, 4]
    },
    "1944": {
      "JA": {
        "CV": ["A6M", "D3A", "B5N"],
        "CVL": ["A6M", "D3A"],
        "CVE": ["D3A"]
      },
      "US": {
        "CV6": ["F6F", "F6F", "SB2C", "SB2C", "TBF"],
        "CV5": ["F6F", "SB2C", "SB2C", "TBF"],
        "CVL": ["F6F", "SB2C", "TBF"],
        "CVE": ["F6F", "SB2C"]
      },
      "supplyPerCampaignTurnUS": 27,
      "objectives": ["AK", "HI", "MI", "GI", "MA", "SA", "SI", "PH", "NG", "NC", "ML", "WI", "BO", "IJ"],
      "evaluation": [14, 12, 9, 7, 6]
    },
    "1945": {
      "JA": {
        "CV": ["A6M", "D3A", "B5N"],
        "CVL": ["A6M", "D3A"],
        "CVE": ["D3A"]
      },
      "US": {
        "CV6": ["F6F", "F6F", "SB2C", "SB2C", "TBF"],
        "CV5": ["F6F", "SB2C", "SB2C", "TBF"],
        "CVL": ["F6F", "SB2C", "TBF"],
        "CVE": ["F6F", "SB2C"]
      },
      "supplyPerCampaignTurnUS": 36,
      "objectives": ["AK", "HI", "MI", "GI", "MA", "SA", "SI", "PH", "NG", "NC", "ML", "WI", "BO", "IJ", "CI", "OK"],
      "evaluation": [19, 18, 15, 7, 6]
    }
  },
  "campaignPhases": ["US Resupply", "US Scouting", "US Movement", "Japanese Orders", "Resolve Battles"],
  "battlePhases": [],

  "currentYear": "1942",
  "currentTurn": "Jan-Feb",
  "currentCampaignPhase": "US Resupply",
  "currentSupplyUS": 0,

  "currentResupplyJA": 0
}