class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if ((id == 'elle' && password == 'dream')
            || (id == 'corder' && password == 'academy')) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });

  }

  getRoles(user) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user == 'elle') {
          resolve({name: 'elle', role: 'admin'});
        } else {
          reject(new Error('no role'));
        }
      }, 1000);

    });
  }

};

function handleLoign1() {
  let userStorage = new UserStorage();
  let id = 'elle';
  let password = 'dream123';

    userStorage
    .loginUser(id, password)
    .then(user => userStorage.getRoles(user))
    .then(user => console.log(user))
    .catch(err => console.log(err))
    .finally(()=>console.log('finish'));
}

handleLoign1();
