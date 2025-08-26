# 💌 Project Proposal: An Interactive Case File

Welcome to the Interactive Case File! This is a single-page web application designed to present a message or proposal in a creative, engaging, and memorable way. Inspired by viral coding-related proposal reels, this project was created to showcase how a narrative-driven, interactive experience can be built with vanilla front-end technologies.

The application guides a user through a playful, forensic-themed "case file" which they must solve by examining evidence, cracking a password, and making choices. The solution unlocks a custom message, a celebratory animation, and a photo gallery, creating a complete narrative experience.



***
## 🌐 Live Demo

This project is live and deployed on **Vercel**. You can view the interactive case file here:

[**➡️ View Live Demo**](https://your-project-link.vercel.app)

***
## ✨ Features

-   **Interactive Puzzle UI**: A clean, themed user interface that immerses the user in the role of an investigator.
-   **Dynamic Evidence Locker**: Asynchronously loads external `.txt` files on demand using the Fetch API to display evidence without reloading the page.
-   🔑 **Cryptographic Element**: Incorporates a **Base64 encoded message** as a piece of evidence, adding a simple cryptographic puzzle for the user to solve.
-   **Custom Modal System**: A reusable pop-up component for viewing detailed evidence (letters).
-   **Celebratory Animation**: Utilizes the `canvas-confetti` library for a fun visual celebration upon successful completion.
-   **Photo Slideshow Finale**: A final, full-screen photo gallery with navigation controls serves as a memorable epilogue.
-   **Themed & Responsive Design**: A dark, "top secret" aesthetic built with modern CSS that works well on different screen sizes.

***
## 🚀 Core Concepts & Technology

This project is built with a focus on core web technologies, demonstrating a strong foundation in front-end development without relying on heavy frameworks.

-   **HTML5**: Structures the entire application, from the case file evidence to the final reveal screens.
-   **CSS3**: Creates the immersive, retro-tech theme using modern features like **Flexbox** and **transitions**.
-   **JavaScript (ES6+)**: The brain of the operation. All interactivity is powered by vanilla JavaScript, including DOM manipulation, event handling, and asynchronous operations.
-   **`canvas-confetti`**: A lightweight, third-party library integrated via CDN to add a delightful confetti animation.

### Cryptography & Puzzles

While not a true encryption scheme, **Base64** is used in the project as a form of encoding to obscure a message in 'Evidence A'. This introduces a light cryptographic puzzle, requiring the user to use an online decoder to reveal the clue, fitting perfectly with the forensic and CSE themes of the project.

### How It Works: The User Flow

The application is a carefully orchestrated state machine that guides the user through a specific sequence of events.

1.  **Investigation Phase**: The user is presented with the `case-file`. They can click buttons in the **Evidence Locker** to trigger the Fetch API, which loads text from the `/letters` directory into a modal. They must also decode the Base64 message and solve the **Hint Decryption** challenge.
2.  **Resolution Phase**: Upon entering the correct password, the `case-file` is hidden, and the `love-letter` is revealed.
3.  **Celebration Phase**: Clicking the "YES!" button triggers the `canvas-confetti` animation. A `setTimeout` function then reveals the final `slideshow-container`, providing a memorable conclusion.

***
## 📂 Project Structure

```
interactive-proposal/
│
├── index.html       # Main HTML file for content and structure
├── style.css        # All styles for the application
├── script.js        # Core application logic and interactivity
├── images/          # Folder for slideshow photos (e.g., 1.jpg)
└── letters/         # Folder for evidence letters (e.g., letter1.txt)
```

***
## 🛠️ Setup and Personalization

Follow these steps to customize and run the project locally.

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/vrajshah5104/computer-forensic-science-case.git](https://github.com/vrajshah5104/computer-forensic-science-case.git)
    cd computer-forensic-science-case
    ```
2.  **Add Your Content**:
    -   Place your photos in the `/images` folder.
    -   Place your letters as `.txt` files in the `/letters` folder.
3.  **Configure `script.js`**:
    -   Open `script.js` and edit the configuration block at the top to update the `correctPassword` and the `slideshowImages` array.
4.  **Customize the Story**:
    -   Open `index.html` to edit all text, clues, and messages.
    -   Don't forget to update the **Base64 string** in the `.code-block` element for 'Evidence A'. You can use any online Base64 encoder to create your own secret message.
5.  **Run Locally**:
    -   The easiest way is to use the **Live Server** extension in VS Code. Right-click on `index.html` and select "Open with Live Server".

***
## 💡 Future Improvements

-   [ ] **Refactor CSS**: Move repeating color values and font families to CSS custom properties for easier theme management.
-   [ ] **Add More Animations**: Use CSS transitions or a small animation library to make content reveals more dynamic.
-   [ ] **Accessibility Audit**: Improve accessibility by adding ARIA attributes and ensuring keyboard navigation is fully supported.
-   [ ] **Error Handling**: Enhance the `fetch` logic to provide more specific feedback if a letter file is not found.

***
## 🤝 Contact & Acknowledgments

Feel free to connect if you have any questions or suggestions!

-   **GitHub**: [vrajshah5104](https://github.com/vrajshah5104)
-   **LinkedIn**: [vraj-nilay-shah](https://www.linkedin.com/in/vraj-nilay-shah)

This project was a fun and heartfelt exploration of what can be built with core web technologies. Thanks for checking it out!

***
## 📜 License

MIT
