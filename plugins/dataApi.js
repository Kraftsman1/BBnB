export default function (context, inject) {
    const appId = 'TJVWH921X9'
    const apiKey = '36ae7f88b4b6d996642d95723a7c8693'

    inject('dataApi', {
        getHome
    })

    async function getHome(homeId) {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers: {
                'X-Algolia-API-Key': apiKey,
                'X-Algolia-Application-Id': appId,
            }
        })
        const json = await response.json()
        return json
    }
}