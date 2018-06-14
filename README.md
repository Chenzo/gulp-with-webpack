Lifestyle Site Boilerplate V2.2
====================  

How to use this boilerplate. 
----

*please note:* wherever it says com.lifestylesite.www please use the correct url of the project you're working on.

------

On your local machine, open a terminal and in your projects folder create a new folder for the repo:
> `$ mkdir com.lifestylesite.www`

Initialize a new git repo in that directory

> `$ cd com.lifestylesite.www`  
> `$ git init`

Create a blank readme.md file by touching it.

> `$ touch README.md`

Now we'll commit this to the empty repo.

> `$ git add .`  
> `$ git commit -m "First Commit"`


Then, in your browser, navigate to [bitbucket.org](https://bitbucket.org/repo/create?owner=tollbrothers "bitbucket.org create repo") and create a new repo.

> **Owner**: tollbrothers  
> **Project**: Websites - Lifestyle  
> **Repository Name:** com.lifestylesite.www

IMAGE HERE

After you click the CREATE REPOSITORY button, you'll be on an empty repo. Expand the 'I have an exising project' section and copy the 'remote add' command. Retrun to your terminal and paste it in and run it:

> `$ git remote add origin git@bitbucket.org:tollbrothers/com.lifestylesite.com.git`  

Now that it's pointed at BitBucket push it up there:

> `$ git push -u origin master`

At this point, the repo should only contain on branch, Master, and one file, a blank README.md  

Now you'll need to create a branch for your new work:

> `$ git checkout -b new_site`

Now that we're switched over to this new branch we can copy the boilerplate files over.

> NOTE: You should NOT copy the `.git` folder nor the `node_modules` folder.

After all this, we should be ready to rock!


------

#### Password
Credentials for dev and stage are:  
username: happyacres  
password: Toll2018*  
The username will need to be changed to the domain of the site.