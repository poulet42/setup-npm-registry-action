# Setup NPM Registry action

This action allows you to authenticate to a custom registry using basic auth directly on CI.

## Inputs

### `url`

**Required** The registry URL

### `auth`

**Required** The base64-encoded credentials for your registry

You can generate this string by running:

```
echo -n "my-username:my-password" | base64
```

## Example usage

```yaml
uses: poulet42/setup-npm-registry-action@v1
with:
  url: "https://my-registry.com/"
  auth: "abcd1234"
```
