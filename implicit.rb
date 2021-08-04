beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

def words_with_letter (array,letter)
    array.select do |word| 
        word.include? letter
    end
end

puts words_with_letter(beverages_array,'t')


def words_with_letter (array,letter)
    array.select do |word| 
        return word.include? letter
    end
end

puts words_with_letter(beverages_array,'t')