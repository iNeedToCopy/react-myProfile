const ENV_CHOOSEN = 'local'

import path from 'path'

let rootPath = path.normalize(__dirname + '/..')
let env = process.env.API_ENV || ENV_CHOOSEN

const Config = {
  /* 客户端本地,API连接CI */
  local: {
    IM_HOST: "http://dev.steelgang.com",
    API_HOST: "http://dev.steelgang.com/api",
    ALI_OSS_URL: "steelgang-dev.oss-cn-beijing.aliyuncs.com"
  },

  /* 客户端本地,API连接本地 */
  localmac: {
    IM_HOST: "http://localhost:7001",
    API_HOST: "http://localhost:3001",
    ALI_OSS_URL: "steelgang-dev.oss-cn-beijing.aliyuncs.com"
  },

  /* 客户端CI,API也是CI */
  ci: {
    IM_HOST: "http://dev.steelgang.com",
    API_HOST: "http://dev.steelgang.com/api",
    ALI_OSS_URL: "steelgang-dev.oss-cn-beijing.aliyuncs.com"
  },

  /* 客户端PRO,API也是PRO */
  production: {
    IM_HOST: "http://www.steelgang.com",
    API_HOST: "http://www.steelgang.com/api",
    ALI_OSS_URL: "steelgang-pro.oss-cn-beijing.aliyuncs.com"
  }
};

export default Config[env]
