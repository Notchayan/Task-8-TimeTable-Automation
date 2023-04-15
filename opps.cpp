#include <iostream>
#include <string>
#include <cmath>
using namespace std;

class MyCar {
public:
    string make;
    string model;
    int year;
    int speed;
    int x;
    int y;
    int z;

    MyCar(string make,string model, int year, int speed, int x, int y,int z)
        : make(make), model(model), year(year), speed(speed), x(x), y(y), z(z) {}

    void accelerate(int speed_increment) {
        speed += speed_increment;
    }

    void brake(int speed_decrement) {
        speed -= speed_decrement;
        if (speed < 0) {
            speed = 0;
        }
    }

    void move() {
        x += speed;
        y += speed;
        z += speed;
    }

    bool detect_collision(const MyCar& car2) const {
        return x == car2.x && y == car2.y && z == car2.z;
    }

    double time_of_collision(const MyCar& car2) const {
        int dx = car2.x - x;
        int dy = car2.y - y;
        int dz = car2.z - z;
        int ds = car2.speed - speed;

        if (ds <= 0) {
            return -1;
        }

        double time_1 = dx / static_cast<double>(ds);
        double time_2 = dy / static_cast<double>(ds);
        double time_3 = dz / static_cast<double>(ds);

        if (time_1 == time_2 && time_1 == time_3 && time_2 == time_3) {
            return time_1;
        }

        return -1;
    }
};

int main() {
    MyCar car1("BMW", "X7", 2021, 57, 0, 0,0);
    MyCar car2("Maruti", "Alto",2020, 79, 23, 97,0);

    car1.accelerate(10);
    car1.move();
    car2.brake(5);
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
