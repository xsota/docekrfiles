FORMAT: 1A
HOST: http://example.com/v1

# Auth
## login [/auth/login]
### POST
#### 概要
emailとpasswordでログインを試みる。
成功した場合アクセストークンやらなんやらが返る。


- Request (application/json)
	- Attribute
        - email: hoge@example.com (required) - メールアドレス
		- password: h0g3Ho9e (string, required) - パスワード
		

- Response 200 (application/json)
	- Attribute
		- auth_token: 4uThT0K3n - auth token

