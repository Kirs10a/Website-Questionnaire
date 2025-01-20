# Website-Questionnaire
A simple *Client Website Questionnaire* form with a toggle button to switch between light and dark modes. The current theme preference is saved in `localStorage`, allowing the user to retain their choice even after refreshing the page.
## Features

- **Dark Mode**: A sleek, dark theme designed to reduce eye strain.
- **Light Mode**: A clean, light theme for well-lit environments.
- **Toggle Button**: A functional button to switch between light and dark modes.
- **Persistent Theme**: The theme preference is saved in `localStorage` to retain the user’s choice even after refreshing the page.

## Technologies Used

- **HTML**: Structure of the form and the theme toggle button.
- **CSS**: Styling for dark mode, light mode, the form, and the toggle button.
- **JavaScript**: Adds interactivity by saving the theme preference in `localStorage` and toggling between themes.

## Installation

To get started with this project:

1. Clone the repository:

    ```bash
    git clone https://github.com/kirs10a/website-questionnaire.git
    ```

2. Navigate to the project directory:

    ```bash
    cd website-questionnaire
    ```

3. Open the `index.html` file in your browser:

    ```bash
    open index.html  # MacOS
    start index.html  # Windows
    ```

## Usage

### Light/Dark Mode Toggle

1. On the page, you’ll see a toggle button to switch between light and dark modes.
2. Click the button to switch between the two themes:
    - **Dark Mode**: The background and text colors are dark, suitable for low-light environments.
    - **Light Mode**: The background and text colors are light, suitable for bright environments.
3. The theme preference is automatically saved to `localStorage`, so it persists when you refresh the page.

### Customizing the Toggle Button

You can customize the toggle button further by:
- Changing the button style in the `style.css` file.
- Adjusting the button's position by modifying the `theme-toggle` class.
- Editing the CSS for both light and dark modes to fit your design preferences.

### Adding More Form Fields

To extend the form and add more fields:
1. Edit the `index.html` file.
2. Add your form fields within the `<form>` element.
3. Style them in the `style.css` file to match the existing design.
