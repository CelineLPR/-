const env = process.env.NODE_ENV || 'production'
const EnvConfig = {
    development: {
      baseApi: "/api",
      mockApi:
        "https://www.fastmock.site/mock/b729ad55d1e2652fe9bef9d57b6391ce/api",
    },
    test: {
      baseApi: "/",
      mockApi:
        "https://www.fastmock.site/mock/b729ad55d1e2652fe9bef9d57b6391ce/api",
    },
    production: {
      baseApi: "/",
      mockApi:
        "https://www.fastmock.site/mock/b729ad55d1e2652fe9bef9d57b6391ce/api",
    },
  };
export default{
    env,
    mock:true,
    ...EnvConfig[env]
}