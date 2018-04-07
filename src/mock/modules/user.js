import Mock from 'mockjs';

const userMap = {
  admin: {
    code: 'admin',
    name: '管理员',
    password: 'admin',
    nick: '酷酷的管理员',
    roles: ['admin']
  },
  user1: {
    code: 'user1',
    name: '李鸿儒',
    password: 'user1',
    nick: '呆呆用户',
    roles: ['editor', 'master']
  },
  user2: {
    code: 'user2',
    name: 'Nichalos',
    password: 'user2',
    nick: '萌萌用户',
    roles: ['editor','coder']
  }
};

export default {
  login(config) {
    const {username, password} = JSON.parse(config.body);
    const user = userMap[username];
    if (!user) {
      return {
        success: false,
        data: null,
        message: '用户不存在'
      };
    }
    if (password === user.password) {
      const guid = Mock.mock('@guid');
      if (!localStorage['mock_token_array']) {
        localStorage['mock_token_array'] = '[]';
      }
      const tokenArray = JSON.parse(localStorage['mock_token_array']);
      let tokenItem = tokenArray.find(item => item.code == username);
      if (tokenItem) {
        tokenItem['token'] = guid;
      } else {
        tokenItem = {code: username, token: guid};
        tokenArray.push(tokenItem);
      }
      localStorage['mock_token_array'] = JSON.stringify(tokenArray);
      return {
        success: true,
        data: guid,
        message: '登录成功'
      };
    }
    return {
      success: false,
      data: null,
      message: '密码错误'
    };
  },
  logout(config) {
    const {Authorization: token} = JSON.parse(config.body);
    if (!localStorage['mock_token_array']) {
      localStorage['mock_token_array'] = '[]';
    }
    const tokenArray = JSON.parse(localStorage['mock_token_array']);
    let tokenIndex = tokenArray.findIndex(item => item.token == token);
    tokenArray.splice(tokenIndex, 1);
    localStorage['mock_token_array'] = JSON.stringify(tokenArray);
    return {
      success: true,
      data: null,
      message: '成功退出'
    };
  },
  getUserInfo(config) {
    const {Authorization: token} = JSON.parse(config.body);
    if (!localStorage['mock_token_array']) {
      localStorage['mock_token_array'] = '[]';
    }
    const tokenArray = JSON.parse(localStorage['mock_token_array']);
    let tokenItem = tokenArray.find(item => item.token == token);
    const username = tokenItem ? tokenItem.code: null;
    if (username) {
      const result = Object.assign({}, userMap[username]);
      delete result.password;
      return {
        success: true,
        data: result,
        message: '获取用户信息成功'
      };
    }
    return {
      success: false,
      data: null,
      message: '后台异常了'
    }
  }
}
