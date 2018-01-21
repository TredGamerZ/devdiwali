# Dev-ali
A small fun website for crackerless and eco-friendly diwali'17. It's simple project to see how many people we can get onboard this diwali to light up online and going crackerless this year. Just a small step to controll a little bit of pollution for our planet. Here is the <a href="http://www.tredgamerz.com">link</a>

<img src="https://user-images.githubusercontent.com/9270746/31806044-19b9c8ec-b583-11e7-9fdf-e78e44cde151.png" >

# How we did it
So, here's what happened. I wanted to build something cool for this diwali and after thinking for couple hours about what should I build, It hit me. A simple website which show's how many people are there crackin'up with you. 
After the basic brainstroming I got straight into the dev part. 

Made some prototypes on how it should look: 
<img src="https://user-images.githubusercontent.com/9270746/31806005-c1672d9c-b582-11e7-8375-cac159cd2c32.PNG" style="width:50%">
<img src="https://user-images.githubusercontent.com/9270746/31806007-c341ed82-b582-11e7-91b5-f65f434acaa1.PNG" style="width:50%">
The above protoype was made using SVGs. And using SVGs had a problem.
We were aiming to get a couple hundered of requests and using SVGs for the representation and animtation would have been a real pain. We searched a little bit and got a pretty nice solution. HTML5 Canvas, It had everything we were looking for. Easy customizabilty, used simple mathematics and was easy to manipulate. Then again there was a problem, we only got 6-7 hours to finish it up and we had no clue how to actually use HTML5 Canvas.

After watching couple of tutorials, we had a fair idea of what were we going to build and how we were going to build it. All that left was to actually start the development and finish it in 3 Hours.

Now, the technical part;

### Technologies Used
* NodeJs - Express - MongoDB
* AWS ElasticBeanstalk
* Bootstrap and HTML5 Canvas
* PassportJS 

We built a basic Express App connected with Mlab (MongoDB). 
The main job was to create this firecracker effect, for that we used HTML5 Canvas. Also, we had to generate this effect  accordingly with our data from the backend, for that we used simple post queries and simple login using passportJS. We used PassportJS - Facebook Oauth to get the user's name and location. After completing it and revising it we finally shipped it on AWS.

Happy Diwali!

<img src="https://user-images.githubusercontent.com/9270746/31806047-1a362162-b583-11e7-9cb9-0f7d47023a03.png">
