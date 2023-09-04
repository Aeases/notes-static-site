---
cssclasses:
  - list-cards
---
Why organise data?
To be able to save an rerieve work efficiently.
Beofre computers, people used cardboar files and folers to tore paperwork
Now,people use digital files and folders on their devices to store their digital work.

### Common File format types
- Vector Image
	- Images that use mathematical calculations to draw curves. Great for simple graphics like logos. Always stays sharp even when you zoom in. 
	- Examples of Vector Images
		.cgm - Computer graphics metafile
		.svg - Scalable Vector Graphics
		.ai - Adobe Illustrator
- Raster Images
	- Images that use a grid of oloured pixels to represent an image. Great for photgraphs but gets pixellated when zoomed in.
	- Vector Image Extentions
		.bmp - Bitmap
		.gif - Graphical Interchange Format
		.jpeg - Joint Photographic Experts Group
		.tiff - Tagged Image File Format
		.png - Portable Network Graphics
- Audio File
	- Files that hold audio
	- Audio Image file extensions
		.mp3 - Moving Picture Experts Group
		.wav - Waveform Audio
		.wma - Windows Media audio

## File Compression
Files are compressed in order to save space. making it easier to store or send to oters. There are two types of compression:
- ###### Lossy
	- A method that removes data (like similar colours in a JPEG file) to reduce file size. Data is permantly lost when uncompressed.
	- Examples
		JPEG,
		MP3 - (compressed by removing unused frequencies)
- ###### Lossless
	- A method that does not remove data. All data is retained when uncompressed
	- Examples:
		BMP
		GIF
		PNG
		WAV

Other ways to reduce file sizes
- Cropping - Cutting out parts of an image
- Resampling - Changing the dots per inch (DPI) of an image to make it smaller. Lower DPI = smaller file size but lower image quality

Cloud Computing means storing and accessing data and programs over the itnernet instead of your computer's hard drive. 
E.g. Google Drive, Dropbox, Apple iCloud

##### Storing data in the cloud requires 3 things:
- Internet
- Username and password
- Accepting user agreement

##### Advantages:
- No need to buy software
- Can access files from any device
- updates are automatic
- Compatibility across different devices
##### Disadvantges
- Security - Who has control of your data?
- Privacy - Who can see your information?

- Onwership - Who owns the data stored on the cloud?

###### Responsive Design #review 
- An app or website is functional on both a phone and a computer/laptop etc.


### Data Management Strategy
This is a strategy that organisations have to ensure:
- Data is stored and used in a manner required by the organisation
- Data is controlled, monitored and protected.
### System Utility tools
To keep yur system in optinum working order yo ucan use these tools:
- **Disk Cleanup**
	- Analyses your storage and finds / deletes file and programs that are no longer required. freeung up disk space.
- **Anti-Malware Software**
	- A Program that scans, fins and deletes software that may cause harm to your computer (viruses, spyware, spam etc.)
- ---
- **Spyware**
	- Software that sends your information to another paty without your knowledge (Such as yur browser habits)
- **Disk Defragmenter**
	- D.D helps the process of rearranging the files on a hard disk so that they're continuous / adjoining / contiguous. This allwos faster access time for files to display on yoru screen.
# Management of Software
Installation - Putting software onto a evice for the first time.
Updating - Applying new features, bu fixes to already installed software.

## Software Licenses
- Open Source - Programmng code that may be freely modified.
- Closed Source - Programming code that may onto be modified unless permission is sought from the owner.

- Proprietary - Sotware that belongs to a particular person or company E.G. Windows is proprietary closed source software owned by Microsoft.
- Shareware - Software whose distribution is openly encouraged. Many features are often limited until the software is fully paid for.
- Freeware - Software that is completely free to use.

---
Mr. Fog Email:
# Security Techniques

Here are some practical steps you and your staff can take to improve your data security:

- Back up your data
- Use strong passwords and Two Factor Authentication (2FA)
- Be aware of your surroundings
- Don’t open suspicious emails
- Install antimalware software
- Protect your device when unattended
- Use a secure WiFi
- Take care when sharing your screen
- Don’t keep data longer than you need to
- Dispose of old devices securely

## Disaster Recovery Plan
A disaster can cripple a business therefore it is important that companies have a Disaster Recovery Plan (DRP) and an Audit Trail to restore operations as soon as possible

###### DISASTER RECOVERY PLAN
is a set of steps to protect data in the event of a disaster.
- usually it is in writing
- it is to minimise data loss
- it is to minimise down time
- it includes storing data off-site
###### AUDIT TRAIL:
- audit trails provide how the data comes into, or leaves, the company
Part of a DRP includes having a Hot, Warm, or Cold Site recovery:
###### HOT SITE
- this is a duplicate of the existing site in every way, servers, rooming, real time synchronisation so data is the same
- following a disaster, this new site would be up and running in a short time frame eg 2 hours
- advantage is it is ready to go and is the best recovery solution
- disadvantage is it is very expensive to setup
- EXAMPLE 'bank up and running in 2 hours after twin towers collapse"
###### WARM SITE
- this is a site that has computers set up, but not exact duplicates
- following a disaster, this new site would be up and running in a longer time frame eg a week
- advantage is it is not as expensive as the hot site
- disadvantage is down time to get site operational  
###### COLD SITE
- this is a site that is not configured with computers and other hardware, some may be more setup than others
- advantage is it is much cheaper than the hot or warm site
- disadvantage is it is more down time. more time needed to get up and running

## Backups
Data backup is the process of replicating files to be stored at a designated location. Disaster recovery is a system that helps restore those files following a catastrophe.
You can have data backup without a disaster recovery plan, but not the other way around. If there are no data saved, there is nothing to recover.

There are two concepts in regards to backups:
**Recovery Time Objective (RTO)**: Is the target time you set for the recovery of your IT and business activities after a disaster has struck.
**Recovery Point Objective (RPO)**: RPO is the time between data backups and the amount of data that could be lost in between backups.
*By having more frequent backups, RPO is decreased. But because there are more backups, it can take longer to restore them, thus increasing the RTO.*

###### **Full Backup**
This is when you back up everything in its entirety.
- **Advantage** 
	- Everything is saved!
- **Disadvantage** 
	- It takes a long time to back up everything.
###### **Daily Backup** 
The process of backing up data every day. 
- **Advantages**:
	- If you lose your data, you will have lost perhaps only the last 24 hours of information.
- **Disadvantage:** 
	- Doing a daily backup takes time. Also, you can end up with many different backup files (i.e. Monday backup, Tuesday backup, Wednesday backup etc) as opposed to doing a weekly backup where you would only have one backup file.

	If you do a daily backup, this means the Recovery Point Objective (RPO) is decreased (only a small amount of information will be lost if disaster strikes). BUT because you have multiple backup files for each individual day (instead of say, one backup for the week), it takes longer to restore everything because there are multiple backup files instead of one (thus, Recovery Time Objective [RTO] is increased!).

  

#### Differential Backup
backs up only the files that changed since the last full backup. For example, suppose you do a full backup on Sunday. On Monday you back up only the files that changed since Sunday, on Tuesday you back up only the files that changed since Sunday, and so on.

- Advantage 
	- Quicker than a full backup, not much storage space needed.

- Disadvantage 
	- Very slow to back up

####  Incremental Backup
Only backs up the data that has changed since the last backup on the PREVIOUS DAY (not the whole week like a differential backup). 
For example, If you do an incremental backup on Tuesday, you only back up the data that changed since the incremental backup on Monday. If you do an incremental backup on Wednesday, you only back up the data that changed since the incremental backup on Tuesday.

- Advantage 
	- Small, fast back ups.

- Disadvantage 
	- Because there are lots of backups, it can take a long time to restore them all.
###### Data Warehouse 
A repository of information where data is stored online (like a huge database of information).

###### Data Mart
A smaller database usually focused on a specific subject (i.e. a data mart for products, a data mart for sales etc).

##### Data Mining 
the practice of examining large pre-existing databases (data marts/warehouses) in order to find/generate new information about something. 
###### Purpose of Datamining
By using software to look for patterns in large batches of data, businesses can learn more about their customers to develop more effective marketing strategies, increase sales and decrease costs.

[Real world example](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal)



## User-generated content

- blogs 
- chat
- wikikis
- discussion fourms
- tweets
- podcasts
- pins
- images
- videos
- audio files

### Advantages of User-generated content
- More information is available
- this iformatio nis now categorised, so it is easier to find ,, e.g. different blogs
- Review of products helps people looking to buy that product.

### Concept of HyperText Markup Language
HypterText markup language or HTML is the standard language to make webpages 

HTML tells the browser how to put the webpage together ow to set otu the text images and more 
Tim beners leee invented html in 1990
he developed http, as well as founding the [[World Wide Web Consortium (W3C)]], to ovresee web improvements
##### How a  browser puts a webpage together
- A browser like Intenet Explorer, Chrome, Firefox firstly goes to a web adrdress or URL.
- It looks for a html opening tag
- If it finds it, it looks for a html closing tag.
- If it finds these two it will display a page
- It will layout the webpage based on the html tags in the webpage.

## Content Management Systems (CMS)

A Content Management System (CMS) is web-based software (or website) that allows users to interact with a website for a specific purpose. When used in education, it is known as a Learning Management System (LMS).

SEQTA is an example of an LMS.

- can provide a course based website
- all content stored in one place
- educators can provide course outlines
- educators can provide assignments, glossaries, quizzes and more
- users can login to participate
- users can get course outlines, assignments, quizzes and more
- users can participate in Web 2.0 type discussion forums
- users can post assignments

### Validation Techniques for Online Forms.
When people submit forms on the internet they can make mistakes. Nowadays, mistakes don't happen so often because web creators now use data validation techniques.

#### Techniques

- check to see if the data is in the correct format
	- eg for an email field; `an "@" symbol and domain are present`
- check for duplication eg creating an account displays username availability
- check for completion of essential details eg some forms have an asterisk * for essential fields
- for essential details it is a good idea to put it in twice. eg choose password, re-type password

#### Validation Feedback
- if validation fails, the user should be given clear help to identify the error. eg a red box around the mistake
- the error can also be a pop up tool tip, or a change of colour of the field
- can occur once the submit button is clicked
- can occur in real-time, while the user is filling in the field
##### Currency, Verifiability, and Accuracy of Information.
- Currency - Is the information current, or outdated?
- Verifiability - Is the information from a valid source, or an unreliable source?
- Accuracy - Is the information factual, or could it have been made up?