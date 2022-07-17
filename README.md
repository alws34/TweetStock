# Authors

- [@alws34](https://www.github.com/alws34)
- [@idguy04](https://github.com/idguy04)
- [@hadartayar](https://github.com/hadartayar)


# TweetStock

This is ours final project in Computer Science B.Sc at Ruppin Academic Center 🇮🇱.
<br>
[Live Web App Available here](https://proj.ruppin.ac.il/bgroup57/test2/tar1/build/)
<br><br>
In this project we are trying to predict stock price changes, for the end of the current trading day (for specific stocks), based on chatter analysis from twitter.
<br><br>
The stocks that we monitor are:
- Tesla [(TSLA)](https://finance.yahoo.com/quote/TSLA/)
- Amazon [(AMZN)](https://finance.yahoo.com/quote/AMZN/)
- Apple [(AAPL)](https://finance.yahoo.com/quote/AAPL/)
- Microsoft [(MSFT)](https://finance.yahoo.com/quote/MSFT/)
- Google [(GOOG)](https://finance.yahoo.com/quote/GOOG/)
<br><br>

In order to achieve that, we developed a Web Application that includes:

## Client Side
#### Programming languages & Technologies used:
- NodeJS
- ReactJS

#### libraries Used:
- [MUI](https://mui.com/)
- [react-lottie](https://www.npmjs.com/package/react-lottie)
- [heic2any](https://www.npmjs.com/package/heic2any)
- [bootstrap](https://getbootstrap.com/)
- [sweetalert2](https://sweetalert2.github.io/)
- [react-twitter-embed](https://www.npmjs.com/package/react-twitter-embed)
- [react-webcam](https://www.npmjs.com/package/react-webcam)
- [react-chat-popup](https://www.npmjs.com/package/popup-chat-react)
- [react-firebase](https://www.npmjs.com/package/react-firebase)
- [kendo-react](https://www.npmjs.com/package/kendo-react)

### Features
- Light/dark mode toggle.
- Live stock previews (using Yahoo-Finance API).
<!-- + historical data   -->
- live view of Popular Tweets (in real time - using Twitter API).
- Full mobile integration.
- Registered users has the ability to save favorite stocks.
- Registered users has the ability to participate in a stock-specific chat.
- Registered users has the ability to customize their profile.


<div>
<img src="https://img.icons8.com/fluency/344/node-js.png" title="nodejs" **alt="nodejs" width="50" height="50"/>
<img src="https://img.icons8.com/officel/344/react.png" title="react" **alt="react" width="50" height="50"/>
<img src="https://avatars.githubusercontent.com/u/71153457?s=280&v=4" title="lottie" **alt="lottie" width="50" height="50"/>
<img src="https://mui.com/static/logo.png" title="MUI" **alt="MUI" width="50" height="50"/>
<img src="https://img.icons8.com/color/900/firebase.png" title="react-firebase" **alt="react-firebase" width="50" height="50"/>
<img src="https://avatars.githubusercontent.com/u/568561?v=4" title="KendoReact" **alt="KendoReact" width="50" height="50"/>
<img src="https://avatars.githubusercontent.com/u/35137722?s=280&v=4" title="sweetalert2" **alt="sweetalert2" width="50" height="50"/>
<img src="https://proj.ruppin.ac.il/bgroup57/test2/tar1/ReactWebcam.png" title="ReactWebCam" **alt="ReactWebCam" width="50" height="50"/>
<img src="https://img.icons8.com/color/344/bootstrap.png" title="Bootstrap" **alt="Bootstrap" width="50" height="50"/>
</div>

##
<br>

## Server Side
The Server side is in charge of storing and retrieving users data in the MSSQL Server.
#### Programming languages & Technologies used:
- ASP.NET (C# REST-API)
- MSSQL DataBase

<div>
<img src="https://img.icons8.com/color/900/c-sharp-logo.png" title="C#" **alt="C#" width="50" height="50"/>
<img src="https://img.icons8.com/color/900/asp.png" title="ASP .NET" **alt="ASP .NET" width="50" height="50"/>
<img src="https://img.icons8.com/color/900/rest-api.png" title="REST API" **alt="REST API" width="50" height="50"/>
<img src="https://www.sqlservertutorial.net/wp-content/uploads/sql-server-tutorial.svg" title="MSSQL" **alt="MSSQL" width="50" height="50"/>
</div>

##
<br>

##

In order to predict the stocks volatility, we developed the following:

## Machine Learning using Deep Neural Network (DNN)
<br>
Each Stock mentioned above, has its own DNN trained model based on a stock specific data collected from Twitter.
* The DNNs were trained using a Raspberry pi 4. 
* The Raspberry pi runs a Service where all real-time Data Mining, Digestion, calculations and Model Running takes place.

#### Programming languages & Technologies used:
- Python3
- Neural Networks
- NLP (Natural Language Processing)
- RaspberryPI 4

### Features
- Training a DNN models.
- Retraining DNN models, and getting a model performance average.
- Running a DNN model.
- Fetching Tweets in real time. 
- Tweet Sentioment Analysis (using Vader Sentiment).
- Calculating Tweets measures (e.g Sentiment score, User Engagement etc).

##### Python3 libraries used for Mathematical and Data Analysis
- [Pandas](https://pandas.pydata.org/)
- [Numpy](https://numpy.org/)
- [TensorFlow](https://www.tensorflow.org/)
- [Sklearn](https://scikit-learn.org/)
- [Keras](https://keras.io/)
- [matplotlib](https://matplotlib.org/)
- [VaderSentiment](https://github.com/cjhutto/vaderSentiment)

<div>
<img src="https://img.icons8.com/color/900/python.png" title="Python" **alt="Python" width="50" height="50"/>
<img src="https://img.icons8.com/color/344/raspberry-pi.png" title="RaspberryPi" **alt="Raspberry Pi" width="50" height="50"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal3Gkvw9yeBH-HKb8ugzX-EnrMDilHh8UfH67t_9C_YFBx-KmW3BVxkyHDaXQ1mDxXHE&usqp=CAU" title="NeuralNetworks" **alt="NeuralNetworks" width="50" height="50"/>
<img src="https://img.icons8.com/color/452/numpy.png" title="Numpy" **alt="Numpy" width="50" height="50"/>
<img src="https://i.pinimg.com/736x/28/ce/bf/28cebfa3c75ff7815999b0c81a826af6.jpg" title="Pandas" **alt="Pandas" width="50" height="50"/>
<img src="https://img.icons8.com/color/344/tensorflow.png" title="TensorFlow" **alt="TensorFlow" width="50" height="50"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" title="SkLearn"**alt="SkLearn" width="50" height="50"/> 
<img src="https://matplotlib.org/stable/_static/logo2.svg" title="MatPlotLib" **alt="MatPlotLib" width="50" height="50"/>
<img src="https://camo.githubusercontent.com/906e661107a3bc03104ca5d88336d1f4b0e80fdcac65efaf7904041d371c747f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6b657261732e696f2f696d672f6b657261732d6c6f676f2d323031382d6c617267652d313230302e706e67" title="Keras" **alt="Keras" width="50" height="50"/>
<img src="https://cdn.sisense.com/wp-content/uploads/NLP_Abstract_BG_1200X800_02.jpg" title="NLP" **alt="NLP" width="50" height="50"/>

</div>

##

##### Python3 libraries used for Data Mining and storage
- Twitter API v1 using [tweepy](https://pypi.org/project/tweepy/)
- Twitter API v2 using [TwitterAPI](https://pypi.org/project/TwitterAPI/)
- Yahoo Finance API using [yfinance](https://pypi.org/project/yfinance/)
- FireBase API using [pyrebase4](https://pypi.org/project/Pyrebase4/)

<div>
<img src="https://www.pinclipart.com/picdir/big/453-4533180_how-be-successful-with-online-marketing-dark-twitter.png" title="TwitterAPI" **alt="TwitterAPI" width="50" height="50"/>
<img src="https://play-lh.googleusercontent.com/K4eJEI8ogLQO2MkjUKgxC8FNWL4I5etsbFw2OXwQJ9Uch4DGkW1gEdoQk_k-cmtD4F4" title="YahooFinanceAPI" **alt="Yahoo Finance API" width="50" height="50"/>
<img src="https://img.icons8.com/color/900/firebase.png" title="FireBase" **alt="FireBase" width="50" height="50"/>
</div>

## Enviroments Used to develop this project

<div>
<img src="https://img.icons8.com/color/900/visual-studio.png" title="VS" **alt="VS" width="50" height="50"/>
<img src="https://img.icons8.com/color/900/visual-studio-code-2019.png" title="VSC" **alt="VSC" width="50" height="50"/>
<img src="https://img.icons8.com/ultraviolet/452/windows-10.png" title="Windows" **alt="Windows" width="50" height="50"/>
<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-mac-coworking-space-flaticons-lineal-color-flat-icons-3.png" title="Mac" **alt="Mac" width="50" height="50"/>
<img src="https://img.icons8.com/color/344/raspberry-pi.png" title="RaspberryPi" **alt="Raspberry Pi" width="50" height="50"/>
<img src="https://img.icons8.com/color/900/github.png" title="Github" **alt="Github" width="50" height="50"/>
</div>

## DataBases Used in this project
<div>
<img src="https://img.icons8.com/color/900/firebase.png" title="FireBase" **alt="FireBase" width="50" height="50"/>
<img src="https://www.sqlservertutorial.net/wp-content/uploads/sql-server-tutorial.svg" title="MSSQL" **alt="MSSQL" width="50" height="50"/>
</div>


##Research Phase
During our Research and Development process we looked into the many libraries, thechnologies and tools, in order to debug, research and draw conclusions for our project: 

#### NLP & Sentiment analysis
- [NLTK](https://www.nltk.org/) - Natural Language Toolkit
- [Flair](https://github.com/flairNLP/flair) - An NLP FrameWork
- [FinBert](https://github.com/ProsusAI/finBERT) - A Finantial sentiment analysis [Bert](https://en.wikipedia.org/wiki/BERT_(language_model)) model

#### Neural Networks
- We have research extensivly with [Sklearn](https://scikit-learn.org/) 

####  Python Development
- Initial Python Development performed using [Google Colab](https://colab.research.google.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

#### Debugging
- [PostMan](https://www.postman.com/) 
- [Talent API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm)


<div>
<img src="https://colab.research.google.com/img/colab_favicon_256px.png" title="GoogleColab" **alt="GoogleColab" width="50" height="50"/>
<img src="https://img.icons8.com/color/900/visual-studio-code-2019.png" title="VSC" **alt="VSC" width="50" height="50"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" title="SkLearn"**alt="SkLearn" width="50" height="50"/> 
<img src="https://img.stackshare.io/service/10138/flair.png" title="Flair"**alt="Flair" width="50" height="50"/> 
<img src="https://proj.ruppin.ac.il/bgroup57/test2/tar1/finbert.png" title="FinBert"**alt="FinBert" width="50" height="50"/> 
<img src="https://miro.medium.com/max/592/1*5dQO7LHrsy3lIi2d0bgRLw.png" title="NLTK" **alt="NLTK" width="50" height="50"/>
<img src="https://img.icons8.com/dusk/30/000000/postman-api.png" title="PostMan" **alt="PostMan" width="40" height="40"/>
</div>

##

## Bibliography used while researching
## Articles
- [The Rise of stock influencers – shaking markets with words](https://www.flowbank.com/en/research/the-rise-of-stock-influencers-)
- [10 Tweets That Moved Markets In 2021](https://www.benzinga.com/markets/cryptocurrency/21/08/22398419/10-tweets-that-moved-markets-in-2021)
- [Can We Beat The Stock Market Using Twitter?](https://towardsdatascience.com/can-we-beat-the-stock-market-using-twitter-ef8465fd12e2)

## External Data Sources
- [Influence of tweets on stock martket](https://www.kaggle.com/code/renjithrrkj/influence-of-tweets-on-stock-martket/data)



## Badges

[![Top Languages](https://img.shields.io/github/languages/count/alws34/TweetStock)](https://img.shields.io/github/languages/count/alws34/TweetStock)

[![Total Commits](https://img.shields.io/github/commit-activity/y/alws34/TweetStock)](https://img.shields.io/github/commit-activity/y/alws34/TweetStock)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/alws34/TweetStock/blob/master/LICENSEs)

[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)
