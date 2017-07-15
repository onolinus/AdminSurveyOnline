let UserFactory = function ($http, $q, $cookies, appConfig) {

  const user = {};
  let auth = {};

  let getUser = () => {
    return user;
  };

  let getAuth = () => {
    let cookiesData = $cookies.get('app-auth');
    if (cookiesData && cookiesData.length) {
      return JSON.parse(cookiesData);
    }

    return [];
  };

  let isSignedIn = () => {
    return $cookies.get('app-auth') && $cookies.get('app-auth').length > 0;
  };

  let authenticate = (email, password) => {

    let deffered = $q.defer();

    const authRequest = {
      method: 'POST',
      url: appConfig.api_url + '/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: $.param({
        grant_type: 'password',
        scope: 'check-status place-orders',
        username: email,
        password: password,
        client_id: appConfig.client_id,
        client_secret: appConfig.client_secret
      })
    };

    $http(authRequest).success((data) => {
        auth = data;

        getProfile(auth)
          .then(function(profile){
            deffered.resolve(auth);
          });
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

  let getProfile = (auth) => {
    let deffered = $q.defer();

    const profileRequest = {
      method: 'GET',
      url: appConfig.api_url + '/api/profile',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization' : auth.token_type + ' ' + auth.access_token
      }
    };

    $http(profileRequest).success((profile) => {
        let currDate = new Date ();
        let expDate = new Date ( currDate );
        expDate.setSeconds( currDate.getSeconds() + auth.expires_in);

        auth.user_type = profile.data.type
        auth.profile = profile.data;

        $cookies.put('app-auth', JSON.stringify(auth), {expires:expDate});

        if ($.inArray(auth.user_type, [ "validator", "guest", "respondent", "admin"]) == -1) {
          deffered.reject({error: {
            message: ['Akun tidak diberi akses untuk menggunakan aplikasi']
          }});
        } else {
          deffered.resolve(auth);
        }
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  }


  let validateToken = (auth = {}) => {
    let token = $cookies.get('app-auth');

    let deffered = $q.defer();

    $http.get() .success((data) => {
        let currDate = new Date ();
        let expDate = new Date ( currDate );
        expDate.setSeconds( currDate.getSeconds() + user.expires_in);
        $cookies.put('app-auth', user, {expires:expDate});
        deffered.resolve(user);
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

  let signout = () => {
    let deffered = $q.defer();
    auth.length = 0;
    $cookies.remove('app-auth');
    deffered.resolve(true);

    return deffered.promise;
  };

  return { getUser, getAuth, isSignedIn, authenticate, validateToken, signout};
};

export default UserFactory;
