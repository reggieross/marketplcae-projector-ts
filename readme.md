Marketplace Projector
-

###Running Project
- Credentials Needed
  - Aws Access keys
  - postgres user and pw 
- Create .env with proper environment variables set
- to start the project run `npm run start`

### Testing
- This project containers both integration tests and unit tests. 
- To run the integration tests `npm run test:integration`
    - This will spin up a docker container to run you test against mock postgres db
    - In the scope of this project only the repositories have integration test since this layer 
    is the only one working with the db. We want broader integration coverage we need to update the 
    integration jest configuration and come up with naming conventions for integration test files. For 
    now Anything that is test outside of the repository should mock the repo layer
- To run the unit test `npm run test:unit`

###Purpose
- To read events off SQS queue and push into a postgres db so they can later be processed by 
an enhancement api
- This was also a P.O.C to see if this node process would take up less memory than a spring service. 
    - Findings
        - This Service does seem to take up less memory due to the fact that it doesn't have to spin
        up and embedded tomcat server like spring does. However the speed at which requests are processed is far slower.
        If we scale horizontally I don't see this as an issue. 