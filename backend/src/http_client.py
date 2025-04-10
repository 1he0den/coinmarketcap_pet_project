from aiohttp import ClientSession


class HttpClient:
    def __init__(self, base_url: str, api_key: str):
        self._session = ClientSession(
            base_url=base_url, 
            headers = {
                'X-CMC_PRO_API_KEY': '36d30286-4594-47a7-8b6f-6ebedf29e672', 
            }
        )






class CMCHTTPClient(HttpClient):
    async def get_listings(self):
        async with self._session.get("/v1/cryptocurrency/listings/latest") as resp:
            result = await resp.json()
            return result["data"]
        
    async def get_currency(self, currency_id: int):
        async with self._session.get(
            "/v2/cryptocurrency/quotes/latest",
            params = {"id": currency_id},
            ) as resp:
            result = await resp.json()
            return result["data"][str(currency_id)]
        
