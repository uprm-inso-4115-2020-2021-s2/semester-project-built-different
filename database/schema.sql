CREATE TABLE Station
(
  name VARCHAR(250) NOT NULL,
  sid SERIAL NOT NULL,
  description VARCHAR(150) NOT NULL,
  PRIMARY KEY (sid)
);

CREATE TABLE Meal
(
  mid SERIAL NOT NULL,
  name VARCHAR(150) UNIQUE NOT NULL,
  price FLOAT NOT NULL,
  comments VARCHAR(250) NOT NULL,
  available BOOLEAN NOT NULL,
  PRIMARY KEY (mid),
  sid INT NOT NULL,
  FOREIGN KEY (sid) REFERENCES Station(sid)
);

CREATE TABLE Customer
(
  cid SERIAL NOT NULL,
  name VARCHAR(150) NOT NULL,
  password VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  PRIMARY KEY (cid),
  UNIQUE (email)
);

CREATE TABLE Contact_Information
(
  phone VARCHAR(15) NOT NULL,
  payment_type VARCHAR(25) NOT NULL,
  cid INT NOT NULL,
  FOREIGN KEY (cid) REFERENCES Customer(cid)
);

CREATE TABLE Payment
(
  pid SERIAL NOT NULL,
  status VARCHAR(20) NOT NULL,
  timestamp DATE NOT NULL,
  amount FLOAT NOT NULL,
  cid INT NOT NULL,
  FOREIGN KEY (cid) REFERENCES Customer(cid)
);

CREATE TABLE Order_Details
(
  oid SERIAL NOT NULL,
  timestamp DATE NOT NULL,
  status VARCHAR NOT NULL,
  comment VARCHAR(150) NOT NULL,
  total FLOAT NOT NULL,
  cid INT NOT NULL,
  FOREIGN KEY (cid) REFERENCES Customer(cid)
);

insert into customer (name, email, password) values ('Loella', 'lfoord0@zdnet.com', 'YkbA1N');
insert into customer (name, email, password) values ('Axel', 'aalbarez1@auda.org.au', 'zBEK2bmGgh');
insert into customer (name, email, password) values ('Udale', 'uhucke2@soundcloud.com', 'wnqVTuD');
insert into customer (name, email, password) values ('Dodie', 'dplacide3@washingtonpost.com', 'wNkzIPo');
insert into customer (name, email, password) values ('Mortimer', 'mdinneen4@a8.net', 'wnH81C3c37RB');
insert into customer (name, email, password) values ('Serge', 'sfenna5@goo.gl', 'b9ZIzMc8HYK');
insert into customer (name, email, password) values ('Giorgio', 'gmainson6@twitter.com', 'EWuvEF0m8YrM');
insert into customer (name, email, password) values ('Garfield', 'garnaldy7@purevolume.com', 'Lq4jlS5Wc');
insert into customer (name, email, password) values ('Gare', 'glorentz8@yahoo.com', '6umBSQUiJ');
insert into customer (name, email, password) values ('Homere', 'hvenes9@businesswire.com', 'j5bbOlNJ1');
insert into customer (name, email, password) values ('Marni', 'merskinea@symantec.com', 'd02JmqmBoW');
insert into customer (name, email, password) values ('Doralynne', 'dsylvesterb@myspace.com', 'XzGzE7');
insert into customer (name, email, password) values ('Zachariah', 'zborlandc@mlb.com', 'HSkQ0wxRuHAI');
insert into customer (name, email, password) values ('Camala', 'cgrishakovd@marketwatch.com', '2AWv4J4SOv');
insert into customer (name, email, password) values ('Derry', 'drougheye@freewebs.com', 'ah2L2S');
insert into customer (name, email, password) values ('Benjamin', 'bvennf@walmart.com', 'jqv8ExEgFYU');
insert into customer (name, email, password) values ('Rycca', 'rroglierog@yahoo.co.jp', '2jP9crOu');
insert into customer (name, email, password) values ('Terri-jo', 'thaleh@fc2.com', '2pyoU63SZq');
insert into customer (name, email, password) values ('Lelah', 'lsimmanki@histats.com', '83vu9K0AH');
insert into customer (name, email, password) values ('Giselle', 'ggearj@g.co', 'WxbFU1Sg9');
insert into customer (name, email, password) values ('Ian', 'ipineauxk@angelfire.com', 'OLJXNq');
insert into customer (name, email, password) values ('Daisy', 'dbeardsalll@ox.ac.uk', '8gAXueicfrs');
insert into customer (name, email, password) values ('Gilemette', 'glomazm@alibaba.com', 'oFD1mb');
insert into customer (name, email, password) values ('Hedda', 'hcalderan@vistaprint.com', 'aCznWy2h2');
insert into customer (name, email, password) values ('Corena', 'cgrabbamo@twitter.com', 'uUgGEazYdQ');
insert into customer (name, email, password) values ('Hall', 'hhayterp@people.com.cn', 'Xm01gq5V');
insert into customer (name, email, password) values ('Dew', 'dhalliboneq@ebay.com', '6dXqEBXIxNB');
insert into customer (name, email, password) values ('Jere', 'jtunneyr@ibm.com', 'HGzQsUz4tO');
insert into customer (name, email, password) values ('Dore', 'ddeners@pbs.org', '03aASPShcHlt');
insert into customer (name, email, password) values ('Dru', 'daubint@nasa.gov', '4nAHvWVHwqE7');
insert into customer (name, email, password) values ('Kamila', 'kpundyu@senate.gov', 'wfmQIvOa');
insert into customer (name, email, password) values ('Ernesta', 'ebirwhistlev@wired.com', '7EftRNzJ2Q');
insert into customer (name, email, password) values ('Cyndy', 'cgallandw@bravesites.com', 'Fe7Lyj3');
insert into customer (name, email, password) values ('Carroll', 'crozyckix@weebly.com', 'fsKueWqE');
insert into customer (name, email, password) values ('Sallyanne', 'ssoary@opera.com', 'ypOE7KXMc');
insert into customer (name, email, password) values ('Daisy', 'djadczakz@amazon.com', 'EKUI8okvBAdX');
insert into customer (name, email, password) values ('Theresa', 'tsapwell10@sourceforge.net', 'GRitGXdx');
insert into customer (name, email, password) values ('Wendall', 'wisabell11@java.com', '4Z8xjdte1jY');
insert into customer (name, email, password) values ('Bernelle', 'bdevin12@miitbeian.gov.cn', 'VaggiUzNn');
insert into customer (name, email, password) values ('Ashli', 'alanglands13@weather.com', '8Yi4Wk');
insert into customer (name, email, password) values ('Wesley', 'walanbrooke14@google.de', '8IRTZ9');
insert into customer (name, email, password) values ('Skipp', 'sglazer15@nature.com', 'uGz795');
insert into customer (name, email, password) values ('Bethena', 'bkenworthey16@icio.us', 'dP967pEbcOnn');
insert into customer (name, email, password) values ('Danna', 'dfosten17@weebly.com', 'mnX0HRr');
insert into customer (name, email, password) values ('Anneliese', 'aodooghaine18@nydailynews.com', 'TvYY89GWKguC');
insert into customer (name, email, password) values ('Ailyn', 'arobilliard19@vistaprint.com', 'RPC7IrHMUAQ');
insert into customer (name, email, password) values ('Bess', 'bleale1a@ebay.co.uk', 'sMjMMYOdc');
insert into customer (name, email, password) values ('Arnoldo', 'abrandsen1b@google.com', 'jNoVXC');
insert into customer (name, email, password) values ('Bertina', 'blevington1c@vkontakte.ru', 'XNsXPX');
insert into customer (name, email, password) values ('Floria', 'fkrook1d@usgs.gov', 'Am77Zox');
insert into customer (name, email, password) values ('Eward', 'eendersby1e@ed.gov', 'KBZqnvf');
insert into customer (name, email, password) values ('Murry', 'msauniere1f@qq.com', 'ZCfWH0r');
insert into customer (name, email, password) values ('Butch', 'balti1g@barnesandnoble.com', 'goEzgoZP6S');
insert into customer (name, email, password) values ('Stephenie', 'stender1h@umich.edu', 'qZc6IByTpfk');
insert into customer (name, email, password) values ('Elvira', 'ekenway1i@ycombinator.com', 'BYSq3tQ');
insert into customer (name, email, password) values ('Illa', 'icaslett1j@nsw.gov.au', 'P8OUgG');
insert into customer (name, email, password) values ('Sumner', 'sleger1k@imageshack.us', '7aYotNtY8Bjw');
insert into customer (name, email, password) values ('Maryjane', 'mhollingsby1l@infoseek.co.jp', 'wpq31ngM');
insert into customer (name, email, password) values ('Davie', 'dforsard1m@earthlink.net', '7AGP9Xb5l');
insert into customer (name, email, password) values ('Tersina', 'ttorvey1n@marriott.com', 'KSBMVK0V7kka');
insert into customer (name, email, password) values ('Gwyneth', 'gbuer1o@digg.com', 'il5qpwy6nV');
insert into customer (name, email, password) values ('Bordy', 'bshapcote1p@phpbb.com', 'xsddeD');
insert into customer (name, email, password) values ('Hailee', 'hrutley1q@dyndns.org', 'QAC1Wy');
insert into customer (name, email, password) values ('Eal', 'ecrinidge1r@digg.com', 'cTAti3');
insert into customer (name, email, password) values ('Hilary', 'hbecconsall1s@themeforest.net', 'nKDHb78RPROi');
insert into customer (name, email, password) values ('Dolly', 'dmatches1t@cyberchimps.com', 'Fxvg2a0');
insert into customer (name, email, password) values ('Morey', 'mclemmow1u@xing.com', 'gsnAEK3xbk');
insert into customer (name, email, password) values ('Elsa', 'eballentime1v@yelp.com', 'rgb9F05');
insert into customer (name, email, password) values ('Rosalyn', 'rcriag1w@arizona.edu', 'qM0iW58V');
insert into customer (name, email, password) values ('Arleta', 'amuldowney1x@time.com', 'MVi6J3vz');
insert into customer (name, email, password) values ('Myca', 'mbrogiotti1y@ibm.com', '0YRbsFt9L');
insert into customer (name, email, password) values ('Talya', 'tspanswick1z@harvard.edu', 'E2HDVH');
insert into customer (name, email, password) values ('Coraline', 'cryburn20@economist.com', '56oX7leqU');
insert into customer (name, email, password) values ('Eda', 'eprudham21@timesonline.co.uk', 'JqYlOQ');
insert into customer (name, email, password) values ('Blinni', 'bmoodie22@github.com', 'TmjwBj');
insert into customer (name, email, password) values ('Patrick', 'plethbury23@si.edu', 'iZbWdD6sUO');
insert into customer (name, email, password) values ('Babbette', 'bdunstan24@state.tx.us', 'kXYrTpnW');
insert into customer (name, email, password) values ('Prinz', 'pbuckberry25@storify.com', 'CqqrmbzIAM');
insert into customer (name, email, password) values ('Bernie', 'bgiddins26@drupal.org', 'gkaYMhba');
insert into customer (name, email, password) values ('Faith', 'fmcswan27@indiegogo.com', 'wjmbP2E');
insert into customer (name, email, password) values ('Kala', 'ksmeaton28@spiegel.de', 'TfrQtNq8f7i');
insert into customer (name, email, password) values ('Euell', 'ehamper29@nifty.com', 'x5eYw68L');
insert into customer (name, email, password) values ('Hilde', 'hlutas2a@ask.com', 'mUPvEOuGI9yk');
insert into customer (name, email, password) values ('Alic', 'ahousden2b@csmonitor.com', 'r16M09Pc2vy');
insert into customer (name, email, password) values ('Luis', 'ldepaoli2c@zdnet.com', 'W8360z');
insert into customer (name, email, password) values ('Somerset', 'silott2d@usa.gov', 'HNnZZUP');
insert into customer (name, email, password) values ('Iorgos', 'iadkins2e@netvibes.com', '3ybZHC');
insert into customer (name, email, password) values ('Oberon', 'orozsa2f@yale.edu', 'DE4wbbzi');
insert into customer (name, email, password) values ('Barbee', 'bburfield2g@naver.com', 'QHWfjn');
insert into customer (name, email, password) values ('Tanner', 'tcornewall2h@friendfeed.com', 'WPSQZs0VmC');
insert into customer (name, email, password) values ('Hollyanne', 'hgeldart2i@columbia.edu', 'No7DBkhe6e');
insert into customer (name, email, password) values ('Aveline', 'amaccurlye2j@myspace.com', 'jjK8vT5zBYF');
insert into customer (name, email, password) values ('Reube', 'rpunt2k@taobao.com', 'jZOPnhHyt53');
insert into customer (name, email, password) values ('Amabelle', 'afarress2l@chron.com', 'MKyn5tvhlfs');
insert into customer (name, email, password) values ('Ardyth', 'arentenbeck2m@kickstarter.com', 'Jt2xr7CcU');
insert into customer (name, email, password) values ('Tobe', 'tbasketter2n@rambler.ru', '2iLV5yFj2N');
insert into customer (name, email, password) values ('Bathsheba', 'btrahear2o@opera.com', 'hqAv6WMb74aJ');
insert into customer (name, email, password) values ('Clarke', 'cclemens2p@nytimes.com', 'xAWsLKnVv4');
insert into customer (name, email, password) values ('Sibeal', 'sworge2q@webs.com', 'ee2a5myx6KZ');
insert into customer (name, email, password) values ('Aidan', 'agiraudo2r@goo.gl', 'IFhsNdB9Px');

insert into order_details (timestamp, status, comment, order_total, cid) values ('3/20/2021', 'complete', 'I hungy', 9.15, 5);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/3/2020', 'complete', 'I hungy', 2.17, 9);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/13/2020', 'complete', 'I hungy', 7.19, 70);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/28/2020', 'complete', 'I hungy', 5.93, 34);
insert into order_details (timestamp, status, comment, order_total, cid) values ('1/27/2021', 'complete', 'I hungy', 3.85, 64);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/26/2020', 'complete', 'I hungy', 6.17, 6);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/16/2020', 'complete', 'I hungy', 1.17, 50);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/30/2021', 'complete', 'I hungy', 3.91, 99);
insert into order_details (timestamp, status, comment, order_total, cid) values ('2/15/2021', 'complete', 'I hungy', 3.75, 51);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/29/2020', 'complete', 'I hungy', 8.38, 79);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/28/2021', 'complete', 'I hungy', 2.76, 61);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/16/2020', 'complete', 'I hungy', 4.65, 41);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/26/2020', 'complete', 'I hungy', 5.68, 94);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/26/2020', 'complete', 'I hungy', 4.77, 11);
insert into order_details (timestamp, status, comment, order_total, cid) values ('4/20/2021', 'complete', 'I hungy', 9.27, 78);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/12/2020', 'complete', 'I hungy', 6.85, 66);
insert into order_details (timestamp, status, comment, order_total, cid) values ('4/9/2021', 'complete', 'I hungy', 7.74, 76);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/23/2020', 'complete', 'I hungy', 1.38, 97);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/1/2021', 'complete', 'I hungy', 6.07, 66);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/16/2021', 'complete', 'I hungy', 7.73, 67);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/19/2021', 'complete', 'I hungy', 1.7, 92);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/15/2020', 'complete', 'I hungy', 4.74, 46);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/18/2020', 'complete', 'I hungy', 5.04, 20);
insert into order_details (timestamp, status, comment, order_total, cid) values ('12/19/2020', 'complete', 'I hungy', 3.58, 49);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/19/2020', 'complete', 'I hungy', 6.74, 33);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/26/2020', 'complete', 'I hungy', 6.13, 46);
insert into order_details (timestamp, status, comment, order_total, cid) values ('12/30/2020', 'complete', 'I hungy', 6.6, 17);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/4/2020', 'complete', 'I hungy', 2.94, 73);
insert into order_details (timestamp, status, comment, order_total, cid) values ('12/14/2020', 'complete', 'I hungy', 8.06, 46);
insert into order_details (timestamp, status, comment, order_total, cid) values ('4/17/2021', 'complete', 'I hungy', 9.1, 43);
insert into order_details (timestamp, status, comment, order_total, cid) values ('6/14/2020', 'complete', 'I hungy', 2.71, 9);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/16/2020', 'complete', 'I hungy', 7.89, 86);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/17/2020', 'complete', 'I hungy', 9.2, 15);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/12/2020', 'complete', 'I hungy', 6.42, 31);
insert into order_details (timestamp, status, comment, order_total, cid) values ('6/10/2020', 'complete', 'I hungy', 8.56, 9);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/27/2020', 'complete', 'I hungy', 3.99, 60);
insert into order_details (timestamp, status, comment, order_total, cid) values ('1/9/2021', 'complete', 'I hungy', 9.12, 83);
insert into order_details (timestamp, status, comment, order_total, cid) values ('2/9/2021', 'complete', 'I hungy', 8.73, 42);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/17/2020', 'complete', 'I hungy', 3.36, 97);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/4/2020', 'complete', 'I hungy', 9.51, 96);
insert into order_details (timestamp, status, comment, order_total, cid) values ('6/11/2020', 'complete', 'I hungy', 4.39, 21);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/18/2021', 'complete', 'I hungy', 5.75, 63);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/24/2020', 'complete', 'I hungy', 4.33, 80);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/27/2020', 'complete', 'I hungy', 3.01, 8);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/17/2020', 'complete', 'I hungy', 8.48, 58);
insert into order_details (timestamp, status, comment, order_total, cid) values ('2/27/2021', 'complete', 'I hungy', 8.19, 73);
insert into order_details (timestamp, status, comment, order_total, cid) values ('2/27/2021', 'complete', 'I hungy', 8.08, 52);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/26/2020', 'complete', 'I hungy', 7.51, 13);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/20/2020', 'complete', 'I hungy', 4.86, 46);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/17/2020', 'complete', 'I hungy', 1.61, 58);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/10/2020', 'complete', 'I hungy', 7.14, 2);
insert into order_details (timestamp, status, comment, order_total, cid) values ('1/17/2021', 'complete', 'I hungy', 3.97, 19);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/22/2020', 'complete', 'I hungy', 8.8, 84);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/30/2020', 'complete', 'I hungy', 5.39, 49);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/24/2020', 'complete', 'I hungy', 6.22, 93);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/27/2020', 'complete', 'I hungy', 7.94, 71);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/2/2020', 'complete', 'I hungy', 7.44, 67);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/4/2020', 'complete', 'I hungy', 8.03, 75);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/20/2020', 'complete', 'I hungy', 3.15, 90);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/22/2020', 'complete', 'I hungy', 5.52, 70);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/28/2020', 'complete', 'I hungy', 7.94, 28);
insert into order_details (timestamp, status, comment, order_total, cid) values ('6/2/2020', 'complete', 'I hungy', 5.55, 82);
insert into order_details (timestamp, status, comment, order_total, cid) values ('4/29/2020', 'complete', 'I hungy', 9.17, 8);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/14/2020', 'complete', 'I hungy', 6.94, 59);
insert into order_details (timestamp, status, comment, order_total, cid) values ('12/19/2020', 'complete', 'I hungy', 6.92, 53);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/14/2021', 'complete', 'I hungy', 8.54, 13);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/23/2020', 'complete', 'I hungy', 1.15, 58);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/5/2020', 'complete', 'I hungy', 7.85, 65);
insert into order_details (timestamp, status, comment, order_total, cid) values ('9/21/2020', 'complete', 'I hungy', 8.09, 18);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/14/2021', 'complete', 'I hungy', 9.09, 25);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/6/2020', 'complete', 'I hungy', 8.29, 58);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/27/2020', 'complete', 'I hungy', 6.18, 46);
insert into order_details (timestamp, status, comment, order_total, cid) values ('6/13/2020', 'complete', 'I hungy', 6.73, 46);
insert into order_details (timestamp, status, comment, order_total, cid) values ('6/13/2020', 'complete', 'I hungy', 8.21, 3);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/28/2020', 'complete', 'I hungy', 6.07, 24);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/18/2020', 'complete', 'I hungy', 2.2, 27);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/3/2021', 'complete', 'I hungy', 5.71, 90);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/31/2020', 'complete', 'I hungy', 6.66, 18);
insert into order_details (timestamp, status, comment, order_total, cid) values ('2/18/2021', 'complete', 'I hungy', 8.29, 24);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/26/2020', 'complete', 'I hungy', 5.32, 13);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/11/2020', 'complete', 'I hungy', 5.92, 22);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/3/2020', 'complete', 'I hungy', 3.2, 31);
insert into order_details (timestamp, status, comment, order_total, cid) values ('12/13/2020', 'complete', 'I hungy', 5.06, 2);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/30/2020', 'complete', 'I hungy', 2.57, 59);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/30/2020', 'complete', 'I hungy', 1.88, 83);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/19/2020', 'complete', 'I hungy', 7.8, 49);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/30/2020', 'complete', 'I hungy', 1.72, 72);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/23/2020', 'complete', 'I hungy', 9.27, 48);
insert into order_details (timestamp, status, comment, order_total, cid) values ('8/22/2020', 'complete', 'I hungy', 6.29, 9);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/23/2020', 'complete', 'I hungy', 8.62, 95);
insert into order_details (timestamp, status, comment, order_total, cid) values ('2/27/2021', 'complete', 'I hungy', 9.36, 62);
insert into order_details (timestamp, status, comment, order_total, cid) values ('4/1/2021', 'complete', 'I hungy', 5.94, 62);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/9/2020', 'complete', 'I hungy', 7.87, 63);
insert into order_details (timestamp, status, comment, order_total, cid) values ('5/1/2020', 'complete', 'I hungy', 4.05, 67);
insert into order_details (timestamp, status, comment, order_total, cid) values ('7/24/2020', 'complete', 'I hungy', 4.9, 62);
insert into order_details (timestamp, status, comment, order_total, cid) values ('4/22/2021', 'complete', 'I hungy', 7.58, 32);
insert into order_details (timestamp, status, comment, order_total, cid) values ('10/29/2020', 'complete', 'I hungy', 1.72, 43);
insert into order_details (timestamp, status, comment, order_total, cid) values ('3/20/2021', 'complete', 'I hungy', 9.73, 10);
insert into order_details (timestamp, status, comment, order_total, cid) values ('11/7/2020', 'complete', 'I hungy', 3.94, 52);
insert into order_details (timestamp, status, comment, order_total, cid) values ('1/23/2021', 'complete', 'I hungy', 3.61, 59);