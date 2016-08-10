let UserFactory = function ($http, $q, $cookies) {
  const user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  let authenticate = (username, password) => {

    let deferred = $q.defer();

    $http.post()
      .success((data) => {
        $cookies.put('app-token', user);
        deffered.resolve(user);
      })
      .error((error) => {
        deffered.reject(error);
      });

    return deffered.promise;
  };

  let validateToken = () => {
    let token = $cookies.get('app-token');

    let deferred = $q.defer();

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
    let deferred = $q.defer();

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
