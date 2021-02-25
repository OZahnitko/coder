# my_symbols = {:ap => "Apple", :bn => "Banana", :mg => "Mango"}

# puts my_symbols[:ap]
# puts my_symbols[:bn]
# puts my_symbols[:mg]

my_symbols = { 'key' => 'Apple', app: 'Apples' }

new_hash = { 'test' => 'response', tst: 'RRR' }

greeting = 'Hello there'

puts my_symbols[:app]
puts my_symbols['key']
puts new_hash.object_id
puts new_hash.object_id
puts new_hash.object_id
puts :app.object_id
puts :app.object_id
puts :app.object_id
puts :app.object_id
puts 'Hello'.object_id
puts 'Hello'.object_id
puts 'Hello'.object_id
puts greeting.object_id
puts greeting.object_id
puts greeting.object_id
puts greeting.object_id

[1, 2, 3].send(:first)

# # p039symbol.rb
# # use the object_id method of class Object
# # it returns an integer identifier for an object
# puts "string".object_id
# puts "string".object_id
# puts :symbol.object_id
# puts :symbol.object_id

# p :name
# p :name.class
# p :name.methods
# puts 'hello'.class
# puts 'hello'.methods
puts 'hello'.center(200, '$')
