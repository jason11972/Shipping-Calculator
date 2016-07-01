# Guessing Game

## Code Setup Details

#####1. Open PHPStorm

#####2. Fork This Repo - IMPORTANT Do this first

>- Click on the <kbd> **Fork** </kbd> button in the top right of the page

#####3. Clone This Repo
>1. **After** Forking
1. In your terminal verify you are in the proper directory
  1. You should be in your `lfz` directory
  1. To check your directory type `pwd` then press <kbd>Enter </kbd>
    1. You should see something along the lines of:
    1. `/Applications/MAMP/htdocs/lfz`
    1. If you are not in the proper directory navigate to the `lfz` folder, if you're not sure how, contact an instructor
1. Enter the following command into the terminal to clone the `Guess` repo
  1. `git clone https://github.com/[Your User Name]/shipping_calculator.git`

#####4. Navigate to guess

> Insert this command in the terminal tab

> `cd guess` & press enter

>- this changes the directory to the `shipping_calculator` folder
- If you get an error with the above command its probably because you are already within the correct directory
- *Reminder* - You can use `pwd` to check your current directory

#####5. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

>`git checkout master` & press <kbd>Enter </kbd>
>- The command above switches to the default branch

>`git checkout -b v0.1` & press <kbd>Enter </kbd>
>- Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
- Any modifications to these files after <b>branching</b> can be undone
- "v0.1" is the branch name.

## Coding Instructions

### Layout Scope
>- Create a text input 
    - Purpose: will hold the weight of the package to be shipped
    - give it an ID
    - give it a placeholder of "weight of package in pounds"
- Create 3 radio buttons.
    - give them all the same name attribute
    - give them the same class
    - give each a label tag that is associated with each one individually (make sure look up labels and how they use an input's ID. 
  - The 3 radio buttons will have the following labels and values
    - label - 5 day, value - 5  - make this the default
    - label - 3 day, value - 3
    - label - 2 day, value - 2
  - button
    - label: calculate
    - give it an id
  create a div
    - give it an ID
    - purpose - display the shipping information of the package (the weight in ounces, the price of shipping, and the expected arrival date
  
  

### Functional Scope
>- create the following global variable:
  - shipping_time
    - purpose: storage for what the current shipping time is
    - initial value: 5
- create the following functions:
    - apply_event_handlers
      - name: apply_event_handlers
      - purpose: will add event handlers to all of the appropriate elements
      - params: none
      - return: none
      - details:
        - add a keydown handler to the text input that calls "validate_keydown" 
        - add a click handler to the radio buttons (all of them) that calls "change_shipping_type"
        - add a click handler to the button that calls "calculate_shipping"
    - validate_keydown
      - name: apply_event_handlers
      - purpose: checks the incoming values.  If anything other than a number is pressed, it returns false.
      - param: event {object} the object that holds the details of the event
      - return: true if the key pressed is a number, false if it is not
      - hints:
        - look at the event, find the property that holds the ASCII number that corresponds to the letter you pressed
        - compare the values.  If they don't correspond to 0 through 9, return false.  Else return true if they do
      - extra knowledge: once you get it to work with keydown, what's the difference if you instead change the event to keypress
    - change_shipping_type
      - name: change_shipping_type
      - purpose: update the stored value for the shipping based on the clicked radio button
      - param: none
      - global: shipping_time
      - returns: none
      - hint: the radio button clicked will be the value you need.  So this should point to the right element.
    - calculate_shipping
      - name: calculate_shipping
      - purpose: process the shipping time and weight, and return an object with the shipping time and weight
      - param: none
      - global: shipping_time
      - returns: an object with the following properties and values:
        - arrival_date {string} the expected arrival time
        - weight {number} the weight (in ounces) of the package
        - cost {number} the cost (in dollars) of shipping the package
## After Coding Details

##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "v0.1 - [Your Name]"`
> - [Your Name] should be replaced with your First & Last name

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin v0.1`

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

> ####Step 4.1 Open your guess Repo in the browser
> - The link Should follow this format 'https://github.com/[your user name]/guess`

> ####Step 4.2 Click Pull request tab to open the pull request list

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a>

> ####Step 4.3 Click "New Pull request" button

> <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a>

> ####Step 4.4 Comparing Changes
> During this step there are a hand full of highlighted things that need to be taken into consideration.

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a>

>##### NOTE: The image is for example puposes only, refer to the below text for what each value should actually be

>  1. `base fork: Learning-Fuze/guess`
>  1. `base: C#_userName`
>    1. Here you will select the option that matches your username
>    1. If you can not locate an option that has your username, contact an instructor
>  1. `head fork: [your_user_name]/guess`
>    1. Here you will select the option that matches your username / guess
>    1. If you can not locate an option that has your username / guess, contact an instructor
>  1. `compare: v0.1`
>    1. Here you will locate the branch name (or feature name) you created at the beginning of this version of the project
>  1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>    1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>    1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by 
instructors at start)
>  1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get <b>v0.1 - [your first & last 
name]</b> already pre-populated in the Title field
>   1. If there is a different title pre-populated, change the title to match the correct format:
>      1. <b>v0.1 - [your first and last name]</b>
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   1. Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a>
