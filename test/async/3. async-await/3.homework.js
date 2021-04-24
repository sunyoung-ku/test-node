function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

class UserStorage {

  async loginUser(id, password) {

    if ((id == 'elle' && password == 'dream')
        || (id == 'corder' && password == 'academy')) {
      console.log('correct');
      return id;
    } else {
      console.log('not correct');
      throw new Error('not found');
    }
  }

  async getRoles(user) {
    if (user == 'elle') {
      return {name: 'elle', role: 'admin'};
    } else {
      throw new Error('no role');
    }

  }

}
;

async function handleLoign() {
  try {
    let userStorage = new UserStorage();
    let id = 'elle';
    let password = 'drea1m';
    let userId = await userStorage.loginUser(id, password);
    let role = await userStorage.getRoles(userId);

    console.log('userid , role  ', userId, role);
  } catch (e) {
    console.log('on error >>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.error(e);
  }
}

handleLoign();

