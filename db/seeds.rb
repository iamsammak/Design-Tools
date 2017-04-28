# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create!(
  username: "Baymax",
  password: "password"
)

notebook01 = Notebook.create!(
  user: guest,
  title: "Pass all the assessments",
  description: "I am capable of crushing every assessment if I study enough"
)

note01 = Note.create!(
  title: "A01",
  body: "study all the ruby things",
  notebook_id: notebook01.id,
  user_id: guest.id,
  done: false
)
note02 = Note.create!(
  title: "A02",
  body: "play cards, with the power of code",
  notebook_id: notebook01.id,
  user_id: guest.id,
  done: false
)
note03 = Note.create!(
  title: "A03",
  body: "make associations, SQLZoo",
  notebook_id: notebook01.id,
  user_id: guest.id,
  done: false
)
note04 = Note.create!(
  title: "A04",
  body: "be my authentic self, but more prepared",
  notebook_id: notebook01.id,
  user_id: guest.id,
  done: false
)
note05 = Note.create!(
  title: "A05",
  body: "I love javascript",
  notebook_id: notebook01.id,
  user_id: guest.id,
  done: false
)
note06 = Note.create!(
  title: "A06",
  body: "I study all things for the mystery assessment",
  notebook_id: notebook01.id,
  user_id: guest.id,
  done: false
)

notebook02 = Notebook.create!(
  user: guest,
  title: "Get a job",
  description: "I will become employed"
)
note11 = Note.create!(
  title: "Prepare job search materials",
  body: "I will make beautiful and awe-inspiring portfolio pieces",
  notebook_id: notebook02.id,
  user_id: guest.id,
  done: false
)
note12 = Note.create!(
  title: "Apply to companies",
  body: "Submit many many applications",
  notebook_id: notebook02.id,
  user_id: guest.id,
  done: false
)
note13 = Note.create!(
  title: "Do interviews",
  body: "Impress companies with my depth and breadth of knowledge & shining personality",
  notebook_id: notebook02.id,
  user_id: guest.id,
  done: false
)
note14 = Note.create!(
  title: "Negotiate offers",
  body: "So many companies want me, but who wants me the mostest?",
  notebook_id: notebook02.id,
  user_id: guest.id,
  done: false
)
note15 = Note.create!(
  title: "Begin employment",
  body: "Impress and astound my new coworkers",
  notebook_id: notebook02.id,
  user_id: guest.id,
  done: false
)
note16 = Note.create!(
  title: "Spread the dev job love",
  body: "refer all my AA friends to work at my company",
  notebook_id: notebook02.id,
  user_id: guest.id,
  done: false
)
