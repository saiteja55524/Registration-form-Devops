# User Registration Form with DevOps

## 📌 Project Overview
The **User Registration Form with DevOps** is a simple web application developed using HTML, CSS, and JavaScript. It allows users to enter their name, email address, password, and confirm password. JavaScript validates the input fields and displays appropriate success or error messages.

This project demonstrates how DevOps tools can be used to manage source code, automate checks, and containerize a web application.

## 🚀 Features
- Simple and responsive registration form.
- Input validation for required fields.
- Email format validation.
- Password length and confirmation checks.
- Docker containerization using Nginx.
- Automated file and JavaScript syntax checks using GitHub Actions.
- Source code management using Git and GitHub.

## 🛠️ Technologies Used
- **HTML5** – Structure of the registration form.
- **CSS3** – Styling and responsive layout.
- **JavaScript** – Form validation.
- **Git** – Version control.
- **GitHub** – Source code hosting.
- **Docker** – Containerization.
- **GitHub Actions** – Continuous Integration (CI).

## 📂 Project Structure

```text
Registration-form-Devops/
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
└── .github/
    └── workflows/
        └── ci.yml
```

## ▶️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/saiteja55524/Registration-form-Devops.git
   ```

2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser, or use the Live Server extension.
4. Enter the required details and click **Register** to test the form.

## 🐳 Run Using Docker

Make sure Docker Desktop is running.

1. Build the Docker image:

   ```bash
   docker build -t registration-form .
   ```

2. Run the container:

   ```bash
   docker run --name registration-form-app -p 8080:80 -d registration-form
   ```

3. Open the application in your browser:

   http://localhost:8080

To stop the container:

```bash
docker stop registration-form-app
```

To remove the stopped container:

```bash
docker rm registration-form-app
```

## ⚙️ DevOps Implementation

**Git and GitHub:** Used to track changes and maintain the project repository.

**Docker:** Packages the static web application into a container using the Nginx web server.

**GitHub Actions:** Automatically checks whether the required application files exist and validates JavaScript syntax whenever code is pushed or a pull request is created.

## 🧪 Testing
The application can be tested by entering valid and invalid registration details.

- Submit the form with empty fields.
- Enter an invalid email address.
- Enter a password shorter than six characters.
- Enter different passwords in the password and confirmation fields.
- Submit valid details to see the success message.

## ⚠️ Limitations
This is a front-end demonstration project. It does not store user details, create actual user accounts, or implement backend authentication.

## 🎯 Learning Outcomes
- Understanding basic web development.
- Learning Git and GitHub workflows.
- Understanding Docker images and containers.
- Implementing a basic Continuous Integration pipeline.
- Learning application testing and deployment fundamentals.

## 👨‍💻 Author
Developed as a beginner-friendly DevOps project to demonstrate web development, containerization, and CI automation.
