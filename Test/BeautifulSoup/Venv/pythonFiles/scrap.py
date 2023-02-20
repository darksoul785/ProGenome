import requests
from bs4 import BeautifulSoup as bs

website = 'http://subslikescript.com/movie/Titanic-120338'

result = requests.get(website)
content = result.text
soup = bs(content,'lxml')

box = soup.find('article',class_='main-article')
title = box.find('h1').get_text()

transcript = box.find('div', class_='full-script')
transcript = transcript.get_text(strip=True, separator=' ')

with open(f'{title}.txt','w') as file:
    file.write(transcript)

print(soup.prettify())
print(title)
print(transcript)

