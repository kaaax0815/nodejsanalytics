# Analytics
<p align="center">
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>
  <img src="https://github.com/kaaax0815/nodejsanalytics/actions/workflows/release.yml/badge.svg" alt="Release CI">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/kaaax0815/nodejsanalytics">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/kaaax0815/nodejsanalytics">
  <img alt="GitHub" src="https://img.shields.io/github/license/kaaax0815/nodejsanalytics">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/kaaax0815/nodejsanalytics">
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href='https://coveralls.io/github/kaaax0815/nodejsanalytics?branch=main'>
    <img src='https://coveralls.io/repos/github/kaaax0815/nodejsanalytics/badge.svg?branch=main' alt='Coverage Status' />
  </a>
</p>

## Code is Ready to Deploy

Everything works, Hits and Date get correctly reported.

## How to Deploy

[Rename the route](https://github.com/kaaax0815/nodejsanalytics/blob/ff937215c522c8fe18ff1987805c6ac7d7008fe1/src/api/routes/v1/index.js#L14) to your application name

Copy `.env.example` to `.env` and paste in set

```ini
NODE_ENV=production
PORT=<port>
MONGO_URI=<mongo connection string from e.g. Atlas>
```

Now you can access your API from your url
`<yoururl>/v1/<yourroute>/hit`

## Support

Please create Integration Testing for me, I just don't know how to make them. I want more Code Coverage

## Credits

Credits to [Boilerplate](https://github.com/danielfsousa/express-rest-boilerplate)

Credits for [Gitmoji,semantic-release,workflows,templates](https://github.com/BetaHuhn)
