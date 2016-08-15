let UserFactory = function ($http, $q, $cookies, apiURL) {

  const user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  let authenticate = (email, password) => {

    let deffered = $q.defer();

    var authRequest = {
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

    $http(authRequest)
      .success((data) => {
        console.log(data);
        // $cookies.put('app-token', user);
        // deffered.resolve(user);
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

  let validateToken = () => {
    let token = $cookies.get('app-token');

    let deffered = $q.defer();

    $http.get()
      .success((data) => {
        $cookies.put('app-token', user);
        deffered.resolve(user);
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

  let signout = () => {
    let deffered = $q.defer();

    $http.get()
      .success((data) => {
        $cookies.remove('app-token');
        deffered.resolve(true);
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

  return { getUser, isSignedIn, authenticate, validateToken, signout};
};

export default UserFactory;
