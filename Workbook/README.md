# Question 1

# Question 2

## Packets

## IP addresses (IPv4 and IPv6)

## Routers and Routing

## Domain and DNS

# Question 12

Executing the block of Ruby code in question:

```ruby
celsius = gets
fahrenheit = (celsius * 9 / 5) + 32
print 'The result is: '
print fahrenheit
puts '.'
```

produces the following console error:

```bash
swap.rb:4:in `<main>': undefined method `/' for "13\\n13\\n13\\n13\\n13\\n13\\n13\\n13\\n13\\n":String (NoMethodError)
```

The error messages describes an `undefined method /` for `"...":String (NoMethodError)`, indicating that an arithmetic division operation is being performed on a `String`, which is not possible in `Ruby`.

The error with the code is caused by the fact that the `celsius = gets` command takes the input from the console, which is always a `String`, and tries to perform arithmetic operations on it.

This can be confirmed by checking the `class` property of the `celsius` object:

```ruby
celsius = gets
puts celsius.class
# String
```

To fix this issue, the data returned from the `gets` function should be converted to `Integer`, or even better, since celsius is sensitive enough to measure decimal point changes in temperature, a `Float`.

Final code:

```ruby
celsius = gets.chomp.to_f
fahrenheit = (celsius * 9 / 5) + 32
print 'The result is: '
print fahrenheit
puts '.'
```
