# frozen_string_literal: true

arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]

i = 0

i += 1 while (i < arr.size - 1) && (arr[i] < arr[i + 1])

puts i

puts arr[i]
arr[i] = arr[i + 1]
puts arr[i]
arr[i + 1] = arr[i]

puts arr
