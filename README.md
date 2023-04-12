<h1 align="center">
  <br>
  <img src="src/assets/images/logo.png" alt="logo" width="400"></img>
  <br>
</h1>
<p align="center">
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Angular">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

# Star Wars Exam

## About Project 🚀

This project corresponds to the first review of the Vueling University. It focuses on showing the learning during the course of the training time.

The goal is to create an application in which components are created, communicate with each other, use services, interfaces, interceptors and incorporate buttons to move forward and backward while displaying breadcrums. Also show all the information of the application in an orderly manner, with harmony both information and image and colors, and that is responsive to other devices.

This project is about the smuggler characters of the Star Wars saga. In it we will show an initial welcome page in which we can access the 4 most famous smuggler characters and then we can enter each of them to see both their characteristics, planet and own ships.

I hope you enjoy seeing it as much as I enjoyed creating it, thank you very much, best regards!

### Prerequisites 📋

This project was generated with Angular CLI version 15.2.3.
This project was generated with Node version 18.15.0
This project was generated with NPM version 9.5.0

### Build with 🛠️

Visual Studio Code

### Instalation 🔧

```bash
# Clone this repository
$ git clone + https://github.com/christianoller8/exam1.git

# Go into the repository
$ cd exam1

# Install dependencies
$ npm install

# Run the app
$ ng serve -o

```

### Scafolding 📁

For the organization at folder level I have followed an architecture as organized and scalable as possible within the standard construction, where all files are completely ordered in their respective place and named in the most understandable way possible.
Here I show an example of such an organization:

![Scafolding](./src/assets/images/info/scafolding-project.jpg)

### ESLint and Prettier 📄

This project has both ESLint and Prettier correctly installed and configured using the following commands:

```bash
# Install ESLint

npm install @typescript-eslint/eslint-plugin@latest --save-dev

# Configure ESLint

npm init @eslint/config

# Install Prettier

npm install --save-dev --save-exact prettier

# Configuration

npm install eslint-config-prettier
```

And configuring both on the .prettierrc file, the package.json for the scripts and the local configurations in Visual Studio Code.

A hook is also configured in the .git folder of the project that prevents you from committing to the master branch to avoid possible problems and encourage you to work on other branches and use pull requests as the correct way to work. Here is an example of what would happen if you try to commit to the master branch:

![Git-hook](./src/assets/images/info/git-hook.jpg)

### Scripts ⚡

The configured scripts that may be useful to you are the following:

```bash
"scripts": {
  "ng": "ng",
  "start": "ng serve --o",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test",
  "prettier": "prettier \"**/*.ts\" --write --ignore-path .gitignore",
  "lint": "eslint \"**/*.ts\" --ignore-path .gitignore",
  "lint.fix": "eslint \"**/*.ts\" --fix --ignore-path .gitignore"
}

```

### Method of work ✏️

For this project I have implemented the branch work methodology, which consists of not committing or pushing directly to the master branch.
The idea of this methodology is to work with a feature branch, creating and closing issues in the github project through pull requests, which in this case are accepted by me, but it is useful for the verification of the work and the possible combination of others by being able to make parallel branches and make pull requests.
I used SourceTree as a tool to manage the branches and the commits, which I find very useful and easy to use.

![Sourcetree](./src/assets/images/git-work.jpg)

### Notion 📖

As an organizational tool to store my tutorials, my examples, my documentation and in general everything related to this and all my projects I have used Notion.
Personally I find it convenient and necessary when making any project both personal and professional as it guarantees a saved in the cloud, a clear and simple organization, both with pages, tables, code ... which undoubtedly makes life much easier when programming.

https://www.notion.so/product

### External library 📚

For this project I have used my own library with the intention of reusing code and showing the process of creating, uploading and installing it to make this project more reusable as well as future projects.
In this case, the library consists of a footer with different information such as email, name, copyright and social networks.
This footer is responsive so we can see it well in different screen sizes

**Normal footer**

---

![Footer](./src/assets/images/info/footer-chris.jpg)

---

**Responsive footer**

---

![Footer-Responsive](./src/assets/images/info/footer-resp-chris.jpg)

---

## Mockups 🎨

<img src="src/assets/images/mockup.jpg" width="450" >

## Final Result

#### Home Page

![Welcome-Page](./src/assets/images/screenshot-welcome.jpg)

#### Characters Page

![Characters-Page](./src/assets/images/screenshot-characters.jpg)

#### Characteristics Page

![Characteristics-Page](./src/assets/images/screenshot-characteristics.jpg)

#### Planet Page

![Planet-Page](./src/assets/images/screenshot-planet.jpg)

#### Ship Page

![Ship-Page](./src/assets/images/screenshot-ship.jpg)

#### Page Not Found Page

![404-Page](./src/assets/images/screenshot-404.jpg)

#### Responsive

![Responsive-Page](./src/assets/images/screenshot-resp.jpg)

## Deploy 📦

### Deployed on Vercel

https://exam1-three.vercel.app/

### Responsive version

https://ui.dev/amiresponsive?url=https://exam1-three.vercel.app/

### Autor ✒️

Christian Oller Vilchez
christianoller.dev@gmail.com

### Gratitude 🎁

- Thanks to all my colleagues at Vueling University and especially to my trainer Jordi for the knowledge imparted during the course.

---

"This is just the beginning, let's go for it!" ✌️
