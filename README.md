# Pingala Timetable Helper Chrome Extension

The Pingala Timetable Helper Chrome Extension is designed to help students seamlessly manage their timetables and course schedules. This tool is capable of reading and interpreting your timetable as provided on the Pingala platform. Once installed, you can easily access your timetable, receive reminders for upcoming classes, and save precious time spent on noting down your class schedule.

This repository contains a manifest.json, popup.html, popup.js, content.js, background.js, and a folder named 'alerts' housing 50 alert files.

## Getting Started

To get a copy of the project up and running on your local machine for development and testing purposes, please follow the instructions below.

### Prerequisites

The following things are required to properly setup and run this extension:

- Google Chrome Browser
- Code editor (like Visual Studio Code, Sublime Text etc.)
- Basic knowledge of HTML, JavaScript and Chrome Extensions

### Installation

1. Clone this repo:
    ```
    git clone <repo-link>
    ```
2. Open Google Chrome.
3. Navigate to `chrome://extensions/`.
4. Enable 'Developer mode' by clicking the toggle switch in the top right corner.
5. Click 'Load unpacked' button and select the cloned folder.

### File Structure

- `manifest.json`: This is the metadata file in JSON format that contains properties like your extension's name, description, version number and so on.

- `popup.html` and `popup.js`: These are the HTML and JavaScript files respectively for the extension's popup interface.

- `content.js`: The JavaScript file that interacts with the content of the web pages.

- `background.js`: The JavaScript file responsible for defining the behavior of the extension when certain conditions are met.

- `alerts/`: This folder contains 50 alert files for reminders and notifications about your classes.

## How to Use

Once you have successfully installed the extension, navigate to Pingala and open your timetable. The extension will automatically read, interpret, and notify you about upcoming classes based on the information provided in the timetable.


## Contact

Please feel free to contact us if you have any questions or need further information. 

## Disclaimer

This extension is for educational purposes and is not affiliated with or endorsed by Pingala.

## Journey to build it 

When I embarked on developing the Pingala Timetable Helper Chrome Extension, the initial challenge was accessing the HTML text of the timetable. Navigating the intricacies of JavaScript DOM (Document Object Model) manipulation was daunting but essential. It was critical to correctly map each subject with the appropriate time and specific day on the timetable.

Endless hours were spent studying the structure of the Pingala website to identify the root HTML elements of the timetable. There were moments of doubt and confusion, but persistence paid off. The structure of the site started to make sense, and I was able to locate the right elements.

To understand the nuances of Chrome extension data transfer, DOM manipulation, and the purpose of different JavaScript files, I utilized the comprehensive documentation provided by Chrome (https://developer.chrome.com/docs/extensions/). This resource proved invaluable, acting as a beacon of knowledge that guided my learning and development process.

Reflecting on the entire experience, I've realized the immense possibilities that lie in technology exploration. It's easy to get caught up in mainstream technologies and overlook less-known ones. However, it is these underrated technologies that hold the potential to simplify our daily lives when correctly incorporated.

The journey through developing this extension was a voyage of discovery. It wasn't merely about creating a functional tool; it was also a learning journey that broadened my understanding of DOM manipulation, Chrome extensions, and the power of perseverance.

This experience has reinforced my belief that learning is a continuous process, and every challenge we face is an opportunity for growth. I am eager to apply this mindset and the technical skills acquired to future projects.
![IMAGE 2023-06-22 03:57:40](https://github.com/Notchayan/Task-8-TimeTable-Automation/assets/130827975/f41e1ebd-fb8a-4e8e-9faf-73d8b628a3fb).

## NOTE 

The commitment make on popup.js and popup.html are just to exchange there code I have commited exchanged code earlier.)(done at 4 AM 22 JUN, when I realised they are exchanged)

**Happy coding!**
