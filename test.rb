# celcius = gets.chomp.to_i
# fahrenheit = (celcius * 9 / 5) + 32
# print 'The result is: '
# print fahrenheit
# puts '.'

arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]
puts arr.class
i = 0
i += 1 while (i < arr.size - 1) && (arr[i] < arr[i + 1])
puts i
temp = arr[i]
arr[i] = arr[i + 1]
arr[i + 1] = temp
puts arr
