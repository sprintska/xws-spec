// Generated by CoffeeScript 1.8.0
(function() {
  var $exp, _base, _base1, _validateSquadron_pilot, _validateSquadron_upgrades,
    __hasProp = {}.hasOwnProperty;

  if ((_base = typeof exports !== "undefined" && exports !== null ? exports : this).xws == null) {
    _base.xws = {};
  }

  (typeof exports !== "undefined" && exports !== null ? exports : this).xws.pilot_faction2ship2pilot2obj_dict = {
    "rebels": {
      "name": "Rebel Alliance",
      "ships": {
        "xwing": {
          "name": "X-Wing",
          "pilots": {
            "wedgeantilles": {
              "name": "Wedge Antilles",
              "points": 29
            },
            "garvendreis": {
              "name": "Garven Dreis",
              "points": 26
            },
            "redsquadronpilot": {
              "name": "Red Squadron Pilot",
              "points": 23
            },
            "rookiepilot": {
              "name": "Rookie Pilot",
              "points": 21
            },
            "biggsdarklighter": {
              "name": "Biggs Darklighter",
              "points": 25
            },
            "lukeskywalker": {
              "name": "Luke Skywalker",
              "points": 28
            },
            "wesjanson": {
              "name": "Wes Janson",
              "points": 29
            },
            "jekporkins": {
              "name": "Jek Porkins",
              "points": 26
            },
            "hobbieklivian": {
              "name": "\"Hobbie\" Klivian",
              "points": 25
            },
            "tarnmison": {
              "name": "Tarn Mison",
              "points": 23
            }
          }
        },
        "ywing": {
          "name": "Y-Wing",
          "pilots": {
            "graysquadronpilot": {
              "name": "Gray Squadron Pilot",
              "points": 20
            },
            "dutchvander": {
              "name": "\"Dutch\" Vander",
              "points": 23
            },
            "hortonsalm": {
              "name": "Horton Salm",
              "points": 25
            },
            "goldsquadronpilot": {
              "name": "Gold Squadron Pilot",
              "points": 18
            }
          }
        },
        "awing": {
          "name": "A-Wing",
          "pilots": {
            "tychocelchu": {
              "name": "Tycho Celchu",
              "points": 26
            },
            "arvelcrynyd": {
              "name": "Arvel Crynyd",
              "points": 23
            },
            "greensquadronpilot": {
              "name": "Green Squadron Pilot",
              "points": 19
            },
            "prototypepilot": {
              "name": "Prototype Pilot",
              "points": 17
            },
            "jakefarrell": {
              "name": "Jake Farrell",
              "points": 24
            },
            "gemmersojan": {
              "name": "Gemmer Sojan",
              "points": 22
            }
          }
        },
        "yt1300": {
          "name": "YT-1300",
          "pilots": {
            "outerrimsmuggler": {
              "name": "Outer Rim Smuggler",
              "points": 27
            },
            "chewbacca": {
              "name": "Chewbacca",
              "points": 42
            },
            "landocalrissian": {
              "name": "Lando Calrissian",
              "points": 44
            },
            "hansolo": {
              "name": "Han Solo",
              "points": 46
            }
          }
        },
        "bwing": {
          "name": "B-Wing",
          "pilots": {
            "tennumb": {
              "name": "Ten Numb",
              "points": 31
            },
            "ibtisam": {
              "name": "Ibtisam",
              "points": 28
            },
            "daggersquadronpilot": {
              "name": "Dagger Squadron Pilot",
              "points": 24
            },
            "bluesquadronpilot": {
              "name": "Blue Squadron Pilot",
              "points": 22
            },
            "keyanfarlander": {
              "name": "Keyan Farlander",
              "points": 29
            },
            "neradantels": {
              "name": "Nera Dantels",
              "points": 26
            }
          }
        },
        "hwk290": {
          "name": "HWK-290",
          "pilots": {
            "rebeloperative": {
              "name": "Rebel Operative",
              "points": 16
            },
            "roarkgarnet": {
              "name": "Roark Garnet",
              "points": 19
            },
            "kylekatarn": {
              "name": "Kyle Katarn",
              "points": 21
            },
            "janors": {
              "name": "Jan Ors",
              "points": 25
            }
          }
        },
        "gr75mediumtransport": {
          "name": "GR-75 Medium Transport",
          "pilots": {
            "gr75mediumtransport": {
              "name": "GR-75 Medium Transport",
              "points": 30
            }
          }
        },
        "z95headhunter": {
          "name": "Z-95 Headhunter",
          "pilots": {
            "banditsquadronpilot": {
              "name": "Bandit Squadron Pilot",
              "points": 12
            },
            "talasquadronpilot": {
              "name": "Tala Squadron Pilot",
              "points": 13
            },
            "lieutenantblount": {
              "name": "Lieutenant Blount",
              "points": 17
            },
            "airencracken": {
              "name": "Airen Cracken",
              "points": 19
            }
          }
        },
        "ewing": {
          "name": "E-Wing",
          "pilots": {
            "knavesquadronpilot": {
              "name": "Knave Squadron Pilot",
              "points": 27
            },
            "blackmoonsquadronpilot": {
              "name": "Blackmoon Squadron Pilot",
              "points": 29
            },
            "etahnabaht": {
              "name": "Etahn A'baht",
              "points": 32
            },
            "corranhorn": {
              "name": "Corran Horn",
              "points": 35
            }
          }
        },
        "cr90corvette": {
          "name": "CR90 Corvette",
          "pilots": {
            "cr90corvettefore": {
              "name": "CR90 Corvette (Fore)",
              "points": 50
            },
            "cr90corvetteaft": {
              "name": "CR90 Corvette (Aft)",
              "points": 40
            }
          }
        },
        "yt2400": {
          "name": "YT-2400",
          "pilots": {
            "wildspacefringer": {
              "name": "Wild Space Fringer",
              "points": 30
            },
            "eadenvrill": {
              "name": "Eaden Vrill",
              "points": 32
            },
            "leebo": {
              "name": "\"Leebo\"",
              "points": 34
            },
            "dashrendar": {
              "name": "Dash Rendar",
              "points": 36
            }
          }
        }
      }
    },
    "empire": {
      "name": "Galactic Empire",
      "ships": {
        "tiefighter": {
          "name": "TIE Fighter",
          "pilots": {
            "academypilot": {
              "name": "Academy Pilot",
              "points": 12
            },
            "obsidiansquadronpilot": {
              "name": "Obsidian Squadron Pilot",
              "points": 13
            },
            "blacksquadronpilot": {
              "name": "Black Squadron Pilot",
              "points": 14
            },
            "wingedgundark": {
              "name": "\"Winged Gundark\"",
              "points": 15
            },
            "nightbeast": {
              "name": "\"Night Beast\"",
              "points": 15
            },
            "backstabber": {
              "name": "\"Backstabber\"",
              "points": 16
            },
            "darkcurse": {
              "name": "\"Dark Curse\"",
              "points": 16
            },
            "maulermithel": {
              "name": "\"Mauler Mithel\"",
              "points": 17
            },
            "howlrunner": {
              "name": "\"Howlrunner\"",
              "points": 18
            }
          }
        },
        "tieadvanced": {
          "name": "TIE Advanced",
          "pilots": {
            "maarekstele": {
              "name": "Maarek Stele",
              "points": 27
            },
            "tempestsquadronpilot": {
              "name": "Tempest Squadron Pilot",
              "points": 21
            },
            "stormsquadronpilot": {
              "name": "Storm Squadron Pilot",
              "points": 23
            },
            "darthvader": {
              "name": "Darth Vader",
              "points": 29
            }
          }
        },
        "tieinterceptor": {
          "name": "TIE Interceptor",
          "pilots": {
            "alphasquadronpilot": {
              "name": "Alpha Squadron Pilot",
              "points": 18
            },
            "avengersquadronpilot": {
              "name": "Avenger Squadron Pilot",
              "points": 20
            },
            "sabersquadronpilot": {
              "name": "Saber Squadron Pilot",
              "points": 21
            },
            "felswrath": {
              "name": "\"Fel's Wrath\"",
              "points": 23
            },
            "turrphennir": {
              "name": "Turr Phennir",
              "points": 25
            },
            "soontirfel": {
              "name": "Soontir Fel",
              "points": 27
            },
            "lieutenantlorrir": {
              "name": "Lieutenant Lorrir",
              "points": 23
            },
            "royalguardpilot": {
              "name": "Royal Guard Pilot",
              "points": 22
            },
            "tetrancowall": {
              "name": "Tetran Cowall",
              "points": 24
            },
            "kirkanos": {
              "name": "Kir Kanos",
              "points": 24
            },
            "carnorjax": {
              "name": "Carnor Jax",
              "points": 26
            }
          }
        },
        "firespray31": {
          "name": "Firespray-31",
          "pilots": {
            "kathscarlet": {
              "name": "Kath Scarlet",
              "points": 38
            },
            "bobafett": {
              "name": "Boba Fett",
              "points": 39
            },
            "krassistrelix": {
              "name": "Krassis Trelix",
              "points": 36
            },
            "bountyhunter": {
              "name": "Bounty Hunter",
              "points": 33
            }
          }
        },
        "tiebomber": {
          "name": "TIE Bomber",
          "pilots": {
            "scimitarsquadronpilot": {
              "name": "Scimitar Squadron Pilot",
              "points": 16
            },
            "gammasquadronpilot": {
              "name": "Gamma Squadron Pilot",
              "points": 18
            },
            "captainjonus": {
              "name": "Captain Jonus",
              "points": 22
            },
            "majorrhymer": {
              "name": "Major Rhymer",
              "points": 26
            }
          }
        },
        "lambdaclassshuttle": {
          "name": "Lambda-Class Shuttle",
          "pilots": {
            "captainkagi": {
              "name": "Captain Kagi",
              "points": 27
            },
            "coloneljendon": {
              "name": "Colonel Jendon",
              "points": 26
            },
            "captainyorr": {
              "name": "Captain Yorr",
              "points": 24
            },
            "omicrongrouppilot": {
              "name": "Omicron Group Pilot",
              "points": 21
            }
          }
        },
        "tiedefender": {
          "name": "TIE Defender",
          "pilots": {
            "deltasquadronpilot": {
              "name": "Delta Squadron Pilot",
              "points": 30
            },
            "onyxsquadronpilot": {
              "name": "Onyx Squadron Pilot",
              "points": 32
            },
            "colonelvessery": {
              "name": "Colonel Vessery",
              "points": 35
            },
            "rexlerbrath": {
              "name": "Rexler Brath",
              "points": 37
            }
          }
        },
        "tiephantom": {
          "name": "TIE Phantom",
          "pilots": {
            "sigmasquadronpilot": {
              "name": "Sigma Squadron Pilot",
              "points": 25
            },
            "shadowsquadronpilot": {
              "name": "Shadow Squadron Pilot",
              "points": 27
            },
            "echo": {
              "name": "\"Echo\"",
              "points": 30
            },
            "whisper": {
              "name": "\"Whisper\"",
              "points": 32
            }
          }
        },
        "vt49decimator": {
          "name": "VT-49 Decimator",
          "pilots": {
            "patrolleader": {
              "name": "Patrol Leader",
              "points": 40
            },
            "captainoicunn": {
              "name": "Captain Oicunn",
              "points": 42
            },
            "commanderkenkirk": {
              "name": "Commander Kenkirk",
              "points": 44
            },
            "rearadmiralchiraneau": {
              "name": "Rear Admiral Chiraneau",
              "points": 46
            }
          }
        }
      }
    },
    "scum": {
      "name": "Scum and Villainy",
      "ships": {
        "starviper": {
          "name": "StarViper",
          "pilots": {
            "princexizor": {
              "name": "Prince Xizor",
              "points": 31
            }
          }
        },
        "m3ainterceptor": {
          "name": "M3-A Interceptor",
          "pilots": {
            "serissu": {
              "name": "Serissu",
              "points": 20
            }
          }
        },
        "aggressor": {
          "name": "Aggressor",
          "pilots": {
            "ig88d": {
              "name": "IG-88D",
              "points": 36
            }
          }
        },
        "z95headhunter": {
          "name": "Z-95 Headhunter",
          "pilots": {
            "unspoiledps7scumz95pilot": {
              "name": "Unspoiled PS7 Scum Z-95 Pilot",
              "points": 17
            }
          }
        },
        "firespray31": {
          "name": "Firespray-31",
          "pilots": {
            "bobafett": {
              "name": "Boba Fett",
              "points": 39
            }
          }
        }
      }
    }
  };

  if ((_base1 = typeof exports !== "undefined" && exports !== null ? exports : this).xws == null) {
    _base1.xws = {};
  }

  (typeof exports !== "undefined" && exports !== null ? exports : this).xws.upgrade_slot2key2obj_dict = {
    "turret": {
      "name": "Turret",
      "upgrades": {
        "ioncannonturret": {
          "name": "Ion Cannon Turret",
          "points": 5
        },
        "blasterturret": {
          "name": "Blaster Turret",
          "points": 4
        }
      }
    },
    "torpedo": {
      "name": "Torpedo",
      "upgrades": {
        "protontorpedoes": {
          "name": "Proton Torpedoes",
          "points": 4
        },
        "advancedprotontorpedoes": {
          "name": "Advanced Proton Torpedoes",
          "points": 6
        },
        "flechettetorpedoes": {
          "name": "Flechette Torpedoes",
          "points": 2
        },
        "iontorpedoes": {
          "name": "Ion Torpedoes",
          "points": 5
        }
      }
    },
    "amd": {
      "name": "Astromech Droid",
      "upgrades": {
        "r2astromech": {
          "name": "R2 Astromech",
          "points": 1
        },
        "r2d2": {
          "name": "R2-D2",
          "points": 4
        },
        "r2f2": {
          "name": "R2-F2",
          "points": 3
        },
        "r5d8": {
          "name": "R5-D8",
          "points": 3
        },
        "r5k6": {
          "name": "R5-K6",
          "points": 2
        },
        "r5astromech": {
          "name": "R5 Astromech",
          "points": 1
        },
        "r7astromech": {
          "name": "R7 Astromech",
          "points": 2
        },
        "r7t1": {
          "name": "R7-T1",
          "points": 3
        },
        "r3a2": {
          "name": "R3-A2",
          "points": 2
        },
        "r2d6": {
          "name": "R2-D6",
          "points": 1
        },
        "r4d6": {
          "name": "R4-D6",
          "points": 1
        },
        "r5p9": {
          "name": "R5-P9",
          "points": 3
        }
      }
    },
    "ept": {
      "name": "Elite Pilot Talent",
      "upgrades": {
        "determination": {
          "name": "Determination",
          "points": 1
        },
        "swarmtactics": {
          "name": "Swarm Tactics",
          "points": 2
        },
        "squadleader": {
          "name": "Squad Leader",
          "points": 2
        },
        "experthandling": {
          "name": "Expert Handling",
          "points": 2
        },
        "marksmanship": {
          "name": "Marksmanship",
          "points": 3
        },
        "daredevil": {
          "name": "Daredevil",
          "points": 3
        },
        "elusiveness": {
          "name": "Elusiveness",
          "points": 2
        },
        "pushthelimit": {
          "name": "Push the Limit",
          "points": 3
        },
        "deadeye": {
          "name": "Deadeye",
          "points": 1
        },
        "expose": {
          "name": "Expose",
          "points": 4
        },
        "veteraninstincts": {
          "name": "Veteran Instincts",
          "points": 1
        },
        "drawtheirfire": {
          "name": "Draw Their Fire",
          "points": 1
        },
        "adrenalinerush": {
          "name": "Adrenaline Rush",
          "points": 1
        },
        "opportunist": {
          "name": "Opportunist",
          "points": 4
        },
        "wingman": {
          "name": "Wingman",
          "points": 2
        },
        "decoy": {
          "name": "Decoy",
          "points": 2
        },
        "outmaneuver": {
          "name": "Outmaneuver",
          "points": 3
        },
        "predator": {
          "name": "Predator",
          "points": 3
        },
        "stayontarget": {
          "name": "Stay On Target",
          "points": 2
        },
        "lonewolf": {
          "name": "Lone Wolf",
          "points": 2
        },
        "ruthlessness": {
          "name": "Ruthlessness",
          "points": 3
        },
        "intimidation": {
          "name": "Intimidation",
          "points": 2
        },
        "bodyguard": {
          "name": "Bodyguard",
          "points": 2
        }
      }
    },
    "missile": {
      "name": "Missile",
      "upgrades": {
        "concussionmissiles": {
          "name": "Concussion Missiles",
          "points": 4
        },
        "clustermissiles": {
          "name": "Cluster Missiles",
          "points": 4
        },
        "homingmissiles": {
          "name": "Homing Missiles",
          "points": 5
        },
        "assaultmissiles": {
          "name": "Assault Missiles",
          "points": 5
        },
        "ionpulsemissiles": {
          "name": "Ion Pulse Missiles",
          "points": 3
        },
        "chardaanrefit": {
          "name": "Chardaan Refit",
          "points": -2
        },
        "protonrockets": {
          "name": "Proton Rockets",
          "points": 3
        }
      }
    },
    "crew": {
      "name": "Crew",
      "upgrades": {
        "gunner": {
          "name": "Gunner",
          "points": 5
        },
        "mercenarycopilot": {
          "name": "Mercenary Copilot",
          "points": 2
        },
        "weaponsengineer": {
          "name": "Weapons Engineer",
          "points": 3
        },
        "lukeskywalker": {
          "name": "Luke Skywalker",
          "points": 7
        },
        "niennunb": {
          "name": "Nien Nunb",
          "points": 1
        },
        "chewbacca": {
          "name": "Chewbacca",
          "points": 4
        },
        "reconspecialist": {
          "name": "Recon Specialist",
          "points": 3
        },
        "saboteur": {
          "name": "Saboteur",
          "points": 2
        },
        "intelligenceagent": {
          "name": "Intelligence Agent",
          "points": 1
        },
        "darthvader": {
          "name": "Darth Vader",
          "points": 3
        },
        "rebelcaptive": {
          "name": "Rebel Captive",
          "points": 3
        },
        "flightinstructor": {
          "name": "Flight Instructor",
          "points": 4
        },
        "navigator": {
          "name": "Navigator",
          "points": 3
        },
        "tactician": {
          "name": "Tactician",
          "points": 2
        },
        "r2d2": {
          "name": "R2-D2",
          "points": 4
        },
        "c3po": {
          "name": "C-3PO",
          "points": 3
        },
        "kylekatarn": {
          "name": "Kyle Katarn",
          "points": 3
        },
        "janors": {
          "name": "Jan Ors",
          "points": 2
        },
        "torynfarr": {
          "name": "Toryn Farr",
          "points": 6
        },
        "wed15repairdroid": {
          "name": "WED-15 Repair Droid",
          "points": 2
        },
        "carlistrieekan": {
          "name": "Carlist Rieekan",
          "points": 3
        },
        "jandodonna": {
          "name": "Jan Dodonna",
          "points": 6
        },
        "hansolo": {
          "name": "Han Solo",
          "points": 2
        },
        "leiaorgana": {
          "name": "Leia Organa",
          "points": 4
        },
        "targetingcoordinator": {
          "name": "Targeting Coordinator",
          "points": 4
        },
        "raymusantilles": {
          "name": "Raymus Antilles",
          "points": 6
        },
        "landocalrissian": {
          "name": "Lando Calrissian",
          "points": 3
        },
        "marajade": {
          "name": "Mara Jade",
          "points": 3
        },
        "fleetofficer": {
          "name": "Fleet Officer",
          "points": 3
        },
        "dashrendar": {
          "name": "Dash Rendar",
          "points": 2
        },
        "leebo": {
          "name": "\"Leebo\"",
          "points": 2
        },
        "ysanneisard": {
          "name": "Ysanne Isard",
          "points": 4
        },
        "moffjerjerrod": {
          "name": "Moff Jerjerrod",
          "points": 2
        },
        "greedo": {
          "name": "Greedo",
          "points": 1
        }
      }
    },
    "cannon": {
      "name": "Cannon",
      "upgrades": {
        "ioncannon": {
          "name": "Ion Cannon",
          "points": 3
        },
        "heavylasercannon": {
          "name": "Heavy Laser Cannon",
          "points": 7
        },
        "autoblaster": {
          "name": "Autoblaster",
          "points": 5
        }
      }
    },
    "bomb": {
      "name": "Bomb",
      "upgrades": {
        "seismiccharges": {
          "name": "Seismic Charges",
          "points": 2
        },
        "proximitymines": {
          "name": "Proximity Mines",
          "points": 3
        },
        "protonbomb": {
          "name": "Proton Bomb",
          "points": 5
        }
      }
    },
    "system": {
      "name": "System",
      "upgrades": {
        "firecontrolsystem": {
          "name": "Fire-Control System",
          "points": 2
        },
        "advancedsensors": {
          "name": "Advanced Sensors",
          "points": 3
        },
        "sensorjammer": {
          "name": "Sensor Jammer",
          "points": 4
        },
        "enhancedscopes": {
          "name": "Enhanced Scopes",
          "points": 1
        },
        "accuracycorrector": {
          "name": "Accuracy Corrector",
          "points": 3
        }
      }
    },
    "cargo": {
      "name": "Cargo",
      "upgrades": {
        "commsbooster": {
          "name": "Comms Booster",
          "points": 4
        },
        "slicertools": {
          "name": "Slicer Tools",
          "points": 7
        },
        "shieldprojector": {
          "name": "Shield Projector",
          "points": 4
        },
        "tibannagassupplies": {
          "name": "Tibanna Gas Supplies",
          "points": 4
        },
        "ionizationreactor": {
          "name": "Ionization Reactor",
          "points": 4
        },
        "enginebooster": {
          "name": "Engine Booster",
          "points": 3
        },
        "expandedcargohold": {
          "name": "Expanded Cargo Hold",
          "points": 1
        },
        "backupshieldgenerator": {
          "name": "Backup Shield Generator",
          "points": 3
        },
        "ememitter": {
          "name": "EM Emitter",
          "points": 3
        },
        "frequencyjammer": {
          "name": "Frequency Jammer",
          "points": 4
        }
      }
    },
    "hardpoint": {
      "name": "Hardpoint",
      "upgrades": {
        "singleturbolasers": {
          "name": "Single Turbolasers",
          "points": 8
        },
        "quadlasercannons": {
          "name": "Quad Laser Cannons",
          "points": 6
        }
      }
    },
    "team": {
      "name": "Team",
      "upgrades": {
        "gunneryteam": {
          "name": "Gunnery Team",
          "points": 4
        },
        "sensorteam": {
          "name": "Sensor Team",
          "points": 4
        },
        "engineeringteam": {
          "name": "Engineering Team",
          "points": 4
        }
      }
    },
    "illicit": {
      "name": "Illicit",
      "upgrades": {
        "inertialdampeners": {
          "name": "Inertial Dampeners",
          "points": 1
        }
      }
    },
    "mod": {
      "name": "Modification",
      "upgrades": {
        "stealthdevice": {
          "name": "Stealth Device",
          "points": 3
        },
        "shieldupgrade": {
          "name": "Shield Upgrade",
          "points": 4
        },
        "engineupgrade": {
          "name": "Engine Upgrade",
          "points": 4
        },
        "antipursuitlasers": {
          "name": "Anti-Pursuit Lasers",
          "points": 2
        },
        "targetingcomputer": {
          "name": "Targeting Computer",
          "points": 2
        },
        "hullupgrade": {
          "name": "Hull Upgrade",
          "points": 3
        },
        "munitionsfailsafe": {
          "name": "Munitions Failsafe",
          "points": 1
        },
        "stygiumparticleaccelerator": {
          "name": "Stygium Particle Accelerator",
          "points": 2
        },
        "advancedcloakingdevice": {
          "name": "Advanced Cloaking Device",
          "points": 4
        },
        "combatretrofit": {
          "name": "Combat Retrofit",
          "points": 10
        },
        "bwinge2": {
          "name": "B-Wing/E2",
          "points": 1
        },
        "countermeasures": {
          "name": "Countermeasures",
          "points": 3
        },
        "experimentalinterface": {
          "name": "Experimental Interface",
          "points": 3
        },
        "tacticaljammer": {
          "name": "Tactical Jammer",
          "points": 1
        }
      }
    },
    "title": {
      "name": "Title",
      "upgrades": {
        "slavei": {
          "name": "Slave I",
          "points": 0
        },
        "millenniumfalcon": {
          "name": "Millennium Falcon",
          "points": 1
        },
        "moldycrow": {
          "name": "Moldy Crow",
          "points": 3
        },
        "st321": {
          "name": "ST-321",
          "points": 3
        },
        "royalguardtie": {
          "name": "Royal Guard TIE",
          "points": 0
        },
        "dodonnaspride": {
          "name": "Dodonna's Pride",
          "points": 4
        },
        "awingtestpilot": {
          "name": "A-Wing Test Pilot",
          "points": 0
        },
        "tantiveiv": {
          "name": "Tantive IV",
          "points": 4
        },
        "brighthope": {
          "name": "Bright Hope",
          "points": 5
        },
        "quantumstorm": {
          "name": "Quantum Storm",
          "points": 4
        },
        "dutyfree": {
          "name": "Dutyfree",
          "points": 2
        },
        "jainaslight": {
          "name": "Jaina's Light",
          "points": 2
        },
        "outrider": {
          "name": "Outrider",
          "points": 5
        },
        "dauntless": {
          "name": "Dauntless",
          "points": 2
        },
        "virago": {
          "name": "Virago",
          "points": 1
        },
        "heavyscykinterceptorcannon": {
          "name": "\"Heavy Scyk\" Interceptor (Cannon)",
          "points": 2
        },
        "heavyscykinterceptortorpedo": {
          "name": "\"Heavy Scyk\" Interceptor (Torpedo)",
          "points": 2
        },
        "heavyscykinterceptormissile": {
          "name": "\"Heavy Scyk\" Interceptor (Missile)",
          "points": 2
        },
        "ig2000": {
          "name": "IG-2000",
          "points": 0
        }
      }
    }
  };

  $exp = typeof exports !== "undefined" && exports !== null ? exports : this;

  if ($exp.xws == null) {
    $exp.xws = {};
  }

  $exp.xws.version = '0.1.1';

  $exp.xws.canonicalizationExceptions_dict = {
    "Rebel Alliance": "rebels",
    "Galactic Empire": "empire",
    "Scum and Villainy": "scum",
    "Astromech Droid": "amd",
    "Salvaged Astromech Droid": "samd",
    "Elite Pilot Talent": "ept",
    "Modification": "mod"
  };

  $exp.xws.canonicalize = function(name) {
    if (name in $exp.xws.canonicalizationExceptions_dict) {
      return $exp.xws.canonicalizationExceptions_dict[name];
    }
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
  };

  _validateSquadron_upgrades = function(slot_key, dirty_obj, prefix, vendor) {
    var clean_list, error_list, i, upgrade_key, _i, _len;
    if (vendor == null) {
      vendor = true;
    }
    error_list = [];
    clean_list = [];
    for (i = _i = 0, _len = dirty_obj.length; _i < _len; i = ++_i) {
      upgrade_key = dirty_obj[i];
      if (upgrade_key in $exp.xws.upgrade_slot2key2obj_dict[slot_key].upgrades) {
        clean_list.push(upgrade_key);
      } else {
        error_list.push("" + prefix + "[" + i + "]: " + upgrade_key + " invalid");
      }
    }
    return [clean_list, error_list];
  };

  _validateSquadron_pilot = function(faction_key, dirty_obj, prefix, vendor) {
    var clean_list, clean_obj, dirty_key, dirty_value, error_list, error_sublist, key2obj_dict, slot_key, _ref, _ref1, _ref2;
    if (vendor == null) {
      vendor = true;
    }
    error_list = [];
    clean_obj = {
      upgrades: {}
    };
    if ('vendor' in dirty_obj && vendor) {
      clean_obj.vendor = dirty_obj.vendor;
    }
    delete dirty_obj.vendor;
    delete dirty_obj.points;
    if (!dirty_obj.ship || !(dirty_obj.ship in $exp.xws.pilot_faction2ship2pilot2obj_dict[faction_key].ships)) {
      return [null, ["" + prefix + ".ship: " + dirty_obj.ship]];
    }
    clean_obj.ship = dirty_obj.ship;
    delete dirty_obj.ship;
    if (!dirty_obj.name || !(dirty_obj.name in $exp.xws.pilot_faction2ship2pilot2obj_dict[faction_key].ships[clean_obj.ship].pilots)) {
      return [null, ["" + prefix + ".name: " + dirty_obj.name]];
    }
    clean_obj.name = dirty_obj.name;
    delete dirty_obj.name;
    clean_obj.upgrades = {};
    if (dirty_obj.upgrades) {
      _ref = $exp.xws.upgrade_slot2key2obj_dict;
      for (slot_key in _ref) {
        key2obj_dict = _ref[slot_key];
        clean_list = [];
        if (slot_key in dirty_obj.upgrades) {
          _ref1 = _validateSquadron_upgrades(slot_key, dirty_obj.upgrades[slot_key], "" + prefix + "." + slot_key, vendor), clean_list = _ref1[0], error_sublist = _ref1[1];
          if (clean_list) {
            clean_obj.upgrades[slot_key] = clean_list;
          }
          if (error_sublist) {
            error_list = error_list.concat(error_sublist);
          }
          delete dirty_obj.upgrades[slot_key];
        }
      }
      _ref2 = dirty_obj.upgrades;
      for (dirty_key in _ref2) {
        if (!__hasProp.call(_ref2, dirty_key)) continue;
        dirty_value = _ref2[dirty_key];
        error_list.push("" + prefix + ".upgrades." + dirty_key + ": unrecognized key, value " + dirty_value);
      }
    }
    delete dirty_obj.upgrades;
    for (dirty_key in dirty_obj) {
      if (!__hasProp.call(dirty_obj, dirty_key)) continue;
      dirty_value = dirty_obj[dirty_key];
      error_list.push("" + prefix + "." + dirty_key + ": unrecognized key");
    }
    return [clean_obj, error_list];
  };

  $exp.xws.validateSquadron = function(dirty_obj, vendor, ignore) {
    var attr, clean_obj, dirty_key, dirty_value, error, error_list, error_sublist, i, key, pilot_clean, pilot_dirty, _i, _j, _len, _len1, _ref, _ref1, _ref2;
    if (vendor == null) {
      vendor = true;
    }
    if (ignore == null) {
      ignore = [];
    }
    try {
      error_list = [];
      clean_obj = {
        pilots: [],
        points: 0
      };
      for (key in ignore) {
        clean_obj[key] = dirty_obj[key];
        delete dirty_obj[key];
      }
      if (dirty_obj.version !== $exp.xws.version) {
        error_list.push("squadron.version: " + dirty_obj.version + " != " + $exp.xws.version);
      }
      clean_obj.version = $exp.xws.version;
      delete dirty_obj.version;
      _ref = ['name', 'description', 'vendor'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attr = _ref[_i];
        if (attr in dirty_obj && dirty_obj[attr]) {
          clean_obj[attr] = dirty_obj[attr];
        }
        delete dirty_obj[attr];
      }
      delete dirty_obj.points;
      if (!dirty_obj.faction || !(dirty_obj.faction in $exp.xws.pilot_faction2ship2pilot2obj_dict)) {
        return [null, ["squadron.faction: " + dirty_obj.faction]];
      }
      clean_obj.faction = dirty_obj.faction;
      delete dirty_obj.faction;
      _ref1 = dirty_obj.pilots || [];
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        pilot_dirty = _ref1[i];
        _ref2 = _validateSquadron_pilot(clean_obj.faction, pilot_dirty, "squadron.pilots[" + i + "]", vendor), pilot_clean = _ref2[0], error_sublist = _ref2[1];
        if (pilot_clean) {
          clean_obj.pilots.push(pilot_clean);
        }
        if (error_sublist) {
          error_list = error_list.concat(error_sublist);
        }
      }
      delete dirty_obj.pilots;
      for (dirty_key in dirty_obj) {
        if (!__hasProp.call(dirty_obj, dirty_key)) continue;
        dirty_value = dirty_obj[dirty_key];
        error_list.push("squadron." + dirty_key + ": unrecognized key");
      }
      return [clean_obj, error_list];
    } catch (_error) {
      error = _error;
      return [null, [error]];
    }
  };

  $exp.xws.computePoints = function(squad_obj) {
    var pilot, slot_key, upgrade_key, upgrade_list, _i, _j, _len, _len1, _ref, _ref1;
    squad_obj.points = 0;
    _ref = squad_obj.pilots;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      pilot = _ref[_i];
      pilot.points = $exp.xws.pilot_faction2ship2pilot2obj_dict[squad_obj.faction].ships[pilot.ship].pilots[pilot.name].points;
      _ref1 = pilot.upgrades;
      for (slot_key in _ref1) {
        upgrade_list = _ref1[slot_key];
        for (_j = 0, _len1 = upgrade_list.length; _j < _len1; _j++) {
          upgrade_key = upgrade_list[_j];
          pilot.points += $exp.xws.upgrade_slot2key2obj_dict[slot_key].upgrades[upgrade_key].points;
        }
      }
      squad_obj.points += pilot.points;
    }
    return squad_obj.points;
  };

}).call(this);