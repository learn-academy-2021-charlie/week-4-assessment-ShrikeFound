# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


#function takes an array of words and a letter
def words_with_letter (array,letter)
    #filter (using .select)
    #for words that .include? the chosen letter 
    #implicit return means we don't need to add return
    array.select{|word| word.include? letter}

end

#test for leter 'o'
puts words_with_letter(beverages_array,'o')
#test for letter 't'
puts words_with_letter(beverages_array,'t')

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#function that takes a string
def remove_vowels string 
    # .delete "Returns a copy of str with all characters in the intersection of its 
    # arguments #deleted. Uses the same rules for building the set of characters as 
    # String#count."

    #unfamliar with string#count, but #delete seems to take 2 strings, and return
    #only the characters that don't overlap.
    #so i'm checking for upper and lower case vowels.

    return string.delete "aeiouAIOU"


    #implicit return and all that, but adding return is a habit. 
    #check later if implicit reutrn is best practice.

end

#testing, adding some lines to break it up.
puts ""
puts "======================="
puts "" 
puts remove_vowels album1
puts remove_vowels album2 
puts remove_vowels album3


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

#class Bike
class Bike 
    #initialize method has 3 instance variables: model, wheels, current_speed
    def initialize 
        @model = "Generic"
        @wheels = 2 
        @current_speed = 0
    end

    #get info method puts a string with the bike's information
    #removed the puts so it returns the string isntead
    def get_info 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end


puts ""
puts "======================="
puts "" 
my_bike = Bike.new 
my_bike.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.


#inherit? come back to this. copy and pasting for now.
class BetterBike 
    def initialize 
        @model = "Generic"
        @wheels = 2 
        @current_speed = 0
    end

    def get_info 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster 
        @current_speed += 5
    end

    def brake 
        @current_speed -= 5 
        if @current_speed < 0 
            @current_speed = 0
        end
    end
end

my_bike = BetterBike.new
my_bike.pedal_faster
puts my_bike.get_info
my_bike.pedal_faster
puts my_bike.get_info
my_bike.brake 
puts my_bike.get_info
my_bike.brake
puts my_bike.get_info
my_bike.brake
puts my_bike.get_info


# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
