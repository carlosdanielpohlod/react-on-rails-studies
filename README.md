# README

## Description
<img src="https://i.pinimg.com/originals/3f/f8/de/3ff8de311854ae91dae1919f7806ff86.gif" width="40px" heigth="40px"> This is an app built using React on Rails with Rails 7.  

Is a pretty simple project composed by an Input and a Label, with the context shared by the React context API. 
![Captura de tela de 2024-03-31 20-36-50](https://github.com/carlosdanielpohlod/react-on-rails-studies/assets/45002267/6fa365df-119a-430b-9a17-01db552e1961)

## Setup
To set up this application, follow these steps:

1. You need a Rails application with Shakapacker installed and configured on it. Check the [Shakapacker documentation](https://www.shakacode.com/react-on-rails/docs/getting-started/) for more details but typically you need the following steps:
   ```
   rails new PROJECT_NAME --skip-javascript
   cd PROJECT_NAME
   bundle add shakapacker --strict
   rails shakapacker:install
   ```
   You may need to check the instructions for installing into an existing Rails app if you have an already working Rails application.

2. Add the `react_on_rails` gem to your Gemfile:
   ```
   bundle add react_on_rails --strict
   ```

3. Commit this change to git (or else you cannot run the generator in the next step unless you pass the option `--ignore-warnings`).

4. Run the install generator:
   ```
   rails generate react_on_rails:install
   ```

## Usage
To start the app:

- Run `./bin/dev` for HMR.
- Run `./bin/dev-static` for statically created bundles (no HMR).

Then, visit [http://localhost:3000/hello_with_context](http://localhost:3000/hello_with_context) in your browser.

## Further Information
For more detailed information on getting started with React on Rails, refer to the [official documentation](https://www.shakacode.com/react-on-rails/docs/getting-started/).
