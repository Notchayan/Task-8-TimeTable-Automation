#include <iostream>
#include <string>
#include <cmath>
using namespace std;

class MyCar {
public:
    string make;
    string model;
    int year;
    int speed_x;
    int speed_y;
    int speed_z;
    int x;
    int y;
    int z;

    MyCar(string make,string model, int year, int speed_x,int speed_y, int speed_z, int x, int y,int z)
        : make(make), model(model), year(year), speed_x(speed_x),speed_y(speed_y),speed_z(speed_z), x(x), y(y), z(z) {}

    void accelerate(int speed_increment_x,int speed_increment_y,int speed_increment_z) {
        speed_x += speed_increment_x;
        speed_y += speed_increment_y;
        speed_z += speed_increment_z;
    }

    void brake(int speed_decrement_x, int speed_decrement_y, int speed_decrement_z) {
        speed_x -= speed_decrement_x;
        speed_y -= speed_decrement_y;
        speed_z -= speed_decrement_z;
        if (speed_x < 0) {
            speed_x = 0;
        }
        if(speed_y < 0){
            speed_y = 0;
        }
        if(speed_z < 0){
            speed_z = 0;
        }
    }

    void move(){
        x += speed_x;
        y += speed_y;
        z += speed_z;
    }
    bool detect_collision(const MyCar& car2) const {
        return x == car2.x && y == car2.y && z == car2.z;
    }

    double time_of_collision(const MyCar& car2) const {
        int dx = car2.x - x;
        int dy = car2.y - y;
        int dz = car2.z - z;
        int ds_x = car2.speed_x - speed_x;
        int ds_y = car2.speed_y - speed_y;
        int ds_z = car2.speed_z - speed_z;

        if (ds_x <= 0) {
            return -1;
        }
        if (ds_y <= 0) {
            return -1;
        }
        if (ds_z <= 0) {
            return -1;
        }

        double time_1 = dx / static_cast<double>(ds_x);
        double time_2 = dy / static_cast<double>(ds_y);
        double time_3 = dz / static_cast<double>(ds_z);

        if (time_1 == time_2 && time_1 == time_3 && time_2 == time_3) {
            return time_1;
        }

        return -1;
        
        }
        
};

int main() {
    MyCar car1("BMW", "X7", 2021, 57, 0, 0, 0, 0, 0);
    MyCar car2("Maruti", "Alto", 2020, 79, 23, 97, 0, 0, 0);
    // How might a car operate within a three-dimensional space, as one would typically expect it to function on a two-dimensional plane?
    // It should be a air craft, lol
    
    car1.accelerate(10, 0, 0);
    car1.move();
    car2.brake(5, 0, 0);
    car2.move();
    double time = car1.time_of_collision(car2);
    bool collision = car1.detect_collision(car2);
    cout << "Car 1 is at position: (" << car1.x << ", " << car1.y << car1.z << ")" << endl;
    cout << "Car 2 is at position: (" << car2.x << ", " << car2.y << car2.z << ")" << endl;
    cout << "Collision: " << (collision ? "True" : "False") <<endl;
    if (time >= 0) {
        cout << "Time of collision : " << time << endl;
    } else {
        cout << "There is No collision" << endl;
    }
    return 0;
}
