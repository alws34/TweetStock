<!-- About This Project-->

### About This Project:

This is our final project in our B.Sc in computer science at Ruppin Academic Center.
<br>
In this project we are trying to predict stock price changes for the end of the trading day - for specific stocks, based on chatter analysis from twitter.<br><br>
The stocks that we monitor are: Tesla (tsla), Amazon (amzn), Apple (aapl),Microsoft (msft) and Google (goog & googl).<br><br>
To achieve that, we developed an app that includes:<br>

- A Front-End web application (Using ReactJS) for the end user, where the user can see live stocks data(using yahoo finance api and several other api services), save favorite stocks ("watch list") and also see our final prediction for the day, for the spcified stocks.<br>
- And a Back-End that consists of two seperate pieces:<br>
  1. ASP.NET server side (Using C# and an SQL Data Base)- that communicates with the front end.<br>
  2. A Raspberry Pi - bases Python server - where all data digestion, calculations, computations and modeling takes place on.
     using this RPi, we created two steps in order to get a prediction:<br>
     1. Training a DNN model for each of our stocks - based on data we gatehred and digested from Twitter, Kaggle and yahoo finance (all twitter chatter and financial data is from 2019).<br>
     2. Creating a worker that will periodically request stocks related chatter from twitter's api, digest it, and insert the processed data into the model - and feed the results and the tweets this prediction is based on, to the SQL server so the client can get the "verdict" in a quick and efficient way.<br>
        The worker runs only for trading days

<!--About This Project -->

### :hammer_and_wrench: Languages, Tools, Technologies & Enviroments used in this project :

<div>
  <img src="https://img.icons8.com/color/30/c-sharp-logo.png" title="C#" **alt="C#" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/python.png" title="Python" **alt="Python" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/asp.png" title="ASP .NET" **alt="ASP .NET" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/rest-api.png" title="REST API" **alt="REST API" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/html-5.png" title="HTML5" **alt="HTML5" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/css.png" title="CSS" **alt="CSS" width="40" height="40"/>
<img src="https://img.icons8.com/color/452/javascript--v1.png" title="JS" **alt="JS" width="40" height="40"/>
<img src="https://img.icons8.com/windows/30/000000/node-js.png" title="nodejs" **alt="nodejs" width="40" height="40"/>
<img src="https://img.icons8.com/officel/344/react.png" title="react" **alt="react" width="40" height="40"/>
<img src="https://img.icons8.com/ios/30/000000/jquery.png" title="jquery" **alt="jquery" width="40" height="40"/>
<img src="https://img.icons8.com/color/344/bootstrap.png" title="Bootstrap" **alt="Bootstrap" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/json.png" title="json" **alt="json" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/visual-studio.png" title="VS" **alt="VS" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/visual-studio-code-2019.png" title="VSC" **alt="VSC" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/sql.png" title="SQL" **alt="SQL" width="40" height="40"/>
<img src="https://img.icons8.com/color/30/firebase.png" title="FireBase" **alt="FireBase" width="40" height="40"/>
<img src="https://img.icons8.com/dusk/30/000000/postman-api.png" title="PostMan" **alt="PostMan" width="40" height="40"/>
<!-- <img src="https://img.icons8.com/color/452/git.png" title="Git" **alt="Git" width="40" height="40"/> -->
<img src="https://img.icons8.com/color/30/github.png" title="Github" **alt="Github" width="40" height="40"/>
<img src="https://img.icons8.com/color/344/raspberry-pi.png" title="RaspberryPi" **alt="Raspberry Pi" width="40" height="40"/>
<img src="https://img.icons8.com/ultraviolet/452/windows-10.png" title="Windows" **alt="Windows" width="40" height="40"/>
<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-mac-coworking-space-flaticons-lineal-color-flat-icons-3.png" title="Mac" **alt="Mac" width="40" height="40"/>
<img src="https://img.icons8.com/color/344/twitter.png" title="TwitterAPI" **alt="TwitterAPI" width="40" height="40"/>
<img src="https://play-lh.googleusercontent.com/K4eJEI8ogLQO2MkjUKgxC8FNWL4I5etsbFw2OXwQJ9Uch4DGkW1gEdoQk_k-cmtD4F4" title="YahooFinanceAPI" **alt="Yahoo Finance API" width="40" height="40"/>
<img src="https://img.icons8.com/color/452/numpy.png" title="Numpy" **alt="Numpy" width="40" height="40"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/300px-Pandas_logo.svg.png" title="Pandas" **alt="Pandas" width="40" height="40"/>
<img src="https://img.icons8.com/color/344/tensorflow.png" title="TensorFlow" **alt="TensorFlow" width="40" height="40"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" title="SkLearn"**alt="SkLearn" width="40" height="40"/> 
<img src="https://img.icons8.com/ios/452/flask.png" title="Flask" **alt="Flask" width="40" height="40"/>
<img src="https://matplotlib.org/stable/_static/logo2.svg" title="MatPlotLib" **alt="MatPlotLib" width="40" height="40"/>
</div>
<!-- END My skills -->
