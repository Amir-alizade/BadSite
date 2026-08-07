bad_site
|backend - اینو ولش کن فایل هاش خالی هست بدرد نمیخوره
|frontend__signin__
                   |main__
                          |App__
                                |app-page.html
                                |app-page.js
                                |app-page.css
                          |history__
                                    |history.html
                                    |history.css
                                    |history.js
                          |icons
                          |images__
                                   |...
                          |img__ ...
                          |Profile__
                                    |meno-1__
                                             |BYPLAN.html
                                             |BYPLAN.js
                                             |BYPLAN.css
                                             |meno-1.html
                                             |meno-1.css
                                             |meno-1.js
                                    |img
                                    |Profile.html
                                    |Profile.js
                                    |Profile.css
                          |Team__
                                 |team.html
                                 |team.js
                                 |team.css
                          |main.html
                          |main.js
                          |main.css
|        |         |img-1
|        |         |img-2
|        |         |signin.html
|        |         |signin.js
|        |         |signin.css
|        |__.env
|        |__app.js
|        |__index.html
|        |__style.css
|
|node-modules
|server__
         |config__
                  |db.js
         |controllers__
                       |authController.js
         |database__
                    |database.sqlite
         |modedls__
                   |userModel
         |routes__
                  |auth.js
         |app.js
         |server.js
|docker-compose
|package.json
|package-lock.json
|README.md


_______________________________________________________________________________________________________________________________________

::selection {
    color: rgb(0, 136, 255);
    background-color: #fff;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
  background-image: url('signin/bgc_login.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center center; */
  position: relative;
}

.container {
    width: 60rem;
    height: 44rem;
    color: #fff;
    /* background-color: #fff; */
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    /* border-radius: 8px; */
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    /* backdrop-filter: blur(10px); */
    background-color: rgba(255, 255, 255, 0.045);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.032);
    padding: 10px;
}

.inputlabel {
    position: absolute;
}

#username {
    top: 7rem;
    right: 6rem;
}

#UserName {
    top: 9rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#UserName:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#password {
    top: 13rem;
    right: 6rem;
}

#Password {
    top: 15rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#Password:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#phonenumber {
    top: 19rem;
    right: 6rem;
}

#phoneNumber {
    top: 21rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#phoneNumber:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#acceptcode {
    top: 25rem;
    right: 6rem;
}

#acceptCode {
    top: 27rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#acceptCode:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#invitingcode {
    top: 31rem;
    right: 6rem;
}

#invitingCode {
    top: 33rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#invitingCode:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#btn {
    top: 38rem;
    right: 6rem;
    width: 50rem;
    height: 3rem;
    background-color: rgb(0, 255, 251);
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
}
#btn:hover {
    background-color: rgb(0, 179, 176);
}

.img {
    position: absolute;
    left: 5rem;
    top: 26rem;
    width: 6rem;
}

.size-6 {
    color: white;
    position: absolute;
    left: 11.5rem;
    top: 26.5rem;
    width: 2rem;
    cursor: pointer;
}

.Signin {
    position: absolute;
    bottom: 1rem;
    right: 28rem;
}

.size-7 {
    color: #fff;
    width: 1.5rem;
    position: absolute;
    top: 15.5rem;
    left: 5rem;
    cursor: pointer;
}

#userN {
    position: absolute;
    color: red;
    right: 6rem;
    top: 11.5rem;
    display: none;
}

#Pass {
    position: absolute;
    color: red;
    right: 6rem;
    top: 17.5rem;
    display: none;
}

#Phon {
    position: absolute;
    color: red;
    right: 6rem;
    top: 23.5rem;
    display: none;
}

#Accept {
    position: absolute;
    color: red;
    right: 6rem;
    top: 29.5rem;
    display: none;
}

#invit {
    position: absolute;
    color: rgb(255, 255, 255);
    right: 6rem;
    top: 35.5rem;
    display: none;
}

-----------------------------------------------------------------------------------------------------------------------------------------------

::selection {
    color: rgb(0, 136, 255);
    background-color: #fff;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
  background-image: url('bgc_login.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center center; */
}


.container {
    width: 60rem;
    height: 39rem;
    color: #fff;
    /* background-color: #fff; */
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;
    text-align: center;
    /* border-radius: 8px; */
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.045);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.032);
    padding: 10px;
}

.inputlabel {
    position: absolute;
}

#username {
    top: 7rem;
    right: 6rem;
}

#UserName {
    top: 9rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#UserName:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#password {
    top: 13rem;
    right: 6rem;
}

#Password {
    top: 15rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#Password:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#acceptcode {
    top: 19rem;
    right: 6rem;
}

#acceptCode {
    top: 21rem;
    left: 5rem;
    width: 50rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #ffffff00;
    color: white;
    border-bottom:1px solid #ffffff;
}

#acceptCode:focus{
    border-bottom: 1px solid rgb(0, 242, 255);
}

#btn {
    top: 30rem;
    right: 6rem;
    width: 50rem;
    height: 3rem;
    background-color: rgb(0, 255, 251);
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
}

#btn:hover {
    background-color: rgb(0, 179, 176);
}

.size-6 {
    color: white;
    position: absolute;
    left: 11.5rem;
    top: 21rem;
    width: 1.7rem;
    cursor: pointer;
}

.size-7 {
    color: #fff;
    width: 1.5rem;
    position: absolute;
    top: 15.5rem;
    left: 5rem;
    cursor: pointer;
}

.img {
    position: absolute;
    left: 5rem;
    top: 21rem;
    width: 6rem;
}

.Signin {
    position: absolute;
    bottom: 3rem;
    right: 28rem;
}

////////////////////////////////////////////////////////////////////
::selection {
    color: rgb(0, 98, 184);
    background-color: #fff;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serifz;
}

body {
    /* background-color: #1c0631; */
    background-image: url('../images/bgc_login.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 230vh;
    color: white;
    position: relative;
}

.head {
    width: 36%;
    height: 4rem;
    display: flex;
    position: fixed;
    /*background-color: #fff;
    *//*margin-left: auto;
    margin-right: auto;
    *//*width: fit-content;
    */bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    z-index: 9999;
    border-radius: 30px;
    backdrop-filter: blur(20px);
    background-color: rgba(0, 251, 255, 0.16);
    border: 1px solid rgba(0, 255, 195, 0.57);
    box-shadow: 1px 1px 15px rgb(107, 107, 107);
    color: white;
    justify-content: space-between;
}

.team {
    position: relative;
}

.team-txt {
    position: absolute;
    bottom: -16px;
    padding-left: 10px;
}

.home {
    width: 3.5rem;
    /* color: #00ddff; */
    cursor: pointer;
    margin-bottom: -5px;
    margin-top: -10px;
}

.home:hover {
    /* box-shadow: 1px 1px 40px rgb(0, 191, 255); */
    color: #00b3ff;
}

.headerIcones {
    width: 2.5rem;
    color: #c0c0c0;
    cursor: pointer;
    margin-top: 5px;
}

.Prophile {
    color: #00ddff;
}

.Box-1 {
    width: 80%;
    height: 32rem;
    /*background-color: black;
    */margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    border: 1px solid #00ddff;
    border-radius: 10px;
}

.Table-1 {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.Span {
    margin-top: 1.1rem;
}

.Hr {
    width: 98%;
}

.Box-2 {
    width: 80%;
    height: 59rem;
    /*background-color: black;*/
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    border: 2px solid #00ddff;
    border-radius: 10px;
}

.Lg {
    color: #00ddff;
    width: 2rem;
    cursor: pointer;
}

.btn {
    width: 80%;
    height: 3.5rem;
    margin-left: 9.5rem;
    margin-top: 1.5rem;
    background-color: #00ece4;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
}

/* ////////////////////////////////////////////////////////// */

