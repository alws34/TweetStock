const default_img = null;

export const getLoggedUser = () => {
  let logged_user = {};
  if (localStorage["TweetStock"]) {
    let tweetStock = JSON.parse(localStorage["TweetStock"]);
    logged_user = tweetStock["user"];
  } else {
    logged_user = {
      Address: null,
      Email: null,
      FirstName: "Guest",
      Id: null,
      LastName: "",
      Password: null,
      Picure: { default_img },
    };
  }
  return logged_user;
};

export const isLoggedUser = () => {
  let u = getLoggedUser();
  return u.Id != null;
};

export const getRememberMe = () => {
  return (
    localStorage["TweetStock"] &&
    JSON.parse(localStorage["TweetStock"])["remember_me"]
  );
};

export const saveUserLocalStorage = (user, remember_me) => {
  localStorage.setItem(
    "TweetStock",
    JSON.stringify({
      user: user,
      remember_me: remember_me,
    })
  );
};
