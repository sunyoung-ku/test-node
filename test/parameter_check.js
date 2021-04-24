const _ = require('lodash');

/**
 * list: param key 중 param 에서 비어있는 parameter의 key를 리턴
 * @param  list 필수로 있어야할 파라미터명
 * @param  paramBody 체크할 파라미터 바디
 */
const getEmptyParams = (list,param)=>{
 return  _.filter(list, v=>{
    return  _.isEmpty(param[v]);
  }).reduce((arr,cur)=>{
    arr.push(cur);
    return arr;
  },[]);

};

const body = {
  user_id :'1',
  user_pwd :'123',

}

const validateParams = ['user_id','user_pwd','user_tel_no','user_name'];
//필수체크 리스트
console.log('필수체크 리스트 : ',validateParams);
console.log('누락 파미미터 리스트 : ',getEmptyParams(validateParams,body));