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
      url: appConfig.api_url + '/api/login?includes=profile,ristek_token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      data: $.param({
        username: email,
        password: password
      })
    };

    $http(authRequest).success((data) => {
        return setProfile(data)
          .then(function(profile){
            deffered.resolve(data);
          });
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

  let setProfile = (auth) => {
    let deffered = $q.defer();

    let currDate = new Date ();
    let expDate = new Date ( currDate );
    expDate.setSeconds( currDate.getSeconds() + auth.expires_in);

    $cookies.put('app-auth', JSON.stringify(auth), { expires:expDate });

    if ($.inArray(auth.includes.profile.type, [ "validator", "guest", "respondent", "admin", "adminlembagaiptek"]) == -1) {
      deffered.reject({error: {
        message: ['Akun tidak diberi akses untuk menggunakan aplikasi']
      }});
    } else {
      deffered.resolve(auth);
    }

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
