Student Management App
Overview
The Student Management App is a simple web application built with HTML, CSS (using Bootstrap), and vanilla JavaScript. It allows users to manage student data by adding, viewing, filtering, and deleting student records. The app communicates with a backend API to store and retrieve data.

Features
Add Student: Users can fill out a form to add a new student. The form includes fields for the student's name, age, gender, grade, marks, and attendance.
View Student List: Displays a list of all students retrieved from the backend API.
Filter by Gender: Users can filter the displayed student list based on gender.
Delete Student: Each student record in the list has a delete button to remove the student from the backend.
Technologies Used
HTML: Provides the structure of the application.
CSS (Bootstrap): Ensures the application is styled and responsive.
JavaScript: Handles the form submissions, data fetching, and DOM manipulation.
Backend API: Communicates with an external backend to store and retrieve student data.
Usage
Home Page (index.html): Navigate to the home page of the app.
Student List (studentList.html): View and manage the list of students. Use the filter to display students based on gender.
Add Student (addStudent.html): Fill in the form to add a new student.
How It Works
Adding a Student:

The user fills out the form and submits it.
The form data is sent to the backend API using a POST request.
If the request is successful, a success message is displayed, and the form fields are cleared.
If the request fails, an error message is displayed.
Viewing the Student List:

When the page loads, a GET request is made to the backend API to fetch all student records.
The records are displayed in a list format.
Users can filter the list by gender using the dropdown menu.
Deleting a Student:

Each student record has a delete button.
When the delete button is clicked, a DELETE request is sent to the backend API with the student's ID.
If the request is successful, the student is removed from the list, and a success message is displayed.
If the request fails, an error message is displayed.
Files
index.html: Home page of the application.
studentList.html: Page for viewing and managing the student list.
addStudent.html: Page for adding a new student.
addStudents.js: JavaScript file for handling form submissions and interactions on the add student page.
studentList.js: JavaScript file for handling data fetching and interactions on the student list page.
Getting Started
To get started with the project, follow these steps:

Clone the repository.
Open the index.html file in your browser to view the home page.
Navigate to the addStudent.html file to add new students.
Navigate to the studentList.html file to view and manage the student list.
API Endpoint
Base URL: https://student-management-Student-neog.replit.app/students
POST /students: Add a new student.
GET /students: Retrieve all students.
DELETE /students/:id: Delete a student by ID
