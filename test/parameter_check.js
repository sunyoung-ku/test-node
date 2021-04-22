const _ = require('lodash');

const body = {
  user_id :'1',
  user_pwd :'123',

}

const getEmptyParams = (list,param)=>{

 return  _.filter(list, v=>{
    return  _.isEmpty(param[v]);
  }).reduce((arr,cur)=>{
    arr.push(cur);
    return arr;
  },[]);

};


const validateParams = ['user_id','user_pwd','user_tel_no','user_name'];
console.log(validateParams);
console.log(getEmptyParams(validateParams,body));