export default function Resolver() {

    return fetch(
        `https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json`,
    )
        .then(res => res.json())
        .then(({ components }) => components.schemas.account.description)
}
