# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


avenues = Avenue.create([
  {name: "First Avenue"},
  {name: "Second Avenue"},
  {name: "Third Avenue"},
  {name: "Lexington Avenue"},
  {name: "FDR"}
  ])

Camera.create([
  {description: "1st av. at 110th st", url:"http://207.251.86.238/cctv261.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 14th st", url:"http://207.251.86.238/cctv1083.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 23rd st", url:"http://207.251.86.238/cctv253.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 42nd st", url:"http://207.251.86.238/cctv490.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 62nd st", url:"http://207.251.86.238/cctv827.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 86th  st", url:"http://207.251.86.238/cctv263.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 96th  st", url:"http://207.251.86.238/cctv644.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 14th  st East", url:"http://207.251.86.238/cctv696.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at East Houston st.", url:"http://207.251.86.238/cctv901.jpg?rand=", avenue: avenues.first},
  {description: "2nd avenue at East 14th  St.", url:"http://207.251.86.238/cctv740.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 23rd St.", url:"http://207.251.86.238/cctv699.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 36th St – Midtown tunnel", url:"http://207.251.86.238/cctv4.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 42nd St.", url:"http://207.251.86.238/cctv491.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 49th St.", url:"http://207.251.86.238/cctv258.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 58th St.", url:"http://207.251.86.238/cctv400.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 59th St.", url:"http://207.251.86.238/cctv3.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 72nd St.", url:"http://207.251.86.238/cctv480.jpg?rand=", avenue: avenues.second},
  {description: "2nd avenue at 125th  St.", url:"http://207.251.86.238/cctv102.jpg?rand=", avenue: avenues.second},
  {description: "3rd  avenue at 14th St.", url:"http://207.251.86.238/cctv1084.jpg?rand=", avenue: avenues.third},
  {description: "3rd  avenue at 23rd  St.", url:"http://207.251.86.238/cctv430.jpg?rand=", avenue: avenues.third},
  {description: "3rd  avenue at 34th St.", url:"http://207.251.86.238/cctv431.jpg?rand=", avenue: avenues.third},
  {description: "3rd  avenue at 42nd St.", url:"http://207.251.86.238/cctv290.jpg?rand=", avenue: avenues.third},
  {description: "3rd  avenue at 49th St.", url:"http://207.251.86.238/cctv429.jpg?rand=", avenue: avenues.third},
  {description: "3rd  avenue at 57th St.", url:"http://207.251.86.238/cctv428.jpg?rand=", avenue: avenues.third},
  {description: "3rd  avenue at 86th St.", url:"http://207.251.86.238/cctv1119.jpg?rand=", avenue: avenues.third},
  {description: "Lexington Ave. At 34th St.", url:"http://207.251.86.238/cctv482.jpg?rand=", avenue: avenues.fourth},
  {description: "Lexington Ave. At 42nd St.", url:"http://207.251.86.238/cctv303.jpg?rand=", avenue: avenues.fourth},
  {description: "Lexington Ave. At 57th St.", url:"http://207.251.86.238/cctv294.jpg?rand=", avenue: avenues.fourth},
  {description: "Lexington Ave. At 72nd St.", url:"http://207.251.86.238/cctv181.jpg?rand=", avenue: avenues.fourth},
  {description: "Lexington Ave. At 125th St.", url:"http://207.251.86.238/cctv472.jpg?rand=", avenue: avenues.fourth},
  {description: "Lexington Ave. At 135th St.", url:"http://207.251.86.238/cctv450.jpg?rand=", avenue: avenues.fourth},
  {description: "FDR Dr at Old Slip", url:"http://207.251.86.238/cctv64.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 96th St", url:"http://207.251.86.238/cctv25.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 90th St", url:"http://207.251.86.238/cctv641.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 79th St", url:"http://207.251.86.238/cctv642.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 38th St", url:"http://207.251.86.238/cctv640.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 23rd St", url:"http://207.251.86.238/cctv134.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 135th St", url:"http://207.251.86.238/cctv27.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 131st St (3 ave. Br)", url:"http://207.251.86.238/cctv164.jpg?rand=", avenue: avenues.last},
  {description: "FDR Dr at 111st St", url:"http://207.251.86.238/cctv166.jpg?rand=", avenue: avenues.last},
  {description: "FDR at 10th St", url:"http://207.251.86.238/cctv819.jpg?rand=", avenue: avenues.last},
  {description: "FDR at Jackson St", url:"http://207.251.86.238/cctv761.jpg?rand=", avenue: avenues.last},
  {description: "FDR at Grand St", url:"http://207.251.86.238/cctv679.jpg?rand=", avenue: avenues.last},
  {description: "FDR at 6th St", url:"http://207.251.86.238/cctv680.jpg?rand=", avenue: avenues.last},
  {description: "FDR at 53rd St", url:"http://207.251.86.238/cctv681.jpg?rand=", avenue: avenues.last},
  {description: "FDR at 127th St", url:"http://207.251.86.238/cctv682.jpg?rand=", avenue: avenues.last},
  {description: "FDR at 48th St", url:"http://207.251.86.238/cctv683.jpg?rand=", avenue: avenues.last},
  {description: "FDR at 120th St", url:"http://207.251.86.238/cctv702.jpg?rand=", avenue: avenues.last},
  ])
