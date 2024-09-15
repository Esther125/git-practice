## Git 
### Explanations of Git Terminology
#### blob
It stands for "binary large object." It represents the contents of a file.

#### tree
It acts like a directory. It can point to a set of blobs or other trees.

#### commit
A **snapshot** of my project at a certain point of time.

#### branch
A separate line of development. I can develope new feature **independently** without affecting other work on a new branch.

#### head 
A **pointer** indicating my current working branch and the current state of my project.

---

### What's the difference I discovered in `.git` file when operating git repo?
I discover that every time I make a commit, I see new objects added in the `.git/objects` folder. 

![object](/images/objects_image.png)

Additionally, the `.git/logs` folder updates to record the details of these changes. This includes every commit with information on the commit ID, author, branch, and message, providing a traceable history of updates within the project.

![log](/images/log_image.png)


---
### How to write a good commit message?
+ Be precise but complete.
+ Better to start with a verb.
+ It's good to add some prefix such as
    + `feat`: Indicates a new feature is added to the project.
    + `fix`: Indicates a bug fix.
    + `readme`: Changes made to the README file for documentation purposes.
    + `refactor`: Code changed that neither fixes a bug nor adds a feature.
    + `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    + `test`: Adding missing tests or correcting existing tests.

    to make people understand what this commit has done quickly.
    
+ Include References to ticket or issue number that the commit is related to. (e.g., `See #123`, `Closes #456`) 
