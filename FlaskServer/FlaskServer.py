
from flask import Flask, jsonify, request
from flask_restful import Api
from flask_cors import CORS
import TweetStockModel
import time
# ----------------------------------------------------------------------------------------------- #
# get the 'tweetstock_model.h5' file path here.
MODEL_PATH = r'D:\GoogleDrive\Alon\לימודים\TweetStockApp\FlaskServer\Data\Networks\2\AMZN_acc_0.66_npast_3_epoch_2_opt_rmsprop_num_7775.h5'
# '/home/pi/FinalProject/FlaskServer/Data/Networks/1/ticker_AMZN_opt_rmsprop_acc_0.653_TweetStock_model_#18.h5')
SERVER_PORT = 5000  # 15938 # port which the server will run on.
TWITTER_VERSION = 2  # twitter version.
N_PAST = 1  # days on which the model was train to precict based on.
MAX_TWEETS_RESULTS = 100  # max results for first tweets query.
MIN_TWEET_STATS_SUM = 25   # default = 25
MIN_USER_FOLLOWERS = 100  # min user followers num to be included
# ----------------------------------------------------------------------------------------------- #
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'media.ruppin.ac.il'
CORS(app)  # , resources={r"*": {"origins": "*"}})
api = Api(app)
# ----------------------------------------------------------------------------------------------- #


@app.route('/getPrediction', methods=['GET'])
def get_prediction():
    args = request.args.to_dict()
    ticker = args['ticker']

    model = TweetStockModel(MODEL_PATH)

    res = model.get_prediction(ticker)
    return jsonify(res)


# ----------------------------------------------------------------------------------------------- #
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=SERVER_PORT, debug=True, use_reloader=False)

# while True:
#     now = datetime.now()
#     if now.hour % 4 == 0 :
#         runscraper()
#     time.sleep(3600)