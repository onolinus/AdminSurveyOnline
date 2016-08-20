let UserFactory = function ($http, $q, $cookies, apiURL) {

  const user = {};
  let auth = {};

  let getUser = () => {
    return user;
  };

  let getAuth = () => {
    return JSON.parse($cookies.get('app-auth'));
  };

  let isSignedIn = () => {
    return $cookies.get('app-auth') && $cookies.get('app-auth').length > 0;
  };

  let authenticate = (email, password) => {

    let deffered = $q.defer();

    const authRequest = {
      method: 'POST',
      url: apiURL + '/auth/token/password',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      data: $.param({
        email:email,
        password:password,
        client_id: 1,
        secret_code: 'LAKKdkmakmKKKMBkap#gafgf2dT2!$KKKkjjjasjdhjd@OkjKJDSJFKHgTUHB234125213##141f4'
      })
    };

    $http(authRequest).success((data) => {
        let currDate = new Date ();
        let expDate = new Date ( currDate );
        expDate.setSeconds( currDate.getSeconds() + data.expires_in);

        $cookies.put('app-auth', JSON.stringify(data), {expires:expDate});
        auth = data;

        deffered.resolve(auth);
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

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

    $cookies.remove('app-auth');
    deffered.resolve(true);

    return deffered.promise;
  };

  return { getUser, getAuth, isSignedIn, authenticate, validateToken, signout};
};

export default UserFactory;
