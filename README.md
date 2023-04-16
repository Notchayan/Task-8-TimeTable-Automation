# Two point object in 3D space
This C++ code defines a class called MyCar and a main function to demonstrate how the class works. 
The MyCar class simulates a car operating in a three-dimensional space, even though cars typically operate on a two-dimensional plane.
The MyCar class has the following public members:
make, model, and year: strings representing the car's make, model, and an integer representing its production year.
speed_x, speed_y, speed_z: integers representing the car's speed in the x, y, and z directions.
x, y, z: integers representing the car's position in the x, y, and z directions.
The MyCar class has the following public methods:

MyCar constructor: initializes a car object with the specified parameters.
accelerate: increases the car's speed by the specified increments.
brake: decreases the car's speed by the specified decrements, with the minimum speed being 0.
move: updates the car's position based on its current speed.
detect_collision: checks if the current car's position is equal to the position of another car.
time_of_collision: calculates the time of collision between two cars, returning -1 if there is no collision.

The main function demonstrates how the MyCar class can be used:
Two MyCar objects, car1 and car2, are created.
car1 accelerates, and car2 brakes.
Both cars move to their new positions based on their speeds.
The time of collision between the two cars is calculated.
The program checks if the two cars have collided.
The positions of both cars, whether they collided, and the time of collision (if applicable) are printed to the console.
