# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

avenues = Avenue.create([
  {name: "First Avenue"},
  {name: "Second Avenue"},
  {name: "Third Avenue"},
  {name: "Lexington Avenue"},
  {name: "FDR"}
  ])

Camera.create([
  {description: "1st av. at 110th st", url:"http://207.251.86.238/cctv261.jpg?rand=", avenue: avenues.first},
  {description: "1st av. at 14th st", url:"http://207.251.86.238/cctv1083.jpg?rand=", avenue: avenues.first}
  ])
