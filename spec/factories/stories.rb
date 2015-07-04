FactoryGirl.define do
  factory :story do
    title Faker::Lorem.word
    description Faker::Lorem.word
    story_point Faker::Number.number(2)
  end

end
