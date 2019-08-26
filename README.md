After cloning the repo

In order to make this application work, you need to have a test.txt file at path */home/rails/docs*

Go to root of the project & 
Run commands:

docker image build -t my-node-image .

docker run -d --name my-node-app -p 3300:3000 -v /home/rails/docs:/home/node/app/tmp my-node-image