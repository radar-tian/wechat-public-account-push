/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1b75d571cd68b11f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4fe711c29bc7341bfe0c2f86d518f098',

  PROVINCE: '广东',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'old6d55jJ7x337jhZt7sgKPqNMiU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'kdUsN-FlpEUv7Gu6nc115M5aMbR9GzbV3EeP5sexqT8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆阴历', year: '1999', date: '01-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老婆阳历', year: '1999', date: '03-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2018', date: '07-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-07-11' },
      ],
    },
  ],




}

module.exports = USER_CONFIG

