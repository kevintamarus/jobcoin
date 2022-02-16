### Notes

- I used React Native cli on iOS only to create a boilerplate app and built the features on top of that, if your machine is not configured to run React Native, I'll also include a demo gif so you can see the results of the code.
- I took the coding challenge as if I'm building a feature for a large-scale app, so I took the liberty of organizing all the files and components
- I built my own custom navigation on App.js
- Not sure if intended, but I have an error check that won't let the user proceed if they enter an address with no transactions
- I figured a chart of recent transactions would prob be something a user would want to see, I also included a full list of the address' transactions, displayed with a modal
- I forgot to filter the last 5 transactions, so it will show up as multiple, let me know if you want me to take more time to get that functionality up (in a real app scenario, this will be handled by the back-end where I can just request the last 5 transactions from them)
- Some of the components are not styled at all (i.e. the All Transactions modal), let me know if you want me to take more time to try to style them

### To Run the App (If your machine is configured to run React Natve)

- In your terminal, change directory to the app folder, run `yarn`, then `cd ios && pod install`
- go back to the app directory, run `yarn start`
- in a separate terminal, change directory to the app folder, then run `yarn run ios`
- an iOS simulator should start and load the app