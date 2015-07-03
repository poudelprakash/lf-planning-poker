FactoryGirl.define do
  factory :user do
    name Faker::Name.first_name
    uid Faker::Number.number(32)
    image_url Faker::Avatar.image
    email Faker::Internet.email
    provider Faker::Name.name
  end

end
