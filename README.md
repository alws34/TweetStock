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
<img src="data:image/png;base64,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" title="Pandas" **alt="Pandas" width="40" height="40"/>
<img src="https://img.icons8.com/color/344/tensorflow.png" title="TensorFlow" **alt="TensorFlow" width="40" height="40"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" title="SkLearn"**alt="SkLearn" width="40" height="40"/> 
<img src="https://img.icons8.com/ios/452/flask.png" title="Flask" **alt="Flask" width="40" height="40"/>
<img src="https://matplotlib.org/stable/_static/logo2.svg" title="MatPlotLib" **alt="MatPlotLib" width="40" height="40"/>
</div>
<!-- END My skills -->
