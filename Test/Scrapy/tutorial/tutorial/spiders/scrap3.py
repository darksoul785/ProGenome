import scrapy
import json

class QuotesSpider(scrapy.Spider):
    name = 'SpiderWeb'
    allowed_domains = ['quotes.toscrape.com']
    page = 1
    start_urls = ['https://quotes.toscrape.com/api/quotes?page=1']

    def parse(self, response):
        data = json.loads(response.text)
        for SpiderWeb in data ["quotes"]:
            yield {"quote":SpiderWeb["text"]}
        if data ["has next"]:
            self.page += 1
            url = f"https://quotes.toscrape.com/api/quotes?page={self.page}"
            yield scrapy.Reques(url=url, callback=self.parse)