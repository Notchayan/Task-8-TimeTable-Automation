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

**Happy coding!**
