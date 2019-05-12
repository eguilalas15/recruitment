# Recruitment-Management-System
Project for CS 546 Web Programming at Stevens Institute of Technology.

Step 1: `npm install` to install the neccessary modules 

Step 2: Seed the database
Run the following command: 
    ```
    node tasks/seed.js
    ctrl + c
    ```

The collections "users" and "jobDescription" would be populated by running the above command.

In our new databases, we got rid of Applicant DB and merged it into our users db.
```
    users: {
   “_id”: Unique Id
    "userType": "employer/applicant to differentiate",
    "username": "username with constraints",
    "email": "validated email",
    "password": "password in *** (for UI) and in letters for mongoDB"
    "firstName": "applicant's first name"
    "lastName": "applicant's last name"
    "phoneNumber": "applicant's phone number"
    }
```


The collection "application" cannot be populated because it contains the fields, "userId" and "jobId" which are generated by MongoDB in the collections "users" and "jobDescription" respectively. 

The collection jobsAndDocs cannot be populated because it contains the fields, "userId","jobId" (the actual jobId as key) and "documentID"(array of actual documentID as value of the object having the actual jobID as key) which is again generated by MongoDB in the collections "users" and "jobDescription" respectively. Whenever an applicant submits an application, "jobsAndDocs" collection is created.

The applicantDocument has two collections, "files"(applicantDocuments.files) and "chunks"(applicantDocuments.chunks) which is generated by gridFS which is a library in node.js. These collections are generated when a user uploads any documents.

Step 3: Run the web application
Run the following command: `npm start` OR `node app.js`

Step 4: Log in as an applicant and apply for a job
To login as an applicant:
```
    username:    john123
    password:    john@123
```

Step 5: Log in as a recruiter and either post a job or view applications
To login as a recruiter:
```
    username:   mohit123
    password:    mohit@123
```

#Features
1. Candidate Login
2. Recruiter Login
3. Job Posting
4. Application submission
5. Viewing Application
6. Application Status

#Group Members
- Mohit Bhagchandani
- Mana Satra
- Zhang Peng
- Christina Li
- Ekaterina Bevinova





