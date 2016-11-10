# Setting Up

*Step 1:* clone repository. run `git@github.com:SalariumPH/salarium.git` in terminal.

*Step 2:* run `npm install` to install dependencies. (use `sudo npm install` in linux environment)

*Step 3:* We need to reinstall `pre-commit` to recreate hooks with your credentials.
1. `npm remove --save-dev pre-commit`
2. `npm install --save-dev pre-commit`
_Don't like any of these features? [Click here](remove.md)_
_(make sure you have write access to `./git/hooks` for this. For windows users, run Command Promt as Administrator. For Linux Users use sudo command)._
3. Test it afterwards series of linting tests should run when you try to commit changes and would only commit if no errors or warnings are found by lints.

*Step 4:* _this space is reserved for setting up the API_
