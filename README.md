# Programmable MPC Wallets with Flexible Auth 🔑

This is an example web app that shows how you can mint and use Lit's programmable MPC wallets with social accounts, one-time passwords, and passkeys using [Lit JS SDK](https://developer.litprotocol.com/v2/).

## 💻 Getting Started

1. Clone this repo and install dependencies:

```bash
git clone git@github.com:LIT-Protocol/pkp-social-auth-example.git

cd pkp-social-auth-example

npm install
```

2. Add your Stytch project's `project_id` and `public_token` to `.env.local`:

```bash
NEXT_PUBLIC_STYTCH_PROJECT_ID="<Your Stytch Project ID>"
NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN="<Your Stytch Public Token>"
```

If you're not using Stytch, feel free to comment out the Stytch provider `StytchProvider` and Stytch component `StytchOTP`.

3. Start your development server:

```bash
npm run dev
```

4. Visit [http://localhost:3000](http://localhost:3000) to start playing with the app.

### 参考文献

1. [WebAuthn 概要](https://qiita.com/KWS_0901/items/982942d79e8b0c9db98d)
2. [ウェブ認証 API](https://developer.mozilla.org/ja/docs/Web/API/Web_Authentication_API)
3. [Bring your own custom JWT Providers](https://web3auth.io/docs/auth-provider-setup/byo-jwt-providers)
4. [webauthn.io](https://webauthn.io/)
5. [【GitHub】SimpleWebAuthn](https://github.com/MasterKale/SimpleWebAuthn)
6. [Lit Protocol Javascript/Typescript SDK V3 Docs](https://lit-js-sdk-v3-api-docs.vercel.app/#faqs-amp-common-errors)
7. [The Future Wallet: Where Lit & Account Abstraction Meet](https://spark.litprotocol.com/account-abstraction-and-mpc/)
8. [Lit JS SDK V3: Claimable Keys](https://spark.litprotocol.com/lit-js-sdk-v3-claimable-keys/)
9. [mint-pkp-via-webauthn](https://developer.litprotocol.com/v3/sdk/wallets/minting#mint-via-webauthn)
10. [WebAuthn Relying Party](https://www.w3.org/TR/webauthn-2/#webauthn-relying-party)
11. [pkp-walletconnect - Vercel](https://pkp-walletconnect.vercel.app/)
12. [【GitHub】pkp-walletconnect](https://github.com/LIT-Protocol/pkp-walletconnect)
13. [Walletless Signature - WebAuthn](https://developer.litprotocol.com/v3/sdk/authentication/session-sigs/auth-methods/web-authn)
