def GET_TWITTER_CODES():
    return {
        # https://developer.twitter.com/ja/docs/basics/response-codes
        'OK': 200,
        'Not Modified': 304,
        'Bad Request': 400,
        'Unauthorized': 401,
        'Forbidden': 403,
        'Not Fount': 404,
        'Not Acceptable': 406,
        'Gone': 410,
        'Enhance Your Calm': 420,
        'Unprocessable Entity': 422,
        'Too Many Requests': 429,
        'Internal Server Error': 500,
        'Bad Gateway': 502,
        'Service Unavailable': 503,
        'Gateway timeout': 504,
        'Invalid coordinates': 3,
        'No location associated with the specified IP address.': 13,
        'No user matches for specified terms.': 17,
        'Could not authenticate you': 32,
        'Sorry, that page does not exist': 34,
        'You cannot report yourself for spam.': 36,
        '<named> parameter is missing.': 38,
        'attachment_url parameter is invalid': 44,
        'User not found.': 50,
        'User has been suspended.': 63,
        'Your account is suspended and is not permitted to access this feature': 64,
        'The Twitter REST API v1 is no longer active. Please migrate to API v1.1.': 68,
        'Client is not permitted to perform this action.': 87,
        'Rate limit exceeded': 88,
        'Invalid or expired token': 89,
        'SSL is required': 92,
        'This application is not allowed to access or delete your direct messages': 93,
        'Unable to verify your credentials.': 99,
        'Account update failed: value is too long (maximum is nn characters).': 120,
        'Over capacity': 130,
        'Internal error': 131,
        'Could not authenticate you': 135,
        'You have already favorited this status.': 139,
        'No status found with that ID.': 144,
        'You cannot send messages to users who are not following you.': 150,
        'There was an error sending your message: reason': 151,
        "You've already requested to follow user.": 160,
        'You are unable to follow more people at this time': 161,
        'Sorry, you are not authorized to see this status': 179,
        'User is over daily status update limit': 185,
        'Tweet needs to be a bit shorter.': 186,
        'Status is a duplicate': 187,
        'Missing or invalid url parameter': 195,
        'You are over the limit for spam reports.': 205,
        'Owner must allow dms from anyone.': 214,
        'Bad authentication data': 215,
        'Your credentials do not allow access to this resource.': 220,
        'This request looks like it might be automated. To protect our users from spam and other malicious activity, we can’t complete this action right now.': 226,
        'User must verify login': 231,
        'This endpoint has been retired and should not be used.': 251,
        'Application cannot perform write actions.': 261,
        'You can’t mute yourself.': 271,
        'You are not muting the specified user.': 272,
        'Animated GIFs are not allowed when uploading multiple images.': 323,
        'The validation of media ids failed.': 324,
        'A media id was not found.': 325,
        'To protect our users from spam and other malicious activity, this account is temporarily locked.': 326,
        'You have already retweeted this Tweet.': 327,
        'You cannot send messages to this user.': 349,
        'The text of your direct message is over the max character limit.': 354,
        'Subscription already exists.': 355,
        'You attempted to reply to a Tweet that is deleted or not visible to you.': 385,
        'The Tweet exceeds the number of allowed attachment types.': 386,
        'The given URL is invalid.': 407,
        'Callback URL not approved for this client application. Approved callback URLs can be adjusted in your application settings': 415,
        'Invalid / suspended application': 416,
        "Desktop applications only support the oauth_callback value 'oob'": 417
    }