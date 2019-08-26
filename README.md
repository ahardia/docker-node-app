## Prerequisites
After cloning the repo,

In order to make this application work, you need to have a test.txt file at path */home/rails/docs* in your host machine.  
Run these commands to create that file:  
``` 
sudo touch /home/rails/docs/test.txt  
sudo chmod 777 /home/rails/docs/test.txt  
echo "Hello World!" >> /home/rails/docs/test.txt  
```

## To Run this app:  
Go to root of the project & 
Run commands:

```
docker image build -t my-node-image .  
docker run -d --name my-node-app -p 3300:3000 -v /home/rails/docs:/home/node/app/tmp my-node-image
```


After running your container, visit *http://localhost:3300/file*