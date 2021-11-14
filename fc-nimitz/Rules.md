# Fleet Commander Nimitz - 3rd Edition

## Setup

Setup forces based on the starting year setup sheet 

## Campaign

- Each campaign is 1 year
- There are 6 Campaign Turns in a campaign

## Campaign Turns

- Advance Turn Counter
- US Resupply
- US Scouting
  - JA Scouted Orders
- Movement
  - US Movement
  - JA Orders
- Resolve Battles*
- JA Reinforce
- JA Repair
- US Return To Port
- US Supply Check
- US Defeat Check

## Resolve Battle

### Setup
- Move US Forces To Battle Map
- Move JA Forces To Battle Map

### Each Turn
- Draw JA Battle Plans
- Move US Aircrsft
- Move JA Bombers
- Move JS Fighters
- Combat
  - Dogfight
  - AAA
  - Bomb Runs
  - Torpedoes
  - Depth Charges
  - Naval Guns
  - Infantry
- Infantry Advance
- Return Aircraft
  - Inflict Airfield Losses
- Advance Battle Turn Counter

---

# Campaign Turn

## Turn Setting

1. Reset all moved status on JA Forces

## US Resupply

1. Add US Supply Points based on year
2. Use Supply Points
- purchase forces (from reinforcements???):
  - cost of force
- repair Damage:
  - half cost of force, round down, minimum 1
- scouting (purchase for scounting):
  - 1pt per JA order scouted
- battle plans (purchase later in battles):
  - 1pt per 3BPP

## US Scouting

1. Set lone JA land/air unit in an area to moved
  - these units cannot move in the turn
  - you cannot scout for those land/air units in that area
  - you can scout for ships in that area
  - JA and EA areas are exempt
2. Allocate scouting points on any area with JA Forces
3. Once all points are allocated, roll a JA order for each scouting point
4. For each order rolled, do not move resupply count

## US Movement

- Can move to any area except JA and EA
- US LBA can only move to area that started movement step with US Infantry or US LBA already in that area
- Cannot place more US LBA on an area than the number designated for airfield that area (WC, HI, AU can have unlimited US LBA)
- JA LBA has no limitations on number on airfield
- If US Infantry is moved to an area, place it on a transport to differentiate from those already Ashore in the area
- You need not purchase transport
- You can move US Submarines (SS) to Raid. Each Submarine reduce JA reinforcement roll by 3 
- Australian Forces can only move to areas with australian flag (au = true) 

## JA Orders

Cannot move to WC or AU

1. set JA resupply counter to 0 // resupplyJA
- Start from area with fewest JA Forces to most
- DO not roll for
  - lone LBA or INF
  - INF in area with US Forces
- The first order to Forces in an Objective is always a Hold order
- If multiple areas qualify, move to area with fewest JA forces. Count all the JA Forces present at the time of the roll. This includes Forces that have not yet moved, as well as Forces that have already moved. If still deadlocked randomly determine the Area.
* if no JA Forces Ashore, Move the aircraft to JA


// at least one unit LBA or INF in an area
const hasAshoreCheck(year, side, area) { // TBD
  forces['air'][side][year]
}

// count forces per area and order them in ascending order of count per area, followed by ascending order of area id
const countJAForces(year) {
  const areaForceCount = { }

  for (forceType in forces) {
    const { units } = forceType['JA'][year]
    for (unit in units) {
      if ()
    }
  }
}

const rollDie = (sides = 10) => Math.ceil(Math.random() * sides)
const rollDice = (dice = [10]) => dice.reduce((acc, val) => acc += rollDie(val), 0)

**Scouted Order Roll**

- 2d10 + modifier
- do not adjust the Japanese resupply counter

const scoutedOrderModifier = (year) => {
  const mod = {
    "1942": 2,
    "1943": 0,
    "1944": -2,
    "1945": -3
  }
  return mod[year]
}

const scoutedOrder = rollDice([10, 10]) + scoutedOrderModifier(currentYear)

**Non-Scouting Roll**

// 0 <= resupplyJA <= 15
const orderModifier = (year, resupplyJA) => {
  let band = 0
  const mod = {
    "1942": [0, 2, 5, 10],
    "1943": [1, 2, 4, 8],
    "1944": [5, 5, 6, 6],
    "1945": [5, 6, 6, 6]
  }
  if (resupplyJA <= 3) {
    band = 0
  } else if (resupplyJA <= 7) {
    band = 1
  } else if (resupplyJA <= 11) {
    band = 2
  } else {
    band = 3
  }
  return mod[year][band]
}

const order = rollDice([10]) + scoutedOrderModifier(currentYear, currentResupplyJA) // 1d10 + modifier

NOTE: SHIPS/INF/LBA/Resupply Point Adjustment

3 or less: Hold
- No movement
- 6 / 1 / 3 / 4

4-7: Refit
- if forces in JA ? Hold Order : move to JA
- 3 / 1 / 3 / 2

8-10: Withdraw
- if forces in JA ? Hold Order : move one area closer to JA
- 2 / 1 / 2* / 1

11: Support
- if forces in (JA || EA) ? Hold Order : Move to area with  JA Forces Ashore
- if the destination Area has at least 1 JA INF or LBA Ashore, they also move up to 1 LBA, if it does not, move the 1 LBA to JA ???
- 3 / 1 / 2 / 1

12: South
- Move 1 Area closer to AU. If destination Area has at least 1 JA INF or LBA Ashore, they also move up to 2 LBA.
- The Forces cannot perform this Order if they are already adjacent to AU. If the no Forces Move, the Area instead performs an `East` Order.
- 3 / 1 / 2* / 0

13: East
- one area closer to HI that has JA Forces Ashore if not:
  - 1-5: Sortie, 6-7: Alaska, 8-10: Offensive
- 4 / 1 / 2 / 0

14: Battle
- Move to an Area that has both US and JA Forces. If the destination Area has at least 1 JA INF or LBA Ashore, they also move up to 2 LAB, if it does not, move the 2 Aircraft to JA
- Ignore Areas where Submarines are the only US Forces present.
- if not possible: Hold
- 4 / 1 / 2* / 0

15-16: Reinforce
- Move to Objective that has at least 1 JA INF or LBA Ashore
- if not possible: South
- 4 / 1 / 3 / 0

17-18: Sortie
- move to an Area with both US and JA Forces Ashore
- if not possible: Offensive
- 5 / 2 / 2 / -4

19 and greater: Offensive
- Closest Objective with no JA Forces Ashore and adjacent to Area  with JA Forces Ashore
- if not possible: Battle
- 7 / 3 / 0 / -8

If all not possible... then HOLD

When JA Forces are Moving to an Area with US Forces they may not always be able to take the maximum number of INF specified by the Order. If the JA Move fewer INF than are called for by the Order, take 1 JA Battalion from the Battalion area on the Map for each INF that was not available to move

---

# Campaign Turn BATTLE

Mark battle location

## Move US Forces To Battle Map

Areas
- Japanese Ocean
- Coastal
- Island
- US Ocean

- Once placed, Ships cannot move during the Battle.
- Place all US Aircraft Carriers in the US Ocean. This is the only place a US Aircraft Carrier can be placed.
- You may place the other US Ships in either the US Ocean or Coastal Area as you see fit.
- US Submarines can be placed in any Area with Japanese Ships. If there are no Japanese Ships present, the Submarines do not take part in the battle.
- Place Land-Based Aircraft on the US Island Airfields. Place a value of Airfield counters on the Island equal to the number of US Land-Based Aircraft counters.

- If US Infantry are already on the Island, place them on the US Foxholes.
- Place Transport Ships carrying US Infantry in the Coastal Area. You can place more than 1 Infantry counter on a Transport.
- Place the Carrier-Based Aircraft counters assigned to each Carrier next to their Carriers. If you run out of counters, use other counters as stand-ins. The counter mix does not limit game play. (Find the Carrier Aircraft types on the Campaign Sheet)


## Move Japanese Forces

- Place Land-Based Aircraft on the Japanese Island Airfield.
- Place a value of Airfield counters on the Island equal to the number of Japanese Land-Based Aircraft counters.
- If Japanese Infantry are already on the Island, place them on the Japanese Foxholes.
- Place Transport Ships carrying Japanese Infantry in the Coastal Area. You can place more than 1 Infantry counter on a Transport

 
- Japanese Ship Placement (Carriers and Island Forces)
  - Use this rule section if there are Japanese Aircraft Carriers present, and at least one of the following:
    1) There are Japanese Infantry on Transports
    2) There are Japanese Infantry Ashore
    3) There are Land-Based Aircraft from either Japan or the US on the Island.
  - Place all Japanese Aircraft Carriers (CVs, CVLs, and CVEs) in the Japanese Ocean Area.
  - Step #1 - Place 1 Japanese Escort (BB, CRU, or DD) with the lowest Surface Attack value in the Japanese Ocean Area.
  - Step #2 - Place 1 Japanese Escort with the highest Surface Attack value in the Coastal Area.
  - Repeat the 2 steps until there are a number of Escorts in the Japanese Ocean equal to the number of Aircraft Carriers, then place all remaining Escorts in the Coastal Area.
- Japanese Ship Placement (Aircraft Carriers)
  - If there are Japanese Aircraft Carriers present, but no Japanese Infantry on Transports, Japanese Infantry Ashore, or Land-Based Aircraft from either nation on the Island,
  - place all Japanese Ships in the Ocean area.
- Japanese Ship Placement (Island Forces)
  - If there are no Japanese Aircraft Carriers present, place all Japanese Ships in the Coastal Area
- Japanese Submarine Placement:
  - Use these rules if there are Japanese Submarines present.
    - If there are US Aircraft Carriers, place all the Japanese Submarines in the US Ocean Area.
    - If there are no US Aircraft Carriers, but there are US Ships in the Coastal Area, place all the Japanese Submarines in the Coastal Area.
    - If there are no US Aircraft Carriers, and no US Ships in the Coastal Area, place all the Japanese Submarines in the Japanese Ocean Area.
- Carrier Aircraft Placement (same as US)

## Number of battle turn

1d10 to determine
- 1-2 = 1
- 3-5 = 2
- 6-8 = 3
- 9-10 = 4
minimum 1 turn

## Number of Japanese Battle Plans Per Battle Turn

based on number of Japanese Forces excluding transports and carrier based aircraft
- 1-4 = 1
- 5-9 = 2
- 10-16 = 3
- >16 = 4

Do not decrease number of plans per battle turn as Japanese incur losses

## Select US Plans for the Battle

- 3BPPs + 3BPPS/Supply Point
- Choose plans (see cost of each plan on the plan)
- A plan can be used only ONCE per BATTLE


## COMBAT FOR EACH TURN

### Draw Japanese Battle Plan

- randomly draw a number of plans as determined earlier (there are duploicate)
- if a duplicate is drawn, discard and draw a replacement

### Move US Aircraft

- Move to any area on the battle sheet

### Move Japanese Aircraft

Carrier Bombers = 1 group
LBA Bombers = 1 group
Carrier Fighters = 1 group
LBA Fighters = 1 group
Fighters = only have dogfight rating

#### Japanese Bomber
Roll 1d10 for each bomber group
JA Ocean: roll 1-2
Island: roll 3-5
- JA airfields
- JA foxholes
- JA beaches
- US airfields
- US foxholes
- US beaches
Coastal: roll 6
US Ocean: roll 7-10

If Area does not have US target, move to next higher numbered area
If not move to the lower numbered area

If no legal areas to move to remain on aircraft carrier/airfield
- e.g. if all US aircraft and Japanese bombers destroyed, Japanese fighters remain

#### Japanese Fighter

Move to an Area with Japanese Aircraft or US Aircraft (roll dice to choose for each group?)

### Allocating Hits (for both US and Japanese)

- Apply all Hits to the lowest cost Force in the Area you are attacking. When allocating Hits to Japanese Forces, apply a second Hit to Destroy one Force before allocating a Hit to Damage a new Force.
- You may allocate Hits to your US Forces any way you like in order from lowest to highest value.
  - inflict damage on lowest value, then destruction on lowest value, then move on to damage the next highest value
- Continue allocating Hits until no Hits remain to be allocated, or until no Forces that are allowed to suffer the Hits remain in the Area

* Each Hit inflicted on a Transport inflicts 2 Hits on the Infantry counters it is carrying.

### Dogfight

Each side dogfigting unit rolls to determine hits on Aircraft Forces

### AAA

- Escorts 1 row
- Carriers 1 row
- Each aircraft can only be attacked by AAA once from each row (if more ships than aircraft)
- Island and INF does not attack with AAA

### Bomb Runs

- attack ships (blue) or attack INF/AF (brown)

### Torpedoes

- submarines attack ships

### Depth Charges

- ships and subs attack other submarines
- each sub can only be attacked once

### Naval Guns

- ships in Coastal area can attack ships or INF

### Infantry

- attack INF or AF
- only forces in Foxholes can attack
- only INF ashore (and in foxholes???) and AF can be attacked

- When Infantry inflict Hits, apply the Hits as normal, except do not apply the Hits against opposing Airfields if there are opposing Infantry in Foxholes. Apply the Hits against the Infantry in Foxholes.
- Aircraft and Ships can only target Infantry if there are friendly Land-Based Aircraft or Infantry already Ashore

### Infantry Advance
- Move Infantry on the Beach to the Foxholes.
- Move Infantry on a Transport to the Island Beach.
- Move Marines directly from Transports to Foxholes

### Return Aircraft
 - Return Land-Based Aircraft to their Island Airfields
 - Return Carrier Aircraft to their Aircraft Carriers
 - You can only place the number of Aircraft on an Aircraft Carrier equal to the original number of Aircraft the Aircraft Carrier held. (does type count???)
 - You cannot place Carrier Aircraft counters on a Damaged Aircraft Carrier.
 - When Aircraft Carriers are sunk or Damaged, there may not be enough space on the remaining Aircraft Carriers to land all the returning Carrier Aircraft

 - If there are too many Carrier Aircraft to land on Japanese Aircraft Carriers, Destroy the Carrier Aircraft one at a time until all the remaining Aircraft can land.
 - Destroy Damaged Aircraft in order from lowest value to highest value.
 - Destroy full strength Aircraft in order from lowest value to highest value
- If US Aircraft Carriers are Damaged or Destroyed, you are free to choose which US Carrier-Based Aircraft to land and which to Destroy

### Inflict Airfield Losses

- Compare the number of US Land-Based Aircraft counters to the number of US Airfields. If there are more Aircraft than Airfields, Destroy Aircraft
until the number of Aircraft equals the number of Airfields.
- Do the same for the Japanese Land-Based Aircraft and Airfields
- Remove all of the US/Japanese Airfields if the US/Japan no longer have Land-Based Aircraft on the Island

Japanese Airfield Losses
- First, Destroy Damaged Aircraft in order from lowest value to highest value.
- Then, Destroy full strength Aircraft in order from lowest value to highest value.
- Move all Destroyed Japanese Aircraft to the Japanese Reinforcements Land-Based Aircraft area of the map.

US Airfield Losses
- You are free to allocate Airfield Hits to your Land-Based Aircraft however you want.
- Move all Destroyed US Aircraft to the US Reinforcements Land-Based Aircraft area of the map.


### Advance Battle Turn Calculator

- Battle ends if Battle Sheet only contains Japanese or US Forces, or when you move the Battle Turn Counter off the Track.
- Return all the remaining Forces to the Area on the Map where they came from. The Area should be marked by the Battle Location counter.
- Return all Destroyed Japanese Battalions to the Battalion box of the Map. Re-use them as needed

---

# Campaign Turn POST BATTLE

## JA Reinforces

- roll 1d10
- Add 1 per resupply order
- Subtract 1 for each Damaged Japanese Force currently on the Map. Do not subtract 1 for Damaged INF that are in the same Area as US Forces.
- Subtract 3 for each Submarine you placed in the Raiding box on the Map during the US Movement step
- reset resupply order to 0 after roll

- units are placed in reinforcement box
- if unit not available, substitude each unavailable with 2 battalions

## Japanese Repair

- Move any Damaged Japanese counters to the Reinforcement box for that type of Force.
- When you move the Force, flip it to its Full side. That Force can now be drawn as an upcoming Reinforcement counter.
- Do not move Damaged Japanese INF that are in Areas with US Forces. Do not move the last Japanese INF or LBA from an Area, even if it is Damaged.

## US Return To Port

- australian ships return to port in AU
- US
  - 1942 to Hawaii
  - 1943 to 1942 (43, 44, 45 games)
  - 1944/45 to 1943 (44, 45 games)
  - move from areas to the last used box (e.g. 1944/45 in 44, 45 games)

## US Supply Check

- if Area not in supply, inflict 1 hit for each INF and LBA

### In supply

- trace an uninterrupted path of US Held Areas starting from the US West Coast and leading up to the Area

### holding an Area

- has INF or LBA && no enemy INF or LBA && is In supply

## Defeat Check

- see Campaign Evaluation Table if Defeated
- if Hawaii is not Held by US. Defeated


---

## Abbreviations

MA = Mariana Islands... (to deconflict)
JA = Japan / Japanese
AF = Airfield
LBA = land based air
CAG = carrier air group
INF = infantry unit or battalion
side = JA, US or contested
area = a location
Objective = an objective area/location


## Clarifications

3 force types
- INF
- LBA
- Ships

excludes Transport & Carrier Based Air
each counter (damaged or not) counts as 1 unit for force count


## Others - not important for now

hit points = 2
location = XX
moved = false

