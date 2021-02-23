# frozen_string_literal: true

def weather_descriptor(raining, temperature)
  if raining && (temperature >= 15)
    puts "It's warm and raining."
  elsif raining && (temperature < 15)
    puts "It's wet and cold."
  elsif !raining && (temperature >= 15)
    puts "It's warm but not raining."
  else
    puts "It's not raining but cold."
  end
end

weather_descriptor(true, 15)
