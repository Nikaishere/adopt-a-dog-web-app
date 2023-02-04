DROP TABLE IF EXISTS dog_breeds;

CREATE TABLE dog_breeds (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    size VARCHAR (50) NOT NULL,energy VARCHAR (40) NOT NULL,image VARCHAR (100) NOT NULL,
    protectiveness VARCHAR (50) NOT NULL,trainability VARCHAR (50) NOT NULL,
    shedding VARCHAR (50) NOT NULL
)

 insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Border collie","https://www.akc.org/wp-content/uploads/2017/11/Border-Collie-On-White-01.jpg","medium","high",
"guardian","high","moderate");

 insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Irish setter","https://www.akc.org/wp-content/uploads/2017/11/Irish-Setter.4.jpg","large","high",
"guardian","high","moderate");
 
insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Chihuahua","https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-standing-in-three-quarter-view.jpg","small","moderate",
"adorable","low","low");

insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Basset hound","https://www.akc.org/wp-content/uploads/2017/11/Basset-Hound-On-White-03.jpg","medium","low",
"social","low","moderate");

 insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Basenji","https://www.akc.org/dog-breeds/basenji/","medium","high",
"social","moderate","moderate");

 insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Chesapeake bay retriever","https://www.akc.org/wp-content/uploads/2017/11/Chesapeake-Bay-Retriever-On-White-03.jpg","large","high",
"guardian","high","moderate");

insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Toy poodle","https://www.akc.org/wp-content/uploads/2018/04/Toy-Poodle-on-White-02.jpg","small","moderate",
"adorable","moderate","low");


 insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Pekingese","https://www.akc.org/wp-content/uploads/2017/11/Pekingese-On-White-01.jpg","small","low",
"adorable","low","moderate");

 insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Samoyed","https://www.akc.org/wp-content/uploads/2017/11/Samoyed-On-White-03.jpg","large","moderate",
"social","moderate","moderate");

 insert into dog_breeds (name,size,energy,image,protectiveness,trainability,shedding) values ("Siberian husky","https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-On-White-03.jpg","large","moderate",
"guardian","high","high");
