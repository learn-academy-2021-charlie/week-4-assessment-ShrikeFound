# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

### 1. What is an instance variable in Ruby? How is it different from other variables?

  **Your answer:** a variable that is restricted to specific instances of a class

  **Researched answer:** instance variables are variables that are defined inside classes and hold data for individual instances (objects) of that class. The variables are restricted to each specific instance, so each object has instance variables that are distinct from other instances and are available only to itself. You can use `object.instance_variables` to get a list of an object's instance variables. That seems handy!



### 2. What is a block in Ruby?

  **Your answer:** ruby blocks are anonymous functions, and are used similarly to how anonymous functions are used in javascript methods like .map() or for loops.

  **Researched answer:**  ruby blocks are anonymous functinos that are passed into methods. They are denoted using either do/end statements or `{}`. Methods have certain points where they use these blocks. We can do this with our own methods using the `yield` keyword.



### 3. Ruby has an implicit return. What does that mean?

  **Your answer:** ruby will return the last expression of a block unless the return keyword is used to make an explicit return.

  **Researched answer:** explicit returns end a method, so using one inside a block might give us unexpected results. using the first ruby challenge as an example:

  ```ruby

    def words_with_letter (array,letter)
        array.select do |word| 
            #javascript would require an explicit return here since we're on multiple lines
            word.include? letter
        end
    end

    words_with_letter(beverages_array,'t')
    #returns an filtered array, as expected

    def words_with_letter (array,letter)
        array.select do |word| 
            #using an explicit return in ruby here ends the entire method
            return word.include? letter
        end
    end

    words_with_letter(beverages_array,'t')
    #returns 'false', the evaluation of the expression `word.include ? letter`

  ```



### 4. What is object-oriented programming? How is it different than functional programming?

  **Your answer:** a programming framework based around using objects that contain data and behavior, where functional programming is based around using functions that take an input and return an output.

  **Researched answer:** object-oriented programming is a programming framework that is based around using objects that contain data and behavior, and the classes that created them. It compartmentalizes code into separate objects and follows the following principles: encapsulation, abstraction,inheritance, and polymorphism. Functional programming is a framework that focuses on using functions that accept input and return consistent results.

  I haven't had a chance to learn any functional programming languages, so I'm not very clear on the differences between the two frameworks, but in general I think functional programming is useful when there are fewer things (since OOP would make it easier to model many different things) that are expected to do more. One of the principles of functional programming called "purity", which refers to functions that are pure: They only operate on their input parameters, not any outside variables. This is different from object oriented programming where we often affect variables and states of objects using methods.



### 5. What is the difference between a class and an object?

  **Your answer:** an object is a collection of methods and variables independent of other objects; a class is a blueprint for objects.

  **Researched answer:** objects are the actual holders of value and doers of things. Classes describe instance variables an object can hold, but objects (isntances) are actually the holders of that information. Classes describe methods available to an object, but objects are the things that actually call the methods (usually).



### 6. STRETCH: What is `attr_accessor`?

  **Your answer:** a method(I think?) that creates a getter method and setter method for the properties we pass to it.

  **Researched answer:** attr_accessor is a ruby method that creates two methods for each property you pass in: property_name (a getter method), and property_name= (a setter method).



## Looking Ahead: Terms for Next Week

*1. PostgreSQL:* a database system
 
*2. Ruby on Rails:* an MVC backend framework for ruby

*3. CRUD:* actions we can perform with our data: Create, Read, Update, Delete

*4. ORM:* object-relational mapping, a method of converting data to objects we can manipulate with a programming language

*5. Active Record:* a type of ORM that rails uses so that we can manpulate data store in a database as objects using ruby
