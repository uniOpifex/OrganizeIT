# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all


bob_loblaw = User.create!(
  email: 'bob_loblaw@lawblog.com',
  password: 'qwerty12345',
  password_confirmation: 'qwerty12345'
)

george_michael = User.create!(
  email: 'george.michael@bluth.com',
  password: 'blahblah',
  password_confirmation: 'blahblah'
)
test_user = User.create!(
  email: 'test@abc.com',
  password: 'qwertyasdf',
  password_confirmation: 'qwertyasdf'
  
)

3.times do
bob_loblaw.items.create!(
    title: FFaker::Book.title,
    description: FFaker::Book.description
)
end

3.times do
george_michael.items.create!(
    title: FFaker::Book.title,
    description: FFaker::Book.description
)
end

3.times do
  test_user.items.create!(
      title: FFaker::Book.title,
      description: FFaker::Book.description
  )
end

