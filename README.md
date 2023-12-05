# sprinterns2024
Sprinternship 2024 Challenge Project

### Setup Your Local Go Environment
Go to https://github.com/bitly/sprinterns2024 

Click the “<> Code” Dropdown button and toggle to SSH
Copy the url: git@github.com:bitly/sprinterns2024.git 

Open a Terminal window on your computer. If you have a Mac, this should be pretty straightforward (although we may need to install Git if you haven’t used it before). If you’re on a windows computer, we may need to install a git specific terminal - we’ll figure it out together!

`$ cd` (to get into your home directory 

`$ git clone git@github.com:bitly/sprinterns2024.git`

If you get permissioning errors (about not being able to pull from this repo - we’ll need to take some steps to allow you to interact with git via SSH). 

Once you’ve successfully cloned the repository, if you do an `ls -la` command in your terminal, you should now see a “sprinterns2024” directory listed! 

Now we’ll deal with installing dependencies
`$ go mod tidy`

If you do not already have homebrew installed, you can do so by running the following command in your terminal:
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

We also need to install our database - MySQL
`$ brew install mysql`

`$ brew services start mysql`

`$ mysql_secure_installation` - set the password to `admin`. You shouldn't enforce a strong password here because otherwise it'll reject admin. If you can't get it to accept admin, just put in a strong password then: 

`$ mysql -u root -p $ UPDATE mysql.user SET authentication_string=null WHERE User='root';`

`$ FLUSH PRIVILEGES; $ exit;` 

`$ mysql -u root $ ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'admin';`


To Start the MySQL Server: 
`$ mysql.server start` 

To Stop the MySQL Server: 
`$ mysql.server stop`

To access the DB command line: 
`$ mysql -u root -p` (then enter the password you created when prompted)

Once the dependencies have been installed, you’ll be able to run the server/app with:
`$ go run main.go`

