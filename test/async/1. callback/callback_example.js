//

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id == 'elle' && password == 'dream')
          || (id == 'corder' && password == 'academy')) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSucess, onError) {
    if (user == 'elle') {
      onSucess({name: 'elle', role: 'admin'});
    } else {
      onError(new Error('no role'));
    }
  }
};

function handleLoign(id,password){

  userStorage.loginUser(id
      , password
      , user => {
        userStorage.getRoles(user
              , (userWithRole) => {
                console.log(
                    `HELLO ${userWithRole.name} , role : ${userWithRole.role} `);
              }
              , (error) => {
                console.error(error);
              }
            );
      }, error => {
        console.log(error);
      });
}

const userStorage = new UserStorage();


let id = 'elle';
let password = 'dream';

handleLoign(id,password);
id = 'elle';
password = 'dr11eam';

handleLoign(id,password);